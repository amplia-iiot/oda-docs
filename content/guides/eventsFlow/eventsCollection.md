+++
title = "Events collection"
weight= 2
+++


In Collector bundle, when we have to collect events stored in StateManager memory a number of steps is executed:

1. Get from memory all events whose datastreamId and deviceId are equals to the ones that triggered the process (all those configured in the collector config file for this moment).

2. Get from database all existing values for the datastreamId and deviceId indicated.

3. Using the values obtained from the database, all values stored in memory are updated. The update only affects the 'sent' indication. If in the values in database it is indicated that the value has already been sent, we update the value in memory to indicate the same. If it indicates that it has'nt been sent, we do the same.

4. Once all values in memory have been updated, we get all values that haven't been sent.

5. We update the 'sent' indication for these values in database.

6. Of all the values collected, filter out those whose status is not okay.

7. The values that are OK, are sent to the dispatcher to be published.

8. In OpenGate Dispatcher, for every event it is checked if the datastreamId of the event is defined in the dispatcher configuration. If it is, the event is saved in a list to be published when the dispatcher indicates. If it is not defined in the dispatcher, it will be send immediately.

We can see the relation between the collector and dispatcher in the next schema:

![collectorDispatcher](/img/collectorDispatcherRelation.drawio.svg)
