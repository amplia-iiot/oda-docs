+++
title = "Operation Dispatchers"
+++

### Operation Dispatchers

The operation dispatchers are responsible for getting the high level operation requests from the low level representation, pass them to the proper operation processor and send back the responses to the connector as low level representation also.

This components should also take care of the operation error handling: serialization errors, error in operation params, not supported operations...

The entry point is the __process__ method getting the requests and returning the response.

#### OpenGate Dispatcher

The OpenGate Dispatcher takes care of the OpenGate operation requests. It implements the [Dispatcher](https://github.com/amplia-iiot/oda/blob/master/oda-core/commons/src/main/java/es/amplia/oda/core/commons/interfaces/Dispatcher.java) interface:

```java
public interface Dispatcher {
    CompletableFuture<byte[]> process(byte[] input, ContentType contentType);
}
```

The __process__ method gets the request byte array and content-type and returns the response byte array. It is assumed that the response content-type is the same as the request. If no content-type is provided, _JSON_ format is taken by default.

The component deserialize the request and send it to the correct operation processor to be processed. Then receives the OpenGate Operation response, serialize it and send it back to the connector. It handles the errors about serialization, format and not supported operations.

To create the operation processors it uses a [factory](https://github.com/amplia-iiot/oda/blob/master/oda-dispatchers/opengate/src/main/java/es/amplia/oda/dispatcher/opengate/operation/processor/OpenGateOperationProcessorFactoryImpl.java) with the OpenGate already supported operations. This is the entry point to add new operations using the [OperationProcessorTemplate](https://github.com/amplia-iiot/oda/blob/master/oda-dispatchers/opengate/src/main/java/es/amplia/oda/dispatcher/opengate/operation/processor/OperationProcessorTemplate.java). The operation API should be defined in the [Operations API module](https://github.com/amplia-iiot/oda/tree/master/oda-operations/api).

The OpenGate Operation Dispatcher also provides a feature to handle __custom operations__ that allows to add new operations without modifying the OpenGate Operation Dispatcher and the Operations API. They must implement the [CustomOperation](https://github.com/amplia-iiot/oda/blob/master/oda-operations/api/src/main/java/es/amplia/oda/operation/api/CustomOperation.java) and define the operation name they handle:

```java
public interface CustomOperation {
    CompletableFuture<Result> execute(String deviceId, Map<String, Object> params);
    String getOperationSatisfied();
}
```

#### SCADA Dispatcher

The SCADA Dispatcher takes care of the SCADA operation requests. It implements the [SCADA Dispatcher](https://github.com/amplia-iiot/oda/blob/master/oda-core/commons/src/main/java/es/amplia/oda/core/commons/interfaces/ScadaDispatcher.java):

```java
public interface ScadaDispatcher {
    <T, S> CompletableFuture<ScadaOperationResult> process(ScadaOperation operation, int index, T value, S type);
}
```

It processes a SCADA operation on a given index, value and type and returns a __ScadaOperationResult__:

```java
enum ScadaOperationResult {
    SUCCESS,
    ERROR,
    NOT_SUPPORTED
}
```
