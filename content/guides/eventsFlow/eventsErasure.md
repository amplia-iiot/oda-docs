+++
title = "Events erasure"
weight= 3
+++


In StateManager-InMemory bundle, events are stored in memory and in the database. We need a process that erases old events that are no longer needed to avoid using too much disk and memory. This process is done in different places and bundles.

There are three parameters in StateManager configuration file that are used in these process:

* maxData - indicates how many values can be stored for any datastreamId, deviceId combination.

    Example: we have values for "datastreamId1:device1" and for "datastreamId2:device1" and the maxData parameter is set to 30. These means that we can have 30 values stores for "datastreamId1:device1" and another 30 values for "datastreamId2:device1".

* forgetTime - indicates the maximum time difference can be between the stored events and the current moment. It is indicated in seconds.

    Example : we have forgetTime parameter set to 60 seconds. This means that only events from the last minute will remain stored.

* forgetPeriod - indicates how often we want to check if there is old data in database. It is indicated in seconds.

#### Erasure of older events in memory

This is done in StateManager bundle. Its one of the steps done when processing new events generated from devices.
When there is a new event for a combination of datastreamId and deviceId, we check if there are old events in memory for that combination to remove:

* If there are more events than indicated by maxData parameter, older values will be deleted until there are left only maxData events.
* If after removing events by maxData parameter, we check if there are events older than forgetTime parameter.

#### Erasure of older events in database

This is done in two different places:

* In StateManager bundle, when we are inserting a new event in the database, we check if it is time to erase old events in database by maxData parameter. This is done when forgetPeriod seconds have passed since the last check.

Example : if forgetPeriod parameter is 60 seconds, this means that we only check if there are more events than indicated by maxData parameter if have passed at least 60 seconds since the last check. This can be more than 60 seconds because this check is only done when a new event is registered in the database.

* In Collector bundle, there is a dedicated thread that erases every forgetPeriod seconds old events indicated by forgetTime parameter.
