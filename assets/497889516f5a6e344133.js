"use strict";(this.webpackChunkdiscord_app=this.webpackChunkdiscord_app||[]).push([[2464],{636394:(n,e,t)=>{t.d(e,{Z:()=>c});var r=t(785893),i=(t(667294),t(776319)),a=t(426466),u=t(769672),s=t(268333),o=t(461061),l=t(959797);function c(n,e){var t=n.getGuildId();return(0,r.jsx)(u.sN,{id:"channel-copy-link",label:l.Z.Messages.COPY_LINK,action:function(){n.isForumPost()&&(0,a.B)({postId:n.id,location:{section:o.jXE.CONTEXT_MENU}});(0,i.J)((0,s.wR)(t,n.id,e))}})}},753717:(n,e,t)=>{t.d(e,{Z:()=>E});var r=t(785893),i=(t(667294),t(363010)),a=t(320646),u=t(769672),s=t(577028),o=t(973381),l=t(668479),c=t(53551),d=t(384995),f=t(283369),_=t(461061),g=t(959797);function E(n){var e=function(n){return(0,i.e7)([f.ZP,d.Z,o.Z,s.Z,l.Z],(function(){if(n.isForumPost())return f.ZP.isForumPostUnread(n.id);if(n.isForumChannel())return s.Z.getUnreadThreadsCountForParent(n.guild_id,n.id)>0;if(n.type===_.d4z.GUILD_CATEGORY){var e=d.Z.getCategories(n.getGuildId());if(null==e[n.id])return!1
;if(e[n.id].some((function(n){var e=n.channel;return(0,c.Em)(e.type)&&f.ZP.hasUnread(e.id)})))return!0;var t=new Set(e[n.id].map((function(n){return n.channel.id}))),r=o.Z.getThreadsForGuild(n.guild_id);for(var i in r)if(t.has(i))for(var a in r[i])if(l.Z.hasJoined(a)&&!l.Z.isMuted(a)&&f.ZP.hasUnread(a))return!0;return!1}return f.ZP.hasUnread(n.id)}),[n])}(n);return(0,r.jsx)(u.sN,{id:"mark-channel-read",label:g.Z.Messages.MARK_AS_READ,action:function(){n.isForumChannel()?(0,a.g5)(n):(0,a.U6)(n)},disabled:!e})}},450324:(n,e,t)=>{t.d(e,{Z:()=>d});var r=t(785893),i=(t(667294),t(363010)),a=t(769672),u=t(290495),s=t(513073),o=t(390504),l=t(461061),c=t(959797);function d(n){var e=(0,s.DM)(n.guild_id),t=(0,i.e7)([o.Z],(function(){return o.Z.isChannelOptedIn(n.guild_id,n.id)})),d=(0,i.e7)([o.Z],(function(){return null!=n.parent_id&&o.Z.isChannelOptedIn(n.guild_id,n.parent_id)})),f=(0,i.e7)([o.Z],(function(){return o.Z.isFavorite(n.guild_id,n.id)})),_=function(){(0,u.XQ)(n.guild_id,n.id,!t,{
section:l.jXE.CONTEXT_MENU})};return!e||n.isThread()?null:n.isCategory()?(0,r.jsx)(a.sN,{id:"opt-into-category",label:t?c.Z.Messages.CHANNEL_OPT_OUT:c.Z.Messages.CHANNEL_OPT_IN,action:function(){return _()}}):(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(a.sN,{id:"opt-in-favorite-channel",label:f?c.Z.Messages.REMOVE_FAVORITE:c.Z.Messages.ADD_FAVORITE,action:function(){(0,u.dM)(n.guild_id,n.id,!f,{section:l.jXE.CONTEXT_MENU})}}),d?(0,r.jsx)(a.sN,{id:"opt-out-category",label:c.Z.Messages.CHANNEL_OPT_OUT_PARENT_CATEGORY,action:function(){null!=n.parent_id&&(0,u.XQ)(n.guild_id,n.parent_id,!1,{section:l.jXE.CONTEXT_MENU})}}):(0,r.jsx)(a.sN,{id:"opt-into-channel",label:t?c.Z.Messages.CHANNEL_OPT_OUT:c.Z.Messages.CHANNEL_OPT_IN,action:function(){return _()}})]})}},11827:(n,e,t)=>{t.d(e,{Z:()=>_});var r=t(785893),i=(t(667294),t(363010)),a=t(359590),u=t(825431),s=t(685740),o=t(769672),l=t(390504),c=t(53619),d=t(959797);function f(n){var e=(0,s.nH)(n),t=function(n){return[{setting:c.N.NULL,
label:null!=n.parent_id?d.Z.Messages.FORM_LABEL_DEFAULT_CATEGORY:d.Z.Messages.FORM_LABEL_DEFAULT},{setting:c.N.ALL_MESSAGES,label:d.Z.Messages.FORM_LABEL_ALL_MESSAGES},{setting:c.N.MENTIONS_AND_HIGHLIGHTS,label:d.Z.Messages.HIGHLIGHTS_AND_MENTIONS}]}(n);return(0,r.jsx)(r.Fragment,{children:t.map((function(t){var i=t.setting,u=t.label;return(0,r.jsx)(o.k5,{group:"channel-unreads",id:"".concat(i),label:u,subtext:i===c.N.NULL?d.Z.Messages.HIGHLIGHTS_AND_MENTIONS:void 0,action:function(){return function(e){(0,a.MR)(n.guild_id,n.id,e)}(i)},checked:i===e},i)}))})}function _(n){var e=(0,s.nH)(n),t=(0,u.RX)(),a=(0,i.e7)([l.Z],(function(){return l.Z.isGuildUnreadSettingEnabled(n.guild_id)})),_=t&&a,g=f(n);return _?(0,r.jsx)(o.sN,{id:"channel-unreads",label:d.Z.Messages.UNREAD_SETTINGS,subtext:e===c.N.ALL_MESSAGES?d.Z.Messages.FORM_LABEL_ALL_MESSAGES:d.Z.Messages.HIGHLIGHTS_AND_MENTIONS,children:g}):null}},282998:(n,e,t)=>{t.d(e,{Z:()=>u});var r=t(363010),i=t(971738),a=t(461061);function u(){
return(0,r.e7)([i.Z],(function(){return i.Z.getGuildId()}))===a.I_8}},603130:(n,e,t)=>{t.d(e,{Z:()=>_});var r=t(785893),i=(t(667294),t(363010)),a=t(769672),u=t(1812),s=t(987762),o=t(620700),l=t(576296),c=t(461061),d=t(959797);function f(n,e){return n.type===c.d4z.GROUP_DM?e?d.Z.Messages.UNFAVORITE_GDM:d.Z.Messages.FAVORITE_GDM:n.type===c.d4z.DM?e?d.Z.Messages.UNFAVORITE_DM:d.Z.Messages.FAVORITE_DM:e?d.Z.Messages.UNFAVORITE_CHANNEL:d.Z.Messages.FAVORITE_CHANNEL}function _(n){var e=(0,i.e7)([s.Z],(function(){return s.Z.isFavorite(n.id)})),t=function(n){var e=function(e){(0,o.kj)(n.id,e)},t=(0,i.e7)([u.ZP],(function(){return u.ZP.getChannels(c.I_8)}))[c.d4z.GUILD_CATEGORY].filter((function(n){return"null"!==n.channel.id}));return l.Z.useExperiment({}).favoritesEnabled?0===t.length?(0,r.jsx)(a.sN,{id:"favorite-channel",label:f(n,!1),action:function(){return e(null)}}):(0,r.jsx)(a.sN,{id:"favorite-channel",label:f(n,!1),action:function(){return e(null)},children:t.map((function(n){return(0,
r.jsx)(a.sN,{id:"favorite-".concat(n.channel.id),label:n.channel.name,action:function(){return e(n.channel.id)}},n.channel.id)}))}):null}(n),d=function(n){return(0,r.jsx)(a.sN,{id:"favorite-channel",label:f(n,!0),action:function(){(0,o.oC)(n.id)}})}(n);return __OVERLAY__?null:e?d:t}},386704:(n,e,t)=>{t.d(e,{Z:()=>E});var r=t(785893),i=(t(667294),t(363010)),a=t(769672),u=t(971738),s=t(897576),o=t(461061),l=t(959797);function c(n,e,t,r,i,a,u){try{var s=n[a](u),o=s.value}catch(n){t(n);return}s.done?e(o):Promise.resolve(o).then(r,i)}function d(n){return function(){var e=this,t=arguments;return new Promise((function(r,i){var a=n.apply(e,t);function u(n){c(a,r,i,u,s,"next",n)}function s(n){c(a,r,i,u,s,"throw",n)}u(void 0)}))}}function f(n,e,t){e in n?Object.defineProperty(n,e,{value:t,enumerable:!0,configurable:!0,writable:!0}):n[e]=t;return n}function _(n,e){e=null!=e?e:{};Object.getOwnPropertyDescriptors?Object.defineProperties(n,Object.getOwnPropertyDescriptors(e)):function(n,e){
var t=Object.keys(n);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(n);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(n,e).enumerable})));t.push.apply(t,r)}return t}(Object(e)).forEach((function(t){Object.defineProperty(n,t,Object.getOwnPropertyDescriptor(e,t))}));return n}var g=function(n,e){var t,r,i,a,u={label:0,sent:function(){if(1&i[0])throw i[1];return i[1]},trys:[],ops:[]};return a={next:s(0),throw:s(1),return:s(2)},"function"==typeof Symbol&&(a[Symbol.iterator]=function(){return this}),a;function s(a){return function(s){return function(a){if(t)throw new TypeError("Generator is already executing.");for(;u;)try{if(t=1,r&&(i=2&a[0]?r.return:a[0]?r.throw||((i=r.return)&&i.call(r),0):r.next)&&!(i=i.call(r,a[1])).done)return i;(r=0,i)&&(a=[2&a[0],i.value]);switch(a[0]){case 0:case 1:i=a;break;case 4:u.label++;return{value:a[1],done:!1};case 5:u.label++;r=a[1];a=[0];continue;case 7:a=u.ops.pop();u.trys.pop();continue;default:if(!(i=u.trys,
i=i.length>0&&i[i.length-1])&&(6===a[0]||2===a[0])){u=0;continue}if(3===a[0]&&(!i||a[1]>i[0]&&a[1]<i[3])){u.label=a[1];break}if(6===a[0]&&u.label<i[1]){u.label=i[1];i=a;break}if(i&&u.label<i[2]){u.label=i[2];u.ops.push(a);break}i[2]&&u.ops.pop();u.trys.pop();continue}a=e.call(n,u)}catch(n){a=[6,n];r=0}finally{t=i=0}if(5&a[0])throw a[1];return{value:a[0]?a[1]:void 0,done:!0}}([a,s])}}};function E(n){var e=(0,i.e7)([u.Z],(function(){return u.Z.getGuildId()}));return __OVERLAY__||e!==o.I_8?null:(0,r.jsx)(a.sN,{id:"set-channel-nickname",label:l.Z.Messages.CHANGE_NICKNAME,action:function(){(0,s.ZD)(d((function(){var e,i;return g(this,(function(a){switch(a.label){case 0:return[4,Promise.all([t.e(40532),t.e(98418)]).then(t.bind(t,598418))];case 1:e=a.sent(),i=e.default;return[2,function(e){return(0,r.jsx)(i,_(function(n){for(var e=1;e<arguments.length;e++){var t=null!=arguments[e]?arguments[e]:{},r=Object.keys(t)
;"function"==typeof Object.getOwnPropertySymbols&&(r=r.concat(Object.getOwnPropertySymbols(t).filter((function(n){return Object.getOwnPropertyDescriptor(t,n).enumerable}))));r.forEach((function(e){f(n,e,t[e])}))}return n}({},e),{channelId:n.id}))}]}}))})))}})}},542169:(n,e,t)=>{t.d(e,{Z:()=>c});var r=t(785893),i=(t(667294),t(363010)),a=t(769672),u=t(655695),s=t(971738),o=t(461061),l=t(959797);function c(n){var e=(0,i.e7)([s.Z],(function(){return s.Z.getGuildId()}));return __OVERLAY__||e!==o.I_8?null:(0,r.jsx)(a.sN,{id:"go-to-original-guild",label:l.Z.Messages.FAVORITES_GO_TO_ORIGINAL_GUILD,action:function(){(0,u.XU)(n.guild_id,n.id)}})}}}]);
//# sourceMappingURL=497889516f5a6e344133.js.map