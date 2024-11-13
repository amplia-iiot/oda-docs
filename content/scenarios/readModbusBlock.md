+++
title = "Read N Modbus registers"
weight = 5
+++

## Read N Modbus registers in a single request

ODA allows to read data from a Modbus device using these bundles:

* es.amplia.oda.datastreams.modbus
* es.amplia.oda.hardware.modbus

The bundle es.amplia.oda.hardware.modbus defines the data needed to connect with the device:

```properties
type=TCP
timeout=1000
reconnect=true
connections=SSAA51,127.0.0.1,5803,Saci;
```

In this example we are configuring a TCP connection with a 1000 miliseconds response timeout with reconnections enabled to a device called SSAA51 in IP Address 127.0.0.1, port 5803 and manufacturer Saci.

The bundle es.amplia.oda.datastreams.modbus defines the data we want to retrieve from the Modbus devices:

```properties
tensA;SSAA51=datastreamType:Float,slaveAddress:3,dataType:INPUT_REGISTER,dataAddress:6
```
In this example we are retrieving the data in modbus starting register 6, from slave address 3 from device SSAA51. The data is stored in the modbus device as INPUT_REGISTER.
The data retrieved from modbus is a Float (which consits of two modbus registers) and the value retrieved will be assigned to the datastreamId tensA.

In the normal behaviour, the bundle makes a modbus request for each value we want to retrieve. When we want to retrieve N values this will be equal to N modbus request to the device. 

To avoid the high number of requests sent to the modbus device, we can configure a 'block' datastream request to retrieve N registers from a single modbus request.
To configure a 'block' request we must stablish the datastreamType to List and indicate the number of registers we want to retrieve in the parameter numRegisters:

```properties
block;SSAA51=datastreamType:List,slaveAddress:1,dataType:INPUT_REGISTER,dataAddress:0,numRegisters:100
```
In this example we are retrieving the registers from address 0 to address 99.
The data retrieved trough a 'block' request is saved in a cache, not returned right away. If we want to retrieve the data from the cache we must tell the bundle how to interpret the modbus registers. In the same config file (es.amplia.oda.datastreams.modbus) we define the datastreams as if we were making a single request but we indicate that we want to read from the cache:

```properties
tensA;SSAA51=datastreamType:Float,slaveAddress:3,dataType:INPUT_REGISTER,dataAddress:6,readCache:true
```
With this configuration the data will be read from the cache and the result will have the timestamp of when the data was read from the modbus device (and inserted in the cache).

We can have more than one block request in case we don't need to read all registers, only some range of address or the same range but from different types:

```properties
block1;SSAA51=datastreamType:List,slaveAddress:1,dataType:INPUT_REGISTER,dataAddress:0,numRegisters:100
block2;SSAA51=datastreamType:List,slaveAddress:1,dataType:HOLDING_REGISTER,dataAddress:0,numRegisters:100
block3;SSAA51=datastreamType:List,slaveAddress:1,dataType:HOLDING_REGISTER,dataAddress:1380,numRegisters:100
```


### Limits

The Modbus protocol establishes a maximum of registers that can be read in a single request depending of the type of the data. We have set the limits a little lower than the protocol indicates:
* INPUT_REGISTER - 120 registers per request
* HOLDING_REGISTER - 120 registers per request
* INPUT_DISCRETE - 1900 registers per request
* COILS - 1900 registers per request

This limits indicate the number of request that will be done to the device to get all registers described in a block. For example, if we want to retrieve 400 HOLDING_REGISTER values we will have 3 requests of 120 values and a fourth request of 40 values.

### Special cases

* If we want to retrieve from cache a value that has not been read by a block request (and put in the cache), the value returned will be null.
* If one of the requests that conform the block fails, all values of that request will be set to null in the cache. For example, we want to read 200 holding registers, this will be a request of 120 registers and another request of 80 registers. If the second request fails we will have in cache the values of the first 120 registers but from 120 to 200 we will have null values.
* If we want to retrieve from cache a value that is formed by two modbus registers, the registers must have the same datetime. If they don't match, it means that they were read in different moments and the value is not valid and no value will be retrieved.