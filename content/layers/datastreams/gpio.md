+++
title = "GPIO"
+++

### GPIO

This Datastream module enable to register the datastreams of [JDK DIO Hardware module]({{< ref "../hardware/jdkdio.md" >}}).

This datastreams corresponds to the Digital Input Pins of the device. This implementation requires the use of the sysfs
interface. This means that this module is not supported by kernels older than the version 4.4.

[To access source code click here](https://github.com/amplia-iiot/oda/tree/master/oda-datastreams/gpio).

#### Dependencies

This module requires the following modules:

* __[JDK DIO]({{< ref "../hardware/jdkdio.md" >}})__: Provide an implementation of GPIO Service that the datastream module need to provide information of each datastream.
* __Event Publisher__: Used to handle the incoming events and send it.

#### Configuration

To configure GPIO Datastream module, a file named _es.amplia.oda.datastreams.gpio.cfg_ must be created with the next parameters
for each input channel that you want to register:

* __pinIndex__: _Required parameter_. Number of the pin that correspond to the datastream.
* __datastreamId__: _Required parameter_. Identifier name of the datastream.
* __getter__: _true by default_. Enable the option to use this channel as datastream getter (have to check the value manually
every time that want to know actual value).
* __setter__: _true by default if pin is configured as OUTPUT_. Enable the option to use this channel as datastream setter
(heve to send a operation to change the value of this datastream).
* __event__: _true by default if pin is configured as INPUT and NONE trigger_. Enable the option to use this channel as
datastream getter (automatically will send the to the Event Handlers when a event is generated).

_es.amplia.oda.datastreams.gpio.cfg_ will have a similar format to:

```
## Model of configuration of jdk file
#
# datastreamId=getter:<getter>,setter:<setter>,event:<event>
#
#   getter ->       (optional) true / false
#   setter ->       (optional) true / false
#   event ->        (optional) true / false
#
4 = datastreamId:gpio4, getter:true, setter:false, event:true
5 = datastreamId:gpio5, getter:false, setter:true, event:false
6 = datastreamId:gpio6, getter:false, setter:true, event:false
```
