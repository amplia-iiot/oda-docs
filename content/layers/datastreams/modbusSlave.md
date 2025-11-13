+++
title = "MODBUS SLAVE"
+++

### MODBUS SLAVE

This Datastream module enable to register ODA as a Modbus Slave to receive Modbus requests.

[To access source code click here](https://github.com/amplia-iiot/oda/tree/master/oda-datastreams/modbusslave).

#### Dependencies

_This module have no dependencies_

#### Configuration

To configure ModBus Datastream Slave module, a file named _es.amplia.oda.datastreams.modbusslave.cfg_ must be created with the next parameters:

For each connection:

* __deviceId__: _Required parameter_. The device identifier name that identifies the connection.
* __type__: _Required parameter_. Indicates the type of connection used. At the moment only TCP type is supported.
* __ip__: _Required parameter_. Ip Address where we are going to listen for modbus requests.
* __port__: _Required parameter_. Port where we are going to listen for modbus requests.
* __slaveAddress__: _Required parameter_. Direction of the device in modbus.

For each received modbus request that we want to translate to events:

* __dataAddress__: _Required parameter_. Modbus direction of the signal received.
* __deviceId__: _Required parameter_. The identifier of the device the signals comes from.
* __datastream__: _Required parameter_. Identifier that will be asigned to the modbus value received.
* __feed__: _Optional parameter_. Feed that will be assigned to the modbus value received. Null if not set.
* __dataType__: _Required parameter_. Java type of the data recollected from the modbus direction. 

    Allowed values are: __Boolean, Short, Int, Long, Float, Double__
    

_es.amplia.oda.datastreams.modbusslave.cfg_ will have a similar format to:

```properties
# connections
deviceId1=type:TCP,ip:127.0.0.1,port:5020,slaveAddress:1
# translations
500,deviceId1=datastream:shortValue,feed:feed1,dataType:Short
27,deviceId1=datastream:booleanValue,feed:feed1,dataType:Boolean
257,deviceId1=datastream:registerValue1,feed:feed1,dataType:Short
258,deviceId1=datastream:registerValue2,feed:feed1,dataType:Short
259,deviceId1=datastream:registerValue3,feed:feed1,dataType:Short
165,deviceId1=datastream:booleanValues,feed:feed1,dataType:Boolean
364,deviceId1=datastream:floatValue,feed:feed1,dataType:Float
384,deviceId1=datastream:doubleValue,feed:feed1,dataType:Double
415,deviceId1=datastream:longValue,feed:feed1,dataType:Long
634,deviceId1=datastream:intValue,feed:feed1,dataType:Int
```
