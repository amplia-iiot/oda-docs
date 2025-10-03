+++
title = "SNMP"
+++

### SNMP

Implementation of the library snmp4j to give an access to devices connected through snmp.
This is the hardware module that give support to SNMP Datastreams.

[To access source code click here](https://github.com/amplia-iiot/oda/tree/master/oda-hardware/snmp).

#### Dependencies

This module requires the following modules:

* __[Commons]({{< ref "infrastructure/core.md" >}})__: Provide the SNMP APIs, exceptions and types and the basic APIs to register the service.

#### Configuration

To configure SNMP Hardware module, a file named _es.amplia.oda.hardware.snmp.cfg_ must be created with the next parameters for each device that you want to register:

* __deviceId__: _Required data_. DeviceId associated to this conecction
* __ip__: _Required data_. Ip Address where the device is installed.
* __port__: _Required data_. Port where device is listening for requests.
* __listenPort__: _Required data_. Port where we listen for events sent by devices (like SNMP Traps).
* __version__: _Required data_. Indicates the version of SNMP protocol used to connect with device. Possible values are : _1, 2, 3_.

For version 1 and 2 of SNMP we must also define this parameters:

* __community__: _Required data for version 1 and 2_. Name of the community

For version 3 we must also define this parameters:

* __contextName__: _Required data for version 3_. Name assigned to the MIB of the device
* __securityName__: _Required data for version 3_. Username
* __authPassphrase__: _Required data for version 3_. Key used for authentication
* __privPassphrase__: _Required data for version 3_. Password used for privacy
* __authProtocol__: _Required data for version 3_. Protocol used for authentication. Possible values are: _MD5, SHA_
* __privProtocol__: _Required data for version 3_. Protocol used for privacy. Possible values are: _DES, 3DES, AES128, AES192, AES256_

<br>

_es.amplia.oda.hardware.snmp.cfg_ will have a similar format to:

```properties
testSnmpDeviceV1 = ip:127.0.0.1, port:1160, listenPort:1161, version:1, community:public
```

```properties
testSnmpDeviceV2 = ip:127.0.0.1, port:1162, listenPort:1163, version:2, community:public
```

```properties
testSnmpDeviceV3 = ip:127.0.0.1, port:1160, listenPort:1161, version:3, contextName: public, securityName:simulator, authPassphrase:auctoritas, privPassphrase:privatus, authProtocol: MD5, privProtocol:DES
```
