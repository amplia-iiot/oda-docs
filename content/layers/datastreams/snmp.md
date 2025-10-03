+++
title = "SNMP"
+++

### SNMP

This Datastream module enable to register the datastreams of [SNMP Hardware module]({{< ref "../hardware/snmp.md" >}}).

This datastreams corresponds to the inputs/outputs obtained through snmp protocol.

[To access source code click here](https://github.com/amplia-iiot/oda/tree/master/oda-datastreams/snmp).

#### Dependencies

This module requires the following modules:

* __[SNMP Hardware]({{< ref "../hardware/snmp.md" >}})__: Provide an implementation of SNMP that the datastream module need to connect to devices and collect the information of each datastream.
* __[Commons]({{< ref "infrastructure/core.md" >}})__: Provide the SNMP APIs, exceptions and types and the basic APIs to register the service.

#### Configuration

To configure SNMP Datastream module, a file named _es.amplia.oda.datastreams.snmp.cfg_ must be created with the next parameters for each OID that you want to register:

* __oid__: _Required parameter_. OID of the variable in device MIB.
* __deviceId__: _Required parameter_. The device identifier name that stores the OID. It also indicates the data needed to connect with device (defined in snmp hardware configuration file).
* __dataType__: _Required parameter_. Type of the data stored in the OID.
* __datastreamId__: _Required parameter_. The identifier name of the datastream.
* __feed__: _null if not present_. Feed to associate to the datastreamId.


_es.amplia.oda.datastreams.snmp.cfg_ will have a similar format to:

```properties
1.3.6.1.2.1.1.7.0,testSnmpDeviceV3=dataType : Integer, datastream : snmpInteger, feed : snmp
1.3.6.1.2.1.1.6.0,testSnmpDeviceV3=dataType : String, datastream : snmpString, feed : snmp
```
