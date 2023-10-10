+++
title = "Scada Tables"
weight = 1
+++

### Scada Tables

This bundle is used by the IEC104 datastreams bundle. It defines the variables we want to retrieve from IEC104 devices and its corresponding ASDU.

Its configuration file (es.amplia.oda.service.scadatables.cfg) has this format:

```properties
ASDU1, address1 = datastream: datastreamId1, device: deviceId1, feed: feed1, event:true
ASDU2, address2 = datastream: datastreamId2, device: deviceId2, feed: feed2, event:false
...
```

Every line represents an element read from the IEC104 device:

* The ASDU indicates the type of the value read.

* The address indicates the address where the value is stored in the IEC104 device.

* The datastream indicates the Id of the datastream assigned to the value read.

* The device indicates the Id of the device assigned to the value read. If no device indicated, it will be assigned to the ID of the connection (defined in es.amplia.oda.datastreams.iec104.cfg).

* The feed is the value the field feed will take in the event published to OpenGate

* The event field indicates if the signal represents an event (its an spontaneous message from SCADA server) or its a message that will be 'recollected' (as a reponse of an interrogation command sent to the SCADA server).

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
