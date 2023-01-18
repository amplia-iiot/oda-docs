+++
title = "Layers"
weight= 3
+++

ODA is composed of the following layers:

* [__Connectors__]({{< ref "connectors/_index.md" >}}): Send and received data to/from the Internet at a low level of abstraction (byte array).
* [__Operation Dispatcher__]({{< ref "operationdispatcher/_index.md" >}}): Converts from low level data into high level representation to process operations and send the responses.
* [__Event Dispatcher__]({{< ref "eventdispatcher/_index.md" >}}): Converts data events into a low level data representation to send it through the connectors.
* [__Operations__]({{< ref "operations/_index.md" >}}): Implements a specific operation inside the device.
* [__State Manager__]({{< ref "statemanager/_index.md" >}}): Stores the device data state in the current moment.
* [__Rule Engine__]({{< ref "ruleengine/_index.md" >}}): Triggers custom business logic rules over the device data.
* [__Datastreams__]({{< ref "datastreams/_index.md" >}}): Abstracts the data sources to ease the access to read and write data from the upper layers.
* [__Hardware__]({{< ref "hardware/_index.md" >}}): Abstracts the hardware specifics.

![ODA layers](/img/layers.drawio.svg)
