(window.webpackJsonp=window.webpackJsonp||[]).push([[51],{252:function(t,a,s){"use strict";s.r(a);var e=s(0),n=Object(e.a)({},(function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[s("h3",{attrs:{id:"state-manager"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#state-manager"}},[t._v("#")]),t._v(" State Manager")]),t._v(" "),s("p",[t._v("The State Manager stores the device data state in the current moment to ease the data access from operations and increase the system performance (at a expense of possible outdated data).")]),t._v(" "),s("p",[t._v("Storing the state of all data in the device allow us to calculate inferred data (e.g. datastream statistical information) and execute smart actions depending on data that enables "),s("a",{attrs:{href:"https://en.wikipedia.org/wiki/Edge_computing",target:"_blank",rel:"noopener noreferrer"}},[t._v("Edge Computing"),s("OutboundLink")],1),t._v(" features.")]),t._v(" "),s("p",[t._v("There are different State Managers implementations depending on project needs. New State Managers may be added implementing the "),s("a",{attrs:{href:"https://github.com/amplia-iiot/oda/blob/master/oda-statemanagers/api/src/main/java/es/amplia/oda/statemanager/api/StateManager.java",target:"_blank",rel:"noopener noreferrer"}},[t._v("StateManager"),s("OutboundLink")],1),t._v(" interface:")]),t._v(" "),s("div",{staticClass:"language-java extra-class"},[s("pre",{pre:!0,attrs:{class:"language-java"}},[s("code",[s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("public")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("interface")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("StateManager")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("CompletableFuture")]),s("span",{pre:!0,attrs:{class:"token generics"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("DatastreamValue")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("getDatastreamInformation")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("String")]),t._v(" deviceId"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("String")]),t._v(" datastreamId"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("CompletableFuture")]),s("span",{pre:!0,attrs:{class:"token generics"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("Set")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("DatastreamValue")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("getDatastreamsInformation")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("String")]),t._v(" deviceId"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("Set")]),s("span",{pre:!0,attrs:{class:"token generics"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("String")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v(" datastreamIds"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("CompletableFuture")]),s("span",{pre:!0,attrs:{class:"token generics"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("Set")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("DatastreamValue")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("getDatastreamsInformation")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("DevicePattern")]),t._v(" devicePattern"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("String")]),t._v(" datastreamId"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("CompletableFuture")]),s("span",{pre:!0,attrs:{class:"token generics"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("Set")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("DatastreamValue")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("getDatastreamsInformation")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("DevicePattern")]),t._v(" devicePattern"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("Set")]),s("span",{pre:!0,attrs:{class:"token generics"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("String")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v(" datastreamId"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("CompletableFuture")]),s("span",{pre:!0,attrs:{class:"token generics"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("Set")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("DatastreamValue")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("getDeviceInformation")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("String")]),t._v(" deviceId"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("CompletableFuture")]),s("span",{pre:!0,attrs:{class:"token generics"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("DatastreamValue")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("setDatastreamValue")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("String")]),t._v(" deviceId"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("String")]),t._v(" datastreamId"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("Object")]),t._v(" value"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("CompletableFuture")]),s("span",{pre:!0,attrs:{class:"token generics"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("Set")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("DatastreamValue")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("setDatastreamValues")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("String")]),t._v(" deviceId"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("Map")]),s("span",{pre:!0,attrs:{class:"token generics"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("String")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("Object")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v(" datastreamValues"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("void")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("registerToEvents")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("EventHandler")]),t._v(" eventHandler"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("void")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("unregisterToEvents")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("EventHandler")]),t._v(" eventHandler"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("void")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("onReceivedEvent")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("Event")]),t._v(" event"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),s("h4",{attrs:{id:"state-manager-implementations"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#state-manager-implementations"}},[t._v("#")]),t._v(" State Manager implementations")]),t._v(" "),s("p",[t._v("The currently implemented state managers are:")]),t._v(" "),s("ul",[s("li",[s("router-link",{attrs:{to:"/layers/statemanager/realtime.html"}},[s("strong",[t._v("Real-time State Manager")])]),t._v(": The real time state manager is a proxy that works without storing any state and always getting and setting the data from/to the data source. It is the choice for projects with real-time concerns and without edge computing needs.")],1),t._v(" "),s("li",[s("router-link",{attrs:{to:"/layers/statemanager/inmemory.html"}},[s("strong",[t._v("In-Memory State Manager")])]),t._v(": The in-memory state manager store the state of all the data in the device in memory and uses a rule engine to execute business rules dependent on the device data.")],1)]),t._v(" "),s("p",[t._v("New implementations may be added in the future like database based state manager, multiple samples state managers...")])])}),[],!1,null,null,null);a.default=n.exports}}]);