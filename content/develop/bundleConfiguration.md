+++
title= "Bundle configuration"
+++

## Get bundle configuration from file

Like ODA bundles, we can make our bundle to get its configuration from a file and to react to changes in this configuration file.

The configuration file must have the same name as the java package of our bundle.

To achieve this we must create two classes in our code.

One class will be the one containing the parameters our bundle needs. In this example our bundle needs two parameters that are two strings.

```java
@Builder
public class WsConfiguration()
{
    String measureUrl;
}
```

The other class will implement the interface _ConfigurationUpdateHandler_ which will have two methods:

* loadConfiguration - this method retrieves the values of the variables defined in configuration file

```java
public void loadConfiguration(Dictionary<String, ?> props){

    String measureUrl = (String) props.get("measureUrl");

    config = WsConfiguration.builder().measureUrl(measureUrl).build();
    
}
```

* applyConfiguration - this method applies the changes in configuration detected. To do this it calls the methods defined in our bundle classes to reload configuration to use new values.

```java
public void applyConfiguration()
{
    measureGetter.loadConfiguration(config);
}
```
