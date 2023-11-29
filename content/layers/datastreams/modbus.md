+++
title = "MODBUS"
+++

### MODBUS

This Datastream module enable to register the datastreams of [Modbus Hardware module]({{< ref "../hardware/modbus.md" >}}).

This datastreams corresponds to the inputs/outputs obtained through modbus protocol.

[To access source code click here](https://github.com/amplia-iiot/oda/tree/master/oda-datastreams/modbus).

#### Dependencies

This module requires the following modules:

* __[ModBus Hardware]({{< ref "../hardware/modbus.md" >}})__: Provide an implementation of ModBus Master that the datastream module need to connect to the
bus and collect the information of each datastream.

#### Configuration

To configure ModBus Datastream module, a file named _es.amplia.oda.datastreams.modbus.cfg_ must be created with the next parameters
for each input channel that you want to register:

* __datastreamId__: _Required parameter_. The identifier name of the datastream.
* __deviceId__: _Required parameter_. The device identifier name that contents the datastream. It also indicates the data needed to connect with device (defined in modbus hardware configuration file).
* __datastreamType__: _Required parameter_. Name of the Java class that is the datastream. Allowed classes are: _Bit, Boolean,
 Short, Integer, Long, Float, Double, Bytes ._
* __slaveAddress__: _null if not present_. Direction of the device in modbus.
* __dataType__: _Required parameter_. ModBus type of the data recollected from the modbus direction. Allowed classes are:
_INPUT_DISCRETE, COIL, INPUT_REGISTER, HOLDING_REGISTER_
* __dataAddress__: _null if not present_. Direction of the specific data controlled by datastream inside the device.

_es.amplia.oda.datastreams.modbus.cfg_ will have a similar format to:

```properties
light=datastreamType:Long,slaveAddress:1,dataType:INPUT_DISCRETE,dataAddress:255
temp,testPi=datastreamType:Double,slaveAddress:2,dataType:INPUT_REGISTER,dataAddress:100
```
