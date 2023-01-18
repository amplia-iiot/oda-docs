+++
title= "Configuration files"
weight= 3
+++

ODA uses configuration files to configure its bundles.

The name of the configuration file is the name of the java package where the code implementation that uses the properties is located.

ODA has these default configuration files:

* es.amplia.oda.harware.* - define properties  of connectors used by ODA to connect with devices (south interface)

* es.amplia.oda.datastreams.* - define the characteristics of the datastreams that ODA creates when connecting with devices (south interface)

* es.amplia.oda.connector.* - define properties  of connectors used by ODA to connect with internet (north interface)

* es.amplia.oda.dispatcher.opengate - defines datastreams for dispatcher to manage before sending to opengate. The dispatcher joins several datastreams with the same id into a one datastream with several datapoints.

    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
    Format: _datastreamId;deviceId=firstPublishingInSeconds;nextPublishingsInSeconds_

* es.amplia.oda.statemanager.inmemory - defines parameters for state manager in memory mode (path where database is located and time data is saved before being erased)

* es.amplia.oda.subsystem.collector - defines datastreams to collect from state manager and pass to dispatcher or send to internet if no dispatcher is defined

    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
    Format: _datastreamId;deviceID=initialDelay;collectionPeriod_

* es.amplia.oda.subsystem.poller - defines the datastreams to periodically poll data from device. Every x seconds the poller will execute the get method defined in a DatastreamGetter class with the same datastream and device ids.

    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
    Format: _datastreamId;deviceId=firstPollingInSeconds;nextPollingInSeconds_

* es.amplia.oda.datastreams.deviceinfo - define the properties of the device where ODA is installed (ID, api-key to connect to opengate,etc)

* es.amplia.oda.ruleengine.nashorn - defines the properties for nashron engine used to define rules

* es.amplia.oda.subsystem.sshserver - defines the properties of ssh server used to connect to framework
