+++
title = "Discover"
+++

### Discover

This operation is used to send to another MQTT client a request to enable all datastreams provided by the device that
owns that client. When the request was processed by the remote device, ODA expects that a message enabling all the datastreams
was send by the remote device.

This operations will send the request message serialized in CBOR format to a specific topic selected by configuration.

#### Dependencies

* [Commons]({{< ref "infrastructure/core.md" >}}): Required to provide the commons utils, the Operation Discover API and the basic APIs to register the service.
* [Operation API]({{< ref "_index.md" >}}): Provides the api of the operation and the enums of the result code.
* [Comms MQTT]({{< ref "infrastructure/comms.md#mqtt" >}}): Provides the classes to use the mqtt client.

#### Configuration

 To configure Discover Operation module, a file named _es.amplia.oda.operation.discover.cfg_ must be created with the next parameters:

* __brokerURI__:_Required parameter_. Direction of mqtt broker where the client have to connect.
* __clientId__:_Random if not specified_. Id of the client that the operation will create to do the operation. Must to be different
that the MQTT client id of the MQTT connector if it's present.
* __discoverTopic__:_Required parameter_. Topic where the another MQTT client expects that the discovery request will be sent.

#### Trace

The trace send by the third system (e.g. OpenGate) to the ODA to do this operation is like this:

'{"operation":{"request":{"timestamp":1557306193823,"deviceId":"aDevice","name":"DISCOVER","parameters":[],"id":"73da9ff8-15a9-4e9a-9b2d-b6e5efbc856b"}}}'
