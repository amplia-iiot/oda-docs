+++
title = "Recollect Data"
weight= 2
+++

## Request data periodically from devices

Using ODA capabilities we can request data periodically from a device using one of the interfaces defined in ODA.

1. Configure the hardware connection to the device. This is done in the corresponding configuration file of that hardware interface es.amplia.oda.hardware.*.cfg. To know the parameters needed to configure the hardware interface we want to use, check the Layers/Hardware section in this guide.

2. Configure the datastream that will contain the data retrieved by the hardware layer. This is done in the corresponding datastream configuration file es.amplia.oda.datastreams.*.cfg. The parameters needed to configure the datastreams are in the Layers/Datastream section in this guide.

3. The last step is to configure the poller to ask for data for the datastream we have configured. This is done by adding a new line in the configuration file es.amplia.oda.subsystem.poller.cfg
 with the format:

    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
    datastreamId;deviceId=firstPollingInSeconds;nextPollingInSeconds;

Lastly, if we want to retrieve data from an interface ODA does not support, we can develop our own solution using ODA capabilities as we see in Development section in this guide.
