var pcf_tools_652ac3f36e1e4bca82eb3c1dc44e6fad =
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
/******/ 	return __webpack_require__(__webpack_require__.s = "./PCFCopyTextComponent/index.ts");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./PCFCopyTextComponent/index.ts":
/*!***************************************!*\
  !*** ./PCFCopyTextComponent/index.ts ***!
  \***************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\n\nvar copy = __webpack_require__(/*! copy-to-clipboard */ \"./node_modules/copy-to-clipboard/index.js\");\n\nvar PCFCopyTextComponent =\n/** @class */\nfunction () {\n  /**\r\n   * Empty constructor.\r\n   */\n  function PCFCopyTextComponent() {}\n  /**\r\n   * Used to initialize the control instance. Controls can kick off remote server calls and other initialization actions here.\r\n   * Data-set values are not initialized here, use updateView.\r\n   * @param context The entire property bag available to control via Context Object; It contains values as set up by the customizer mapped to property names defined in the manifest, as well as utility functions.\r\n   * @param notifyOutputChanged A callback method to alert the framework that the control has new outputs ready to be retrieved asynchronously.\r\n   * @param state A piece of data that persists in one session for a single user. Can be set at any point in a controls life cycle by calling 'setControlState' in the Mode interface.\r\n   * @param container If a control is marked control-type='standard', it will receive an empty div element within which it can render its content.\r\n   */\n\n\n  PCFCopyTextComponent.prototype.init = function (context, notifyOutputChanged, state, container) {\n    // get root container before child controls are appended\n    this._rootContainer = this.getRootContainer(container); // Adding the textInput and button created to the container DIV.\n\n    this._container = document.createElement(\"div\"); // Creating the textInput for the control and setting the relevant values.\n\n    if (context.parameters.MultiLine.raw) {\n      this.textInput = document.createElement(\"textarea\");\n    } else {\n      this.textInput = document.createElement(\"input\");\n      this.textInput.setAttribute(\"type\", \"text\");\n\n      this._container.classList.add('single');\n    }\n\n    this.textInput.addEventListener(\"blur\", this.onInputBlur.bind(this));\n    this.textInput.addEventListener(\"change\", this.onInputBlur.bind(this)); //this.configureInputProperties(this.textInput, context.parameters);\n\n    this._container.appendChild(this.textInput);\n\n    this._notifyOutputChanged = notifyOutputChanged;\n    this.button = document.createElement(\"button\"); // Get the localized string from localized string \n\n    this.button.innerHTML = context.resources.getString(\"PCFCopyTextComponent_ButtonLabel\");\n    this.button.addEventListener(\"click\", this.onButtonClick.bind(this)); //this.configureButtonProperties(this.button, context.parameters);\n\n    this._container.appendChild(this.button);\n\n    container.appendChild(this._container);\n  };\n\n  PCFCopyTextComponent.prototype.configureInputProperties = function (input, parameters) {\n    input.placeholder = parameters.Placeholder.raw;\n    input.maxLength = parameters.MaxLength.raw || (input.tagName === 'input' ? 255 : 500);\n    input.readOnly = parameters.ReadOnly.raw;\n    input.classList.add(\"CopyText_Input_Style\");\n    input.style.color = parameters.InputColor.raw;\n    input.style.fontSize = parameters.InputFontSize.raw + 'pt';\n    input.style.fontWeight = parameters.InputFontWeight.raw;\n    input.style.fontFamily = parameters.InputFontFamily.raw;\n    input.style.borderWidth = parameters.InputBorderThickness.raw + 'px';\n    input.style.borderRadius = parameters.InputBorderRadius.raw + 'px';\n    input.style.borderColor = parameters.InputBorderColor.raw;\n    input.style.backgroundColor = parameters.InputBackgroundColor.raw;\n  };\n\n  PCFCopyTextComponent.prototype.configureButtonProperties = function (button, parameters) {\n    button.classList.add(\"CopyText_Button_Style\");\n    button.style.color = parameters.ButtonColor.raw;\n    button.style.fontSize = parameters.ButtonFontSize.raw + 'pt';\n    button.style.fontWeight = parameters.ButtonFontWeight.raw;\n    button.style.fontFamily = parameters.ButtonFontFamily.raw;\n    button.style.borderWidth = parameters.ButtonBorderThickness.raw + 'px';\n    button.style.borderRadius = parameters.ButtonBorderRadius.raw + 'px';\n    button.style.borderColor = parameters.ButtonBorderColor.raw;\n    button.style.backgroundColor = parameters.ButtonBackgroundColor.raw;\n  };\n  /**\r\n       * Button Event handler for the button created as part of this control\r\n       * @param event\r\n       */\n\n\n  PCFCopyTextComponent.prototype.onButtonClick = function (event) {\n    this._notifyOutputChanged();\n\n    copy(this._value.toString());\n  };\n  /**\r\n   * Input Blur Event handler for the input created as part of this control\r\n   * @param event\r\n   */\n\n\n  PCFCopyTextComponent.prototype.onInputBlur = function (event) {\n    this._value = this.textInput.value;\n\n    this._notifyOutputChanged();\n  };\n  /**\r\n   * Get root container which has height set before the child nodes are appended\r\n  */\n\n\n  PCFCopyTextComponent.prototype.getRootContainer = function (container) {\n    var node = container; // lookup the first parent node which has a height set\n\n    while (node && !node.style.height) {\n      node = node.parentNode;\n    }\n\n    return node;\n  };\n  /**\r\n   * Called when any value in the property bag has changed. This includes field values, data-sets, global values such as container height and width, offline status, control metadata values such as label, visible, etc.\r\n   * @param context The entire property bag available to control via Context Object; It contains values as set up by the customizer mapped to names defined in the manifest, as well as utility functions\r\n   */\n\n\n  PCFCopyTextComponent.prototype.updateView = function (context) {\n    // Add code to update control view\n    this._value = context.parameters.Value.raw;\n    var tempValue = this._value != null ? this._value.toString() : \"\";\n    this.textInput.value = tempValue;\n\n    if (context.parameters.Value.error) {\n      this.textInput.classList.add(\"CopyText_Input_Error_Style\");\n    } else {\n      this.textInput.classList.remove(\"CopyText_Input_Error_Style\");\n    } // refresh input size\n\n\n    this.textInput.style.height = this._rootContainer.style.height; // might get the width/height as below in the future\n    //context.accessibility._customControlProperties.parentDefinedControlProps.width\n    //context.accessibility._customControlProperties.parentDefinedControlProps.height\n\n    this.configureInputProperties(this.textInput, context.parameters);\n    this.configureButtonProperties(this.button, context.parameters);\n  };\n  /**\r\n   * It is called by the framework prior to a control receiving new data.\r\n   * @returns an object based on nomenclature defined in manifest, expecting object[s] for property marked as \"bound\" or \"output\"\r\n   */\n\n\n  PCFCopyTextComponent.prototype.getOutputs = function () {\n    // custom code goes here - remove the line below and return the correct output\n    var result = {\n      Value: this._value\n    };\n    return result;\n  };\n  /**\r\n   * Called when the control is to be removed from the DOM tree. Controls should use this call for cleanup.\r\n   * i.e. cancelling any pending remote calls, removing listeners, etc.\r\n   */\n\n\n  PCFCopyTextComponent.prototype.destroy = function () {// Add code to cleanup control if necessary\n  };\n\n  return PCFCopyTextComponent;\n}();\n\nexports.PCFCopyTextComponent = PCFCopyTextComponent;\n\n//# sourceURL=webpack://pcf_tools_652ac3f36e1e4bca82eb3c1dc44e6fad/./PCFCopyTextComponent/index.ts?");

