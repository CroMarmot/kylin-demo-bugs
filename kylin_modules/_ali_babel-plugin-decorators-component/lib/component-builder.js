"use strict";exports.__esModule=!0,exports.ComponentObjectBuilder=ComponentObjectBuilder;var _babelTypes=require("babel-types"),t=_interopRequireWildcard(_babelTypes),_babelTemplate=require("babel-template"),_babelTemplate2=_interopRequireDefault(_babelTemplate),_property=require("./property"),_method=require("./method");function _interopRequireDefault(e){return e&&e.__esModule?e:{default:e}}function _interopRequireWildcard(e){if(e&&e.__esModule)return e;var t={};if(null!=e)for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&(t[r]=e[r]);return t.default=e,t}var buildComponentObjectBuilder=(0,_babelTemplate2.default)("\n  (function ComponentBuilder() {\n    const component = $0;\n\n    ;$1;\n\n    return component;\n  })\n"),buildComponentObjectCallerBuilder=(0,_babelTemplate2.default)("\n  $0.$1($2)($3)\n");function ComponentObjectBuilder(e,r){var o=r.opts,n=o.className,i=(o.propertyName,o.objectName),a=(o.strict,classPropertyMethodValidCheck(e,e.node.body.body,r)),l=a.valid,s=a.list;if(l){var p=s.filter(function(e){return"ClassProperty"===e.type}),u=s.filter(function(e){return"ClassMethod"===e.type}),c=(0,_property.processPropertyList)(p,r,e),d=c.properties,b=c.propertyKeyMap,f=(0,_method.processMethodList)(u,r,b,e),y=f.properties,m=f.statements,_=[].concat(d).concat(y),C=buildComponentObjectBuilder(t.objectExpression(_),m),h=e.node.decorators[0],j=[t.objectExpression([])];return t.isCallExpression(h.expression)&&(j=h.expression.arguments),buildComponentObjectCallerBuilder(t.identifier(n),t.identifier(i),j,C.expression)}}function classPropertyMethodValidCheck(e,r,o){var n=o.opts,i=(n.className,n.propertyName,n.objectName,n.strict),a=!0;return r.forEach(function(r){if(!t.isIdentifier(r.key))throw a=!1,e.hub.file.buildCodeFrameError(r,"["+(r.key&&(r.key.name||r.key.value))+"] non-identifier key is not supported");if((r.static||r.generator)&&i){a=!1;var o=r,n=o.static?"static":o.async?"async":"generator";throw e.hub.file.buildCodeFrameError(r,"'"+n+"' "+r.type+" ["+(r.key&&(r.key.name||r.key.value))+"] is not supported.")}}),{list:r=r.filter(function(e){return!e.static&&!e.generator&&t.isIdentifier(e.key)}),valid:a}}