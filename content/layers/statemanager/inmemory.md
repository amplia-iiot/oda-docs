+++
title = "In Memory State Manager"
+++

### In Memory State Manager

This State Manager stores the data of events to provide the actual value of a datastream quickly when the third system send a get request. This means, that the State Manager has an internal State that it refreshes
every time that an event arrives.

When an event arrives, the state manager applies the rules defined for that datastream and refreshes the stored value. The rules can change the value or not, either case the value is stored.

The state manager will send immediately to the third system the new value of the datastream if the rule engine checks this value as sendImmediately.

When a get operation arrives, the state manager won't get the value of the datastream directly. It will search if there is
a value of that datastream into the state and will get it if exists. If the datastream doesn't exists into the state, the
state manager will get the value from the datastream normally.

When a set operation arrives, the arrived value from the operation will be set into the datastream source directly,
without any affect over the state of the state manager.

A database is used to store a backup of datastreams stored in state. This backup is used to recover the datastreams not sent in case ODA stops working due to external causes.

#### Dependencies

* __[Core Commons]({{< ref "infrastructure/core.md" >}})__: Provides the API of the configurable Bundles, Datastreams handling API's and Device API's.
* __[Rule Engine API]({{< ref "layers/ruleengine/_index.md" >}})__: Provides a generic Rule Engine to contain the ODA rule engine and use it.
* __[Event API]({{< ref "layers/eventdispatcher/events.md" >}})__: Provides the event interface to handle the internal events of ODA.

#### Configuration

To configure State Manager InMemory, a file named _es.amplia.oda.statemanager.inmemory.cfg_ must be created with the next parameters:

* __databasePath__: _Required parameter_. Specify the path where database will be located.
* __maxData__: _Required parameter_. Indicates the maximum number of values stored for each datastreamId, deviceId combination.
* __forgetTime__: _Required parameter_. Indicates the maximum antiquity, in seconds, of values to store. Values older than this will be removed.
* __forgetPeriod__:_Required parameter_. Indicates the periodicity in seconds that older values in database are removed.
* __numProcessingThreads__:_Optional parameter_. Indicates the number of threads used to process events received. Default value is 10.
* __tasksQueueSize__:_Optional parameter_. Indicates the size of the queue to store pending events to be processed. Default value is 1000.

