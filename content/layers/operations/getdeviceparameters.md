+++
title = "Get Device Parameters"
+++

### Get Device Parameters

This operation is used to get the actual value of a datastream of the device.

The value getted by the operation will be passed to the state manager, which handle it according its implementation.

#### Dependencies

* [Operation API]({{< ref "_index.md" >}}): Provides the api of the operation and the enums of the result code.
* [State Manager]({{< ref "layers/statemanager/_index.md" >}}): Provides the API of the State Manager that will handle the returned value by the operation.

#### Trace

The trace send by the third system (e.g. OpenGate) to the ODA to do this operation is like this:

'{"operation":{"request":{"timestamp":1554978284595,"deviceId":"6000","name":"GET_DEVICE_PARAMETERS","parameters":[{"name":"variableList","value":{"array":[{"variableName":"current"}]}}],"id":"4aabb9c6-61ec-43ed-b0e4-dabface44b64"}}}'
