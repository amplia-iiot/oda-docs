+++
title = "Device Info"
+++

### Device Info

This Datastream module enable to register the datastreams to provide the information of the device. This means that each device will have its own module Device Info.

There are this devices info modules for now:

* [__x86_64 System devices__](https://github.com/amplia-iiot/oda/tree/master/oda-datastreams/deviceinfo): Devices with a x86_64 Linux system
* [__FX30__](https://github.com/amplia-iiot/oda/tree/master/oda-datastreams/deviceinfofx30): [Sierra Wireles FX30/FX30S](https://source.sierrawireless.com/devices/fx-series/fx30/#sthash.N8DdzEYE.dpbs) devices
* [__OWA450__](https://github.com/amplia-iiot/oda/tree/develop/oda-datastreams/deviceinfoowa450): [Owasys OWA450](https://www.owasys.com/en/products/owa450) devices

#### Dependencies

_This module have no dependencies._

#### Configuration

To configure Device Info module, a file named _es.amplia.oda.datastreams.deviceinfo.cfg_ (or _deviceinfofx30_, or _deviceinfoowa450_)
must be created with the next parameters for each input channel that you want to register:

* __deviceId__: (null if not specified). Identifier of the device. This parameter is used by the third-system (OpenGate,
Scada...) to identify where the data arrive from.
* __apiKey__: (Required parameter). API Key (like a pass) to access to the third-system.
* __source__: (Required parameter). Directory where the bundles (.jar's) are installed.
* __path__: (Required parameter). Directory where the script of the Device Info are installed. These files will be executed on runtime to collect the information.
* __scripts__: List of scripts to execute to get information about device and its datastreamId associated with the format:

        <datastreamId>=<path_to_script>;<data_type>


_es.amplia.oda.datastreams.deviceinfo*.cfg_ will have a similar format to:

```
# Device identifier. If not provided the serial number is used
deviceId=testDevice
# API Key to connect to OpenGate
apiKey=testApiKey
# Directory to get the scripts
source=deploy
# Directory to extract the scripts
path=scripts

# List of datastreamId and script to execute for this datastreamId
# <datastreamId>=<path_to_script>;<data_type>
# <data_type> can be STRING, LONG, INTEGER, BOOLEAN, FLOAT, DOUBLE, JSON. If is not specified STRING type will be used
device.clock=scripts/obtainClock.sh;JSON
device.upTime=scripts/obtainUptime.sh;LONG
device.cpu.total=scripts/obtainCpuTotal.sh;INTEGER
device.cpu.status=scripts/obtainCpuStatus.sh;
device.cpu.usage=scripts/obtainCpuUsage.sh;INTEGER
device.ram.total=scripts/obtainRamTotal.sh;LONG
device.ram.usage=scripts/obtainRamUsage.sh;INTEGER
device.storage.disk.total=scripts/obtainDiskTotal.sh;LONG
device.storage.disk.usage=scripts/obtainDiskUsage.sh;INTEGER
device.temperature.status=scripts/obtainTemperatureStatus.sh
device.temperature.value=scripts/obtainTemperatureValue.sh;INTEGER
device.serialNumber=scripts/obtainSerialNumber.sh
```
