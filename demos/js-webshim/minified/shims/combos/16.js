jQuery.webshims.register("dom-extend",function(a,h,f,j,k){var u=h.modules,o=/\s*,\s*/,q={},p={},m={},v={},r={},w=a.fn.val,B=function(c,b,d,g,s){return s?w.call(a(c)):w.call(a(c),d)};a.fn.val=function(c){var b=this[0];arguments.length&&null==c&&(c="");if(!arguments.length)return!b||1!==b.nodeType?w.call(this):a.prop(b,"value",c,"val",!0);if(a.isArray(c))return w.apply(this,arguments);var d=a.isFunction(c);return this.each(function(g){b=this;1===b.nodeType&&(d?(g=c.call(b,g,a.prop(b,"value",k,"val",
!0)),null==g&&(g=""),a.prop(b,"value",g,"val")):a.prop(b,"value",c,"val"))})};var t="_webshimsLib"+Math.round(1E3*Math.random()),A=function(c,b,d){c=c.jquery?c[0]:c;if(!c)return d||{};var g=a.data(c,t);d!==k&&(g||(g=a.data(c,t,{})),b&&(g[b]=d));return b?g&&g[b]:g};[{name:"getNativeElement",prop:"nativeElement"},{name:"getShadowElement",prop:"shadowElement"},{name:"getShadowFocusElement",prop:"shadowFocusElement"}].forEach(function(c){a.fn[c.name]=function(){return this.map(function(){var a=A(this,
"shadowData");return a&&a[c.prop]||this})}});["removeAttr","prop","attr"].forEach(function(c){q[c]=a[c];a[c]=function(b,d,g,s,e){var n="val"==s,y=!n?q[c]:B;if(!b||!p[d]||1!==b.nodeType||!n&&s&&"attr"==c&&a.attrFn[d])return y(b,d,g,s,e);var x=(b.nodeName||"").toLowerCase(),i=m[x],h="attr"==c&&(!1===g||null===g)?"removeAttr":c,f,w,z;i||(i=m["*"]);i&&(i=i[d]);i&&(f=i[h]);if(f){if("value"==d)w=f.isVal,f.isVal=n;if("removeAttr"===h)return f.value.call(b);if(g===k)return f.get?f.get.call(b):f.value;f.set&&
("attr"==c&&!0===g&&(g=d),z=f.set.call(b,g));if("value"==d)f.isVal=w}else z=y(b,d,g,s,e);if((g!==k||"removeAttr"===h)&&r[x]&&r[x][d]){var j;j="removeAttr"==h?!1:"prop"==h?!!g:!0;r[x][d].forEach(function(a){if(!a.only||(a.only="prop"==c)||"attr"==a.only&&"prop"!=c)a.call(b,g,j,n?"val":h,c)})}return z};v[c]=function(b,d,g){m[b]||(m[b]={});m[b][d]||(m[b][d]={});var s=m[b][d][c],i=function(a,b,x){return b&&b[a]?b[a]:x&&x[a]?x[a]:"prop"==c&&"value"==d?function(a){return g.isVal?B(this,d,a,!1,0===arguments.length):
q[c](this,d,a)}:"prop"==c&&"value"==a&&g.value.apply?function(a){var b=q[c](this,d);b&&b.apply&&(b=b.apply(this,arguments));return b}:function(a){return q[c](this,d,a)}};m[b][d][c]=g;if(g.value===k){if(!g.set)g.set=g.writeable?i("set",g,s):h.cfg.useStrict&&"prop"==d?function(){throw d+" is readonly on "+b;}:a.noop;if(!g.get)g.get=i("get",g,s)}["value","get","set"].forEach(function(a){g[a]&&(g["_sup"+a]=i(a,s))})}});var l=!a.browser.msie||8<parseInt(a.browser.version,10),e=function(){var a=h.getPrototypeOf(j.createElement("foobar")),
b=Object.prototype.hasOwnProperty;return function(d,g,s){var e=j.createElement(d),n=h.getPrototypeOf(e);if(l&&n&&a!==n&&(!e[g]||!b.call(e,g))){var y=e[g];s._supvalue=function(){return y&&y.apply?y.apply(this,arguments):y};n[g]=s.value}else s._supvalue=function(){var a=A(this,"propValue");return a&&a[g]&&a[g].apply?a[g].apply(this,arguments):a&&a[g]},i.extendValue(d,g,s.value);s.value._supvalue=s._supvalue}}(),i=function(){var c={};h.addReady(function(b,d){var n={},g=function(c){n[c]||(n[c]=a(b.getElementsByTagName(c)),
d[0]&&a.nodeName(d[0],c)&&(n[c]=n[c].add(d)))};a.each(c,function(a,c){g(a);!c||!c.forEach?h.warn("Error: with "+a+"-property. methods: "+c):c.forEach(function(c){n[a].each(c)})});n=null});var b,d=a([]),g=function(d,g){c[d]?c[d].push(g):c[d]=[g];a.isDOMReady&&(b||a(j.getElementsByTagName(d))).each(g)};return{createTmpCache:function(c){a.isDOMReady&&(b=b||a(j.getElementsByTagName(c)));return b||d},flushTmpCache:function(){b=null},content:function(c,b){g(c,function(){var c=a.attr(this,b);null!=c&&a.attr(this,
b,c)})},createElement:function(a,c){g(a,c)},extendValue:function(c,b,d){g(c,function(){a(this).each(function(){A(this,"propValue",{})[b]=this[b];this[b]=d})})}}}(),z=function(a,b){if(a.defaultValue===k)a.defaultValue="";if(!a.removeAttr)a.removeAttr={value:function(){a[b||"prop"].set.call(this,a.defaultValue);a.removeAttr._supvalue.call(this)}};if(!a.attr)a.attr={}};a.extend(h,{getID:function(){var c=(new Date).getTime();return function(b){var b=a(b),d=b.attr("id");d||(c++,d="ID-"+c,b.attr("id",d));
return d}}(),extendUNDEFProp:function(c,b){a.each(b,function(a,b){a in c||(c[a]=b)})},createPropDefault:z,data:A,moveToFirstEvent:function(){var c=a._data?"_data":"data";return function(b,d,g){if((b=(a[c](b,"events")||{})[d])&&1<b.length)d=b.pop(),g||(g="bind"),"bind"==g&&b.delegateCount?b.splice(b.delegateCount,0,d):b.unshift(d)}}(),addShadowDom:function(){var c,b,d,g=function(g){clearTimeout(c);c=setTimeout(function(){if("resize"==g.type&&g.target==f){var c=a(f).width(),n=a(f).width();if(n==b&&
c==d)return;b=n;d=c}a.event.trigger("updateshadowdom")},20)};a(j).bind("emchange resize fontresize",g);a(f).bind("resize",g);a.event.customEvent.updateshadowdom=!0;return function(c,b,d){d=d||{};c.jquery&&(c=c[0]);b.jquery&&(b=b[0]);var g=a.data(c,t)||a.data(c,t,{}),x=a.data(b,t)||a.data(b,t,{}),e={};if(d.shadowFocusElement){if(d.shadowFocusElement){if(d.shadowFocusElement.jquery)d.shadowFocusElement=d.shadowFocusElement[0];e=a.data(d.shadowFocusElement,t)||a.data(d.shadowFocusElement,t,e)}}else d.shadowFocusElement=
b;g.hasShadow=b;e.nativeElement=x.nativeElement=c;e.shadowData=x.shadowData=g.shadowData={nativeElement:c,shadowElement:b,shadowFocusElement:d.shadowFocusElement};d.shadowChilds&&d.shadowChilds.each(function(){A(this,"shadowData",x.shadowData)});if(d.data)e.shadowData.data=x.shadowData.data=g.shadowData.data=d.data;d=null}}(),propTypes:{standard:function(a){z(a);if(!a.prop)a.prop={set:function(b){a.attr.set.call(this,""+b)},get:function(){return a.attr.get.call(this)||a.defaultValue}}},"boolean":function(a){z(a);
if(!a.prop)a.prop={set:function(b){b?a.attr.set.call(this,""):a.removeAttr.value.call(this)},get:function(){return null!=a.attr.get.call(this)}}},src:function(){var c=j.createElement("a");c.style.display="none";return function(b,d){z(b);if(!b.prop)b.prop={set:function(a){b.attr.set.call(this,a)},get:function(){var b=this.getAttribute(d),e;if(null==b)return"";c.setAttribute("href",b+"");if(!a.support.hrefNormalized){try{a(c).insertAfterTo(this),e=c.getAttribute("href",4)}catch(i){e=c.getAttribute("href",
4)}a(c).detach()}return e||c.href}}}}(),enumarated:function(a){z(a);if(!a.prop)a.prop={set:function(b){a.attr.set.call(this,b)},get:function(){var b=(a.attr.get.call(this)||"").toLowerCase();if(!b||-1==a.limitedTo.indexOf(b))b=a.defaultValue;return b}}}},reflectProperties:function(c,b){"string"==typeof b&&(b=b.split(o));b.forEach(function(b){h.defineNodeNamesProperty(c,b,{prop:{set:function(c){a.attr(this,b,c)},get:function(){return a.attr(this,b)||""}}})})},defineNodeNameProperty:function(c,b,d){p[b]=
!0;if(d.reflect)h.propTypes[d.propType||"standard"](d,b);["prop","attr","removeAttr"].forEach(function(g){var i=d[g];i&&(i="prop"===g?a.extend({writeable:!0},i):a.extend({},i,{writeable:!0}),v[g](c,b,i),"*"!=c&&h.cfg.extendNative&&"prop"==g&&i.value&&a.isFunction(i.value)&&e(c,b,i),d[g]=i)});d.initAttr&&i.content(c,b);return d},defineNodeNameProperties:function(a,b,d,g){for(var e in b)!g&&b[e].initAttr&&i.createTmpCache(a),d&&(b[e][d]?h.log("override: "+a+"["+e+"] for "+d):(b[e][d]={},["value","set",
"get"].forEach(function(a){a in b[e]&&(b[e][d][a]=b[e][a],delete b[e][a])}))),b[e]=h.defineNodeNameProperty(a,e,b[e]);g||i.flushTmpCache();return b},createElement:function(c,b,d){var g;a.isFunction(b)&&(b={after:b});i.createTmpCache(c);b.before&&i.createElement(c,b.before);d&&(g=h.defineNodeNameProperties(c,d,!1,!0));b.after&&i.createElement(c,b.after);i.flushTmpCache();return g},onNodeNamesPropertyModify:function(c,b,d,g){"string"==typeof c&&(c=c.split(o));a.isFunction(d)&&(d={set:d});c.forEach(function(a){r[a]||
(r[a]={});"string"==typeof b&&(b=b.split(o));d.initAttr&&i.createTmpCache(a);b.forEach(function(b){r[a][b]||(r[a][b]=[],p[b]=!0);if(d.set){if(g)d.set.only=g;r[a][b].push(d.set)}d.initAttr&&i.content(a,b)});i.flushTmpCache()})},defineNodeNamesBooleanProperty:function(c,b,d){d||(d={});if(a.isFunction(d))d.set=d;h.defineNodeNamesProperty(c,b,{attr:{set:function(a){this.setAttribute(b,a);d.set&&d.set.call(this,!0)},get:function(){return null==this.getAttribute(b)?k:b}},removeAttr:{value:function(){this.removeAttribute(b);
d.set&&d.set.call(this,!1)}},reflect:!0,propType:"boolean",initAttr:d.initAttr||!1})},contentAttr:function(a,b,d){if(a.nodeName){if(d===k)return a=a.attributes[b]||{},d=a.specified?a.value:null,null==d?k:d;"boolean"==typeof d?d?a.setAttribute(b,b):a.removeAttribute(b):a.setAttribute(b,d)}},activeLang:function(){var c=[],b={},d,g,e=/:\/\/|^\.*\//,i=function(b,c,d){return c&&d&&-1!==a.inArray(c,d.availabeLangs||[])?(b.loading=!0,d=d.langSrc,e.test(d)||(d=h.cfg.basePath+d),h.loader.loadScript(d+c+".js",
function(){b.langObj[c]?(b.loading=!1,y(b,!0)):a(function(){b.langObj[c]&&y(b,!0);b.loading=!1})}),!0):!1},n=function(a){b[a]&&b[a].forEach(function(a){a.callback()})},y=function(a,b){if(a.activeLang!=d&&a.activeLang!==g){var c=u[a.module].options;if(a.langObj[d]||g&&a.langObj[g])a.activeLang=d,a.callback(a.langObj[d]||a.langObj[g],d),n(a.module);else if(!b&&!i(a,d,c)&&!i(a,g,c)&&a.langObj[""]&&""!==a.activeLang)a.activeLang="",a.callback(a.langObj[""],d),n(a.module)}};return function(e){if("string"==
typeof e&&e!==d)d=e,g=d.split("-")[0],d==g&&(g=!1),a.each(c,function(a,b){y(b)});else if("object"==typeof e)if(e.register)b[e.register]||(b[e.register]=[]),b[e.register].push(e),e.callback();else{if(!e.activeLang)e.activeLang="";c.push(e);y(e)}return d}}()});a.each({defineNodeNamesProperty:"defineNodeNameProperty",defineNodeNamesProperties:"defineNodeNameProperties",createElements:"createElement"},function(a,b){h[a]=function(a,c,e,i){"string"==typeof a&&(a=a.split(o));var n={};a.forEach(function(a){n[a]=
h[b](a,c,e,i)});return n}});h.isReady("webshimLocalization",!0)});
(function(a,h){var f=a.webshims.browserVersion;if(!(a.browser.mozilla&&5<f)&&(!a.browser.msie||12>f&&7<f)){var j={article:"article",aside:"complementary",section:"region",nav:"navigation",address:"contentinfo"},k=function(a,h){a.getAttribute("role")||a.setAttribute("role",h)};a.webshims.addReady(function(f,o){a.each(j,function(h,r){for(var w=a(h,f).add(o.filter(h)),j=0,t=w.length;j<t;j++)k(w[j],r)});if(f===h){var q=h.getElementsByTagName("header")[0],p=h.getElementsByTagName("footer"),m=p.length;
q&&!a(q).closest("section, article")[0]&&k(q,"banner");m&&(q=p[m-1],a(q).closest("section, article")[0]||k(q,"contentinfo"))}})}})(jQuery,document);
(function(a,h,f){var j=h.audio&&h.video,k=!1,u=f.cfg.mediaelement,o=f.bugs,q=function(){f.ready("mediaelement-swf",function(){if(!f.mediaelement.createSWF)f.modules["mediaelement-swf"].test=a.noop,f.reTest(["mediaelement-swf"],j)})},p;if(j){var m=document.createElement("video");h.videoBuffered="buffered"in m;k="loop"in m;f.capturingEvents("play,playing,waiting,paused,ended,durationchange,loadedmetadata,canplay,volumechange".split(","));h.videoBuffered||(f.addPolyfill("mediaelement-native-fix",{f:"mediaelement",
test:h.videoBuffered,d:["dom-support"]}),f.reTest("mediaelement-native-fix"))}if(j&&!u.preferFlash){var v=function(r){var h=r.target.parentNode;!u.preferFlash&&(a(r.target).is("audio, video")||h&&a("source:last",h)[0]==r.target)&&f.ready("DOM mediaelement",function(){p&&q();f.ready("WINDOWLOAD mediaelement-swf",function(){setTimeout(function(){p&&!u.preferFlash&&f.mediaelement.createSWF&&!a(r.target).closest("audio, video").is(".nonnative-api-active")?(u.preferFlash=!0,document.removeEventListener("error",
v,!0),a("audio, video").mediaLoad(),f.info("switching mediaelements option to 'preferFlash', due to an error with native player: "+r.target.src)):p||document.removeEventListener("error",v,!0)},20)})})};document.addEventListener("error",v,!0);a("audio, video").each(function(){this.error&&v({target:this})})}o.track=!1;h.track&&function(){if(!o.track)o.track="number"!=typeof a("<track />")[0].readyState;if(!o.track)try{new TextTrackCue(2,3,"")}catch(r){try{new TextTrackCue("",2,3,"","",!1);var h=TextTrackCue;
window.TextTrackCue=function(a,e,c,b,d,g){3!=arguments.length&&f.warn("TextTrackCue has 3 arguments: startTime, endTime and text. everything else is deprecated");return 4<arguments.length?new h(a,e,c,b,d||"",g||!1):new h("",a,e,c,"",!1)}}catch(j){o.track=!0}}var k=f.cfg.track,m=function(e){a(e.target).filter("track").each(l)},l=function(){if(o.track||!k.override&&3==a.prop(this,"readyState"))k.override=!0,f.reTest("track"),document.removeEventListener("error",m,!0),this&&a.nodeName(this,"track")?
f.error("track support was overwritten. Please check your vtt including your vtt mime-type"):f.info("track support was overwritten. due to bad browser support")},e=function(){document.addEventListener("error",m,!0);o.track?l():a("track").each(l)};k.override||(f.isReady("track")?e():a(e))}();f.register("mediaelement-core",function(a,f,m,t,A){p=swfobject.hasFlashPlayerVersion("9.0.115");var l=f.mediaelement,e=function(b,c){var b=a(b),d={src:b.attr("src")||"",elem:b,srcProp:b.prop("src")};if(!d.src)return d;
var e=b.attr("type");if(e)d.type=e,d.container=a.trim(e.split(";")[0]);else if(c||(c=b[0].nodeName.toLowerCase(),"source"==c&&(c=(b.closest("video, audio")[0]||{nodeName:"video"}).nodeName.toLowerCase())),e=l.getTypeForSrc(d.src,c))d.type=e,d.container=e;if(e=b.attr("media"))d.media=e;return d},i=!p&&"postMessage"in m&&j,z=function(){var b;return function(){!b&&i&&(b=!0,f.loader.loadScript("https://www.youtube.com/player_api"),a(function(){f.polyfill("mediaelement-yt")}))}}(),c=function(){p?q():z()};
f.addPolyfill("mediaelement-yt",{test:!i,d:["dom-support"]});l.mimeTypes={audio:{"audio/ogg":["ogg","oga","ogm"],'audio/ogg;codecs="opus"':"opus","audio/mpeg":["mp2","mp3","mpga","mpega"],"audio/mp4":"mp4,mpg4,m4r,m4a,m4p,m4b,aac".split(","),"audio/wav":["wav"],"audio/3gpp":["3gp","3gpp"],"audio/webm":["webm"],"audio/fla":["flv","f4a","fla"],"application/x-mpegURL":["m3u8","m3u"]},video:{"video/ogg":["ogg","ogv","ogm"],"video/mpeg":["mpg","mpeg","mpe"],"video/mp4":["mp4","mpg4","m4v"],"video/quicktime":["mov",
"qt"],"video/x-msvideo":["avi"],"video/x-ms-asf":["asf","asx"],"video/flv":["flv","f4v"],"video/3gpp":["3gp","3gpp"],"video/webm":["webm"],"application/x-mpegURL":["m3u8","m3u"],"video/MP2T":["ts"]}};l.mimeTypes.source=a.extend({},l.mimeTypes.audio,l.mimeTypes.video);l.getTypeForSrc=function(b,c){if(-1!=b.indexOf("youtube.com/watch?")||-1!=b.indexOf("youtube.com/v/"))return"video/youtube";var b=b.split("?")[0].split("."),b=b[b.length-1],d;a.each(l.mimeTypes[c],function(a,c){if(-1!==c.indexOf(b))return d=
a,!1});return d};l.srces=function(b,c){b=a(b);if(c)b.removeAttr("src").removeAttr("type").find("source").remove(),a.isArray(c)||(c=[c]),c.forEach(function(a){var c=t.createElement("source");"string"==typeof a&&(a={src:a});c.setAttribute("src",a.src);a.type&&c.setAttribute("type",a.type);a.media&&c.setAttribute("media",a.media);b.append(c)});else{var c=[],d=b[0].nodeName.toLowerCase(),g=e(b,d);g.src?c.push(g):a("source",b).each(function(){g=e(this,d);g.src&&c.push(g)});return c}};a.fn.loadMediaSrc=
function(b,c){return this.each(function(){c!==A&&(a(this).removeAttr("poster"),c&&a.attr(this,"poster",c));l.srces(this,b);a(this).mediaLoad()})};l.swfMimeTypes="video/3gpp,video/x-msvideo,video/quicktime,video/x-m4v,video/mp4,video/m4p,video/x-flv,video/flv,audio/mpeg,audio/aac,audio/mp4,audio/x-m4a,audio/m4a,audio/mp3,audio/x-fla,audio/fla,youtube/flv,jwplayer/jwplayer,video/youtube".split(",");l.canThirdPlaySrces=function(b,c){var d="";if(p||i)b=a(b),c=c||l.srces(b),a.each(c,function(a,b){if(b.container&&
b.src&&(p&&-1!=l.swfMimeTypes.indexOf(b.container)||i&&"video/youtube"==b.container))return d=b,!1});return d};var b={};l.canNativePlaySrces=function(c,d){var e="";if(j){var c=a(c),g=(c[0].nodeName||"").toLowerCase();if(!b[g])return e;d=d||l.srces(c);a.each(d,function(a,d){if(d.type&&b[g].prop._supvalue.call(c[0],d.type))return e=d,!1})}return e};l.setError=function(b,c){c||(c="can't play sources");a(b).pause().data("mediaerror",c);f.warn("mediaelementError: "+c);setTimeout(function(){a(b).data("mediaerror")&&
a(b).trigger("mediaerror")},1)};var d=function(){var a;return function(b,e,g){f.ready(p?"mediaelement-swf":"mediaelement-yt",function(){l.createSWF?l.createSWF(b,e,g):a||(a=!0,c(),d(b,e,g))});!a&&i&&!l.createSWF&&z()}}(),g=function(a,b,c,e,i){c||!1!==c&&b&&"third"==b.isActive?(c=l.canThirdPlaySrces(a,e))?d(a,c,b):i?l.setError(a,!1):g(a,b,!1,e,!0):(c=l.canNativePlaySrces(a,e))?b&&"third"==b.isActive&&l.setActive(a,"html5",b):i?(l.setError(a,!1),b&&"third"==b.isActive&&l.setActive(a,"html5",b)):g(a,
b,!0,e,!0)},s=/^(?:embed|object|datalist)$/i,C=function(b,c){var d=f.data(b,"mediaelementBase")||f.data(b,"mediaelementBase",{}),e=l.srces(b),i=b.parentNode;clearTimeout(d.loadTimer);a.data(b,"mediaerror",!1);if(e.length&&i&&!(1!=i.nodeType||s.test(i.nodeName||"")))c=c||f.data(b,"mediaelement"),g(b,c,u.preferFlash||A,e)};a(t).bind("ended",function(b){var c=f.data(b.target,"mediaelement");(!k||c&&"html5"!=c.isActive||a.prop(b.target,"loop"))&&setTimeout(function(){!a.prop(b.target,"paused")&&a.prop(b.target,
"loop")&&a(b.target).prop("currentTime",0).play()},1)});k||f.defineNodeNamesBooleanProperty(["audio","video"],"loop");["audio","video"].forEach(function(c){var d=f.defineNodeNameProperty(c,"load",{prop:{value:function(){var a=f.data(this,"mediaelement");C(this,a);j&&(!a||"html5"==a.isActive)&&d.prop._supvalue&&d.prop._supvalue.apply(this,arguments)}}});b[c]=f.defineNodeNameProperty(c,"canPlayType",{prop:{value:function(d){var e="";j&&b[c].prop._supvalue&&(e=b[c].prop._supvalue.call(this,d),"no"==
e&&(e=""));!e&&p&&(d=a.trim((d||"").split(";")[0]),-1!=l.swfMimeTypes.indexOf(d)&&(e="maybe"));return e}}})});f.onNodeNamesPropertyModify(["audio","video"],["src","poster"],{set:function(){var a=this,b=f.data(a,"mediaelementBase")||f.data(a,"mediaelementBase",{});clearTimeout(b.loadTimer);b.loadTimer=setTimeout(function(){C(a);a=null},9)}});m=function(){f.addReady(function(b,c){a("video, audio",b).add(c.filter("video, audio")).each(function(){a.browser.msie&&8<f.browserVersion&&a.prop(this,"paused")&&
!a.prop(this,"readyState")&&a(this).is('audio[preload="none"][controls]:not([autoplay])')?a(this).prop("preload","metadata").mediaLoad():C(this);if(j){var b,c,d=this,e=function(){var b=a.prop(d,"buffered");if(b){for(var c="",e=0,g=b.length;e<g;e++)c+=b.end(e);return c}},g=function(){var b=e();b!=c&&(c=b,a(d).triggerHandler("progress"))};a(this).bind("play loadstart progress",function(a){"progress"==a.type&&(c=e());clearTimeout(b);b=setTimeout(g,999)}).bind("emptied stalled mediaerror abort suspend",
function(a){"emptied"==a.type&&(c=!1);clearTimeout(b)})}})})};h.track&&!o.track&&f.defineProperty(TextTrack.prototype,"shimActiveCues",{get:function(){return this._shimActiveCues||this.activeCues}});j?(f.isReady("mediaelement-core",!0),m(),f.ready("WINDOWLOAD mediaelement",c)):f.ready("mediaelement-swf",m);a(function(){f.loader.loadList(["track-ui"])})})})(jQuery,Modernizr,jQuery.webshims);
(function(a){var h=window.Modernizr,f=a.webshims,j=f.bugs,k=a('<form action="#" style="width: 1px; height: 1px; overflow: hidden;"><select name="b" required="" /><input type="date" required="" name="a" /><input type="submit" /></form>'),u=function(){if(k[0].querySelector)try{j.findRequired=!k[0].querySelector("select:required")}catch(a){j.findRequired=!1}};j.findRequired=!1;j.validationMessage=!1;j.valueAsNumberSet=!1;f.capturingEventPrevented=function(f){if(!f._isPolyfilled){var h=f.isDefaultPrevented,
j=f.preventDefault;f.preventDefault=function(){clearTimeout(a.data(f.target,f.type+"DefaultPrevented"));a.data(f.target,f.type+"DefaultPrevented",setTimeout(function(){a.removeData(f.target,f.type+"DefaultPrevented")},30));return j.apply(this,arguments)};f.isDefaultPrevented=function(){return!(!h.apply(this,arguments)&&!a.data(f.target,f.type+"DefaultPrevented"))};f._isPolyfilled=!0}};if(!h.formvalidation||j.bustedValidity)u();else if(f.capturingEvents(["input"]),f.capturingEvents(["invalid"],!0),
h.bugfreeformvalidation=!0,window.opera||a.browser.webkit||window.testGoodWithFix){var o=a("input",k).eq(0),q,p=function(a){f.loader.loadList(["dom-extend"]);f.ready("dom-extend",a)},m=function(j){var m=["form-extend","form-message","form-native-fix"];j&&(j.preventDefault(),j.stopImmediatePropagation());clearTimeout(q);setTimeout(function(){k&&(k.remove(),k=o=null)},9);if(!h.bugfreeformvalidation)f.addPolyfill("form-native-fix",{f:"forms",d:["form-extend"]}),f.modules["form-extend"].test=a.noop;f.isReady("form-number-date-api")&&
m.push("form-number-date-api");f.reTest(m);if(o)try{o.prop({disabled:!0,value:""}).prop("disabled",!1).is(":valid")&&p(function(){f.onNodeNamesPropertyModify(["input","textarea"],["disabled","readonly"],{set:function(f){!f&&this&&a.prop(this,"value",a.prop(this,"value"))}});f.onNodeNamesPropertyModify(["select"],["disabled","readonly"],{set:function(f){if(!f&&this)f=a(this).val(),(a("option:last-child",this)[0]||{}).selected=!0,a(this).val(f)}})})}catch(B){}(a.browser.opera||window.testGoodWithFix)&&
p(function(){var h=function(a){a.preventDefault()};["form","input","textarea","select"].forEach(function(j){var l=f.defineNodeNameProperty(j,"checkValidity",{prop:{value:function(){f.fromSubmit||a(this).bind("invalid.checkvalidity",h);f.fromCheckValidity=!0;var e=l.prop._supvalue.apply(this,arguments);f.fromSubmit||a(this).unbind("invalid.checkvalidity",h);f.fromCheckValidity=!1;return e}}})})})};k.appendTo("head");if(window.opera||window.testGoodWithFix){u();j.validationMessage=!o.prop("validationMessage");
if((h.inputtypes||{}).date){try{o.prop("valueAsNumber",0)}catch(v){}j.valueAsNumberSet="1970-01-01"!=o.prop("value")}o.prop("value","")}k.bind("submit",function(a){h.bugfreeformvalidation=!1;m(a)});q=setTimeout(function(){k&&k.triggerHandler("submit")},9);a("input, select",k).bind("invalid",m).filter('[type="submit"]').bind("click",function(a){a.stopImmediatePropagation()}).trigger("click");a.browser.webkit&&h.bugfreeformvalidation&&!f.bugs.bustedValidity&&function(){var f=/^(?:textarea|input)$/i,
h=!1;document.addEventListener("contextmenu",function(a){f.test(a.target.nodeName||"")&&(h=a.target.form)&&setTimeout(function(){h=!1},1)},!1);a(window).bind("invalid",function(a){if(a.originalEvent&&h&&h==a.target.form)a.wrongWebkitInvalid=!0,a.stopImmediatePropagation()})}()}})(jQuery);
jQuery.webshims.register("form-core",function(a,h,f,j,k,u){var o={radio:1},q={checkbox:1,radio:1},p=a([]),m=h.bugs,v=function(e){var e=a(e),i,f;i=p;if(o[e[0].type])f=e.prop("form"),i=(i=e[0].name)?f?a(f[i]):a(j.getElementsByName(i)).filter(function(){return!a.prop(this,"form")}):e,i=i.filter('[type="radio"]');return i},r=h.getContentValidationMessage=function(e,i,f){var c=a(e).data("errormessage")||e.getAttribute("x-moz-errormessage")||"";f&&c[f]&&(c=c[f]);"object"==typeof c&&(i=i||a.prop(e,"validity")||
{valid:1},i.valid||a.each(i,function(a,d){if(d&&"valid"!=a&&c[a])return c=c[a],!1}));if("object"==typeof c)c=c.defaultMessage;return c||""},w={number:1,range:1,date:1};a.extend(a.expr.filters,{"valid-element":function(e){return!(!a.prop(e,"willValidate")||!(a.prop(e,"validity")||{valid:1}).valid)},"invalid-element":function(e){return!(!a.prop(e,"willValidate")||(a.prop(e,"validity")||{valid:1}).valid)},"required-element":function(e){return!(!a.prop(e,"willValidate")||!a.prop(e,"required"))},"optional-element":function(e){return!!(a.prop(e,
"willValidate")&&!1===a.prop(e,"required"))},"in-range":function(e){if(!w[a.prop(e,"type")]||!a.prop(e,"willValidate"))return!1;e=a.prop(e,"validity");return!(!e||e.rangeOverflow||e.rangeUnderflow)},"out-of-range":function(e){if(!w[a.prop(e,"type")]||!a.prop(e,"willValidate"))return!1;e=a.prop(e,"validity");return!(!e||!e.rangeOverflow&&!e.rangeUnderflow)}});["valid","invalid","required","optional"].forEach(function(e){a.expr.filters[e]=a.expr.filters[e+"-element"]});a.expr.filters.focus=function(a){try{var i=
a.ownerDocument;return a===i.activeElement&&(!i.hasFocus||i.hasFocus())}catch(f){}return!1};var B=a.event.customEvent||{};(m.bustedValidity||m.findRequired||!Modernizr.bugfreeformvalidation)&&function(){var e=a.find,i=a.find.matchesSelector,f=/(\:valid|\:invalid|\:optional|\:required|\:in-range|\:out-of-range)(?=[\s\[\~\.\+\>\:\#*]|$)/ig,c=function(a){return a+"-element"};a.find=function(){var a=Array.prototype.slice,d=function(d){var g=arguments,g=a.call(g,1,g.length);g.unshift(d.replace(f,c));return e.apply(this,
g)},g;for(g in e)e.hasOwnProperty(g)&&(d[g]=e[g]);return d}();if(!Modernizr.prefixed||Modernizr.prefixed("matchesSelector",j.documentElement))a.find.matchesSelector=function(a,d){d=d.replace(f,c);return i.call(this,a,d)}}();var t=a.prop,A={selectedIndex:1,value:1,checked:1,disabled:1,readonly:1};a.prop=function(e,i,f){var c=t.apply(this,arguments);if(e&&"form"in e&&A[i]&&f!==k&&a(e).hasClass("form-ui-invalid")&&(a.prop(e,"validity")||{valid:1}).valid)a(e).getShadowElement().removeClass("form-ui-invalid"),
"checked"==i&&f&&v(e).not(e).removeClass("form-ui-invalid").removeAttr("aria-invalid");return c};var l=function(e,f){var h;a.each(e,function(c,b){if(b)return h="customError"==c?a.prop(f,"validationMessage"):c,!1});return h};a(j).bind(u.validityUIEvents||"focusout change refreshvalidityui",function(e){var f,h;if(e.target&&(f=a(e.target).getNativeElement()[0],"submit"!=f.type&&a.prop(f,"willValidate"))){h=a.data(f,"webshimsswitchvalidityclass");var c=function(){var b=a.prop(f,"validity"),c=a(f).getShadowElement(),
g,h,j,n;a(f).trigger("refreshCustomValidityRules");b.valid?c.hasClass("form-ui-valid")||(g="form-ui-valid",h="form-ui-invalid",n="changedvaliditystate",j="changedvalid",q[f.type]&&f.checked&&v(f).not(f).removeClass(h).addClass(g).removeAttr("aria-invalid"),a.removeData(f,"webshimsinvalidcause")):(b=l(b,f),a.data(f,"webshimsinvalidcause")!=b&&(a.data(f,"webshimsinvalidcause",b),n="changedvaliditystate"),c.hasClass("form-ui-invalid")||(g="form-ui-invalid",h="form-ui-valid",q[f.type]&&!f.checked&&v(f).not(f).removeClass(h).addClass(g),
j="changedinvalid"));g&&(c.addClass(g).removeClass(h),setTimeout(function(){a(f).trigger(j)},0));n&&setTimeout(function(){a(f).trigger(n)},0);a.removeData(e.target,"webshimsswitchvalidityclass")};h&&clearTimeout(h);"refreshvalidityui"==e.type?c():a.data(e.target,"webshimsswitchvalidityclass",setTimeout(c,9))}});B.changedvaliditystate=!0;B.refreshCustomValidityRules=!0;B.changedvalid=!0;B.changedinvalid=!0;B.refreshvalidityui=!0;h.triggerInlineForm=function(e,f){a(e).trigger(f)};h.modules["form-core"].getGroupElements=
v;m=function(){h.scrollRoot=a.browser.webkit||"BackCompat"==j.compatMode?a(j.body):a(j.documentElement)};m();h.ready("DOM",m);h.getRelOffset=function(e,f){var e=a(e),h=a(f).offset(),c;a.swap(a(e)[0],{visibility:"hidden",display:"inline-block",left:0,top:0},function(){c=e.offset()});h.top-=c.top;h.left-=c.left;return h};h.validityAlert=function(){var e=!a.browser.msie||7<parseInt(a.browser.version,10)?"span":"label",i,l=!1,c=!1,b,d={hideDelay:5E3,showFor:function(e,h,j,n){d._create();var e=a(e),k=
a(e).getShadowElement(),m=d.getOffsetFromBody(k);d.clear();n?this.hide():(this.getMessage(e,h),this.position(k,m),i.css({fontSize:e.css("fontSize"),fontFamily:e.css("fontFamily")}),this.show(),this.hideDelay&&(l=setTimeout(b,this.hideDelay)),a(f).bind("resize.validityalert orientationchange.validityalert emchange.validityalert",function(){clearTimeout(c);c=setTimeout(function(){d.position(k)},9)}));j||this.setFocus(k,m)},getOffsetFromBody:function(a){return h.getRelOffset(i,a)},setFocus:function(c,
d){var f=a(c).getShadowFocusElement(),k=h.scrollRoot.scrollTop(),l=(d||f.offset()).top-30,m;h.getID&&"label"==e&&i.attr("for",h.getID(f));k>l&&(h.scrollRoot.animate({scrollTop:l-5},{queue:!1,duration:Math.max(Math.min(600,1.5*(k-l)),80)}),m=!0);try{f[0].focus()}catch(o){}m&&(h.scrollRoot.scrollTop(k),setTimeout(function(){h.scrollRoot.scrollTop(k)},0));setTimeout(function(){a(j).bind("focusout.validityalert",b)},10)},getMessage:function(b,c){c||(c=r(b[0])||b.prop("validationMessage"));c?a("span.va-box",
i).text(c):this.hide()},position:function(b,c){c=c?a.extend({},c):d.getOffsetFromBody(b);c.top+=b.outerHeight();i.css(c)},show:function(){"none"===i.css("display")&&i.css({opacity:0}).show();i.addClass("va-visible").fadeTo(400,1)},hide:function(){i.removeClass("va-visible").fadeOut()},clear:function(){clearTimeout(!1);clearTimeout(l);a(j).unbind(".validityalert");a(f).unbind(".validityalert");i.stop().removeAttr("for")},_create:function(){if(!i)i=d.errorBubble=a("<"+e+' class="validity-alert-wrapper" role="alert"><span  class="validity-alert"><span class="va-arrow"><span class="va-arrow-box"></span></span><span class="va-box"></span></span></'+
e+">").css({position:"absolute",display:"none"}),h.ready("DOM",function(){i.appendTo("body");a.fn.bgIframe&&a.browser.msie&&7>parseInt(a.browser.version,10)&&i.bgIframe()})}};b=a.proxy(d,"hide");return d}();(function(){var e,f=[],h;a(j).bind("invalid",function(c){if(!c.wrongWebkitInvalid){var b=a(c.target),d=b.getShadowElement();d.hasClass("form-ui-invalid")||(d.addClass("form-ui-invalid").removeClass("form-ui-valid"),setTimeout(function(){a(c.target).trigger("changedinvalid").trigger("changedvaliditystate")},
0));if(!e)e=a.Event("firstinvalid"),e.isInvalidUIPrevented=c.isDefaultPrevented,d=a.Event("firstinvalidsystem"),a(j).triggerHandler(d,{element:c.target,form:c.target.form,isInvalidUIPrevented:c.isDefaultPrevented}),b.trigger(e);e&&e.isDefaultPrevented()&&c.preventDefault();f.push(c.target);c.extraData="fix";clearTimeout(h);h=setTimeout(function(){var b={type:"lastinvalid",cancelable:!1,invalidlist:a(f)};e=!1;f=[];a(c.target).trigger(b,b)},9);d=b=null}})})();a.fn.getErrorMessage=function(){var e="",
f=this[0];f&&(e=r(f)||a.prop(f,"customValidationMessage")||a.prop(f,"validationMessage"));return e};u.replaceValidationUI&&h.ready("DOM forms",function(){a(j).bind("firstinvalid",function(e){e.isInvalidUIPrevented()||(e.preventDefault(),a.webshims.validityAlert.showFor(e.target,a(e.target).prop("customValidationMessage")))})})});
