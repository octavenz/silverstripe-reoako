/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/js/admin/admin.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./node_modules/@octavenz/reoako/dist/reoako.mjs":
/*!*******************************************************!*\
  !*** ./node_modules/@octavenz/reoako/dist/reoako.mjs ***!
  \*******************************************************/
/*! exports provided: default */
/***/ (function(__webpack_module__, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\nfunction t(){return(t=Object.assign||function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var i in n)Object.prototype.hasOwnProperty.call(n,i)&&(t[i]=n[i])}return t}).apply(this,arguments)}function e(t){return(e=Object.setPrototypeOf?Object.getPrototypeOf:function(t){return t.__proto__||Object.getPrototypeOf(t)})(t)}function n(t,e){return(n=Object.setPrototypeOf||function(t,e){return t.__proto__=e,t})(t,e)}function i(){if(\"undefined\"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if(\"function\"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],function(){})),!0}catch(t){return!1}}function o(t,e,a){return(o=i()?Reflect.construct:function(t,e,i){var o=[null];o.push.apply(o,e);var a=new(Function.bind.apply(t,o));return i&&n(a,i.prototype),a}).apply(null,arguments)}function a(t){var i=\"function\"==typeof Map?new Map:void 0;return(a=function(t){if(null===t||-1===Function.toString.call(t).indexOf(\"[native code]\"))return t;if(\"function\"!=typeof t)throw new TypeError(\"Super expression must either be null or a function\");if(void 0!==i){if(i.has(t))return i.get(t);i.set(t,a)}function a(){return o(t,arguments,e(this).constructor)}return a.prototype=Object.create(t.prototype,{constructor:{value:a,enumerable:!1,writable:!0,configurable:!0}}),n(a,t)})(t)}var r,s={container:\"reoako-dialog\",inner:\"reoako-dialog__inner\",actions:\"reoako-dialog__actions\",content:\"reoako-dialog__content\",translation:\"reoako-dialog__translation\",translationText:\"reoako-dialog__translation-text\",translationAudio:\"reoako-dialog__translation-audio\",entry:\"reoako-dialog__entry\",function:\"reoako-dialog__function\",headword:\"reoako-dialog__headword\",dismiss:\"reoako-dialog__dismiss\",reoako_link:\"reoako-dialog__reoako_link\",tail:\"reoako-dialog__tail\",open:\"reoako-dialog--open\",opening:\"reoako-dialog--opening\",closed:\"reoako-dialog--closed\",closing:\"reoako-dialog--closing\",above:\"reoako-dialog--above\",below:\"reoako-dialog--below\"},l=s,c=s,d=function(){function t(t,e){var n=this,i=t.id,o=t.node,a=t.translation;this.container=void 0,this.closeButton=void 0,this.audioButton=void 0,this.rrLink=void 0,this.tailEl=void 0,this.audioEl=void 0,this.tabSequence=void 0,this.focusPointer=0,this.id=void 0,this.triggerNode=void 0,this.translation=void 0,this.emitter=void 0,this.isOpen=!1,this.registerEventHandlers=function(){var t,e;null==(t=n.closeButton)||t.addEventListener(\"click\",function(){return n.hide()}),null==(e=n.audioButton)||e.addEventListener(\"click\",function(){return n.playAudio()}),n.emitter.on(\"global:resize\",function(){n.isOpen&&n.place()}),n.emitter.on(\"global:esc\",function(){n.hide()}),n.emitter.on(\"app:close-all\",function(){n.hide()}),n.emitter.on(\"global:click\",function(t){n.isOpen&&t!==n.triggerNode&&t!==n.container&&(n.container.contains(t)||n.hide(!1))})},this.playAudio=function(){var t;n.audioEl&&(null==(t=n.audioEl)||t.play(),n.emitter.emit(\"item:play\",n.translation))},this.handleTabKeyFocus=function(t){var e;if(9===t.keyCode){t.preventDefault();var i=n.tabSequence.length-1,o=n.focusPointer+(t.shiftKey?-1:1);o>i?o=0:o<0&&(o=i),n.focusPointer=o,null==(e=n.tabSequence[o])||e.focus()}},this.initFocusTrap=function(){var t;n.focusPointer=0,null==(t=n.tabSequence[0])||t.focus(),document.addEventListener(\"keydown\",n.handleTabKeyFocus)},this.removeFocusTrap=function(t){void 0===t&&(t=!0),document.removeEventListener(\"keydown\",n.handleTabKeyFocus),t&&n.triggerNode.focus()},this.triggerNode=o,this.id=i,this.translation=a,this.emitter=e,this.container=this.constructContainer(),this.closeButton=this.container.querySelector(\".\"+c.dismiss),this.audioButton=this.container.querySelector(\".\"+c.translationAudio+\" button\"),this.audioEl=this.container.querySelector(\".\"+c.translationAudio+\" audio\"),this.rrLink=this.container.querySelector(\".\"+c.reoako_link),this.tailEl=this.container.querySelector(\".\"+c.tail),this.tabSequence=this.audioButton?[this.triggerNode,this.audioButton,this.closeButton,this.rrLink]:[this.triggerNode,this.closeButton,this.rrLink],this.registerEventHandlers()}var e=t.prototype;return e.constructContainer=function(){var t,e=document.createElement(\"div\");e.classList.add(c.container),e.innerHTML='\\n        <div class=\"'+l.inner+'\">\\n            <div class=\"'+l.content+'\">\\n                <div class=\"'+l.translation+'\">\\n                    <span class=\"'+l.translationText+'\">\\n                        '+(t=this.translation).mi+\"\\n                    </span>\\n\\n                    \"+(t.audio_url?'\\n                        <span class=\"'+l.translationAudio+'\">\\n                            <button \\n                                title=\"Listen to pronounciation\"\\n                                aria-label=\"Listen to pronounciation\"\\n                            >\\n                                <svg fill=\"none\" viewBox=\"0 0 29 29\">\\n                                   <path fill=\"#000\" fill-rule=\"evenodd\" d=\"M9 18.465l5.445 3.63A1 1 0 0016 21.263V7.737a1 1 0 00-1.555-.832L9 10.535v7.93zm4.89-12.392L8 10H5a1 1 0 00-1 1v7a1 1 0 001 1h3l5.89 3.927c1.33.886 3.11-.067 3.11-1.664V7.737c0-1.597-1.78-2.55-3.11-1.664zM5 11h3v7H5v-7zm14.592 1.824a.5.5 0 10-.547.838.999.999 0 010 1.676.5.5 0 00.547.838 1.999 1.999 0 000-3.352zm1.23-2.212a.5.5 0 01.7-.096A4.993 4.993 0 0123.5 14.5a4.993 4.993 0 01-1.981 3.986.5.5 0 01-.604-.797A3.993 3.993 0 0022.5 14.5c0-1.3-.62-2.456-1.583-3.187a.5.5 0 01-.096-.701zm2.602-2.418a.5.5 0 00-.616.788A6.987 6.987 0 0125.5 14.5a6.987 6.987 0 01-2.695 5.52.5.5 0 00.616.788A7.987 7.987 0 0026.5 14.5a7.987 7.987 0 00-3.077-6.306z\" clip-rule=\"evenodd\"/>\\n                                </svg>\\n                            </button>\\n                            <audio src=\\''+t.audio_url+\"' tabindex=\\\"-1\\\" hidden aria-hidden='true'></audio>\\n                        </span>\\n                    \":\"\")+'\\n                    \\n                    <span class=\"'+l.function+'\">\\n                        '+t.function+'\\n                    </span>\\n                </div>\\n\\n\\n                <div class=\"'+l.entry+'\">\\n                    <span class=\"'+l.headword+'\">'+t.en+'</span>\\n                </div>\\n            </div>\\n\\n            <div class=\"'+l.actions+'\">\\n                <span>\\n                    <button \\n                        class=\"'+l.dismiss+'\" \\n                        title=\"close dialog\" \\n                        aria-label=\\'close dialog\\'\\n                    >\\n                        <svg fill=\"none\" viewBox=\"0 0 31 31\" alt=\"\">\\n                            <path fill=\"#000\" d=\"M11.01 10.303a.5.5 0 10-.707.707l4.596 4.597-4.596 4.596a.5.5 0 10.707.707l4.597-4.596 4.596 4.596a.5.5 0 10.707-.707l-4.596-4.596 4.596-4.597a.5.5 0 00-.707-.707L15.607 14.9l-4.597-4.596z\" />\\n                        </svg>\\n                    </button>\\n                </span>\\n\\n                <a \\n                    class=\"'+l.reoako_link+'\"\\n                    href=\"https://reoako.nz\"\\n                    title=\"Created with Reoako. Visit reoako.nz\" \\n                    aria-label=\\'Created with Reoako. Visit reoako.nz\\'\\n                    target=\"_blank\"\\n                    rel=\"noreferrer noopener\"\\n                >\\n                    <svg fill=\"none\" viewBox=\"0 0 31 31\" width=\\'31\\' height=\\'31\\'>\\n                        <path fill=\"#DB2433\" fill-rule=\"evenodd\" d=\"M8 9.31C8 8.587 8.587 8 9.31 8h13.1c.724 0 1.31.587 1.31 1.31v11.135a1.31 1.31 0 01-1.31 1.31h-4.785l-1.38 1.593a.51.51 0 01-.77 0l-1.38-1.593H9.31A1.31 1.31 0 018 20.445V9.31zm6.77 8.879h-1.553v-7.132h2.9c1.668 0 2.633.912 2.633 2.33 0 .975-.463 1.681-1.3 2.03l1.562 2.772h-1.715l-1.393-2.528h-1.133v2.528zm0-5.9v2.16h1.055c.89 0 1.325-.356 1.325-1.063 0-.71-.435-1.096-1.332-1.096h-1.047z\" clip-rule=\"evenodd\" />\\n                    </svg>\\n                </a>\\n            </div>\\n        </div>\\n\\n        <div class=\"'+l.tail+'\"></div>\\n    ',e.setAttribute(\"role\",\"dialog\"),e.setAttribute(\"aria-hidden\",\"true\");var n=\"Translation of '\"+this.translation.mi+\"'\";return e.setAttribute(\"title\",n),e.setAttribute(\"aria-label\",n),this.triggerNode.appendChild(e),e},e.place=function(){this.container.classList.remove(c.above,c.below);var t=this.container.offsetWidth,e=this.container.offsetHeight,n=this.triggerNode.getBoundingClientRect(),i=n.width/2,o=n.top>e+11+10;this.container.classList.add(c[o?\"above\":\"below\"]),this.container.style.top=(o?-1*(e+11):n.height+11)+\"px\";var a=document.documentElement.clientWidth/2,r=i-t/2,s=document.documentElement.clientWidth-(t+10)-n.left,l=n.left<a?Math.max(r,-(n.left-10)):Math.min(r,s);if(this.container.style.left=l+\"px\",this.tailEl){var d=Math.max(20,Math.min(t-20,i-l));this.tailEl.style.left=d+\"px\"}},e.show=function(){this.isOpen||(this.isOpen=!0,this.triggerNode.appendChild(this.container),this.triggerNode.classList.add(\"is-active\"),this.place(),this.container.classList.add(c.open),this.initFocusTrap(),this.emitter.emit(\"item:open\",this.translation))},e.hide=function(t){var e=this;void 0===t&&(t=!0),!1!==this.isOpen&&(this.container.classList.add(c.closing),this.container.classList.remove(c.open),this.removeFocusTrap(t),this.emitter.emit(\"item:close\",this.translation),setTimeout(function(){e.container.classList.remove(c.closing),e.triggerNode.classList.remove(\"is-active\"),e.triggerNode.contains(e.container)&&e.triggerNode.removeChild(e.container),e.isOpen=!1},600))},e.toggle=function(){this.isOpen?this.hide():this.show()},t}(),u=function(){function t(t,e){var n=this;this.node=void 0,this.emitter=void 0,this.dialog=void 0,this.translation=void 0,this.toggleDialog=function(t){t.target===n.node&&(t.preventDefault(),n.dialog.toggle())},this.registerEvents=function(){n.node.addEventListener(\"click\",n.toggleDialog),n.node.addEventListener(\"keydown\",function(t){32!==t.keyCode&&13!==t.keyCode||n.toggleDialog(t)})},this.node=t.node,this.translation=t.translation,this.emitter=e,this.node.classList.add(\"reoako-trigger\"),this.dialog=new d(t,e),this.registerEvents(),this.makeAccessable(),this.emitter.emit(\"item:loaded\",t.translation)}return t.prototype.makeAccessable=function(){var t=\"Show translation\";this.node.setAttribute(\"tabindex\",\"0\"),this.node.setAttribute(\"role\",\"button\"),this.node.setAttribute(\"title\",t),this.node.setAttribute(\"aria-label\",t),this.node.setAttribute(\"lang\",\"mi\")},t}(),h=function(t,e){var n=String(t);n.startsWith(\"global\")||(console.group(\"ReoakoEvent - \"+n),console.log(e),console.groupEnd())},f=function(){function e(t,e){var n,i=this;this.client=void 0,this.reoakoNodes=void 0,this.reoakoInstances=void 0,this.emitter=void 0,this.reoakoNodes=[],this.reoakoInstances=[],this.emitter=t,this.client=e,n=function(){var t=i.queryReoakoNodesFromDOM();if(0!==t.length){var e=t.map(function(t){return t.id});i.validateNodesFromAPI(e).then(function(e){void 0===e&&(e=[]),i.reoakoNodes=i.mergeNodesAndTranslations(t,e),i.reoakoInstances=i.initialiseReoakoNodes()}).catch(function(t){i.emitter.emit(\"app:error\",t.message)}),i.registerSharedEvents(),i.emitter.emit(\"app:loaded\",e.join(\",\"))}},\"loading\"!==document.readyState?n():document.addEventListener(\"DOMContentLoaded\",n)}var n=e.prototype;return n.registerSharedEvents=function(){var t,e,n,i,o=this;window.addEventListener(\"resize\",function(){requestAnimationFrame(function(){o.emitter.emit(\"global:resize\")})}),window.addEventListener(\"keydown\",(t=function(t){27===t.keyCode&&o.emitter.emit(\"global:esc\")},void 0===e&&(e=100),void 0===n&&(n=!1),function(){var o=[].slice.call(arguments),a=function(){i=void 0,n||t.apply(void 0,o)},r=n&&!i;clearTimeout(i),i=setTimeout(a,e),r&&t.apply(void 0,o)})),window.document.addEventListener(\"click\",function(t){o.emitter.emit(\"global:click\",t.target)})},n.mergeNodesAndTranslations=function(e,n){var i=this,o=[];return e.forEach(function(e){var a=n.find(function(t){return t.slug===e.id});a?o.push(t({},e,{translation:a})):i.emitter.emit(\"item:invalid\",e.id)}),o},n.queryReoakoNodesFromDOM=function(){var t=Array.from(document.querySelectorAll(\"[data-reoako-id]\")),e=[];return t.forEach(function(t){var n=t.getAttribute(\"data-reoako-id\")||\"\";n&&e.push({id:n,node:t})}),e},n.validateNodesFromAPI=function(t){var e=this;return new Promise(function(n,i){e.client.getTranslations(t.join(\",\")).then(function(t){return n(t)}).catch(function(t){return i(t)})})},n.initialiseReoakoNodes=function(){var t=this;return this.reoakoNodes.map(function(e){return new u(e,t.emitter)})},e}(),v=function(t,e,n){var i=this;this.watchedEvents=[\"item:open\",\"item:play\",\"item:invalid\",\"item:loaded\",\"app:loaded\"],this.emitter=void 0,this.client=void 0,this.trackingCallback=void 0,this.trackFilteredReoakoEvents=function(t,e){-1!==i.watchedEvents.indexOf(t)&&i.trackingCallback(String(t),e)},this.emitter=t,this.client=e,this.trackingCallback=n,this.emitter.on(\"*\",this.trackFilteredReoakoEvents)},p=function(t){var e,i;function o(e){var n;return void 0===e&&(e=\"Unknown api error\"),(n=t.call(this,\"ReoakoApiError: [\"+e+\"]\")||this).name=\"ReoakoApiError\",n}return i=t,(e=o).prototype=Object.create(i.prototype),e.prototype.constructor=e,n(e,i),o}(a(Error)),g=function(){function t(t,e,n){void 0===e&&(e=\"https://api.reoako.nz\"),void 0===n&&(n=\"api/v1\"),this.key=void 0,this.domain=void 0,this.apiBase=void 0,this.key=t,this.domain=e,this.apiBase=n}var e=t.prototype;return e.constructURI=function(t){return this.domain+\"/\"+this.apiBase+\"/\"+t},e.get=function(t){return fetch(this.constructURI(t),{headers:{Accept:\"application/json\",\"Content-Type\":\"application/json\",Authorization:\"Token \"+this.key}}).then(function(t){return Promise.all([Promise.resolve(t),t.json()])}).then(function(t){var e=t[1];if(t[0].ok)return e;throw new p(null==e?void 0:e.message)})},e.getTranslations=function(t){var e=this,n=\"translations/?in=\"+encodeURI(t);return new Promise(function(t,i){e.get(n).then(function(e){t(e.results)}).catch(function(t){return i(t)})})},t}(),m=function(){function e(){}return e.on=function(t,n){return e.emitter.on(t,n)},e.closeAll=function(){return e.emitter.emit(\"app:close-all\")},e.init=function(n){return e.opts=t({},e.defaultOpts,n),e.client=new g(n.apiKey,n.apiDomain),e.analytics=new v(e.emitter,e.client,e.opts.track),n.debug&&e.emitter.on(\"*\",h),new f(e.emitter,e.client)},e}();m.defaultOpts={apiKey:\"\",apiDomain:\"\",debug:!1,track:function(){}},m.opts=m.defaultOpts,m.client=void 0,m.analytics=void 0,m.emitter={all:r=r||new Map,on:function(t,e){var n=r.get(t);n&&n.push(e)||r.set(t,[e])},off:function(t,e){var n=r.get(t);n&&n.splice(n.indexOf(e)>>>0,1)},emit:function(t,e){(r.get(t)||[]).slice().map(function(t){t(e)}),(r.get(\"*\")||[]).slice().map(function(n){n(t,e)})}};/* harmony default export */ __webpack_exports__[\"default\"] = (m);\n\n\n//# sourceURL=webpack:///./node_modules/@octavenz/reoako/dist/reoako.mjs?");

/***/ }),

/***/ "./src/js/admin/admin.js":
/*!*******************************!*\
  !*** ./src/js/admin/admin.js ***!
  \*******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nvar _reoako = _interopRequireDefault(__webpack_require__(/*! @octavenz/reoako */ \"./node_modules/@octavenz/reoako/dist/reoako.mjs\"));\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { \"default\": obj }; }\n\n_reoako[\"default\"].init({\n  apiKey: \"b793e22c938d01952a5137b6b463c13e89d22432\",\n  debug: true,\n  track: function track(type, detail) {\n    // optional. hook into your analytics when events occur\n    if (typeof detail === \"string\") {\n      console.log(type, detail);\n    } else if (\"en\" in detail) {\n      console.log(type, \"\".concat(detail.en, \" | \").concat(detail.mi));\n    }\n  }\n});\n\n//# sourceURL=webpack:///./src/js/admin/admin.js?");

/***/ })

/******/ });