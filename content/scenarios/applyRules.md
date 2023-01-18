+++
title = "Apply Rules"
weight= 4
+++

## Apply rules to the collected data

ODA allows to configure custom rules to be applied after the data is collected from the device. Rules are only applied if we are using in memory state manager.

To be able to apply rules we must first configure ODA to tell it the directory where the rules to apply will be stored.

To do this, we create a configuration file with the name _es.amplia.oda.ruleengine.nashorn.cfg_.
In this file there is only a parameter called path that indicates the directory of ODA where rules will be stored.

Rules are applied to a specific datastream.

To create a new rule we must create a directory with the id of the datastream as name inside the directory defined in the configuration file. Inside the directory of the datastream we will have to create the javascript file with the datastream id as name too.

Rules are composed of two methods:

* when - this method defines the conditions that must be met for the rule to apply. Returns boolean indicating if the result is true or false.
* then - this method defines the changes we want to apply to the datastream. It is only executed if the _when_ method returns true. Returns a new state.

This methods have the same two inputs:

* State - defines the state of the state manager.
* DatastreamValue - defines a datastream with a value

The methods that can be used to manipulate the datastream inside the rule are the ones defined in the classes State and DatastreamValue which are located in the package es.amplia.oda.core.commons.utils

Using the nashorn engine we can use java objects and its methods in javascript.
