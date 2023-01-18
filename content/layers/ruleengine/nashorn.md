+++
title = "Nashorn"
+++

### Nashorn

With this implementation, the rules written in JavaScript have to be deployed into a directory specified by configuration.

Nashorn implementation will refresh its internal register of the current rules if a rule is deployed during runtime. To do this,
rules related to a datastream have to be deployed into a directory with the name of the datastream into the deploy directory
specified by configuration.

If no rule is refreshing the data of a datastream, a basic rule will refresh its value with the received value.

During the engine, the datastreams can be checked as refreshed and as sendImmediately:

* Refreshed: This option represents that the value was already changed in the state that the rule engine is using and isn't
necessary to change with the base case, because is probably that the data has been derived.
* Send Immediately: This option represents that the value, received or the derived by it, have to be sent to the third
system when all the rules have finished.

It's important to know that the rules can have conflicts if them overwrite a data that a previous rule has changed in the
current state. The rules have not established order, so it's impossible create the rules with an order in mind.

#### Dependencies

* [Core Commmons]({{< ref "infrastructure/core.md" >}}): Provide the basic API of the configurable bundle.
* [Event API]({{< ref "layers/eventdispatcher/events.md" >}}): Provide the API of the internal events that use ODA to handle it.
* [State Manager API]({{< ref "layers/statemanager/_index.md" >}}): Provide an interface of a generic State Manager that the Engine can use to handle the rules.
* [Rule Manager API]({{< ref "_index.md" >}}): Provide the API of the Rule Engines that this module will implement.

#### Configuration

To configure Nashorn Rule Engine module, a file named _es.amplia.oda.ruleengine.nashorn.cfg_ must be created with the next parameter:

* __path__: _Required parameter_. Path from the main directory of the ODA to the directory of the rules.

An example of the _es.amplia.oda.ruleengine.nashorn.cfg_ file would be:

```
path=rules/
```

In this example, the ODA directory would be: _/path/to/the/oda/directory_. And the directory to the rules (inside the ODA
directory) would be: _/path/to/the/oda/directory/rules_. This means, the path that the ODA would need is only _path/_.

:::tip
When specify the rule path, is important write the final bar of the directory.
This is because the internal implementation wait that bar to append it to the specific datastream directory.
:::
