+++
title = "Synchronize Clock"
+++

### Synchronize Clock

This operation is used to synchronize the local clock datastream (which is used to change the hour of the device) value to the value
obtained doing a System.currentTimeMillis(). This value will be a long with a date in timestamp format.

#### Dependencies

* [Commons]({{< ref "infrastructure/core.md" >}}): Required to provide the commons utils.
* [Operation API]({{< ref "_index.md" >}}): Provides the api of the operation and the enums of the result code.
* [State Manager]({{< ref "layers/statemanager/_index.md" >}}): Provides the API of the State Manager that will handle the returned value by the operation.

#### Configuration

 To configure Set Clock Operation module, a file named _es.amplia.oda.operation.synchronizeclock.cfg_ must be created with the next parameters:

* __clockDatastream__:_Required parameter_. Id of the datastream used to synchronize device clock.

#### Trace

The trace send by the third system (e.g. OpenGate) to the ODA to do this operation is like this:

'{"operation":{"request":{"timestamp":1554978284595,"deviceId":"aDevice","name":"SYNCHRONIZE_CLOCK","parameters":[],"id":"4aabb9c6-61ec-43ed-b0e4-dabface44b64"}}}'
