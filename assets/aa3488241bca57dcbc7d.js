"use strict";(this.webpackChunkdiscord_app=this.webpackChunkdiscord_app||[]).push([[53280],{276256:(e,n,t)=>{t.d(n,{B:()=>o});var r=t(496486),a=t.n(r),o=function(e,n){var t=a().shuffle(e),r=t.findIndex((function(e){return e.value===n}));if(r>-1){var o=t[r];t.splice(r,1);t.push(o)}return t}},789039:(e,n,t)=>{t.d(n,{Z:()=>C});var r=t(785893),a=t(667294),o=t(496486),s=t.n(o),l=t(331535),i=t(244028),u=t(190422),c=t(825611),E=t(487502),f=t(272729),d=t(160036),h=t(462428),b=t(67416),p=t(95467),m=t(276256),v=t(76997),D=t(959797),_=t(839319),x=t.n(_);function T(e,n){(null==n||n>e.length)&&(n=e.length);for(var t=0,r=new Array(n);t<n;t++)r[t]=e[t];return r}function y(e,n){return function(e){if(Array.isArray(e))return e}(e)||function(e,n){var t=null==e?null:"undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null!=t){var r,a,o=[],s=!0,l=!1;try{for(t=t.call(e);!(s=(r=t.next()).done);s=!0){o.push(r.value);if(n&&o.length===n)break}}catch(e){l=!0;a=e}finally{try{
s||null==t.return||t.return()}finally{if(l)throw a}}return o}}(e,n)||function(e,n){if(!e)return;if("string"==typeof e)return T(e,n);var t=Object.prototype.toString.call(e).slice(8,-1);"Object"===t&&e.constructor&&(t=e.constructor.name);if("Map"===t||"Set"===t)return Array.from(t);if("Arguments"===t||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t))return T(e,n)}(e,n)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function L(){return(0,r.jsx)(l.xv,{className:x().helpdeskLink,variant:"text-xs/normal",color:"text-muted",children:D.Z.Messages.FEEDBACK_NEED_MORE_HELP.format({helpdeskURL:p.Z.getSubmitRequestURL()})})}function C(e){var n=e.header,t=e.body,o=e.problems,p=e.transitionState,_=e.feedbackProblems,T=void 0===_?[]:_,C=e.otherKey,g=e.hasCloseButton,I=e.onSubmit,A=e.onClose,Z=e.canDismissForever,O=void 0===Z||Z,S=e.showHelpdeskLink,j=void 0===S||S,M=(0,
i.Z)(o),N=y(a.useState(!1),2),k=N[0],B=N[1],R=y(a.useState(null),2),w=R[0],G=R[1],K=y(a.useState(s().shuffle(o)),2),U=K[0],P=K[1],F=y(a.useState(""),2),z=F[0],H=F[1],V=(0,f.Dt)(),Y=(0,d.Z)(k),W=(0,d.Z)(w),q=(0,d.Z)(I),J=(0,d.Z)(z),X=null!=w&&T.includes(w);a.useEffect((function(){s().isEqual(M,o)||P((0,m.B)(o,C))}),[o,M,C]);a.useEffect((function(){return function(){q.current({problem:W.current,dontShowAgain:Y.current,feedback:J.current})}}),[]);return(0,r.jsxs)(b.Y0,{transitionState:p,className:x().modalRoot,"aria-labelledby":V,children:[(0,r.jsx)(u.Z,{}),(0,r.jsxs)(b.xB,{separator:!1,className:x().headerContainer,children:[(0,r.jsx)(h.Z,{id:V,className:x().header,color:h.Z.Colors.CUSTOM,size:h.Z.Sizes.SIZE_24,children:n}),(0,r.jsx)(l.xv,{variant:"text-md/normal",color:"none",className:x().ratingBody,children:t}),g?(0,r.jsx)(b.ol,{className:x().modalCloseButton,onClick:A}):null]}),(0,r.jsxs)(b.hz,{className:x().content,children:[X?null:(0,r.jsx)(l.xJ,{className:x().problemInfo,
children:(0,r.jsx)(c.Z,{options:U,onClick:function(e){var n=e.value;G(n);T.includes(n)||A()}})}),X?(0,r.jsxs)(l.xJ,{title:D.Z.Messages.FEEDBACK_DESCRIBE_ISSUE,className:x().problemInfo,children:[(0,r.jsx)(l.Kx,{value:z,maxLength:v.iF,onChange:H}),j?(0,r.jsx)(L,{}):null]}):null]}),O||X?(0,r.jsx)(b.mz,{className:x().footer,direction:E.Z.Direction.HORIZONTAL,children:X?(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(l.zx,{size:l.zx.Sizes.SMALL,look:l.zx.Looks.LINK,color:l.zx.Colors.PRIMARY,onClick:function(){G(null);H("")},children:D.Z.Messages.BACK}),(0,r.jsx)(l.zx,{size:l.zx.Sizes.SMALL,onClick:A,children:D.Z.Messages.SUBMIT})]}):O?(0,r.jsx)(l.XZ,{size:18,type:l.XZ.Types.INVERTED,value:k,onChange:function(){return B(!k)},children:(0,r.jsx)(l.xv,{variant:"text-sm/normal",children:D.Z.Messages.DONT_SHOW_AGAIN})}):null}):null]})}},190422:(e,n,t)=>{t.d(n,{Z:()=>l});var r=t(667294),a=t(953143),o=t(742269),s=t(959797);function l(){r.useEffect((function(){o.FB||(0,a.EM)({
messages:[s.Z.Messages.GO_LIVE_HEY,s.Z.Messages.GO_LIVE_LOOK,s.Z.Messages.GO_LIVE_LISTEN],interval:600,count:20,onlyWhenBlurred:!0})}),[]);return null}},453280:(e,n,t)=>{t.r(n);t.d(n,{default:()=>_});var r=t(785893),a=t(667294),o=t(126136),s=t(820028),l=t(635940),i=t(789039),u=t(897576),c=t(932847),E=t(461061);var f,d=t(959797);!function(e){e.TOO_HARD="Too hard";e.TEST="Testing purposes";e.ACCIDENT="Created on accident";e.TEMPLATE="Curious about server/template";e.LONELY="Empty server";e.INACTIVE="Inactive server";e.OTHER="Other"}(f||(f={}));function h(){return[{value:f.TOO_HARD,label:d.Z.Messages.GUILD_DELETE_FEEDBACK_TOO_HARD},{value:f.TEST,label:d.Z.Messages.GUILD_DELETE_FEEDBACK_TEST},{value:f.ACCIDENT,label:d.Z.Messages.GUILD_DELETE_FEEDBACK_ACCIDENT},{value:f.TEMPLATE,label:d.Z.Messages.GUILD_DELETE_FEEDBACK_TEMPLATE},{value:f.LONELY,label:d.Z.Messages.GUILD_DELETE_FEEDBACK_LONELY},{value:f.INACTIVE,label:d.Z.Messages.GUILD_DELETE_FEEDBACK_INACTIVE},{value:f.OTHER,
label:d.Z.Messages.GUILD_DELETE_FEEDBACK_OTHER}]}function b(e,n,t,r,a,o,s){try{var l=e[o](s),i=l.value}catch(e){t(e);return}l.done?n(i):Promise.resolve(i).then(r,a)}function p(e){return function(){var n=this,t=arguments;return new Promise((function(r,a){var o=e.apply(n,t);function s(e){b(o,r,a,s,l,"next",e)}function l(e){b(o,r,a,s,l,"throw",e)}s(void 0)}))}}function m(e,n,t){n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t;return e}var v=function(e,n){var t,r,a,o,s={label:0,sent:function(){if(1&a[0])throw a[1];return a[1]},trys:[],ops:[]};return o={next:l(0),throw:l(1),return:l(2)},"function"==typeof Symbol&&(o[Symbol.iterator]=function(){return this}),o;function l(o){return function(l){return function(o){if(t)throw new TypeError("Generator is already executing.");for(;s;)try{if(t=1,r&&(a=2&o[0]?r.return:o[0]?r.throw||((a=r.return)&&a.call(r),0):r.next)&&!(a=a.call(r,o[1])).done)return a;(r=0,a)&&(o=[2&o[0],a.value]);switch(o[0]){case 0:
case 1:a=o;break;case 4:s.label++;return{value:o[1],done:!1};case 5:s.label++;r=o[1];o=[0];continue;case 7:o=s.ops.pop();s.trys.pop();continue;default:if(!(a=s.trys,a=a.length>0&&a[a.length-1])&&(6===o[0]||2===o[0])){s=0;continue}if(3===o[0]&&(!a||o[1]>a[0]&&o[1]<a[3])){s.label=o[1];break}if(6===o[0]&&s.label<a[1]){s.label=a[1];a=o;break}if(a&&s.label<a[2]){s.label=a[2];s.ops.push(o);break}a[2]&&s.ops.pop();s.trys.pop();continue}o=n.call(e,s)}catch(e){o=[6,e];r=0}finally{t=a=0}if(5&o[0])throw o[1];return{value:o[0]?o[1]:void 0,done:!0}}([o,l])}}},D=[f.OTHER];function _(e){var n=e.transitionState,b=e.onClose,_=e.guildId,x=(0,o.Z)(h);a.useEffect((function(){c.default.track(E.rMx.OPEN_MODAL,{type:"Guild Delete Report"})}),[]);return(0,r.jsx)(i.Z,{header:d.Z.Messages.GUILD_DELETE_FEEDBACK_HEADER,body:d.Z.Messages.GUILD_DELETE_FEEDBACK_BODY,problems:x,feedbackProblems:D,onSubmit:function(e){var n=e.problem,a=e.dontShowAgain,o=e.feedback;a&&(0,l.EW)(s.z$.GUILD_DELETE_FEEDBACK);var i=null==n
;!function(e,n,t,r){c.default.track(E.rMx.USER_REPORT_SUBMITTED,{report_name:"Guild Deletion",guild_id:e,reason:n,feedback:t,skipped:r})}(_,n,o,i);i||u.ZD(p((function(){var e,n;return v(this,(function(a){switch(a.label){case 0:return[4,Promise.all([t.e(40532),t.e(76325)]).then(t.bind(t,876325))];case 1:e=a.sent(),n=e.default;return[2,function(e){return(0,r.jsx)(n,function(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{},r=Object.keys(t);"function"==typeof Object.getOwnPropertySymbols&&(r=r.concat(Object.getOwnPropertySymbols(t).filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))));r.forEach((function(n){m(e,n,t[n])}))}return e}({body:d.Z.Messages.GUILD_DELETE_FEEDBACK_REPORT},e))}]}}))})))},onClose:b,transitionState:n,otherKey:f.OTHER})}},825611:(e,n,t)=>{t.d(n,{Z:()=>c});var r=t(785893),a=(t(667294),t(294184)),o=t.n(a),s=t(331535),l=t(414597),i=t(94480),u=t.n(i);function c(e){
var n=e.options,t=e.onClick,a=e.className,i=e.optionClassName;return(0,r.jsx)("div",{className:o()(u().root,a),children:n.map((function(e,n){return(0,r.jsxs)(s.P3,{onClick:function(){return t(e)},className:o()(u().option,i),children:[(0,r.jsx)(s.xv,{className:u().text,color:"none",variant:"text-md/normal",children:e.label}),(0,r.jsx)(l.Z,{className:u().caret,direction:l.Z.Directions.RIGHT})]},n)}))})}}}]);
//# sourceMappingURL=aa3488241bca57dcbc7d.js.map