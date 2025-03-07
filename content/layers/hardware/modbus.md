+++
title = "ModBus"
+++

### ModBus

Implementation of the library j2mod to give an access to devices connected through modbus.
This is the hardware module that give support to Modbus Datastreams.

[To access source code click here](https://github.com/amplia-iiot/oda/tree/master/oda-hardware/modbus).

#### Dependencies

This module requires the following modules:

* __[Commons]({{< ref "infrastructure/core.md" >}})__: Provide the ModBus APIs, exceptions and types and the basic APIs to register the service.

#### Configuration

To configure ModBus Hardware module, a file named _es.amplia.oda.hardware.modbus.cfg_ must be created with the next parameters:

* __type__: _Required data_. Type of modbus connection. Allowed modbus types are TCP, UDP, Serial.
* __connections__: _Required data for UDP and TCP_. Indicates the devices and the data needed to connect with them alongside other needed info like the manufacturer.
Allows multiple devices from different manufacturers with the format : deviceId1,ipAddress1,port1,manufacturer1;deviceId2,ipAddress2,port2,manufacturer2;etc
* __timeout__: _Required data for UDP and TCP_. Time in seconds that the modbus hardware will wait until do a timeout if the master slave doesn't respond.
* __reconnect__: _Required data for TCP_. If reconnect = true, every time we request a value from a device, a new conenction is created. If reconnect = false it will mantain the same connection for all the session. If connection is lost, the next time we request a value it will create a new connection.
* __ports__: _Required data for serial_. Indicates the name of the serial port (tty) and the deviceId and manufacturer associated. Allows multiple devices with the format : portName1,deviceId1,manufacturer1;portName2,deviceId2,manufacturer2;etc
* __baudRate__: _Required data for serial_. Baud Rate of the connection. 9600, 38400 or 115200.
* __flowControlIn__: _Required data for serial_. Flow Control of the input of connection.
* __flowControlOut__: _Required data for serial_. Flow Control of the output of connection.
* __databits__: _Required data for serial_. Data bits of the connection. 5, 6, 7 or 8.
* __stopbits__: _Required data for serial_. Stop bits of the connection. 1 or 2.
* __parity__: _Required data for serial_. Parity type of the connection. 0 is NONE parity, 1 is ODD parity, 2 is EVEN parity,
3 is mark parity and 4 is SPACE parity.
* __encoding__: _Required data for serial_. Encoding of the serial connection communication. E.g. ascii or rtu.
* __echo__: _Required data for serial_. Enable echo on the connection (show send data from local to the slave).

_es.amplia.oda.hardware.modbus.cfg_ will have a similar format to:

```properties
type=UDP
timeout=30
connections=deviceId,localhost,30,manufacturer
```

```properties
type=TCP
timeout=30
reconnect=true
connections=deviceId,localhost,30,manufacturer
```

```properties
type=Serial
ports=ttyUSB0,deviceId1,manufacturer1
baudRate=115200
flowControlIn=1
flowControlOut=1
databits=8
stopbits=1
parity=0
encoding=ascii
echo=true
```
