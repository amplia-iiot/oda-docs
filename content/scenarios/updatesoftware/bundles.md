+++
title = "Install bundles"
weight= 2
+++


## Load bundle in OpenGate

To be able to install a bundle in ODA, first we must load the bundle in OpenGate.

We go to the option *Create new bundle* and follow the wizard instructions. There are some considerations when filling the wizard fields:

* The name of the bundle must be equal to the symbolic name of the bundle defined in pom file.

* The hardware and workgroup assigned to the bundle must be the same as the fields Model and Organization of the entity in which we want to install the bundle.

* Choose operation INSTALL, type SOFTWARE and the file corresponding to the bundle we want to deploy.

* The route parameter must be the same value as *deployPath* in configuration file.

When the wizard is finished, the bundle has been uploaded to OpenGate. We must check that the bundle is activated before we can launch the UPDATE operation against ODA. If it is not activated (there is an option to activate the bundle when we upload it to OpenGate), we can activate from the bundle list widget, clicking in the three dots at the side of the bundle.

Once this is done, we launch the execute operation wizard, select the *Device Update* operation and fill the name of the bundle we want to install and its version.

## Bundle installation in ODA

When ODA receives the UPDATE operation, it will download the bundle into the folder specified in *downloadsPath* parameter in configuration file (this parameter must end with '/').

Once the bundle is downloaded it will try to install it. If everything was right, we will see these messages in log file:

* BundleEvent INSTALLED - the bundle has been installed

* BundleEvent RESOLVED - the bundle dependencies have been resolved

* BundleEvent STARTED - the bundle has been started

If there is an error while installing the bundle, ODA will try to do a rollback to return to previous state.
