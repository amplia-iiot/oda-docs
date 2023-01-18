+++
title = "JDK DIO"
+++

### JDK DIO

Implementation of the library JDK DIO to give an access to digital in/outputs.
This is the hardware module that give support to GPIO Datastreams.

[To access source code click here](https://github.com/amplia-iiot/oda/tree/master/oda-hardware/jdkdio).

#### Dependencies

This module requires the following modules:

* __[Commons]({{< ref "infrastructure/core.md" >}})__: Provide the GPIO APIs, exceptions and types and the basic APIs to register the service.

#### Configuration

To configure JDK DIO Hardware module, a file named _es.amplia.oda.hardware.jdkdio.cfg_ must be created with the next parameters
for each input channel that you want to register:

* __index__: _Required parameter_. Index of the pin.
* __deviceType__: _"" (void String) by default_. Type of this pin. gpio.GPIOPin for specify an digital pin.
* __name__: _Required parameter_. Unique name for the pin.
* __direction__: _OUTPUT by default_. Specify if pin is open as in or out. Allowed directions are INPUT or OUTPUT.
* __mode__: _OPEN_DRAIN by default_. Specify the mode of the pin. Allowed modes are PULL_UP, PULL_DOWN, OPEN_DRAIN and PUSH_PULL.
The first two are modes for OUTPUT pins and the last two are for INPUT pins.
* __trigger__: _NONE by default_. Trigger the pin changes the value. Allowed values are NONE, FALLING_EDGE, RISING_EDGE, BOTH_EDGES,
LOW_LEVEL, HIGH_LEVEL, BOTH_LEVELS. For the outputs pins, as they doesn't change value by themselves, the only one trigger valid is NONE.
* __activeLow__: _false by default_. ActiveLow option (reverses the values of the pin). True if activeLow is enabled.
* __initialValue__: _false by default_. Specify the initial value of the pin. On input pins this option can be changed quickly.

_es.amplia.oda.hardware.jdkdio.cfg_ will have a similar format to:

```
1=deviceType:gpio.GPIOPin,name:lightOn
4=deviceType:gpio.GPIOPin,name:lightHigh,direction:input,mode:PUSH_PULL,trigger:LOW_LEVEL,activeLow:false,initialValue:true
```
