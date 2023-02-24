"use strict";(this.webpackChunkdiscord_app=this.webpackChunkdiscord_app||[]).push([[27903],{173572:(e,n,r)=>{r.d(n,{Z:()=>f});var t=r(506884),i=r(856864),a=r(173436),o=r(218276),l=r(390504),s=r(666492),c=r(688417),u=r(461061),d=r(228031);const f={createChannel:function(e){var n=e.guildId,r=e.type,f=e.name,h=e.permissionOverwrites,p=void 0===h?[]:h,v=e.bitrate,y=e.userLimit,m=e.parentId,b=e.skuId,g=e.branchId;a.Z.dispatch({type:"CREATE_CHANNEL_MODAL_SUBMIT"});var E={type:r,name:f,permission_overwrites:p};null!=v&&v!==u.epw&&(E.bitrate=v);null!=y&&y>0&&(E.user_limit=y);null!=m&&(E.parent_id=m);if(r===u.d4z.GUILD_STORE){if(null==b)throw new Error("Unexpected missing SKU");E.sku_id=b;E.branch_id=g}return s.Z.post({url:u.ANM.GUILD_CHANNELS(n),body:E,oldFormErrors:!0,trackedActionData:{event:t.a9.CHANNEL_CREATE,properties:function(e){var n,r;return(0,i.iG)({is_private:p.length>0,channel_id:null==e||null===(n=e.body)||void 0===n?void 0:n.id,
channel_type:null==e||null===(r=e.body)||void 0===r?void 0:r.type})}}}).then((function(e){l.Z.isOptInEnabled(n)&&c.Z.updateChannelOverrideSettings(n,e.body.id,{flags:d.ic.OPT_IN_ENABLED});o.Z.checkGuildTemplateDirty(n);return e}),(function(e){a.Z.dispatch({type:"CREATE_CHANNEL_MODAL_SUBMIT_FAILURE",errors:e.body});throw e}))}}},204292:(e,n,r)=>{r.d(n,{Q:()=>I,Z:()=>Z});var t=r(785893),i=r(667294),a=r(294184),o=r.n(a),l=r(363010),s=r(331535),c=r(485923),u=r(808525),d=r(940712),f=r(969225),h=r(757987),p=r(655686),v=r(194266),y=r(989982),m=r(532390),b=r(99912),g=r(666872),E=r(431707),C=r(792193),x=r(998689),N=r(461061),w=r(959797),A=r(919569),S=r.n(A);function _(e,n,r){n in e?Object.defineProperty(e,n,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[n]=r;return e}function k(e){for(var n=1;n<arguments.length;n++){var r=null!=arguments[n]?arguments[n]:{},t=Object.keys(r);"function"==typeof Object.getOwnPropertySymbols&&(t=t.concat(Object.getOwnPropertySymbols(r).filter((function(e){
return Object.getOwnPropertyDescriptor(r,e).enumerable}))));t.forEach((function(n){_(e,n,r[n])}))}return e}function j(e,n){n=null!=n?n:{};Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):function(e,n){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);n&&(t=t.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable})));r.push.apply(r,t)}return r}(Object(n)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(n,r))}));return e}var I;!function(e){e[e.BANNER=0]="BANNER";e[e.THUMBNAIL=1]="THUMBNAIL"}(I||(I={}));function T(e){var n=e.channel,r=e.onClick,a=(0,l.e7)([d.Z],(function(){return d.Z.can(N.Plq.MANAGE_EVENTS,n)}),[n]),f=(0,l.e7)([d.Z],(function(){return!n.isGuildVocal()||d.Z.can(N.Plq.CONNECT,n)}),[n]),p=i.useMemo((function(){return(0,c.Z)(n)}),[n]),v=(0,u.KS)(n);return(0,t.jsx)(h.ZP,{text:w.Z.Messages.GUILD_EVENT_CANNOT_CONNECT,shouldShow:!f&&null!=r,
children:function(e){var i;return(0,t.jsxs)(s.P3,j(k({},e),{className:o()(S().inline,S().channelContainer,(i={},_(i,S().channelContainerEnabled,f&&null!=r),_(i,S().channelContainerDisabled,!f&&null!=r),i)),onClick:r,children:[(0,t.jsx)(h.ZP,{text:w.Z.Messages.GUILD_EVENT_PRIVATE_CHANNEL_TOOLTIP,shouldShow:a&&p&&f&&null!=r,children:function(e){return null!=v?(0,t.jsx)(v,j(k({},e),{width:20,height:20,className:S().icon})):null}}),(0,t.jsx)(s.xv,{variant:"text-sm/normal",color:"none",className:S().channelLocation,children:n.name})]}))}})}function O(e){var n=e.guild,r=e.channel,i=e.onJoinClick,a=e.handleLocationClick,l=e.location,c=e.isExternal;return e.isHub?null==n?(0,t.jsx)("div",{}):(0,t.jsxs)("div",{className:S().inline,children:[(0,t.jsx)(f.Z,{className:S().guildIcon,size:f.Z.Sizes.MINI,active:!0,guild:n}),(0,t.jsx)(s.xv,{variant:"text-sm/normal",color:"header-secondary",children:null==n?void 0:n.name})]}):null!=r?(0,t.jsx)(T,{channel:r,onClick:i}):(0,t.jsxs)(s.P3,{
className:S().inline,onClick:a,children:[(0,t.jsx)(p.Z,{height:20,width:20,className:o()(S().channelContainer,S().icon)}),(0,t.jsx)(s.xv,{className:c?S().externalLocation:S().channelLocation,variant:"text-sm/normal",children:(0,v.m)(l,!0)})]})}function Z(e){var n,r=e.className,i=e.guild,a=e.channel,l=e.creator,c=e.userCount,u=e.name,d=e.entityType,f=e.description,h=e.startTime,p=e.imageLocation,v=void 0===p?I.BANNER:p,N=e.imageSource,w=e.isActive,A=e.isUserLurking,k=e.isEnded,j=e.isJoined,T=void 0!==j&&j,Z=e.isMember,L=void 0!==Z&&Z,P=e.isHub,M=void 0!==P&&P,G=e.speakers,R=e.speakerCount,U=e.rsvped,D=e.canInvite,V=e.location,B=e.truncate,X=e.onContextMenu,H=e.onJoinClick,W=e.onJoinGuildClick,z=e.onGoToGuildClick,Y=e.onRsvpClick,J=e.onStartClick,K=e.onInviteClick,q=e.onEndClick,F=e.onClick,$=e.isNew,Q=(0,y.Q)(a,d),ee=d===x.WX.EXTERNAL,ne=ee?function(e){return e.stopPropagation()}:void 0;return(0,t.jsxs)(s.P3,{onClick:F,onContextMenu:X,className:o()(S().card,(n={},_(n,S().joined,T),
_(n,S().lurking,A),n),r),children:[v===I.BANNER&&(0,t.jsx)(b.Z,{source:N}),(0,t.jsx)(g.ZP,{userCount:c,creator:l,name:u,description:f,startTime:h,imageSource:v===I.THUMBNAIL?N:null,isActive:w,isEnded:k,truncate:B,guildId:null==i?void 0:i.id,eventType:d,isHub:M,isNew:$}),w&&null!=i&&null!=G&&R>0&&(0,t.jsx)(C.Z,{guild:i,speakers:G,speakerCount:R,className:S().spacing}),(0,t.jsx)("hr",{className:S().divider}),(0,t.jsxs)("div",{className:o()(S().inline,S().footer),children:[(0,t.jsx)(O,{guild:i,channel:a,onJoinClick:H,handleLocationClick:ne,location:V,isExternal:ee,isHub:M}),M?(0,t.jsx)(E.Z,{isActive:w,isUserLurking:A,isMember:L,rsvped:U,onRsvpClick:Y,onJoinGuildClick:W,onGoToGuildClick:z,guildName:null==i?void 0:i.name,canInvite:D,isChannelPublic:Q,onInviteClick:K}):(0,t.jsx)(m.ZP,{entityType:d,isJoined:T,isActive:w,isUserLurking:A,rsvped:U,canInvite:D,isChannelPublic:Q,onContextMenu:X,onJoinClick:H,onRsvpClick:Y,onStartClick:J,onInviteClick:K,onEndClick:q})]})]})}},792193:(e,n,r)=>{
r.d(n,{Z:()=>f});var t=r(785893),i=(r(667294),r(294184)),a=r.n(i),o=r(331535),l=r(993167),s=r(766936),c=r(959797),u=r(811948),d=r.n(u);function f(e){var n=e.guild,r=e.speakers,i=e.speakerCount,u=e.className,f=r.slice(0,5),h=f.map((function(e){var r,i;return(0,t.jsxs)("div",{className:d().speakerContainer,children:[(0,t.jsx)(s.ZP,{src:null==e||null===(r=e.user)||void 0===r?void 0:r.getAvatarURL(n.id,20),size:s.ZP.Sizes.SIZE_20,className:d().avatar,"aria-label":"".concat(null==e?void 0:e.userNick,"-avatar")}),(0,t.jsx)("div",{className:d().textInGridContainer,children:(0,t.jsx)(o.xv,{color:"header-secondary",variant:"text-sm/normal",className:d().textInGrid,children:null==e?void 0:e.userNick})})]},null==e||null===(i=e.user)||void 0===i?void 0:i.id)})),p=i-f.length;return(0,t.jsxs)("div",{className:a()(d().grid,u),children:[h,p>0&&(0,t.jsxs)("div",{className:d().speakerContainer,children:[(0,t.jsx)("div",{className:d().iconMicrophone,children:(0,t.jsx)(l.Z,{height:12})}),(0,t.jsx)(o.xv,{
color:"header-secondary",variant:"text-sm/normal",className:d().textInGrid,children:c.Z.Messages.STAGE_DISCOVERY_LIVE_STAGE_TILE_SPEAKER_SUMMARY_OVERFLOW.format({count:p})})]})]})}},527903:(e,n,r)=>{r.r(n);r.d(n,{default:()=>se});var t=r(785893),i=r(667294),a=r(294184),o=r.n(a),l=r(363010),s=r(331535),c=r(630695),u=r(242275),d=r(356004),f=r(653772),h=r(272729),p=r(811442),v=r(67416),y=r(875684),m=r(323657),b=r(441143),g=r.n(b),E=r(804626),C=r(655432),x=r(338588),N=r(733285),w=r(998689);function A(e,n,r,t,i,a,o){try{var l=e[a](o),s=l.value}catch(e){r(e);return}l.done?n(s):Promise.resolve(s).then(t,i)}function S(e){return function(){var n=this,r=arguments;return new Promise((function(t,i){var a=e.apply(n,r);function o(e){A(a,t,i,o,l,"next",e)}function l(e){A(a,t,i,o,l,"throw",e)}o(void 0)}))}}var _=function(e,n){var r,t,i,a,o={label:0,sent:function(){if(1&i[0])throw i[1];return i[1]},trys:[],ops:[]};return a={next:l(0),throw:l(1),return:l(2)},
"function"==typeof Symbol&&(a[Symbol.iterator]=function(){return this}),a;function l(a){return function(l){return function(a){if(r)throw new TypeError("Generator is already executing.");for(;o;)try{if(r=1,t&&(i=2&a[0]?t.return:a[0]?t.throw||((i=t.return)&&i.call(t),0):t.next)&&!(i=i.call(t,a[1])).done)return i;(t=0,i)&&(a=[2&a[0],i.value]);switch(a[0]){case 0:case 1:i=a;break;case 4:o.label++;return{value:a[1],done:!1};case 5:o.label++;t=a[1];a=[0];continue;case 7:a=o.ops.pop();o.trys.pop();continue;default:if(!(i=o.trys,i=i.length>0&&i[i.length-1])&&(6===a[0]||2===a[0])){o=0;continue}if(3===a[0]&&(!i||a[1]>i[0]&&a[1]<i[3])){o.label=a[1];break}if(6===a[0]&&o.label<i[1]){o.label=i[1];i=a;break}if(i&&o.label<i[2]){o.label=i[2];o.ops.push(a);break}i[2]&&o.ops.pop();o.trys.pop();continue}a=n.call(e,o)}catch(e){a=[6,e];t=0}finally{r=i=0}if(5&a[0])throw a[1];return{value:a[0]?a[1]:void 0,done:!0}}([a,l])}}};function k(e,n){return j.apply(this,arguments)}function j(){
return(j=S((function(e,n){var r,t,i,a;return _(this,(function(n){switch(n.label){case 0:switch(e.entity_type){case w.WX.STAGE_INSTANCE:return[3,1];case w.WX.VOICE:return[3,6]}return[3,7];case 1:r=N.Z.getChannelId();t=d.Z.getChannel(e.channel_id);g()(null!=t,"could not find channel");return r===t.id?[3,4]:[4,x.TM(t,!0)];case 2:n.sent();return[4,x.R5(t,null,!1)];case 3:n.sent();n.label=4;case 4:return[4,(0,C.RK)(t,!1,!0)];case 5:n.sent();return[3,8];case 6:i=N.Z.getChannelId();a=d.Z.getChannel(e.channel_id);g()(null!=a,"could not find channel");i!==a.id&&E.default.selectVoiceChannel(a.id);return[3,8];case 7:return[3,8];case 8:return[2]}}))}))).apply(this,arguments)}function I(e,n){switch(e.entity_type){case w.WX.STAGE_INSTANCE:case w.WX.VOICE:case w.WX.EXTERNAL:null==n||n()}return Promise.resolve()}var T=r(173572),O=r(578819),Z=r(53551),L=r(427809),P=r(461061);function M(e,n){(null==n||n>e.length)&&(n=e.length);for(var r=0,t=new Array(n);r<n;r++)t[r]=e[r];return t}
function G(e,n,r,t,i,a,o){try{var l=e[a](o),s=l.value}catch(e){r(e);return}l.done?n(s):Promise.resolve(s).then(t,i)}function R(e){return function(){var n=this,r=arguments;return new Promise((function(t,i){var a=e.apply(n,r);function o(e){G(a,t,i,o,l,"next",e)}function l(e){G(a,t,i,o,l,"throw",e)}o(void 0)}))}}function U(e){return function(e){if(Array.isArray(e))return M(e)}(e)||function(e){if("undefined"!=typeof Symbol&&null!=e[Symbol.iterator]||null!=e["@@iterator"])return Array.from(e)}(e)||function(e,n){if(!e)return;if("string"==typeof e)return M(e,n);var r=Object.prototype.toString.call(e).slice(8,-1);"Object"===r&&e.constructor&&(r=e.constructor.name);if("Map"===r||"Set"===r)return Array.from(r);if("Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r))return M(e,n)}(e)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}var D=function(e,n){
var r,t,i,a,o={label:0,sent:function(){if(1&i[0])throw i[1];return i[1]},trys:[],ops:[]};return a={next:l(0),throw:l(1),return:l(2)},"function"==typeof Symbol&&(a[Symbol.iterator]=function(){return this}),a;function l(a){return function(l){return function(a){if(r)throw new TypeError("Generator is already executing.");for(;o;)try{if(r=1,t&&(i=2&a[0]?t.return:a[0]?t.throw||((i=t.return)&&i.call(t),0):t.next)&&!(i=i.call(t,a[1])).done)return i;(t=0,i)&&(a=[2&a[0],i.value]);switch(a[0]){case 0:case 1:i=a;break;case 4:o.label++;return{value:a[1],done:!1};case 5:o.label++;t=a[1];a=[0];continue;case 7:a=o.ops.pop();o.trys.pop();continue;default:if(!(i=o.trys,i=i.length>0&&i[i.length-1])&&(6===a[0]||2===a[0])){o=0;continue}if(3===a[0]&&(!i||a[1]>i[0]&&a[1]<i[3])){o.label=a[1];break}if(6===a[0]&&o.label<i[1]){o.label=i[1];i=a;break}if(i&&o.label<i[2]){o.label=i[2];o.ops.push(a);break}i[2]&&o.ops.pop();o.trys.pop();continue}a=n.call(e,o)}catch(e){a=[6,e];t=0}finally{r=i=0}if(5&a[0])throw a[1]
;return{value:a[0]?a[1]:void 0,done:!0}}([a,l])}}};function V(){V=R((function(e,n){var r,t,i,a,o=arguments;return D(this,(function(l){switch(l.label){case 0:r=o.length>2&&void 0!==o[2]?o[2]:[];(t=i=[]).push.apply(t,U(r));return[4,T.Z.createChannel({guildId:e.id,type:P.d4z.GUILD_STAGE_VOICE,name:n.substring(0,100),permissionOverwrites:i})];case 1:if(null==(a=l.sent())||201!==a.status)throw new Error("Can't create channel for event");return[2,(0,Z.q_)(a.body)]}}))}));return V.apply(this,arguments)}function B(e,n){var r=e.guild_id,t=e.channel_id,i=f.Z.getGuild(r);if(null==i)return Promise.resolve(null);var a=d.Z.getChannel(t);return null==a?function(e,n){return V.apply(this,arguments)}(i,e.name,n):Promise.resolve(a)}function X(e,n){return H.apply(this,arguments)}function H(){return(H=R((function(e,n){var r;return D(this,(function(t){switch(t.label){case 0:return e.entity_type===w.WX.STAGE_INSTANCE?[3,1]:[3,3];case 1:return[4,B(e,n)];case 2:r=t.sent()
;g()(null!=r,"could not find or create channel");return[3,4];case 3:return[3,4];case 4:return[2]}}))}))).apply(this,arguments)}function W(e){return z.apply(this,arguments)}function z(){z=R((function(e){var n,r,t,i,a,o,l=arguments;return D(this,(function(s){switch(s.label){case 0:n=l.length>1&&void 0!==l[1]&&l[1];r=e.channel_id,t=e.entity_type,i=e.name,a=e.id,o=e.guild_id;switch(t){case w.WX.STAGE_INSTANCE:return[3,1];case w.WX.VOICE:return[3,3];case w.WX.EXTERNAL:return[3,5]}return[3,7];case 1:g()(null!=r,"channel_id is required");return[4,(0,O.me)(r,i,w.j8.GUILD_ONLY,n,a)];case 2:case 4:case 6:s.sent();return[3,8];case 3:g()(null!=r,"channel_id is required");return[4,L.Z.startEvent(a,o)];case 5:return[4,L.Z.startEvent(a,o)];case 7:return[3,8];case 8:return[2]}}))}));return z.apply(this,arguments)}function Y(e,n){(null==n||n>e.length)&&(n=e.length);for(var r=0,t=new Array(n);r<n;r++)t[r]=e[r];return t}function J(e,n,r,t,i,a,o){try{var l=e[a](o),s=l.value}catch(e){r(e);return}
l.done?n(s):Promise.resolve(s).then(t,i)}function K(e){return function(){var n=this,r=arguments;return new Promise((function(t,i){var a=e.apply(n,r);function o(e){J(a,t,i,o,l,"next",e)}function l(e){J(a,t,i,o,l,"throw",e)}o(void 0)}))}}function q(e,n){return function(e){if(Array.isArray(e))return e}(e)||function(e,n){var r=null==e?null:"undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null!=r){var t,i,a=[],o=!0,l=!1;try{for(r=r.call(e);!(o=(t=r.next()).done);o=!0){a.push(t.value);if(n&&a.length===n)break}}catch(e){l=!0;i=e}finally{try{o||null==r.return||r.return()}finally{if(l)throw i}}return a}}(e,n)||function(e,n){if(!e)return;if("string"==typeof e)return Y(e,n);var r=Object.prototype.toString.call(e).slice(8,-1);"Object"===r&&e.constructor&&(r=e.constructor.name);if("Map"===r||"Set"===r)return Array.from(r);if("Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r))return Y(e,n)}(e,n)||function(){
throw new TypeError("Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}var F=function(e,n){var r,t,i,a,o={label:0,sent:function(){if(1&i[0])throw i[1];return i[1]},trys:[],ops:[]};return a={next:l(0),throw:l(1),return:l(2)},"function"==typeof Symbol&&(a[Symbol.iterator]=function(){return this}),a;function l(a){return function(l){return function(a){if(r)throw new TypeError("Generator is already executing.");for(;o;)try{if(r=1,t&&(i=2&a[0]?t.return:a[0]?t.throw||((i=t.return)&&i.call(t),0):t.next)&&!(i=i.call(t,a[1])).done)return i;(t=0,i)&&(a=[2&a[0],i.value]);switch(a[0]){case 0:case 1:i=a;break;case 4:o.label++;return{value:a[1],done:!1};case 5:o.label++;t=a[1];a=[0];continue;case 7:a=o.ops.pop();o.trys.pop();continue;default:if(!(i=o.trys,i=i.length>0&&i[i.length-1])&&(6===a[0]||2===a[0])){o=0;continue}if(3===a[0]&&(!i||a[1]>i[0]&&a[1]<i[3])){o.label=a[1];break}if(6===a[0]&&o.label<i[1]){
o.label=i[1];i=a;break}if(i&&o.label<i[2]){o.label=i[2];o.ops.push(a);break}i[2]&&o.ops.pop();o.trys.pop();continue}a=n.call(e,o)}catch(e){a=[6,e];t=0}finally{r=i=0}if(5&a[0])throw a[1];return{value:a[0]?a[1]:void 0,done:!0}}([a,l])}}},$={onSuccess:function(){},permissionOverwrites:[]};var Q=r(275352),ee=r(204292),ne=r(959797),re=r(351391),te=r.n(re);function ie(e,n){(null==n||n>e.length)&&(n=e.length);for(var r=0,t=new Array(n);r<n;r++)t[r]=e[r];return t}function ae(e,n,r,t,i,a,o){try{var l=e[a](o),s=l.value}catch(e){r(e);return}l.done?n(s):Promise.resolve(s).then(t,i)}function oe(e,n){return function(e){if(Array.isArray(e))return e}(e)||function(e,n){var r=null==e?null:"undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null!=r){var t,i,a=[],o=!0,l=!1;try{for(r=r.call(e);!(o=(t=r.next()).done);o=!0){a.push(t.value);if(n&&a.length===n)break}}catch(e){l=!0;i=e}finally{try{o||null==r.return||r.return()}finally{if(l)throw i}}return a}}(e,n)||function(e,n){if(!e)return
;if("string"==typeof e)return ie(e,n);var r=Object.prototype.toString.call(e).slice(8,-1);"Object"===r&&e.constructor&&(r=e.constructor.name);if("Map"===r||"Set"===r)return Array.from(r);if("Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r))return ie(e,n)}(e,n)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}var le=function(e,n){var r,t,i,a,o={label:0,sent:function(){if(1&i[0])throw i[1];return i[1]},trys:[],ops:[]};return a={next:l(0),throw:l(1),return:l(2)},"function"==typeof Symbol&&(a[Symbol.iterator]=function(){return this}),a;function l(a){return function(l){return function(a){if(r)throw new TypeError("Generator is already executing.");for(;o;)try{if(r=1,t&&(i=2&a[0]?t.return:a[0]?t.throw||((i=t.return)&&i.call(t),0):t.next)&&!(i=i.call(t,a[1])).done)return i;(t=0,i)&&(a=[2&a[0],i.value]);switch(a[0]){case 0:case 1:i=a;break;case 4:
o.label++;return{value:a[1],done:!1};case 5:o.label++;t=a[1];a=[0];continue;case 7:a=o.ops.pop();o.trys.pop();continue;default:if(!(i=o.trys,i=i.length>0&&i[i.length-1])&&(6===a[0]||2===a[0])){o=0;continue}if(3===a[0]&&(!i||a[1]>i[0]&&a[1]<i[3])){o.label=a[1];break}if(6===a[0]&&o.label<i[1]){o.label=i[1];i=a;break}if(i&&o.label<i[2]){o.label=i[2];o.ops.push(a);break}i[2]&&o.ops.pop();o.trys.pop();continue}a=n.call(e,o)}catch(e){a=[6,e];t=0}finally{r=i=0}if(5&a[0])throw a[1];return{value:a[0]?a[1]:void 0,done:!0}}([a,l])}}};function se(e){var n=e.transitionState,r=e.event,a=e.onSuccess,b=e.onClose,g=(0,h.Dt)(),E=r.guild_id,C=r.privacy_level,x=(0,l.e7)([d.Z],(function(){return d.Z.getChannel(r.channel_id)}),[r]),N=(0,l.e7)([f.Z],(function(){return f.Z.getGuild(E)}),[E]),A=(0,y.o)(E,x),S=(0,l.e7)([c.Z],(function(){return c.Z.isLurking(E)}),[E]),_=r.entity_type===w.WX.STAGE_INSTANCE,j=oe(i.useState(_),2),T=j[0],O=j[1],Z=oe(function(){
var e=q(i.useState(!1),2),n=e[0],r=e[1],t=q(i.useState(null),2),a=t[0],o=t[1];function l(){l=K((function(e,n){var t,i,a,l,s,c,u,d=arguments;return F(this,(function(f){switch(f.label){case 0:t=d.length>2&&void 0!==d[2]?d[2]:$,i=t.onSuccess,a=void 0===i?$.onSuccess:i,l=t.permissionOverwrites,s=void 0===l?$.permissionOverwrites:l;r(!0);f.label=1;case 1:f.trys.push([1,6,,7]);return[4,X(e,s)];case 2:f.sent();return[4,W(e,n)];case 3:f.sent();return[4,k(e,a)];case 4:f.sent();return[4,I(e,a)];case 5:f.sent();r(!1);return[3,7];case 6:c=f.sent();u=new m.Hx(c);o(u);r(!1);return[3,7];case 7:r(!1);return[2]}}))}));return l.apply(this,arguments)}return[function(e,n){return l.apply(this,arguments)},{loading:n,error:a}]}(),2),L=Z[0],P=Z[1],M=P.loading,G=P.error;if(!A)return null;var R,U,D,V=C===w.j8.PUBLIC?ne.Z.Messages.STAGE_INSTANCE_PRIVACY_TYPE_PUBLIC_LABEL:ne.Z.Messages.STAGE_INSTANCE_PRIVACY_TYPE_PRIVATE_LABEL,B=function(){null==a||a();b();(0,u.Ku)(!1)},H=(U=(R=function(){
return le(this,(function(e){switch(e.label){case 0:return[4,L(r,T,{onSuccess:B})];case 1:e.sent();return[2]}}))},function(){var e=this,n=arguments;return new Promise((function(r,t){var i=R.apply(e,n);function a(e){ae(i,r,t,a,o,"next",e)}function o(e){ae(i,r,t,a,o,"throw",e)}a(void 0)}))}),function(){return U.apply(this,arguments)});return(0,t.jsx)(v.Y0,{transitionState:n,"aria-labelledby":g,children:(0,t.jsxs)(v.hz,{className:te().content,children:[(0,t.jsx)("div",{className:te().previewCard,children:(0,t.jsx)(ee.Z,{guild:N,channel:x,userCount:1,name:r.name,description:null!==(D=r.description)&&void 0!==D?D:void 0,startTime:r.scheduled_start_time,imageSource:(0,Q.Z)(r),isActive:!1,isUserLurking:S,isEnded:!1,speakers:[],speakerCount:0,rsvped:!0})}),(0,t.jsx)(s.xv,{color:"header-secondary",className:te().privacyLevel,variant:"text-sm/normal",children:ne.Z.Messages.START_EVENT_CONFIRMATION.format({privacyLevel:V,privacyLevelHook:function(e,n){return C!==w.j8.PUBLIC?null:(0,t.jsxs)("div",{
className:te().privacyLevel,children:[(0,t.jsx)(p.Z,{width:16,height:16,className:te().publicIcon}),(0,t.jsx)(s.xv,{variant:"text-sm/normal",children:e})]},n)}})}),(0,t.jsx)(s.X6,{variant:"heading-xl/semibold",className:te().header,children:r.name}),_&&(0,t.jsx)(s.XZ,{className:te().verticalSpacing,type:s.XZ.Types.INVERTED,value:T,onChange:function(e){var n=e.currentTarget;return O(n.checked)},children:(0,t.jsx)(s.xv,{variant:"text-sm/normal",children:ne.Z.Messages.GUILD_NOTIFY_MEMBERS_DESKTOP})}),(0,t.jsxs)("div",{className:o()(te().inline,te().buttons,te().verticalSpacing),children:[(0,t.jsx)(s.zx,{color:s.zx.Colors.PRIMARY,onClick:function(){b()},className:o()(te().button,te().spacing),children:ne.Z.Messages.STAGE_BLOCKED_USERS_CANCEL}),(0,t.jsx)(s.zx,{color:s.zx.Colors.GREEN,onClick:H,submitting:M,className:te().button,children:ne.Z.Messages.START_EVENT})]}),null!=G&&null!=G.getAnyErrorMessage()?(0,t.jsx)(s.xv,{color:"text-danger",variant:"text-sm/normal",
className:te().errorMessage,children:G.getAnyErrorMessage()}):null]})})}}}]);
//# sourceMappingURL=e13b63d86fb6fffad681.js.map