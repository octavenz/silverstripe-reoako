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
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/js/tinymce/tinymce.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/js/tinymce/tinymce.js":
/*!***********************************!*\
  !*** ./src/js/tinymce/tinymce.js ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nfunction _typeof(obj) { \"@babel/helpers - typeof\"; if (typeof Symbol === \"function\" && typeof Symbol.iterator === \"symbol\") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === \"function\" && obj.constructor === Symbol && obj !== Symbol.prototype ? \"symbol\" : typeof obj; }; } return _typeof(obj); }\n\nfunction _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }\n\nfunction _nonIterableSpread() { throw new TypeError(\"Invalid attempt to spread non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.\"); }\n\nfunction _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === \"string\") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === \"Object\" && o.constructor) n = o.constructor.name; if (n === \"Map\" || n === \"Set\") return Array.from(o); if (n === \"Arguments\" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }\n\nfunction _iterableToArray(iter) { if (typeof Symbol !== \"undefined\" && iter[Symbol.iterator] != null || iter[\"@@iterator\"] != null) return Array.from(iter); }\n\nfunction _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }\n\nfunction _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }\n\nfunction _wrapRegExp() { _wrapRegExp = function _wrapRegExp(re, groups) { return new BabelRegExp(re, undefined, groups); }; var _super = RegExp.prototype; var _groups = new WeakMap(); function BabelRegExp(re, flags, groups) { var _this = new RegExp(re, flags); _groups.set(_this, groups || _groups.get(re)); return _setPrototypeOf(_this, BabelRegExp.prototype); } _inherits(BabelRegExp, RegExp); BabelRegExp.prototype.exec = function (str) { var result = _super.exec.call(this, str); if (result) result.groups = buildGroups(result, this); return result; }; BabelRegExp.prototype[Symbol.replace] = function (str, substitution) { if (typeof substitution === \"string\") { var groups = _groups.get(this); return _super[Symbol.replace].call(this, str, substitution.replace(/\\$<([^>]+)>/g, function (_, name) { return \"$\" + groups[name]; })); } else if (typeof substitution === \"function\") { var _this = this; return _super[Symbol.replace].call(this, str, function () { var args = arguments; if (_typeof(args[args.length - 1]) !== \"object\") { args = [].slice.call(args); args.push(buildGroups(args, _this)); } return substitution.apply(this, args); }); } else { return _super[Symbol.replace].call(this, str, substitution); } }; function buildGroups(result, re) { var g = _groups.get(re); return Object.keys(g).reduce(function (groups, name) { groups[name] = result[g[name]]; return groups; }, Object.create(null)); } return _wrapRegExp.apply(this, arguments); }\n\nfunction _inherits(subClass, superClass) { if (typeof superClass !== \"function\" && superClass !== null) { throw new TypeError(\"Super expression must either be null or a function\"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }\n\nfunction _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }\n\n(function () {\n  \"use strict\";\n\n  (function ($) {\n    if (typeof tinymce === \"undefined\") {\n      return;\n    }\n\n    if (typeof tinymce.activeEditor === null) {\n      return;\n    }\n\n    tinymce.PluginManager.add(\"reoako\", function (editor) {\n      editor.ui.registry.addIcon('reoako-icon', '<svg style=\"height: 30px; width: 30px; margin-left: -8px; margin-top: -8px;\">' + '<path fill-rule=\"nonzero\" d=\"M 7.783 9.605 C 7.783 8.606 8.592 7.797 9.591 7.797 L 27.673 7.797 C 28.672 7.797 29.481 8.606 29.481 9.605 L 29.481 24.974 C 29.481 25.973 28.672 26.782 27.673 26.782 L 21.069 26.782 L 19.166 28.977 C 18.882 29.305 18.383 29.305 18.097 28.977 L 16.195 26.782 L 9.591 26.782 C 8.592 26.782 7.783 25.973 7.783 24.974 L 7.783 9.605 Z \" />' + '<path fill=\"white\" fill-rule=\"nonzero\" d=\"M 17.126 21.858 L 14.981 21.858 L 14.981 12.016 L 18.984 12.016 C 21.291 12.016 22.618 13.274 22.618 15.236 C 22.618 16.579 21.981 17.553 20.827 18.035 L 22.98 21.858 L 20.612 21.858 L 18.692 18.37 L 17.126 18.37 L 17.126 21.858 Z\" />' + '<path fill-rule=\"nonzero\" d=\" M 17.126 13.72 L 17.126 16.7 L 18.58 16.7 C 19.811 16.7 20.414 16.209 20.414 15.228 C 20.414 14.254 19.811 13.72 18.571 13.72 L 17.126 13.72 Z\" />' + '</svg>');\n      editor.on('click', function () {\n        var _currentNode$context;\n\n        var mceSelection = editor.selection;\n        var currentNode = $(mceSelection.getEnd());\n\n        if ((currentNode === null || currentNode === void 0 ? void 0 : (_currentNode$context = currentNode.context) === null || _currentNode$context === void 0 ? void 0 : _currentNode$context.nodeName) === \"REOAKO\") {\n          var targetNode = currentNode.closest(\"reoako\");\n          mceSelection.select(targetNode.get(0));\n        }\n      });\n\n      function showDialog() {\n        var url, urlParams, mceSelection, $currentNode, $targetNode, insertElement, currentText;\n        currentText = \"\";\n        mceSelection = editor.selection;\n        $currentNode = $(mceSelection.getEnd()); // target selected embed (if any)\n\n        $targetNode = $currentNode.closest(\"reoako\");\n\n        if ($targetNode.length) {\n          currentText = $targetNode.text();\n\n          if ($targetNode.children().length === 0) {\n            // select and replace text-only target\n            insertElement = function insertElement(elem) {\n              mceSelection.select($targetNode.get(0));\n              mceSelection.setNode(elem);\n            };\n          } else {\n            // replace attributes of complex target\n            insertElement = function insertElement(elem) {\n              mceSelection.select($targetNode.get(0));\n              var $elem = $(elem);\n              $targetNode.attr(\"id\", $elem.attr(\"data-reoako-id\"));\n            };\n          }\n        } else {\n          if (!mceSelection.isCollapsed()) {\n            currentText = mceSelection.getContent({\n              format: \"text\"\n            });\n          } // replace current selection\n\n\n          insertElement = function insertElement(elem) {\n            mceSelection.setNode(elem);\n          };\n        }\n\n        url = \"/reoako-modal/search?search_term=\" + currentText;\n        var instance = editor.windowManager.openUrl({\n          title: \"Reoako Search\",\n          url: url,\n          width: 800,\n          height: 600,\n          editor: editor\n        }, {\n          currentText: currentText\n        });\n        window._activeEditor = editor;\n        window._activeDialog = instance;\n      }\n\n      editor.ui.registry.addButton('reoako-button', {\n        icon: \"reoako-icon\",\n        tooltip: \"Reoako translation dialog\",\n        stateSelector: \"reoako\",\n        // text: 'Reoako',\n        onAction: function onAction() {\n          showDialog();\n        }\n      });\n\n      var shortcode_regex = /*#__PURE__*/_wrapRegExp(/(\\[reoako )(data\\x2Dreoako\\x2Dheadword=(\"(.*?)\")).((data\\x2Dreoako\\x2Did=(\"(.*?)\")).)(data\\x2Dreoako\\x2Dtranslation=(\"(.*?)\"))(\\])/gi, {\n        headword: 4,\n        id: 8,\n        translation: 11\n      });\n\n      var reoako_regex = /*#__PURE__*/_wrapRegExp(/((<reoako ((class=\"(.*?)\").*?(data\\x2Dreoako\\x2Dheadword=\"(.*?)\").*?(data\\x2Dreoako\\x2Did=\"(.*?)\").*?(data\\x2Dreoako\\x2Dtranslation=\"(.*?)\").*?)>)(.*?)(<\\/reoako>))/g, {\n        headword: 7,\n        id: 9,\n        translation: 11\n      });\n\n      function ifShortcode(content) {\n        return content.search(shortcode_regex) !== -1;\n      }\n\n      function replaceShortcodes(content) {\n        var matches = _toConsumableArray(content.matchAll(shortcode_regex));\n\n        matches.forEach(function (match) {\n          // Find all required attributes and rebuild tag\n          if (\"0\" in match) {\n            var str = match[\"0\"];\n            var headword,\n                id,\n                translation = undefined;\n\n            if (match[\"groups\"][\"headword\"]) {\n              headword = match[\"groups\"][\"headword\"];\n            }\n\n            if (match[\"groups\"][\"id\"]) {\n              id = match[\"groups\"][\"id\"];\n            }\n\n            if (match[\"groups\"][\"translation\"]) {\n              translation = match[\"groups\"][\"translation\"];\n            }\n\n            if (headword && id && translation) {\n              var tag = \"<reoako class=\\\"reoako-tinymce\\\" data-reoako-headword=\\\"\".concat(headword, \"\\\" data-reoako-id=\\\"\").concat(id, \"\\\" data-reoako-translation=\\\"\").concat(translation, \"\\\">\").concat(translation, \"</reoako>\");\n              content = content.replace(str, tag);\n            }\n          }\n        });\n        return content;\n      }\n\n      editor.on(\"KeyUp\", function (ed, e) {\n        var _currentNode$context2;\n\n        var evt = e || window.event;\n        var charCode = evt.keyCode || evt.which;\n        var currentNode = $(editor.selection.getEnd());\n        var insideReoako = (currentNode === null || currentNode === void 0 ? void 0 : (_currentNode$context2 = currentNode.context) === null || _currentNode$context2 === void 0 ? void 0 : _currentNode$context2.nodeName) === 'REOAKO'; // 8 = backspace\n        // 32 = space\n        // 37 = left arrow\n        // 39 = right arrow\n        // 38 = up arrow\n        // 40 = down arrow\n        // 46 = delete\n        // Ignore up or down\n\n        if ([38, 40].includes(charCode)) {\n          return;\n        } // auto select reoako word\n\n\n        if (insideReoako && [37, 39].includes(charCode)) {\n          if (currentNode !== currentNode.closest(\"reoako\")) {\n            var _currentNode$context3;\n\n            var targetNode = currentNode.closest(\"reoako\");\n            var cursorPos = editor.selection.getRng().startOffset;\n            var targetLength = currentNode === null || currentNode === void 0 ? void 0 : (_currentNode$context3 = currentNode.context) === null || _currentNode$context3 === void 0 ? void 0 : _currentNode$context3.innerText.length;\n\n            if (cursorPos !== targetLength) {\n              editor.selection.select(targetNode.get(0));\n              evt.preventDefault();\n              return;\n            }\n          }\n        } // Delete the tag if you are inside it and press delete or backspace\n\n\n        if (charCode === 8 && insideReoako || charCode === 46 && insideReoako) {\n          editor.execCommand('insertContent', true, ' ');\n          currentNode.remove();\n          evt.preventDefault();\n          return;\n        }\n\n        if (![37, 39].includes(charCode) && insideReoako) {\n          evt.preventDefault();\n          return;\n        }\n      });\n\n      function restoreShortcodes(content) {\n        var matches = _toConsumableArray(content.matchAll(reoako_regex));\n\n        matches.forEach(function (match) {\n          if (\"0\" in match) {\n            var str = match[\"0\"];\n            var headword,\n                id,\n                translation = undefined;\n\n            if (match[\"groups\"][\"headword\"]) {\n              headword = match[\"groups\"][\"headword\"];\n            }\n\n            if (match[\"groups\"][\"id\"]) {\n              id = match[\"groups\"][\"id\"];\n            }\n\n            if (match[\"groups\"][\"translation\"]) {\n              translation = match[\"groups\"][\"translation\"];\n            }\n\n            if (headword && id && translation) {\n              var tag = \"[reoako data-reoako-headword=\\\"\".concat(headword, \"\\\" data-reoako-id=\\\"\").concat(id, \"\\\" data-reoako-translation=\\\"\").concat(translation, \"\\\"]\");\n              content = content.replace(str, tag);\n            }\n          }\n        });\n        return content;\n      }\n\n      editor.on(\"BeforeSetContent\", function (event) {\n        // No shortcodes in content, return.\n        if (!ifShortcode(event.content)) {\n          return;\n        }\n\n        event.content = replaceShortcodes(event.content);\n      });\n      editor.on(\"PostProcess\", function (event) {\n        if (event.get) {\n          event.content = restoreShortcodes(event.content);\n        }\n      });\n    });\n  })(jQuery);\n}).call(void 0);\n\n//# sourceURL=webpack:///./src/js/tinymce/tinymce.js?");

/***/ })

/******/ });