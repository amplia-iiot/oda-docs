+++
title = "Publish Data"
weight = 2
+++

## Publish data recollected from devices

Once we have recollected data from the device, we must publish that data to OpenGate or another external system.
There are two modes in which ODA can work to publish data:

* Real time - datastreams are published as soon as they are recollected from the poller

* In memory - datastreams are stored in a database awaiting to be published

In real time mode, there is no configuration to be done. Once the poller gets the data from the device, it will be published.

In memory mode, the data recollected by the poller will be stored in the state manager, waiting for it to be published.

### In memory mode

To publish data wen using in memory mode of the state manager, we can use the collector capabilities from ODA.

To configure the collector we must add a line in the configuration file es.amplia.oda.subsystem.collector.cfg with the format indicated:

&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
        datastreamId;deviceId=firstCollectingInSeconds;nextCollectingInSeconds

Indicating the id of the datastream and devices we want to collect, every x seconds ODA will collect from the state manager the datastreams that matches the ids indicated.

If no dispatcher is configured, the datastreams retrieved by the collector will be sent inmediately to the external system.

If a dispatcher is configured in the file es.amplia.oda.dispatcher.opengate.cfg, it will collect all datastreams with the datastreamId indicated, and will merge all in a single datastream with multiple datapoints. The format is the same as in the collector:

&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
        datastreamId;deviceId=firstPublishingInSeconds;nextPublishingsInSeconds

The whole recollection process can be seen in the next picture

![recollection](/img/recollection.drawio.svg)

### Connectors

To publish data to an external system, ODA needs to know the protocol that it must use to publish that data to the internet (mqtt, http, etc). This is done trought the connectors layer.

Connectors are defined in configuration files with names like this _es.amplia.oda.connector.*.cfg_ , where * is the name of the connector (mqtt, http, etc).

We can have multiple connectors configured, ODA will publish the data trought all of them.
