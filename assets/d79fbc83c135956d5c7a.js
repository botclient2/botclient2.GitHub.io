"use strict";(this.webpackChunkdiscord_app=this.webpackChunkdiscord_app||[]).push([[8941],{608941:(e,t,n)=>{n.r(t);n.d(t,{default:()=>g});var r=n(785893),s=n(667294),a=n(363010),o=n(331535),c=n(737325),i=n(915004),u=n(67416),l=n(932847),f=n(56435),A=n(204371),p=n(461061),T=n(959797),h=n(631022),E=n.n(h);function d(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function C(e,t,n,r,s,a,o){try{var c=e[a](o),i=c.value}catch(e){n(e);return}c.done?t(i):Promise.resolve(i).then(r,s)}function N(e){return function(){var t=this,n=arguments;return new Promise((function(r,s){var a=e.apply(t,n);function o(e){C(a,r,s,o,c,"next",e)}function c(e){C(a,r,s,o,c,"throw",e)}o(void 0)}))}}function S(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function _(e){_=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)};return _(e)}function y(e,t){
return!t||"object"!==M(t)&&"function"!=typeof t?d(e):t}function I(e,t){I=Object.setPrototypeOf||function(e,t){e.__proto__=t;return e};return I(e,t)}var M=function(e){return e&&"undefined"!=typeof Symbol&&e.constructor===Symbol?"symbol":typeof e};function m(e){var t=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){})));return!0}catch(e){return!1}}();return function(){var n,r=_(e);if(t){var s=_(this).constructor;n=Reflect.construct(r,arguments,s)}else n=r.apply(this,arguments);return y(this,n)}}var L,O=function(e,t){var n,r,s,a,o={label:0,sent:function(){if(1&s[0])throw s[1];return s[1]},trys:[],ops:[]};return a={next:c(0),throw:c(1),return:c(2)},"function"==typeof Symbol&&(a[Symbol.iterator]=function(){return this}),a;function c(a){return function(c){return function(a){
if(n)throw new TypeError("Generator is already executing.");for(;o;)try{if(n=1,r&&(s=2&a[0]?r.return:a[0]?r.throw||((s=r.return)&&s.call(r),0):r.next)&&!(s=s.call(r,a[1])).done)return s;(r=0,s)&&(a=[2&a[0],s.value]);switch(a[0]){case 0:case 1:s=a;break;case 4:o.label++;return{value:a[1],done:!1};case 5:o.label++;r=a[1];a=[0];continue;case 7:a=o.ops.pop();o.trys.pop();continue;default:if(!(s=o.trys,s=s.length>0&&s[s.length-1])&&(6===a[0]||2===a[0])){o=0;continue}if(3===a[0]&&(!s||a[1]>s[0]&&a[1]<s[3])){o.label=a[1];break}if(6===a[0]&&o.label<s[1]){o.label=s[1];s=a;break}if(s&&o.label<s[2]){o.label=s[2];o.ops.push(a);break}s[2]&&o.ops.pop();o.trys.pop();continue}a=t.call(e,o)}catch(e){a=[6,e];r=0}finally{n=s=0}if(5&a[0])throw a[1];return{value:a[0]?a[1]:void 0,done:!0}}([a,c])}}};!function(e){e[e.START=0]="START";e[e.FAIL=1]="FAIL";e[e.SUCCESS=2]="SUCCESS";e[e.CANCELED=3]="CANCELED"}(L||(L={}));var b=function(e){!function(e,t){
if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}});t&&I(e,t)}(n,e);var t=m(n);function n(){S(this,n);var e;(e=t.apply(this,arguments)).state={step:L.START};var r=d(e);e.close=N((function(){var e,t,n,s;return O(this,(function(a){switch(a.label){case 0:e=r.state.step;t=r.props,n=t.onClose,s=t.pendingPayment;return e!==L.START?[3,2]:[4,(0,c.UY)(s.id)];case 1:a.sent();a.label=2;case 2:n();return[2]}}))}));var s=d(e);e.cancelPayment=N((function(){var e,t;return O(this,(function(n){switch(n.label){case 0:e=s.props.pendingPayment;n.label=1;case 1:n.trys.push([1,3,,4]);return[4,(0,c.UY)(e.id)];case 2:n.sent();return[3,4];case 3:t=n.sent();s.setState({step:L.CANCELED});throw t;case 4:s.setState({step:L.CANCELED});return[2]}}))}));var a=d(e);e.handleAuthenticate=N((function(){var e,t;return O(this,(function(n){switch(n.label){case 0:
e=a.props.pendingPayment;return[4,(0,A.oe)(e.id)];case 1:t=n.sent();null!=t.error?a.setState({step:L.FAIL}):a.setState({step:L.SUCCESS});return[2]}}))}));return e}var a=n.prototype;a.componentDidMount=function(){l.default.track(p.rMx.OPEN_MODAL,{type:p.jXE.PAYMENT_AUTHENTICATION_MODAL})};a.componentWillUnmount=function(){l.default.track(p.rMx.MODAL_DISMISSED,{type:p.jXE.PAYMENT_AUTHENTICATION_MODAL})};a.getTitle=function(){switch(this.state.step){case L.START:return T.Z.Messages.PAYMENT_AUTHENTICATION_MODAL_TITLE;case L.SUCCESS:return T.Z.Messages.PAYMENT_AUTHENTICATION_MODAL_TITLE_SUCCESS;case L.CANCELED:return T.Z.Messages.PAYMENT_AUTHENTICATION_MODAL_TITLE_CANCELED;case L.FAIL:default:return T.Z.Messages.PAYMENT_AUTHENTICATION_MODAL_TITLE_FAIL}};a.getImageStyle=function(){switch(this.state.step){case L.START:return E().authenticationRequiredImage;case L.SUCCESS:return E().authenticationSuccessImage;case L.CANCELED:case L.FAIL:default:return E().authenticationFailImage}}
;a.getMessage=function(){var e=this.state.step,t=this.props.pendingPayment;switch(e){case L.START:return T.Z.Messages.PAYMENT_AUTHENTICATION_MODAL_START.format({price:(0,f.T4)(t.amount,t.currency),item:t.description});case L.SUCCESS:return T.Z.Messages.PAYMENT_AUTHENTICATION_MODAL_SUCCESS;case L.CANCELED:return T.Z.Messages.PAYMENT_AUTHENTICATION_MODAL_CANCELED.format({item:t.description});case L.FAIL:default:return T.Z.Messages.PAYMENT_AUTHENTICATION_MODAL_FAIL}};a.renderButtons=function(){var e=this.state.step,t=this.props.disableAuthentication;switch(e){case L.START:return(0,r.jsxs)(s.Fragment,{children:[(0,r.jsx)(o.zx,{color:o.Tt.BRAND,disabled:t,onClick:this.handleAuthenticate,children:T.Z.Messages.PAYMENT_AUTHENTICATION_MODAL_BUTTON}),(0,r.jsx)(o.zx,{look:o.zx.Looks.LINK,size:o.zx.Sizes.NONE,color:o.zx.Colors.PRIMARY,onClick:this.cancelPayment,className:E().cancelButton,children:T.Z.Messages.PAYMENT_AUTHENTICATION_MODAL_BUTTON_CANCEL_PAYMENT})]});case L.SUCCESS:case L.CANCELED:
case L.FAIL:default:return(0,r.jsx)(o.zx,{color:o.Tt.BRAND,onClick:this.close,children:T.Z.Messages.CLOSE})}};a.render=function(){var e=this.props.transitionState;return(0,r.jsxs)(u.Y0,{transitionState:e,className:E().modal,size:u.Cg.SMALL,"aria-label":this.getTitle(),children:[(0,r.jsxs)(u.xB,{children:[(0,r.jsx)(o.X6,{variant:"heading-lg/semibold",children:(0,r.jsx)("span",{className:E().modalTitle,children:this.getTitle()})}),(0,r.jsx)(u.ol,{className:E().closeIcon,onClick:this.close})]}),(0,r.jsxs)(u.hz,{className:E().content,children:[(0,r.jsx)("div",{className:this.getImageStyle()}),(0,r.jsx)(o.xv,{variant:"text-md/normal",children:this.getMessage()})]}),(0,r.jsx)(u.mz,{className:E().footer,children:this.renderButtons()})]})};return n}(s.Component);const g=a.ZP.connectStores([i.Z],(function(){return{disableAuthentication:i.Z.isAwaitingAuthentication}}))(b)}}]);
//# sourceMappingURL=d79fbc83c135956d5c7a.js.map