+++
title = "Read data from IEC104 devices"
weight = 4
+++

## Read data from an IEC104 device

ODA allows to read data from an IEC104 device using these bundles:

* es.amplia.oda.datastreams.iec104
* es.amplia.oda.comms.iec104
* es.amplia.oda.service.scadatables

We will explain how to configure these bundles to connect to the device and to read data from it.

The first step is to configure the connection with the device. This is defined in the configuration of datastreams bundle (es.amplia.oda.datastreams.iec104.cfg):

```properties
initialPollingTime=10000
pollingTime=10000
iec104DeviceId=127.0.0.1;2404;1
```

The pollingTime parameter indicates the seconds between executions of Interrogation Commands. There is a first interrogation command sent X seconds (indicated by initialPollingTime) after starting the bundle. After this initial interrogation command, an Interrogation Command is sent to the devices defined in the configuration every Y seconds (indicated by pollingTime). When the IEC104 device receives the interrogation command, it sends all the data it has stored to ODA and stores it in a cache.

The next lines of the configuration indicates the information needed to connect with the IEC104 devices. The first element is the deviceId that will be associated to the data retrieved. The second and third elements are the ip address and port of the IEC104 device. The last element indicates the commonAddress, it identifies the IEC104 device in the network.

Once we have the connection with the devices defined, we have to define the data we want to retrieve. This is defined in the ScadaTable bundle (es.amplia.oda.service.scadatables.cfg) with the format:

```properties
M_ME_NC_1,1073153 = datastream: tensFaseFaseLA01, feed:interrogation, device:test_cache_iec104, eventPublish: dispatcher
M_SP_NA_1,1052736 = datastream: estProtLA01, feed:interrogation,device:test_cache_iec104, eventPublish: stateManager
M_DP_NA_1,1066752 = datastream: estReenganCF11, feed:interrogation,device:test_cache_iec104
M_BO_NA_1,1114112 = datastream: identCCPLO, feed:interrogation,device:test_cache_iec104
M_ST_NA_1,1077249 = datastream: limPosTR01, feed:interrogation,device:test_cache_iec104
```

Every line represents an element read from the IEC104 device. The format is :

```properties
ASDU, address = datastream: datastreamId, feed: feed, device: deviceId, eventPublish: dispatcher
```

* The ASDU indicates the type of the value read.

* The address indicates the address where the value is stored in the IEC104 device.

* The datastreamId indicates the Id of the datastream assigned to the value read.

* The device indicates the Id of the device assigned to the value read. If no device indicated, it will be assigned to the ID of the connection (defined in es.amplia.oda.datastreams.iec104.cfg).

* The feed is the value the field feed will take in the event published to OpenGate

* The eventPublish field is optional. If field is not present, it indicates that the signal is a reponse of an interrogation command. Value received is saved in a cache and will be recolected by poller. If it is present, it indicates that the signal is an event (its an spontaneous message from SCADA server) and how the event will be published. It can take two values:

  * dispatcher - spontaneous messages will be publish immediatelly as soon as it is received.
  * statemanager - spontaneous messages will be passed to the state manager (rules can be applied) and will be published as other events (through collector and dispatcher).

ODA supports the ASDUs indicated in [__scadatables__](/layers/other/scadatables) 

There are two types of signals regarding its form of recollection:

* Signals marked in configuration as events (those with the field eventPublish), are those that will be sent spontaneously by the IEC104 device (not as a response of an interrogation command). These signals can be published immediately to the dispatcher and to a third system (if eventPublish = dispatcher) or can be sent to the state manager (if eventPublish = statemanager) where rules can be applied.

* Signals not marked in configuration as events, are those that will be sent by the IEC104 device as a response of an interrogation command. These signals are stored in a cache awaiting to be retrieved by a DatastreamGetter.

With the IEC104 protocol configured, the last step is to configure poller bundle to retrieve the data from the IEC104 cache. 
When the poller launches its operation, it retrieves the data indicated from the IEC104 cache and stores it in the StateManager.
Once the poller retrieves the data from the cache, it follows the same path trough ODA bundles as other data until it is published.
