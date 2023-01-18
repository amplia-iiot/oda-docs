+++
title = "COAP"
+++


This connector enables communication via [CoAP Protocol](https://github.com/amplia-iiot/oda/tree/master/oda-connectors/coap).

Only allows to send data to the OpenGate platform. Operations can't be received.

## Dependencies

This module requires the following modules:

* __[Core Commons]({{< ref "infrastructure/core.md" >}})__: Provides many interfaces that this module will use.
* __[Device Info Provider]({{< ref "layers/datastreams/deviceinfo.md" >}})__: Needed to know the Device Id of the device that are running the Agent, and the API Key to access to OpenGate.
Both data are required to achieve a connection with OpenGate and transferred data will have the deviceId in its metadata.
* __[AT Server]({{< ref "layers/hardware/atserver.md" >}})__: If connector is configured as AT type connector, this is necessary to use AT commands in the connector.

## Configuration

To configure CoAP connector, a file named _es.amplia.oda.connector.coap.cfg_ must be created with the next parameters:

* __type__: _UDP Connector by default_. The available options are: UDP, DTLS, AT. Specify the type of connector that CoAP connector will be.
* __host__: _Required data_. Specify the direction of the third system the connector have to send the data.
* __port__: _Automatically search a default_. Port though the connector have to connect to the host.
* __path__: _Required data_. Main section of the URI where the connector have to handle the data.
* __provisionPath__: _Required data_. Last section of the URI.
* __timeout__: _30 by default_. Time connector will wait to achieve the connection.
* __messageProtocolVersion__: _1.0.0 by default_. Version of the protocol used to send the data.
* __localPort__: _4123 by default_. Port Of th current device where the connector will connect.
* __keyStoreType__: _"JKS" by default_. Is the type of the KeyStore that the connector will use.
* __keyStoreLocation__: _null if not specified_, _Required if connector type is DTLS_. Directory where the file of keys will be stored.
* __keyStorePassword__: _null if not specified_, _Required if connector type is DTLS_. Password to access to the KeyStore.
* __clientKeyAlias__: _"client" by default_. Alias used to find in KeyStore and TrustStore the key needed to connect.
* __trustStoreType__: _"JKS" by default_. Is the type of the TrustStore that the connector will use.
* __trustStoreLocation__: _null if not specified_, _Required if connector type is DTLS_. Directory where the file of keys will be stored.
* __trustStorePassword__: _null if not specified_, _Required if connector type is DTLS_. Password to access to the TrustStore.
* __trustedCertificates__: _null if not specified_, _Required if connector type is DTLS_. Names of certificates separated by commas.

The file _es.amplia.oda.connector.coap.cfg_ can have several formats:

```properties
type=UDP
host=localhost
path=v80/devices
provisionPath=collect/iot
```

```properties
type=DTLS
host=localhost
path=v80/devices
provisionPath=collect/iot
keyStoreLocation=path/to/keyStore
keyStorePassword=passToAccess
trustStoreLocation=path/to/trustStore
trustStorePassword=passToAccess
trustedCertificates=certificates,separated,by,commas
```

```properties
type=AT
host=localhost
path=v80/devices
provisionPath=collect/iot
```

## Source Code

You can check the source code [here](https://github.com/amplia-iiot/oda/tree/master/oda-connectors/coap)
