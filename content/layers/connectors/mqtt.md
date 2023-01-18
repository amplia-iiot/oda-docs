+++
title = "MQTT"
+++

### MQTT

This connector enable communication via [MQTT Protocol](https://github.com/amplia-iiot/oda/tree/master/oda-connectors/mqtt).

Allows to send data to the OpenGate platform and receive operations from it.

#### Dependencies

This module requires the following modules:

* __[Core commons]({{< ref "../../infrastructure/core.md" >}})__: Provides many interfaces that this module will use
* __[Mqtt Communications Module]({{< ref "../../infrastructure/comms.md#mqtt" >}})__: Needed to create the MQTT client that will connects
to the MQTT broker of the third system.
* __[Dispatcher]({{< ref "../operationdispatcher/_index.md" >}})__: Needed to process the payloads and de/serialize its content.
* __[Device Info Provider]({{< ref "../datastreams/deviceinfo.md" >}})__: Needed to know the Device Id of the device that are running the Agent, and the API Key to access
to OpenGate.
Both data are required to achieve a connection with OpenGate and transferred data will have the deviceId in its metadata.

#### Configuration

To configure MQTT connector, a file named _es.amplia.oda.connector.mqtt.cfg_ must be created with the next parameters:

* __host__: _Required parameter_. Specify the direction of the third system the connector have to send the data.
'localhost' is a good host to do tests with.
* __port__: _1883 by default_. Port though the connector have to connect to the host.
* __securePort__: _8883 by default_. Alternative port to connect securely.
* __secure__: _false by default_. True to connect to the secure port, false to connect to common port.
* __mqttVersion__: _MQTT_3_1_1 by default_. Available options are MQTT_3_1, MQTT_3_1_1. MQTT version that connector has to use.
* __keepAliveInterval__: _60 by default_. Interval defined by MQTT client to communicate a keep alive message before to disconnect.
* __maxInFlight__: _10 by default_. Maximum messages that can be queued to be transmitted simultaneously.
* __cleanSession__: _true by default_. To specify if the connection is persistent (false) or not (true). If clean session
is true, the broker doesn't store information or messages.
* __connectionTimeout__: _30 by default_. Time that client will wait to achieve the connection.
* __automaticReconnect__: _true by default_. If the connection fails and this option is true, enable the option to reconnect
with the broker.

* __lwt.topic__: _null if not specified_. Topic where the client will receive all Last Will messages from another clients.
Last Will messages are a pre-agreed message between the client, and the broker to send to the other clients in case of an
unexpected disconnection.
* __lwt.payload__: _null if not specified_. LWT Payload is the data that the client will agree with the broker to send to
another clients in case of connector's client be disconnected unexpectedly.
* __lwt.qos__: _1 by default_, _if topic and payload are specified, will be 1 by default_. Specify the qos of the LWT.
* __lwt.retained__: _null if not specified_, _if topic and payload are specified, will be false by default_. Specifies if
the broker will send to the another clients the LW messages even when that clients connect to the broker after the connector's
client disconnect unexpectedly.

* __keyStore.path__: _null if not specified_. Directory where the file of keys will be stored.
* __keyStore.type__: _null if not specified_, _if keyStore and trustStore path and password are specified, is JKS by default_.
The available options are: JKS, JCEKS, PKCS12, PKCS11, DKS, WINDOWS_MY, BKS. Is the type of the KeyStore that the connector will use.
* __keyStore.password__: _null if not specified_. Password to access to the KeyStore.
* __keyManager.algorithm__: _null if not specified_, *if keyStore and trustStore path and password are specified, is SunX509
by default. Available options are PKIX, SUN_X509, SUN_JSSE. Specify the algorithm used to handle the keys.
* __trustStore.path__: _null if not specified_. Directory where the file of trust keys will be stored.
* __trustStore.type__: _null if not specified_, _if keyStore and trustStore path and password are specified, is JKS by default_.
The available options are: JKS, JCEKS, PKCS12, PKCS11, DKS, WINDOWS_MY, BKS. Is the type of the TrustStore that the connector will use.
* __trustStore.password__: _null if not specified_. Password to access to the TrustStore.
* __trustManager.algorithm__: _null if not specified_, *if keyStore and trustStore path and password are specified, is SunX509
by default. Available options are PKIX, SUN_X509, SUN_JSSE. Specify the algorithm used to handle the keys.

* __topic.iot__: _Required parameter_. The topic to which the data transferred will be sent to the third-system (e.g. OpenGate).
* __topic.request__: _Required parameter_. The topic to which the operations will be sent from the third-system to the ODA for processing.
* __topic.response__: _Required parameter_. The topic to which the operations responses will be sent from the ODA to the third-system.

* __message.qos__: _1 by default_. This parameter can be 0, 1 or 2. QOS that will have the messages sent by connector's client.
QOS is the level agreed between client and broker to ensure the delivery of the message.
* __message.retained__: _false by default_. If is true, the last message sent to broker will be sent to another clients
even if those clients connects after the message was sent.

* __connection.initialDelay__: _0 by default_. Time wait by the connector's client to try the initial connection to the broker.
* __connection.retryDelay__: _300 by default_. If first try fails, time that the connector's client will wait before the next try to connect.

The file _es.amplia.oda.connector.mqtt.cfg_ could have a lot of parameters, but it can works correctly with the next parameters:

```
host=localhost
topic.request=odm/request
topic.response=odm/response
topic.iot=odm/iot
message.qos=1
```

#### Source Code

You can check the source code [here](https://github.com/amplia-iiot/oda/tree/master/oda-connectors/mqtt)
