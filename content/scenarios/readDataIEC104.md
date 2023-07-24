+++
title = "Read data from IEC104 devices"
weight= 5
+++

## Read data from an IEC104 device

ODA allows to read data from an IEC104 device using these bundles:

* es.amplia.oda.datastreams.iec104
* es.amplia.oda.comms.iec104
* es.amplia.oda.service.scadatables

We will explain how to configure these bundles to connect to the device and to read data from it.

The first step is to configure the connection with the device. This is defined in the configuration of datastreams bundle (es.amplia.oda.datastreams.iec104.cfg):

```properties
pollingTime=10000
iec104DeviceId=127.0.0.1;2404;1
```

The pollingTime parameter indicates the seconds between executions of Interrogation Commands. Every x seconds, an Interrogation Command is sent to the devices defined in the configuration. When the IEC104 device receives the interrogation command, it sends all the data it has stored to ODA and stores it in a cache.

The next lines of the configuration indicates the information needed to connect with the IEC104 devices. The first element is the deviceId that will be associated to the data retrieved. The second and third elements are the ip address and port of the IEC104 device. The last element indicates the commonAddress, it identifies the IEC104 device in the network.

Once we have the connection with the devices defined, we have to define the data we want to retrieve. This is defined in the ScadaTable bundle (es.amplia.oda.service.scadatables.cfg) with the format:

```properties
M_ME_NC_1,106001 = datastream: tensFaseFaseLA01
M_SP_NA_1,101040 = datastream: estProtLA01
M_DP_NA_1,104700 = datastream: estReenganCF11
M_BO_NA_1,110000 = datastream: identCCPLO
M_ST_NA_1,107001 = datastream: limPosTR01
```

Every line represents an element read from the IEC104 device. The format is :

```properties
ASDU, address = datastream: datastreamId
```

The ASDU indicates the type of the value read.

The address indicates the address where the value is stored in the IEC104 device.

The datastreamId indicates the Id of the datastream assigned to the value read.

ODA supports the next ASDUs:

* M_SP_NA_1 = Single Point
* M_DP_NA_1 = Double Point
* M_ME_NC_1 = Measured Float
* M_ST_NA_1 = Step Position
* M_BO_NA_1 = Bitstring
* M_ME_NA_1 = Measured Normalized
* M_ME_ND_1 = Measured Normalized (no quality information)
* M_ME_NB_1 = Measured Scaled

With the IEC104 protocol configured, the last step is to configure poller bundle to retrieve the data from the IEC104 cache. When the poller launches its operation, it retrieves the data indicated from the IEC104 cache and stores it in the StateManager.
Once the poller retrieves the data from the cache, it follows the same path trough ODA bundles as other data until it is published.
