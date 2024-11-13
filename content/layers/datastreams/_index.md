+++
title = "Datastreams"
weight= 2
+++


### Datastreams Getters, Setters and Events

The datastreams are the basic entity to model data inside a device. Datastreams are divided in:

* __[Datastreams Getters](https://github.com/amplia-iiot/oda/blob/master/oda-core/commons/src/main/java/es/amplia/oda/core/commons/interfaces/DatastreamsGetter.java)__: Datastreams modelling data with read access.

```java
public interface DatastreamsGetter {
    String getDatastreamIdSatisfied();
    List<String> getDevicesIdManaged();
    CompletableFuture<CollectedValue> get(String device);
}
```

* __[Datastreams Setters](https://github.com/amplia-iiot/oda/blob/master/oda-core/commons/src/main/java/es/amplia/oda/core/commons/interfaces/DatastreamsSetter.java)__: Datastreams modelling data with write access.

```java
public interface DatastreamsSetter {
    String getDatastreamIdSatisfied();
    Type getDatastreamType();
    List<String> getDevicesIdManaged();
    CompletableFuture<Void> set(String device, Object value);
}
```

* __[Datastreams Events](https://github.com/amplia-iiot/oda/blob/master/oda-core/commons/src/main/java/es/amplia/oda/core/commons/interfaces/DatastreamsEvent.java)__: Datastreams modelling data that trigger data events.

```java
public interface DatastreamsEvent {
    void registerToEventSource();
    void unregisterFromEventSource();
    void publish(String deviceId, List<String> path, Map<String, Map<String, Map<Long, Object>>> events);
}
```

This layer abstract different data sources modelling them as datastreams, easing the access to read, write and send events.

::: tip
When a new data source is identified try to abstract the hardware access in a new API in the hardware layer and create a new datastreams abstraction using the defined hardware API
:::

#### Implemented datastreams data sources

The following data sources are implemented and abstracted as datamodels:

* [__ADC__](https://github.com/amplia-iiot/oda/tree/master/oda-datastreams/adc): Device ADC pins.
* [__Device Info__](https://github.com/amplia-iiot/oda/tree/master/oda-datastreams/deviceinfo): Information about the device as CPU, Memory, Clock, Software...
* [__GPIO__](https://github.com/amplia-iiot/oda/tree/master/oda-datastreams/gpio): Device GPIO pins.
* [__I2C__](https://github.com/amplia-iiot/oda/tree/master/oda-datastreams/i2c): Data inside I2C devices (sensors and microcontrollers).
* [__Modbus__](https://github.com/amplia-iiot/oda/tree/master/oda-datastreams/modbus): Data measured by connected devices through Modbus protocol.
* [__MQTT__](https://github.com/amplia-iiot/oda/tree/master/oda-datastreams/mqtt): Data measured by connected devices through MQTT protocol.
* [__IEC104__](https://github.com/amplia-iiot/oda/tree/master/oda-datastreams/iec104): Data measured by connected devices through Iec104 protocol.
* [__OPC UA__](https://github.com/amplia-iiot/oda/tree/master/oda-datastreams/opcua): Data measured by connected devices through OPC UA protocol.


#### Simulator

A [simulator](https://github.com/amplia-iiot/oda/tree/master/oda-datastreams/simulator) datastreams implementation is provided to simulate data with debugging and demonstration purposes.
