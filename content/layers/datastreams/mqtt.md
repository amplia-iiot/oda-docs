+++
title = "MQTT"
+++

### MQTT

This datastreams corresponds to the enabling/disabling, writing and reading of datastreams allocated into another application
that communicates with the ODA through MQTT protocol.

Unlike the other datastreams, this doesn't register the datastreams handled by configuration. This datastream configuration
contains various topics in which the mqtt communication is made and where the module will subscribe when connection is achieved,
having a topic for each function. To register a datastream, a message have to be sent to the enable datastream topic with
the device id and the datastream id, i.e. to enable a datastream with id myDatastreamId of the device with id myDeviceId,
we have to send a message to the topic oda/enable/myDeviceId/myDatastreamId.

{{% notice style="primary" %}}
The explained format is common in all the topics for all the functions. To operate on a datastream, we use the next topic format:

```properties
expectedTopic/deviceId/datastreamId
```

{{% /notice %}}

[To access source code click here](https://github.com/amplia-iiot/oda/tree/master/oda-datastreams/mqtt).

#### Dependencies

This module requires the following modules:

* __[MQTT Comms]({{< ref "infrastructure/comms.md#mqtt" >}})__: Provide an implementation of MQTT Client Factory that the datastream
module need to connect to the MQTT broker to provide information of each datastream and allow the operations.
* __[CBOR Serializer]({{< ref "infrastructure/services.md#serialization" >}})__: Needed to transform the incoming messages to be readables by the modules and to serialize the outgoing payloads.
* __Event Publisher__: Used to handle the incoming events and send it.

#### Configuration

To configure I2C Datastream module, a file named _es.amplia.oda.datastreams.mqtt.cfg_ must be created with the next parameters:

* __brokerURI__: _Required parameter_. Direction where the MQTT client have to connect.
* __clientId__: _selected at random by default_. Identifier that the module client will have to connect to the broker
* __enableDatastreamTopic__: _Required parameter_. Topic where ODA expects the enables messages to be sent.
* __disableDatastreamTopic__: _Required parameter_. Topic where ODA expects the disables messages to be sent.
* __eventTopic__: _Required parameter_. Topic where ODA expects the events messages to be sent.
* __readRequestTopic__: _Required parameter_. Topic where ODA will send the request of reading operations.
* __readResponseTopic__: _Required parameter_. Topic where ODA expects the responses of read operations to be sent.
* __writeRequestTopic__: _Required parameter_. Topic where ODA will send the request of writing operations.
* __writeResponseTopic__: _Required parameter_. Topic where ODA expects the responses of write operations to be sent.
* __lwtTopic__: _Required parameter_. Topic where ODA expects the Last Will messages of another devices clients to be sent.

_es.amplia.oda.datastreams.mqtt.cfg_. will have a similar format to:

```properties
brokerURI=tcp://localhost:1883
clientId=oda
enableDatastreamTopic=oda/enable
disableDatastreamTopic=oda/disable
eventTopic=oda/event
readRequestTopic=oda/operation/read/request
readResponseTopic=oda/operation/read/response
writeRequestTopic=oda/operation/write/request
writeResponseTopic=oda/operation/write/response
lwtTopic=oda/lwt
```

{{% notice style="primary" %}}
Using the previous configuration example, ODA will use the next topics for the datastream "_tempInCelsius_" of the device "_thermoDev_":

| Function        | Topic used by oda                                    |
|:---------------:|:----------------------------------------------------:|
| enable          | oda/enable/thermoDev/tempInCelsius                   |
| disable         | oda/disable/thermoDev/tempInCelsius                  |
| event           | oda/event/thermoDev/tempInCelsius                    |
| readRequest     | oda/operation/read/request/thermoDev/tempInCelsius   |
| readResponse    | oda/operation/read/response/thermoDev/tempInCelsius  |
| writeRequest    | oda/operation/write/request/thermoDev/tempInCelsius  |
| writeResponse   | oda/operation/write/response/thermoDev/tempInCelsius |
| lwt             | oda/lwt/thermoDev/tempInCelsius                      |
{{% /notice %}}
