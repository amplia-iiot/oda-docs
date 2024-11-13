+++
title = "Read data from OPCUA devices"
weight = 6
+++

## Read data from an OPCUA device

ODA allows to read data from an OPC UA device using these bundles:

* es.amplia.oda.datastreams.opcua
* es.amplia.oda.hardware.opcua
* es.amplia.oda.service.scadatables

We will explain how to configure these bundles to connect to the device and to read data from it.

There are two working modes to retrieve data:
* subscription - default mode. We subscribe to the data we want to receive, the server stores the data and sends it when indicated. When the data arrives at ODA it is published immediately.
* polling - additional mode. We send a request to the server each time we want to retrieve data. This data goes trought the regular path in ODA (poller - StateManager - collector - dispatcher).

### Subscription mode

The first step is to configure the connection with the device. This is defined in the configuration of hardware bundle (es.amplia.oda.hardware.opcua.cfg):

```properties
url=opc.tcp://opcua.nl:4840
subscription.publish=10000
subscription.list=1;6057;5000|1;6192;5000|1;6159;5000
```
The url parameter indicates the url of the OPC UA server to connect to.
The subscription.publish parameter indicates how often (in milliseconds) the OPC UA server send us the data in subscription mode.
The subscription.list indicates the data we want to retrieve from the OPC UA server with the format:

    namespaceIndex1;nodeId1;samplingInterval1|namespaceIndex2;nodeId2;samplingInterval2| ....

Sampling interval indicates how often we want a value of that nodeId (that it is stored in the server) and it is sent to us when subscription.publish is met.

Example:

    subscription.publish = 60 seconds
    sampling interval = 5 seconds
    The server will store a value of the data indicated each 5 seconds and when 60 seconds pass, it will send us 12 values (of the last 60 seconds).


### Polling mode

This is an additional mode to subscription mode. Subscription mode can't be disabled.
To configure polling mode we only need to configure ODA poller bundle with the datastreamIds defined in ScadaTables bundle configuration.
The data recollected trought poller pass trough StateManager and follows the same path trough ODA bundles as other data until it is published.

### Translation

Once we have defined the data we want to retrieve, we have to indicate the datastreamId and deviceId to assign to this data. This is defined in the ScadaTable bundle (es.amplia.oda.service.scadatables.cfg) with the format:

```properties
*,6057 = datastream:BombaActiva,device:testDevice1
*,6192 = datastream:AlarUndervoltage,device:testDevice2
*,6159 = datastream:AlarDispProteccionTermica,device:testDevice1
```

Every line represents an element read from the OPC UA device. The format is :

```properties
*, address = datastream: datastreamId, feed: feed, device: deviceId
```

* The address indicates the address where the value is stored in the OPC UA device.

* The datastreamId indicates the Id of the datastream assigned to the value read.

* The device indicates the Id of the device assigned to the value read.

* The feed is the value the field feed will take in the event published to OpenGate
