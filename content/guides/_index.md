+++
title = "Guides"
weight= 5
+++

## Introduction

This section will include guides to execute common tasks in ODA development.

## Dependencies

Some bundles need others to work correctly, because those bundles implements a common api and implements some functions
that the first bundles need to use in its operation.

It is important to handle the dependencies, including those bundles that need the modules we will use.

If you need to know what dependencies have a module that you want to use, you can go to its respective documentation page
or use [this table]({{< ref "dependency-table/_index.md" >}}).

## Demos

The demos are examples of a deploy of ODA.

Demos are composed by:

* An assembly directory, with a file in xml format that contains what bundles will be included in the demo. This bundles
are the basic resources of apache and logging and the ODA bundles, which contain the functions of the application.
* A resources bundle that contains all the config files, either of the oda or of the apache and gogo console. Also contains
the script that will run the ODA.

To use them, you have to run the command

```sh
mvn clean install
```

to generate the tar with everything installed. This tar will have a name with the following format

```
<name of the demo>-<version of the demo>.tar.bz2
```

Extract the tar and, if you use a device, move the directory extracted to the device. Change the current directory to
the demo directory and enter the command:

```
./bin/run.sh
```

:::tip
If you're running the demo into OWA450, is important run this as su. To do it, run the command with sudo.
:::

### Provided demos

Actually are three provided demos by us that the new users of ODA can use to test.

These demos can be extended, adapted and used as a base to make your own demo thanks to the modularity of the ODA components.

#### COAP Demo

This demo contains the required modules to enable the communication through CoAP, use simulated data streams,
handle operations, handle event and communicate with the OpenGate platform.

This demo can run in any platform just changing the device info module to the specific device info module of it device.

