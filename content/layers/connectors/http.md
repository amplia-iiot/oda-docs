+++
title = "HTTP"
+++

### HTTP

This connector enable communication via [HTTP Protocol](https://github.com/amplia-iiot/oda/tree/master/oda-connectors/http).

Only allows to send data to the OpenGate platform. Operations can't be received.

#### Dependencies

This module requires the following modules:

* __[Core Commons]({{< ref "../../infrastructure/core.md" >}})__: Provides many interfaces that this module will use.
* __[Device Info Provider]({{< ref "../datastreams/deviceinfo.md" >}})__: Needed to know the Device Id of the device that are running the Agent and the API Key to access to OpenGate.
Both data are required to achieve a connection with OpenGate and transferred data will have the deviceId in its metadata.

#### Configuration

To configure HTTP connector, a file named _es.amplia.oda.connector.http.cfg_ must be created with the next parameters:

* __host__: _Required parameter_. Specify the direction of the third system the connector have to send the data.
'localhost' is a good host to do tests with.
* __port__: _80 by default_. Port though the connector have to connect to the host.
* __generalPath__: _Required parameter_. General path of the URL where the connector have to send data.
* __collectionPath__: _Required parameter_. Last section of the URL where the connector have to send data.
* __compressionEnabled__: _false by default_. Specify if the data sending have to be encoded to GZIP to be sent to the third system.
* __compressionThreshold__: _512 by default_. Specify what size have to has the data sent to third system to be encoded if compressionEnabled is true.

The format of URL used to send data is _.../'generalPath'/'deviceId''collectionPath'_

In other words, _es.amplia.oda.connector.http.cfg_ will have the content:

```
host=localhost
port=80
generalPath=commonPathToAllSites
collectionPath=/odaData
compressionEnabled=true
compressionThreshold=0
```

And can run with the following minimal content:

```
host=localhost
generalPath=commonPathToAllSites
collectionPath=/odaData
```

#### Source Code

You can check the source code [here](https://github.com/amplia-iiot/oda/tree/master/oda-connectors/http)
