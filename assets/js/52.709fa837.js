(window.webpackJsonp=window.webpackJsonp||[]).push([[52],{256:function(e,t,a){"use strict";a.r(t);var n=a(0),r=Object(n.a)({},(function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[a("h3",{attrs:{id:"in-memory-state-manager"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#in-memory-state-manager"}},[e._v("#")]),e._v(" In Memory State Manager")]),e._v(" "),a("p",[e._v("This State Manager stores the data of a event to provide the actual value of a datastream\nquickly when the third system send a get request. This means, that the State Manager have a internal State that it refreshes\nevery time that an event arrives and the engine method is called and,\nuse it to send a response of the get operation instead of search the datastream and do the engine\nwith that value through all the rules. In this way, the bundle saves time in processing of the operation.")]),e._v(" "),a("p",[e._v("When a event arrives, the state manager always refresh the stored value. To do this, call the engine method using the value\narrived value from the event. The rules can change the value or not. If they changes the value, store the returned state\nby the rule engine. If they doesn't change the value, the state manager will run a basic case to store the arrived value\nof the event into the itself state. The state manager only will send the new value of the datastream if the rule engine\nwas checked this value as sendImmediately, in this case, the state manager will send the value of the datastreasm stored\ninto the returned state to the send it to the third system.")]),e._v(" "),a("p",[e._v("When a get operation arrives, the state manager won't get the value of the datastream directly. It will search if there is\na value of that datastream into the state and will get it if exists. If the datastream doesn't exists into the state, the\nstate manager will get the value from the datastream normally.")]),e._v(" "),a("p",[e._v("When a set operation arrives, the arrived value from the operation will be setted into the datastream source directly,\nwithout any affect over the state of the state manager.")]),e._v(" "),a("h4",{attrs:{id:"dependencies"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#dependencies"}},[e._v("#")]),e._v(" Dependencies")]),e._v(" "),a("ul",[a("li",[a("strong",[a("router-link",{attrs:{to:"/infrastructure/core.html"}},[e._v("Core Commons")])],1),e._v(": Provides the API of the configurable Bundles, Datastreams handling API's and Device API's.")]),e._v(" "),a("li",[a("strong",[a("router-link",{attrs:{to:"/layers/statemanager/"}},[e._v("State Manager API")])],1),e._v(": Provides the API that this module will implements.")]),e._v(" "),a("li",[a("strong",[a("router-link",{attrs:{to:"/layers/ruleengine/"}},[e._v("Rule Engine API")])],1),e._v(": Provides a generic Rule Engine to contain the ODA rule engine and use it.")]),e._v(" "),a("li",[a("strong",[a("router-link",{attrs:{to:"/layers/eventdispatcher/events.html"}},[e._v("Event API")])],1),e._v(": Provides the event interface to handle the internal events of ODA.")])]),e._v(" "),a("h4",{attrs:{id:"configuration"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#configuration"}},[e._v("#")]),e._v(" Configuration")]),e._v(" "),a("p",[e._v("This bundle doesn't requires any configuration.")])])}),[],!1,null,null,null);t.default=r.exports}}]);