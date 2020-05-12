"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),exports.hasPluginId=hasPluginId,exports.applyPluginForExpress=applyPluginForExpress,exports.applyPluginForBabel=applyPluginForBabel,exports.applyPluginForWebpack=applyPluginForWebpack,exports.applyPluginForResource=applyPluginForResource,exports.loadPlugin=loadPlugin;var _index=require("../../utils/index.js"),_globalResource=require("../plugin/globalResource"),globalResource=_interopRequireWildcard(_globalResource),_resolve=require("./resolve"),_browserInject=require("./browser-inject");function _interopRequireWildcard(e){if(e&&e.__esModule)return e;var n={};if(null!=e)for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&(n[r]=e[r]);return n.default=e,n}function*callAsyncFunction(e,n){return new Promise(function(r){const l=e.apply(null,n.concat(function(e){r(e)}));l&&r(l)})}function hasPluginId(e,n,r){return n.parsedPlugins.filter(e=>e.pluginName===r).length>0}function applyPluginForExpress(e,n,r){n.parsedPlugins=n.parsedPlugins||[];for(let l of n.parsedPlugins){let n=!1;l.exports||(n=!0);const i=l.exports.express;i||(n=!0),n||(_index.hint.success("[Plugin]",`[express] "${l.name}" [Applied]`),i.call(null,e,r))}}function applyPluginForBabel(e,n){n.parsedPlugins=n.parsedPlugins||[];for(let r of n.parsedPlugins){let n=!1;r.exports||(n=!0);const l=r.exports.babel;if(l||(n=!0),n)continue;_index.hint.success("[Plugin]",`[babel-config] "${r.name}" [Applied]`);const i=l.call(null,e);e=i||e}return e}function*applyPluginForWebpack(e,n){for(let r of n.parsedPlugins){let n=!1;r.exports||(n=!0);const l=r.exports.webpack;if(l||(n=!0),n)continue;_index.hint.success("[Plugin]",`[webpack-config] "${r.name}" [Applied]`);const i=yield callAsyncFunction(l,[e]);e=i||e}return e=(0,_browserInject.applyInject)(e,n)}function applyPluginForResource(e,n,r){for(let l of n.parsedPlugins){let i=!1;l.exports||(i=!0);const o=l.exports.resource;if(o&&"function"==typeof o||(i=!0),!i){_index.hint.success("[Plugin]",`[resource] "${l.name}" [Applied]`);try{o.call(null,e,n,r)}catch(e){_index.hint.error("[Plugin]","Resource Modify Error"+e.toString()+e.stack)}}}}function findPluginMatch(e,n){return n.filter(n=>"string"==typeof n?e.test(n):!!Array.isArray(n)&&e.test(n[0]))}function loadPlugin(e,n){let r=n.plugins||[];Array.isArray(r)||(r=[],_index.hint.error("[Plugin]","kylinApp.plugins is not an array, will be ignore")),0===findPluginMatch(/vue/,r).length&&r.push("vue"),0===findPluginMatch(/mock/,r).length&&r.push("mock"),(r=r.map((e,n)=>{let r={};return"string"==typeof e?(r.name=e,r.option=void 0):Array.isArray(e)?(r.name=e[0],r.option=e[1]):_index.hint.error("[Plugin]",`kylinApp.plugins[${n}] can not be recognized`),r}).filter(e=>e.name)).forEach((r,l)=>{_index.hint.success("[Plugin]",`[loading] "${r.name}"`),r.modulePath=(0,_resolve.resolvePlugin)(r.name,e.cwd),r.exports=require(r.modulePath),r.pluginName=r.exports.default&&r.exports.default.pluginName||r.exports.pluginName,r.exports=r.exports.default||r.exports,"function"==typeof r.exports&&(r.exports=r.exports.call(null,{program:e,kylinApp:n,hint:_index.hint},r.option))}),n.parsedPlugins=r,applyPluginForResource(globalResource,n,e)}