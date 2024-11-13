+++
title = "New Software"
weight = 99
+++


ODA has an update operation that allows to install or update software, rules or configuration in ODA from a third system.

We must configure the parameters needed for this operation in file *es.amplia.oda.operation.update.cfg*.
It will take five parameters:

* rulesPath - path of the folder where rules will be installed (rules/)

* rulesUtilsPath - path of the folder where auxiliary javascript files to  use with rules will be installed (jslib/)

* backupPath - path of the folder where backups will be made (backup/)

* deployPath - path of the folder where bundles will be deployed (deploy/)

* downloadsPath - path of the folder where new software or rule will be downloaded before install (downloads/)

* configurationPath - path of the folder where configuration will be installed (configuration/)
