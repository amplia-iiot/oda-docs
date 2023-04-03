+++
title = "Events"
+++

### Events

ODA internal events are objects created with the value tag of Lombok.

This internal objects are created to notify a new value to the state manager and are handled by the state manager or the
rule engine, depending on the state manager implementation that we will use.

The event object will have the next parameters to specify the information of the event.

The [Event](https://github.com/amplia-iiot/oda/blob/master/oda-core/commons/src/main/java/es/amplia/oda/core/commons/utils/Event.java) is defined as:

```java
public class Event {
    private String datastreamId;
    private String deviceId;
    private String[] path;
    private Long at;
    private Object value;
}
```

* Datastream ID is the id of the datastream which has changed and created an event to notify that change to the state manager.
* Device ID is the id of the device that contains the changed datastream.
* Path is the way to arrive to the device which contains the datastream.
* At is the timestamp of the moment the event was created.
* Value is the new value that the datastream has collected. If a rule engine is included, it is possible that the value
    saved into the state manager will be different to the arrived value.
