+++
title = "WebSocket"
+++

### WebSocket

This connector enable communication via [WebSocket Protocol](https://github.com/amplia-iiot/oda/tree/master/oda-connectors/websocket).

Allows to send data to the OpenGate platform and receive operations from it.

#### Dependencies

This module requires the following modules:

* __[Core commons]({{< ref "../../infrastructure/core.md" >}})__: Provides many interfaces that this module will use
* __[Device Info Provider]({{< ref "../datastreams/deviceinfo.md" >}})__: Needed to know the Device Id of the device that are running the Agent and the API Key to access to OpenGate.
Both data are required to achieve a connection with OpenGate and transferred data will have the deviceId in its metadata.
* __[Dispatcher]({{< ref "../operationdispatcher/_index.md" >}})__: Needed to process the payloads and de/serialize its content.

#### Configuration

To configure WebSocket connector, a file named _es.amplia.oda.connector.websocket.cfg_ must be created with the next parameters:

* __host__: _Required parameter_. Specify the direction of the third system the connector have to send the data.
'localhost' is a good host to do tests with.
* __port__: _80 by default_. Port though the connector have to connect to the host.
* __path__: _Required parameter_. The general path of the route used to create the connection with third system.
* __connectionTimeout__: _30 by default_. Time in seconds that the client created by the connector will wait to throw a timeout.
* __keepAliveInterval__: _180 by default_. Time in seconds that the client created by the connector will send a KeepAlive message to notify to the WebSocket server.

In other words, _es.amplia.oda.connector.websocket.cfg_ will have the content:

```
host=localhost
port=80
path=commonPathToAllSites
connectionTimeout=30
keepAliveInterval=180
```

And can run with the following minimal content:

```
host=localhost
generalPath=commonPathToAllSites
```

#### Source Code

You can check the source code [here](https://github.com/amplia-iiot/oda/tree/master/oda-connectors/websocket)