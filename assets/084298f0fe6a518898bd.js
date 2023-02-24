"use strict";(this.webpackChunkdiscord_app=this.webpackChunkdiscord_app||[]).push([[69548],{799880:(e,n,t)=>{t.d(n,{Z:()=>f});var r=t(785893),a=t(667294),o=t(294184),i=t.n(o),l=t(331535),u=t(678081),s=t(393369),c=t.n(s);function f(e){var n=e.filename,t=e.className,o=e.filters,s=e.buttonText,f=e.placeholder,d=e.onFileSelect,h=a.useRef(null);return(0,r.jsxs)("div",{className:i()(t,c().fileUpload),children:[(0,r.jsx)("input",{className:c().fileUploadInput,tabIndex:-1,readOnly:!0,placeholder:f,type:"text",value:n}),(0,r.jsxs)(l.zx,{size:l.zx.Sizes.MIN,className:c().fileUploadButton,children:[s,(0,r.jsx)(u.Z,{ref:h,tabIndex:-1,onChange:function(e){var n,t=null===(n=e.currentTarget.files)||void 0===n?void 0:n[0];d(t)},multiple:!1,filters:o})]})]})}},669548:(e,n,t)=>{t.r(n);t.d(n,{default:()=>xn});var r=t(785893),a=t(667294),o=t(294184),i=t.n(o),l=t(331535),u=t(55690),s=t(799880),c=t(67416),f=t(932847),d=t(794445),h=t(10178),p=t(240243);function m(e,n,t){n in e?Object.defineProperty(e,n,{
value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t;return e}function v(e,n){n=null!=n?n:{};Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):function(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable})));t.push.apply(t,r)}return t}(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}));return e}function y(e,n){if(null==e)return{};var t,r,a=function(e,n){if(null==e)return{};var t,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++){t=o[r];n.indexOf(t)>=0||(a[t]=e[t])}return a}(e,n);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++){t=o[r];n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}}return a}function b(e){
var n=e.width,t=void 0===n?16:n,a=e.height,o=void 0===a?16:a,i=e.color,l=void 0===i?"currentColor":i,u=e.foreground,s=y(e,["width","height","color","foreground"]);return(0,r.jsx)("svg",v(function(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{},r=Object.keys(t);"function"==typeof Object.getOwnPropertySymbols&&(r=r.concat(Object.getOwnPropertySymbols(t).filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))));r.forEach((function(n){m(e,n,t[n])}))}return e}({},(0,p.Z)(s)),{width:t,height:o,viewBox:"0 0 16 16",children:(0,r.jsx)("path",{className:u,fill:l,d:"M12.6667 2.00195H3.33333C2.6 2.00195 2 2.60195 2 3.33529V12.6686C2 13.402 2.6 14.002 3.33333 14.002H12.6667C13.4 14.002 14 13.402 14 12.6686V3.33529C14 2.60195 13.4 2.00195 12.6667 2.00195Z"})}))}var g=t(569396),O=t(185253),w=t(948861),j={waveformBlockWidth:2,waveformBarWidth:.5,fineTuningDelay:500,fineTuningScale:10
},D=new Set(["audio/mpeg","audio/mp3","audio/wav","audio/ogg"]),A=t(959797);function S(e,n,t,r,a,o,i){try{var l=e[o](i),u=l.value}catch(e){t(e);return}l.done?n(u):Promise.resolve(u).then(r,a)}function x(e){return function(){var n=this,t=arguments;return new Promise((function(r,a){var o=e.apply(n,t);function i(e){S(o,r,a,i,l,"next",e)}function l(e){S(o,r,a,i,l,"throw",e)}i(void 0)}))}}var N=function(e,n){var t,r,a,o,i={label:0,sent:function(){if(1&a[0])throw a[1];return a[1]},trys:[],ops:[]};return o={next:l(0),throw:l(1),return:l(2)},"function"==typeof Symbol&&(o[Symbol.iterator]=function(){return this}),o;function l(o){return function(l){return function(o){if(t)throw new TypeError("Generator is already executing.");for(;i;)try{if(t=1,r&&(a=2&o[0]?r.return:o[0]?r.throw||((a=r.return)&&a.call(r),0):r.next)&&!(a=a.call(r,o[1])).done)return a;(r=0,a)&&(o=[2&o[0],a.value]);switch(o[0]){case 0:case 1:a=o;break;case 4:i.label++;return{value:o[1],done:!1};case 5:i.label++;r=o[1];o=[0]
;continue;case 7:o=i.ops.pop();i.trys.pop();continue;default:if(!(a=i.trys,a=a.length>0&&a[a.length-1])&&(6===o[0]||2===o[0])){i=0;continue}if(3===o[0]&&(!a||o[1]>a[0]&&o[1]<a[3])){i.label=o[1];break}if(6===o[0]&&i.label<a[1]){i.label=a[1];a=o;break}if(a&&i.label<a[2]){i.label=a[2];i.ops.push(o);break}a[2]&&i.ops.pop();i.trys.pop();continue}o=n.call(e,i)}catch(e){o=[6,e];r=0}finally{t=a=0}if(5&o[0])throw o[1];return{value:o[0]?o[1]:void 0,done:!0}}([o,l])}}},P=function(e,n,t){return-1===e?0:e-n*e/t};function E(e){return e/1e3}var I=function(e,n,t){return-1===e?t:e+n*(t-e)/t},M=function(e,n,t,r){var a=0;if(n>=0&&t>0){a=100*(e-(n-t*n/r))/t}else a=100*e/r;return a.toFixed(4)},_=function(e,n,t,r){var a=0;if(n>=0&&t>0){a=100*(e-(n+t*(r-n)/r))*-1/t}else a=100*e*-1/r+100;return a.toFixed(4)};function C(e){return new Promise((function(n){var t=function(){n();e.removeEventListener("canplaythrough",t)};e.addEventListener("canplaythrough",t);e.load()}))}function L(e){
return U.apply(this,arguments)}function U(){return(U=x((function(e){var n,t;return N(this,(function(r){switch(r.label){case 0:if(!e.type.startsWith("audio")||!D.has(e.type))throw new Error(A.Z.Messages.SOUNDBOARD_ERROR_INVALID_FILE_TYPE.format({fileType:e.type}));n=URL.createObjectURL(e);return[4,C(t=new Audio(n))];case 1:r.sent();return[2,t]}}))}))).apply(this,arguments)}function R(){return(R=x((function(e,n){var t;return N(this,(function(r){switch(r.label){case 0:return[4,fetch(e)];case 1:return[4,r.sent().blob()];case 2:t=r.sent();return[2,new File([t],n,{type:"audio/mp3"})]}}))}))).apply(this,arguments)}function k(e,n,t,r,a,o,i){try{var l=e[o](i),u=l.value}catch(e){t(e);return}l.done?n(u):Promise.resolve(u).then(r,a)}var T=function(e,n){var t,r,a,o,i={label:0,sent:function(){if(1&a[0])throw a[1];return a[1]},trys:[],ops:[]};return o={next:l(0),throw:l(1),return:l(2)},"function"==typeof Symbol&&(o[Symbol.iterator]=function(){return this}),o;function l(o){return function(l){
return function(o){if(t)throw new TypeError("Generator is already executing.");for(;i;)try{if(t=1,r&&(a=2&o[0]?r.return:o[0]?r.throw||((a=r.return)&&a.call(r),0):r.next)&&!(a=a.call(r,o[1])).done)return a;(r=0,a)&&(o=[2&o[0],a.value]);switch(o[0]){case 0:case 1:a=o;break;case 4:i.label++;return{value:o[1],done:!1};case 5:i.label++;r=o[1];o=[0];continue;case 7:o=i.ops.pop();i.trys.pop();continue;default:if(!(a=i.trys,a=a.length>0&&a[a.length-1])&&(6===o[0]||2===o[0])){i=0;continue}if(3===o[0]&&(!a||o[1]>a[0]&&o[1]<a[3])){i.label=o[1];break}if(6===o[0]&&i.label<a[1]){i.label=a[1];a=o;break}if(a&&i.label<a[2]){i.label=a[2];i.ops.push(o);break}a[2]&&i.ops.pop();i.trys.pop();continue}o=n.call(e,i)}catch(e){o=[6,e];r=0}finally{t=a=0}if(5&o[0])throw o[1];return{value:o[0]?o[1]:void 0,done:!0}}([o,l])}}},Z=(0,O.Z)((function(e){return{audio:null,file:null,loading:!1,loadAudioFromFile:(t=(n=function(n){var t;return T(this,(function(r){switch(r.label){case 0:e({file:n,audio:null,loading:null!=n})
;return null==n?[2]:[4,L(n)];case 1:if(null==(t=r.sent()))return[2];e({audio:t,loading:!1});return[2]}}))},function(){var e=this,t=arguments;return new Promise((function(r,a){var o=n.apply(e,t);function i(e){k(o,r,a,i,l,"next",e)}function l(e){k(o,r,a,i,l,"throw",e)}i(void 0)}))}),function(e){return t.apply(this,arguments)})};var n,t}));function B(){return Z((function(e){return{audio:e.audio,file:e.file,loading:e.loading,loadAudioFromFile:e.loadAudioFromFile}}),w.Z)}var F=t(414597),H=t(496486),z=t(952013),G=t(832010),Y=t(468811),V=t.n(Y);function W(e,n){(null==n||n>e.length)&&(n=e.length);for(var t=0,r=new Array(n);t<n;t++)r[t]=e[t];return r}function $(e,n,t,r,a,o,i){try{var l=e[o](i),u=l.value}catch(e){t(e);return}l.done?n(u):Promise.resolve(u).then(r,a)}function J(e){return function(){var n=this,t=arguments;return new Promise((function(r,a){var o=e.apply(n,t);function i(e){$(o,r,a,i,l,"next",e)}function l(e){$(o,r,a,i,l,"throw",e)}i(void 0)}))}}function q(e,n,t){
n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t;return e}function K(e,n){return function(e){if(Array.isArray(e))return e}(e)||function(e,n){var t=null==e?null:"undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null!=t){var r,a,o=[],i=!0,l=!1;try{for(t=t.call(e);!(i=(r=t.next()).done);i=!0){o.push(r.value);if(n&&o.length===n)break}}catch(e){l=!0;a=e}finally{try{i||null==t.return||t.return()}finally{if(l)throw a}}return o}}(e,n)||function(e,n){if(!e)return;if("string"==typeof e)return W(e,n);var t=Object.prototype.toString.call(e).slice(8,-1);"Object"===t&&e.constructor&&(t=e.constructor.name);if("Map"===t||"Set"===t)return Array.from(t);if("Arguments"===t||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t))return W(e,n)}(e,n)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}var X,Q=function(e,n){
var t,r,a,o,i={label:0,sent:function(){if(1&a[0])throw a[1];return a[1]},trys:[],ops:[]};return o={next:l(0),throw:l(1),return:l(2)},"function"==typeof Symbol&&(o[Symbol.iterator]=function(){return this}),o;function l(o){return function(l){return function(o){if(t)throw new TypeError("Generator is already executing.");for(;i;)try{if(t=1,r&&(a=2&o[0]?r.return:o[0]?r.throw||((a=r.return)&&a.call(r),0):r.next)&&!(a=a.call(r,o[1])).done)return a;(r=0,a)&&(o=[2&o[0],a.value]);switch(o[0]){case 0:case 1:a=o;break;case 4:i.label++;return{value:o[1],done:!1};case 5:i.label++;r=o[1];o=[0];continue;case 7:o=i.ops.pop();i.trys.pop();continue;default:if(!(a=i.trys,a=a.length>0&&a[a.length-1])&&(6===o[0]||2===o[0])){i=0;continue}if(3===o[0]&&(!a||o[1]>a[0]&&o[1]<a[3])){i.label=o[1];break}if(6===o[0]&&i.label<a[1]){i.label=a[1];a=o;break}if(a&&i.label<a[2]){i.label=a[2];i.ops.push(o);break}a[2]&&i.ops.pop();i.trys.pop();continue}o=n.call(e,i)}catch(e){o=[6,e];r=0}finally{t=a=0}if(5&o[0])throw o[1]
;return{value:o[0]?o[1]:void 0,done:!0}}([o,l])}}};t.e(63573).then(t.t.bind(t,63573,23)).then((function(e){var n=e.default;X=new n}));var ee=new AudioContext;function ne(){return(ne=J((function(e){var n;return Q(this,(function(t){switch(t.label){case 0:return[4,e.arrayBuffer()];case 1:n=t.sent();return[4,ee.decodeAudioData(n)];case 2:return[2,t.sent().getChannelData(0)]}}))}))).apply(this,arguments)}function te(e){var n=K(a.useState(null),2),t=n[0],r=n[1],o=K(a.useState(null),2),i=o[0],l=o[1];a.useEffect((function(){if(null!=e){var n=function(e){return"".concat(e.name,"-").concat(e.size,"-").concat(e.lastModified)}(e);if(n!==i){l(n);r(null);(function(e){return ne.apply(this,arguments)})(e).then(r)}}}),[i,e]);return t}var re=function(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{},r=Object.keys(t);"function"==typeof Object.getOwnPropertySymbols&&(r=r.concat(Object.getOwnPropertySymbols(t).filter((function(e){
return Object.getOwnPropertyDescriptor(t,e).enumerable}))));r.forEach((function(n){q(e,n,t[n])}))}return e}({},j);function ae(e,n,t){var r=K(a.useState(null),2),o=r[0],i=r[1],l=K(a.useState(null),2),u=l[0],s=l[1],c=a.useCallback((function(e,n){s(null);(function(e,n,t,r){return new Promise((function(a){var o=V().v4(),i=function(e){var n=e.data,t=n.waveform,r=n.id;o===r&&a(t);null==X||X.removeEventListener("message",i)};null==X||X.addEventListener("message",i);null==X||X.postMessage({id:o,options:t,config:r,width:n,rawBufferData:e})}))})(e,n.offsetWidth,t,re).then(s)}),[t]);a.useEffect((function(){if(null!=e&&null!=n){var r=function(e,n){var t="".concat(e[0],"-").concat(e[e.length-1],"-").concat(e.byteLength);return"".concat(t,"-").concat(JSON.stringify(n))}(e,t);if(o!==r){i(r);c(e,n)}}}),[e,c,n,t,o]);return u}var oe,ie=t(375650),le=t(397804),ue=t.n(le);function se(e,n){(null==n||n>e.length)&&(n=e.length);for(var t=0,r=new Array(n);t<n;t++)r[t]=e[t];return r}function ce(e,n,t){
n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t;return e}function fe(e,n){return function(e){if(Array.isArray(e))return e}(e)||function(e,n){var t=null==e?null:"undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null!=t){var r,a,o=[],i=!0,l=!1;try{for(t=t.call(e);!(i=(r=t.next()).done);i=!0){o.push(r.value);if(n&&o.length===n)break}}catch(e){l=!0;a=e}finally{try{i||null==t.return||t.return()}finally{if(l)throw a}}return o}}(e,n)||function(e,n){if(!e)return;if("string"==typeof e)return se(e,n);var t=Object.prototype.toString.call(e).slice(8,-1);"Object"===t&&e.constructor&&(t=e.constructor.name);if("Map"===t||"Set"===t)return Array.from(t);if("Arguments"===t||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t))return se(e,n)}(e,n)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}
var de=(ce(oe={},ie.BR.DARK,ie.Il.PRIMARY_300),ce(oe,ie.BR.LIGHT,ie.Il.PRIMARY_700),oe);const he=a.memo((function(e){var n=e.file,t=e.audio,o=e.className,u=e.waveformSettings,s=fe(a.useState({width:0,height:0}),2),c=s[0],f=s[1],d=a.useRef(null),h=a.useMemo((function(){var e,n=null!==(e=null==t?void 0:t.duration)&&void 0!==e?e:1;return function(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{},r=Object.keys(t);"function"==typeof Object.getOwnPropertySymbols&&(r=r.concat(Object.getOwnPropertySymbols(t).filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))));r.forEach((function(n){ce(e,n,t[n])}))}return e}({fineTuning:-1,fineTuningResolution:n/j.fineTuningScale,duration:n},null!=u?u:{})}),[t,u]),p=te(n),m=ae(p,d.current,h),v=(0,z.ZP)(),y=(0,G.Sl)(de[v]),b=null==p||null==m,g=(0===c.width||0===c.height||b)&&null!=n,O=a.useCallback((function(){null!=d.current&&f({width:d.current.offsetWidth,height:d.current.offsetHeight})}),[])
;a.useEffect((function(){if(null!=d.current){var e=new ResizeObserver((0,H.debounce)(O,50));e.observe(d.current);return function(){e.disconnect()}}}),[O]);a.useEffect((function(){if(null!=d.current){var e=d.current,n=e.getContext("2d");if(null!=n){var t=e.width,r=e.height;if(0!==c.width&&0!==c.height&&null!=m&&m.length>0){var a=t/m.length,o=a*-(j.waveformBarWidth-1);n.clearRect(0,0,t,r);n.fillStyle=y.hex;for(var i=0;i<m.length;i++){var l=m[i]*r,u=i*a+o,s=r/2-l/2;n.fillRect(u,s,a-o,l)}}}}}),[y,c,v,m]);return(0,r.jsxs)("div",{className:i()(ue().container,o),children:[(0,r.jsx)("canvas",{className:ue().waveformCanvas,ref:d,width:4*c.width,height:4*c.height}),g&&(0,r.jsx)("div",{className:ue().loading,children:(0,r.jsx)(l.$j,{type:l.RA.SPINNING_CIRCLE})})]})})),pe=a.memo((function(e){var n=e.fineTuning,t=e.fineTuningResolution,a=e.duration,o=B(),i=o.file,l=o.audio;return(0,r.jsx)(he,{file:i,audio:l,waveformSettings:{fineTuning:n,fineTuningResolution:t,duration:a}})}))
;var me=t(713920),ve=t.n(me);function ye(e,n){(null==n||n>e.length)&&(n=e.length);for(var t=0,r=new Array(n);t<n;t++)r[t]=e[t];return r}function be(e,n,t){n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t;return e}function ge(e,n){return function(e){if(Array.isArray(e))return e}(e)||function(e,n){var t=null==e?null:"undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null!=t){var r,a,o=[],i=!0,l=!1;try{for(t=t.call(e);!(i=(r=t.next()).done);i=!0){o.push(r.value);if(n&&o.length===n)break}}catch(e){l=!0;a=e}finally{try{i||null==t.return||t.return()}finally{if(l)throw a}}return o}}(e,n)||function(e,n){if(!e)return;if("string"==typeof e)return ye(e,n);var t=Object.prototype.toString.call(e).slice(8,-1);"Object"===t&&e.constructor&&(t=e.constructor.name);if("Map"===t||"Set"===t)return Array.from(t);if("Arguments"===t||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t))return ye(e,n)}(e,n)||function(){
throw new TypeError("Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}var Oe;!function(e){e[e.START=0]="START";e[e.PLAYHEAD=1]="PLAYHEAD";e[e.END=2]="END"}(Oe||(Oe={}));const we=a.memo((function(e){var n=e.playing,t=e.onPausePlayback,o=e.onPlaybackChange,l=e.onChangePosition,u=e.disabled,s=void 0!==u&&u,c=function(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{},r=Object.keys(t);"function"==typeof Object.getOwnPropertySymbols&&(r=r.concat(Object.getOwnPropertySymbols(t).filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))));r.forEach((function(n){be(e,n,t[n])}))}return e
}({},j),f=B().audio,d=null!=f,h=a.useRef(null),p=a.useRef(null),m=a.useRef(null),v=ge(a.useState(0),2),y=v[0],b=v[1],g=ge(a.useState(0),2),O=g[0],w=g[1],D=ge(a.useState(0),2),A=D[0],S=D[1],x=ge(a.useState(!1),2),N=x[0],C=x[1],L=ge(a.useState(!1),2),U=L[0],R=L[1],k=ge(a.useState(!1),2),T=k[0],Z=k[1],H=ge(a.useState(0),2),z=H[0],G=H[1],Y=ge(a.useState(-1),2),V=Y[0],W=Y[1],$=a.useMemo((function(){return z/c.fineTuningScale}),[c.fineTuningScale,z]);a.useEffect((function(){if(null!=f){var e=1e3*f.duration;b(0);w(0);S(e);G(e)}}),[f]);var J,q=a.useCallback((function(e,n){t();if(0===e.button)switch(n){case Oe.START:C(!0);break;case Oe.PLAYHEAD:R(!0);break;case Oe.END:Z(!0)}}),[t]),K=a.useCallback((function(e){switch(e){case Oe.START:C(!1);break;case Oe.PLAYHEAD:R(!1);break;case Oe.END:Z(!1)}W(-1)}),[]),X=a.useCallback((function(e){if(null!=f&&N){var n=parseInt(e.target.value),t=n>A?A:n;o(E(t));b(t);w(t)}}),[f,o,A,N]),Q=a.useCallback((function(e){if(null!=f&&U){var n=parseInt(e.target.value)
;if(n<y){o(E(y));w(y)}else if(n>A){o(E(A));w(A)}else{o(E(n));w(n)}}}),[f,o,A,U,y]),ee=a.useCallback((function(e){if(null!=f&&T){var n=parseInt(e.target.value),t=n>y?n:y;o(E(y));w(y);S(t)}}),[f,o,T,y]);a.useEffect((function(){null!=l&&d&&l({startPositionMs:y,endPositionMs:A,playheadPositionMs:O})}),[y,A,l,d,O]);a.useEffect((function(){if(null!=f){var e;n&&(e=setInterval((function(){if(f.currentTime<E(A))f.currentTime>=E(O)&&w(1e3*f.currentTime);else{t(E(y));w(y)}}),16));return function(){clearInterval(e)}}}),[f,A,t,O,n,y]);a.useEffect((function(){if(!(c.fineTuningDelay<=0)){var e=y,n=A,t=O,r=setTimeout((function(){N&&e===y&&-1===V?W(y):T&&n===A&&-1===V?W(A):U&&t===O&&-1===V&&W(O)}),c.fineTuningDelay);return function(){clearTimeout(r)}}}),[c.fineTuningDelay,T,A,V,U,O,N,y]);return(0,r.jsxs)("div",{className:i()(ve().timeline,be({},ve().initialized,d)),children:[(0,r.jsxs)("div",{className:ve().rangeHandleContainer,children:[(0,r.jsxs)("div",{className:ve().rangeHandleFrame,children:[(0,
r.jsx)("input",{ref:h,className:i()(ve().rangeHandle,ve().rangeHandleStart),type:"range",min:P(V,$,z),max:I(V,$,z),value:y,onChange:X,onMouseDown:function(e){return q(e,Oe.START)},onMouseUp:function(){return K(Oe.START)},disabled:!d||s}),(0,r.jsx)("input",{ref:m,className:i()(ve().rangeHandle,ve().rangeHandleEnd),type:"range",min:P(V,$,z),max:I(V,$,z),value:A,onChange:ee,onMouseDown:function(e){return q(e,Oe.END)},onMouseUp:function(){return K(Oe.END)},disabled:!d||s})]}),(0,r.jsx)("div",{className:ve().handlePlayheadTrack,children:(0,r.jsx)("input",{ref:p,className:i()(ve().rangeHandle,ve().rangeHandlePlayhead),type:"range",min:P(V,$,z),max:I(V,$,z),value:O,onChange:Q,onMouseDown:function(e){return q(e,Oe.PLAYHEAD)},onMouseUp:function(){return K(Oe.PLAYHEAD)},disabled:!d||s})})]}),(0,r.jsxs)("div",{className:ve().handleContainer,children:[(0,r.jsxs)("div",{className:i()(ve().handleFrame,(J={},be(J,ve().startDragging,N),be(J,ve().endDragging,T),J)),style:{
left:"".concat(M(y,V,$,z),"%"),right:"".concat(_(A,V,$,z),"%")},children:[(0,r.jsx)("div",{className:i()(ve().handleIconFrame,ve().handleIconFrameStart),children:(0,r.jsx)("div",{className:i()(ve().handleIconContainer,ve().start),children:(0,r.jsx)(F.Z,{direction:F.Z.Directions.RIGHT,className:ve().handleIcon,width:16,height:16})})}),(0,r.jsx)("div",{className:i()(ve().handleIconFrame,ve().handleIconFrameEnd),children:(0,r.jsx)("div",{className:i()(ve().handleIconContainer,ve().end),children:(0,r.jsx)(F.Z,{direction:F.Z.Directions.LEFT,className:ve().handleIcon,width:16,height:16})})})]}),(0,r.jsx)("div",{className:ve().playheadTrack,children:(0,r.jsx)("div",{className:i()(ve().playhead,be({},ve().dragging,U||N||T||n)),style:{left:"".concat(M(O,V,$,z),"%")}})})]}),(0,r.jsx)("div",{className:ve().waveformContainer,children:(0,r.jsx)(pe,{fineTuning:V,fineTuningResolution:$,duration:z})})]})}));var je=t(881904),De=t(814841),Ae=t.n(De);function Se(e,n){(null==n||n>e.length)&&(n=e.length)
;for(var t=0,r=new Array(n);t<n;t++)r[t]=e[t];return r}function xe(e,n,t){n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t;return e}function Ne(e,n){return function(e){if(Array.isArray(e))return e}(e)||function(e,n){var t=null==e?null:"undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null!=t){var r,a,o=[],i=!0,l=!1;try{for(t=t.call(e);!(i=(r=t.next()).done);i=!0){o.push(r.value);if(n&&o.length===n)break}}catch(e){l=!0;a=e}finally{try{i||null==t.return||t.return()}finally{if(l)throw a}}return o}}(e,n)||function(e,n){if(!e)return;if("string"==typeof e)return Se(e,n);var t=Object.prototype.toString.call(e).slice(8,-1);"Object"===t&&e.constructor&&(t=e.constructor.name);if("Map"===t||"Set"===t)return Array.from(t);if("Arguments"===t||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t))return Se(e,n)}(e,n)||function(){
throw new TypeError("Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}var Pe={startPositionMs:0,endPositionMs:2e4,playheadPositionMs:0};const Ee=a.memo((function(e){var n=e.className,t=e.volume,o=e.disabled,u=void 0!==o&&o,s=e.onChange,c=B().audio,f=Ne(a.useState(!1),2),d=f[0],p=f[1],m=Ne(a.useState(Pe),2),v=m[0],y=m[1],O=v.playheadPositionMs,w=v.endPositionMs,j=v.startPositionMs,D=null!=c,A=w-j,S=A>1e3*je.YW;a.useEffect((function(){null!=c&&y({playheadPositionMs:0,endPositionMs:1e3*c.duration,startPositionMs:0})}),[c]);var x,N,P=a.useCallback((function(e){if(null!=c){c.pause();null!=e&&(c.currentTime=e);p(!1)}}),[c]),I=a.useCallback((function(){if(null!=c)if(d)P();else{c.currentTime=E(O>=w?j:O);c.volume=(0,g.Rp)(t);c.play();p(!0)}}),[c,w,P,O,d,j,t]),M=a.useCallback((function(e){y(e);null==s||s({startMs:e.startPositionMs,endMs:e.endPositionMs})}),[s]),_=a.useCallback((function(e){
null!=c&&(c.currentTime=e)}),[c]);return(0,r.jsxs)("div",{className:i()(Ae().container,(x={},xe(x,Ae().initialized,D),xe(x,Ae().disabled,!D||u),x),n),children:[(0,r.jsxs)("div",{className:Ae().playButtonContainer,children:[(0,r.jsx)(l.P3,{className:Ae().playButton,onClick:D?I:void 0,children:d?(0,r.jsx)(b,{className:Ae().playButtonIcon}):(0,r.jsx)(h.Z,{className:Ae().playButtonIcon})}),(0,r.jsx)("div",{className:Ae().durationContainer,children:(0,r.jsx)(l.xv,{className:Ae().duration,variant:"text-xs/normal",color:S?"text-warning":"text-positive",children:(N=A,"".concat(E(N).toFixed(2),"s"))})})]}),(0,r.jsx)(we,{playing:d,onPlaybackChange:_,onPausePlayback:P,onChangePosition:M,disabled:u})]})}));var Ie=t(72818),Me=t(131507),_e=t.n(Me);function Ce(e,n){(null==n||n>e.length)&&(n=e.length);for(var t=0,r=new Array(n);t<n;t++)r[t]=e[t];return r}function Le(e,n){return function(e){if(Array.isArray(e))return e}(e)||function(e,n){
var t=null==e?null:"undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null!=t){var r,a,o=[],i=!0,l=!1;try{for(t=t.call(e);!(i=(r=t.next()).done);i=!0){o.push(r.value);if(n&&o.length===n)break}}catch(e){l=!0;a=e}finally{try{i||null==t.return||t.return()}finally{if(l)throw a}}return o}}(e,n)||function(e,n){if(!e)return;if("string"==typeof e)return Ce(e,n);var t=Object.prototype.toString.call(e).slice(8,-1);"Object"===t&&e.constructor&&(t=e.constructor.name);if("Map"===t||"Set"===t)return Array.from(t);if("Arguments"===t||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t))return Ce(e,n)}(e,n)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}const Ue=a.memo((function(e){var n=e.sound,t=e.volume,o=e.disabled,i=Le(a.useState(!1),2),u=i[0],s=i[1],c=a.useRef(null),f=B(),d=f.file,p=f.audio,m=f.loadAudioFromFile,v=a.useMemo((function(){return(0,
Ie.Z)(n.soundId,n.overridePath)}),[n]);a.useEffect((function(){null==c.current&&(c.current=function(e,n){return R.apply(this,arguments)}(v,n.name).then(m))}),[v,m,n.name]);return(0,r.jsxs)("div",{className:_e().previewContainer,children:[(0,r.jsx)(l.P3,{onClick:o?void 0:function(){if(null!=p)if(p.paused){p.volume=(0,g.Rp)(t);p.currentTime=0;p.play();s(!0);p.addEventListener("ended",(function(){return s(!1)}),{once:!0})}else{p.pause();s(!1)}},className:_e().playButton,"aria-label":u?A.Z.Messages.STOP:A.Z.Messages.PLAY,children:u?(0,r.jsx)(b,{className:_e().playIcon}):(0,r.jsx)(h.Z,{className:_e().playIcon})}),(0,r.jsx)("div",{className:_e().waveformContainer,children:(0,r.jsx)(he,{className:_e().waveform,file:d,audio:p})})]})}));var Re=t(909519),ke=t.n(Re);const Te=a.memo((function(e){var n=e.sound,t=e.volume,a=e.disabled,o=void 0!==a&&a,i=e.onChange,u=B().file;return(0,r.jsx)(l.hj,{className:ke().section,title:A.Z.Messages.SOUNDBOARD_SOUND_UPLOAD_MODAL_PREVIEW,children:(0,
r.jsxs)("div",{className:ke().fakeInput,children:[null!=n&&(0,r.jsx)(Ue,{sound:n,volume:t,disabled:o}),null==n&&null!=u&&(0,r.jsx)(Ee,{className:ke().audioTrimmer,volume:t,disabled:o,onChange:i})]})})}));function Ze(e,n,t,r,a,o,i){try{var l=e[o](i),u=l.value}catch(e){t(e);return}l.done?n(u):Promise.resolve(u).then(r,a)}function Be(e){return function(){var n=this,t=arguments;return new Promise((function(r,a){var o=e.apply(n,t);function i(e){Ze(o,r,a,i,l,"next",e)}function l(e){Ze(o,r,a,i,l,"throw",e)}i(void 0)}))}}var Fe,He=function(e,n){var t,r,a,o,i={label:0,sent:function(){if(1&a[0])throw a[1];return a[1]},trys:[],ops:[]};return o={next:l(0),throw:l(1),return:l(2)},"function"==typeof Symbol&&(o[Symbol.iterator]=function(){return this}),o;function l(o){return function(l){return function(o){if(t)throw new TypeError("Generator is already executing.");for(;i;)try{if(t=1,r&&(a=2&o[0]?r.return:o[0]?r.throw||((a=r.return)&&a.call(r),0):r.next)&&!(a=a.call(r,o[1])).done)return a;(r=0,
a)&&(o=[2&o[0],a.value]);switch(o[0]){case 0:case 1:a=o;break;case 4:i.label++;return{value:o[1],done:!1};case 5:i.label++;r=o[1];o=[0];continue;case 7:o=i.ops.pop();i.trys.pop();continue;default:if(!(a=i.trys,a=a.length>0&&a[a.length-1])&&(6===o[0]||2===o[0])){i=0;continue}if(3===o[0]&&(!a||o[1]>a[0]&&o[1]<a[3])){i.label=o[1];break}if(6===o[0]&&i.label<a[1]){i.label=a[1];a=o;break}if(a&&i.label<a[2]){i.label=a[2];i.ops.push(o);break}a[2]&&i.ops.pop();i.trys.pop();continue}o=n.call(e,i)}catch(e){o=[6,e];r=0}finally{t=a=0}if(5&o[0])throw o[1];return{value:o[0]?o[1]:void 0,done:!0}}([o,l])}}},ze=new AudioContext;t.e(64363).then(t.t.bind(t,964363,23)).then((function(e){var n=e.default;Fe=new n}));function Ge(e){return new Promise((function(n,t){var r=new FileReader,a=function(){r.removeEventListener("load",a);r.removeEventListener("error",t);n(r.result)};r.addEventListener("load",a);r.addEventListener("error",t);e(r)}))}function Ye(e){return Ve.apply(this,arguments)}function Ve(){
return(Ve=Be((function(e){var n;return He(this,(function(t){switch(t.label){case 0:return[4,Ge((function(n){n.readAsArrayBuffer(e)}))];case 1:n=t.sent();if(!(n instanceof ArrayBuffer))throw new Error("Unexpected file type");return[2,ze.decodeAudioData(n)]}}))}))).apply(this,arguments)}function We(){return(We=Be((function(e){var n;return He(this,(function(t){switch(t.label){case 0:return[4,Ge((function(n){n.readAsDataURL(e)}))];case 1:n=t.sent();if(!("string"==typeof n))throw new Error("Unexpected file type");return[2,n]}}))}))).apply(this,arguments)}function $e(e,n){for(var t=n.startMs,r=n.endMs,a=e.sampleRate,o=e.numberOfChannels,i=1e3*e.duration,l=Math.floor(t/i*e.length),u=Math.floor(r/i*e.length),s=u-l+1,c=ze.createBuffer(o,s,a),f=0;f<o;f++)for(var d=c.getChannelData(f),h=e.getChannelData(f),p=0,m=l;m<=u;m++){d[p]=h[m];p++}return c}function Je(e){for(var n=e.numberOfChannels,t=[],r=0;r<n;r++)t.push(e.getChannelData(r));return t}function qe(e){return new Promise((function(n,t){
var r=V().v4(),a=function(e){var o=e.data,i=o.mp3Blob,l=o.error,u=o.id;null==Fe||Fe.removeEventListener("message",a);r===u&&(null!=l?t(l):null!=i?n(i):t(new Error("Unexpected worker response")))};null==Fe||Fe.addEventListener("message",a);var o={id:r,sourceChannels:Je(e),sampleRate:e.sampleRate};null==Fe||Fe.postMessage(o)}))}function Ke(e){return Xe.apply(this,arguments)}function Xe(){return(Xe=Be((function(e){var n,t,r,a,o,i,l;return He(this,(function(u){switch(u.label){case 0:n=e.readPromise,t=e.guildId,r=e.name,a=e.volume,o=e.emojiId,i=e.emojiName;l={guildId:t,name:r};return[4,n];case 1:return[2,d.Dx.apply(void 0,[(l.sound=u.sent(),l.volume=a,l.emojiId=o,l.emojiName=i,l)])]}}))}))).apply(this,arguments)}function Qe(e,n){return en.apply(this,arguments)}function en(){return(en=Be((function(e,n){var t,r;return He(this,(function(a){switch(a.label){case 0:return[4,Ye(e)];case 1:t=a.sent();return[4,qe($e(t,n))];case 2:r=a.sent();return[2,new File([r],e.name,{type:"audio/mp3"})]}}))
}))).apply(this,arguments)}var nn=t(363010),tn=t(152163),rn=t(60392),an=t(566223),on=t(902397),ln=t(725616),un=t(392115);var sn=t(1812),cn=t(629858),fn=t(761434),dn=t(461061),hn=t(755447),pn=t.n(hn);function mn(e,n,t){n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t;return e}function vn(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{},r=Object.keys(t);"function"==typeof Object.getOwnPropertySymbols&&(r=r.concat(Object.getOwnPropertySymbols(t).filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))));r.forEach((function(n){mn(e,n,t[n])}))}return e}function yn(e,n){n=null!=n?n:{};Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):function(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable})));t.push.apply(t,r)}return t
}(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}));return e}function bn(e){var n=e.guildId,t=e.error,o=e.emojiId,i=e.emojiName,u=e.setEmojiId,s=e.setEmojiName,c=function(e){var n=e.emojiId,t=e.emojiName,r=(0,nn.e7)([un.Z],(function(){return null!=n?un.Z.getCustomEmojiById(n):null}));if(null!=r||null!=t)return null!=t?ln.ZP.convertSurrogateToName(t,!1):null==r?void 0:r.name}({emojiId:o,emojiName:i}),f=(0,nn.e7)([sn.ZP],(function(){return null!=n?sn.ZP.getDefaultChannel(n):null})),d=a.createRef(),h=(0,an.Z)(d),p=function(e){return function(n,t){s(null==(null==n?void 0:n.id)?null==n?void 0:n.optionallyDiverseSequence:void 0);u(null==n?void 0:n.id);t&&e()}},m=function(e){e.stopPropagation();s(void 0);u(void 0)};return(0,r.jsx)(l.xJ,{title:A.Z.Messages.SOUNDBOARD_SOUND_UPLOAD_MODAL_EMOJI,className:pn().section,error:t,children:(0,r.jsx)(fn.ZP,{animation:fn.ZP.Animation.NONE,position:fn.ZP.Positions.TOP,renderPopout:function(e){
var t=e.closePopout;return(0,r.jsx)(on.Z,{closePopout:t,pickerIntention:dn.HzX.SOUNDBOARD,onNavigateAway:t,onSelectEmoji:p(t),guildId:n,channel:f})},children:function(e,n){var t=n.isShown;return(0,r.jsxs)("div",yn(vn({},e),{className:pn().emojiInput,ref:d,children:[(0,r.jsx)(cn.Z,{className:pn().emojiButton,active:t,tabIndex:0,renderButtonContents:null!=o||null!=i?function(){return(0,r.jsx)(tn.Z,{emojiName:i,emojiId:o})}:null}),(0,r.jsx)(l.oi,{inputClassName:pn().emojiText,placeholder:A.Z.Messages.GUILD_STICKER_UPLOAD_RELATED_EMOJI_PLACEHOLDER,value:null!=c?":".concat(c,":"):"",readOnly:!0}),h&&null!=c&&(0,r.jsx)(rn.Z,yn(vn({},e),{onClick:m,className:pn().removeButton}))]}))}})})}function gn(e,n){(null==n||n>e.length)&&(n=e.length);for(var t=0,r=new Array(n);t<n;t++)r[t]=e[t];return r}function On(e,n,t,r,a,o,i){try{var l=e[o](i),u=l.value}catch(e){t(e);return}l.done?n(u):Promise.resolve(u).then(r,a)}function wn(e){return function(){var n=this,t=arguments
;return new Promise((function(r,a){var o=e.apply(n,t);function i(e){On(o,r,a,i,l,"next",e)}function l(e){On(o,r,a,i,l,"throw",e)}i(void 0)}))}}function jn(e,n){return function(e){if(Array.isArray(e))return e}(e)||function(e,n){var t=null==e?null:"undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null!=t){var r,a,o=[],i=!0,l=!1;try{for(t=t.call(e);!(i=(r=t.next()).done);i=!0){o.push(r.value);if(n&&o.length===n)break}}catch(e){l=!0;a=e}finally{try{i||null==t.return||t.return()}finally{if(l)throw a}}return o}}(e,n)||function(e,n){if(!e)return;if("string"==typeof e)return gn(e,n);var t=Object.prototype.toString.call(e).slice(8,-1);"Object"===t&&e.constructor&&(t=e.constructor.name);if("Map"===t||"Set"===t)return Array.from(t);if("Arguments"===t||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t))return gn(e,n)}(e,n)||function(){
throw new TypeError("Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}var Dn,An=function(e,n){var t,r,a,o,i={label:0,sent:function(){if(1&a[0])throw a[1];return a[1]},trys:[],ops:[]};return o={next:l(0),throw:l(1),return:l(2)},"function"==typeof Symbol&&(o[Symbol.iterator]=function(){return this}),o;function l(o){return function(l){return function(o){if(t)throw new TypeError("Generator is already executing.");for(;i;)try{if(t=1,r&&(a=2&o[0]?r.return:o[0]?r.throw||((a=r.return)&&a.call(r),0):r.next)&&!(a=a.call(r,o[1])).done)return a;(r=0,a)&&(o=[2&o[0],a.value]);switch(o[0]){case 0:case 1:a=o;break;case 4:i.label++;return{value:o[1],done:!1};case 5:i.label++;r=o[1];o=[0];continue;case 7:o=i.ops.pop();i.trys.pop();continue;default:if(!(a=i.trys,a=a.length>0&&a[a.length-1])&&(6===o[0]||2===o[0])){i=0;continue}if(3===o[0]&&(!a||o[1]>a[0]&&o[1]<a[3])){i.label=o[1];break}
if(6===o[0]&&i.label<a[1]){i.label=a[1];a=o;break}if(a&&i.label<a[2]){i.label=a[2];i.ops.push(o);break}a[2]&&i.ops.pop();i.trys.pop();continue}o=n.call(e,i)}catch(e){o=[6,e];r=0}finally{t=a=0}if(5&o[0])throw o[1];return{value:o[0]?o[1]:void 0,done:!0}}([o,l])}}};!function(e){e.READY="ready";e.ENCODING_FAILED="encoding-failed";e.ENCODING="encoding";e.UPLOADING="uploading"}(Dn||(Dn={}));var Sn=[{name:"audio",extensions:["mp3","wav","ogg"]}];function xn(e){var n,t,o=e.guildId,h=e.existingSound,p=e.onClose,m=e.transitionState,v=function(e){if(e instanceof u.Z)T(e);else if(e instanceof Error){var n={status:500,body:{message:e.message}};T(new u.Z(n))}else T(new u.Z(e))
},y=jn(a.useState(null!==(n=null==h?void 0:h.name)&&void 0!==n?n:""),2),b=y[0],g=y[1],O=jn(a.useState(null!==(t=null==h?void 0:h.volume)&&void 0!==t?t:1),2),w=O[0],j=O[1],D=jn(a.useState(null==h?void 0:h.emojiId),2),S=D[0],x=D[1],N=jn(a.useState(null==h?void 0:h.emojiName),2),P=N[0],E=N[1],I=B(),M=I.file,_=I.loadAudioFromFile,C=jn(a.useState(!1),2),L=C[0],U=C[1],R=jn(a.useState(null),2),k=R[0],T=R[1],Z=jn(a.useState(null),2),F=Z[0],H=Z[1],z=jn(a.useState(Dn.READY),2),G=z[0],Y=z[1];function V(){V=wn((function(e){var n;return An(this,(function(t){switch(t.label){case 0:t.trys.push([0,2,,3]);return[4,_(null!=e?e:null)];case 1:t.sent();Y(Dn.READY);T(null);return[3,3];case 2:n=t.sent();v(n);return[3,3];case 3:return[2]}}))}));return V.apply(this,arguments)}var W,$=function(e){switch(e){case Dn.ENCODING:return A.Z.Messages.SOUNDBOARD_MODAL_AUDIO_STATE_ENCODING;case Dn.ENCODING_FAILED:return A.Z.Messages.SOUNDBOARD_MODAL_AUDIO_STATE_ENCODING_FAILED;case Dn.UPLOADING:
return A.Z.Messages.SOUNDBOARD_MODAL_AUDIO_STATE_UPLOADING}return null}(G),J=G===Dn.UPLOADING||G===Dn.ENCODING,q=null!=h,K=b.length>=2&&(q||null!=M),X=a.useCallback((W=wn((function(e,n){var t,r;return An(this,(function(a){switch(a.label){case 0:Y(Dn.ENCODING);a.label=1;case 1:a.trys.push([1,3,,4]);return[4,Qe(e,n)];case 2:t=a.sent();Y(Dn.READY);return[2,t];case 3:r=a.sent();Y(Dn.ENCODING_FAILED);throw r;case 4:return[2]}}))})),function(e,n){return W.apply(this,arguments)}),[]),Q=a.useCallback(wn((function(){var e,n,t,r;return An(this,(function(a){switch(a.label){case 0:if(null==M)return[2];e=M;return null==F?[3,2]:[4,X(M,F)];case 1:if(null==(n=a.sent()))return[2];e=n;a.label=2;case 2:t=function(e){return We.apply(this,arguments)}(e);Y(Dn.UPLOADING);a.label=3;case 3:a.trys.push([3,5,,6]);return[4,Ke({readPromise:t,guildId:o,name:b,volume:w,emojiId:S,emojiName:P})];case 4:a.sent();Y(Dn.READY);return[3,6];case 5:r=a.sent();throw new u.Z(r);case 6:return[2]}}))
})),[M,o,b,X,F,w,S,P]),ee=a.useCallback(wn((function(){var e;return An(this,(function(n){switch(n.label){case 0:U(!0);T(null);n.label=1;case 1:n.trys.push([1,6,7,8]);return q?[4,(0,d.$d)({guildId:o,soundId:h.soundId,name:b,volume:w,emojiId:S,emojiName:P})]:[3,3];case 2:n.sent();return[3,5];case 3:return[4,Q()];case 4:n.sent();n.label=5;case 5:p();return[3,8];case 6:e=n.sent();v(e);return[3,8];case 7:Y(Dn.READY);U(!1);return[7];case 8:return[2]}}))})),[h,o,b,p,Q,w,S,P,q]);a.useEffect((function(){_(null);f.default.track(dn.rMx.OPEN_MODAL,{type:"Soundboard Upload Sound",guild_id:o})}),[]);var ne,te=(0,r.jsx)(bn,{guildId:o,emojiId:S,emojiName:P,setEmojiId:x,setEmojiName:E,error:null==k?void 0:k.getFirstFieldErrorMessage("emoji")});return(0,r.jsxs)(c.Y0,{transitionState:m,children:[(0,r.jsx)(c.ol,{onClick:p,className:pn().modalClose}),(0,r.jsxs)(c.xB,{className:pn().headerContainer,separator:!1,children:[(0,r.jsx)(l.X6,{className:pn().header,variant:"heading-xl/extrabold",
children:q?A.Z.Messages.SOUNDBOARD_SOUND_UPDATE_MODAL_HEADER:A.Z.Messages.SOUNDBOARD_SOUND_UPLOAD_MODAL_HEADER}),!q&&(0,r.jsx)(l.xv,{variant:"text-sm/normal",children:A.Z.Messages.SOUNDBOARD_SOUND_UPLOAD_MODAL_SUBHEADER.format({maxDuration:je.YW,maxFileSize:je.mc})})]}),(0,r.jsxs)(c.hz,{className:pn().content,children:[null!=k&&!k.hasFieldErrors()&&(0,r.jsx)(l.kz,{className:pn().section,children:k.message}),(q||null!=M)&&(0,r.jsx)(Te,{sound:h,volume:w,disabled:J,onChange:H}),!q&&(0,r.jsx)(l.xJ,{required:!0,error:null==k?void 0:k.getFirstFieldErrorMessage("sound"),className:pn().section,title:A.Z.Messages.SOUNDBOARD_SOUND_UPLOAD_MODAL_FILE,children:(0,r.jsx)(s.Z,{filename:null!==(ne=null==M?void 0:M.name)&&void 0!==ne?ne:"",buttonText:A.Z.Messages.SOUNDBOARD_SOUND_UPLOAD_MODAL_BROWSE,placeholder:A.Z.Messages.SOUNDBOARD_SOUND_UPLOAD_MODAL_INPUT_PLACEHOLDER,onFileSelect:function(e){return V.apply(this,arguments)},filters:Sn})}),(0,r.jsxs)("div",{className:pn().multiInput,children:[(0,
r.jsx)(l.xJ,{required:!0,error:null==k?void 0:k.getFirstFieldErrorMessage("name"),className:i()(pn().section,pn().halfInput),title:A.Z.Messages.SOUNDBOARD_SOUND_UPLOAD_MODAL_SOUND_NAME,children:(0,r.jsx)(l.oi,{placeholder:A.Z.Messages.SOUNDBOARD_SOUND_UPLOAD_MODAL_SOUND_NAME,value:b,onChange:g,maxLength:je.Ek})}),te]}),(0,r.jsx)(l.xJ,{error:null==k?void 0:k.getFirstFieldErrorMessage("volume"),className:pn().section,title:A.Z.Messages.SOUNDBOARD_SOUND_UPLOAD_MODAL_SOUND_VOLUME,children:(0,r.jsx)(l.iR,{initialValue:w,onValueChange:function(e){return j(e)},minValue:0,maxValue:1})})]}),(0,r.jsxs)(c.mz,{children:[(0,r.jsx)(l.zx,{disabled:!K,submitting:L,size:l.zx.Sizes.SMALL,onClick:ee,children:q?A.Z.Messages.SOUNDBOARD_SOUND_UPLOAD_MODAL_SAVE:A.Z.Messages.SOUNDBOARD_SOUND_UPLOAD_MODAL_UPLOAD}),(0,r.jsx)(l.zx,{disabled:L,onClick:p,size:l.zx.Sizes.SMALL,look:l.zx.Looks.LINK,color:l.zx.Colors.PRIMARY,children:A.Z.Messages.SOUNDBOARD_SOUND_UPLOAD_MODAL_CANCEL}),null!=$&&(0,r.jsx)("div",{
className:pn().soundStateHint,children:(0,r.jsx)(l.xv,{variant:"text-xs/normal",color:"text-muted",children:$})})]})]})}}}]);
//# sourceMappingURL=084298f0fe6a518898bd.js.map