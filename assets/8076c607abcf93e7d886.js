(window.webpackJsonp=window.webpackJsonp||[]).push([[17],{6583:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var n,o,u=function(e){if(e&&e.__esModule)return e;if(null===e||"object"!=typeof e&&"function"!=typeof e)return{default:e};var t=l();if(t&&t.has(e))return t.get(e);var r={},n=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var o in e)if(Object.prototype.hasOwnProperty.call(e,o)){var u=n?Object.getOwnPropertyDescriptor(e,o):null;u&&(u.get||u.set)?Object.defineProperty(r,o,u):r[o]=e[o]}r.default=e,t&&t.set(e,r);return r}(r(0)),a=r(142),i=r(6543),c=r(6519),f=(n=r(9880))&&n.__esModule?n:{default:n};function l(){if("function"!=typeof WeakMap)return null;var e=new WeakMap;return l=function(){return e},e}function p(e,t,r,n){o||(o="function"==typeof Symbol&&Symbol.for&&Symbol.for("react.element")||60103);var u=e&&e.defaultProps,a=arguments.length-3;if(t||0===a||(t={children:void 0}),1===a)t.children=n;else if(a>1){for(var i=new Array(a),c=0;c<a;c++)i[c]=arguments[c+3];t.children=i}if(t&&u)for(var f in u)void 0===t[f]&&(t[f]=u[f]);else t||(t=u||{});return{$$typeof:o,type:e,key:void 0===r?null:""+r,ref:null,props:t,_owner:null}}var s=p(a.Switch,{},void 0,p(a.Route,{path:"/oauth2/authorized",component:c.OAuth2AuthorizedPage}),p(a.Route,{path:"/oauth2/authorize",component:i.OAuth2AuthorizePage}),p(a.Route,{path:"/oauth2/error",component:c.OAuth2ErrorPage}),p(a.Route,{path:"/oauth2/whitelist/accept",component:f.default})),d=function(e){var t,r;function n(){return e.apply(this,arguments)||this}return r=e,(t=n).prototype=Object.create(r.prototype),t.prototype.constructor=t,t.__proto__=r,n.prototype.render=function(){return s},n}(u.PureComponent);d.displayName="ViewsWithOAuth2";var h=d;t.default=h},9880:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=O;var n,o,u=d(r(0)),a=r(402),i=r(142),c=r(1575),f=r(5666),l=d(r(6519)),p=(n=r(2))&&n.__esModule?n:{default:n};function s(){if("function"!=typeof WeakMap)return null;var e=new WeakMap;return s=function(){return e},e}function d(e){if(e&&e.__esModule)return e;if(null===e||"object"!=typeof e&&"function"!=typeof e)return{default:e};var t=s();if(t&&t.has(e))return t.get(e);var r={},n=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var o in e)if(Object.prototype.hasOwnProperty.call(e,o)){var u=n?Object.getOwnPropertyDescriptor(e,o):null;u&&(u.get||u.set)?Object.defineProperty(r,o,u):r[o]=e[o]}return r.default=e,t&&t.set(e,r),r}function h(e,t,r,n){o||(o="function"==typeof Symbol&&Symbol.for&&Symbol.for("react.element")||60103);var u=e&&e.defaultProps,a=arguments.length-3;if(t||0===a||(t={children:void 0}),1===a)t.children=n;else if(a>1){for(var i=new Array(a),c=0;c<a;c++)i[c]=arguments[c+3];t.children=i}if(t&&u)for(var f in u)void 0===t[f]&&(t[f]=u[f]);else t||(t=u||{});return{$$typeof:o,type:e,key:void 0===r?null:""+r,ref:null,props:t,_owner:null}}function y(e,t,r,n,o,u,a){try{var i=e[u](a),c=i.value}catch(e){return void r(e)}i.done?t(c):Promise.resolve(c).then(n,o)}function v(e){return function(){var t=this,r=arguments;return new Promise((function(n,o){var u=e.apply(t,r);function a(e){y(u,n,o,a,i,"next",e)}function i(e){y(u,n,o,a,i,"throw",e)}a(void 0)}))}}function O(){var e,t=(0,i.useLocation)(),r=u.useState(!1),n=r[0],o=r[1],s=u.useState(!1),d=s[0],y=s[1];return u.useEffect((function(){function e(){return(e=v(regeneratorRuntime.mark((function e(){var r;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return r=(0,a.parse)(t.search),e.prev=1,e.next=4,(0,c.acceptWhitelist)(r.token||"");case 4:o(!0),e.next=10;break;case 7:e.prev=7,e.t0=e.catch(1),y(!0);case 10:case"end":return e.stop()}}),e,null,[[1,7]])})))).apply(this,arguments)}!function(){e.apply(this,arguments)}()}),[t.search]),e=n?h(l.OAuth2Success,{message:p.default.Messages.WHITELISTED,cta:!0}):d?h(l.OAuth2Error,{message:p.default.Messages.WHITELIST_FAILED,cta:!0}):h(l.default,{message:p.default.Messages.WHITELISTING,spinner:!0}),h(f.OAuth2Page,{},void 0,e)}O.displayName="OAuth2WhitelistAccept"}}]);
//# sourceMappingURL=8076c607abcf93e7d886.js.map