You can see the implementation in [our repository](https://github.com/amplia-iiot/oda/tree/master/oda-demos/coap)

##### MQTT Demo

This demo contains the required modules to enable the communication through MQTT with Opengate, use simulated data streams,
handle operations and handle event. Also use the In Memory State Manager, that will
store values of the events into a state instead of send it, receiving the stored data when we do a get.

This demo can run in any platform just changing the device info module to the specific device info module of it device.

You can see the implementation in [our repository](https://github.com/amplia-iiot/oda/tree/master/oda-demos/mqtt)

##### FX30 MQTT Demo

This demo contains the required modules to enable the communication through MQTT with Opengate, use simulated data streams,
handle operations and handle event.

This demo can run in any platform just changing the device info module to the specific device info module of it device.

You can see the implementation in [our repository](https://github.com/amplia-iiot/oda/tree/master/oda-demos/fx30-mqtt)

#### Custom demos

For made your own demo, you have to create the next things:

* assembly/xxxxx.xml: This is a file with the same format as a pom.xml that specify the name of the demo and the deploy
    steps of the demo with the bundles used in the demo.
* resources/apacheFelixConfiguration/config.properties: Framework configuration file.
* resources/apacheFelixConfiguration/logback.xml: Logger configuration file. Specifies how and where (in which file it
    is stored) the log information have to be stored.
* resources/gogoConsoleConfiguration/gosh_profile: Specifies what the console has to write to interact with the user.
* resources/gogoConsoleConfiguration/motd: Nothing inside this.
* resources/gogoConsoleConfiguration/motd_remote: Initial output of the demo in the console.
* resources/gogoConsoleConfiguration/ssh_profile: Specifies what the console has to write to interact with the user if
    the demo is run through ssh.
* resources/odaBundlesConfiguration/*: The configuration files of the bundles. These files have to be named as is specified
    in its documentation page, in the configuration section.
* resources/scripts/run.sh: This is the bash script that have to run the ODA application.

:::tip
It is advisable to use a provided demo as base for the custom demo.
This is because use existing configuration files, run script and assembly file is easier than made it from scratch.
Instead of create a new file of assembly, change the bundles included in the dependencySet of the deploy directory to the
desired bundles, putting a include section for each bundle included.
If a bundle is removed from the assembly file, delete the configuration file of that bundle and, if it is added, add its
configuration file as is explained in the configuration section of its documentation page.
:::

In order to choose the bundles that will make up the ODA application it's important to know the dependencies of the bundles that
we want to use. The dependencies are listed in the Dependencies section of the documentation page of the desired bundle.
A bundle won't work if its dependencies are not included in the demo.

### Devices

Some bundles have many versions depending on the device where the bundle will be run. That is because the libraries implemented
use native code and is require to cross-compile the bundle with the right cross-tools. This bundles are, at this moment:

* [DNP3 Connector]({{< ref "layers/connectors/dnp3.md" >}})
* [ADC Hardware]({{< ref "layers/hardware/diozero.md" >}})
* [GPIO Hardware]({{< ref "layers/hardware/jdkdio.md" >}})

To make it work, you have to install the oda-external-dependencies. To do that, you must have installed the cross-tool of
the target device and run the install-oda-external-dependencies:

```sh
./install-oda-external-dependencies.sh
```

#### x86_64 Linux system

To work in your local x86_64 system is not required any installation of a specific cross-tool. Just run the command of
external dependencies and deploy the ODA application.

#### FX30

To work in a FX30 device, you must have installed Legato on your computer and put the legato directory on your home directory.

To install the legato application and its cross tool, download its [official IDE](https://source.sierrawireless.com/resources/airprime/software/developer-studio-installinstructions/#sthash.YUYdT817.dpbs).

:::tip
Remember to extract the content of the downloaded zip in the directory *$HOME/legato* or you will have to change the
path used in the external dependencies pom's to locate the legato cross-tools.
:::

#### OWA450

To work in a OWA device, you must have installed a ng cross-tool on your computer and put it in /opt directory with the
name */opt/gcc-linaro-5.3-2016.02-x86_64_arm-linux-gnueabihf*.

To install a ng cross tool follow the next steps:

1. Download the cross tool with the command: *wget <http://crosstool-ng.org/download/crosstool-ng/crosstool-ng-1.23.0.tar.bz2>*.
2. Create a directory called *gcc-linaro-5.3-2016.02-x86_64_arm-linux-gnueabihf* in */opt*.
3. Extract the downloaded tar in the directory.

If any command of the download is missed, you will have to install it, doing an `apt-get install \<name of the command>`.
This commands are usually gperf, bison, flex, texinfo and help2man.

If an error which contains "lib curses" occurs you have to do an `apt-get install libncurses-dev`.

### Functions

#### MQTT Communication

There are several bundles about the MQTT communication and can be a little confusing understand how to use them. For this
reason, we have created this guide. To explain what is the point of each bundle and how to deploy it.

##### MQTT Communications

This is a kind of interface to the MQTT functionality bundles.

Provides of various interfaces that the MQTT bundles will use and implements to achieve the connection with the remote MQTT
broker and the minimum implemented common classes to handle the MQTT local clients that use the functions and classes of
the ODA's MQTT library.

The main end of this module is collect all the uses of the MQTT library in one module as hardware modules do with their respective libraries.

The library that implements ODA to handle the MQTT connection is the [eclipse paho](https://www.eclipse.org/paho/).

To add this bundle to the ODA application is not needed another MQTT bundle, but it's necessary (like with the most part
of ODA bundles) to add the [Core Commons]({{< ref "infrastructure/core.md" >}}). That is because the core commons provides some enums
that this module uses.

##### MQTT Connector

This connector allow to connect with the third system platform (e.g. SCADA or OpenGate) in order to send to it the collected
data and allow to receive and respond the operation that these platforms can send to ODA.

This module doesn't uses the paho library but requires that the [MQTT Comms]({{< ref "infrastructure/comms.md" >}}) bundle has been added to the ODA.
In addition to this, requires the [Core Commons]({{< ref "infrastructure/core.md" >}}). That is because the core commons provides the
same enums that uses the MQTT Comms, some interfaces and proxies of other dependencies that this module have and some utils.

##### MQTT Data stream

This data stream allow to connect with another device through MQTT and use its registered data streams. To do this, ODA
have to connect to the same broker that the device, ask it for its registered data streams, enable the data streams that the
device provides to ODA and, when this is done, made the desired operations about the data streams controlled by this device.
To do the operations on the remote device's data streams, the connection have to be still alive. To know if is alive or not,
the device should have a Last Will Message accorded with the broker that will sent to the ODA if the connection of the device
is dropped to disable the data streams in ODA and the device itself have to send a similar message if disconnect correctly.

That messages will have a topic specific to its message type, sending the Last Will messages through one topic, enabling
data streams messages through another, disabling data streams messages by another...

This module doesn't uses the paho library but requires that the [MQTT Comms]({{< ref "infrastructure/comms.md" >}}) bundle has been added to the ODA.
In addition to this, requires the [Core Commons]({{< ref "infrastructure/core.md" >}}). That is because the core commons provides the
same enums that uses the MQTT Comms, some interfaces and proxies of other dependencies that this module have and some utils.

#### Inputs and Outputs

There are several ways to receive the in/output of the devices handled by the ODA. The most frequent services are the ADC
and DIO, these items are hardware implementation of two different libraries that allow to read and write Analog and Digital
in/outputs respectively.
Also exists the I2C protocol that is used to communicate between different parts of the same device (sensors, expansion cards, etc.).

##### Digital In/Outputs

The Digital Inputs Outputs (DIO) hardware module is an implementation of the [OpenJDK](https://github.com/openjdk/jdk) library.

This Hardware Module allows to read the data from the Digital Inputs and write to digital Outputs.

This module requires that the device that contains it implements the [Sysfs Interface](https://www.kernel.org/doc/Documentation/gpio/sysfs.txt),
which is what this module will use. In case of not been implemented, it can't be used unless we implement an adapter
service that will always run since the boot of the device.
This adapter is implemented [in our repository](https://github.com/amplia-iiot/owa_input_parser) for the OWA450 device.

If the kernel of the device is over 4.4 is probably that the gpio directory and the un/export command doesn't work. In
that case the directory */sys/class/gpio* have to be created with two files in it, the export file that will create the
digital pin controller if the command `echo X > export` is run (where X is the number of the pin) and the unexport file
that will remove the digital pin controller if the command `echo X > unexport` is run (where X is the number of the pin).

It is important configure the pin with the desired properties for the target pin. To do this, we have a module configuration
where, unlike the most of modules, specifies multiple configurations in one file. For each line of the configuration file,
we are specifying the configuration of one pin that we want the ODA to handle. This configuration is individual to each
pin and will have the next format:

```
numberOfTheConfiguredPin=property1:value1,property2:value2,...
numberOfAnotherConfigurePin=property1:anotherValue1,property2:anotherValue2,...
```

For more details to use this module, go to its [documentation page]({{< ref "layers/hardware/jdkdio.md" >}})

##### Analog In/Outputs

The Analog to Digital Converter (ADC) hardware module is an implementation of the [DIOZero](https://github.com/mattjlewis/diozero) library.

This Hardware Module allows to read the data from Analog Inputs (only for input data).

This module requires that the device firmware handle the input analog data and to keep it in a specific file. If the firmware
doesn't keep the data to any file, an adapter has to be created. The adapter, that should be running constantly since boot,
has to get the data from the device and keep it in a file.
The OWA450 needs an adapter already implemented [in our repository](https://github.com/amplia-iiot/owa_input_parser).

Once we have the file with the data stored in it, the module can read the data from the file configuring it. This module's
configuration, unlike the most of modules, specifies multiple configurations in one file. For each line of the configuration file,
we are specifying the configuration of one channel that we want the ODA to handle. This configuration is individual to each
channel and will have the next format:

```
numberOfTheConfiguredChannel=property1:value1,property2:value2,...
numberOfAnotherConfigureChannel=property1:anotherValue1,property2:anotherValue2,...
```

For more details to use this module, go to its [documentation page]({{< ref "layers/hardware/diozero.md" >}})

##### I2C Protocol

The I2C module is an implementation of the [DIOZero](https://github.com/mattjlewis/diozero) library.

This Hardware Module allows to read data from the circuits, sensors, expansion cards, etc. connected to the device that
handle the ODA.

The configuration of this module, like the rest of I/O Controllers modules, specifies multiple configurations in one file.
For each line of the configuration file, we are specifying the configuration of one device that we want the ODA to handle.
This configuration is individual to each device and will have the next format:

```
nameOfTheConfiguredChannel=property1:value1,property2:value2,...
nameOfAnotherConfigureChannel=property1:anotherValue1,property2:anotherValue2,...
```

For more details to use this module, go to its [documentation page]({{< ref "layers/hardware/i2c.md" >}})

#### Operations

All the operations implements an common API that have to be included in the ODA to run the operations. Each operation module
implements the functionality of an operation. The demos have included all operations available on ODA and this is recommended,
but in some cases maybe some operation wont be expected and it's not necessary to include it to ODA.

This operations work as follows:

1. The third system send a operation message, serialized in JSON format, to whatever ODA's connector.
2. ODA's connector pass the message to the dispatcher
3. The dispatcher deserialize the message.
4. The dispatcher get the operation code and search for implementation of that in its current catalogue.
5. The dispatcher run the implementation's process method.
6. The implementation of the operation processes the arrived information from the connector.
7. The operation returns a Result message that will be returned serialized to the connector.
8. Connector send the response message (AKA payload).

If you need to do tests with the operations is highly recommended to use the MQTT connector and the [Mosquitto application](https://mosquitto.org/).
This application mock a MQTT broker and allow to send messages / put listeners on that broker, so we can to enter manually
the operations messages that the ODA expects to do the operation.

This messages can be found in the Trace section of each documentation page of the [Operations]({{< ref "layers/operations/_index.md" >}})

##### Custom Operation

To create your own operation, you have to implement the [Custom Operation Interface]({{< ref "layers/operations/_index.md" >}}).
It's important that the third system can send the operation request that ODA expects and the specific format.

#### State Manager

There are currently two implementations of the dispatcher module.

* Real Time Dispatcher: Dispatcher that doesn't store any data in itself. All the incoming data will be sent directly.
* In Memory Dispatcher: Dispatcher that stores the incoming information to cna send it by request or handle derived information.

To use the dispatchers, is necessary to include in the demo the dispatcher API, that contains the commons dispatcher functions.

##### Real Time State Manager

To deploy this dispatcher is important to use the Dispatcher API.

Nothing else is needed.

#### In Memory State Manager

To deploy this dispatcher you have to deploy the Dispatcher API, the Rule Engine API and the specific implementation of
the rule engine that you will use.

This is because the historic data will be used by the rulke engine bundle and is needed to include it to be used, having
both of these bundles a mutual dependency.
