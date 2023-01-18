+++
title = "Set Device Parameters"
+++

### Set Device Parameters

This operation is used to set the actual value of a datastream of the device, it means, to change the actual value.

The value setted by the operation will pass thrugh the State Manager and, depending of its implementation, will set the value
of the datastream in some way.

#### Dependencies

* [Operation API]({{< ref "_index.md" >}}): Provides the api of the operation and the enums of the result code.
* [State Manager]({{< ref "layers/statemanager/_index.md" >}}): Provides the API of the State Manager that will handle the returned value by the operation.

#### Trace

The trace send by the third system (e.g. OpenGate) to the ODA to do this operation is like this:

'{"operation":{"request":{"timestamp":1554978284595,"deviceId":"Tm1234","name":"SET_DEVICE_PARAMETERS","parameters":[{"name":"variableList","value":{"array":[{"variableName":"q","variableValue":17}]}}],"id":"4aabb9c6-61ec-43ed-b0e4-dabface44b64"}}}'
