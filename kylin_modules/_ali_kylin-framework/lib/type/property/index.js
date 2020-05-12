"use strict";exports.__esModule=!0,exports.Watch=void 0,exports.modifyProperty=modifyProperty,exports.PropertyProcessor=PropertyProcessor,exports.Property=Property;var _watch=require("./watch");Object.defineProperty(exports,"Watch",{enumerable:!0,get:function(){return _watch.Watch}});var _utils=require("../utils"),_default=require("./default"),DefaultProperty=_interopRequireWildcard(_default);function _interopRequireWildcard(r){if(r&&r.__esModule)return r;var e={};if(null!=r)for(var o in r)Object.prototype.hasOwnProperty.call(r,o)&&(e[o]=r[o]);return e.default=r,e}var decoratorMap=Object.create(null),processorMap=Object.create(null),modifierArray=[];function modifyProperty(r){modifierArray.forEach(function(e){e(r)})}function PropertyDecorator(r,e,o){"function"==typeof decoratorMap[e]?decoratorMap[e](r,e,o):DefaultProperty.decorator(r,e,o)}function PropertyProcessor(r,e,o){"function"==typeof processorMap[e]?processorMap[e](r,e,o):DefaultProperty.processor(r,e,o)}function registerProperty(r){if(!r)throw new Error("registerProperty config invalid",r);if(!(r.propertyKey&&r.prototypeKey&&r.processor&&r.decorator))throw new Error("registerProperty config invalid",r);decoratorMap[r.propertyKey]=r.decorator,processorMap[r.prototypeKey]=r.processor,"function"==typeof r.modifier&&modifierArray.push(r.modifier)}function Property(r,e,o){var t="function"==typeof r;if(!("function"==typeof o.initializer))throw new Error((t?"Static":"Member")+" Method ["+e+"] should not be added decorator [Component.Property] for auto-detection of vue option");PropertyDecorator(r,e,o)}registerProperty(require("./data")),registerProperty(require("./props")),registerProperty(require("./watch")),registerProperty(require("./components"));