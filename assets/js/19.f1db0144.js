(window.webpackJsonp=window.webpackJsonp||[]).push([[19],{221:function(e,t,o){"use strict";o.r(t);var n=o(0),r=Object(n.a)({},(function(){var e=this,t=e.$createElement,o=e._self._c||t;return o("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[o("h3",{attrs:{id:"mqtt"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#mqtt"}},[e._v("#")]),e._v(" MQTT")]),e._v(" "),o("p",[e._v("This connector enable communication via "),o("a",{attrs:{href:"https://github.com/amplia-iiot/oda/tree/master/oda-connectors/mqtt",target:"_blank",rel:"noopener noreferrer"}},[e._v("MQTT Protocol"),o("OutboundLink")],1),e._v(".")]),e._v(" "),o("p",[e._v("Allows to send data to the OpenGate platform and receive operations from it.")]),e._v(" "),o("h4",{attrs:{id:"dependencies"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#dependencies"}},[e._v("#")]),e._v(" Dependencies")]),e._v(" "),o("p",[e._v("This module requires the following modules:")]),e._v(" "),o("ul",[o("li",[o("strong",[o("router-link",{attrs:{to:"/infrastructure/core.html"}},[e._v("Core commons")])],1),e._v(": Provides many interfaces that this module will use")]),e._v(" "),o("li",[o("strong",[o("router-link",{attrs:{to:"/infrastructure/comms.html#mqtt"}},[e._v("Mqtt Communications Module")])],1),e._v(": Needed to create the MQTT client that will connects\nto the MQTT broker of the third system.")]),e._v(" "),o("li",[o("strong",[o("router-link",{attrs:{to:"/layers/operationdispatcher/"}},[e._v("Dispatcher")])],1),e._v(": Needed to process the payloads and de/serialize its content.")]),e._v(" "),o("li",[o("strong",[o("router-link",{attrs:{to:"/layers/datastreams/deviceinfo.html"}},[e._v("Device Info Provider")])],1),e._v(": Needed to know the Device Id of the device that are running the Agent, and the API Key to access\nto OpenGate.\nBoth data are required to achieve a connection with OpenGate and transferred data will have the deviceId in its metadata.")])]),e._v(" "),o("h4",{attrs:{id:"configuration"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#configuration"}},[e._v("#")]),e._v(" Configuration")]),e._v(" "),o("p",[e._v("To configure MQTT connector, a file named "),o("em",[e._v("es.amplia.oda.connector.mqtt.cfg")]),e._v(" must be created with the next parameters:")]),e._v(" "),o("ul",[o("li",[o("p",[o("strong",[e._v("host")]),e._v(": "),o("em",[e._v("Required parameter")]),e._v(". Specify the direction of the third system the connector have to send the data.\n'localhost' is a good host to do tests with.")])]),e._v(" "),o("li",[o("p",[o("strong",[e._v("port")]),e._v(": "),o("em",[e._v("1883 by default")]),e._v(". Port though the connector have to connect to the host.")])]),e._v(" "),o("li",[o("p",[o("strong",[e._v("securePort")]),e._v(": "),o("em",[e._v("8883 by default")]),e._v(". Alternative port to connect securely.")])]),e._v(" "),o("li",[o("p",[o("strong",[e._v("secure")]),e._v(": "),o("em",[e._v("false by default")]),e._v(". True to connect to the secure port, false to connect to common port.")])]),e._v(" "),o("li",[o("p",[o("strong",[e._v("mqttVersion")]),e._v(": "),o("em",[e._v("MQTT_3_1_1 by default")]),e._v(". Available options are MQTT_3_1, MQTT_3_1_1. MQTT version that connector has to use.")])]),e._v(" "),o("li",[o("p",[o("strong",[e._v("keepAliveInterval")]),e._v(": "),o("em",[e._v("60 by default")]),e._v(". Interval defined by MQTT client to communicate a keep alive message before to disconnect.")])]),e._v(" "),o("li",[o("p",[o("strong",[e._v("maxInFlight")]),e._v(": "),o("em",[e._v("10 by default")]),e._v(". Maximum messages that can be queued to be transmitted simultaneously.")])]),e._v(" "),o("li",[o("p",[o("strong",[e._v("cleanSession")]),e._v(": "),o("em",[e._v("true by default")]),e._v(". To specify if the connection is persistent (false) or not (true). If clean session\nis true, the broker doesn't store information or messages.")])]),e._v(" "),o("li",[o("p",[o("strong",[e._v("connectionTimeout")]),e._v(": "),o("em",[e._v("30 by default")]),e._v(". Time that client will wait to achieve the connection.")])]),e._v(" "),o("li",[o("p",[o("strong",[e._v("automaticReconnect")]),e._v(": "),o("em",[e._v("true by default")]),e._v(". If the connection fails and this option is true, enable the option to reconnect\nwith the broker.")])]),e._v(" "),o("li",[o("p",[o("strong",[e._v("lwt.topic")]),e._v(": "),o("em",[e._v("null if not specified")]),e._v(". Topic where the client will receive all Last Will messages from another clients.\nLast Will messages are a pre-agreed message between the client, and the broker to send to the other clients in case of an\nunexpected disconnection.")])]),e._v(" "),o("li",[o("p",[o("strong",[e._v("lwt.payload")]),e._v(": "),o("em",[e._v("null if not specified")]),e._v(". LWT Payload is the data that the client will agree with the broker to send to\nanother clients in case of connector's client be disconnected unexpectedly.")])]),e._v(" "),o("li",[o("p",[o("strong",[e._v("lwt.qos")]),e._v(": "),o("em",[e._v("1 by default")]),e._v(", "),o("em",[e._v("if topic and payload are specified, will be 1 by default")]),e._v(". Specify the qos of the LWT.")])]),e._v(" "),o("li",[o("p",[o("strong",[e._v("lwt.retained")]),e._v(": "),o("em",[e._v("null if not specified")]),e._v(", "),o("em",[e._v("if topic and payload are specified, will be false by default")]),e._v(". Specifies if\nthe broker will send to the another clients the LW messages even when that clients connect to the broker after the connector's\nclient disconnect unexpectedly.")])]),e._v(" "),o("li",[o("p",[o("strong",[e._v("keyStore.path")]),e._v(": "),o("em",[e._v("null if not specified")]),e._v(". Directory where the file of keys will be stored.")])]),e._v(" "),o("li",[o("p",[o("strong",[e._v("keyStore.type")]),e._v(": "),o("em",[e._v("null if not specified")]),e._v(", "),o("em",[e._v("if keyStore and trustStore path and password are specified, is JKS by default")]),e._v(".\nThe available options are: JKS, JCEKS, PKCS12, PKCS11, DKS, WINDOWS_MY, BKS. Is the type of the KeyStore that the connector will use.")])]),e._v(" "),o("li",[o("p",[o("strong",[e._v("keyStore.password")]),e._v(": "),o("em",[e._v("null if not specified")]),e._v(". Password to access to the KeyStore.")])]),e._v(" "),o("li",[o("p",[o("strong",[e._v("keyManager.algorithm")]),e._v(": "),o("em",[e._v("null if not specified")]),e._v(", "),o("em",[e._v("if keyStore and trustStore path and password are specified, is SunX509\nby default")]),e._v(". Available options are PKIX, SUN_X509, SUN_JSSE. Specify the algorithm used to handle the keys.")])]),e._v(" "),o("li",[o("p",[o("strong",[e._v("trustStore.path")]),e._v(": "),o("em",[e._v("null if not specified")]),e._v(". Directory where the file of trust keys will be stored.")])]),e._v(" "),o("li",[o("p",[o("strong",[e._v("trustStore.type")]),e._v(": "),o("em",[e._v("null if not specified")]),e._v(", "),o("em",[e._v("if keyStore and trustStore path and password are specified, is JKS by default")]),e._v(".\nThe available options are: JKS, JCEKS, PKCS12, PKCS11, DKS, WINDOWS_MY, BKS. Is the type of the TrustStore that the connector will use.")])]),e._v(" "),o("li",[o("p",[o("strong",[e._v("trustStore.password")]),e._v(": "),o("em",[e._v("null if not specified")]),e._v(". Password to access to the TrustStore.")])]),e._v(" "),o("li",[o("p",[o("strong",[e._v("trustManager.algorithm")]),e._v(": "),o("em",[e._v("null if not specified")]),e._v(", "),o("em",[e._v("if keyStore and trustStore path and password are specified, is SunX509\nby default")]),e._v(". Available options are PKIX, SUN_X509, SUN_JSSE. Specify the algorithm used to handle the keys.")])]),e._v(" "),o("li",[o("p",[o("strong",[e._v("topic.iot")]),e._v(": "),o("em",[e._v("Required parameter")]),e._v(". The topic to which the data transferred will be sent to the third-system (e.g. OpenGate).")])]),e._v(" "),o("li",[o("p",[o("strong",[e._v("topic.request")]),e._v(": "),o("em",[e._v("Required parameter")]),e._v(". The topic to which the operations will be sent from the third-system to the ODA for processing.")])]),e._v(" "),o("li",[o("p",[o("strong",[e._v("topic.response")]),e._v(": "),o("em",[e._v("Required parameter")]),e._v(". The topic to which the operations responses will be sent from the ODA to the third-system.")])]),e._v(" "),o("li",[o("p",[o("strong",[e._v("message.qos")]),e._v(": "),o("em",[e._v("1 by default")]),e._v(". This parameter can be 0, 1 or 2. QOS that will have the messages sent by connector's client.\nQOS is the level agreed between client and broker to ensure the delivery of the message.")])]),e._v(" "),o("li",[o("p",[o("strong",[e._v("message.retained")]),e._v(": "),o("em",[e._v("false by default")]),e._v(". If is true, the last message sent to broker will be sent to another clients\neven if those clients connects after the message was sent.")])]),e._v(" "),o("li",[o("p",[o("strong",[e._v("connection.initialDelay")]),e._v(": "),o("em",[e._v("0 by default")]),e._v(". Time wait by the connector's client to try the initial connection to the broker.")])]),e._v(" "),o("li",[o("p",[o("strong",[e._v("connection.retryDelay")]),e._v(": "),o("em",[e._v("300 by default")]),e._v(". If first try fails, time that the connector's client will wait before the next try to connect.")])])]),e._v(" "),o("p",[e._v("The file "),o("em",[e._v("es.amplia.oda.connector.mqtt.cfg")]),e._v(" could have a lot of parameters, but it can works correctly with the next parameters:")]),e._v(" "),o("div",{staticClass:"language- extra-class"},[o("pre",{pre:!0,attrs:{class:"language-text"}},[o("code",[e._v("host=localhost\ntopic.request=odm/request\ntopic.response=odm/response\ntopic.iot=odm/iot\nmessage.qos=1\n")])])]),o("h4",{attrs:{id:"source-code"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#source-code"}},[e._v("#")]),e._v(" Source Code")]),e._v(" "),o("p",[e._v("You can check the source code "),o("a",{attrs:{href:"https://github.com/amplia-iiot/oda/tree/master/oda-connectors/mqtt",target:"_blank",rel:"noopener noreferrer"}},[e._v("here"),o("OutboundLink")],1)])])}),[],!1,null,null,null);t.default=r.exports}}]);