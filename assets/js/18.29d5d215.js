(window.webpackJsonp=window.webpackJsonp||[]).push([[18],{219:function(e,t,o){"use strict";o.r(t);var r=o(0),a=Object(r.a)({},(function(){var e=this,t=e.$createElement,o=e._self._c||t;return o("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[o("h3",{attrs:{id:"iec-104"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#iec-104"}},[e._v("#")]),e._v(" IEC 104")]),e._v(" "),o("p",[e._v("This connector enable communication via "),o("a",{attrs:{href:"https://github.com/amplia-iiot/oda/tree/master/oda-connectors/iec104",target:"_blank",rel:"noopener noreferrer"}},[e._v("IEC 104 Protocol"),o("OutboundLink")],1),e._v(".")]),e._v(" "),o("p",[e._v("Allow the transfer of data and operations with a SCADA third-system that implements an IEC 104 master (client).")]),e._v(" "),o("h4",{attrs:{id:"dependencies"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#dependencies"}},[e._v("#")]),e._v(" Dependencies")]),e._v(" "),o("p",[e._v("This module requires the following modules:")]),e._v(" "),o("ul",[o("li",[o("strong",[o("router-link",{attrs:{to:"/infrastructure/core.html"}},[e._v("Core Commons")])],1),e._v(": Provides many interfaces that this module will use.")]),e._v(" "),o("li",[o("strong",[e._v("[Scada Dispatcher](../operationdispatcher/README.md#SCADA Dispatcher)")]),e._v(": Needed to process the payloads and de/serialize its content.")])]),e._v(" "),o("h4",{attrs:{id:"configuration"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#configuration"}},[e._v("#")]),e._v(" Configuration")]),e._v(" "),o("p",[e._v("To configure IEC 104 connector, a file named "),o("em",[e._v("es.amplia.oda.connector.iec104.cfg")]),e._v(" must be created with the next parameters:")]),e._v(" "),o("ul",[o("li",[o("strong",[e._v("localAddress")]),e._v(": "),o("em",[e._v("Required parameter")]),e._v(". Specify the direction of the third system the connector have to send the data.\n'localhost' is a good host to do tests with.")]),e._v(" "),o("li",[o("strong",[e._v("localPort")]),e._v(": "),o("em",[e._v("Required parameter")]),e._v(". Port though the connector have to connect to the host.")]),e._v(" "),o("li",[o("strong",[e._v("originatorAddress")]),e._v(": "),o("em",[e._v("Required parameter")]),e._v(". Direction of the IEC104 client.")]),e._v(" "),o("li",[o("strong",[e._v("commonAddress")]),e._v(": "),o("em",[e._v("Required parameter")]),e._v(". Direction of the IEC104 slave the connector is using.")]),e._v(" "),o("li",[o("strong",[e._v("spontaneousEnabled")]),e._v(": "),o("em",[e._v("Required parameter")]),e._v(". Specify if the connector will send immediately the data or will alloc it\nin a cache waiting for a request from the master.")])]),e._v(" "),o("p",[e._v("In other words, "),o("em",[e._v("es.amplia.oda.connector.iec104.cfg")]),e._v(" will have the content:")]),e._v(" "),o("div",{staticClass:"language- extra-class"},[o("pre",{pre:!0,attrs:{class:"language-text"}},[o("code",[e._v("localAddress=localhost\nlocalPort=2404\noriginatorAddress=0\ncommonAddress=1\nspontaneousEnabled=true\n")])])]),o("h4",{attrs:{id:"source-code"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#source-code"}},[e._v("#")]),e._v(" Source Code")]),e._v(" "),o("p",[e._v("You can check the source code "),o("a",{attrs:{href:"https://github.com/amplia-iiot/oda/tree/master/oda-connectors/iec104",target:"_blank",rel:"noopener noreferrer"}},[e._v("here"),o("OutboundLink")],1)])])}),[],!1,null,null,null);t.default=a.exports}}]);