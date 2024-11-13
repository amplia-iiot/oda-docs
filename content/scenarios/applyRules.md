+++
title = "Apply Rules"
weight = 3
+++

## Apply rules to the collected data

ODA allows to configure custom rules to be applied after the data is collected from the device. Rules are only applied if we are using in memory state manager.

Rules are javascript files composed of two methods:

* when - this method defines the conditions that must be met for the rule to apply. Returns boolean indicating if the result is true or false.
* then - this method defines the changes we want to apply to the datastream. It is only executed if the _when_ method returns true. Returns a new state.

This methods have the same two inputs:

* State - defines the state of the state manager.
* DatastreamValue - defines a datastream with a value

We can use the methods defined in file utils.js to make changes to the datastream that activates the rule.
We can also implement our own methods inside the javascript file.

Using the nashorn engine we can use java objects and its methods in javascript.

The methods defined in utils.js are located in the classes State and DatastreamValue in the package es.amplia.oda.core.commons.utils

We can use single line comments inside the rule, they will be ignored when loading the rule inside the rule engine.

We can also use functions to log messages from inside the rule to ODA log file using the functions logInfo, logDebug, logError, logWarn, logTrace  from State class as in this example:

```java
State.logInfo("Year = {}, Month = {}, Day = {}", var1, var2, var3);
```

### Rules configuration

To be able to apply rules we must first configure ODA to tell it the directory where the rules to apply will be stored.

To do this, we create a configuration file with the name _es.amplia.oda.ruleengine.nashorn.cfg_.
In this file there are two parameters:

* __path__: Path from the main directory of the ODA to the directory where the rules are stored.
* __utilsPath__: Path from the main directory of the ODA to the directory where javascript files with utils methods used by rules are stored.

### Rules application

Rules are applied to specific datastreams. This is determined by the folder name where rules are stored. This folder must be named like the datastreams we want those rules to apply to, separated by the character ':'.

To create a new rule we must create a folder with the ids of the datastreams (separated by the character':') we want to affect as folder name, inside the folder defined in the configuration file (path parameter in configuration file). Inside the folder of the datastreams, we will have to create the javascript files with the rules we want to apply. We can have many rules, all will be applied to the datastreams indicated in the folder name.
The javascript files containing the rule code, can have any name we want.

Example:

We have two datastreams: 'value1' and 'value2'.
The folder where rules are stored is called 'rules'.
If we want to create rules that affect both datastreams we must create a folder named 'value1:value2' inside the folder 'rules'. Inside this folder we can have as many rules (javascript files) as we want, all of them will be applied to both datastreams. If we want rules that only affect datastream value1, we create a folder named value1 inside the folder 'rules'.

![rulesFolder](/img/rulesFolderStructure.drawio.svg)

### Rules utils

Rules utils files are javascript files whose methods can be invoked by rules.
ODA has a main utils file called utils.js but we can create our own utils file apart from this one and write there methods used by rules to avoid writing the same method in every rule.

To use methods from another javascript file inside a rule, we must load that javascript file in the rule. This is done with the load method indicating the name of the javascript file to load.

Example :
_load("example.js")_.

This javascript files must be placed in the folder defined by parameter _utilsPath_.

The methods in file utils.js are loaded by ODA for every rule, there is no need to explicitly load utils.js in every rule.
