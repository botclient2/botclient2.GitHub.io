"use strict";(this.webpackChunkdiscord_developers=this.webpackChunkdiscord_developers||[]).push([[6201],{26676:(e,r,t)=>{Object.defineProperty(r,"__esModule",{value:!0});r.default=void 0;var o,n=function(e,r){if(!r&&e&&e.__esModule)return e;if(null===e||"object"!=typeof e&&"function"!=typeof e)return{default:e};var t=l(r);if(t&&t.has(e))return t.get(e);var o={},n=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var i in e)if("default"!==i&&Object.prototype.hasOwnProperty.call(e,i)){var u=n?Object.getOwnPropertyDescriptor(e,i):null;u&&(u.get||u.set)?Object.defineProperty(o,i,u):o[i]=e[i]}o.default=e;t&&t.set(e,o);return o}(t(67294)),i=["color","foreground"];function l(e){if("function"!=typeof WeakMap)return null;var r=new WeakMap,t=new WeakMap;return(l=function(e){return e?t:r})(e)}function u(){u=Object.assign||function(e){for(var r=1;r<arguments.length;r++){var t=arguments[r];for(var o in t)Object.prototype.hasOwnProperty.call(t,o)&&(e[o]=t[o])}return e}
;return u.apply(this,arguments)}function f(e,r,t,n){o||(o="function"==typeof Symbol&&Symbol.for&&Symbol.for("react.element")||60103);var i=e&&e.defaultProps,l=arguments.length-3;if(r||0===l||(r={children:void 0}),1===l)r.children=n;else if(l>1){for(var u=new Array(l),f=0;f<l;f++)u[f]=arguments[f+3];r.children=u}if(r&&i)for(var c in i)void 0===r[c]&&(r[c]=i[c]);else r||(r=i||{});return{$$typeof:o,type:e,key:void 0===t?null:""+t,ref:null,props:r,_owner:null}}function c(e,r){c=Object.setPrototypeOf||function(e,r){e.__proto__=r;return e};return c(e,r)}var a=f("defs",{},void 0,f("path",{id:"questionCircle",d:"M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm1 17h-2v-2h2v2zm2.07-7.75l-.9.92C13.45 12.9 13 13.5 13 15h-2v-.5c0-1.1.45-2.1 1.17-2.83l1.24-1.26c.37-.36.59-.86.59-1.41 0-1.1-.9-2-2-2s-2 .9-2 2H8c0-2.21 1.79-4 4-4s4 1.79 4 4c0 .88-.36 1.68-.93 2.25z"})),p=f("path",{d:"M0 0h24v24H0z"}),s=f("mask",{id:"questionCircleMask",fill:"#fff"},void 0,f("use",{
xlinkHref:"#questionCircle"})),d=f("path",{d:"M0 0h24v24H0z"}),v=function(e){!function(e,r){e.prototype=Object.create(r.prototype);e.prototype.constructor=e;c(e,r)}(r,e);function r(){return e.apply(this,arguments)||this}r.prototype.render=function(){var e=this.props,r=e.color,t=e.foreground,o=function(e,r){if(null==e)return{};var t,o,n={},i=Object.keys(e);for(o=0;o<i.length;o++){t=i[o];r.indexOf(t)>=0||(n[t]=e[t])}return n}(e,i);return n.createElement("svg",u({},o,{viewBox:"0 0 24 24"}),a,f("g",{fill:"none",fillRule:"evenodd"},void 0,p,s,f("use",{fill:t,xlinkHref:"#questionCircle"}),f("g",{fill:r,mask:"url(#questionCircleMask)"},void 0,d)))};return r}(n.PureComponent);v.displayName="QuestionMarkCircle";v.defaultProps={width:16,height:16,color:"currentColor",foreground:"#000"};var h=v;r.default=h}}]);
//# sourceMappingURL=63cb865384702ec09c3e.js.map