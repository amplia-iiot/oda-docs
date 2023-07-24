+++
title = "Scada Tables"
weight = 1
+++

### Scada Tables

This bundle is used by the IEC104 datastreams bundle. It defines the variables we want to retrieve from IEC104 devices and its corresponding ASDU.

Its configuration file (es.amplia.oda.service.scadatables.cfg) has this format:

```properties
ASDU1, address1 = datastream: datastreamId1
ASDU2, address2 = datastream: datastreamId2
...
```

Every line represents an element read from the IEC104 device.

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
