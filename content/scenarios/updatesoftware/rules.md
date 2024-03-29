+++
title = "Install rules"
weight= 3
+++

## Load rule in OpenGate

To be able to install a new rule in ODA, first we must load the rule in OpenGate.

We go to the option *Create new bundle* and follow the wizard instructions. There are some considerations when filling the wizard fields:

* The name and version fields in bundle configuration tab are not important since rules doesn't have versions and the name will be the one indicated when uploading file in deploy elements tab.

* The hardware and workgroup assigned to the rule must be the same as the fields Model and Organization of the entity in which we want to install the rule.

* Choose operation INSTALL, type SOFTWARE and the file corresponding to the rule we want to deploy. The name defined in this tab will be the name of the javascript file containing the rule code created.

* The route parameter must be the same value as the folder in which the rule must be installed (rulesPath/datastreamIds). Rules path is the one defined in configuration file *es.amplia.oda.ruleengine.nashorn.cfg*.
The folder name must be composed of the datastreamIds we want the rule to apply, separated by the character ':'.
If this folder doesn't exist in ODA, it will be created.

When the wizard is finished, the rule has been uploaded to OpenGate. We must check that the rule is activated before we can launch the UPDATE operation against ODA. If it is not activated (there is an option to activate the rule when we upload it to OpenGate), we can activate from the bundle list widget, clicking in the three dots at the side of the rule.

Once this is done, we launch the execute operation wizard, select the *Device Update* operation and fill the name of the rule we want to install and its version (must be the same values we registered the rule with).

## Rule installation in ODA

When ODA receives the UPDATE operation, it will download the rule into the folder specified in *downloadsPath* parameter in configuration file (this parameter must end with '/').

For ODA to be able to load the rule, the file *utils.js* (located in oda-ruleengine/api/src/main/resources/utils.js) must be copied in *rulesUtilsPath* folder as the rule downloaded will load it. Other javascript files the rule must load to be executed must be in these folder too.

Once the rule is downloaded it will try to install it. If everything was right, we will see the message *Created rule rulesPath/datastreamIDs/ruleName.js* in the log file.

If there is an error while installing the bundle, ODA will try to do a rollback to return to previous state.

## Update existing rule

If we want to load a new version of a rule already installed in ODA, the process is the same, we upload the new rule to OpenGate but in the deploy elements tab, we choose *UPGRADE* as operation, we fill parameters as old name (must be the same as new name), old version (doesn't matter in this case) and old route (must be the same as new route). We fill the rest of the parameters as if it is a new rule and launch the *Device Update* operation.

When the operation reaches ODA the process is the same as installing a new rule. If everything was right, we will see the message *Created rule rulesPath/datastreamIDs/ruleName.js* in the log file.

## Update rules utils files

Rules utils files are javascript files whose methods are invoked by rules.
ODA has a main utils file called utils.js but we can create our own utils file apart from this one and save there methods used by rules to avoid writing the same method in every rule.

These files can also be updated through OpenGate. The method to install and update these files is the same as any rule. We deploy these elements in OpenGate as if it is a rule.

When ODA installs or update any of these files, all existing rules in ODA will be reloaded to apply these new methods.
