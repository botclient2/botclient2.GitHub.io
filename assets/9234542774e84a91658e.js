"use strict";(this.webpackChunkdiscord_developers=this.webpackChunkdiscord_developers||[]).push([[9574],{76924:(e,s,r)=>{Object.defineProperty(s,"__esModule",{value:!0});s.default=void 0;var n,t=c(r(67294)),G=d(r(36211)),a=c(r(18760)),E=d(r(41908)),S=d(r(31055)),o=d(r(81061)),R=d(r(86750)),u=d(r(86460)),_=d(r(58350)),i=d(r(69245)),N=d(r(62441)),l=d(r(89446)),A=c(r(84455)),M=r(70348),O=r(34596);function d(e){return e&&e.__esModule?e:{default:e}}function f(e){if("function"!=typeof WeakMap)return null;var s=new WeakMap,r=new WeakMap;return(f=function(e){return e?r:s})(e)}function c(e,s){if(!s&&e&&e.__esModule)return e;if(null===e||"object"!=typeof e&&"function"!=typeof e)return{default:e};var r=f(s);if(r&&r.has(e))return r.get(e);var n={},t=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var G in e)if("default"!==G&&Object.prototype.hasOwnProperty.call(e,G)){var a=t?Object.getOwnPropertyDescriptor(e,G):null;a&&(a.get||a.set)?Object.defineProperty(n,G,a):n[G]=e[G]}n.default=e
;r&&r.set(e,n);return n}function U(e,s,r,t){n||(n="function"==typeof Symbol&&Symbol.for&&Symbol.for("react.element")||60103);var G=e&&e.defaultProps,a=arguments.length-3;if(s||0===a||(s={children:void 0}),1===a)s.children=t;else if(a>1){for(var E=new Array(a),S=0;S<a;S++)E[S]=arguments[S+3];s.children=E}if(s&&G)for(var o in G)void 0===s[o]&&(s[o]=G[o]);else s||(s=G||{});return{$$typeof:n,type:e,key:void 0===r?null:""+r,ref:null,props:s,_owner:null}}function I(e,s){I=Object.setPrototypeOf||function(e,s){e.__proto__=s;return e};return I(e,s)}var g=function(){var e;return(e={})[M.SKUGenres.ACTION]=O.Messages.Genres.GENRE_ACTION,e[M.SKUGenres.ACTION_RPG]=O.Messages.Genres.GENRE_ACTION_RPG,e[M.SKUGenres.BRAWLER]=O.Messages.Genres.GENRE_BRAWLER,e[M.SKUGenres.HACK_AND_SLASH]=O.Messages.Genres.GENRE_HACK_AND_SLASH,e[M.SKUGenres.PLATFORMER]=O.Messages.Genres.GENRE_PLATFORMER,e[M.SKUGenres.STEALTH]=O.Messages.Genres.GENRE_STEALTH,e[M.SKUGenres.SURVIVAL]=O.Messages.Genres.GENRE_SURVIVAL,
e[M.SKUGenres.ADVENTURE]=O.Messages.Genres.GENRE_ADVENTURE,e[M.SKUGenres.ACTION_ADVENTURE]=O.Messages.Genres.GENRE_ACTION_ADVENTURE,e[M.SKUGenres.METROIDVANIA]=O.Messages.Genres.GENRE_METROIDVANIA,e[M.SKUGenres.OPEN_WORLD]=O.Messages.Genres.GENRE_OPEN_WORLD,e[M.SKUGenres.PSYCHOLOGICAL_HORROR]=O.Messages.Genres.GENRE_PSYCHOLOGICAL_HORROR,e[M.SKUGenres.SANDBOX]=O.Messages.Genres.GENRE_SANDBOX,e[M.SKUGenres.SURVIVAL_HORROR]=O.Messages.Genres.GENRE_SURVIVAL_HORROR,e[M.SKUGenres.VISUAL_NOVEL]=O.Messages.Genres.GENRE_VISUAL_NOVEL,e[M.SKUGenres.DRIVING_RACING]=O.Messages.Genres.GENRE_DRIVING_RACING,e[M.SKUGenres.VEHICULAR_COMBAT]=O.Messages.Genres.GENRE_VEHICULAR_COMBAT,e[M.SKUGenres.MASSIVELY_MULTIPLAYER]=O.Messages.Genres.GENRE_MASSIVELY_MULTIPLAYER,e[M.SKUGenres.MMORPG]=O.Messages.Genres.GENRE_MMORPG,e[M.SKUGenres.ROLE_PLAYING]=O.Messages.Genres.GENRE_ROLE_PLAYING,e[M.SKUGenres.DUNGEON_CRAWLER]=O.Messages.Genres.GENRE_DUNGEON_CRAWLER,
e[M.SKUGenres.ROGUELIKE]=O.Messages.Genres.GENRE_ROGUELIKE,e[M.SKUGenres.SHOOTER]=O.Messages.Genres.GENRE_SHOOTER,e[M.SKUGenres.LIGHT_GUN]=O.Messages.Genres.GENRE_LIGHT_GUN,e[M.SKUGenres.SHOOT_EM_UP]=O.Messages.Genres.GENRE_SHOOT_EM_UP,e[M.SKUGenres.FPS]=O.Messages.Genres.GENRE_FPS,e[M.SKUGenres.DUAL_JOYSTICK_SHOOTER]=O.Messages.Genres.GENRE_DUAL_JOYSTICK_SHOOTER,e[M.SKUGenres.SIMULATION]=O.Messages.Genres.GENRE_SIMULATION,e[M.SKUGenres.FLIGHT_SIMULATOR]=O.Messages.Genres.GENRE_FLIGHT_SIMULATOR,e[M.SKUGenres.TRAIN_SIMULATOR]=O.Messages.Genres.GENRE_TRAIN_SIMULATOR,e[M.SKUGenres.LIFE_SIMULATOR]=O.Messages.Genres.GENRE_LIFE_SIMULATOR,e[M.SKUGenres.FISHING]=O.Messages.Genres.GENRE_FISHING,e[M.SKUGenres.SPORTS]=O.Messages.Genres.GENRE_SPORTS,e[M.SKUGenres.BASEBALL]=O.Messages.Genres.GENRE_BASEBALL,e[M.SKUGenres.BASKETBALL]=O.Messages.Genres.GENRE_BASKETBALL,e[M.SKUGenres.BILLIARDS]=O.Messages.Genres.GENRE_BILLIARDS,e[M.SKUGenres.BOWLING]=O.Messages.Genres.GENRE_BOWLING,
e[M.SKUGenres.BOXING]=O.Messages.Genres.GENRE_BOXING,e[M.SKUGenres.FOOTBALL]=O.Messages.Genres.GENRE_FOOTBALL,e[M.SKUGenres.GOLF]=O.Messages.Genres.GENRE_GOLF,e[M.SKUGenres.HOCKEY]=O.Messages.Genres.GENRE_HOCKEY,e[M.SKUGenres.SKATEBOARDING_SKATING]=O.Messages.Genres.GENRE_SKATEBOARDING_SKATING,e[M.SKUGenres.SNOWBOARDING_SKIING]=O.Messages.Genres.GENRE_SNOWBOARDING_SKIING,e[M.SKUGenres.SOCCER]=O.Messages.Genres.GENRE_SOCCER,e[M.SKUGenres.TRACK_FIELD]=O.Messages.Genres.GENRE_TRACK_FIELD,e[M.SKUGenres.SURFING_WAKEBOARDING]=O.Messages.Genres.GENRE_SURFING_WAKEBOARDING,e[M.SKUGenres.WRESTLING]=O.Messages.Genres.GENRE_WRESTLING,e[M.SKUGenres.STRATEGY]=O.Messages.Genres.GENRE_STRATEGY,e[M.SKUGenres.FOUR_X]=O.Messages.Genres.GENRE_FOUR_X,e[M.SKUGenres.ARTILLERY]=O.Messages.Genres.GENRE_ARTILLERY,e[M.SKUGenres.RTS]=O.Messages.Genres.GENRE_RTS,e[M.SKUGenres.TOWER_DEFENSE]=O.Messages.Genres.GENRE_TOWER_DEFENSE,e[M.SKUGenres.TURN_BASED_STRATEGY]=O.Messages.Genres.GENRE_TURN_BASED_STRATEGY,
e[M.SKUGenres.WARGAME]=O.Messages.Genres.GENRE_WARGAME,e[M.SKUGenres.MOBA]=O.Messages.Genres.GENRE_MOBA,e[M.SKUGenres.FIGHTING]=O.Messages.Genres.GENRE_FIGHTING,e[M.SKUGenres.PUZZLE]=O.Messages.Genres.GENRE_PUZZLE,e[M.SKUGenres.CARD_GAME]=O.Messages.Genres.GENRE_CARD_GAME,e[M.SKUGenres.EDUCATION]=O.Messages.Genres.GENRE_EDUCATION,e[M.SKUGenres.FITNESS]=O.Messages.Genres.GENRE_FITNESS,e[M.SKUGenres.GAMBLING]=O.Messages.Genres.GENRE_GAMBLING,e[M.SKUGenres.MUSIC_RHYTHM]=O.Messages.Genres.GENRE_MUSIC_RHYTHM,e[M.SKUGenres.PARTY_MINI_GAME]=O.Messages.Genres.GENRE_PARTY_MINI_GAME,e[M.SKUGenres.PINBALL]=O.Messages.Genres.GENRE_PINBALL,e[M.SKUGenres.TRIVIA_BOARD_GAME]=O.Messages.Genres.GENRE_TRIVIA_BOARD_GAME,e},p=Object.keys(M.SKUGenres).sort(),L=function(e){return null!=(null==e?void 0:e.genres)?e.genres:[]},T=function(e){!function(e,s){e.prototype=Object.create(s.prototype);e.prototype.constructor=e;I(e,s)}(s,e);function s(){
for(var s,r=arguments.length,n=new Array(r),t=0;t<r;t++)n[t]=arguments[t];(s=e.call.apply(e,[this].concat(n))||this).state={hasError:!1,hasSubmitted:!1,hasUnsavedChanges:!1,isSubmitting:!1,selectedGenres:L(s.props.sku)};s.handleCheckboxChange=function(e,r){if(null!=r){var n=M.SKUGenres[r];s.setState((function(e){var s=e.selectedGenres;return s.includes(n)?{selectedGenres:s.filter((function(e){return e!==n}))}:{selectedGenres:s.concat(n)}}),s.handleFormChange)}};s.handleFormChange=function(){s.state.hasUnsavedChanges||s.setState({hasUnsavedChanges:!0})};s.handleFormReset=function(){s.setState({hasUnsavedChanges:!1,selectedGenres:L(s.props.sku)})};s.handleFormSubmit=function(){var e=s.props.match.params,r=e.id,n=e.skuId,t={genres:s.state.selectedGenres};a.updateSku(r,n,t).then((function(){s.setState({isSubmitting:!1,hasError:!1,hasSubmitted:!0,hasUnsavedChanges:!1})})).catch((function(){s.setState({isSubmitting:!1,hasError:!0,hasSubmitted:!1})}))};s.renderFormStatus=function(){
var e=s.state,r=e.hasError,n=e.hasSubmitted;return r?U(S.default,{type:S.default.Types.ERROR},void 0,O.Messages.Alerts.ERROR):n?U(S.default,{type:S.default.Types.SUCCESS},void 0,O.Messages.Alerts.SUCCESS_CHANGES_SAVED):null};s.renderGenresCheckboxes=function(){var e=s.state.selectedGenres,r=g();return p.map((function(n){var t,G=M.SKUGenres[n];return U(A.GridChild,{columnSpread:3,columnSpreadMedium:4,columnSpreadSmallMedium:6,columnSpreadSmall:6,columnSpreadExtraSmall:12},n,U(l.default,{onChange:s.handleCheckboxChange,value:e.includes(G),name:n,type:l.default.Types.INVERTED},void 0,null!==(t=r[G])&&void 0!==t?t:n))}))};return s}s.prototype.render=function(){var e=this.state,s=e.hasUnsavedChanges,r=e.isSubmitting;return U(E.default,{onChange:this.handleFormChange,onSubmit:this.handleFormSubmit},void 0,U(R.default,{},void 0,U(o.default,{},void 0,O.Messages.Genres.HEADING),U(_.default,{isFlush:!0},void 0,O.Messages.Genres.SUBHEADING),this.renderFormStatus()),U(R.default,{isFlush:!0
},void 0,U(u.default,{bottomMargin:u.default.BottomMarginSizes.LARGE},void 0,O.Messages.Genres.AVAILABLE_GENRES_HEADING),U(A.default,{},void 0,U(A.GridSection,{},void 0,this.renderGenresCheckboxes()))),U(i.default,{isVisible:s,onReset:this.handleFormReset,submitting:r}))};return s}(t.Component);T.displayName="SkuGenres";var K=G.default.connectStores([N.default],(function(e){return{sku:N.default.getSku(e.match.params.skuId)}}))(T);s.default=K},31055:(e,s,r)=>{Object.defineProperty(s,"__esModule",{value:!0});s.default=void 0;var n=R(r(67294)),t=S(r(94184)),G=R(r(34704)),a=S(r(49839)),E=["className"];function S(e){return e&&e.__esModule?e:{default:e}}function o(e){if("function"!=typeof WeakMap)return null;var s=new WeakMap,r=new WeakMap;return(o=function(e){return e?r:s})(e)}function R(e,s){if(!s&&e&&e.__esModule)return e;if(null===e||"object"!=typeof e&&"function"!=typeof e)return{default:e};var r=o(s);if(r&&r.has(e))return r.get(e)
;var n={},t=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var G in e)if("default"!==G&&Object.prototype.hasOwnProperty.call(e,G)){var a=t?Object.getOwnPropertyDescriptor(e,G):null;a&&(a.get||a.set)?Object.defineProperty(n,G,a):n[G]=e[G]}n.default=e;r&&r.set(e,n);return n}function u(){u=Object.assign||function(e){for(var s=1;s<arguments.length;s++){var r=arguments[s];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e};return u.apply(this,arguments)}function _(e,s){_=Object.setPrototypeOf||function(e,s){e.__proto__=s;return e};return _(e,s)}var i=function(e){!function(e,s){e.prototype=Object.create(s.prototype);e.prototype.constructor=e;_(e,s)}(s,e);function s(){return e.apply(this,arguments)||this}s.prototype.render=function(){var e=this.props,s=e.className,r=function(e,s){if(null==e)return{};var r,n,t={},G=Object.keys(e);for(n=0;n<G.length;n++){r=G[n];s.indexOf(r)>=0||(t[r]=e[r])}return t}(e,E);return n.createElement(G.default,u({},r,{
className:(0,t.default)(a.default.formStatusAlert,s)}))};return s}(n.Component);s.default=i;i.displayName="FormStatusAlert";i.Types=G.AlertTypes}}]);
//# sourceMappingURL=9234542774e84a91658e.js.map