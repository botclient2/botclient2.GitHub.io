(this.webpackJsonp=this.webpackJsonp||[]).push([[13],{6880:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0});t.default=void 0;var a,o=function(e,t){if(!t&&e&&e.__esModule)return e;if(null===e||"object"!=typeof e&&"function"!=typeof e)return{default:e};var r=_(t);if(r&&r.has(e))return r.get(e);var a={},o=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var n in e)if("default"!==n&&Object.prototype.hasOwnProperty.call(e,n)){var s=o?Object.getOwnPropertyDescriptor(e,n):null;s&&(s.get||s.set)?Object.defineProperty(a,n,s):a[n]=e[n]}a.default=e;r&&r.set(e,a);return a}(r(0)),n=v(r(8)),s=r(324),u=r(207),c=v(r(844)),i=v(r(112)),l=r(1),f=v(r(4)),p=v(r(9081)),d=v(r(8460)),y=["state","path","payment_source_type","redirect_status"];function v(e){return e&&e.__esModule?e:{default:e}}function _(e){if("function"!=typeof WeakMap)return null;var t=new WeakMap,r=new WeakMap;return(_=function(e){return e?r:t})(e)}function m(e,t,r,o){
a||(a="function"==typeof Symbol&&Symbol.for&&Symbol.for("react.element")||60103);var n=e&&e.defaultProps,s=arguments.length-3;t||0===s||(t={children:void 0});if(1===s)t.children=o;else if(s>1){for(var u=new Array(s),c=0;c<s;c++)u[c]=arguments[c+3];t.children=u}if(t&&n)for(var i in n)void 0===t[i]&&(t[i]=n[i]);else t||(t=n||{});return{$$typeof:a,type:e,key:void 0===r?null:""+r,ref:null,props:t,_owner:null}}function g(e,t){return(g=Object.setPrototypeOf||function(e,t){e.__proto__=t;return e})(e,t)}var P=function(e){!function(e,t){e.prototype=Object.create(t.prototype);e.prototype.constructor=e;g(e,t)}(t,e);function t(){for(var t,r=arguments.length,a=new Array(r),o=0;o<r;o++)a[o]=arguments[o];(t=e.call.apply(e,[this].concat(a))||this).state={loading:!0,success:!1};t.stringToSourceType=function(e){if(null==e)return l.PaymentSourceTypes.UNKNOWN;var t=parseInt(e);return isNaN(t)?l.PaymentSourceTypes.UNKNOWN:t};t.getLogo=function(e){switch(e){case l.PaymentSourceTypes.PAYPAL:
return p.default.paypalLogo;case l.PaymentSourceTypes.SOFORT:return p.default.sofortLogo}return""};return t}var r=t.prototype;r.componentDidMount=function(){var e=this,t=(0,s.parse)(this.props.location.search),r=t.state,a=t.path,o=t.payment_source_type,n=t.redirect_status,i=function(e,t){if(null==e)return{};var r,a,o={},n=Object.keys(e);for(a=0;a<n.length;a++){r=n[a];t.indexOf(r)>=0||(o[r]=e[r])}return o}(t,y),f=this.stringToSourceType(o),p=function(t){var r=t.status,a="succeeded"===n;f===l.PaymentSourceTypes.PAYPAL&&(a=204===r&&"cancel"!==i.response_type);e.setState({loading:!1,success:a})};c.default.request(l.RPCCommands.BILLING_POPUP_BRIDGE_CALLBACK,{payment_source_type:f,state:r,path:a,query:i}).then(p,(function(e){return t="RPCError"!==e.name,(0,u.popupBridgeCallback)({paymentSourceType:Number(f),state:r,path:a,query:i,insecure:t}).then(p,p);var t})).then((function(){return c.default.disconnect()}))};r.render=function(){var e,t=this.state,r=t.loading,a=t.success,o=(0,
s.parse)(this.props.location.search).payment_source_type,u=this.stringToSourceType(o);e=r?m("div",{className:p.default.message},void 0,u===l.PaymentSourceTypes.PAYPAL?f.default.Messages.PAYPAL_ACCOUNT_VERIFYING:f.default.Messages.PAYMENT_ACCOUNT_VERIFYING):a?m("div",{className:p.default.message},void 0,u===l.PaymentSourceTypes.PAYPAL?f.default.Messages.PAYPAL_CALLBACK_SUCCESS.format():f.default.Messages.REDIRECTED_CONFIRMATION_CALLBACK_SUCCESS.format()):m("div",{className:(0,n.default)(p.default.message)},void 0,f.default.Messages.REDIRECTED_CALLBACK_ERROR);return m("div",{className:d.default.verifyConnectedAccount},void 0,m("div",{},void 0,m("div",{className:d.default.logos},void 0,m("div",{className:(0,n.default)(d.default.logo,d.default.logoDiscord)}),m("div",{className:d.default.logosDivider}),m("div",{className:(0,n.default)(d.default.logo,this.getLogo(u))})),e,r?m(i.default,{type:i.default.Type.WANDERING_CUBES}):null))};return t}(o.Component)
;P.displayName="BillingPopupBridgeCallback";var h=P;t.default=h}}]);
//# sourceMappingURL=7367802ed8db5c79e9e7.js.map