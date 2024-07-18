+++
title = "Subsystems"
weight= 5
+++


The Subsystems multi-module contains modules providing complete features that were needed and runs independently of the rest of the system.

## Poller

The Poller subsystem is responsible for polling datastream getters to update the State Manager, preventing outdated data.

### Configuration

The Poller subsystem configuration is provided in a configuration file with the following line format:

```
datastreamId;deviceId=firstPollingInSeconds;nextPollingInSeconds
```

The configuration fields are:

* __datastreamId__: Datastream identifier to poll
* __deviceId__: Device identifier to poll. If no one is provided all devices are polled. _Optional_
* __firstPollingInSeconds__: Seconds to poll for the first time. _Optional_
* __nextPollingInSeconds__: Period between polls. Could be 0 to poll just one time.

## Collector

The Collector subsystem is responsible for collecting datastream data from the State Manager to send it to the Dispatcher (so it goes to the connector and is sent to the Internet).

### Configuration

The Collector subsystem configuration is provided in a configuration file with the following line format:

```
datastreamId;deviceId=firstCollectingInSeconds;nextCollectingInSeconds
```

The configuration fields are:

* __datastreamId__: Datastream identifier to collect
* __deviceId__: Device identifier to collect. If no one is provided the datastreams of all devices are collected. _Optional_
* __firstCollectingInSeconds__: Seconds to collect for the first time. _Optional_
* __nextCollectingInSeconds__: Period between collects. Could be 0 to collect just one time.

## SSH Server

The SSH server subsystems provide a SSH server to connect to the ODA console (based in Apache Felix Gogo).

### Configuration

The configuration is:

* `ip`: Ip address where the server is listening
* `port`: Port where the server is listening.
* `username`: Username to authorize the connection.
* `password`: Encoded password using _SHA-512_ to authorize the connection.

A configuration file example is

```properties
ip=127.0.0.1
port=50000
username=oda
password=0d878278b5225ed381a8b4114acca68e019dfb346f1d067271137abcdaaa46200b6b7e0d459ccf821aa788216fd8ca6168f6c814505d64fc5cdb5fdecedbdc2f   # oda
```

## Counter Manager

The Counter Manager subsytem is used for analyze the performance of your bundle. You can put counter in your bundle code and this counter bundle print statistics in a log file.

### Configuration

The configuration of counters have 2 files. The first file you have is the configuration of this bundle, a file named **es.amplia.oda.subsystem.countermanager.cfg** where you can configure things like the period for counters storage in seconds or the format of showing data in the counters log:

* `countermanager.enable`: If enable or not the Counter Manager Subsytem
* `countermanager.initialSize`: Minimun number of counters
* `countermanager.store.slottime`: Period for counters storage in seconds
* `countermanager.store.limit`: Maximum number of samples for increment estimation
* `printeroutputmanager.showdata.format`: Format for showing data in the file
* `printeroutputmanager.showdata.setTotal`: 
* `printeroutputmanager.showdata.setRatio`: 
* `printeroutputmanager.showdata.setAcc`: 
* `printeroutputmanager.showdata.setAvg`: 
* `printeroutputmanager.showdata.setVar`: 

Aconfiguration file example is

<code>
    
    countermanager.enable=true

    # minimun number of counters
    countermanager.initialSize=10

    # store policy
    # - slottime: period for counters storage in seconds
    # - limit: maximum number of samples for increment estimation
    countermanager.store.slottime=60
    countermanager.store.limit=2

    # set constant size of data
    printeroutputmanager.showdata.format=##0.000000
    printeroutputmanager.showdata.setTotal=10
    printeroutputmanager.showdata.setRatio=10
    printeroutputmanager.showdata.setAcc=14
    printeroutputmanager.showdata.setAvg=11
    printeroutputmanager.showdata.setVar=12
</code>

And the other file, named **counters.properties**, where you can configure the counter you want to show in the *counters.log*:

<code>

    ######## TEST #######
    TEST/COUNTER/SIMPLE
    TEST/COUNTER/REPLACE/*
</code>

You can configure your counters like a tree. If you want all your test counter in the same block you shoud put *TEST/COUNTER* or if you want an specific type of replacement in your counter you shoud put *TEST/COUNTER/REPLACE/ANY_TYPE*. If you put *TEST/COUNTER/REPLACE/* * your are putting al the replacements in differents block in te *counters.log*.

**Note:** You have to put *counters.properties* in the folder **conf** of the ODA project.

## Counters output
The output of the counters is a log appender named **_COUNTER** and it is usually configued as file log named *counters.log* in the logback.xml configuration.

For each counter configured in the *counters.properties* you can see a line like this:

<code>
    
    2024-05-09 13:25:00.001 [COUNTERS] INFO _COUNTER -          1 - rat:   0.016667 (ips) - avg:         N/A - std:          N/A - acc:            N/A - TEST/COUNTER/SIMPLE

    2024-05-09 13:25:00.001 [COUNTERS] INFO _COUNTER -          1 - rat:   0.016667 (ips) - avg:         N/A - std:          N/A - acc:            N/A - TEST/COUNTER/REPLACE/ANY_TYPE
</code>

* In the first column you have all times the code have called this counter.
* In *rat* column you have the ratio of the calls you have in the prediod configured in *countermanager.store.limit*.
* In *avg* you have the avarage of the calls in the period.
* In *std* you have th stadard deviation of the calls in the period.
* And in *acc* you have tha accumulate of the calls in the period.