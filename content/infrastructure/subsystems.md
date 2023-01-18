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
