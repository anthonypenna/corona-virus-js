parcelRequire=function(e,r,t,n){var i,o="function"==typeof parcelRequire&&parcelRequire,u="function"==typeof require&&require;function f(t,n){if(!r[t]){if(!e[t]){var i="function"==typeof parcelRequire&&parcelRequire;if(!n&&i)return i(t,!0);if(o)return o(t,!0);if(u&&"string"==typeof t)return u(t);var c=new Error("Cannot find module '"+t+"'");throw c.code="MODULE_NOT_FOUND",c}p.resolve=function(r){return e[t][1][r]||r},p.cache={};var l=r[t]=new f.Module(t);e[t][0].call(l.exports,p,l,l.exports,this)}return r[t].exports;function p(e){return f(p.resolve(e))}}f.isParcelRequire=!0,f.Module=function(e){this.id=e,this.bundle=f,this.exports={}},f.modules=e,f.cache=r,f.parent=o,f.register=function(r,t){e[r]=[function(e,r){r.exports=t},{}]};for(var c=0;c<t.length;c++)try{f(t[c])}catch(e){i||(i=e)}if(t.length){var l=f(t[t.length-1]);"object"==typeof exports&&"undefined"!=typeof module?module.exports=l:"function"==typeof define&&define.amd?define(function(){return l}):n&&(this[n]=l)}if(parcelRequire=f,i)throw i;return f}({"rQCt":[function(require,module,exports) {
module.exports="/cough.fad7d6d2.mp3";
},{}],"Focm":[function(require,module,exports) {
"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),exports.default=void 0;var e=require("./assets/cough.mp3"),t={id:"covid-19"},n={src:e,type:"audio/mpeg"},d={__infect:function(){return new Promise(function(e){if(document.getElementById(t.id))return e();var d=document.createElement("audio"),i=document.createElement("source");for(var r in n)i.setAttribute(r,n[r]);d.setAttribute("id",t.id),d.appendChild(i),document.body.appendChild(d),e()})},spread:function(){this.__infect().then(function(){document.getElementById(t.id).play()})}},i=d;exports.default=i;
},{"./assets/cough.mp3":"rQCt"}]},{},["Focm"], null)
//# sourceMappingURL=/index.js.map