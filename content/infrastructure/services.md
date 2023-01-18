+++
title = "Services"
weight= 4
+++

This multi-module contains services used widely across the ODA system (e.g. serialization services).

## Implemented services

### Serialization

Serialization is a common feature to communicate to other local or global systems where different serialization formats may be required.

A common serialization API has been created to call these services, independently of the required format:

```java
public interface Serializer {
    byte[] serialize(Object value) throws IOException;
    <T> T deserialize(byte[] value, Class<T> type) throws IOException;
}
```

Currently, two serialization implementations are provided:

* JSON
* CBOR

{{% notice style="primary" %}}
To add a new serialization format, just implement the Serializer interface contained in core module and register the service in the OSGi registry
{{% /notice %}}
