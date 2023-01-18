+++
title= "New operation"
+++

## Implement new operation

To implement an operation in our bundle we must create a class that implements the interface CustomOperation.

This interface has two methods:

* getOperationSatisfied - returns the Id of the operation

* execute - this methods execute the operation

After this class is implemented we must register the operation in the framework. We can do this using the class ServiceRegistration.

```java
ServiceRegistration<CustomOperation> = bundleContext.registerService(CustomOperation.class, new TestCustomOperation(), null);
```

To use this operation we must create the operation in OpenGate with the same name as the id defined in the CustomOperation class.

When the operation its launched, ODA will check the Id with the operations registered in the framework and when it finds a match, it will launch the execute method of the operation.
