+++
title = "State Manager"
+++

### State Manager

The State Manager stores the device data state in the current moment to ease the data access from operations and increase the system performance (at a expense of possible outdated data).

Storing the state of all data in the device allow us to calculate inferred data (e.g. datastream statistical information) and execute smart actions depending on data that enables [Edge Computing](https://en.wikipedia.org/wiki/Edge_computing) features.

There are different State Managers implementations depending on project needs. New State Managers may be added implementing the [StateManager](https://github.com/amplia-iiot/oda/blob/master/oda-statemanagers/api/src/main/java/es/amplia/oda/statemanager/api/StateManager.java) interface:

```java
public interface StateManager {
    CompletableFuture<DatastreamValue> getDatastreamInformation(String deviceId, String datastreamId);
    CompletableFuture<Set<DatastreamValue>> getDatastreamsInformation(String deviceId, Set<String> datastreamIds);
    CompletableFuture<Set<DatastreamValue>> getDatastreamsInformation(DevicePattern devicePattern, String datastreamId);
    CompletableFuture<Set<DatastreamValue>> getDatastreamsInformation(DevicePattern devicePattern, Set<String> datastreamId);
    CompletableFuture<Set<DatastreamValue>> getDeviceInformation(String deviceId);
    CompletableFuture<DatastreamValue> setDatastreamValue(String deviceId, String datastreamId, Object value);
    CompletableFuture<Set<DatastreamValue>> setDatastreamValues(String deviceId, Map<String, Object> datastreamValues);
    void registerToEvents(EventHandler eventHandler);
    void unregisterToEvents(EventHandler eventHandler);
    void onReceivedEvent(Event event);
}
```

#### State Manager implementations

The currently implemented state managers are:

* [__Real-time State Manager__](realtime): The real time state manager is a proxy that works without storing any state and always getting and setting the data from/to the data source. It is the choice for projects with real-time concerns and without edge computing needs.
* [__In-Memory State Manager__](inmemory): The in-memory state manager store the state of all the data in the device in memory and uses a rule engine to execute business rules dependent on the device data.

New implementations may be added in the future like database based state manager, multiple samples state managers...
