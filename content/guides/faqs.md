+++
title= "FAQs"
weight= 2
+++

### Datastream format

We can see the format of the datastreams used by ODA in this link

[OpenGate IOT JSON](https://www.amplia-iiot.com/documentation/latest/api-south/opengate-api-south.html#_datastream_object_description)

### Definition of state

The State is the collection of datastreams managed in a moment by ODA.

### Change state manager mode

To change the way state manager works we must change the state manager bundles deployed.

* To work in real time mode, use the bundles statemanager.api y statemanager.realtime

* To work in memory mode, use the bundles statemanager.api y statemanager.inmemory

If there is both realtime and inmemory bundles deployed, remove the one which isn't being used.

### Changes in bundle configuration files

If ODA is running, changes made in bundle configuration files are loaded instantly, there is no need to stop and launch ODA again.

### Load or remove new bundles from ODA

To load a new bundle in ODA, we just need to copy the jar containing the bundle in the deploy directory. ODA will detect it and try to start the new bundle calling its start method.

If we want to remove a bundle already deployed, simply remove the jar file from deploy directory. ODA will call bundle stop method and remove it from the framework.

### View ODA logs

ODA writes its logs in the file ODA.log located in ODA/logs/.

In this file we can see the logs of current day.

To view the logs of previous days, ODA stores them in ODA/logs/archived.