/***/ }),

/***/ "./node_modules/copy-to-clipboard/index.js":
/*!*************************************************!*\
  !*** ./node_modules/copy-to-clipboard/index.js ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nvar deselectCurrent = __webpack_require__(/*! toggle-selection */ \"./node_modules/toggle-selection/index.js\");\n\nvar clipboardToIE11Formatting = {\n  \"text/plain\": \"Text\",\n  \"text/html\": \"Url\",\n  \"default\": \"Text\"\n};\nvar defaultMessage = \"Copy to clipboard: #{key}, Enter\";\n\nfunction format(message) {\n  var copyKey = (/mac os x/i.test(navigator.userAgent) ? \"⌘\" : \"Ctrl\") + \"+C\";\n  return message.replace(/#{\\s*key\\s*}/g, copyKey);\n}\n\nfunction copy(text, options) {\n  var debug,\n      message,\n      reselectPrevious,\n      range,\n      selection,\n      mark,\n      success = false;\n\n  if (!options) {\n    options = {};\n  }\n\n  debug = options.debug || false;\n\n  try {\n    reselectPrevious = deselectCurrent();\n    range = document.createRange();\n    selection = document.getSelection();\n    mark = document.createElement(\"span\");\n    mark.textContent = text; // reset user styles for span element\n\n    mark.style.all = \"unset\"; // prevents scrolling to the end of the page\n\n    mark.style.position = \"fixed\";\n    mark.style.top = 0;\n    mark.style.clip = \"rect(0, 0, 0, 0)\"; // used to preserve spaces and line breaks\n\n    mark.style.whiteSpace = \"pre\"; // do not inherit user-select (it may be `none`)\n\n    mark.style.webkitUserSelect = \"text\";\n    mark.style.MozUserSelect = \"text\";\n    mark.style.msUserSelect = \"text\";\n    mark.style.userSelect = \"text\";\n    mark.addEventListener(\"copy\", function (e) {\n      e.stopPropagation();\n\n      if (options.format) {\n        e.preventDefault();\n\n        if (typeof e.clipboardData === \"undefined\") {\n          // IE 11\n          debug && console.warn(\"unable to use e.clipboardData\");\n          debug && console.warn(\"trying IE specific stuff\");\n          window.clipboardData.clearData();\n          var format = clipboardToIE11Formatting[options.format] || clipboardToIE11Formatting[\"default\"];\n          window.clipboardData.setData(format, text);\n        } else {\n          // all other browsers\n          e.clipboardData.clearData();\n          e.clipboardData.setData(options.format, text);\n        }\n      }\n    });\n    document.body.appendChild(mark);\n    range.selectNodeContents(mark);\n    selection.addRange(range);\n    var successful = document.execCommand(\"copy\");\n\n    if (!successful) {\n      throw new Error(\"copy command was unsuccessful\");\n    }\n\n    success = true;\n  } catch (err) {\n    debug && console.error(\"unable to copy using execCommand: \", err);\n    debug && console.error(\"unable to copy using clipboardData: \", err);\n    debug && console.error(\"falling back to prompt\");\n    message = format(\"message\" in options ? options.message : defaultMessage);\n    window.prompt(message, text);\n  } finally {\n    if (selection) {\n      if (typeof selection.removeRange == \"function\") {\n        selection.removeRange(range);\n      } else {\n        selection.removeAllRanges();\n      }\n    }\n\n    if (mark) {\n      document.body.removeChild(mark);\n    }\n\n    reselectPrevious();\n  }\n\n  return success;\n}\n\nmodule.exports = copy;\n\n//# sourceURL=webpack://pcf_tools_652ac3f36e1e4bca82eb3c1dc44e6fad/./node_modules/copy-to-clipboard/index.js?");

