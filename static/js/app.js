(function(t){function n(n){for(var o,e,a=n[0],i=n[1],s=n[2],l=0,f=[];l<a.length;l++)e=a[l],Object.prototype.hasOwnProperty.call(c,e)&&c[e]&&f.push(c[e][0]),c[e]=0;for(o in i)Object.prototype.hasOwnProperty.call(i,o)&&(t[o]=i[o]);u&&u(n);while(f.length)f.shift()();return r.push.apply(r,s||[]),A()}function A(){for(var t,n=0;n<r.length;n++){for(var A=r[n],o=!0,a=1;a<A.length;a++){var i=A[a];0!==c[i]&&(o=!1)}o&&(r.splice(n--,1),t=e(e.s=A[0]))}return t}var o={},c={app:0},r=[];function e(n){if(o[n])return o[n].exports;var A=o[n]={i:n,l:!1,exports:{}};return t[n].call(A.exports,A,A.exports,e),A.l=!0,A.exports}e.m=t,e.c=o,e.d=function(t,n,A){e.o(t,n)||Object.defineProperty(t,n,{enumerable:!0,get:A})},e.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},e.t=function(t,n){if(1&n&&(t=e(t)),8&n)return t;if(4&n&&"object"===typeof t&&t&&t.__esModule)return t;var A=Object.create(null);if(e.r(A),Object.defineProperty(A,"default",{enumerable:!0,value:t}),2&n&&"string"!=typeof t)for(var o in t)e.d(A,o,function(n){return t[n]}.bind(null,o));return A},e.n=function(t){var n=t&&t.__esModule?function(){return t["default"]}:function(){return t};return e.d(n,"a",n),n},e.o=function(t,n){return Object.prototype.hasOwnProperty.call(t,n)},e.p="/";var a=window["webpackJsonp"]=window["webpackJsonp"]||[],i=a.push.bind(a);a.push=n,a=a.slice();for(var s=0;s<a.length;s++)n(a[s]);var u=i;r.push([0,"chunk-vendors"]),A()})({0:function(t,n,A){t.exports=A("56d7")},"034f":function(t,n,A){"use strict";A("85ec")},"56d7":function(t,n,A){"use strict";A.r(n);A("e260"),A("e6cf"),A("cca6"),A("a79d");var o=A("2b0e"),c=function(){var t=this,n=t.$createElement,A=t._self._c||n;return A("div",{attrs:{id:"app"}},[A("div",{staticClass:"controller"},[A("div",{staticClass:"row"},[A("button",{staticClass:"btn power",on:{click:function(n){return t.command("AAAAAQAAAAEAAAAVAw==")}}},[A("i",{staticClass:"fas fa-power-off"})]),A("button",{staticClass:"btn",on:{click:function(n){return t.command("AAAAAQAAAAEAAAAUAw==")}}},[A("i",{staticClass:"fas fa-volume-mute"})])]),A("div",{staticClass:"row"},[A("button",{staticClass:"btn",on:{click:function(n){return t.command("AAAAAQAAAAEAAAAOAw==")}}},[t._v("Guide")])]),A("div",{staticClass:"row"},[A("button",{staticClass:"btn",on:{click:function(n){return t.command("AAAAAQAAAAEAAAAAAw==")}}},[t._v("1")]),A("button",{staticClass:"btn",on:{click:function(n){return t.command("AAAAAQAAAAEAAAABAw==")}}},[t._v("2")]),A("button",{staticClass:"btn",on:{click:function(n){return t.command("AAAAAQAAAAEAAAACAw==")}}},[t._v("3")])]),A("div",{staticClass:"row"},[A("button",{staticClass:"btn",on:{click:function(n){return t.command("AAAAAQAAAAEAAAADAw==")}}},[t._v("4")]),A("button",{staticClass:"btn",on:{click:function(n){return t.command("AAAAAQAAAAEAAAAEAw==")}}},[t._v("5")]),A("button",{staticClass:"btn",on:{click:function(n){return t.command("AAAAAQAAAAEAAAAFAw==")}}},[t._v("6")])]),A("div",{staticClass:"row"},[A("button",{staticClass:"btn",on:{click:function(n){return t.command("AAAAAQAAAAEAAAAGAw==")}}},[t._v("7")]),A("button",{staticClass:"btn",on:{click:function(n){return t.command("AAAAAQAAAAEAAAAHAw==")}}},[t._v("8")]),A("button",{staticClass:"btn",on:{click:function(n){return t.command("AAAAAQAAAAEAAAAIAw==")}}},[t._v("9")])]),A("div",{staticClass:"row"},[A("button",{staticClass:"btn",on:{click:function(n){return t.command("AAAAAQAAAAEAAAAJAw==")}}},[t._v("0")])])])])},r=[],e=(A("d3b7"),"http://".concat(window.location.host,"/command/")),a={name:"App",methods:{command:function(t){fetch(e+t)}}},i=a,s=(A("034f"),A("2877")),u=Object(s["a"])(i,c,r,!1,null,null,null),l=u.exports;o["a"].config.productionTip=!1,new o["a"]({render:function(t){return t(l)}}).$mount("#app")},"85ec":function(t,n,A){}});
//# sourceMappingURL=app.09c4e155.js.map