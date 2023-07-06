+++
title = "Events processing"
weight= 1
+++


In StateManager- InMemory bundle, when a new event from a device arrives, it is processed executing a number of steps:

1. Rules associated to the datastreamId of the event are applied to the event. There can be N rules to be applied.

2. Once all rules have been applied, we retrieve from StateManager memory all the datastreamIds which have been marked as 'refreshed' (there is a new value for that datastreamId) or as 'sendImmediately'.

3. If the datastreamId has been marked as 'sendImmediately', the event is parsed and saved in a list to be sent at the end of the process. The value in memory is marked as 'sent'.

4. If the datastreamId has been marked as refreshed, the new values are saved in database (if the datastreamId was marked as 'sendImmediately' it will be saved in database with 'sent' = true, otherwise 'sent' = false). After saving the new values, it will be checked if it is needed to erase old data from database.

5. Once all events have been processed, those marked to send immediately will be passed along to the dispatcher to be published.

There are some things to consider:

* Refreshed and sendImmediately marks are applied to all the values of the datastreamId marked. This means that if inside the rules, we generate N new values, all of them will be marked.

* Inside rules que can generate N new values for any datastreamId, not only the one from the event that triggers the process. Because of this, after applying the rules we must check all the datastreamIds that have been marked.
