"use strict";(this.webpackChunkdiscord_app=this.webpackChunkdiscord_app||[]).push([[71459],{571459:(e,t,n)=>{n.r(t);n.d(t,{ActivityAgeGateModal:()=>l});var r=n(785893),o=(n(667294),n(658986)),i=n(67416),c=n(959797);function s(e,t,n){t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n;return e}function u(e,t){t=null!=t?t:{};Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):function(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable})));n.push.apply(n,r)}return n}(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}));return e}function a(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},i=Object.keys(e);for(r=0;r<i.length;r++){n=i[r];t.indexOf(n)>=0||(o[n]=e[n])}return o}(e,t)
;if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++){n=i[r];t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}}return o}function l(e){var t=e.application,n=e.onAgree,l=e.onClose,f=e.onDisagree,p=a(e,["application","onAgree","onClose","onDisagree"]);return(0,r.jsx)(i.Y0,u(function(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{},r=Object.keys(n);"function"==typeof Object.getOwnPropertySymbols&&(r=r.concat(Object.getOwnPropertySymbols(n).filter((function(e){return Object.getOwnPropertyDescriptor(n,e).enumerable}))));r.forEach((function(t){s(e,t,n[t])}))}return e}({},p),{children:(0,r.jsx)("div",{children:(0,r.jsx)(o.Z,{onAgree:function(){n();l()},onDisagree:function(){f();l()},title:c.Z.Messages.EMBEDDED_ACTIVITIES_AGE_GATED_TITLE,description:c.Z.Messages.EMBEDDED_ACTIVITIES_AGE_GATED_DESCRIPTION.format({applicationName:t.name}),agreement:c.Z.Messages.NSFW_ACCEPT,
disagreement:c.Z.Messages.NSFW_DECLINE})})}))}},658986:(e,t,n)=>{n.d(t,{Z:()=>h});var r=n(785893),o=n(667294),i=n(294184),c=n.n(i),s=n(331535),u=n(487502),a=n(932179),l=n.n(a),f=n(380203),p=n.n(f);function y(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function b(e){b=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)};return b(e)}function g(e,t){return!t||"object"!==d(t)&&"function"!=typeof t?function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e):t}function O(e,t){O=Object.setPrototypeOf||function(e,t){e.__proto__=t;return e};return O(e,t)}var d=function(e){return e&&"undefined"!=typeof Symbol&&e.constructor===Symbol?"symbol":typeof e};function j(e){var t=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{
Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){})));return!0}catch(e){return!1}}();return function(){var n,r=b(e);if(t){var o=b(this).constructor;n=Reflect.construct(r,arguments,o)}else n=r.apply(this,arguments);return g(this,n)}}const h=function(e){!function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}});t&&O(e,t)}(n,e);var t=j(n);function n(){y(this,n);return t.apply(this,arguments)}n.prototype.render=function(){var e=this.props,t=e.title,n=e.description,o=e.agreement,i=e.disagreement,a=e.onAgree,f=e.onDisagree,y=e.imageClassName;return(0,r.jsxs)(u.Z,{className:l().gatedContent,justify:u.Z.Justify.CENTER,align:u.Z.Align.CENTER,direction:u.Z.Direction.VERTICAL,children:[(0,r.jsx)("div",{className:c()(l().image,y)}),(0,r.jsx)("div",{className:c()(l().title,p().marginBottom8),children:t}),(0,
r.jsx)("div",{className:c()(l().description,p().marginBottom20),children:n}),(0,r.jsxs)(u.Z,{justify:u.Z.Justify.CENTER,align:u.Z.Align.CENTER,grow:0,children:[null!=i?(0,r.jsx)(s.zx,{className:l().action,size:s.Ph.LARGE,color:s.Tt.PRIMARY,onClick:f,children:i}):null,null!=o?(0,r.jsx)(s.zx,{className:l().action,color:s.zx.Colors.RED,size:s.Ph.LARGE,onClick:a,children:o}):null]})]})};return n}(o.PureComponent)}}]);
//# sourceMappingURL=9d067271367fed63dc65.js.map