"use strict";(this.webpackChunkdiscord_app=this.webpackChunkdiscord_app||[]).push([[90370],{990370:(t,e,n)=>{n.r(e);n.d(e,{default:()=>P});var r=n(441143),i=n.n(r);function a(t,e){(null==e||e>t.length)&&(e=t.length);for(var n=0,r=new Array(e);n<e;n++)r[n]=t[n];return r}function o(t,e){return function(t){if(Array.isArray(t))return t}(t)||function(t,e){var n=null==t?null:"undefined"!=typeof Symbol&&t[Symbol.iterator]||t["@@iterator"];if(null!=n){var r,i,a=[],o=!0,s=!1;try{for(n=n.call(t);!(o=(r=n.next()).done);o=!0){a.push(r.value);if(e&&a.length===e)break}}catch(t){s=!0;i=t}finally{try{o||null==n.return||n.return()}finally{if(s)throw i}}return a}}(t,e)||function(t,e){if(!t)return;if("string"==typeof t)return a(t,e);var n=Object.prototype.toString.call(t).slice(8,-1);"Object"===n&&t.constructor&&(n=t.constructor.name);if("Map"===n||"Set"===n)return Array.from(n);if("Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return a(t,e)}(t,e)||function(){
throw new TypeError("Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}var s=function(){function t(e,n,r,i){!function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,t);var a=o(function(t,e,n){var r=Math.sqrt(n),i=Math.ceil(r);return[i,i*t,i*e]}(r,i,e.frames),3),s=a[0],u=a[1],c=a[2];this.key=n;this.canvas=function(t,e){if("function"==typeof OffscreenCanvas)return new OffscreenCanvas(t,e);var n=document.createElement("canvas");n.width=t;n.height=e;return n}(u,c);this.context=this.canvas.getContext("2d");this.cells=s;this.native=e;this.renderedFrames=new Set;this.frameWidth=r;this.frameHeight=i;this.frameRate=e.fps;this.frameCount=e.frames;if(null==this.context)throw new Error("couldn't create 2d canvas context.")}var e=t.prototype;e.drawInto=function(t,e,n,r){e%=this.frameCount;this.requireFrame(e)
;var i=o(u(e,this.frameWidth,this.frameHeight,this.cells),4),a=i[0],s=i[1],c=i[2],l=i[3];t.drawImage(this.canvas,a,s,c,l,0,0,n,r)};e.drop=function(){var t;null===(t=this.native)||void 0===t||t.drop();this.native=null};e.requireFrame=function(t){if(null!=this.native){if(!this.renderedFrames.has(t)){this.paint(t);this.renderedFrames.add(t)}this.renderedFrames.size===this.frameCount&&this.drop()}};e.paint=function(t){if(null!=this.native){var e,n=this.native.get_bgra(t,this.frameWidth,this.frameHeight),r=new ImageData(n,this.frameWidth,this.frameHeight),i=o(u(t,this.frameWidth,this.frameHeight,this.cells),4),a=i[0],s=i[1],c=i[2],l=i[3];null===(e=this.context)||void 0===e||e.putImageData(r,a,s,0,0,c,l)}};return t}();function u(t,e,n,r){return[Math.floor(t/r)*e,t%r*n,e,n]}var c=n(936901);function l(t,e,n,r,i,a,o){try{var s=t[a](o),u=s.value}catch(t){n(t);return}s.done?e(u):Promise.resolve(u).then(r,i)}function h(t){return function(){var e=this,n=arguments;return new Promise((function(r,i){
var a=t.apply(e,n);function o(t){l(a,r,i,o,s,"next",t)}function s(t){l(a,r,i,o,s,"throw",t)}o(void 0)}))}}function f(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1;r.configurable=!0;"value"in r&&(r.writable=!0);Object.defineProperty(t,r.key,r)}}var m,d,v,p,y,w,b,g,k,A=function(t,e){var n,r,i,a,o={label:0,sent:function(){if(1&i[0])throw i[1];return i[1]},trys:[],ops:[]};return a={next:s(0),throw:s(1),return:s(2)},"function"==typeof Symbol&&(a[Symbol.iterator]=function(){return this}),a;function s(a){return function(s){return function(a){if(n)throw new TypeError("Generator is already executing.");for(;o;)try{if(n=1,r&&(i=2&a[0]?r.return:a[0]?r.throw||((i=r.return)&&i.call(r),0):r.next)&&!(i=i.call(r,a[1])).done)return i;(r=0,i)&&(a=[2&a[0],i.value]);switch(a[0]){case 0:case 1:i=a;break;case 4:o.label++;return{value:a[1],done:!1};case 5:o.label++;r=a[1];a=[0];continue;case 7:a=o.ops.pop();o.trys.pop();continue;default:if(!(i=o.trys,
i=i.length>0&&i[i.length-1])&&(6===a[0]||2===a[0])){o=0;continue}if(3===a[0]&&(!i||a[1]>i[0]&&a[1]<i[3])){o.label=a[1];break}if(6===a[0]&&o.label<i[1]){o.label=i[1];i=a;break}if(i&&o.label<i[2]){o.label=i[2];o.ops.push(a);break}i[2]&&o.ops.pop();o.trys.pop();continue}a=e.call(t,o)}catch(t){a=[6,t];r=0}finally{n=i=0}if(5&a[0])throw a[1];return{value:a[0]?a[1]:void 0,done:!0}}([a,s])}}},F=320,C=(0,c.G)(h((function(){var t;return A(this,(function(e){switch(e.label){case 0:return[4,n.e(73070).then(n.bind(n,973070))];case 1:return[4,e.sent().default()];case 2:t=e.sent();v=t.cwrap("lottie_create","number",["string"]);p=t._lottie_destroy;y=t._lottie_draw_into_bgra;w=t._lottie_draw_into_rgba;b=t._lottie_frame_count;g=t._lottie_frame_rate;k=t._memory_create;m=t;d=k(409600);return[2]}}))})));function I(t,e){return new Uint8ClampedArray(m.HEAPU8.buffer,d,t*e*4)}var x=function(){function t(e){!function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,t)
;this.native=v(e);if(0===this.native)throw new Error("couldn't create wasm lottie. potentially bad json.")}var e=t.prototype;e.get_bgra=function(t,e,n){i()(e<=F,"width exceeds static allocation.");i()(n<=F,"height exceeds static allocation.");y(this.native,d,t,e,n);return I(e,n)};e.get_rgba=function(t,e,n){i()(e<=F,"width exceeds static allocation.");i()(n<=F,"height exceeds static allocation.");w(this.native,d,t,e,n);return I(e,n)};e.drop=function(){p(this.native)};!function(t,e,n){e&&f(t.prototype,e);n&&f(t,n)}(t,[{key:"fps",get:function(){return g(this.native)}},{key:"frames",get:function(){return b(this.native)}}]);return t}();function _(t,e,n,r,i,a,o){try{var s=t[a](o),u=s.value}catch(t){n(t);return}s.done?e(u):Promise.resolve(u).then(r,i)}function E(t){return function(){var e=this,n=arguments;return new Promise((function(r,i){var a=t.apply(e,n);function o(t){_(a,r,i,o,s,"next",t)}function s(t){_(a,r,i,o,s,"throw",t)}o(void 0)}))}}var T=function(t,e){var n,r,i,a,o={label:0,
sent:function(){if(1&i[0])throw i[1];return i[1]},trys:[],ops:[]};return a={next:s(0),throw:s(1),return:s(2)},"function"==typeof Symbol&&(a[Symbol.iterator]=function(){return this}),a;function s(a){return function(s){return function(a){if(n)throw new TypeError("Generator is already executing.");for(;o;)try{if(n=1,r&&(i=2&a[0]?r.return:a[0]?r.throw||((i=r.return)&&i.call(r),0):r.next)&&!(i=i.call(r,a[1])).done)return i;(r=0,i)&&(a=[2&a[0],i.value]);switch(a[0]){case 0:case 1:i=a;break;case 4:o.label++;return{value:a[1],done:!1};case 5:o.label++;r=a[1];a=[0];continue;case 7:a=o.ops.pop();o.trys.pop();continue;default:if(!(i=o.trys,i=i.length>0&&i[i.length-1])&&(6===a[0]||2===a[0])){o=0;continue}if(3===a[0]&&(!i||a[1]>i[0]&&a[1]<i[3])){o.label=a[1];break}if(6===a[0]&&o.label<i[1]){o.label=i[1];i=a;break}if(i&&o.label<i[2]){o.label=i[2];o.ops.push(a);break}i[2]&&o.ops.pop();o.trys.pop();continue}a=e.call(t,o)}catch(t){a=[6,t];r=0}finally{n=i=0}if(5&a[0])throw a[1];return{
value:a[0]?a[1]:void 0,done:!0}}([a,s])}}};function q(t,e,n,r,i){return S.apply(this,arguments)}function S(){return(S=E((function(t,e,n,r,i){var a,o,u;return T(this,(function(c){switch(c.label){case 0:return null!=(a=i)?[3,3]:[4,fetch(r)];case 1:if(!(o=c.sent()).ok)throw new Error("Error fetching sticker at ".concat(r));return[4,o.text()];case 2:a=c.sent();c.label=3;case 3:return null==a?[2,null]:[4,C()];case 4:c.sent();u=new x(a);return[2,new s(u,t,e,n)]}}))}))).apply(this,arguments)}const O=new(function(){function t(){!function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,t);this.entries=[];this.referenceCounts=new Map}var e=t.prototype;e.create=function(t,e,n,r,i){var a=!(arguments.length>5&&void 0!==arguments[5])||arguments[5],o=this;return this.getCached(t).then((function(s){var u;o.referenceCounts.set(t,(null!==(u=o.referenceCounts.get(t))&&void 0!==u?u:0)+1);if(s)return s;var c={key:t,promise:q(t,e,n,r,i)};if(a){o.entries.push(c)
;c.promise.then((function(e){null==e&&o.removeEntry(t);return e})).catch((function(e){return o.removeEntry(t)}));o.entries.length>50&&o.removeEntryAt(0)}return c.promise}))};e.drop=function(t){this.removeEntry(t)};e.getCached=function(t){var e=this,n=this.entries.findIndex((function(e){return e.key===t}));if(n>=0){var r=this.entries[n];this.entries.splice(n,1);this.entries.push(r);return r.promise.then((function(t){null==t&&e.removeEntryAt(n);return t}))}return Promise.resolve(null)};e.removeEntry=function(t){var e=this.entries.findIndex((function(e){return e.key===t}));if(!(e>=0))return null;this.removeEntryAt(e)};e.removeEntryAt=function(t){var e=this.entries[t],n=this.referenceCounts.get(e.key);if(null!=n&&n>1){this.referenceCounts.set(e.key,n-1);return null}this.entries.splice(t,1);this.referenceCounts.delete(e.key);e.promise.then((function(t){return null==t?void 0:t.drop()}));return e};return t}())
;var D="undefined"!=typeof WorkerGlobalScope&&self instanceof WorkerGlobalScope,P=function(){function t(e){var n=e.canvas,r=e.id,a=e.assetUrl,o=e.assetData,s=e.isVisible,u=e.shouldAnimate,c=e.onInitialDraw,l=e.onError,h=this;!function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,t);this.animation=null;this.onInitialAnimationTick=function(t){h.requestAnimationFrameId=null;if((performance.now()-t<30||D)&&h.draw(0)){var e,n;h.resumeAnimation();null===(n=(e=h).onInitialDraw)||void 0===n||n.call(e);h.hasInitialFrame=!0}h.scheduleOrCancelTick()};this.onAnimationTick=function(t){h.requestAnimationFrameId=null;var e=performance.now(),n=(D?e:t)-h.currentFrameTime,r=Math.floor(n/h.frameDuration);if(r>0){if(e-t<12||D){h.draw(h.currentFrame);h.currentFrame+=r}h.currentFrameTime+=r*h.frameDuration}h.scheduleOrCancelTick()};var f=n.getContext("2d");i()(null!=f,"couldn't get canvas 2d context.");this.canvas=n;this.canvasContext=f;this.animation=null
;this.dropped=!1;this.currentFrame=0;this.currentFrameTime=0;this.frameDuration=1e3;this.animate=u;this.visible=s;this.requestAnimationFrameId=null;this.hasInitialFrame=!1;this.onInitialDraw=c;this.onError=l;this.key="".concat(r,":").concat(n.width,":").concat(n.height);O.create(this.key,n.width,n.height,a,o).then((function(t){if(null!=t)if(h.dropped)O.drop(h.key);else{h.animation=t;h.frameDuration=1e3/t.frameRate;h.scheduleOrCancelTick()}})).catch((function(t){null==l||l()}))}var e=t.prototype;e.setState=function(t,e){if(null!=e){t||e===this.currentFrame||this.draw(e);this.currentFrame=e}t&&!this.animate&&this.resumeAnimation();this.animate=t;this.scheduleOrCancelTick()};e.setVisibility=function(t){var e=this.visible;this.visible=t;this.visible&&!e&&this.resumeAnimation();this.scheduleOrCancelTick()};e.resumeAnimation=function(){this.currentFrameTime=performance.now()};e.clear=function(){this.canvasContext.clearRect(0,0,this.canvas.width,this.canvas.height)};e.draw=function(t){
if(null!=this.animation){this.clear();this.animation.drawInto(this.canvasContext,t,this.canvas.width,this.canvas.height);return!0}return!1};e.drop=function(){this.animate=!1;this.scheduleOrCancelTick();O.drop(this.key);this.animation=null;this.dropped=!0};e.scheduleOrCancelTick=function(){this.dropped||(this.hasInitialFrame?this.requestAnimationFrame(this.animate&&this.visible?this.onAnimationTick:null):this.requestAnimationFrame(this.onInitialAnimationTick))};e.requestAnimationFrame=function(t){null!=t&&null==this.requestAnimationFrameId&&(this.requestAnimationFrameId=requestAnimationFrame(t));if(null!=t&&null!=this.requestAnimationFrameId){cancelAnimationFrame(this.requestAnimationFrameId);this.requestAnimationFrameId=requestAnimationFrame(t)}if(null==t&&null!=this.requestAnimationFrameId){cancelAnimationFrame(this.requestAnimationFrameId);this.requestAnimationFrameId=null}};return t}()}}]);
//# sourceMappingURL=875624f61aec0ee84d44.js.map