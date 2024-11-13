+++
title = "Hardware"
weight= 3
+++

### Hardware

The Hardware layer abstract hardware and LAN protocols details decoupling the hardware access and use from the device details.

{{% notice style="primary" %}}
Anytime you need to access a specific hardware, abstract the access and actions in a new API and implement the concrete behavior in a new implementation module registered in OSGi.
{{% /notice %}}

#### Available abstractions

Below are the hardware abstractions currently implemented

##### [AT Server](atserver)

Server capable of sending and receiving AT Commands.

Implement the following interface:

```java
public interface ATManager {
    void registerEvent(String atEvent, Consumer<ATEvent> function) throws AlreadyRegisteredException;
    void unregisterEvent(String atEvent);
    void registerCommand(String atCmd, Function<ATCommand, ATResponse> commandHandler) throws AlreadyRegisteredException;
    void unregisterCommand(String atCmd);
    void process(String line);
    CompletableFuture<ATResponse> send(ATCommand cmd, long timeout, TimeUnit unit);
    void send(ATEvent evt);
}
```

##### [Comms module](comms)

Module capable of registering to Internet using a PIN, APN, username and password.

```java
public interface CommsManager {
    void connect(String pin, String apn, String username, String password, int connectionTimeout, long retryConnectionTimer);
}
```

##### [ADC Service](diozero)

Abstraction of the [Analog Digital Converter](diozero) pins of the device.

```java
public interface AdcService {
    AdcChannel getChannelByName(String channelName);
    AdcChannel getChannelByIndex(int index);
    Map<Integer, AdcChannel> getAvailableChannels();
}
```

The AdcChannel definition is:

```java
public interface AdcChannel {
    int getIndex();
    int getPin();
    String getName();
    float getRange();
    float getScaledValue();
    float getUnscaledValue();
    void addAdcPinListener(AdcChannelListener listener);
    void removeAllAdcPinListener();
    void close();
}
```

##### [I2C](i2c)

[I2C](i2c) protocol abstraction to access [I2C](i2c) devices (sensors, microcontrollers, ...).

```java
public interface I2CService {
    I2CDevice getI2CFromAddress(int controller, int address);
    I2CDevice getI2CFromName(String name);
    List<I2CDevice> getAllI2CFromController(int controller);
    List<I2CDevice> getAllI2C();
}
```

The [I2C](i2c) device is defined as follows:

```java
public interface I2CDevice {
    int getAddress();
    int getController();
    String getName();
    double readRawData() throws InterruptedException;
    double readScaledData() throws InterruptedException;
    ByteBuffer read(int count);
    byte readByte();
    void write(float data);
    void writeByte(byte b);
    boolean isOpen();
    void close();
}
```

##### [GPIO](jdkdio)

Access to device input/output digital pins

```java
public interface GpioService {
    GpioPin getPinByName(String pinName);
    GpioPin getPinByName(String pinName, GpioDirection direction, GpioMode mode, GpioTrigger trigger, boolean activeLow, boolean initialValue);
    GpioPin getPinByIndex(int index);
    GpioPin getPinByIndex(int index, GpioDirection direction, GpioMode mode, GpioTrigger trigger, boolean activeLow, boolean initialValue);
    Map<Integer, GpioPin> getAvailablePins();
}
```

The [GPIO](jdkdio) pin interface is:

```java
public interface GpioPin {
    int getIndex();
    String getName();
    GpioDirection getDirection();
    GpioMode getMode();
    GpioTrigger getTrigger();
    boolean isActiveLow();
    boolean getInitialValue();
    boolean isOpen();
    void open();
    void close();
    boolean getValue();
    void setValue(boolean value);
    void addGpioPinListener(GpioPinListener listener);
    void removeGpioPinListener();
}
```

##### [Modbus](modbus)

The [Modbus](modbus) module abstracts the communication with [Modbus](modbus) devices through a [Modbus](modbus) Master.

```java
public interface ModbusMaster {
    String getDeviceId();
    String getDeviceManufacturer();
    void connect();
    boolean readInputDiscrete(int unitId, int ref);
    Boolean[] readInputDiscretes(int unitId, int ref, int count);
    boolean readCoil(int unitId, int ref);
    Boolean[] readCoils(int unitId, int ref, int count);
    void writeCoil(int unitId, int ref, boolean value);
    void writeCoils(int unitId, int ref, Boolean[] values);
    Register readInputRegister(int unitId, int ref);
    Register[] readInputRegisters(int unitId, int ref, int count);
    Register readHoldingRegister(int unitId, int ref);
    Register[] readHoldingRegisters(int unitId, int ref, int count);
    void writeHoldingRegister(int unitId, int ref, Register register);
    void writeHoldingRegisters(int unitId, int ref, Register[] registers);
    void disconnect();
}
```

##### [FTP](ftp)

The [FTP](ftp) module abstracts the communication with [FTP](ftp) servers.


##### [OPC UA](opcua)

The [OPC UA](opcua) module abstracts the communication with [OPC UA](opcua) devices.

```java
public interface OpcUaConnection {
    void connect() throws OpcUaException;
    String browse(String tab, String nodeId) throws OpcUaException;
    String readNode(String nodeId) throws OpcUaException;
    Object readVariable(String nodeId) throws OpcUaException;
    void writeVariable(String nodeId, Object value) throws OpcUaException;
    Object[] method(String objectId, String methodId, Object[] params) throws OpcUaException;
    void disconnect() throws OpcUaException;
}
```