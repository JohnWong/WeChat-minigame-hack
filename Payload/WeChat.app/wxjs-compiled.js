(function(){function L(a){__ISWKWEBVIEW?(M.push(a),a=Q(),window.weixinPostMessageHandlers.weixinDispatchMessage.postMessage(a)):(M.push(a),document.location=ca)}function Q(){if(B._fetchQueue!==da)return"";var a=t.stringify(M);M=[];var d=[];d[0]=a;d[1]=N;var h=d.join(""),d="";"yes"===R&&(d=F.SHA1(h).toString());h={};h[ea]=a;h[T]=d;return t.stringify(h)}function U(a){if(B._handleMessageFromWeixin!==fa)return"{}";var d;d=a[ga];var a=a[T],h=[];h[0]=d;h[1]=N;var h=h.join(""),j="";if("yes"===R&&(j=F.SHA1(h).toString(),
j!==a))return"{}";a=t.parse(d);switch(a[V]){case "callback":return"string"===typeof a[E]&&"function"===typeof O[a[E]]?(d=O[a[E]](a.__params),delete O[a[E]],t.stringify(d)):t.stringify({__err_code:"cb404"});case "event":"object"===typeof a[W]&&(X=a[W]);Y=a[Z];if("string"===typeof a[G]){if("function"===typeof C[a[G]]&&D(a[G]))return d=C[a[G]](a.__params),t.stringify(d);if("function"===typeof H[a[G]])return d=H[a[G]](a.__params),t.stringify(d)}return t.stringify({__err_code:"ev404"})}return"{}"}function D(a){return X.some(function(d){return d===
a})}function I(a){return B.env!==ha?"":v[a]}function w(a){if(B.log===ia){for(var d=[],h=0;h<arguments.length;h++)d.push(arguments[h]);var h=d.shift(),j;try{d.unshift(h),j=S.apply(null,d)}catch(b){j=a}p("log",{msg:j})}}function p(a,d,h){if("preInject"===document.__wxjsjs__isPreInject&&!0!==document.wxjsSysinit){var j={};j.params=d;j.callback=h;P[a]=j}else if(B.call===ja&&a&&"string"===typeof a){"object"!==typeof d&&(d={});j=(ka++).toString();"function"===typeof h&&(O[j]=h);h=[];h[0]=Y;h[1]=N;var h=
h.join(""),b="";"yes"===R&&(b=F.SHA1(h).toString());d[Z]=b;a={func:a,params:d};a[V]="call";a[E]=j;L(t.stringify(a))}}function x(a,d){a&&"string"===typeof a&&"function"===typeof d&&(H[a]=d)}function $(a,d){B.on===la&&a&&"string"===typeof a&&"function"===typeof d&&(C[a]=d)}function y(a,d){if("function"===typeof C[a]&&D(a))C[a](d);else if("function"===typeof H[a])H[a](d)}function J(a,d){var h=new Image,j=!1;h.onload=function(){j||(j=!0,d(h))};h.src=a;setTimeout(function(){j||(j=!0,d(h))},1E3)}function ma(a,
d){J(a.src,function(h){var j=/^data:image\/(png|jpg|jpeg|tiff|gif|bmp);base64,/i,b="";if(h.src.match(j))b=h.src;else if(629145.6>h.width*h.height){var c=document.createElement("canvas");c.width=h.width;c.height=h.height;c.getContext("2d").drawImage(h,0,0);var g="jpg",m=h.src.match(/\.(png|jpg|jpeg|tiff|gif|bmp)$/i);m&&(g=m[1].toLowerCase());try{b=c.toDataURL("image/"+g)}catch(k){w(k.message)}}d(b.replace(j,""),h,a)})}function na(){q('a[href^="weixin://viewimage/"]').on("click",function(a){for(var d=
"",d=("string"===typeof a.target.href&&0===a.target.href.search("weixin://viewimage/")?a.target:q(a.target).parents('a[href^="weixin://viewimage/"]')[0]).href.substr(19),h=q('a[href^="weixin://viewimage/"]'),j=[],b=0;b<h.length;b++)j.push(h[b].href.substr(19));p("imagePreview",{urls:j,current:d});a.preventDefault()})}function oa(){q('a[href^="weixin://readershare/"]').on("click",function(a){a.preventDefault();y("menu:share:weibo",v.shareWeiboData||{})});q('a[href^="weixin://readertimeline/"]').on("click",
function(a){a.preventDefault();y("menu:share:timeline",v.shareTimelineData||{})})}function pa(){for(var a=q("audio"),d=0;d<a.length;d++)if(!a[d].paused&&!a[d].ended){p("audioStateChanged",{state:"play"});break}a.on("play",function(){p("audioStateChanged",{state:"play"})});a.on("ended",function(){p("audioStateChanged",{state:"ended"})});a.on("pause",function(){p("audioStateChanged",{state:"pause"})});a=q("video");a.on("play",function(){p("videoStateChanged",{state:"play"})});a.on("ended",function(){p("videoStateChanged",
{state:"ended"})});a.on("pause",function(){p("videoStateChanged",{state:"pause"})})}function aa(){var a=window.getSelection().toString();if(a&&0<a.length)return a;for(var d=document.querySelectorAll("iframe"),h=0;h<d.length;++h)try{var j=d[h].contentWindow.getSelection().toString();if(0<j.length){a=j;break}}catch(b){}return a}function ba(a){var d=document.createElement("a");d.href=location.href;d.href=a;return d.href}(function(a){String.prototype.trim===a&&(String.prototype.trim=function(){return this.replace(/^\s+/,
"").replace(/\s+$/,"")});Array.prototype.reduce===a&&(Array.prototype.reduce=function(d){if(this===void 0||this===null)throw new TypeError;var h=Object(this),j=h.length>>>0,b=0,c;if(typeof d!="function")throw new TypeError;if(j==0&&arguments.length==1)throw new TypeError;if(arguments.length>=2)c=arguments[1];else{do{if(b in h){c=h[b++];break}if(++b>=j)throw new TypeError;}while(1)}for(;b<j;){b in h&&(c=d.call(a,c,h[b],b,h));b++}return c})})();var q=function(){function a(e){return"[object Function]"==
F.call(e)}function d(e){return e instanceof Object}function h(e){var b,f;if("[object Object]"!==F.call(e))return!1;f=a(e.constructor)&&e.constructor.prototype;if(!f||!hasOwnProperty.call(f,"isPrototypeOf"))return!1;for(b in e);return b===o||hasOwnProperty.call(e,b)}function j(e){return e instanceof Array}function b(e){return"number"==typeof e.length}function c(e){return e.filter(function(e){return e!==o&&null!==e})}function g(e){return e.replace(/::/g,"/").replace(/([A-Z]+)([A-Z][a-z])/g,"$1_$2").replace(/([a-z\d])([A-Z])/g,
"$1_$2").replace(/_/g,"-").toLowerCase()}function m(e){return e in q?q[e]:q[e]=RegExp("(^|\\s)"+e+"(\\s|$)")}function k(e,a){return a===o?i(e):i(e).filter(a)}function r(e,b,f,c){return a(b)?b.call(e,f,c):b}function n(e,a,b){var f=e%2?a:a.parentNode;f?f.insertBefore(b,!e?a.nextSibling:1==e?f.firstChild:2==e?a:null):i(b).remove()}function l(e,a){a(e);for(var b in e.childNodes)l(e.childNodes[b],a)}var o,f,i,A,s=[],K=s.slice,z=window.document,p={},q={},t=z.defaultView.getComputedStyle,v={"column-count":1,
columns:1,"font-weight":1,"line-height":1,opacity:1,"z-index":1,zoom:1},w=/^\s*<(\w+|!)[^>]*>/,y=[1,3,8,9,11],x=z.createElement("table"),B=z.createElement("tr"),C={tr:z.createElement("tbody"),tbody:x,thead:x,tfoot:x,td:B,th:B,"*":z.createElement("div")},G=/complete|loaded|interactive/,H=/^\.([\w-]+)$/,J=/^#([\w-]+)$/,L=/^[\w-]+$/,F={}.toString,u={},E,D,I=z.createElement("div");u.matches=function(e,a){if(!e||1!==e.nodeType)return!1;var b=e.webkitMatchesSelector||e.mozMatchesSelector||e.oMatchesSelector||
e.matchesSelector;if(b)return b.call(e,a);var f;f=e.parentNode;(b=!f)&&(f=I).appendChild(e);f=~u.qsa(f,a).indexOf(e);b&&I.removeChild(e);return f};E=function(e){return e.replace(/-+(.)?/g,function(e,a){return a?a.toUpperCase():""})};D=function(e){return e.filter(function(a,b){return e.indexOf(a)==b})};u.fragment=function(e,a){a===o&&(a=w.test(e)&&RegExp.$1);a in C||(a="*");var b=C[a];b.innerHTML=""+e;return i.each(K.call(b.childNodes),function(){b.removeChild(this)})};u.Z=function(e,a){e=e||[];e.__proto__=
arguments.callee.prototype;e.selector=a||"";return e};u.isZ=function(e){return e instanceof u.Z};u.init=function(e,b){if(e){if(a(e))return i(z).ready(e);if(u.isZ(e))return e;var f;if(j(e))f=c(e);else if(h(e))f=[i.extend({},e)],e=null;else if(0<=y.indexOf(e.nodeType)||e===window)f=[e],e=null;else if(w.test(e))f=u.fragment(e.trim(),RegExp.$1),e=null;else{if(b!==o)return i(b).find(e);f=u.qsa(z,e)}return u.Z(f,e)}return u.Z()};i=function(e,a){return u.init(e,a)};i.extend=function(e){K.call(arguments,
1).forEach(function(a){for(f in a)a[f]!==o&&(e[f]=a[f])});return e};u.qsa=function(e,a){var b;return e===z&&J.test(a)?(b=e.getElementById(RegExp.$1))?[b]:s:1!==e.nodeType&&9!==e.nodeType?s:K.call(H.test(a)?e.getElementsByClassName(RegExp.$1):L.test(a)?e.getElementsByTagName(a):e.querySelectorAll(a))};i.isFunction=a;i.isObject=d;i.isArray=j;i.isPlainObject=h;i.inArray=function(e,a,b){return s.indexOf.call(a,e,b)};i.trim=function(e){return e.trim()};i.uuid=0;i.map=function(e,a){var f,c=[],i;if(b(e))for(i=
0;i<e.length;i++)f=a(e[i],i),null!=f&&c.push(f);else for(i in e)f=a(e[i],i),null!=f&&c.push(f);return 0<c.length?[].concat.apply([],c):c};i.each=function(e,a){var f;if(b(e))for(f=0;f<e.length&&!1!==a.call(e[f],f,e[f]);f++);else for(f in e)if(!1===a.call(e[f],f,e[f]))break;return e};i.fn={forEach:s.forEach,reduce:s.reduce,push:s.push,indexOf:s.indexOf,concat:s.concat,map:function(e){return i.map(this,function(a,b){return e.call(a,b,a)})},slice:function(){return i(K.apply(this,arguments))},ready:function(e){G.test(z.readyState)?
e(i):z.addEventListener("DOMContentLoaded",function(){e(i)},!1);return this},get:function(e){return e===o?K.call(this):this[e]},toArray:function(){return this.get()},size:function(){return this.length},remove:function(){return this.each(function(){null!=this.parentNode&&this.parentNode.removeChild(this)})},each:function(e){this.forEach(function(a,b){e.call(a,b,a)});return this},filter:function(e){return i([].filter.call(this,function(a){return u.matches(a,e)}))},add:function(e,a){return i(D(this.concat(i(e,
a))))},is:function(e){return 0<this.length&&u.matches(this[0],e)},not:function(e){var f=[];if(a(e)&&e.call!==o)this.each(function(a){e.call(this,a)||f.push(this)});else{var c="string"==typeof e?this.filter(e):b(e)&&a(e.item)?K.call(e):i(e);this.forEach(function(e){0>c.indexOf(e)&&f.push(e)})}return i(f)},eq:function(e){return-1===e?this.slice(e):this.slice(e,+e+1)},first:function(){var e=this[0];return e&&!d(e)?e:i(e)},last:function(){var e=this[this.length-1];return e&&!d(e)?e:i(e)},find:function(e){var a;
a=1==this.length?u.qsa(this[0],e):this.map(function(){return u.qsa(this,e)});return i(a)},closest:function(e,a){for(var b=this[0];b&&!u.matches(b,e);)b=b!==a&&b!==z&&b.parentNode;return i(b)},parents:function(e){for(var a=[],b=this;0<b.length;)b=i.map(b,function(e){if((e=e.parentNode)&&e!==z&&0>a.indexOf(e))return a.push(e),e});return k(a,e)},parent:function(e){return k(D(this.pluck("parentNode")),e)},children:function(e){return k(this.map(function(){return K.call(this.children)}),e)},siblings:function(e){return k(this.map(function(e,
a){return K.call(a.parentNode.children).filter(function(e){return e!==a})}),e)},empty:function(){return this.each(function(){this.innerHTML=""})},pluck:function(e){return this.map(function(){return this[e]})},show:function(){return this.each(function(){"none"==this.style.display&&(this.style.display=null);if("none"==t(this,"").getPropertyValue("display")){var e=this.style,a=this.nodeName,b,f;p[a]||(b=z.createElement(a),z.body.appendChild(b),f=t(b,"").getPropertyValue("display"),b.parentNode.removeChild(b),
"none"==f&&(f="block"),p[a]=f);e.display=p[a]}})},replaceWith:function(e){return this.before(e).remove()},wrap:function(e){return this.each(function(){i(this).wrapAll(i(e)[0].cloneNode(!1))})},wrapAll:function(e){this[0]&&(i(this[0]).before(e=i(e)),e.append(this));return this},unwrap:function(){this.parent().each(function(){i(this).replaceWith(i(this).children())});return this},clone:function(){return i(this.map(function(){return this.cloneNode(!0)}))},hide:function(){return this.css("display","none")},
toggle:function(e){return(e===o?"none"==this.css("display"):e)?this.show():this.hide()},prev:function(){return i(this.pluck("previousElementSibling"))},next:function(){return i(this.pluck("nextElementSibling"))},html:function(e){return e===o?0<this.length?this[0].innerHTML:null:this.each(function(a){var b=this.innerHTML;i(this).empty().append(r(this,e,a,b))})},text:function(e){return e===o?0<this.length?this[0].textContent:null:this.each(function(){this.textContent=e})},attr:function(e,a){var b;return"string"==
typeof e&&a===o?0==this.length||1!==this[0].nodeType?o:"value"==e&&"INPUT"==this[0].nodeName?this.val():!(b=this[0].getAttribute(e))&&e in this[0]?this[0][e]:b:this.each(function(b){if(1===this.nodeType)if(d(e))for(f in e)this.setAttribute(f,e[f]);else this.setAttribute(e,r(this,a,b,this.getAttribute(e)))})},removeAttr:function(e){return this.each(function(){1===this.nodeType&&this.removeAttribute(e)})},prop:function(e,a){return a===o?this[0]?this[0][e]:o:this.each(function(b){this[e]=r(this,a,b,
this[e])})},data:function(e,a){var b=this.attr("data-"+g(e),a);return null!==b?b:o},val:function(a){return a===o?0<this.length?this[0].value:o:this.each(function(b){this.value=r(this,a,b,this.value)})},offset:function(){if(0==this.length)return null;var a=this[0].getBoundingClientRect();return{left:a.left+window.pageXOffset,top:a.top+window.pageYOffset,width:a.width,height:a.height}},css:function(a,b){if(b===o&&"string"==typeof a)return 0==this.length?o:this[0].style[E(a)]||t(this[0],"").getPropertyValue(a);
var c="";for(f in a)"string"==typeof a[f]&&""==a[f]?this.each(function(){this.style.removeProperty(g(f))}):c+=g(f)+":"+("number"==typeof a[f]&&!v[g(f)]?a[f]+"px":a[f])+";";"string"==typeof a&&(""==b?this.each(function(){this.style.removeProperty(g(a))}):c=g(a)+":"+("number"==typeof b&&!v[g(a)]?b+"px":b));return this.each(function(){this.style.cssText+=";"+c})},index:function(a){return a?this.indexOf(i(a)[0]):this.parent().children().indexOf(this[0])},hasClass:function(a){return 1>this.length?!1:m(a).test(this[0].className)},
addClass:function(a){return this.each(function(b){A=[];var f=this.className;r(this,a,b,f).split(/\s+/g).forEach(function(a){i(this).hasClass(a)||A.push(a)},this);A.length&&(this.className+=(f?" ":"")+A.join(" "))})},removeClass:function(a){return this.each(function(b){if(a===o)return this.className="";A=this.className;r(this,a,b,A).split(/\s+/g).forEach(function(a){A=A.replace(m(a)," ")});this.className=A.trim()})},toggleClass:function(a,b){return this.each(function(f){f=r(this,a,f,this.className);
(b===o?!i(this).hasClass(f):b)?i(this).addClass(f):i(this).removeClass(f)})}};["width","height"].forEach(function(a){i.fn[a]=function(b){var f,c=a.replace(/./,function(a){return a[0].toUpperCase()});return b===o?this[0]==window?window["inner"+c]:this[0]==z?z.documentElement["offset"+c]:(f=this.offset())&&f[a]:this.each(function(f){var c=i(this);c.css(a,r(this,b,f,c[a]()))})}});["after","prepend","before","append"].forEach(function(a,b){i.fn[a]=function(){var a=i.map(arguments,function(a){return d(a)?
a:u.fragment(a)});if(1>a.length)return this;var e=this.length,f=1<e,c=2>b;return this.each(function(i,A){for(var g=0;g<a.length;g++){var s=a[c?a.length-g-1:g];l(s,function(a){null!=a.nodeName&&("SCRIPT"===a.nodeName.toUpperCase()&&(!a.type||"text/javascript"===a.type))&&window.eval.call(window,a.innerHTML)});f&&i<e-1&&(s=s.cloneNode(!0));n(b,A,s)}})};i.fn[b%2?a+"To":"insert"+(b?"Before":"After")]=function(b){i(b)[a](this);return this}});u.Z.prototype=i.fn;u.camelize=E;u.uniq=D;i._WXJS=u;return i}();
window._WXJS=q;(function(a){function d(a){return a._zid||(a._zid=n++)}function h(a,b,f,c){b=j(b);if(b.ns)var i=RegExp("(?:^| )"+b.ns.replace(" "," .* ?")+"(?: |$)");return(r[d(a)]||[]).filter(function(a){return a&&(!b.e||a.e==b.e)&&(!b.ns||i.test(a.ns))&&(!f||d(a.fn)===d(f))&&(!c||a.sel==c)})}function j(a){a=(""+a).split(".");return{e:a[0],ns:a.slice(1).sort().join(" ")}}function b(b,f,c){a.isObject(b)?a.each(b,c):b.split(/\s/).forEach(function(a){c(a,f)})}function c(f,c,i,g,l,k){var k=!!k,h=d(f),
n=r[h]||(r[h]=[]);b(c,i,function(b,c){var i=l&&l(c,b),d=i||c,s=function(a){var b=d.apply(f,[a].concat(a.data));!1===b&&a.preventDefault();return b},i=a.extend(j(b),{fn:c,proxy:s,sel:g,del:i,i:n.length});n.push(i);f.addEventListener(i.e,s,k)})}function g(a,f,c,i){var g=d(a);b(f||"",c,function(b,f){h(a,b,f,i).forEach(function(b){delete r[g][b.i];a.removeEventListener(b.e,b.proxy,!1)})})}function m(b){var c=a.extend({originalEvent:b},b);a.each(i,function(a,i){c[a]=function(){this[i]=o;return b[a].apply(b,
arguments)};c[i]=f});return c}function k(a){if(!("defaultPrevented"in a)){a.defaultPrevented=!1;var b=a.preventDefault;a.preventDefault=function(){this.defaultPrevented=!0;b.call(this)}}}var r={},n=1,l={};l.click=l.mousedown=l.mouseup=l.mousemove="MouseEvents";a.event={add:c,remove:g};a.proxy=function(b,f){if(a.isFunction(b)){var c=function(){return b.apply(f,arguments)};c._zid=d(b);return c}if("string"==typeof f)return a.proxy(b[f],b);throw new TypeError("expected function");};a.fn.bind=function(a,
b){return this.each(function(){c(this,a,b)})};a.fn.unbind=function(a,b){return this.each(function(){g(this,a,b)})};a.fn.one=function(a,b){return this.each(function(f,i){c(this,a,b,null,function(a,b){return function(){var f=a.apply(i,arguments);g(i,b,a);return f}})})};var o=function(){return!0},f=function(){return!1},i={preventDefault:"isDefaultPrevented",stopImmediatePropagation:"isImmediatePropagationStopped",stopPropagation:"isPropagationStopped"};a.fn.delegate=function(b,f,i){var g=!1;if("blur"==
f||"focus"==f)a.iswebkit?f="blur"==f?"focusout":"focus"==f?"focusin":f:g=!0;return this.each(function(d,l){c(l,f,i,b,function(f){return function(c){var i,g=a(c.target).closest(b,l).get(0);if(g)return i=a.extend(m(c),{currentTarget:g,liveFired:l}),f.apply(g,[i].concat([].slice.call(arguments,1)))}},g)})};a.fn.undelegate=function(a,b,f){return this.each(function(){g(this,b,f,a)})};a.fn.live=function(b,f){a(document.body).delegate(this.selector,b,f);return this};a.fn.die=function(b,f){a(document.body).undelegate(this.selector,
b,f);return this};a.fn.on=function(b,f,c){return void 0==f||a.isFunction(f)?this.bind(b,f):this.delegate(f,b,c)};a.fn.off=function(b,f,c){return void 0==f||a.isFunction(f)?this.unbind(b,f):this.undelegate(f,b,c)};a.fn.trigger=function(b,f){"string"==typeof b&&(b=a.Event(b));k(b);b.data=f;return this.each(function(){"dispatchEvent"in this&&this.dispatchEvent(b)})};a.fn.triggerHandler=function(b,f){var c,i;this.each(function(g,d){c=m("string"==typeof b?a.Event(b):b);c.data=f;c.target=d;a.each(h(d,b.type||
b),function(a,b){i=b.proxy(c);if(c.isImmediatePropagationStopped())return!1})});return i};"focusin focusout load resize scroll unload click dblclick mousedown mouseup mousemove mouseover mouseout change select keydown keypress keyup error".split(" ").forEach(function(b){a.fn[b]=function(a){return this.bind(b,a)}});["focus","blur"].forEach(function(b){a.fn[b]=function(a){if(a)this.bind(b,a);else if(this.length)try{this.get(0)[b]()}catch(f){}return this}});a.Event=function(a,b){var f=document.createEvent(l[a]||
"Events"),c=!0;if(b)for(var i in b)"bubbles"==i?c=!!b[i]:f[i]=b[i];f.initEvent(a,c,!0,null,null,null,null,null,null,null,null,null,null,null,null);return f}})(q);(function(a){function d(a){var d=this.os={},b=this.browser={},c=a.match(/WebKit\/([\d.]+)/),g=a.match(/(Android)\s+([\d.]+)/),m=a.match(/(iPad).*OS\s([\d_]+)/),k=!m&&a.match(/(iPhone\sOS)\s([\d_]+)/),r=a.match(/(webOS|hpwOS)[\s\/]([\d.]+)/),n=r&&a.match(/TouchPad/),l=a.match(/Kindle\/([\d.]+)/),o=a.match(/Silk\/([\d._]+)/),f=a.match(/(BlackBerry).*Version\/([\d.]+)/);
if(b.webkit=!!c)b.version=c[1];g&&(d.android=!0,d.version=g[2]);k&&(d.ios=d.iphone=!0,d.version=k[2].replace(/_/g,"."));m&&(d.ios=d.ipad=!0,d.version=m[2].replace(/_/g,"."));r&&(d.webos=!0,d.version=r[2]);n&&(d.touchpad=!0);f&&(d.blackberry=!0,d.version=f[2]);l&&(d.kindle=!0,d.version=l[1]);o&&(b.silk=!0,b.version=o[1]);!o&&(d.android&&a.match(/Kindle Fire/))&&(b.silk=!0)}d.call(a,navigator.userAgent);a.__detect=d})(q);var S=function(){function a(a){return Object.prototype.toString.call(a).slice(8,
-1).toLowerCase()}var d=function(){d.cache.hasOwnProperty(arguments[0])||(d.cache[arguments[0]]=d.parse(arguments[0]));return d.format.call(null,d.cache[arguments[0]],arguments)};d.format=function(d,j){var b=1,c=d.length,g="",m=[],k,r,n,l;for(k=0;k<c;k++)if(g=a(d[k]),"string"===g)m.push(d[k]);else if("array"===g){n=d[k];if(n[2]){g=j[b];for(r=0;r<n[2].length;r++){if(!g.hasOwnProperty(n[2][r]))throw S('[sprintf] property "%s" does not exist',n[2][r]);g=g[n[2][r]]}}else g=n[1]?j[n[1]]:j[b++];if(/[^s]/.test(n[8])&&
"number"!=a(g))throw S("[sprintf] expecting number but found %s",a(g));switch(n[8]){case "b":g=g.toString(2);break;case "c":g=String.fromCharCode(g);break;case "d":g=parseInt(g,10);break;case "e":g=n[7]?g.toExponential(n[7]):g.toExponential();break;case "f":g=n[7]?parseFloat(g).toFixed(n[7]):parseFloat(g);break;case "o":g=g.toString(8);break;case "s":g=(g=""+g)&&n[7]?g.substring(0,n[7]):g;break;case "u":g=Math.abs(g);break;case "x":g=g.toString(16);break;case "X":g=g.toString(16).toUpperCase()}g=
/[def]/.test(n[8])&&n[3]&&0<=g?"+"+g:g;r=n[4]?"0"==n[4]?"0":n[4].charAt(1):" ";l=n[6]-(""+g).length;if(n[6]){for(var o=[];0<l;o[--l]=r);r=o.join("")}else r="";m.push(n[5]?g+r:r+g)}return m.join("")};d.cache={};d.parse=function(a){for(var d=[],b=[],c=0;a;){if(null!==(d=/^[^\x25]+/.exec(a)))b.push(d[0]);else if(null!==(d=/^\x25{2}/.exec(a)))b.push("%");else if(null!==(d=/^\x25(?:([1-9]\d*)\$|\(([^\)]+)\))?(\+)?(0|'[^$])?(-)?(\d+)?(?:\.(\d+))?([b-fosuxX])/.exec(a))){if(d[2]){var c=c|1,g=[],m=d[2],k=
[];if(null!==(k=/^([a-z_][a-z_\d]*)/i.exec(m)))for(g.push(k[1]);""!==(m=m.substring(k[0].length));)if(null!==(k=/^\.([a-z_][a-z_\d]*)/i.exec(m)))g.push(k[1]);else if(null!==(k=/^\[(\d+)\]/.exec(m)))g.push(k[1]);else throw"[sprintf] huh?";else throw"[sprintf] huh?";d[2]=g}else c|=2;if(3===c)throw"[sprintf] mixing positional and named placeholders is not (yet) supported";b.push(d)}else throw"[sprintf] huh?";a=a.substring(d[0].length)}return b};return d}(),t;t||(t={});(function(){function a(a){return 10>
a?"0"+a:a}function d(a){b.lastIndex=0;return b.test(a)?'"'+a.replace(b,function(a){var b=m[a];return"string"===typeof b?b:"\\u"+("0000"+a.charCodeAt(0).toString(16)).slice(-4)})+'"':'"'+a+'"'}function h(a,b){var l,m,f,i,A=c,s,j=b[a];"function"===typeof k&&(j=k.call(b,a,j));switch(typeof j){case "string":return d(j);case "number":return isFinite(j)?""+j:"null";case "boolean":case "null":return""+j;case "object":if(!j)return"null";c+=g;s=[];if("[object Array]"===Object.prototype.toString.apply(j)){i=
j.length;for(l=0;l<i;l+=1)s[l]=h(l,j)||"null";f=0===s.length?"[]":c?"[\n"+c+s.join(",\n"+c)+"\n"+A+"]":"["+s.join(",")+"]";c=A;return f}if(k&&"object"===typeof k){i=k.length;for(l=0;l<i;l+=1)"string"===typeof k[l]&&(m=k[l],(f=h(m,j))&&s.push(d(m)+(c?": ":":")+f))}else for(m in j)Object.prototype.hasOwnProperty.call(j,m)&&(f=h(m,j))&&s.push(d(m)+(c?": ":":")+f);f=0===s.length?"{}":c?"{\n"+c+s.join(",\n"+c)+"\n"+A+"}":"{"+s.join(",")+"}";c=A;return f}}"function"!==typeof Date.prototype.toJSON&&(Date.prototype.toJSON=
function(){return isFinite(this.valueOf())?this.getUTCFullYear()+"-"+a(this.getUTCMonth()+1)+"-"+a(this.getUTCDate())+"T"+a(this.getUTCHours())+":"+a(this.getUTCMinutes())+":"+a(this.getUTCSeconds())+"Z":null},String.prototype.toJSON=Number.prototype.toJSON=Boolean.prototype.toJSON=function(){return this.valueOf()});var j=/[\u0000\u00ad\u0600-\u0604\u070f\u17b4\u17b5\u200c-\u200f\u2028-\u202f\u2060-\u206f\ufeff\ufff0-\uffff]/g,b=/[\\\"\x00-\x1f\x7f-\x9f\u00ad\u0600-\u0604\u070f\u17b4\u17b5\u200c-\u200f\u2028-\u202f\u2060-\u206f\ufeff\ufff0-\uffff]/g,
c,g,m={"\u0008":"\\b","\t":"\\t","\n":"\\n","\u000c":"\\f","\r":"\\r",'"':'\\"',"\\":"\\\\"},k;"function"!==typeof t.stringify&&(t.stringify=function(a,b,d){var m;g=c="";if(typeof d==="number")for(m=0;m<d;m=m+1)g=g+" ";else typeof d==="string"&&(g=d);if((k=b)&&typeof b!=="function"&&(typeof b!=="object"||typeof b.length!=="number"))throw Error("JSON.stringify");return h("",{"":a})});"function"!==typeof t.parse&&(t.parse=function(a,b){function c(a,i){var d,g,k=a[i];if(k&&typeof k==="object")for(d in k)if(Object.prototype.hasOwnProperty.call(k,
d)){g=c(k,d);g!==void 0?k[d]=g:delete k[d]}return b.call(a,i,k)}var d,a=""+a;j.lastIndex=0;j.test(a)&&(a=a.replace(j,function(a){return"\\u"+("0000"+a.charCodeAt(0).toString(16)).slice(-4)}));if(/^[\],:{}\s]*$/.test(a.replace(/\\(?:["\\\/bfnrt]|u[0-9a-fA-F]{4})/g,"@").replace(/"[^"\\\n\r]*"|true|false|null|-?\d+(?:\.\d*)?(?:[eE][+\-]?\d+)?/g,"]").replace(/(?:^|:|,)(?:\s*\[)+/g,""))){d=eval("("+a+")");return typeof b==="function"?c({"":d},""):d}throw new SyntaxError("JSON.parse");})})();var F=F||function(a,
d){var h={},j=h.lib={},b=function(){},c=j.Base={extend:function(a){b.prototype=this;var c=new b;a&&c.mixIn(a);c.hasOwnProperty("init")||(c.init=function(){c.$super.init.apply(this,arguments)});c.init.prototype=c;c.$super=this;return c},create:function(){var a=this.extend();a.init.apply(a,arguments);return a},init:function(){},mixIn:function(a){for(var b in a)a.hasOwnProperty(b)&&(this[b]=a[b]);a.hasOwnProperty("toString")&&(this.toString=a.toString)},clone:function(){return this.init.prototype.extend(this)}},
g=j.WordArray=c.extend({init:function(a,b){a=this.words=a||[];this.sigBytes=b!=d?b:4*a.length},toString:function(a){return(a||k).stringify(this)},concat:function(a){var b=this.words,c=a.words,d=this.sigBytes,a=a.sigBytes;this.clamp();if(d%4)for(var g=0;g<a;g++)b[d+g>>>2]|=(c[g>>>2]>>>24-8*(g%4)&255)<<24-8*((d+g)%4);else if(65535<c.length)for(g=0;g<a;g+=4)b[d+g>>>2]=c[g>>>2];else b.push.apply(b,c);this.sigBytes+=a;return this},clamp:function(){var b=this.words,c=this.sigBytes;b[c>>>2]&=4294967295<<
32-8*(c%4);b.length=a.ceil(c/4)},clone:function(){var a=c.clone.call(this);a.words=this.words.slice(0);return a},random:function(b){for(var c=[],d=0;d<b;d+=4)c.push(4294967296*a.random()|0);return new g.init(c,b)}}),m=h.enc={},k=m.Hex={stringify:function(a){for(var b=a.words,a=a.sigBytes,c=[],d=0;d<a;d++){var g=b[d>>>2]>>>24-8*(d%4)&255;c.push((g>>>4).toString(16));c.push((g&15).toString(16))}return c.join("")},parse:function(a){for(var b=a.length,c=[],d=0;d<b;d+=2)c[d>>>3]|=parseInt(a.substr(d,2),
16)<<24-4*(d%8);return new g.init(c,b/2)}},r=m.Latin1={stringify:function(a){for(var b=a.words,a=a.sigBytes,c=[],d=0;d<a;d++)c.push(String.fromCharCode(b[d>>>2]>>>24-8*(d%4)&255));return c.join("")},parse:function(a){for(var b=a.length,c=[],d=0;d<b;d++)c[d>>>2]|=(a.charCodeAt(d)&255)<<24-8*(d%4);return new g.init(c,b)}},n=m.Utf8={stringify:function(a){try{return decodeURIComponent(escape(r.stringify(a)))}catch(b){throw Error("Malformed UTF-8 data");}},parse:function(a){return r.parse(unescape(encodeURIComponent(a)))}},
l=j.BufferedBlockAlgorithm=c.extend({reset:function(){this._data=new g.init;this._nDataBytes=0},_append:function(a){"string"==typeof a&&(a=n.parse(a));this._data.concat(a);this._nDataBytes+=a.sigBytes},_process:function(b){var c=this._data,d=c.words,k=c.sigBytes,l=this.blockSize,m=k/(4*l),m=b?a.ceil(m):a.max((m|0)-this._minBufferSize,0),b=m*l,k=a.min(4*b,k);if(b){for(var h=0;h<b;h+=l)this._doProcessBlock(d,h);h=d.splice(0,b);c.sigBytes-=k}return new g.init(h,k)},clone:function(){var a=c.clone.call(this);
a._data=this._data.clone();return a},_minBufferSize:0});j.Hasher=l.extend({cfg:c.extend(),init:function(a){this.cfg=this.cfg.extend(a);this.reset()},reset:function(){l.reset.call(this);this._doReset()},update:function(a){this._append(a);this._process();return this},finalize:function(a){a&&this._append(a);return this._doFinalize()},blockSize:16,_createHelper:function(a){return function(b,c){return(new a.init(c)).finalize(b)}},_createHmacHelper:function(a){return function(b,c){return(new o.HMAC.init(a,
c)).finalize(b)}}});var o=h.algo={};return h}(Math);(function(){var a=F,d=a.lib,h=d.WordArray,j=d.Hasher,b=[],d=a.algo.SHA1=j.extend({_doReset:function(){this._hash=new h.init([1732584193,4023233417,2562383102,271733878,3285377520])},_doProcessBlock:function(a,d){for(var m=this._hash.words,k=m[0],h=m[1],n=m[2],l=m[3],j=m[4],f=0;80>f;f++){if(16>f)b[f]=a[d+f]|0;else{var i=b[f-3]^b[f-8]^b[f-14]^b[f-16];b[f]=i<<1|i>>>31}i=(k<<5|k>>>27)+j+b[f];i=20>f?i+((h&n|~h&l)+1518500249):40>f?i+((h^n^l)+1859775393):
60>f?i+((h&n|h&l|n&l)-1894007588):i+((h^n^l)-899497514);j=l;l=n;n=h<<30|h>>>2;h=k;k=i}m[0]=m[0]+k|0;m[1]=m[1]+h|0;m[2]=m[2]+n|0;m[3]=m[3]+l|0;m[4]=m[4]+j|0},_doFinalize:function(){var a=this._data,b=a.words,d=8*this._nDataBytes,k=8*a.sigBytes;b[k>>>5]|=128<<24-k%32;b[(k+64>>>9<<4)+14]=Math.floor(d/4294967296);b[(k+64>>>9<<4)+15]=d;a.sigBytes=4*b.length;this._process();return this._hash},clone:function(){var a=j.clone.call(this);a._hash=this._hash.clone();return a}});a.SHA1=j._createHelper(d);a.HmacSHA1=
j._createHmacHelper(d)})();var M=[],ka=1E3,O={},H={},v={},P=[],V="__msg_type",E="__callback_id",G="__event_id",ca="weixin://dispatch_message/",X=[],C={},W="__runOn3rd_apis",N="xx_yy",ga="__json_message",ea="__msg_queue",Z="__context_key",Y="",R="isUseMd5_check",T="__sha_key",fa=U,da=Q,ia=w,ha=I,la=$,ja=p,qa=window.alert;window.alert=function(a){if(!("yes"===document.__wxjsjs__isWebviewWillClosed||"yes"===document.__wxjsjs__isDisableAlertView))return qa(a)};var ra=window.prompt;window.prompt=function(a,
d){if(!("yes"===document.__wxjsjs__isWebviewWillClosed||"yes"===document.__wxjsjs__isDisableAlertView))return ra(a,d)};var B={invoke:p,call:p,on:$,env:I,log:w,_getSelectedText:aa,_fetchQueue:Q};try{Object.defineProperty(B,"_handleMessageFromWeixin",{value:U,writable:!1,configurable:!1})}catch(ua){return}if(window.WeixinJSBridge)q.extend(window.WeixinJSBridge,B);else try{Object.defineProperty(window,"WeixinJSBridge",{value:B,writable:!1,configurable:!1})}catch(va){return}(function(){function a(a,c){for(var d=
document.elementFromPoint(a,c),h=d;h&&"IMG"!=h.tagName;)h=h.parentNode;if(!h)var k=function(a,b){for(var c in a.childNodes){if(b(c))return c;var d=k(c,b);if(d)return d}return null},h=k(d,function(a){return a&&"IMG"==a.tagName});return h&&"IMG"==h.tagName?h:null}x("menu:setfont",function(a){if("function"===typeof changefont){var c=parseInt(a.fontSize);changefont(c)}else if(!a.isFirstAutoSet||!("2"===a.fontSize||"100"===a.fontScale))if(c=I("system"),!("string"===typeof c&&0<=c.indexOf("iPhone OS")&&
4>=Number(c.substr(c.indexOf(".")-1,1)))){c=parseInt(a.fontScale);if(50<=c&&500>=c)a=a.fontScale+"%";else switch(a.fontSize){case "1":a="80%";break;case "2":a="100%";break;case "3":a="120%";break;case "4":a="140%";break;default:return}document.getElementsByTagName("body")[0].style.webkitTextSizeAdjust=a}});var d=function(a){var c=!1,d=function(d){c||(c=!0,a(d))},h=q("img");if(0==h.length)return d();for(var k={},j=[],n=0;n<h.length;n++){var l=h[n];if(!("none"==q(l).css("display")||"hidden"==q(l).css("visibility"))&&
!k[l.src])k[l.src]=1,j.push(l)}for(var o=[],n=0;n<j.length&&100>n;n++)h=j[n],k=new Image,k.onload=function(){this.isLoaded=!0;for(var a=0,b=0;b<o.length;b++){var c=o[b];if(!c.isLoaded)break;a++;if(290<c.width&&290<c.height){d(c);break}}a==o.length&&d()},k.src=h.src,o.push(k);setTimeout(function(){for(var a=0;a<o.length;a++){var b=o[a];if(b.isLoaded&&290<b.width&&290<b.height){d(b);return}}d()},1E3)},h=function(a){var c=!1,d=function(d){c||(c=!0,a(d))},h=q("img");if(0==h.length)return d();for(var k=
{},j=[],n=0;n<h.length;n++){var l=h[n];if(!("none"==q(l).css("display")||"hidden"==q(l).css("visibility"))&&!(0!==l.src.indexOf("http")&&0!==l.src.indexOf("https"))&&!k[l.src])k[l.src]=1,j.push(l)}for(var o=[],n=0;n<j.length&&100>n;n++)h=j[n],k=new Image,k.onload=function(){this.isLoaded=!0;for(var a=0,b=0;b<o.length;b++){var c=o[b];if(!c.isLoaded)break;a++;if(50<c.width&&50<c.height){d(c);break}}a==o.length&&d()},k.src=h.src,o.push(k);setTimeout(function(){for(var a=0;a<o.length;a++){var b=o[a];
if(b.isLoaded&&50<b.width&&50<b.height){d(b);return}}d()},1E3)};x("menu:share:timeline",function(a){w("share timeline");var c;"string"===typeof a.title?(c=a,p("shareTimeline",c)):(c={link:document.documentURI||v.init_url,desc:document.documentURI||v.init_url,title:document.title},d(function(a){a&&(c.img_url=a.src,c.img_width=a.width,c.img_height=a.height);p("shareTimeline",c)}))});x("menu:share:qq",function(a){w("share QQ");var c;"string"===typeof a.title?(c=a,p("shareQQ",c)):(c={link:document.documentURI||
v.init_url,desc:document.documentURI||v.init_url,title:document.title},d(function(a){a&&(c.img_url=a.src,c.img_width=a.width,c.img_height=a.height);p("shareQQ",c)}))});x("menu:share:weiboApp",function(a){w("share Weibo App");var c;"string"===typeof a.title?(c=a,p("shareWeiboApp",c)):(c={link:document.documentURI||v.init_url,desc:document.documentURI||v.init_url,title:document.title},d(function(a){a&&(c.img_url=a.src,c.img_width=a.width,c.img_height=a.height);p("shareWeiboApp",c)}))});var j=function(a){w("share weibo");
var c;c="string"===typeof a.content?a:{content:document.title,type:"link",title:document.title,link:document.documentURI||v.short_url||v.init_url};d(function(a){a&&(c.img_url=a.src);p("shareWeibo",c)})};x("menu:share:weibo",j);x("menu:share:QZone",function(a){w("share QZone");var c;"string"===typeof a.title?(c=a,p("shareQZone",c)):(c={link:document.documentURI||v.init_url,desc:document.documentURI||v.init_url,title:document.title},d(function(a){a&&(c.img_url=a.src,c.img_width=a.width,c.img_height=
a.height);p("shareQZone",c)}))});x("general:share",function(a){w("general share");var c=function(c,d){"weibo"===a.shareTo&&p("shareWeibo",c,function(a){a.err_msg="share_weibo:ok"===a.err_msg?"general_share:ok":"share_weibo:cancel"===a.err_msg?"general_share:cancel":"general_share:fail";d(a)});if("friend"===a.shareTo||"favorite"===a.shareTo||"connector"===a.shareTo||"wework"===a.shareTo){c.img_width=0;c.img_height=0;var g=function(a){a.err_msg="send_app_msg:confirm"===a.err_msg?"general_share:ok":
"send_app_msg:cancel"===a.err_msg?"general_share:cancel":"general_share:fail";d(a)};c.img_url?J(c.img_url,function(a){c.img_width=a.width;c.img_height=a.height;p("sendAppMessage",c,g)}):p("sendAppMessage",c,g)}"timeline"===a.shareTo&&(g=function(a){a.err_msg="share_timeline:ok"===a.err_msg?"general_share:ok":"share_timeline:cancel"===a.err_msg?"general_share:cancel":"general_share:fail";d(a)},c.img_width=0,c.img_height=0,c.img_url?J(c.img_url,function(a){c.img_width=a.width;c.img_height=a.height;
p("shareTimeline",c,g)}):p("shareTimeline",c,g));"QQ"===a.shareTo&&(g=function(a){a.err_msg=a.err_msg==="shareQQ:ok"?"general_share:ok":a.err_msg==="shareQQ:cancel"?"general_share:cancel":"general_share:fail";d(a)},c.img_width=0,c.img_height=0,c.img_url?J(c.img_url,function(a){c.img_width=a.width;c.img_height=a.height;p("shareQQ",c,g)}):p("shareQQ",c,g));"QZone"===a.shareTo&&(g=function(a){a.err_msg=a.err_msg==="shareQZone:ok"?"general_share:ok":a.err_msg==="shareQZone:cancel"?"general_share:cancel":
"general_share:fail";d(a)},c.img_width=0,c.img_height=0,c.img_url?J(c.img_url,function(a){c.img_width=a.width;c.img_height=a.height;p("shareQZone",c,g)}):p("shareQZone",c,g));"weiboApp"===a.shareTo&&(g=function(a){a.err_msg=a.err_msg==="share_weiboApp:ok"?"general_share:ok":a.err_msg==="share_weiboApp:cancel"?"general_share:cancel":"general_share:fail";d(a)},c.img_width=0,c.img_height=0,c.img_url?J(c.img_url,function(a){c.img_width=a.width;c.img_height=a.height;p("shareWeiboApp",c,g)}):p("shareWeiboApp",
c,g))},d=function(){w("general share failed. fallback to original share"+a.shareTo);"weibo"===a.shareTo&&y("menu:share:weibo",a);("friend"===a.shareTo||"favorite"===a.shareTo||"connector"===a.shareTo||"wework"===a.shareTo)&&y("menu:share:appmessage",a);"timeline"===a.shareTo&&y("menu:share:timeline",a)},h=C["menu:general:share"];"function"===typeof h&&D("menu:general:share")?(a.generalShare=c,h(a)):"weibo"===a.shareTo&&H["menu:share:weibo"]!=j?y("menu:share:weibo",a):"friend"===a.shareTo||"favorite"===
a.shareTo||"connector"===a.shareTo||"wework"===a.shareTo?y("menu:share:appmessage",a):"timeline"===a.shareTo?y("menu:share:timeline",a):"weiboApp"==a.shareTo?y("menu:share:weiboApp",a):"QQ"===a.shareTo?"function"===typeof C["menu:share:qq"]&&D("menu:share:qq")?y("menu:share:qq",a):y("menu:share:appmessage",a):"QZone"===a.shareTo?"function"===typeof C["menu:share:QZone"]&&D("menu:share:QZone")?y("menu:share:QZone",a):y("menu:share:appmessage",a):(c={$:q,fail:d,success:c},w("try default share handler"),
y("__internal:get_share_object",c))});x("menu:share:appmessage",function(a){w("share appmessage");var c;"string"===typeof a.title?(c=a,p("sendAppMessage",c)):(c={link:document.documentURI||v.init_url,desc:document.documentURI||v.init_url,title:document.title},d(function(a){a&&(c.img_url=a.src,c.img_width=a.width,c.img_height=a.height);p("sendAppMessage",c)}))});x("menu:share:email",function(a){w("share email");p("sendEmail","string"===typeof a.title?a:{content:document.documentURI||v.init_url,title:document.title})});
x("menu:share:facebook",function(a){w("share facebook");var c;"string"===typeof a.title?(c=a,p("shareFB",c)):(c={link:document.documentURI||v.init_url,desc:document.documentURI||v.init_url,title:document.title},d(function(a){a&&(c.img_url=a.src,c.img_width=a.width,c.img_height=a.height);p("shareFB",c)}))});x("ui:longpress",function(b){w("longpress at ("+b.x+","+b.y+","+b.webViewWidth+","+b.webViewHeight+")");var c=document.body.clientWidth/b.webViewWidth,d=a(b.x*c,b.y*c);d?ma(d,function(a,b,d){p("saveImage",
{base64DataString:a,url:b.src,elementWidth:d.width/c,elementHeight:d.height/c,elementTop:d.getBoundingClientRect().top/c,elementLeft:d.getBoundingClientRect().left/c})}):w("cannot find image at ("+b.x+","+b.y+","+c+")")});x("sys:init",function(a){v=a;a=document.createEvent("Events");a.initEvent("WeixinJSBridgeReady");document.dispatchEvent(a);if("preInject"===document.__wxjsjs__isPreInject){document.wxjsSysinit=!0;for(var c in P)a=P[c],p(c,a.params,a.callback);P=[]}});x("sys:bridged",function(){"1"===
I("webview_type")&&y("menu:setfont",{fontSize:I("init_font_size"),isFirstAutoSet:1});try{na(),oa(),pa()}catch(a){w("error %s",a)}});x("sys:record",function(){w("sys:record");h(function(a){var c=1500;document.title&&(c=1);setTimeout(function(){data={title:document.title,source:window.location.hostname};a&&(data.img_url=a.src,data.img_width=a.width,data.img_height=a.height);p("recordHistory",data)},c)})})})();q.JSON=t;q.disableImageSelection=function(){for(var a=q("img"),d=0;d<a.length;d++)q(a[d])._wxjs_old_touch_callout=
q(a[d]).css("-webkit-touch-callout"),q(a[d])._wxjs_old_user_select=q(a[d]).css("-webkit-user-select");q("img").css({"-webkit-touch-callout":"none","-webkit-user-select":"none"})};q.restoreImageSelection=function(){for(var a=q("img"),d=0;d<a.length;d++)"undefined"!=typeof q(a[d])._wxjs_old_touch_callout&&q(a[d]).css({"-webkit-touch-callout":q(a[d])._wxjs_old_touch_callout,"-webkit-user-select":q(a[d])._wxjs_old_user_select})};q.disableAlertView=function(){window.__wxjs_sys_alert=window.alert;window.alert=
null;window.__wxjs_sys_prompt=window.prompt;window.prompt=null;window.__wxjs_sys_confirm=window.confirm;window.confirm=null};q.restoreAlertView=function(){window.alert=window.__wxjs_sys_alert;window.prompt=window.__wxjs_sys_prompt;window.confirm=window.__wxjs_sys_confirm;delete window.__wxjs_sys_alert;delete window.__wxjs_sys_prompt;delete window.__wxjs_sys_confirm};if(__ISWKWEBVIEW){window.__wxjs_is_wkwebview=!0;q("document").ready(function(){var a=document.oncopy;document.oncopy=function(){var d=
aa();L(t.stringify({__onCopy:d}));if("undefined"!==typeof a&&null!==a)return a()};L(t.stringify({__domReadyNotify:N}))});if(history.pushState){var sa=history.pushState;history.pushState=function(a,d,h){var j=ba(h);L(t.stringify({__pageStateChange:j}));sa.apply(this,arguments)}}if(history.replaceState){var ta=history.replaceState;history.replaceState=function(a,d,h){var j=ba(h);L(t.stringify({__pageStateChange:j}));ta.apply(this,arguments)}}}else window.__wxjs_is_wkwebview=!1})();
window.__wxjs_is_injected_success="yes";
