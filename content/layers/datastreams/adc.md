+++
title = "ADC"
+++

### ADC

This Datastream module enable to register the datastreams of [Diozero Hardware module]({{< ref "../hardware/diozero.md" >}}).

This datastreams corresponds to the Analog Input Pins of the device.

[To access source code click here](https://github.com/amplia-iiot/oda/tree/master/oda-datastreams/adc).

#### Dependencies

This module requires the following modules:

* __[Dio Zero]({{< ref "../hardware/diozero.md" >}})__: Provide an implementation of ADC Service that the datastream module need to provide information of each datastream.
* _Event Publisher_: Used to handle the incoming events and send it.

#### Configuration

To configure ADC Datastream module, a file named _es.amplia.oda.datastreams.adc.cfg_ must be created with the next parameters
for each input channel that you want to register:

* __channelPin__: _-1 by default_. Specify the identifier of the Analog input channel.
* __getter__: _true by default_. Enable the option to use this channel as datastream getter (have to check the value manually
every time that want to know actual value).
* __event__: _false by default_. Enable the option to use this channel as datastream event (automatically will send the
to the Event Handlers when a event is generated).
* __min__: _0.0 by default_. Specifies the value that datastream will take when the hardware channel value is in the minimum of the range.
* __max__: _1.0 by default_. Specifies the value that datastream will take when the hardware channel value is in the maximum of the range.

_es.amplia.oda.datastreams.adc.cfg_ will have a similar format to:

```
1=getter:true,event:true,min:0,max:10
2=getter:true,event:false,min:1,max:18
3=getter:false,event:true,min:-10,max:40
4=getter:false,event:false,min:0,max:0
```
