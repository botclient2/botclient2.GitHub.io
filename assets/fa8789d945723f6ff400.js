"use strict";(this.webpackChunkdiscord_app=this.webpackChunkdiscord_app||[]).push([[41446],{209354:(e,t,r)=>{Object.defineProperty(t,"__esModule",{value:!0});t.default=v;!function(e,t){if(!t&&e&&e.__esModule)return e;if(null===e||"object"!=typeof e&&"function"!=typeof e)return{default:e};var r=c(t);if(r&&r.has(e))return r.get(e);var n={},a=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var o in e)if("default"!==o&&Object.prototype.hasOwnProperty.call(e,o)){var i=a?Object.getOwnPropertyDescriptor(e,o):null;i&&(i.get||i.set)?Object.defineProperty(n,o,i):n[o]=e[o]}n.default=e;r&&r.set(e,n)}(r(667294));var n,a=s(r(229108)),o=s(r(805918)),i=s(r(252566)),u=s(r(89320)),l=r(518180),d=r(687549),f=s(r(803121));function s(e){return e&&e.__esModule?e:{default:e}}function c(e){if("function"!=typeof WeakMap)return null;var t=new WeakMap,r=new WeakMap;return(c=function(e){return e?r:t})(e)}function p(e,t,r,a){n||(n="function"==typeof Symbol&&Symbol.for&&Symbol.for("react.element")||60103)
;var o=e&&e.defaultProps,i=arguments.length-3;if(t||0===i||(t={children:void 0}),1===i)t.children=a;else if(i>1){for(var u=new Array(i),l=0;l<i;l++)u[l]=arguments[l+3];t.children=u}if(t&&o)for(var d in o)void 0===t[d]&&(t[d]=o[d]);else t||(t=o||{});return{$$typeof:n,type:e,key:void 0===r?null:""+r,ref:null,props:t,_owner:null}}var y=p(a.default,{showInPopoutWindow:!0});function v(e){var t=e.windowKey,r=e.channel,n=(0,l.useIsTextInVoiceEnabled)(r.guild_id);return p(u.default,{withTitleBar:!0,windowKey:t,title:r.name,channelId:r.id},void 0,p(i.default.Provider,{value:r.guild_id},void 0,n&&p(o.default,{channel:r,draftType:d.DraftType.ChannelMessage}),p(f.default,{channel:r}),y))}v.displayName="PopoutWindowChannelCall"},302460:(e,t,r)=>{Object.defineProperty(t,"__esModule",{value:!0});t.default=s;!function(e,t){if(!t&&e&&e.__esModule)return e;if(null===e||"object"!=typeof e&&"function"!=typeof e)return{default:e};var r=l(t);if(r&&r.has(e))return r.get(e)
;var n={},a=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var o in e)if("default"!==o&&Object.prototype.hasOwnProperty.call(e,o)){var i=a?Object.getOwnPropertyDescriptor(e,o):null;i&&(i.get||i.set)?Object.defineProperty(n,o,i):n[o]=e[o]}n.default=e;r&&r.set(e,n)}(r(667294));var n,a=u(r(89320)),o=u(r(261236)),i=u(r(247001));function u(e){return e&&e.__esModule?e:{default:e}}function l(e){if("function"!=typeof WeakMap)return null;var t=new WeakMap,r=new WeakMap;return(l=function(e){return e?r:t})(e)}function d(e,t,r,a){n||(n="function"==typeof Symbol&&Symbol.for&&Symbol.for("react.element")||60103);var o=e&&e.defaultProps,i=arguments.length-3;if(t||0===i||(t={children:void 0}),1===i)t.children=a;else if(i>1){for(var u=new Array(i),l=0;l<i;l++)u[l]=arguments[l+3];t.children=u}if(t&&o)for(var d in o)void 0===t[d]&&(t[d]=o[d]);else t||(t=o||{});return{$$typeof:n,type:e,key:void 0===r?null:""+r,ref:null,props:t,_owner:null}}var f=d(o.default,{});function s(e){var t=e.windowKey
;return d(a.default,{withTitleBar:!0,windowKey:t,title:i.default.Messages.RTC_DEBUG_POPOUT_WINDOW_TITLE},void 0,f)}s.displayName="PopoutWindowRTCDebug"},261236:(e,t,r)=>{Object.defineProperty(t,"__esModule",{value:!0});t.default=U;var n,a=M(r(667294)),o=E(r(496486)),i=r(536211),u=M(r(361983)),l=E(r(898361)),d=r(826859),f=E(r(235879)),s=E(r(644263)),c=E(r(876874)),p=E(r(893160)),y=M(r(99462)),v=E(r(871778)),m=E(r(728429)),b=E(r(530250)),g=r(772575),h=E(r(628551)),S=E(r(555949)),O=E(r(438266)),P=E(r(914425)),_=E(r(516999)),D=E(r(70581)),R=r(770348),w=r(376293),C=E(r(247001)),T=E(r(175935));function E(e){return e&&e.__esModule?e:{default:e}}function j(e){if("function"!=typeof WeakMap)return null;var t=new WeakMap,r=new WeakMap;return(j=function(e){return e?r:t})(e)}function M(e,t){if(!t&&e&&e.__esModule)return e;if(null===e||"object"!=typeof e&&"function"!=typeof e)return{default:e};var r=j(t);if(r&&r.has(e))return r.get(e);var n={},a=Object.defineProperty&&Object.getOwnPropertyDescriptor
;for(var o in e)if("default"!==o&&Object.prototype.hasOwnProperty.call(e,o)){var i=a?Object.getOwnPropertyDescriptor(e,o):null;i&&(i.get||i.set)?Object.defineProperty(n,o,i):n[o]=e[o]}n.default=e;r&&r.set(e,n);return n}function k(e){return function(e){if(Array.isArray(e))return N(e)}(e)||function(e){if("undefined"!=typeof Symbol&&null!=e[Symbol.iterator]||null!=e["@@iterator"])return Array.from(e)}(e)||function(e,t){if(!e)return;if("string"==typeof e)return N(e,t);var r=Object.prototype.toString.call(e).slice(8,-1);"Object"===r&&e.constructor&&(r=e.constructor.name);if("Map"===r||"Set"===r)return Array.from(e);if("Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r))return N(e,t)}(e)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function N(e,t){(null==t||t>e.length)&&(t=e.length);for(var r=0,n=new Array(t);r<t;r++)n[r]=e[r];return n}
function I(e,t,r,a){n||(n="function"==typeof Symbol&&Symbol.for&&Symbol.for("react.element")||60103);var o=e&&e.defaultProps,i=arguments.length-3;if(t||0===i||(t={children:void 0}),1===i)t.children=a;else if(i>1){for(var u=new Array(i),l=0;l<i;l++)u[l]=arguments[l+3];t.children=u}if(t&&o)for(var d in o)void 0===t[d]&&(t[d]=o[d]);else t||(t=o||{});return{$$typeof:n,type:e,key:void 0===r?null:""+r,ref:null,props:t,_owner:null}}var A=function(e,t,r){return I(b.default,{align:b.default.Align.CENTER},void 0,I(b.default.Child,{},void 0,I(b.default,{align:b.default.Align.CENTER},void 0,I(h.default,{size:h.default.Sizes.SIZE_24,src:e.getAvatarURL(r,24),"aria-label":e.username,className:T.default.avatar}),I("span",{className:T.default.username},void 0,null!=t?t:e.toString()))))};A.displayName="UserItem";var F=function(e){return I(b.default,{align:b.default.Align.CENTER},void 0,I(b.default.Child,{},void 0,I(b.default,{align:b.default.Align.CENTER},void 0,I("span",{className:T.default.username
},void 0,e))))};F.displayName="UnknownUserItem";function B(e,t,r,n,a){var i=[];if(null==t)return i;var l=t.transport,f=t.rtp,s=f.inbound,p=f.outbound,v=t.camera;i.push({section:d.SectionTypes.HEADER,label:C.default.Messages.RTC_DEBUG_CONTEXT.format({context:e})});null!=l&&i.push({section:(0,y.keySection)(e,R.RTCDebugSections.TRANSPORT,r),label:C.default.Messages.RTC_DEBUG_TRANSPORT,element:D.default,elementProps:{context:e,index:r}});null!=p&&i.push({section:(0,y.keySection)(e,R.RTCDebugSections.OUTBOUND,r),label:C.default.Messages.RTC_DEBUG_RTP_OUTBOUND,element:P.default,elementProps:{context:e,index:r}});null!=v&&i.push({section:(0,y.keySection)(e,R.RTCDebugSections.CAMERA,r),label:C.default.Messages.RTC_DEBUG_CAMERA,element:S.default,elementProps:{context:e,index:r,camera:v}});if(null!=s&&!o.default.isEmpty(s)){i.push({section:d.SectionTypes.HEADER,label:C.default.Messages.RTC_DEBUG_RTP_INBOUND});Object.keys(s).forEach((function(t){
var o=m.default.getUser(t),l=c.default.getNick(a,t),d=(0,y.keySection)(e,t,r);i.push({section:d,label:null!=o?A(o,l,a):F(null!=l?l:t),ariaLabel:null!=o?o.tag:t,onClick:function(){u.setSection(d)},element:O.default,elementProps:{context:e,index:r,videoStreams:n}})}))}return i}function U(){var e,t=(0,i.useStateFromStores)([y.default],(function(){return{defaultStats:y.default.getAllStats(w.MediaEngineContextTypes.DEFAULT),streamStats:y.default.getAllStats(w.MediaEngineContextTypes.STREAM)}}),[],i.statesWillNeverBeEqual),r=t.defaultStats,n=t.streamStats,o=(0,i.useStateFromStores)([p.default,s.default],(function(){return s.default.getChannel(p.default.getChannelId())})),c=null===(e=r.concat(n).find((function(e){return null!=e.screenshare})))||void 0===e?void 0:e.screenshare,m=(0,i.useStateFromStores)([v.default],(function(){return v.default.theme})),b=(0,i.useStateFromStores)([f.default],(function(){return f.default.darkSidebar?R.ThemeTypes.DARK:void 0})),h=(0,
i.useStateFromStores)([y.default],(function(){return y.default.getSection()})),S=function(e,t,r,n,a){var o=e.flatMap((function(e,t){return B(w.MediaEngineContextTypes.DEFAULT,e,t,r,null==a?void 0:a.getGuildId())})),i=t.flatMap((function(e,t){return B(w.MediaEngineContextTypes.STREAM,e,t,r,null==a?void 0:a.getGuildId())})),u=[],l={section:d.SectionTypes.DIVIDER};if(null!=n){u.push(l);u.push({section:R.RTCDebugSections.SCREENSHARE,label:C.default.Messages.RTC_DEBUG_SCREENSHARE,element:_.default,elementProps:{screenshare:n}})}i.length>0&&i.unshift(l);var f=null!=a?[{section:d.SectionTypes.CUSTOM,label:"Channel Name",element:function(){return I(g.Heading,{className:T.default.channelName,variant:"heading-lg/medium",level:3},void 0,a.name)}}]:[];return[].concat(f,k(o),k(i),u)}(r,n,(0,i.useStateFromStores)([y.default],(function(){return y.default.getVideoStreams()})),c,o);a.useEffect((function(){return function(){u.close()}}),[]);return I(l.default,{theme:m,sidebarTheme:b,section:h,
onSetSection:u.setSection,sections:S})}U.displayName="RTCDebug"},555949:(e,t,r)=>{Object.defineProperty(t,"__esModule",{value:!0});t.default=y;!function(e,t){if(!t&&e&&e.__esModule)return e;if(null===e||"object"!=typeof e&&"function"!=typeof e)return{default:e};var r=c(t);if(r&&r.has(e))return r.get(e);var n={},a=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var o in e)if("default"!==o&&Object.prototype.hasOwnProperty.call(e,o)){var i=a?Object.getOwnPropertyDescriptor(e,o):null;i&&(i.get||i.set)?Object.defineProperty(n,o,i):n[o]=e[o]}n.default=e;r&&r.set(e,n)}(r(667294));var n,a=s(r(496486)),o=s(r(80828)),i=s(r(956303)),u=r(662197),l=r(187954),d=r(450176),f=s(r(247001));function s(e){return e&&e.__esModule?e:{default:e}}function c(e){if("function"!=typeof WeakMap)return null;var t=new WeakMap,r=new WeakMap;return(c=function(e){return e?r:t})(e)}function p(e,t,r,a){n||(n="function"==typeof Symbol&&Symbol.for&&Symbol.for("react.element")||60103)
;var o=e&&e.defaultProps,i=arguments.length-3;if(t||0===i||(t={children:void 0}),1===i)t.children=a;else if(i>1){for(var u=new Array(i),l=0;l<i;l++)u[l]=arguments[l+3];t.children=u}if(t&&o)for(var d in o)void 0===t[d]&&(t[d]=o[d]);else t||(t=o||{});return{$$typeof:n,type:e,key:void 0===r?null:""+r,ref:null,props:t,_owner:null}}function y(e){var t=e.camera;if(null==t)return p(o.default,{type:o.default.Type.SPINNING_CIRCLE});var r=a.default.map(t,(function(e,t){if(!d.hidden[t]&&void 0!==e)return p(d.Item,{label:t,value:e},t)}));return p(i.default,{tag:u.Tags.H2,title:f.default.Messages.RTC_DEBUG_CAMERA},void 0,(0,l.renderTwoColumns)(r))}y.displayName="RTCDebugCamera"},187954:(e,t,r)=>{Object.defineProperty(t,"__esModule",{value:!0});t.renderStreams=function(e,t,r,n){return e.map((function(e){for(var i,c=[],p=function(e,t){var r="undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(r)return(r=r.call(e)).next.bind(r);if(Array.isArray(e)||(r=function(e,t){if(!e)return
;if("string"==typeof e)return y(e,t);var r=Object.prototype.toString.call(e).slice(8,-1);"Object"===r&&e.constructor&&(r=e.constructor.name);if("Map"===r||"Set"===r)return Array.from(e);if("Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r))return y(e,t)}(e))||t&&e&&"number"==typeof e.length){r&&(e=r);var n=0;return function(){return n>=e.length?{done:!0}:{done:!1,value:e[n++]}}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}(function(e){return Object.keys(e).sort((function(e,t){var r=b[e],n=b[t];return r!==n?void 0===r?1:void 0===n?-1:r-n:d.graphs[e]!==d.graphs[t]?d.graphs[e]?1:-1:e>t?1:-1}))}(e));!(i=p()).done;){var g=i.value,h=e[g];d.hidden[g]||void 0===h||c.push(v(d.Item,{section:r,label:g,value:h},g))}return v(l.default,{className:s.default.marginBottom40,title:e.type},e.type+" + "+e.ssrc,"video"===e.type&&null!=t&&null!=r&&null!=n&&function(e,t,r,n){
var i=n.get(t,r,e.ssrc);return null!=i?v("div",{className:(0,a.default)(f.default.videoWrapper,s.default.marginBottom40)},void 0,v(u.default,{streamId:i,videoComponent:o.default.getMediaEngine().Video,paused:!1})):null}(e,t,r,n),m(c))}))};t.renderTwoColumns=m;!function(e,t){if(!t&&e&&e.__esModule)return e;if(null===e||"object"!=typeof e&&"function"!=typeof e)return{default:e};var r=p(t);if(r&&r.has(e))return r.get(e);var n={},a=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var o in e)if("default"!==o&&Object.prototype.hasOwnProperty.call(e,o)){var i=a?Object.getOwnPropertyDescriptor(e,o):null;i&&(i.get||i.set)?Object.defineProperty(n,o,i):n[o]=e[o]}n.default=e;r&&r.set(e,n)}(r(667294));var n,a=c(r(294184)),o=c(r(635014)),i=c(r(530250)),u=c(r(971146)),l=c(r(956303)),d=r(450176),f=c(r(175935)),s=c(r(380203));function c(e){return e&&e.__esModule?e:{default:e}}function p(e){if("function"!=typeof WeakMap)return null;var t=new WeakMap,r=new WeakMap;return(p=function(e){
return e?r:t})(e)}function y(e,t){(null==t||t>e.length)&&(t=e.length);for(var r=0,n=new Array(t);r<t;r++)n[r]=e[r];return n}function v(e,t,r,a){n||(n="function"==typeof Symbol&&Symbol.for&&Symbol.for("react.element")||60103);var o=e&&e.defaultProps,i=arguments.length-3;if(t||0===i||(t={children:void 0}),1===i)t.children=a;else if(i>1){for(var u=new Array(i),l=0;l<i;l++)u[l]=arguments[l+3];t.children=u}if(t&&o)for(var d in o)void 0===t[d]&&(t[d]=o[d]);else t||(t=o||{});return{$$typeof:n,type:e,key:void 0===r?null:""+r,ref:null,props:t,_owner:null}}function m(e){var t=[],r=0;e.length%2!=0&&e.push(v(i.default,{basis:"50%",grow:0},r++));for(;e.length>0;)t.push(v(i.default,{basis:"50%",grow:0},r++,e.splice(0,2)));return t}var b={ssrc:1,codec:2}},438266:(e,t,r)=>{Object.defineProperty(t,"__esModule",{value:!0});t.default=void 0;var n,a=b(r(667294)),o=v(r(536211)),i=v(r(876874)),u=v(r(893160)),l=b(r(99462)),d=v(r(728429)),f=v(r(80828)),s=v(r(956303)),c=r(662197),p=r(187954),y=v(r(247001))
;function v(e){return e&&e.__esModule?e:{default:e}}function m(e){if("function"!=typeof WeakMap)return null;var t=new WeakMap,r=new WeakMap;return(m=function(e){return e?r:t})(e)}function b(e,t){if(!t&&e&&e.__esModule)return e;if(null===e||"object"!=typeof e&&"function"!=typeof e)return{default:e};var r=m(t);if(r&&r.has(e))return r.get(e);var n={},a=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var o in e)if("default"!==o&&Object.prototype.hasOwnProperty.call(e,o)){var i=a?Object.getOwnPropertyDescriptor(e,o):null;i&&(i.get||i.set)?Object.defineProperty(n,o,i):n[o]=e[o]}n.default=e;r&&r.set(e,n);return n}function g(e,t,r,a){n||(n="function"==typeof Symbol&&Symbol.for&&Symbol.for("react.element")||60103);var o=e&&e.defaultProps,i=arguments.length-3;if(t||0===i||(t={children:void 0}),1===i)t.children=a;else if(i>1){for(var u=new Array(i),l=0;l<i;l++)u[l]=arguments[l+3];t.children=u}if(t&&o)for(var d in o)void 0===t[d]&&(t[d]=o[d]);else t||(t=o||{});return{$$typeof:n,type:e,
key:void 0===r?null:""+r,ref:null,props:t,_owner:null}}function h(e,t){h=Object.setPrototypeOf||function(e,t){e.__proto__=t;return e};return h(e,t)}var S=function(e){!function(e,t){e.prototype=Object.create(t.prototype);e.prototype.constructor=e;h(e,t)}(t,e);function t(){return e.apply(this,arguments)||this}t.prototype.render=function(){var e=this.props,t=e.streams,r=e.userId,n=e.mediaEngineConnectionId,a=e.videoStreams;if(null==r||null==t||0===t.length)return g(f.default,{type:f.default.Type.SPINNING_CIRCLE});var o=u.default.getGuildId(),l=d.default.getUser(r),v=i.default.getNick(o,r),m=null==l?y.default.Messages.RTC_DEBUG_RTP_INBOUND:y.default.Messages.RTC_DEBUG_RTP_INBOUND+" — "+(null!=v?v:l.toString());return g(s.default,{tag:c.Tags.H2,title:m},void 0,(0,p.renderStreams)(t,n,r,a))};return t}(a.PureComponent);S.displayName="RTCDebugInbound";var O=o.default.connectStores([l.default],(function(e){var t=e.context,r=e.index,n=e.videoStreams,a=l.default.getAllStats(t)[r],o=(0,
l.parseSection)(l.default.getSection()).section;if(null==o)throw new Error("Unrecognized section format");var i=null;if(null!=a&&null!=a.rtp.inbound){var u;i=null!==(u=a.rtp.inbound[o])&&void 0!==u?u:[]}return{mediaEngineConnectionId:null==a?void 0:a.mediaEngineConnectionId,userId:o,streams:i,videoStreams:n}}))(S);t.default=O},222797:(e,t,r)=>{Object.defineProperty(t,"__esModule",{value:!0});t.default=void 0;var n,a=y(r(667294)),o=c(r(294184)),i=c(r(530250)),u=c(r(588417)),l=y(r(37241)),d=c(r(80895)),f=r(770348),s=c(r(175935));function c(e){return e&&e.__esModule?e:{default:e}}function p(e){if("function"!=typeof WeakMap)return null;var t=new WeakMap,r=new WeakMap;return(p=function(e){return e?r:t})(e)}function y(e,t){if(!t&&e&&e.__esModule)return e;if(null===e||"object"!=typeof e&&"function"!=typeof e)return{default:e};var r=p(t);if(r&&r.has(e))return r.get(e);var n={},a=Object.defineProperty&&Object.getOwnPropertyDescriptor
;for(var o in e)if("default"!==o&&Object.prototype.hasOwnProperty.call(e,o)){var i=a?Object.getOwnPropertyDescriptor(e,o):null;i&&(i.get||i.set)?Object.defineProperty(n,o,i):n[o]=e[o]}n.default=e;r&&r.set(e,n);return n}function v(e,t,r,a){n||(n="function"==typeof Symbol&&Symbol.for&&Symbol.for("react.element")||60103);var o=e&&e.defaultProps,i=arguments.length-3;if(t||0===i||(t={children:void 0}),1===i)t.children=a;else if(i>1){for(var u=new Array(i),l=0;l<i;l++)u[l]=arguments[l+3];t.children=u}if(t&&o)for(var d in o)void 0===t[d]&&(t[d]=o[d]);else t||(t=o||{});return{$$typeof:n,type:e,key:void 0===r?null:""+r,ref:null,props:t,_owner:null}}function m(e,t){m=Object.setPrototypeOf||function(e,t){e.__proto__=t;return e};return m(e,t)}var b=["firCount","nackCount"],g=function(e){!function(e,t){e.prototype=Object.create(t.prototype);e.prototype.constructor=e;m(e,t)}(t,e);function t(){return e.apply(this,arguments)||this}var r=t.prototype;r.renderValueIcon=function(){var e=this.props.label
;return b.includes(e)?v(d.default,{color:f.Colors.STATUS_YELLOW,className:s.default.valueIcon}):null};r.render=function(){var e=this.props,t=e.children,r=e.className,n=e.valueRendered,a=e.section,d=e.label,f=e.renderGraph;return v(i.default,{className:(0,o.default)(s.default.item,r),direction:i.default.Direction.VERTICAL,basis:"50%"},void 0,v(i.default,{align:i.default.Align.START},void 0,v(i.default.Child,{},void 0,v("h3",{className:s.default.title},void 0,t)),Array.isArray(n)?v(i.default.Child,{grow:1},void 0,n):v(i.default.Child,{grow:0,shrink:0},void 0,this.renderValueIcon(),v("span",{className:s.default.itemValue},void 0,n))),null!==f&&v(i.default.Child,{className:s.default.graph},null!=a?a+"-"+d:d,v(l.default,{type:l.Types.DESCRIPTION},void 0,f)),v(u.default,{className:s.default.divider}))};return t}(a.PureComponent);t.default=g;g.displayName="RTCDebugItem"},450176:(e,t,r)=>{Object.defineProperty(t,"__esModule",{value:!0});t.Item=R
;t.valueRenderers=t.labelRenderers=t.hidden=t.graphs=void 0;var n,a=function(e,t){if(!t&&e&&e.__esModule)return e;if(null===e||"object"!=typeof e&&"function"!=typeof e)return{default:e};var r=d(t);if(r&&r.has(e))return r.get(e);var n={},a=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var o in e)if("default"!==o&&Object.prototype.hasOwnProperty.call(e,o)){var i=a?Object.getOwnPropertyDescriptor(e,o):null;i&&(i.get||i.set)?Object.defineProperty(n,o,i):n[o]=e[o]}n.default=e;r&&r.set(e,n);return n}(r(667294)),o=l(r(206982)),i=l(r(215759)),u=l(r(222797));function l(e){return e&&e.__esModule?e:{default:e}}function d(e){if("function"!=typeof WeakMap)return null;var t=new WeakMap,r=new WeakMap;return(d=function(e){return e?r:t})(e)}function f(e,t,r,a){n||(n="function"==typeof Symbol&&Symbol.for&&Symbol.for("react.element")||60103);var o=e&&e.defaultProps,i=arguments.length-3;if(t||0===i||(t={children:void 0}),1===i)t.children=a;else if(i>1){
for(var u=new Array(i),l=0;l<i;l++)u[l]=arguments[l+3];t.children=u}if(t&&o)for(var d in o)void 0===t[d]&&(t[d]=o[d]);else t||(t=o||{});return{$$typeof:n,type:e,key:void 0===r?null:""+r,ref:null,props:t,_owner:null}}function s(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){var r=null==e?null:"undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null==r)return;var n,a,o=[],i=!0,u=!1;try{for(r=r.call(e);!(i=(n=r.next()).done);i=!0){o.push(n.value);if(t&&o.length===t)break}}catch(e){u=!0;a=e}finally{try{i||null==r.return||r.return()}finally{if(u)throw a}}return o}(e,t)||function(e,t){if(!e)return;if("string"==typeof e)return c(e,t);var r=Object.prototype.toString.call(e).slice(8,-1);"Object"===r&&e.constructor&&(r=e.constructor.name);if("Map"===r||"Set"===r)return Array.from(e);if("Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r))return c(e,t)}(e,t)||function(){
throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function c(e,t){(null==t||t>e.length)&&(t=e.length);for(var r=0,n=new Array(t);r<t;r++)n[r]=e[r];return n}var p={accelerateRate:"Accelerate Rate",audioDetected:"Audio Detected",audioLevel:"Audio Level",availableOutgoingBitrate:"Available Outgoing Bitrate",averageDecodeTime:"Average Decode Time",averageEncodeTime:"Average Encode Time",bandwidthLimitedResolution:"Bandwidth Limited Resolution",bitrate:"Bitrate",bitrateTarget:"Bitrate (Target)",bytesReceived:"Bytes Received",bytesSent:"Bytes Sent",capturedFramesCount:"Captured Frames per Second",capturedFramesDropped:"Captured Frames Dropped",capturedFramesMean:"Captured Frames Mean (ms)",capturedFramesStdev:"Captured Frames Standard Deviation (ms)",codec:"Codec",cpuLimitedResolution:"CPU Limited Resolution",currentDelay:"Current Delay",decoderImplementationName:"Decoder",
decodingCNG:"Decoding CNG",decodingMutedOutput:"Decoding Muted Output",decodingNormal:"Decoding Normal",decodingPLC:"Decoding PLC",decodingPLCCNG:"Decoding PLC CNG",decryptionFailures:"Decryption Failures",delayEstimate:"Delay Estimate",encoderImplementationName:"Encoder",encodeUsage:"Encode Usage",expandRate:"Expand Rate",filter:"Filter",firCount:"FIR",fractionLost:"Packet Loss",frameRateDecode:"Frame Rate (Decode)",frameRateEncode:"Frame Rate (Encode)",frameRateInput:"Frame Rate (Input)",frameRateNetwork:"Frame Rate (Network)",frameRateRender:"Frame Rate (Render)",framesDecoded:"Frames Decoded",framesDropped:"Frames Dropped",framesEncoded:"Frames Encoded",framesReceived:"Frames Received",framesSent:"Frames Sent",freezeCount:"Freeze Count",hostname:"Hostname",hybridDxgiFrames:"Hybrid DXGI Frames",hybridGdiFrames:"Hybrid GDI Frames",hybridVideohookFrames:"Hybrid Videohook Frames",inboundBitrateEstimate:"Inbound Bitrate Estimate",jitter:"Jitter",jitterBuffer:"Jitter Buffer",
jitterBufferPreferred:"Jitter Buffer (Preferred)",keyFrameInterval:"Key Frame Interval",keyFramesDecoded:"Key Frames Decoded",keyFramesEncoded:"Key Frames Encoded",localAddress:"Local Address",minPlayoutDelay:"Minimum Playout Delay",nackCount:"NACK",opAccelerate:"Accelerated Frames",opCNG:"CNG Frames",opExpand:"Expand Frames",opMerge:"Merge Frames",opNormal:"Normal Frames",opPreemptiveExpand:"Preemptive Expand Frames",opSilence:"Silent Frames",outboundBitrateEstimate:"Outbound Bitrate Estimate",pacerDelay:"Pacer Delay",packetsLost:"Packets Lost",packetsReceived:"Packets Received",packetsSent:"Packets Sent",pauseCount:"Pause Count",ping:"Ping",pliCount:"PLI",preemptiveExpandRate:"Pre-emptive Expand Rate",qpSum:"QP Sum",quartzFrames:"Quartz Frames",receiverBitrateEstimate:"Receiver Bitrate Estimate (REMB)",relativePlayoutDelay:"Relative Playout Delay",relativeReceptionDelay:"Relative Reception Delay",renderDelay:"Render Delay",resolution:"Resolution",screenshareFrames:"WebRTC Frames",
secondaryDecodedRate:"Secondary Decode Rate",sinkWant:"Sink Quality Level (Remote)",sinkWantLocal:"Sink Quality Level (Local)",speechExpandRate:"Speech Expand Rate",ssrc:"SSRC",targetDelay:"Target Delay",totalFramesDuration:"Frames Duration (ms)",totalFreezesDuration:"Freezes Duration (ms)",totalPausesDuration:"Pauses Duration (ms)",videohookBackend:"Videohook Backend",videohookFrames:"Videohook Frames"};t.labelRenderers=p;function y(e){return(e/1e3).toFixed(2)+" Kbps"}function v(e){return o.default.filesize(e)}function m(e){return e}function b(e){return e+" ms"}function g(e){return e.toFixed(0)+"%"}function h(e){return e?"Yes":"No"}function S(e){return e.last+" ms"}var O={availableOutgoingBitrate:!0,bitrate:!0,bitrateTarget:!0,bytesReceived:!0,bytesSent:!0,encodeUsage:!0,frameRateDecode:!0,frameRateEncode:!0,frameRateInput:!0,frameRateNetwork:!0,frameRateRender:!0,inboundBitrateEstimate:!0,packetsLost:!0,packetsReceived:!0,packetsSent:!0,ping:!0};t.graphs=O;t.hidden={
audioJitterBuffer:!0,audioJitterDelay:!0,audioJitterTarget:!0,audioPlayoutUnderruns:!0,fractionLost:!0,framesCaptured:!0,framesRendered:!0,noiseCancellerProcessTime:!0,timestamp:!0,type:!0,videoJitterBuffer:!0,videoJitterDelay:!0,videoJitterTarget:!0,voiceActivityDetectorProcessTime:!0,sumOfSquaredFramesDurations:!0};var P={accelerateRate:g,audioDetected:h,audioLevel:function(e){return Math.max(e,0).toFixed(2)+" dB"},availableOutgoingBitrate:y,averageDecodeTime:b,averageEncodeTime:b,bandwidthLimitedResolution:h,bitrate:y,bitrateTarget:y,bytesReceived:v,bytesSent:v,codec:function(e){var t,r=e.id,n=e.name;return""+(n=null!==(t=n=""===n?"unknown":n)&&void 0!==t?t:"unknown")[0].toUpperCase()+n.slice(1)+" ("+r+")"},cpuLimitedResolution:h,currentDelay:b,decoderImplementationName:m,delayEstimate:b,encoderImplementationName:m,encodeUsage:g,expandRate:g,filter:m,fractionLost:g,inboundBitrateEstimate:y,jitter:b,jitterBuffer:b,jitterBufferPreferred:b,keyFrameInterval:b,minPlayoutDelay:b,
outboundBitrateEstimate:y,pacerDelay:b,ping:b,preemptiveExpandRate:g,receiverBitrateEstimate:y,relativePlayoutDelay:S,relativeReceptionDelay:S,renderDelay:b,resolution:function(e){return e.width+"x"+e.height},secondaryDecodedRate:g,speechExpandRate:g,targetDelay:b,videohookBackend:function(e){var t=["N/A","Direct3D 9","Direct3D 10","Direct3D 11","Direct3D 12","OpenGL","Vulkan"];return e<t.length?t[e]:"Unknown"}};t.valueRenderers=P;var _=function(e){return e},D=function(e){var t=s(a.useState([]),1)[0];t.push({value:e.value,time:Date.now()});t.length>600&&t.shift();return f(i.default,{dataPoints:t,width:e.width,height:e.height})};D.displayName="RTCDebugCachedGraph";function R(e){var t,r,n=e.label,a=e.value,o=e.section,l=null!==(t=P[n])&&void 0!==t?t:_,d=O[n]&&function(e){return Array.isArray(e)&&e.length>0&&"number"==typeof e[0]?f(i.default,{dataPoints:e,width:300,height:100}):"number"==typeof e?f(D,{value:e,width:300,height:100}):void 0}(a);return f(u.default,{label:n,
valueRendered:l(a),section:o,renderGraph:d},void 0,null!==(r=p[n])&&void 0!==r?r:n)}R.displayName="Item"},914425:(e,t,r)=>{Object.defineProperty(t,"__esModule",{value:!0});t.default=void 0;var n,a=function(e,t){if(!t&&e&&e.__esModule)return e;if(null===e||"object"!=typeof e&&"function"!=typeof e)return{default:e};var r=p(t);if(r&&r.has(e))return r.get(e);var n={},a=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var o in e)if("default"!==o&&Object.prototype.hasOwnProperty.call(e,o)){var i=a?Object.getOwnPropertyDescriptor(e,o):null;i&&(i.get||i.set)?Object.defineProperty(n,o,i):n[o]=e[o]}n.default=e;r&&r.set(e,n);return n}(r(667294)),o=c(r(536211)),i=c(r(99462)),u=c(r(80828)),l=c(r(956303)),d=r(662197),f=r(187954),s=c(r(247001));function c(e){return e&&e.__esModule?e:{default:e}}function p(e){if("function"!=typeof WeakMap)return null;var t=new WeakMap,r=new WeakMap;return(p=function(e){return e?r:t})(e)}function y(e,t,r,a){
n||(n="function"==typeof Symbol&&Symbol.for&&Symbol.for("react.element")||60103);var o=e&&e.defaultProps,i=arguments.length-3;if(t||0===i||(t={children:void 0}),1===i)t.children=a;else if(i>1){for(var u=new Array(i),l=0;l<i;l++)u[l]=arguments[l+3];t.children=u}if(t&&o)for(var d in o)void 0===t[d]&&(t[d]=o[d]);else t||(t=o||{});return{$$typeof:n,type:e,key:void 0===r?null:""+r,ref:null,props:t,_owner:null}}function v(e,t){v=Object.setPrototypeOf||function(e,t){e.__proto__=t;return e};return v(e,t)}var m=function(e){!function(e,t){e.prototype=Object.create(t.prototype);e.prototype.constructor=e;v(e,t)}(t,e);function t(){return e.apply(this,arguments)||this}t.prototype.render=function(){var e=this.props.outbound;return null==e?y(u.default,{type:u.default.Type.SPINNING_CIRCLE}):y(l.default,{tag:d.Tags.H2,title:s.default.Messages.RTC_DEBUG_RTP_OUTBOUND},void 0,(0,f.renderStreams)(e))};return t}(a.PureComponent);m.displayName="RTCDebugOutbound"
;var b=o.default.connectStores([i.default],(function(e){var t=e.context,r=e.index,n=i.default.getAllStats(t)[r];return{outbound:null!=n?n.rtp.outbound:null}}))(m);t.default=b},516999:(e,t,r)=>{Object.defineProperty(t,"__esModule",{value:!0});t.default=void 0;var n,a=function(e,t){if(!t&&e&&e.__esModule)return e;if(null===e||"object"!=typeof e&&"function"!=typeof e)return{default:e};var r=p(t);if(r&&r.has(e))return r.get(e);var n={},a=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var o in e)if("default"!==o&&Object.prototype.hasOwnProperty.call(e,o)){var i=a?Object.getOwnPropertyDescriptor(e,o):null;i&&(i.get||i.set)?Object.defineProperty(n,o,i):n[o]=e[o]}n.default=e;r&&r.set(e,n);return n}(r(667294)),o=c(r(496486)),i=c(r(80828)),u=c(r(956303)),l=r(662197),d=r(187954),f=r(450176),s=c(r(247001));function c(e){return e&&e.__esModule?e:{default:e}}function p(e){if("function"!=typeof WeakMap)return null;var t=new WeakMap,r=new WeakMap;return(p=function(e){return e?r:t})(e)}
function y(e,t,r,a){n||(n="function"==typeof Symbol&&Symbol.for&&Symbol.for("react.element")||60103);var o=e&&e.defaultProps,i=arguments.length-3;if(t||0===i||(t={children:void 0}),1===i)t.children=a;else if(i>1){for(var u=new Array(i),l=0;l<i;l++)u[l]=arguments[l+3];t.children=u}if(t&&o)for(var d in o)void 0===t[d]&&(t[d]=o[d]);else t||(t=o||{});return{$$typeof:n,type:e,key:void 0===r?null:""+r,ref:null,props:t,_owner:null}}function v(e,t){v=Object.setPrototypeOf||function(e,t){e.__proto__=t;return e};return v(e,t)}var m=function(e){!function(e,t){e.prototype=Object.create(t.prototype);e.prototype.constructor=e;v(e,t)}(t,e);function t(){return e.apply(this,arguments)||this}t.prototype.render=function(){var e=this.props.screenshare;if(null==e)return y(i.default,{type:i.default.Type.SPINNING_CIRCLE});var t=o.default.map(e,(function(e,t){if(!f.hidden[t]&&void 0!==e)return y(f.Item,{label:t,value:e},t)}));return y(u.default,{tag:l.Tags.H2,title:s.default.Messages.RTC_DEBUG_SCREENSHARE
},void 0,(0,d.renderTwoColumns)(t))};return t}(a.PureComponent);m.displayName="RTCDebugScreenshare";var b=m;t.default=b},70581:(e,t,r)=>{Object.defineProperty(t,"__esModule",{value:!0});t.default=void 0;var n,a=function(e,t){if(!t&&e&&e.__esModule)return e;if(null===e||"object"!=typeof e&&"function"!=typeof e)return{default:e};var r=w(t);if(r&&r.has(e))return r.get(e);var n={},a=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var o in e)if("default"!==o&&Object.prototype.hasOwnProperty.call(e,o)){var i=a?Object.getOwnPropertyDescriptor(e,o):null;i&&(i.get||i.set)?Object.defineProperty(n,o,i):n[o]=e[o]}n.default=e;r&&r.set(e,n);return n}(r(667294)),o=R(r(496486)),i=R(r(536211)),u=R(r(893160)),l=R(r(99462)),d=R(r(359973)),f=R(r(663303)),s=R(r(728429)),c=R(r(530250)),p=R(r(80828)),y=R(r(588417)),v=R(r(956303)),m=r(662197),b=R(r(56815)),g=r(187954),h=R(r(222797)),S=r(450176),O=r(376293),P=R(r(247001)),_=R(r(175935)),D=R(r(380203));function R(e){return e&&e.__esModule?e:{
default:e}}function w(e){if("function"!=typeof WeakMap)return null;var t=new WeakMap,r=new WeakMap;return(w=function(e){return e?r:t})(e)}function C(){C=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e};return C.apply(this,arguments)}function T(e,t,r,a){n||(n="function"==typeof Symbol&&Symbol.for&&Symbol.for("react.element")||60103);var o=e&&e.defaultProps,i=arguments.length-3;if(t||0===i||(t={children:void 0}),1===i)t.children=a;else if(i>1){for(var u=new Array(i),l=0;l<i;l++)u[l]=arguments[l+3];t.children=u}if(t&&o)for(var d in o)void 0===t[d]&&(t[d]=o[d]);else t||(t=o||{});return{$$typeof:n,type:e,key:void 0===r?null:""+r,ref:null,props:t,_owner:null}}function E(e,t){E=Object.setPrototypeOf||function(e,t){e.__proto__=t;return e};return E(e,t)}var j=T("span",{},void 0,"Bitrate:"),M=T("span",{},void 0,"Packet Loss:"),k=function(e){!function(e,t){
e.prototype=Object.create(t.prototype);e.prototype.constructor=e;E(e,t)}(t,e);function t(){return e.apply(this,arguments)||this}t.prototype.render=function(){var e=this.props,t=e.transport,r=e.mediaSessionId,n=e.hidePersonalInformation,a=e.hostname;if(null==t)return T(p.default,{type:p.default.Type.SPINNING_CIRCLE});var i=C({},t,{hostname:a}),u=o.default.map(i,(function(e,t){if("receiverReports"!==t&&(!n||"localAddress"!==t))return T(S.Item,{label:t,value:e},t)})),l=o.default.map(i.receiverReports,(function(e){var t=T(c.default,{id:"bitrate-"+e.id,justify:c.default.Justify.BETWEEN},void 0,j,T("span",{},void 0,(e.bitrate/1e3).toFixed(2)," Kbps")),r=T(c.default,{id:"lost-"+e.id,justify:c.default.Justify.BETWEEN},void 0,M,T("span",{},void 0,(100*e.fractionLost/256).toFixed(0),"%")),n=s.default.getUser(e.id),a=null!=n?n.username:e.id;return T(h.default,{label:e.id,valueRendered:[t,r]},e.id,a)}));return T(v.default,{tag:m.Tags.H2,
title:P.default.Messages.RTC_DEBUG_TRANSPORT+(null!=r?" - "+r:""),className:_.default.allowSelection},void 0,(0,g.renderTwoColumns)(u),0===l.length?null:T(y.default,{className:D.default.marginBottom20}),(0,g.renderTwoColumns)(l))};return t}(a.PureComponent);k.displayName="RTCDebugTransport";var N=i.default.connectStores([l.default,u.default,f.default,d.default],(function(e){var t=e.context,r=e.index,n=l.default.getAllStats(t)[r],a=t===O.MediaEngineContextTypes.STREAM?d.default.getHostname():u.default.getHostname();return{hidePersonalInformation:f.default.hidePersonalInformation,transport:null!=n?n.transport:null,mediaSessionId:u.default.getMediaSessionId(),hostname:b.default.getShortHostname(a)}}))(k);t.default=N}}]);
//# sourceMappingURL=fa8789d945723f6ff400.js.map