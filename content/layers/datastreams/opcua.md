+++
title = "OPC UA"
+++

### OPC UA

This Datastream module enable to register the datastreams of [OPC UA Hardware module]({{< ref "../hardware/opcua.md" >}}).

This datastreams corresponds to the inputs/outputs obtained through opc ua protocol.

[To access source code click here](https://github.com/amplia-iiot/oda/tree/master/oda-datastreams/opcua).

#### Dependencies

This module requires the following modules:

* __[OPC UA Hardware]({{< ref "../hardware/opcua.md" >}})__: Provide an implementation of OPC UA that the datastream module need to connect to the
server and collect the information of each datastream.
* __[Commons]({{< ref "infrastructure/core.md" >}})__: Provide the OPC UA APIs, exceptions and types and the basic APIs to register the service.

#### Configuration

This module doesn't require configuration
