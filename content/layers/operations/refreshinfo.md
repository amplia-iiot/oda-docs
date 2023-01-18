+++
title = "Refresh Info"
+++

### Get Device Parameters

This operation is used to get all the actual values of the datastreams registered by the ODA. This operation can take a while,
depending on the number of registered datastreams (is like do a get of any datastream).

Values getted by the operation will be passed to the state manager, which handle them according its implementation.

#### Dependencies

* [Operation API]({{< ref "_index.md" >}}): Provides the api of the operation and the enums of the result code.
* [State Manager]({{< ref "layers/statemanager/_index.md" >}}): Provides the API of the State Manager that will handle the returned value by the operation.

#### Trace

The trace send by the third system (e.g. OpenGate) to the ODA to do this operation is like this:

'{"operation":{"request":{"timestamp":1571993751183,"deviceId":"Tm1234","name":"REFRESH_INFO","parameters":[],"id":"b949fabf-4734-46fe-937c-ea1e51fc2cf7"}}}'
