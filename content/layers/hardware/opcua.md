+++
title = "OPC UA"
+++

### OPC UA

Implementation of the library eclipse milo to access devices connected through OPC UA.
This is the hardware module that give support to OPC UA Datastreams.

[To access source code click here](https://github.com/amplia-iiot/oda/tree/master/oda-hardware/opcua).

#### Dependencies

This module requires the following modules:

* __[Commons]({{< ref "infrastructure/core.md" >}})__: Provide the OPC UA APIs, exceptions and types and the basic APIs to register the service.
* __[Scada Tables]({{< ref "layers/other/scadatables.md" >}})__: Provide the information of the data to read from the OPC UA server (address, datastreamID, deviceId).

#### Configuration

To configure OPC UA Hardware module, a file named _es.amplia.oda.hardware.opcua.cfg_ must be created with the next parameters:

* __url__: _Required data_. URL of the endpoint of OPC UA server
* __subscription.publish__: _Required data_. Indicates the number of miliseconds of data publishing.
* __subscription.list__: _Required data_. Indicates the data we want to retrieve with the format :
    ```namespaceIndex1;nodeId1;samplingInterval1|namespaceIndex2;nodeId2;samplingInterval2| ....```
* __user__: _Optional data_. Indicates the user to use to authenticate with the OPC UA server.
* __password__: _Optional data_. Indicates the password to use to authenticate with the OPC UA server.
* __insecure__: _Optional data_. Indicates if we want to use security in the connection with the OPC UA server.
* __certificate.file.client__: _Optional data_. Indicates the file which contains the certificate used to connect securily to the server.
* __certificate.file.publicKey__: _Optional data_. Indicates the file which contains the public key used to connect securily to the server.
* __certificate.file.privateKey__: _Optional data_. Indicates the file which contains the private key used to connect securily to the server.
* __certificate.validator.directory__: _Optional data_. Indicates the directory where certificates are stored
* __endppoint.select.index__: _Optional data_. Indicates the index of the endpoint of the OPC UA server that we want to connect to. In case it is not defined, it will try to connect to the first server returned by the discovery endpoint.

_es.amplia.oda.hardware.opcua.cfg_ will have a similar format to:

```properties
url=opc.tcp://opcua.nl:4840
subscription.publish=10000
subscription.list=1;6057;5000|1;6192;5000|1;6159;5000

user=OPCUA_user
password=testPass
insecure=true

certificate.file.client=certs/my_cert.pem
certificate.file.publicKey=certs/clientPublicKey.pem
certificate.file.privateKey=certs/my_private_key.pem
certificate.validator.directory=certs

endppoint.select.index=1
```

To determine the datastreamId of the variables read we use the ScadaTables bundle.
The configuration file _es.amplia.oda.service.scadatables.cfg_ will have a format similar to:

```properties
*,6057 = datastream:BombaActiva,device:testDevice1
*,6192 = datastream:AlarUndervoltage,device:testDevice2
*,6159 = datastream:AlarDispProteccionTermica,device:testDevice1
```