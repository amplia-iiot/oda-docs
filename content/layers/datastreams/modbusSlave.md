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

    Allowed values are: __Boolean, Short, Int, Long, Float, Double, List__


_es.amplia.oda.datastreams.modbusslave.cfg_ will have a similar format to:

```properties
# connections
deviceId1=type:TCP,ip:127.0.0.1,port:5020,slaveAddress:1
# translations
500,deviceId1=datastream:shortValue,feed:feed1,dataType:Short
27,deviceId1=datastream:booleanValue,feed:feed1,dataType:Boolean
364,deviceId1=datastream:floatValue,feed:feed1,dataType:Float
384,deviceId1=datastream:doubleValue,feed:feed1,dataType:Double
415,deviceId1=datastream:longValue,feed:feed1,dataType:Long
634,deviceId1=datastream:intValue,feed:feed1,dataType:Int
478-520,deviceId1=datastream:registerBlock,dataType:List
```

#### Blocks retrieval

In case we want to retrieve blocks of modbus data received without any conversion we can define a range of address. In case the modbus address of the request received is in that range, the data in the request will be assigned to the datastream indicated. 

* Example:

  * We define a range of modbus address:   

        478-520,deviceId1=datastream:registerBlock,dataType:List

  * We receive a modbus request from address 492 with the data of 50 registers

  * As address 492 is inside the range defined (between 478 and 520), the 50 registers received will be converted to a byte array and an event with the datastreamId 'registerBlock' and the byte array as value will be created.

  * It doesn't matter that the final modbus address (492 + 50 registers = 542) is outside the range defined, __the range only applies to the starting address of the request received__.

* The data passed to the event will be all the data received in the request.

* We can define N blocks with different datastreamIds as long as they don't overlap:

    ```properties
    478-520,deviceId1=datastream:registerBlock,dataType:List
    500-600,deviceId1=datastream:registerBlock2,dataType:List
    490-580,deviceId1=datastream:registerBlock3,dataType:List
    510-570,deviceId1=datastream:registerBlock4,dataType:List
    ```
    In this case an error will be registered as address range 510-570 is already covered by range 500-600 and entry 510-570 won't be registered.

 * We can define a range as thin as a single address:

    ```properties
    700-700,deviceId1=datastream:registerBlock5,dataType:List
    ```
    