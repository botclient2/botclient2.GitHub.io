"use strict";(this.webpackChunkdiscord_app=this.webpackChunkdiscord_app||[]).push([[65220],{205014:(e,n,r)=>{r.d(n,{K:()=>h,f:()=>p});var t=r(23816),o=r(7046),a=r(932847),l=r(461061);function i(e,n,r,t,o,a,l){try{var i=e[a](l),u=i.value}catch(e){r(e);return}i.done?n(u):Promise.resolve(u).then(t,o)}function u(e){return function(){var n=this,r=arguments;return new Promise((function(t,o){var a=e.apply(n,r);function l(e){i(a,t,o,l,u,"next",e)}function u(e){i(a,t,o,l,u,"throw",e)}l(void 0)}))}}function c(e,n,r){n in e?Object.defineProperty(e,n,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[n]=r;return e}function s(e){for(var n=1;n<arguments.length;n++){var r=null!=arguments[n]?arguments[n]:{},t=Object.keys(r);"function"==typeof Object.getOwnPropertySymbols&&(t=t.concat(Object.getOwnPropertySymbols(r).filter((function(e){return Object.getOwnPropertyDescriptor(r,e).enumerable}))));t.forEach((function(n){c(e,n,r[n])}))}return e}function f(e,n){n=null!=n?n:{}
;Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):function(e,n){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);n&&(t=t.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable})));r.push.apply(r,t)}return r}(Object(n)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(n,r))}));return e}var d=function(e,n){var r,t,o,a,l={label:0,sent:function(){if(1&o[0])throw o[1];return o[1]},trys:[],ops:[]};return a={next:i(0),throw:i(1),return:i(2)},"function"==typeof Symbol&&(a[Symbol.iterator]=function(){return this}),a;function i(a){return function(i){return function(a){if(r)throw new TypeError("Generator is already executing.");for(;l;)try{if(r=1,t&&(o=2&a[0]?t.return:a[0]?t.throw||((o=t.return)&&o.call(t),0):t.next)&&!(o=o.call(t,a[1])).done)return o;(t=0,o)&&(a=[2&a[0],o.value]);switch(a[0]){case 0:case 1:o=a;break;case 4:l.label++;return{value:a[1],done:!1
};case 5:l.label++;t=a[1];a=[0];continue;case 7:a=l.ops.pop();l.trys.pop();continue;default:if(!(o=l.trys,o=o.length>0&&o[o.length-1])&&(6===a[0]||2===a[0])){l=0;continue}if(3===a[0]&&(!o||a[1]>o[0]&&a[1]<o[3])){l.label=a[1];break}if(6===a[0]&&l.label<o[1]){l.label=o[1];o=a;break}if(o&&l.label<o[2]){l.label=o[2];l.ops.push(a);break}o[2]&&l.ops.pop();l.trys.pop();continue}a=n.call(e,l)}catch(e){a=[6,e];t=0}finally{r=o=0}if(5&a[0])throw a[1];return{value:a[0]?a[1]:void 0,done:!0}}([a,i])}}};function h(e){var n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:[];0!==n.length&&a.default.track(l.rMx.GUILD_RAID_REPORTED,f(s({},(0,t.hH)(e)),{guild_id:e,raid_types:n}))}function p(e,n){return A.apply(this,arguments)}function A(){return(A=u((function(e,n){var r;return d(this,(function(t){switch(t.label){case 0:if(e.hasFeature(l.oNc.RAID_ALERTS_DISABLED)===n)return[2];r=new Set(e.features);n?r.add(l.oNc.RAID_ALERTS_DISABLED):r.delete(l.oNc.RAID_ALERTS_DISABLED)
;r.has(l.oNc.RAID_ALERTS_ENABLED)&&r.delete(l.oNc.RAID_ALERTS_ENABLED);return[4,o.Z.saveGuild(e.id,{features:r},{throwErr:!0})];case 1:t.sent();return[2]}}))}))).apply(this,arguments)}},956922:(e,n,r)=>{r.d(n,{N8:()=>c,BT:()=>s,MR:()=>f,WR:()=>d});var t=r(667294),o=r(363010),a=r(379908),l=r(940712),i=r(808433),u=r(461061);function c(e){var n,r=null!==(n=null==e?void 0:e.id)&&void 0!==n?n:"",a=i.r.useExperiment({guildId:r}).enableRaidReporting,c=(0,o.e7)([l.Z],(function(){return function(e){var n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:l.Z;return n.can(u.Plq.BAN_MEMBERS,e)||n.can(u.Plq.KICK_MEMBERS,e)||n.can(u.Plq.MANAGE_GUILD,e)}(e,l.Z)}),[e]);t.useEffect((function(){c&&i.r.trackExposure({guildId:r})}),[c,r]);return c&&a}function s(e){var n,r=null!==(n=null==e?void 0:e.id)&&void 0!==n?n:"",t=(0,o.e7)([l.Z],(function(){return function(e){return(arguments.length>1&&void 0!==arguments[1]?arguments[1]:l.Z).can(u.Plq.MANAGE_GUILD,e)}(e,l.Z)}),[e]),a=i.l.useExperiment({
guildId:r},{autoTrackExposure:t}).enableRaidAlerts;return t&&a}function f(e){var n=s(e),r=!0===(null==e?void 0:e.hasFeature(u.oNc.RAID_ALERTS_DISABLED));return n&&r}function d(e){var n,r=(0,o.e7)([l.Z],(function(){return function(e){return(arguments.length>1&&void 0!==arguments[1]?arguments[1]:l.Z).can(u.Plq.MANAGE_GUILD,e)}(e,l.Z)}),[e]);return(0,a.au)(null!==(n=null==e?void 0:e.id)&&void 0!==n?n:"",!1)&&r}},765220:(e,n,r)=>{r.r(n);r.d(n,{default:()=>w});var t=r(785893),o=r(667294),a=r(777087),l=r(363010),i=r(331535),u=r(23816),c=r(53211),s=r(421919),f=r(7046),d=r(1812),h=r(653772),p=r(105405),A=r(859023),E=r(363798),b=r(112712),I=r(911324),_=r(205014),y=r(956922),v=r(461061),D=r(441640),R=r(959797),S=r(433924),N=r.n(S);function m(e,n){(null==n||n>e.length)&&(n=e.length);for(var r=0,t=new Array(n);r<n;r++)t[r]=e[r];return t}function L(e,n,r,t,o,a,l){try{var i=e[a](l),u=i.value}catch(e){r(e);return}i.done?n(u):Promise.resolve(u).then(t,o)}function T(e,n){return function(e){
if(Array.isArray(e))return e}(e)||function(e,n){var r=null==e?null:"undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null!=r){var t,o,a=[],l=!0,i=!1;try{for(r=r.call(e);!(l=(t=r.next()).done);l=!0){a.push(t.value);if(n&&a.length===n)break}}catch(e){i=!0;o=e}finally{try{l||null==r.return||r.return()}finally{if(i)throw o}}return a}}(e,n)||g(e,n)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function x(e){return function(e){if(Array.isArray(e))return m(e)}(e)||function(e){if("undefined"!=typeof Symbol&&null!=e[Symbol.iterator]||null!=e["@@iterator"])return Array.from(e)}(e)||g(e)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function g(e,n){if(e){if("string"==typeof e)return m(e,n)
;var r=Object.prototype.toString.call(e).slice(8,-1);"Object"===r&&e.constructor&&(r=e.constructor.name);return"Map"===r||"Set"===r?Array.from(r):"Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)?m(e,n):void 0}}var O=function(e,n){var r,t,o,a,l={label:0,sent:function(){if(1&o[0])throw o[1];return o[1]},trys:[],ops:[]};return a={next:i(0),throw:i(1),return:i(2)},"function"==typeof Symbol&&(a[Symbol.iterator]=function(){return this}),a;function i(a){return function(i){return function(a){if(r)throw new TypeError("Generator is already executing.");for(;l;)try{if(r=1,t&&(o=2&a[0]?t.return:a[0]?t.throw||((o=t.return)&&o.call(t),0):t.next)&&!(o=o.call(t,a[1])).done)return o;(t=0,o)&&(a=[2&a[0],o.value]);switch(a[0]){case 0:case 1:o=a;break;case 4:l.label++;return{value:a[1],done:!1};case 5:l.label++;t=a[1];a=[0];continue;case 7:a=l.ops.pop();l.trys.pop();continue;default:if(!(o=l.trys,o=o.length>0&&o[o.length-1])&&(6===a[0]||2===a[0])){l=0;continue}
if(3===a[0]&&(!o||a[1]>o[0]&&a[1]<o[3])){l.label=a[1];break}if(6===a[0]&&l.label<o[1]){l.label=o[1];o=a;break}if(o&&l.label<o[2]){l.label=o[2];l.ops.push(a);break}o[2]&&l.ops.pop();l.trys.pop();continue}a=n.call(e,l)}catch(e){a=[6,e];t=0}finally{r=o=0}if(5&a[0])throw a[1];return{value:a[0]?a[1]:void 0,done:!0}}([a,i])}}};function w(e){var n,r,S,m,g=e.guildId,w=e.transitionState,C=e.onClose,j=(0,l.e7)([h.Z],(function(){return h.Z.getGuild(g)}),[g]),P=null!==(n=null==j?void 0:j.safetyAlertsChannelId)&&void 0!==n?n:null,M=T(o.useState(!!(null==j?void 0:j.hasFeature(v.oNc.RAID_ALERTS_DISABLED))),2),Z=M[0],k=M[1],U=(0,y.BT)(j),G=T(o.useState(null!=P?P:null!==(r=null==j?void 0:j.publicUpdatesChannelId)&&void 0!==r?r:null),2),B=G[0],F=G[1],z=T(o.useState(!1),2),Y=z[0],H=z[1],V=(0,l.Wu)([d.ZP,A.default,p.Z],(function(){var e=d.ZP.getChannels(g)[d.sH].filter((function(e){return e.channel.type===a.d.GUILD_TEXT})).map((function(e){var n=e.channel;return{value:n.id,label:(0,
c.F6)(n,A.default,p.Z,!0)}}));return null!=P?e:x(e)}),[g,P]),q=(m=(S=function(){var e,n;return O(this,(function(r){switch(r.label){case 0:if(null==j){(0,I.CF)((0,b.Yz)(R.Z.Messages.GUILD_ANTIRAID_SAFETY_SETUP_ERROR,D.pC.FAILURE));return[2]}r.label=1;case 1:r.trys.push([1,6,7,8]);H(!0);return Z===j.hasFeature(v.oNc.RAID_ALERTS_DISABLED)?[3,3]:[4,(0,_.f)(j,Z)];case 2:r.sent();r.label=3;case 3:return B===P?[3,5]:[4,f.Z.saveGuild(g,{safetyAlertsChannelId:B},{throwErr:!0})];case 4:r.sent();f.Z.updateGuild({safetyAlertsChannelId:B});r.label=5;case 5:if(null!=(e=null!=B?B:P)){n={raid_alert_type:s.wR.JOIN_RAID,enabled:Z,raid_alert_channel_id:e,guild_id:g,channel_id:e};(0,u.yw)(v.rMx.GUILD_RAID_ALERTS_SETUP,n)}C();return[3,8];case 6:r.sent();(0,I.CF)((0,b.Yz)(R.Z.Messages.GUILD_ANTIRAID_SAFETY_SETUP_ERROR,D.pC.FAILURE));return[3,8];case 7:H(!1);return[7];case 8:return[2]}}))},function(){var e=this,n=arguments;return new Promise((function(r,t){var o=S.apply(e,n);function a(e){
L(o,r,t,a,l,"next",e)}function l(e){L(o,r,t,a,l,"throw",e)}a(void 0)}))}),function(){return m.apply(this,arguments)});return(0,t.jsxs)(E.Y0,{transitionState:w,size:E.Cg.SMALL,children:[(0,t.jsx)(E.xB,{separator:!1,children:(0,t.jsx)(i.X6,{color:"header-primary",variant:"heading-md/semibold",children:R.Z.Messages.GUILD_ANTIRAID_SAFETY_SETUP_CHANNEL_MODAL_TITLE})}),(0,t.jsxs)(E.hz,{children:[(0,t.jsx)(i.xv,{variant:"text-sm/normal",color:"header-secondary",children:R.Z.Messages.GUILD_ANTIRAID_SAFETY_SETUP_CHANNEL_MODAL_DESCRIPTION}),(0,t.jsx)("div",{className:N().mainChannelContainer,children:(0,t.jsxs)(i.P3,{className:N().enableAlertsContainer,onClick:function(){U&&k(!Z)},children:[(0,t.jsx)(i.xv,{variant:"text-md/medium",color:"text-normal",children:R.Z.Messages.GUILD_ANTIRAID_SAFETY_SETUP_CHANNEL_MODAL_ENABLE_ALERTS}),(0,t.jsx)(i.XZ,{value:!Z,className:N().enabledAlertsCheckbox,type:i.XZ.Types.INVERTED,disabled:!U})]})}),(0,t.jsxs)("div",{className:N().mainChannelContainer,
children:[(0,t.jsx)(i.xv,{variant:"eyebrow",color:"text-muted",children:R.Z.Messages.GUILD_ANTIRAID_SAFETY_CHANNEL_TITLE}),(0,t.jsx)(i.Vc,{options:V,onChange:function(e){F(e)},value:B,className:N().channelSelect,maxVisibleItems:4}),(0,t.jsx)(i.xv,{variant:"text-xs/normal",color:"text-muted",children:R.Z.Messages.GUILD_ANTIRAID_SAFETY_SETUP_CHANNEL_MODAL_CHANNEL_PERMISSIONS_NOTICE})]})]}),(0,t.jsxs)(E.mz,{children:[(0,t.jsx)(i.zx,{onClick:q,color:i.zx.Colors.BRAND_NEW,look:i.zx.Looks.FILLED,submitting:Y,children:R.Z.Messages.SAVE}),(0,t.jsx)(i.zx,{onClick:C,color:i.zx.Colors.PRIMARY,look:i.zx.Looks.LINK,disabled:Y,children:R.Z.Messages.CANCEL})]})]})}},421919:(e,n,r)=>{r.d(n,{x2:()=>t,wR:()=>o});var t,o;r(959797);!function(e){e.BUG="BUG";e.ALLOWED="ALLOWED";e.MENTION_RAID_REMOVE_RESTRICTION="MENTION_RAID_REMOVE_RESTRICTION"}(t||(t={}));!function(e){e.JOIN_RAID="JOIN_RAID";e.MENTION_RAID="MENTION_RAID"}(o||(o={}))}}]);
//# sourceMappingURL=7c895662bd64f0571abf.js.map