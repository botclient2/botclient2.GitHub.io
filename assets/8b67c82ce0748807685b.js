(this.webpackChunkdiscord_app=this.webpackChunkdiscord_app||[]).push([[66602],{483683:(e,n,t)=>{e.exports=t.p+"72db7a1fbe5d3c861fe63c26f634b5d2.svg"},63685:(e,n,t)=>{e.exports=t.p+"a4e25b25c89b862150e6eeb520e67dd5.svg"},992054:(e,n,t)=>{"use strict";t.d(n,{Z:()=>O});var r=t(496486),_=t.n(r),a=t(363010),E=t(173436),i=t(613258),s=t(989232),d=t(541405);function u(e,n){(null==n||n>e.length)&&(n=e.length);for(var t=0,r=new Array(n);t<n;t++)r[t]=e[t];return r}function l(e,n){if(!(e instanceof n))throw new TypeError("Cannot call a class as a function")}function c(e){c=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)};return c(e)}function o(e,n){return!n||"object"!==L(n)&&"function"!=typeof n?function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e):n}function T(e,n){T=Object.setPrototypeOf||function(e,n){e.__proto__=n;return e};return T(e,n)}function I(e){return function(e){
if(Array.isArray(e))return u(e)}(e)||function(e){if("undefined"!=typeof Symbol&&null!=e[Symbol.iterator]||null!=e["@@iterator"])return Array.from(e)}(e)||function(e,n){if(!e)return;if("string"==typeof e)return u(e,n);var t=Object.prototype.toString.call(e).slice(8,-1);"Object"===t&&e.constructor&&(t=e.constructor.name);if("Map"===t||"Set"===t)return Array.from(t);if("Arguments"===t||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t))return u(e,n)}(e)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}var L=function(e){return e&&"undefined"!=typeof Symbol&&e.constructor===Symbol?"symbol":typeof e};function M(e){var n=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){})));return!0}catch(e){return!1}}()
;return function(){var t,r=c(e);if(n){var _=c(this).constructor;t=Reflect.construct(r,arguments,_)}else t=r.apply(this,arguments);return o(this,t)}}var A=!1,U={},D={},p={},G=function(e){p[e.guild_scheduled_event.id]=new s.Z(e.guild_scheduled_event.guild);D[e.guild_scheduled_event.id]=e.guild_scheduled_event;return{channelId:e.directory_channel_id,scheduledEventId:e.entity_id,type:d.C2.GUILD_SCHEDULED_EVENT,authorId:e.author_id,createdAt:e.created_at}};var C=function(e){!function(e,n){if("function"!=typeof n&&null!==n)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(n&&n.prototype,{constructor:{value:e,writable:!0,configurable:!0}});n&&T(e,n)}(t,e);var n=M(t);function t(){l(this,t);return n.apply(this,arguments)}var r=t.prototype;r.isFetching=function(){return A};r.getEventDirectoryEntries=function(e){if(null!=e)return U[e]};r.getCachedGuildByEventId=function(e){var n;return null!==(n=p[e])&&void 0!==n?n:void 0}
;r.getCachedGuildScheduledEventById=function(e){var n;return null!==(n=D[e])&&void 0!==n?n:void 0};r.__getLocalVars=function(){return{fetching:A,eventDirectoryEntries:U,cachedGuildScheduledEvents:D,cachedGuildByEvents:p,eventDirectoryEntryFromServer:G}};return t}(a.ZP.Store);C.displayName="EventDirectoryStore";const O=new C(E.Z,{EVENT_DIRECTORY_FETCH_START:function(){A=!0},EVENT_DIRECTORY_FETCH_SUCCESS:function(e){var n=e.channelId,t=e.entries;A=!1;var r=_().sortBy(I(t),[function(e){return(0,i.CQ)(e.guild_scheduled_event)}]),a=_().map(r,G);U[n]=a},EVENT_DIRECTORY_FETCH_FAILURE:function(){A=!1}})},541405:(e,n,t)=>{"use strict";t.d(n,{C2:()=>r,VX:()=>_,sE:()=>a,AR:()=>E,b7:()=>c,Pp:()=>o});var r,_,a,E,i=t(368365),s=t(890889),d=t(461061),u=t(959797);function l(e,n,t){n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t;return e}!function(e){e[e.GUILD=0]="GUILD";e[e.GUILD_SCHEDULED_EVENT=1]="GUILD_SCHEDULED_EVENT"}(r||(r={}));!function(e){
e.GUILD_TEMPLATES="guild-templates";e.CUSTOMIZE_NEW_GUILD="customize-new-guild";e.CHOOSE_GUILD="choose-guild";e.CUSTOMIZE_EXISTING_GUILD="customize-existing-guild";e.CONFIRMATION="confirmation"}(_||(_={}));!function(e){e.CREATE="CREATE";e.HUB_SCHOOL_CLUB="HUB_SCHOOL_CLUB";e.HUB_STUDY="HUB_STUDY";e.HUB_CLASS="HUB_CLASS";e.HUB_SOCIAL="HUB_SOCIAL";e.HUB_MAJOR="HUB_MAJOR";e.HUB_DORM="HUB_DORM"}(a||(a={}));!function(e){e[e.ALL=-1]="ALL";e[e.UNCATEGORIZED=0]="UNCATEGORIZED";e[e.SCHOOL_CLUB=1]="SCHOOL_CLUB";e[e.CLASS=2]="CLASS";e[e.STUDY_SOCIAL=3]="STUDY_SOCIAL";e[e.MISC=5]="MISC"}(E||(E={}));function c(e){return"883060064561299456"===e?[{value:E.SCHOOL_CLUB,label:u.Z.Messages.DIRECTORY_CATEGORY_INTERNAL_1},{value:E.CLASS,label:u.Z.Messages.DIRECTORY_CATEGORY_INTERNAL_2},{value:E.STUDY_SOCIAL,label:u.Z.Messages.DIRECTORY_CATEGORY_INTERNAL_3},{value:E.MISC,label:u.Z.Messages.DIRECTORY_CATEGORY_INTERNAL_5}]:[{value:E.SCHOOL_CLUB,label:u.Z.Messages.DIRECTORY_CATEGORY_SCHOOL_CLUB,idealSize:100},{
value:E.CLASS,label:u.Z.Messages.DIRECTORY_CATEGORY_CLASS},{value:E.STUDY_SOCIAL,label:u.Z.Messages.DIRECTORY_CATEGORY_STUDY_SOCIAL,idealSize:50},{value:E.MISC,label:u.Z.Messages.DIRECTORY_CATEGORY_MISCELLANEOUS}]}function o(){var e;return l(e={},a.CREATE,{id:a.CREATE,code:"2TffvPucqHkN",label:u.Z.Messages.GUILD_TEMPLATE_HEADER_CREATE,channels:[],system_channel_id:null}),l(e,a.HUB_SCHOOL_CLUB,{id:a.HUB_SCHOOL_CLUB,code:"UMUbvRpRZhS6",label:u.Z.Messages.GUILD_TEMPLATE_HEADER_SCHOOL_CLUB,channels:[{id:"00",parent_id:null,name:u.Z.Messages.GUILD_TEMPLATE_NAME_CATEGORY_INFORMATION,type:d.d4z.GUILD_CATEGORY},{id:"01",parent_id:"00",name:u.Z.Messages.GUILD_TEMPLATE_NAME_WELCOME_AND_RULES,type:d.d4z.GUILD_TEXT},{id:"02",parent_id:"00",name:u.Z.Messages.GUILD_TEMPLATE_NAME_ANNOUNCEMENTS,type:d.d4z.GUILD_TEXT},{id:"03",parent_id:"00",name:u.Z.Messages.GUILD_TEMPLATE_NAME_RESOURCES,type:d.d4z.GUILD_TEXT},{id:"10",parent_id:null,name:u.Z.Messages.GUILD_TEMPLATE_NAME_CATEGORY_TEXT,
type:d.d4z.GUILD_CATEGORY},{id:"11",parent_id:"10",name:u.Z.Messages.GUILD_TEMPLATE_NAME_INTRODUCTIONS,type:d.d4z.GUILD_TEXT},{id:"12",parent_id:"10",name:u.Z.Messages.GUILD_TEMPLATE_NAME_GENERAL,type:d.d4z.GUILD_TEXT},{id:"13",parent_id:"10",name:u.Z.Messages.GUILD_TEMPLATE_NAME_OFF_TOPIC,type:d.d4z.GUILD_TEXT},{id:"20",parent_id:null,name:u.Z.Messages.GUILD_TEMPLATE_NAME_CATEGORY_VOICE,type:d.d4z.GUILD_CATEGORY},{id:"21",parent_id:"20",name:u.Z.Messages.GUILD_TEMPLATE_NAME_VOICE_LOUNGE,type:d.d4z.GUILD_VOICE},{id:"22",parent_id:"20",name:u.Z.Messages.GUILD_TEMPLATE_NAME_VOICE_MEETING_ROOM_1,type:d.d4z.GUILD_VOICE},{id:"22",parent_id:"20",name:u.Z.Messages.GUILD_TEMPLATE_NAME_VOICE_MEETING_ROOM_2,type:d.d4z.GUILD_VOICE}],roles:[{id:"00",name:"@everyone",permissions:s.ZP.DEFAULT},{id:"01",name:"officers (example)",mentionable:!0,hoist:!0,
permissions:i.Z.combine(s.ZP.DEFAULT,d.Plq.MANAGE_ROLES,d.Plq.MANAGE_CHANNELS,d.Plq.KICK_MEMBERS,d.Plq.BAN_MEMBERS,d.Plq.MANAGE_NICKNAMES,d.Plq.MANAGE_GUILD_EXPRESSIONS,d.Plq.MANAGE_MESSAGES,d.Plq.SEND_TTS_MESSAGES),color:3066993}],system_channel_id:"12"}),l(e,a.HUB_STUDY,{id:a.HUB_STUDY,code:"2JBhzzca2vfT",label:u.Z.Messages.GUILD_TEMPLATE_HEADER_STUDY,channels:[{id:"00",parent_id:null,name:u.Z.Messages.GUILD_TEMPLATE_NAME_CATEGORY_INFO,type:d.d4z.GUILD_CATEGORY},{id:"01",parent_id:"00",name:u.Z.Messages.GUILD_TEMPLATE_NAME_NOTES_RESOURCES,type:d.d4z.GUILD_TEXT},{id:"02",parent_id:"00",name:u.Z.Messages.GUILD_TEMPLATE_NAME_HELP_QUESTIONS,type:d.d4z.GUILD_TEXT},{id:"10",parent_id:null,name:u.Z.Messages.GUILD_TEMPLATE_NAME_CATEGORY_CHAT,type:d.d4z.GUILD_CATEGORY},{id:"11",parent_id:"10",name:u.Z.Messages.GUILD_TEMPLATE_NAME_INTRODUCTIONS,type:d.d4z.GUILD_TEXT},{id:"12",parent_id:"10",name:u.Z.Messages.GUILD_TEMPLATE_NAME_GENERAL,type:d.d4z.GUILD_TEXT},{id:"12",parent_id:"10",
name:u.Z.Messages.GUILD_TEMPLATE_NAME_OFF_TOPIC,type:d.d4z.GUILD_TEXT},{id:"20",parent_id:null,name:u.Z.Messages.GUILD_TEMPLATE_NAME_CATEGORY_VOICE,type:d.d4z.GUILD_CATEGORY},{id:"21",parent_id:"20",name:u.Z.Messages.GUILD_TEMPLATE_NAME_VOICE_LOUNGE,type:d.d4z.GUILD_VOICE},{id:"22",parent_id:"20",name:u.Z.Messages.GUILD_TEMPLATE_NAME_VOICE_STUDY_ROOM.format({number:1}),type:d.d4z.GUILD_VOICE},{id:"23",parent_id:"20",name:u.Z.Messages.GUILD_TEMPLATE_NAME_VOICE_STUDY_ROOM.format({number:2}),type:d.d4z.GUILD_VOICE}],system_channel_id:"12"}),l(e,a.HUB_CLASS,{id:a.HUB_CLASS,code:"r86WWBwTGspb",label:u.Z.Messages.GUILD_TEMPLATE_HEADER_CLASS,channels:[{id:"00",parent_id:null,name:u.Z.Messages.GUILD_TEMPLATE_NAME_CATEGORY_INFO,type:d.d4z.GUILD_CATEGORY},{id:"01",parent_id:"00",name:u.Z.Messages.GUILD_TEMPLATE_NAME_ASSIGNMENTS,type:d.d4z.GUILD_TEXT},{id:"02",parent_id:"00",name:u.Z.Messages.GUILD_TEMPLATE_NAME_HELP_QUESTIONS,type:d.d4z.GUILD_TEXT},{id:"10",parent_id:null,
name:u.Z.Messages.GUILD_TEMPLATE_NAME_CATEGORY_CHAT,type:d.d4z.GUILD_CATEGORY},{id:"11",parent_id:"10",name:u.Z.Messages.GUILD_TEMPLATE_NAME_INTRODUCTIONS,type:d.d4z.GUILD_TEXT},{id:"12",parent_id:"10",name:u.Z.Messages.GUILD_TEMPLATE_NAME_GENERAL,type:d.d4z.GUILD_TEXT},{id:"13",parent_id:"10",name:u.Z.Messages.GUILD_TEMPLATE_NAME_OFF_TOPIC,type:d.d4z.GUILD_TEXT},{id:"20",parent_id:null,name:u.Z.Messages.GUILD_TEMPLATE_NAME_CATEGORY_VOICE,type:d.d4z.GUILD_CATEGORY},{id:"21",parent_id:"20",name:u.Z.Messages.GUILD_TEMPLATE_NAME_VOICE_LOUNGE,type:d.d4z.GUILD_VOICE},{id:"22",parent_id:"20",name:u.Z.Messages.GUILD_TEMPLATE_NAME_VOICE_STUDY_ROOM.format({number:1}),type:d.d4z.GUILD_VOICE},{id:"23",parent_id:"20",name:u.Z.Messages.GUILD_TEMPLATE_NAME_VOICE_STUDY_ROOM.format({number:2}),type:d.d4z.GUILD_VOICE}],system_channel_id:"12"}),l(e,a.HUB_SOCIAL,{id:a.HUB_SOCIAL,code:"AvvtXE3mfbCR",label:u.Z.Messages.GUILD_TEMPLATE_HEADER_SOCIAL,channels:[{id:"00",parent_id:null,
name:u.Z.Messages.GUILD_TEMPLATE_NAME_CATEGORY_CHAT,type:d.d4z.GUILD_CATEGORY},{id:"01",parent_id:"00",name:u.Z.Messages.GUILD_TEMPLATE_NAME_INTRODUCTIONS,type:d.d4z.GUILD_TEXT},{id:"02",parent_id:"00",name:u.Z.Messages.GUILD_TEMPLATE_NAME_GENERAL,type:d.d4z.GUILD_TEXT},{id:"03",parent_id:"00",name:u.Z.Messages.GUILD_TEMPLATE_NAME_OFF_TOPIC,type:d.d4z.GUILD_TEXT},{id:"04",parent_id:"00",name:u.Z.Messages.GUILD_TEMPLATE_NAME_MEETUPS,type:d.d4z.GUILD_TEXT},{id:"10",parent_id:null,name:u.Z.Messages.GUILD_TEMPLATE_NAME_CATEGORY_VOICE,type:d.d4z.GUILD_CATEGORY},{id:"11",parent_id:"10",name:u.Z.Messages.GUILD_TEMPLATE_NAME_VOICE_COUCHES,type:d.d4z.GUILD_VOICE},{id:"12",parent_id:"10",name:u.Z.Messages.GUILD_TEMPLATE_NAME_VOICE_MOVIE_ROOM,type:d.d4z.GUILD_VOICE},{id:"13",parent_id:"10",name:u.Z.Messages.GUILD_TEMPLATE_NAME_VOICE_UNNUMBERED_STUDY_ROOM,type:d.d4z.GUILD_VOICE}],system_channel_id:"02"}),l(e,a.HUB_MAJOR,{id:a.HUB_MAJOR,code:"FhmfDR6Arvsc",
label:u.Z.Messages.GUILD_TEMPLATE_HEADER_MAJOR,channels:[{id:"00",parent_id:null,name:u.Z.Messages.GUILD_TEMPLATE_NAME_CATEGORY_INFO,type:d.d4z.GUILD_CATEGORY},{id:"01",parent_id:"00",name:u.Z.Messages.GUILD_TEMPLATE_NAME_RESOURCES,type:d.d4z.GUILD_TEXT},{id:"02",parent_id:"00",name:u.Z.Messages.GUILD_TEMPLATE_NAME_HELP_QUESTIONS,type:d.d4z.GUILD_TEXT},{id:"10",parent_id:null,name:u.Z.Messages.GUILD_TEMPLATE_NAME_CATEGORY_CHAT,type:d.d4z.GUILD_CATEGORY},{id:"11",parent_id:"10",name:u.Z.Messages.GUILD_TEMPLATE_NAME_INTRODUCTIONS,type:d.d4z.GUILD_TEXT},{id:"12",parent_id:"10",name:u.Z.Messages.GUILD_TEMPLATE_NAME_GENERAL,type:d.d4z.GUILD_TEXT},{id:"13",parent_id:"10",name:u.Z.Messages.GUILD_TEMPLATE_NAME_OFF_TOPIC,type:d.d4z.GUILD_TEXT},{id:"20",parent_id:null,name:u.Z.Messages.GUILD_TEMPLATE_NAME_CATEGORY_VOICE,type:d.d4z.GUILD_CATEGORY},{id:"21",parent_id:"20",name:u.Z.Messages.GUILD_TEMPLATE_NAME_VOICE_LOUNGE,type:d.d4z.GUILD_VOICE},{id:"22",parent_id:"20",
name:u.Z.Messages.GUILD_TEMPLATE_NAME_VOICE_STUDY_ROOM.format({number:1}),type:d.d4z.GUILD_VOICE},{id:"23",parent_id:"20",name:u.Z.Messages.GUILD_TEMPLATE_NAME_VOICE_STUDY_ROOM.format({number:2}),type:d.d4z.GUILD_VOICE}],system_channel_id:"12"}),l(e,a.HUB_DORM,{id:a.HUB_DORM,code:"fkq8xHfrGE58",label:u.Z.Messages.GUILD_TEMPLATE_HEADER_DORM,channels:[{id:"00",parent_id:null,name:u.Z.Messages.GUILD_TEMPLATE_NAME_CATEGORY_INFO,type:d.d4z.GUILD_CATEGORY},{id:"01",parent_id:"00",name:u.Z.Messages.GUILD_TEMPLATE_NAME_DORM_NEWS,type:d.d4z.GUILD_TEXT},{id:"10",parent_id:null,name:u.Z.Messages.GUILD_TEMPLATE_NAME_CATEGORY_CHAT,type:d.d4z.GUILD_CATEGORY},{id:"11",parent_id:"10",name:u.Z.Messages.GUILD_TEMPLATE_NAME_INTRODUCTIONS,type:d.d4z.GUILD_TEXT},{id:"12",parent_id:"10",name:u.Z.Messages.GUILD_TEMPLATE_NAME_GENERAL,type:d.d4z.GUILD_TEXT},{id:"13",parent_id:"10",name:u.Z.Messages.GUILD_TEMPLATE_NAME_OFF_TOPIC,type:d.d4z.GUILD_TEXT},{id:"20",parent_id:null,
name:u.Z.Messages.GUILD_TEMPLATE_NAME_CATEGORY_VOICE,type:d.d4z.GUILD_CATEGORY},{id:"21",parent_id:"20",name:u.Z.Messages.GUILD_TEMPLATE_NAME_VOICE_LOUNGE,type:d.d4z.GUILD_VOICE},{id:"22",parent_id:"20",name:u.Z.Messages.GUILD_TEMPLATE_NAME_VOICE_MOVIE_ROOM,type:d.d4z.GUILD_VOICE},{id:"23",parent_id:"20",name:u.Z.Messages.GUILD_TEMPLATE_NAME_VOICE_COUCHES,type:d.d4z.GUILD_VOICE}],system_channel_id:"12"}),e}},427809:(e,n,t)=>{"use strict";t.d(n,{Z:()=>I});var r=t(675860),_=t(173436),a=t(804626),E=t(655695),i=t(631134),s=t(935406),d=t(613258),u=t(998689),l=t(461061);function c(e,n,t,r,_,a,E){try{var i=e[a](E),s=i.value}catch(e){t(e);return}i.done?n(s):Promise.resolve(s).then(r,_)}function o(e){return function(){var n=this,t=arguments;return new Promise((function(r,_){var a=e.apply(n,t);function E(e){c(a,r,_,E,i,"next",e)}function i(e){c(a,r,_,E,i,"throw",e)}E(void 0)}))}}var T=function(e,n){var t,r,_,a,E={label:0,sent:function(){if(1&_[0])throw _[1];return _[1]},trys:[],ops:[]}
;return a={next:i(0),throw:i(1),return:i(2)},"function"==typeof Symbol&&(a[Symbol.iterator]=function(){return this}),a;function i(a){return function(i){return function(a){if(t)throw new TypeError("Generator is already executing.");for(;E;)try{if(t=1,r&&(_=2&a[0]?r.return:a[0]?r.throw||((_=r.return)&&_.call(r),0):r.next)&&!(_=_.call(r,a[1])).done)return _;(r=0,_)&&(a=[2&a[0],_.value]);switch(a[0]){case 0:case 1:_=a;break;case 4:E.label++;return{value:a[1],done:!1};case 5:E.label++;r=a[1];a=[0];continue;case 7:a=E.ops.pop();E.trys.pop();continue;default:if(!(_=E.trys,_=_.length>0&&_[_.length-1])&&(6===a[0]||2===a[0])){E=0;continue}if(3===a[0]&&(!_||a[1]>_[0]&&a[1]<_[3])){E.label=a[1];break}if(6===a[0]&&E.label<_[1]){E.label=_[1];_=a;break}if(_&&E.label<_[2]){E.label=_[2];E.ops.push(a);break}_[2]&&E.ops.pop();E.trys.pop();continue}a=n.call(e,E)}catch(e){a=[6,e];r=0}finally{t=_=0}if(5&a[0])throw a[1];return{value:a[0]?a[1]:void 0,done:!0}}([a,i])}}};const I={startEvent:function(e,n){
return r.Z.patch({url:l.ANM.GUILD_EVENT(n,e),body:{status:u.p1.ACTIVE}})},endEvent:function(e,n){return r.Z.patch({url:l.ANM.GUILD_EVENT(n,e),body:{status:u.p1.COMPLETED}})},joinVoiceEvent:function(e,n){a.default.selectVoiceChannel(n);(0,E.uL)(l.Z5c.CHANNEL(e,n))},saveEvent:function(e,n,t,_){var a=u.pg.has(n.entityType)?n.channelId:null,E=u._U.has(n.entityType)?n.entityMetadata:null,i=null!=n.image&&!1===/^data:/.test(n.image)?void 0:n.image;return r.Z.patch({url:l.ANM.GUILD_EVENT(t,e),body:{name:n.name,description:n.description,image:i,privacy_level:n.privacyLevel,scheduled_start_time:n.scheduledStartTime,scheduled_end_time:n.scheduledEndTime,entity_type:n.entityType,channel_id:a,entity_metadata:E,broadcast_to_directory_channels:_.broadcastToDirectoryChannels}})},createGuildEvent:function(e,n,t){return r.Z.post({url:l.ANM.GUILD_EVENTS_FOR_GUILD(n),body:{name:e.name,description:e.description,image:e.image,privacy_level:e.privacyLevel,scheduled_start_time:e.scheduledStartTime,
scheduled_end_time:e.scheduledEndTime,entity_type:e.entityType,channel_id:e.channelId,entity_metadata:e.entityMetadata,broadcast_to_directory_channels:t.broadcastToDirectoryChannels}})},fetchGuildEventsForGuild:function(e){var n=arguments.length>1&&void 0!==arguments[1]&&arguments[1];return o((function(){var t,r;return T(this,(function(a){switch(a.label){case 0:t={url:l.ANM.GUILD_EVENTS_FOR_GUILD(e),query:{with_user_count:n}};return[4,(0,s.Kb)(t)];case 1:r=a.sent().body;_.Z.dispatch({type:"FETCH_GUILD_EVENTS_FOR_GUILD",guildId:e,guildScheduledEvents:r});return[2,r]}}))}))()},cancelGuildEvent:function(e,n){return r.Z.patch({url:l.ANM.GUILD_EVENT(n,e),body:{status:u.p1.CANCELED}})},deleteGuildEvent:function(e,n){return r.Z.delete({url:l.ANM.GUILD_EVENT(n,e)})},getGuildEventsForCurrentUser:function(e){return o((function(){var n;return T(this,(function(t){switch(t.label){case 0:return[4,r.Z.get({url:l.ANM.USER_GUILD_EVENTS,query:{guild_ids:[e]}})];case 1:n=t.sent().body;_.Z.dispatch({
type:"GUILD_SCHEDULED_EVENT_RSVPS_FETCH_SUCESS",guildScheduledEventUsers:n,guildId:e});return[2]}}))}))()},createRsvpForGuildEvent:function(e,n){return o((function(){var t,a,E;return T(this,(function(s){switch(s.label){case 0:t=d.ZP.hasRsvp(e,n);a=i.default.getId();if(t)return[2];s.label=1;case 1:s.trys.push([1,3,,4]);_.Z.dispatch({type:"GUILD_SCHEDULED_EVENT_USER_ADD",userId:a,guildId:n,guildEventId:e});return[4,r.Z.put({url:l.ANM.USER_GUILD_EVENT(n,e)})];case 2:return[2,s.sent()];case 3:E=s.sent();_.Z.dispatch({type:"GUILD_SCHEDULED_EVENT_USER_REMOVE",userId:a,guildId:n,guildEventId:e});throw E;case 4:return[2]}}))}))()},deleteRsvpForGuildEvent:function(e,n){return o((function(){var t,a,E;return T(this,(function(s){switch(s.label){case 0:t=d.ZP.hasRsvp(e,n);a=i.default.getId();if(!t)return[2];s.label=1;case 1:s.trys.push([1,3,,4]);_.Z.dispatch({type:"GUILD_SCHEDULED_EVENT_USER_REMOVE",userId:a,guildId:n,guildEventId:e});return[4,r.Z.delete({url:l.ANM.USER_GUILD_EVENT(n,e)})];case 2:
return[2,s.sent()];case 3:E=s.sent();_.Z.dispatch({type:"GUILD_SCHEDULED_EVENT_USER_ADD",userId:a,guildId:n,guildEventId:e});throw E;case 4:return[2]}}))}))()},fetchUsersForGuildEvent:function(e,n){var t=arguments.length>2&&void 0!==arguments[2]?arguments[2]:u.rC;return o((function(){var a;return T(this,(function(E){switch(E.label){case 0:return null==e||null==n?[2,[]]:[4,r.Z.get({url:l.ANM.GUILD_EVENT_USERS(n,e),query:{limit:t,with_member:!0}})];case 1:a=E.sent();_.Z.dispatch({type:"GUILD_SCHEDULED_EVENT_USERS_FETCH_SUCCESS",guildEventId:e,rsvpUsers:a.body.users,guildId:n});return[2,a.body.users]}}))}))()}}},217891:(e,n,t)=>{"use strict";t.d(n,{ZP:()=>A,qY:()=>U,gM:()=>D,k5:()=>p,u1:()=>G,eF:()=>C,sz:()=>O});var r=t(667294),_=t(363010),a=t(992054),E=t(356004),i=t(1812),s=t(653772),d=t(940712),u=t(90816),l=t(613258),c=t(694470),o=t(998689),T=t(461061);function I(e,n){(null==n||n>e.length)&&(n=e.length);for(var t=0,r=new Array(n);t<n;t++)r[t]=e[t];return r}function L(e,n){
return function(e){if(Array.isArray(e))return e}(e)||function(e,n){var t=null==e?null:"undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null!=t){var r,_,a=[],E=!0,i=!1;try{for(t=t.call(e);!(E=(r=t.next()).done);E=!0){a.push(r.value);if(n&&a.length===n)break}}catch(e){i=!0;_=e}finally{try{E||null==t.return||t.return()}finally{if(i)throw _}}return a}}(e,n)||function(e,n){if(!e)return;if("string"==typeof e)return I(e,n);var t=Object.prototype.toString.call(e).slice(8,-1);"Object"===t&&e.constructor&&(t=e.constructor.name);if("Map"===t||"Set"===t)return Array.from(t);if("Arguments"===t||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t))return I(e,n)}(e,n)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}var M=[];function A(e,n){return(0,_.Wu)([s.Z,a.Z,l.ZP,d.Z,E.Z,i.ZP],(function(){var t=s.Z.getGuild(e);if(null==t)return M
;if(t.hasFeature(T.oNc.HUB)){var r,_,c=null===(r=i.ZP.getDefaultChannel(t.id))||void 0===r?void 0:r.id;return(null!==(_=a.Z.getEventDirectoryEntries(c))&&void 0!==_?_:[]).map((function(e){var n=e.scheduledEventId,t=l.ZP.getGuildScheduledEvent(n);return null!=t?t:a.Z.getCachedGuildScheduledEventById(n)})).filter(u.lm)}return l.ZP.getGuildScheduledEventsByIndex(null!=n?n:l.bN.GUILD_EVENT_UPCOMING(t.id)).filter((function(e){var n=e.channel_id;if(null==n)return!0;var t=E.Z.getChannel(n);return d.Z.can(T.Plq.VIEW_CHANNEL,t)}))}),[e])}function U(e){return(0,_.e7)([l.ZP,E.Z,d.Z],(function(){var n=E.Z.getChannel(e);if(!d.Z.can(T.Plq.VIEW_CHANNEL,n))return null;if(null==(null==n?void 0:n.guild_id))return null;var t=l.ZP.getGuildScheduledEventsByIndex(l.bN.CHANNEL_EVENT_ACTIVE(e));return t.length>0?t[0]:null}),[e])}function D(e){var n=(0,_.Wu)([l.ZP],(function(){return l.ZP.getGuildScheduledEventsForGuild(e)}),[e]);return r.useMemo((function(){var e=new Map;n.forEach((function(n){
var t=n.channel_id;null!=t&&e.set(t,n)}));return e}),[n])}function p(e){return(0,_.e7)([l.ZP,E.Z,d.Z],(function(){return l.ZP.getGuildScheduledEventsByIndex(l.bN.GUILD_EVENT_ACTIVE(e)).find((function(e){if(e.entity_type===o.WX.NONE||!(0,l.xt)(e))return!1;if(null==e.channel_id)return!0;var n=E.Z.getChannel(e.channel_id);return d.Z.can(T.Plq.VIEW_CHANNEL,n)}))}),[e])}function G(e){return(0,_.e7)([l.ZP],(function(){return l.ZP.getGuildScheduledEventsByIndex(l.bN.CHANNEL_EVENT_UPCOMING(e))}),[e])}function C(e){return(0,_.e7)([E.Z,l.ZP],(function(){var n=l.ZP.getGuildScheduledEventsByIndex(l.bN.GUILD_EVENT_ACTIVE(e)).find((function(e){return null!=E.Z.getChannel(e.channel_id)}));return E.Z.getChannel(null==n?void 0:n.channel_id)}),[e])}function O(e){var n=L(r.useState((function(){return Date.now()})),2),t=n[0],a=n[1];r.useEffect((function(){var e=setInterval((function(){a(Date.now())}),9e5);return function(){return clearInterval(e)}}),[]);var E=(0,_.e7)([l.ZP],(function(){
return l.ZP.getGuildScheduledEventsByIndex(l.bN.CHANNEL_EVENT_UPCOMING(e))}),[e,t]);return r.useMemo((function(){return E.filter((function(e){return e.status!==o.p1.ACTIVE&&(0,c.ub)(e.scheduled_start_time,e.scheduled_end_time).withinStartWindow}))}),[E])}},694470:(e,n,t)=>{"use strict";t.d(n,{G3:()=>a,Ib:()=>E,ib:()=>i,ub:()=>u,v1:()=>c,me:()=>o});var r=t(730381),_=t.n(r),a=(t(998689),365),E=a+1,i=function(){var e=_()().add(1,"hour"),n=e.hour();e.minutes()>=30&&(n+=1);return e.hour(n).minutes(0).seconds(0)};var s=function(e,n){return e.format(e.get("years")===n.get("years")?"ddd MMM Do · LT":"ddd MMM Do, YYYY · LT")},d=function(e,n){return e.diff(n,"days")>1?s(e,n):e.calendar(n)};function u(e,n,t){null==t&&(t=_()());var r=_()(e),a=null!=n&&""!==n?_()(n):void 0,E=null!=n&&r.isSame(a,"day");return{startDateTimeString:d(r,t),endDateTimeString:null!=a?E?a.format("LT"):s(a,t):void 0,currentOrPastEvent:r<=t,upcomingEvent:r<=_()().add(1,"hour"),withinStartWindow:r<=_()().add(15,"minute"),
diffMinutes:r.diff(t,"minutes")}}function l(e,n){var t;if(null!=e){t={startDate:_()(e),endDate:void 0};null!=n&&(t.endDate=_()(n))}return t}function c(e){return l(e.scheduledStartTime,e.scheduledEndTime)}function o(e){return l(e.scheduled_start_time,e.scheduled_end_time)}},66602:(e,n,t)=>{"use strict";t.r(n);t.d(n,{default:()=>I});var r=t(785893),_=(t(667294),t(331535)),a=t(804626),E=t(422877),i=t(272729),s=t(695756),d=t(67416),u=t(427809),l=t(217891),c=t(959797),o=t(347542),T=t.n(o);function I(e){var n=e.channel,t=e.transitionState,o=e.onClose,I=(0,i.Dt)(),L=(0,l.qY)(n.id);if(null==L)return null;var M=function(){a.default.selectVoiceChannel(null);o()};return(0,r.jsxs)(d.Y0,{transitionState:t,"aria-labelledby":I,size:d.Cg.SMALL,children:[(0,r.jsxs)(d.hz,{className:T().content,children:[(0,r.jsx)(E.Z,{children:(0,r.jsx)("div",{className:T().iconBackground,children:(0,r.jsx)(s.Z,{height:40,width:40,className:T().icon})})}),(0,r.jsx)(_.X6,{id:I,variant:"heading-xl/semibold",
color:"header-primary",className:T().title,children:c.Z.Messages.GUILD_EVENT_END_PROMPT_TITLE}),(0,r.jsx)(_.xv,{variant:"text-md/normal",color:"header-secondary",className:T().subtitle,children:c.Z.Messages.GUILD_EVENT_END_PROMPT_BODY})]}),(0,r.jsxs)(d.mz,{children:[(0,r.jsx)(_.zx,{color:_.zx.Colors.RED,onClick:function(){u.Z.endEvent(L.id,L.guild_id);M()},children:c.Z.Messages.GUILD_EVENT_END_PROMPT_CONFIRM}),(0,r.jsx)(_.zx,{color:_.zx.Colors.PRIMARY,className:T().cancelButton,onClick:M,children:c.Z.Messages.GUILD_EVENT_END_PROMPT_CANCEL})]})]})}},422877:(e,n,t)=>{"use strict";t.d(n,{Z:()=>o});var r=t(785893),_=(t(667294),t(294184)),a=t.n(_),E=t(959797),i=t(300443),s=t.n(i),d=t(483683),u=t.n(d),l=t(63685),c=t.n(l);function o(e){var n=e.className,t=e.children;return(0,r.jsxs)("div",{className:a()(s().container,n),children:[(0,r.jsx)("img",{alt:E.Z.Messages.MEMBER_VERIFICATION_VERIFICATION_ICON,src:c(),className:a()(s().sparkleIcon,s().sparkleBottom)}),t,(0,r.jsx)("img",{
alt:E.Z.Messages.MEMBER_VERIFICATION_VERIFICATION_ICON,src:u(),className:a()(s().sparkleIcon,s().sparkleTop)})]})}}}]);
//# sourceMappingURL=8b67c82ce0748807685b.js.map