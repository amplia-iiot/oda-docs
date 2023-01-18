+++
title = "In Memory State Manager"
+++

### In Memory State Manager

This State Manager stores the data of a event to provide the actual value of a datastream
quickly when the third system send a get request. This means, that the State Manager have a internal State that it refreshes
every time that an event arrives and the engine method is called and,
 use it to send a response of the get operation instead of search the datastream and do the engine
with that value through all the rules. In this way, the bundle saves time in processing of the operation.

When a event arrives, the state manager always refresh the stored value. To do this, call the engine method using the value
arrived value from the event. The rules can change the value or not. If they changes the value, store the returned state
by the rule engine. If they doesn't change the value, the state manager will run a basic case to store the arrived value
of the event into the itself state. The state manager only will send the new value of the datastream if the rule engine
was checked this value as sendImmediately, in this case, the state manager will send the value of the datastreasm stored
into the returned state to the send it to the third system.

When a get operation arrives, the state manager won't get the value of the datastream directly. It will search if there is
a value of that datastream into the state and will get it if exists. If the datastream doesn't exists into the state, the
state manager will get the value from the datastream normally.

When a set operation arrives, the arrived value from the operation will be setted into the datastream source directly,
without any affect over the state of the state manager.

#### Dependencies

* __[Core Commons]({{< ref "infrastructure/core.md" >}})__: Provides the API of the configurable Bundles, Datastreams handling API's and Device API's.
* __[State Manager API]({{< ref "layers/statemanager/_index.md" >}})__: Provides the API that this module will implements.
* __[Rule Engine API]({{< ref "layers/ruleengine/_index.md" >}})__: Provides a generic Rule Engine to contain the ODA rule engine and use it.
* __[Event API]({{< ref "layers/eventdispatcher/events.md" >}})__: Provides the event interface to handle the internal events of ODA.

#### Configuration

This bundle doesn't requires any configuration.
