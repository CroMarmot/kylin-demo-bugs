"use strict";exports.__esModule=!0,exports.processPropertyList=processPropertyList;var _babelTypes=require("babel-types"),t=_interopRequireWildcard(_babelTypes),_babelTemplate=require("babel-template"),_babelTemplate2=_interopRequireDefault(_babelTemplate),_data=require("./data"),Data=_interopRequireWildcard(_data),_other=require("./other"),Other=_interopRequireWildcard(_other),_utils=require("../utils"),_chalk=require("chalk"),_chalk2=_interopRequireDefault(_chalk);function _interopRequireDefault(e){return e&&e.__esModule?e:{default:e}}function _interopRequireWildcard(e){if(e&&e.__esModule)return e;var r={};if(null!=e)for(var t in e)Object.prototype.hasOwnProperty.call(e,t)&&(r[t]=e[t]);return r.default=e,r}function processPropertyList(e,r,a){var o=r.opts,s=(o.className,o.propertyName,o.strict),i=o.noJSX,p=[],n={};return e.forEach(function(e){var t=e.key.name;switch(t){case"data":var o=Data.processProperty(e,r);o&&(p.push(o),n.data=!0);break;case"methods":case"computed":if(s)throw a.hub.file.buildCodeFrameError(e,'ClassProperty "'+t+'" is deprecated. please use '+("computed"===t?"getter/setter":"")+" ClassMethod instead.");case"watch":if(s)throw a.hub.file.buildCodeFrameError(e,'ClassProperty "'+t+'" is deprecated. please use @Watch Decorator to decorate ClassMethod instead.');case"components":"components"===t&&(0,_utils.printCodeFrameWarning)(a.hub.file,e,'ClassProperty "'+t+'" is deprecated. please use <dependency> tag to import component instead.\nsee "'+_chalk2.default.gray("http://kylin.alipay.net/kylin/framework/component/spec.html#dependency%E6%A0%87%E7%AD%BE")+'" for more infomation.\n');case"props":case"filters":case"directives":case"name":default:if("render"===t&&i)throw a.hub.file.buildCodeFrameError(e,"JSX render is not supported in Component");var l=Other.processProperty(e,r);l&&(p.push(l),n[t]=!0)}}),!n.name&&t.isIdentifier(a.node.id)&&p.push((0,_utils.getObjectProperty)("name",t.stringLiteral(a.node.id.name))),{properties:p,propertyKeyMap:n}}