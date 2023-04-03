+++
title = "Update"
+++

### Update

This operation is used to install/change/delete a local file of the application by the third system.

The operation will specifies the steps that ODA have to do and the url where the new files can be download to change the actuals or create news.

This means that his operation can extend the actual Agent already installed into the device at runtime.

#### Dependencies

* [Commons]({{< ref "infrastructure/core.md" >}}): Required to provide the commons utils.
* [Operation API]({{< ref "_index.md" >}}): Provides the api of the operation and the enums of the result code.

#### Configuration

 To configure Update Operation module, a file named _es.amplia.oda.operation.update.cfg_ must be created with the next parameters:

* __rulesPath__:_Required parameter_. Path where rules will be installed.
* __rulesUtilsPath__:_Required parameter_. Path where rules utils files will be installed.
* __backupPath__:_Required parameter_. Path where backups of files to update will be stored.
* __deployPath__:_Required parameter_. Path where bundles will be deployed.
* __downloadsPath__:_Required parameter_. Path where downloaded files will be stored.
* __configurationPath__:_Required parameter_. Path where configuration files will be installed.

#### Trace

The trace send by the third system (e.g. OpenGate) to the ODA to do this operation is like this:

'{"operation":{"request":{"timestamp":1557395219834,"name":"UPDATE","parameters":[{"name":"bundleName","value":{"string":"rules-creation-test"}},{"name":"bundleVersion","value":{"string":"2.0.0"}},{"name":"deploymentElements","type":"string","value":{"array":[{"name":"" + this.name + "","version":"2.0.0","type":"SOFTWARE","downloadUrl":"http://" + jschData.getSSH_SERVER_IP() + ":" + PORT_HTTP_SERVER + "/echoGet","path":"rules/" + this.datastreamId + "","order":1,"operation":"INSTALL","validators":[],"size":334,"oldVersion":"1.0.0"}]}}],"id":"48589c6e-3d9f-4e59-a066-81f357fb6cf8"}}}''
