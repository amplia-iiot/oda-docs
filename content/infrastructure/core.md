+++
title = "Core"
weight= 2
+++

The Core multi-module contains general interfaces, services and utils that may be used by the rest of the ODA modules.

## Commons

The Commons module contains the APIs of global services and entities used by the whole system. It also contains utils to ease the development of new features in ODA.

### Global APIs

The commons module contains the APIs for:

* Connectors
* Dispatchers
* Data streams
* SCADA services
* Serializers
* ADC
* GPIO
* I2C
* Modbus

### Proxies

A set of proxies is provided to facilitate the ODA services consumption.

{{% notice style="primary" %}}
Create a service proxy every time you define a new service in ODA using the [OsgiServiceProxy](https://github.com/amplia-iiot/oda/blob/master/oda-core/commons/src/main/java/es/amplia/oda/core/commons/osgi/proxies/OsgiServiceProxy.java), easing the use of the service without worrying about [OSGi ServiceTracker](https://osgi.org/specification/osgi.core/7.0.0/util.tracker.html) details.
{{% /notice %}}

### Utils

Common utils to ease development of common tasks. Some of them are:

* Scheduling tasks
* Locating a service
* Registering a service in the OSGi Registry
* ...
