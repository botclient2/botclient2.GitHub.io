"use strict";(this.webpackChunkdiscord_app=this.webpackChunkdiscord_app||[]).push([[69661],{269661:(e,t,n)=>{n.r(t);n.d(t,{default:()=>N});var r=n(785893),o=n(667294),a=n(363010),i=n(331535),l=n(992497),s=n(159500),u=n(25765),c=n(567895),d=n(356004),f=n(402124),p=n(653772),h=n(171447),m=n(272729),g=n(67416),y=n(337823),_=n(56133),v=n(418368),b=n(426466),A=n(491130),I=n(813935),O=n(461061),M=n(375650),T=n(959797),E=n(272681),x=n.n(E);function C(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r}function S(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){var n=null==e?null:"undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null!=n){var r,o,a=[],i=!0,l=!1;try{for(n=n.call(e);!(i=(r=n.next()).done);i=!0){a.push(r.value);if(t&&a.length===t)break}}catch(e){l=!0;o=e}finally{try{i||null==n.return||n.return()}finally{if(l)throw o}}return a}}(e,t)||D(e,t)||function(){
throw new TypeError("Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function R(e){return function(e){if(Array.isArray(e))return C(e)}(e)||function(e){if("undefined"!=typeof Symbol&&null!=e[Symbol.iterator]||null!=e["@@iterator"])return Array.from(e)}(e)||D(e)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function D(e,t){if(e){if("string"==typeof e)return C(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);"Object"===n&&e.constructor&&(n=e.constructor.name);return"Map"===n||"Set"===n?Array.from(n):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?C(e,t):void 0}}function N(e){var t,n=e.threadId,E=e.attachments,C=e.sendMessage,D=e.transitionState,N=e.onClose,P=(0,m.Dt)(),j=(0,a.e7)([d.Z],(function(){return d.Z.getChannel(n)}),[n]),Z=(0,
a.e7)([p.Z],(function(){return p.Z.getGuild(null==j?void 0:j.getGuildId())}),[j]),L=(0,a.e7)([d.Z],(function(){return d.Z.getChannel(null==j?void 0:j.parent_id)}),[j]),w=null===(t=E[0])||void 0===t?void 0:t.item,F=S(o.useState(null),2),U=F[0],z=F[1];o.useEffect((function(){null!=w&&(0,c.Fq)(w.file,(function(e,t){return z(e)}),M.dG)}),[w]);var G=null!=w&&null!=U?{src:U,width:A.TJ,height:A.Lp,spoiler:E[0].spoiler,alt:E[0].description}:null,k=S(o.useState(!1),2),B=k[0],X=k[1],q=o.useCallback((function(){(0,b.xI)({added:!1});C();N()}),[C,N]),J=o.useCallback((function(){if(null!=j&&null!=Z){(0,b.xI)({added:!0});!function(e){var t=e.thread,n=e.attachments,r=e.setIsUploading,o=e.guild,a=e.onClose,i=new u.Z(O.ANM.MESSAGE(t.id,t.id),"PATCH");i.on("start",(function(){r(!0)}));i.on("progress",(function(e){var l=(0,y.dg)(o.id);if(e.currentSize>l){i.cancel();r(!1);a();(0,_.G)(t,(0,v.KZ)(n))}}));i.on("error",(function(e,t){r(!1);if(t===O.evJ.EXPLICIT_CONTENT){a();l.Z.show({
title:T.Z.Messages.UPLOAD_AREA_UPLOAD_FAILED_TITLE,body:T.Z.Messages.BOT_GUILD_EXPLICIT_CONTENT.format({name:o.toString()})})}}));i.on("complete",(function(){r(!1);a();s.Z.clearAll(t.id,f.d.ChannelMessage)}));var c=h.Z.getMessages(t.id).get(t.id),d=null!=c?c.attachments:[];i.uploadFiles(n,{attachments:R(d)},"attachments")}({thread:j,attachments:E,setIsUploading:X,guild:Z,onClose:N})}}),[j,E,X,Z,N]);return null==L?null:(0,r.jsxs)(g.Y0,{transitionState:D,size:g.Cg.SMALL,className:x().modalRoot,"aria-labelledby":P,children:[(0,r.jsxs)(g.hz,{className:x().modal,children:[(0,r.jsx)(i.X6,{variant:"heading-md/semibold",className:x().header,id:P,children:T.Z.Messages.FORUM_ADD_MEDIA_TO_ORIGINAL_POST_TITLE}),(0,r.jsx)(i.xv,{variant:"text-md/normal",className:x().body,children:T.Z.Messages.FORUM_ADD_MEDIA_TO_ORIGINAL_POST_DESCRIPTION}),(0,r.jsx)("div",{className:x().forumPost,children:(0,r.jsx)(I.oL,{createStore:function(){return(0,I.NU)(L)},children:(0,r.jsx)(A.ZP,{threadId:n,goToThread:M.dG,
overrideMedia:G})})})]}),(0,r.jsxs)(g.mz,{className:x().modalFooter,children:[(0,r.jsx)(i.zx,{look:i.zx.Looks.BLANK,className:x().cancelButton,disabled:B,onClick:N,children:T.Z.Messages.CANCEL}),(0,r.jsx)(i.zx,{color:i.zx.Colors.PRIMARY,className:x().dontAddButton,disabled:B,onClick:q,children:T.Z.Messages.FORUM_ADD_MEDIA_TO_ORIGINAL_POST_DONT_ADD}),(0,r.jsx)(i.zx,{color:i.zx.Colors.BRAND,className:x().button,submitting:B,onClick:J,autoFocus:!0,children:T.Z.Messages.FORUM_ADD_MEDIA_TO_ORIGINAL_POST_ADD})]})]})}},910866:(e,t,n)=>{n.d(t,{m:()=>r});var r;!function(e){e.MP4="video/mp4"}(r||(r={}))},567895:(e,t,n)=>{n.d(t,{Zj:()=>m,Fq:()=>g,ZP:()=>_});var r=n(785893),o=n(667294),a=n(678081),i=n(212271),l=n(910866),s=n(959797);function u(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function c(e){c=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)};return c(e)}function d(e,t){
return!t||"object"!==p(t)&&"function"!=typeof t?function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e):t}function f(e,t){f=Object.setPrototypeOf||function(e,t){e.__proto__=t;return e};return f(e,t)}var p=function(e){return e&&"undefined"!=typeof Symbol&&e.constructor===Symbol?"symbol":typeof e};function h(e){var t=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){})));return!0}catch(e){return!1}}();return function(){var n,r=c(e);if(t){var o=c(this).constructor;n=Reflect.construct(r,arguments,o)}else n=r.apply(this,arguments);return d(this,n)}}function m(){return[{name:s.Z.Messages.IMAGES,extensions:["jpg","jpeg","png","gif"]}]}function g(e,t,n){!function(e,t){if(null!=e){var n=new FileReader;n.onload=function(n){var r
;"string"==typeof(null===(r=n.target)||void 0===r?void 0:r.result)&&t(n.target.result,e)};n.readAsDataURL(e)}}(e,(function(r){if(e.type===l.m.MP4)return t(r,e);var o=new Image;o.src=r;o.onload=function(){t(r,e)};o.onerror=function(){n()}}))}var y=function(e){!function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}});t&&f(e,t)}(n,e);var t=h(n);function n(){u(this,n);var e;(e=t.apply(this,arguments))._ref=o.createRef();e._isMounted=!1;e.handleFileChange=function(t){var n=e.props,r=n.onFileSizeError,o=n.maxFileSizeBytes;t.stopPropagation();t.preventDefault();if(null!=t.currentTarget.files)for(var a=0;a<t.currentTarget.files.length;a++){var i=t.currentTarget.files[a];i.size>o?null==r||r(o,i.size):g(i,e.handleFileRead,e.handleFileError)}};e.handleFileRead=function(t,n){var r=e.props.onChange;e._isMounted&&r(t,n)}
;e.handleFileError=function(){(0,i.xT)({title:s.Z.Messages.PREMIUM_ALERT_ERROR_TITLE,help:s.Z.Messages.UNABLE_TO_PROCESS_IMAGE})};return e}var l=n.prototype;l.componentDidMount=function(){this._isMounted=!0};l.activateUploadDialogue=function(){var e;null===(e=this._ref.current)||void 0===e||e.activateUploadDialogue()};l.render=function(){var e=this.props,t=e.multiple,n=e.disabled,o=e.className,i=e.tabIndex,l=e["aria-label"],s=e.filters;return(0,r.jsx)(a.Z,{ref:this._ref,onChange:this.handleFileChange,filters:null!=s?s:m(),multiple:t,disabled:n,className:o,tabIndex:i,"aria-label":l})};return n}(o.PureComponent);y.defaultProps={multiple:!0,tabIndex:-1,maxFileSizeBytes:1/0};const _=y}}]);
//# sourceMappingURL=5f284c30f14dfc9c4f85.js.map