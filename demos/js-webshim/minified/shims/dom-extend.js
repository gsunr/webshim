jQuery.webshims.register("dom-extend",function(g,k,w,p,o){var t=k.modules,q=g.attr,m={},l={};g.attr=function(b,d,a,c,f){var h=(b.nodeName||"").toLowerCase();if(!h||b.nodeType!==1)return q(b,d,a,c,f);var e=m[h],i;if(e)e=e[d];if(!e)if(e=m["*"])e=e[d];if(e)if(a===o)return e.get?e.get.call(b):e.value;else{if(e.set)i=e.set.call(b,a)}else i=q(b,d,a,c,f);a!==o&&l[h]&&l[h][d]&&g.each(l[h][d],function(j,n){n.call(b,a)});return i};var u=function(b,d,a){m[b]||(m[b]={});var c=m[b][d],f=function(h,e,i){if(e&&
e[h])return e[h];if(i&&i[h])return i[h];return function(j){return q(this,d,j)}};m[b][d]=a;if(a.value===o){if(!a.set)a.set=a.writeable?f("set",a,c):function(){throw d+"is readonly on "+b;};if(!a.get)a.get=f("get",a,c)}g.each(["value","get","set"],function(h,e){if(a[e])a["_sup"+e]=f(e,c)})},r=function(){var b={};k.addReady(function(a,c){var f={},h=function(e){if(!f[e]){f[e]=g(a.getElementsByTagName(e));if(c[0]&&g.nodeName(c[0],e))f[e]=f[e].add(c)}};g.each(b,function(e,i){h(e);!i||!i.forEach?k.warn("Error: with "+
e+"-property. methods: "+i):i.forEach(function(j){f[e].each(j)})});f=null});var d=function(a,c){if(b[a])b[a].push(c);else b[a]=[c];g.isDOMReady&&g(p.getElementsByTagName(a)).each(c)};return{content:function(a,c){d(a,function(){g(this).filter("["+c+"]").attr(c,function(f,h){return h})})},extendValue:function(a,c,f){d(a,function(){g(this).each(function(){(g.data(this,"_oldPolyfilledValue")||g.data(this,"_oldPolyfilledValue",{}))[c]=this[c];this[c]=f})})}}}(),v=function(){var b=k.getPrototypeOf(p.createElement("foobar")),
d=Object.prototype.hasOwnProperty;return function(a,c,f){var h=p.createElement(a),e=k.getPrototypeOf(h);if(e&&b!==e&&(!h[c]||!d.call(h,c))){var i=h[c];f._supvalue=function(){if(i&&i.apply)return i.apply(this,arguments);return i};e[c]=f.value}else{f._supvalue=function(){var j=g.data(this,"_oldPolyfilledValue");if(j&&j[c]&&j[c].apply)return j[c].apply(this,arguments);return j&&j[c]};r.extendValue(a,c,f.value)}f.value._supvalue=f._supvalue}}();g.extend(k,{getID:function(){var b=(new Date).getTime();
return function(d){d=g(d);var a=d.attr("id");if(!a){b++;a="elem-id-"+b;d.attr("id",a)}return a}}(),defineNodeNameProperty:function(b,d,a){a=g.extend({writeable:true,idl:true},a);u(b,d,a);b!="*"&&k.cfg.extendNative&&a.value&&g.isFunction(a.value)&&v(b,d,a);a.content&&r.content(b,d);return a},defineNodeNamesProperty:function(b,d,a){if(typeof b=="string")b=b.split(/\s*,\s*/);var c={};b.forEach(function(f){c[f]=k.defineNodeNameProperty(f,d,a)});return c},defineNodeNameProperties:function(b,d){for(var a in d)d[a]=
k.defineNodeNameProperty(b,a,d[a]);return d},defineNodeNamesProperties:function(b,d){if(typeof b=="string")b=b.split(/\s*,\s*/);var a={};b.forEach(function(c){var f=g.extend({},d);a[c]=k.defineNodeNameProperties(c,f)});return a},onNodeNamesPropertyModify:function(b,d,a){if(typeof b=="string")b=b.split(/\s*,\s*/);if(g.isFunction(a))a={set:a};b.forEach(function(c){l[c]||(l[c]={});l[c][d]||(l[c][d]=[]);a.set&&l[c][d].push(a.set);a.content&&r.content(c,d)})},defineNodeNamesBooleanProperty:function(b,
d,a){a=a||{};k.defineNodeNamesProperty(b,d,{set:function(c){c=!!c;k.contentAttr(this,d,c);a.set&&a.set.call(this,c);return c},get:function(){return k.contentAttr(this,d)!=null}})},contentAttr:function(b,d,a){if(b.nodeName){if(a===o){a=(b.attributes[d]||{}).value;return a==null?o:a}if(typeof a=="boolean")a?b.setAttribute(d,d):b.removeAttribute(d);else b.setAttribute(d,a)}},activeLang:function(){var b=[navigator.browserLanguage||navigator.language||""],d=g("html").attr("lang"),a;d&&b.push(d);return function(c,
f,h){if(c)if(!f||!h){if(c!==b[0]){b[0]=c;clearTimeout(a);a=setTimeout(function(){g(p).triggerHandler("webshimLocalizationReady",b)},0)}}else{var e=(f=t[f].options)&&f.availabeLangs,i=function(j){if(g.inArray(j,e)!==-1){k.loader.loadScript(f.langSrc+j+".js",function(){c[j]&&h(c[j])});return true}return false};g.each(b,function(j,n){var s=n.split("-")[0];if(c[n]||c[s]){h(c[n]||c[s]);return false}if(e&&f.langSrc&&(i(n)||i(s)))return false})}return b}}()});k.isReady("webshimLocalization",true)});
