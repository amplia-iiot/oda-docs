+++
title = "Javascript Operations"
+++

### Javascript operations

The bundle es.amplia.oda.operation.nashorn allows to execute operations in javascript using the nashorn javascript motor.


#### Dependencies

* [Commons]({{< ref "infrastructure/core.md" >}}): Required to provide the commons utils.
* [Events]({{< ref "../eventdispatcher/events.md" >}}): Required to provide the events API.
* [Operation API]({{< ref "_index.md" >}}): Provides the api of the operation and the enums of the result code.

#### Configuration

 To configure Javascript Operations module, a file named _es.amplia.oda.operation.nashorn.cfg_ must be created with the next parameters:

* __path__: _Required parameter_. Path from the main directory of the ODA to the directory where the javascript files with the operations are stored.
* __utilsPath__: _Required parameter_. Path from the main directory of the ODA to the directory where javascript files with utils for operations are stored.

_es.amplia.oda.operation.nashorn.cfg_ will have a similar format to:

```
path=jsOperations/
utilsPath=jslib/
```

### How it works

Using this bundle we can define operations using nashorn javascript motor. 

__The name of the file must be the name of the operation__

When the operation is received, the operation dispatcher of ODA will search for an operation with the name indicated between the ones registered in OSGI context, if it doesn't find any operation that matches, it will search in the javascripts registered in the path indicated by this bundle configuration.

The javascript operation must implement the method execute that is the entry point of the operation:

```
function execute(deviceId, operationId, params, ctx)
```

The parameters passed to the method execute are:
* deviceId - the deviceId for the operation
* operationId - the operation id (needed to send partial responses)
* params - the parameters needed for the operation
* ctx - a reference to the osgi context - this allows to log messages and get access to bundles registered in the osgi framework and its methods

The operation returns an operation result object (like a Java operation).

There are some javascript methods to use in javascript operations defined in file operUtils.js located in folder resources inside bundle 'oda-ruleengine api'.

When we change externally the javascript of any of the operations inside _path_ folder or any of the utils javascripts stored in _utilsPath_, all javascript operations are reloaded inside ODA to reflect the new changes.

### Osgi context (ctx)

The operations javascript engine includes a reference to the osgi context to allow to do some things inside javascript operations.

This context is defined in class [OsgiContext](https://github.com/amplia-iiot/oda/blob/master/oda-core/commons/src/main/java/es/amplia/oda/core/commons/utils/OsgiContext.java) in package package es.amplia.oda.core.commons.utils inside bundle oda-core.commons 

#### Retrieve a bundle instance registered in OSGI framework

Example getting an http client from osgi context:

```
function getHttpClientInsecure(ctx) {
    // get http client factory from OSGI
    var factoryBundle = ctx.getBundle("es.amplia.oda.core.commons.http.HttpClientFactory");
    if (factoryBundle == null) {
        ctx.logError("No HTTP Client Factory bundle retrieved from OSGI");
        return null;
    }

    // Create client insecure
    return factoryBundle.createHttpClient(true);
}
```
Once we have a reference to the bundle instance we can call its method like inside Java.

#### Retrieve datastreamGetter/datastreamSetter

Ctx class has methos to retrieve a datastreamGetter or datastreamSetter registeres in OSGI Context directly

```
public List<DatastreamsGetter> getGetters(String device, String datastreamId) {
    return datastreamsGettersFinder.getGettersOfDevice(device).stream().filter(getter -> getter.getDatastreamIdSatisfied().equals(datastreamId)).collect(Collectors.toList());
}
 ```   

```
public List<DatastreamsSetter> getSetters(String device, String datastreamId) {
    return new ArrayList<>(datastreamsSettersFinder.getSettersSatisfying(device, Collections.singleton(datastreamId)).getSetters().values());
}
``` 

Once we have retrieved these we can directly call in javascript to methods get or set

```
var modbusGetter = ctx.getGetter("modbusEmulator", "modbusWrite");
var newValue = modbusGetter.get("modbusEmulator");
```

#### Publishing datapoints

We can publish datapoints using context method publish (to publish events immediately) or using method collect (to pass events to state manager as it came from the poller).

We create an ODA event using this function included in operUtils.js file:

```
function createOdaEvent(deviceId, datastreamId, feed, at, value){
	var event = {};
	event.datastreamId = datastreamId;
	event.deviceId = deviceId;
	event.path = null;
	event.feed = feed;
	event.at = at;
	event.value = value;
	return event;
}
```

We publish the datapoint created with this context function:

```
ctx.publish([createOdaEvent(deviceId, "device.software", null, null, responseParsed["firmwareVersion"])]);
```

#### Logging

OsgiContext class also includes methods to log into different log levels as it if was java

```
public void logInfo(String msg, Object...objects) { LOGGER.info(msg, objects);}
```
```
ctx.logError("Returned response code {}", responseStatusCode);
```

