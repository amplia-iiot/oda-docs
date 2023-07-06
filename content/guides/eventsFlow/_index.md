+++
title = "Events flow"
weight= 1
+++

## Introduction

This section will include schemas to explain the stages an event goes through from being read from a device to being published.

![eventsFlow](/img/eventsFlow.drawio.svg)

1. Poller reads data from devices using the corresponding connector and passes it to the StateManager to be processed.
2. Depending on the configuration, the behavior of the StateManager differs.

    * If we are using StateManager-RealTime, data will be sent to the dispatcher to be published.

    * If we are using StateManager-InMemory, data will be processed (using rule engine) and stored. We can also send the processed data directly to the dispatcher marking the data to be sent immediately. It is explained in more detail in [__events processing__](/guides/eventsflow/eventsprocessing).

3. The collector, retrieves data stored in the StateManager-InMemory and sends it to the dispatcher. It is explained in more detail in [__events collection__](/guides/eventsflow/eventscollection).
4. Dispatcher sends data (trough the necessary connector) to an external system.
