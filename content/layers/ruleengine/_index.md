+++
title = "Rule Engine"
weight= 5
+++

### Rule Engine

The rule engine executes custom business rules dependent on the device data. The rules may be deployed from our
[OpenGate IOT Platform](https://www.amplia-iiot.com/iot-platform/) and are loaded at runtime.

The rules are based in a _when -> then_ paradigm:

* __when__: Predicates defining when the rule should be executed
* __then__: Actions to execute when the predicates evaluates to true.

 The scope available inside this functions includes the __state__ of the device (all the values of the datastreams in
 the current moment) and the __new value__ that has triggered the rules evaluation.

 The interface of a rule is defined as:

 ```java
public interface Rule {
    boolean when(State state, DatastreamValue newValue);
    State then(State state, DatastreamValue newValue);
}
```

#### Implementation

##### [Nashorn Rule Engine](nashorn)

The main implementation of the Rule Engine has been developed using [Nashorn](https://docs.oracle.com/javase/8/docs/technotes/guides/scripting/nashorn/api.html)
engine, allowing to easily define the business rules using [JavaScript](https://en.wikipedia.org/wiki/JavaScript).

The rules are written in JavaScript and deployed in the device to be registered.

Every time an event is triggered inside the device with a datastream value update, all the registered rules are triggered to take the necessary actions.

[A catalogue of actions](utils) is provided to ease the rule definitions.

##### Alternative implementations

New implementations may be added in the future implementing the [RuleEngine interface](https://github.com/amplia-iiot/oda/tree/master/oda-ruleengine/api):

```java
public interface RuleEngine { 
 State engine(State state, DatastreamValue value);
 void createDatastreamDirectory(String nameRule);
 void deleteDatastreamDirectory(String nameRule);
 void createRule(String nameRule);
 void deleteRule(String nameRule);
 void reloadAllRules();
 void stop();
}
```