/***/ }),

/***/ "./node_modules/toggle-selection/index.js":
/*!************************************************!*\
  !*** ./node_modules/toggle-selection/index.js ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = function () {\n  var selection = document.getSelection();\n\n  if (!selection.rangeCount) {\n    return function () {};\n  }\n\n  var active = document.activeElement;\n  var ranges = [];\n\n  for (var i = 0; i < selection.rangeCount; i++) {\n    ranges.push(selection.getRangeAt(i));\n  }\n\n  switch (active.tagName.toUpperCase()) {\n    // .toUpperCase handles XHTML\n    case 'INPUT':\n    case 'TEXTAREA':\n      active.blur();\n      break;\n\n    default:\n      active = null;\n      break;\n  }\n\n  selection.removeAllRanges();\n  return function () {\n    selection.type === 'Caret' && selection.removeAllRanges();\n\n    if (!selection.rangeCount) {\n      ranges.forEach(function (range) {\n        selection.addRange(range);\n      });\n    }\n\n    active && active.focus();\n  };\n};\n\n//# sourceURL=webpack://pcf_tools_652ac3f36e1e4bca82eb3c1dc44e6fad/./node_modules/toggle-selection/index.js?");

/***/ })

/******/ });
if (window.ComponentFramework && window.ComponentFramework.registerControl) {
	ComponentFramework.registerControl('CanvizLLCPCF.PCFCopyTextComponent', pcf_tools_652ac3f36e1e4bca82eb3c1dc44e6fad.PCFCopyTextComponent);
} else {
	var CanvizLLCPCF = CanvizLLCPCF || {};
	CanvizLLCPCF.PCFCopyTextComponent = pcf_tools_652ac3f36e1e4bca82eb3c1dc44e6fad.PCFCopyTextComponent;
	pcf_tools_652ac3f36e1e4bca82eb3c1dc44e6fad = undefined;
}