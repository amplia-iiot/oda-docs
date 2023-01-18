+++
title= "DataStream Getter"
+++

## Request data periodically from devices not supported

Using ODA capabilities we can easily implement our solution to retrieve data from a device.

### Implement DatastreamGetter

Using ODA capabilities we can easily make a bundle to request data periodically from a device.

For our bundle to implement this functionaility we must create a class that implements DatastreamsGetter. It will have three public methods:

* getDatastreamIdSatisfied

    returns the id of the datastream that will be associated with the data collected from this device

* getDevicesIdManaged

    return the list of ids of the devices that we are managing

* get

    this method will implement the code needed to retrieve data from the device

This class we just created must be registered for the framework to know it exists. To achieve this we use the registerService method from BundleContext class:

```java
bundleContext.registerService(DatastreamsGetter.class, getter, null);
```

Now that the bundle code is complete, we must tell ODA to poll data from device. For this we must write a new line in configuration file es.amplia.oda.subsystem.poller.cfg with the next format:

&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
    datastreamId;deviceId=firstPollingInSeconds;nextPollingInSeconds;

With this line we tell ODA to retrieve data for the device and datastream indicated every x seconds.
When x seconds pass, ODA will search in all the DatastreamsGetter registered in the framework, the one that matches the datastream and device indicated. Then it will execute the get method of the DatastreamsGetter that matches, and will format the value retrieved from the device into the datastream format used by OpenGate.
The datastream generated with the value retrieved from device will be passed to the state manager.

### Connection with device

To request data from the device, ODA needs to know which hardware protocol must be used to communicate with it.

This protocol is defined in the configuration files with name like _es.amplia.oda.datastreams.*_ , where * is the name of the protocol to use.
