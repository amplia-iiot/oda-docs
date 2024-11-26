+++
title = "Scada Tables"
weight = 1
+++

### Scada Tables

This bundle is used by the IEC104 datastreams bundle. It defines the variables we want to retrieve from SCADA devices and its corresponding ASDU.

Its configuration file (es.amplia.oda.service.scadatables.cfg) has this format:

```properties
ASDU1, address1 = datastream: datastreamId1, device: deviceId1, feed: feed1
ASDU2, address2 = datastream: datastreamId2, device: deviceId2, feed: feed2, eventPublish: dispatcher
ASDU3, address3 = datastream: datastreamId3, device: deviceId3, feed: feed3, eventPublish: statemanager
...
```

Every line represents an element read from the SCADA device:

* The ASDU indicates the type of the value read.

* The address indicates the address where the value is stored in the device.

* The datastream indicates the Id of the datastream assigned to the value read.

* The device indicates the Id of the device assigned to the value read. If no device indicated, it will be assigned to the ID of the connection (defined in es.amplia.oda.datastreams.iec104.cfg).

* The feed is the value the field feed will take in the event published to OpenGate

* The eventPublish field is optional. If field is not present, it indicates that the signal is a reponse of an interrogation command. Value received is saved in a cache and will be recolected by poller. If it is present, it indicates that the signal is an event (its an spontaneous message from SCADA server) and how the event will be published. It can take two values:

  * dispatcher - spontaneous messages will be publish immediatelly as soon as it is received.
  * statemanager - spontaneous messages will be passed to the state manager (rules can be applied) and will be published as other events (through collector and dispatcher).

ODA supports the next ASDUs:

* M_SP_NA_1 = Single Point
* M_SP_TB_1 = Single Point with time tag CP56Time2a
* M_DP_NA_1 = Double Point
* M_DP_TB_1 = Double Point with time tag CP56Time2a
* M_ME_NC_1 = Measured Float
* M_ME_TF_1 = Measured Float with time tag CP56Time2a
* M_ST_NA_1 = Step Position
* M_ST_TB_1 = Step Position with time tag CP56Time2a
* M_BO_NA_1 = Bitstring
* M_BO_TB_1 = Bitstring with time tag CP56Time2a
* M_ME_NA_1 = Measured Normalized
* M_ME_TD_1 = Measured Normalized with time tag CP56Time2a
* M_ME_ND_1 = Measured Normalized (no quality information)
* M_ME_NB_1 = Measured Scaled
* M_ME_TE_1 = Measured Scaled with time tag CP56Time2a
