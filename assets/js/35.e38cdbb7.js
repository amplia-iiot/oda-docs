(window.webpackJsonp=window.webpackJsonp||[]).push([[35],{238:function(e,t,r){"use strict";r.r(t);var a=r(0),i=Object(a.a)({},(function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[r("h3",{attrs:{id:"i2c"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#i2c"}},[e._v("#")]),e._v(" I2C")]),e._v(" "),r("p",[e._v("This Hardware module allows to use the in/outputs provided by I2C bus.")]),e._v(" "),r("p",[e._v("This datastreams corresponds to the I2C devices connected to the device.")]),e._v(" "),r("p",[r("a",{attrs:{href:"https://github.com/amplia-iiot/oda/tree/master/oda-hardware/i2c",target:"_blank",rel:"noopener noreferrer"}},[e._v("To access source code click here"),r("OutboundLink")],1),e._v(".")]),e._v(" "),r("h4",{attrs:{id:"dependencies"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#dependencies"}},[e._v("#")]),e._v(" Dependencies")]),e._v(" "),r("p",[e._v("This module requires the following modules:")]),e._v(" "),r("ul",[r("li",[r("strong",[e._v("[Commons](../../infrastructure/core.md#Global APIs)")]),e._v(": Provide API's of I2C and the basic APIs to register the service.")])]),e._v(" "),r("h4",{attrs:{id:"configuration"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#configuration"}},[e._v("#")]),e._v(" Configuration")]),e._v(" "),r("p",[e._v("To configure I2C Hardware module, a file named "),r("em",[e._v("es.amplia.oda.hardware.i2c.cfg")]),e._v(" must be created with the next parameters\nfor each input channel that you want to register:")]),e._v(" "),r("ul",[r("li",[r("strong",[e._v("name")]),e._v(": "),r("em",[e._v("Required parameter")]),e._v(". Identifier name of the datastream.")]),e._v(" "),r("li",[r("strong",[e._v("controller")]),e._v(": "),r("em",[e._v("Required parameter")]),e._v(". Number of the controller of datastream. Controller and address form the direction to i2c source.")]),e._v(" "),r("li",[r("strong",[e._v("address")]),e._v(": "),r("em",[e._v("Required parameter")]),e._v(". Number of the address of datastream. Controller and address form the direction to i2c source.")]),e._v(" "),r("li",[r("strong",[e._v("register")]),e._v(": "),r("em",[e._v("Required parameter")]),e._v(". Position of the formed direction where the data of the datastream is stored.")]),e._v(" "),r("li",[r("strong",[e._v("min")]),e._v(": "),r("em",[e._v("Required parameter")]),e._v(", "),r("em",[e._v("if min > max then min = 0")]),e._v(". Specifies the minimum value that the input value will reach when it's at its minimum.")]),e._v(" "),r("li",[r("strong",[e._v("max")]),e._v(": "),r("em",[e._v("Required parameter")]),e._v(", "),r("em",[e._v("if min > max then max = 1")]),e._v(". Specifies the maximum value that the input value will reach when it's at its maximum.")])]),e._v(" "),r("p",[r("em",[e._v("es.amplia.oda.hardware.i2c.cfg")]),e._v(" will have a similar format to:")]),e._v(" "),r("div",{staticClass:"language- extra-class"},[r("pre",{pre:!0,attrs:{class:"language-text"}},[r("code",[e._v("light=controller:1,address:10,register:255,min:0,max:10\ntemperature=controller:2,address:10,register:124,min:-10,max:50\n")])])])])}),[],!1,null,null,null);t.default=i.exports}}]);