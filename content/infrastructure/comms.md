+++
title = "Communications"
weight= 3
+++

The communications multi-module contains communication protocols that are used as LAN and WAN.

When the same protocol is used to connect with the Internet, with OpenGate or other third services, and to connect with local devices, is better to create and abstraction of the protocol to reuse code in both sides. Usually this abstraction is a service providing a factory to create clients and servers of the protocol.

## Protocols

### MQTT

The MQTT protocol is used to connect to OpenGate and also to connect with a MQTT broker in the local network to integrate devices in the local area.

An API is defined to create MQTT clients and to use them, decoupling from the chosen MQTT library implementation.

```java
public interface MqttClientFactory {
    MqttClient createMqttClient(String serverUri, String clientId) throws MqttException;
}
```

The MQTT Client API is

```java
public interface MqttClient {
    void connect();
    void connect(MqttConnectOptions options);
    void subscribe(String topic, MqttMessageListener listener);
    void unsubscribe(String topic);
    void publish(String topic, MqttMessage message, ContentType contentType);
    boolean isConnected();
    void disconnect();
}
```

### IEC104

The IEC104 protocol is used to connect to a SCADA third-system that implements an IEC 104 master (client).

It can be used to recollect data from a device and also to send data to an external SCADA system.

### HTTP

The HTTP protocol is used to make HTTP requests (post, put, get and delete).

It can be used to make calls to REST APIs.