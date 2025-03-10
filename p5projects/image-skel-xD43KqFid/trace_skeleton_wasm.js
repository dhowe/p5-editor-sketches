(function (global, factory) {
	typeof exports === 'object' && typeof module !== 'undefined' ? module.exports = factory() :
	typeof define === 'function' && define.amd ? define(factory) :
	(global = global || self, global.TraceSkeleton = factory());
}(this, (function () { 'use strict';

	function createCommonjsModule(fn, module) {
		return module = { exports: {} }, fn(module, module.exports), module.exports;
	}

	// Copyright Joyent, Inc. and other Node contributors.
	//
	// Permission is hereby granted, free of charge, to any person obtaining a
	// copy of this software and associated documentation files (the
	// "Software"), to deal in the Software without restriction, including
	// without limitation the rights to use, copy, modify, merge, publish,
	// distribute, sublicense, and/or sell copies of the Software, and to permit
	// persons to whom the Software is furnished to do so, subject to the
	// following conditions:
	//
	// The above copyright notice and this permission notice shall be included
	// in all copies or substantial portions of the Software.
	//
	// THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS
	// OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF
	// MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN
	// NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM,
	// DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR
	// OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE
	// USE OR OTHER DEALINGS IN THE SOFTWARE.

	// resolves . and .. elements in a path array with directory names there
	// must be no slashes, empty elements, or device names (c:\) in the array
	// (so also no leading and trailing slashes - it does not distinguish
	// relative and absolute paths)
	function normalizeArray(parts, allowAboveRoot) {
	  // if the path tries to go above the root, `up` ends up > 0
	  var up = 0;
	  for (var i = parts.length - 1; i >= 0; i--) {
	    var last = parts[i];
	    if (last === '.') {
	      parts.splice(i, 1);
	    } else if (last === '..') {
	      parts.splice(i, 1);
	      up++;
	    } else if (up) {
	      parts.splice(i, 1);
	      up--;
	    }
	  }

	  // if the path is allowed to go above the root, restore leading ..s
	  if (allowAboveRoot) {
	    for (; up--; up) {
	      parts.unshift('..');
	    }
	  }

	  return parts;
	}

	// Split a filename into [root, dir, basename, ext], unix version
	// 'root' is just a slash, or nothing.
	var splitPathRe =
	    /^(\/?|)([\s\S]*?)((?:\.{1,2}|[^\/]+?|)(\.[^.\/]*|))(?:[\/]*)$/;
	var splitPath = function(filename) {
	  return splitPathRe.exec(filename).slice(1);
	};

	// path.resolve([from ...], to)
	// posix version
	function resolve() {
	  var resolvedPath = '',
	      resolvedAbsolute = false;

	  for (var i = arguments.length - 1; i >= -1 && !resolvedAbsolute; i--) {
	    var path = (i >= 0) ? arguments[i] : '/';

	    // Skip empty and invalid entries
	    if (typeof path !== 'string') {
	      throw new TypeError('Arguments to path.resolve must be strings');
	    } else if (!path) {
	      continue;
	    }

	    resolvedPath = path + '/' + resolvedPath;
	    resolvedAbsolute = path.charAt(0) === '/';
	  }

	  // At this point the path should be resolved to a full absolute path, but
	  // handle relative paths to be safe (might happen when process.cwd() fails)

	  // Normalize the path
	  resolvedPath = normalizeArray(filter(resolvedPath.split('/'), function(p) {
	    return !!p;
	  }), !resolvedAbsolute).join('/');

	  return ((resolvedAbsolute ? '/' : '') + resolvedPath) || '.';
	}
	// path.normalize(path)
	// posix version
	function normalize(path) {
	  var isPathAbsolute = isAbsolute(path),
	      trailingSlash = substr(path, -1) === '/';

	  // Normalize the path
	  path = normalizeArray(filter(path.split('/'), function(p) {
	    return !!p;
	  }), !isPathAbsolute).join('/');

	  if (!path && !isPathAbsolute) {
	    path = '.';
	  }
	  if (path && trailingSlash) {
	    path += '/';
	  }

	  return (isPathAbsolute ? '/' : '') + path;
	}
	// posix version
	function isAbsolute(path) {
	  return path.charAt(0) === '/';
	}

	// posix version
	function join() {
	  var paths = Array.prototype.slice.call(arguments, 0);
	  return normalize(filter(paths, function(p, index) {
	    if (typeof p !== 'string') {
	      throw new TypeError('Arguments to path.join must be strings');
	    }
	    return p;
	  }).join('/'));
	}


	// path.relative(from, to)
	// posix version
	function relative(from, to) {
	  from = resolve(from).substr(1);
	  to = resolve(to).substr(1);

	  function trim(arr) {
	    var start = 0;
	    for (; start < arr.length; start++) {
	      if (arr[start] !== '') break;
	    }

	    var end = arr.length - 1;
	    for (; end >= 0; end--) {
	      if (arr[end] !== '') break;
	    }

	    if (start > end) return [];
	    return arr.slice(start, end - start + 1);
	  }

	  var fromParts = trim(from.split('/'));
	  var toParts = trim(to.split('/'));

	  var length = Math.min(fromParts.length, toParts.length);
	  var samePartsLength = length;
	  for (var i = 0; i < length; i++) {
	    if (fromParts[i] !== toParts[i]) {
	      samePartsLength = i;
	      break;
	    }
	  }

	  var outputParts = [];
	  for (var i = samePartsLength; i < fromParts.length; i++) {
	    outputParts.push('..');
	  }

	  outputParts = outputParts.concat(toParts.slice(samePartsLength));

	  return outputParts.join('/');
	}

	var sep = '/';
	var delimiter = ':';

	function dirname(path) {
	  var result = splitPath(path),
	      root = result[0],
	      dir = result[1];

	  if (!root && !dir) {
	    // No dirname whatsoever
	    return '.';
	  }

	  if (dir) {
	    // It has a dirname, strip trailing slash
	    dir = dir.substr(0, dir.length - 1);
	  }

	  return root + dir;
	}

	function basename(path, ext) {
	  var f = splitPath(path)[2];
	  // TODO: make this comparison case-insensitive on windows?
	  if (ext && f.substr(-1 * ext.length) === ext) {
	    f = f.substr(0, f.length - ext.length);
	  }
	  return f;
	}


	function extname(path) {
	  return splitPath(path)[3];
	}
	var require$$0 = {
	  extname: extname,
	  basename: basename,
	  dirname: dirname,
	  sep: sep,
	  delimiter: delimiter,
	  relative: relative,
	  join: join,
	  isAbsolute: isAbsolute,
	  normalize: normalize,
	  resolve: resolve
	};
	function filter (xs, f) {
	    if (xs.filter) return xs.filter(f);
	    var res = [];
	    for (var i = 0; i < xs.length; i++) {
	        if (f(xs[i], i, xs)) res.push(xs[i]);
	    }
	    return res;
	}

	// String.prototype.substr - negative index don't work in IE8
	var substr = 'ab'.substr(-1) === 'b' ?
	    function (str, start, len) { return str.substr(start, len) } :
	    function (str, start, len) {
	        if (start < 0) start = str.length + start;
	        return str.substr(start, len);
	    }
	;

	var require$$1 = {};

	var trace_skeleton = createCommonjsModule(function (module, exports) {
	var _TRACESKELETON = (function() {
	  var _scriptDir = typeof document !== 'undefined' && document.currentScript ? document.currentScript.src : undefined;
	  if (typeof __filename !== 'undefined') _scriptDir = _scriptDir || __filename;
	  return (
	function(_TRACESKELETON) {
	  _TRACESKELETON = _TRACESKELETON || {};


	var b;b||(b=typeof _TRACESKELETON !== 'undefined' ? _TRACESKELETON : {});var l;b.ready=new Promise(function(a){l=a;});var m={},n;for(n in b)b.hasOwnProperty(n)&&(m[n]=b[n]);var q=!1,r=!1,t=!1,aa=!1;q="object"===typeof window;r="function"===typeof importScripts;t="object"===typeof process&&"object"===typeof process.versions&&"string"===typeof process.versions.node;aa=!q&&!t&&!r;var u="",v,w,x,y;
	if(t)u=r?require$$0.dirname(u)+"/":__dirname+"/",v=function(a,c){var e=z(a);if(e)return c?e:e.toString();x||(x=require$$1);y||(y=require$$0);a=y.normalize(a);return x.readFileSync(a,c?null:"utf8")},w=function(a){a=v(a,!0);a.buffer||(a=new Uint8Array(a));assert(a.buffer);return a},1<process.argv.length&&process.argv[1].replace(/\\/g,"/"),process.argv.slice(2),process.on("uncaughtException",function(a){throw a;}),process.on("unhandledRejection",A),b.inspect=function(){return "[Emscripten Module object]"};
	else if(aa)"undefined"!=typeof read&&(v=function(a){var c=z(a);return c?ba(c):read(a)}),w=function(a){var c;if(c=z(a))return c;if("function"===typeof readbuffer)return new Uint8Array(readbuffer(a));c=read(a,"binary");assert("object"===typeof c);return c},"undefined"!==typeof print&&("undefined"===typeof console&&(console={}),console.log=print,console.warn=console.error="undefined"!==typeof printErr?printErr:print);else if(q||r)r?u=self.location.href:document.currentScript&&(u=document.currentScript.src),
	_scriptDir&&(u=_scriptDir),0!==u.indexOf("blob:")?u=u.substr(0,u.lastIndexOf("/")+1):u="",v=function(a){try{var c=new XMLHttpRequest;c.open("GET",a,!1);c.send(null);return c.responseText}catch(e){if(a=z(a))return ba(a);throw e;}},r&&(w=function(a){try{var c=new XMLHttpRequest;c.open("GET",a,!1);c.responseType="arraybuffer";c.send(null);return new Uint8Array(c.response)}catch(e){if(a=z(a))return a;throw e;}});var ca=b.print||console.log.bind(console),B=b.printErr||console.warn.bind(console);
	for(n in m)m.hasOwnProperty(n)&&(b[n]=m[n]);m=null;var C;b.wasmBinary&&(C=b.wasmBinary);var noExitRuntime;b.noExitRuntime&&(noExitRuntime=b.noExitRuntime);"object"!==typeof WebAssembly&&A("no native wasm support detected");var D,da=new WebAssembly.Table({initial:1,maximum:1,element:"anyfunc"}),ea=!1;function assert(a,c){a||A("Assertion failed: "+c);}var fa="undefined"!==typeof TextDecoder?new TextDecoder("utf8"):void 0,E,F,G,ha;
	function ia(a){E=a;b.HEAP8=F=new Int8Array(a);b.HEAP16=new Int16Array(a);b.HEAP32=ha=new Int32Array(a);b.HEAPU8=G=new Uint8Array(a);b.HEAPU16=new Uint16Array(a);b.HEAPU32=new Uint32Array(a);b.HEAPF32=new Float32Array(a);b.HEAPF64=new Float64Array(a);}var ja=b.INITIAL_MEMORY||16777216;b.wasmMemory?D=b.wasmMemory:D=new WebAssembly.Memory({initial:ja/65536,maximum:32768});D&&(E=D.buffer);ja=E.byteLength;ia(E);ha[496]=5245024;
	function H(a){for(;0<a.length;){var c=a.shift();if("function"==typeof c)c(b);else {var e=c.v;"number"===typeof e?void 0===c.u?b.dynCall_v(e):b.dynCall_vi(e,c.u):e(void 0===c.u?null:c.u);}}}var ka=[],la=[],ma=[],na=[];function oa(){var a=b.preRun.shift();ka.unshift(a);}var I=0,K=null;b.preloadedImages={};b.preloadedAudios={};function A(a){if(b.onAbort)b.onAbort(a);ca(a);B(a);ea=!0;throw new WebAssembly.RuntimeError("abort("+a+"). Build with -s ASSERTIONS=1 for more info.");}
	function L(a,c){return String.prototype.startsWith?a.startsWith(c):0===a.indexOf(c)}var M="data:application/octet-stream;base64,",N="data:application/octet-stream;base64,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DAELIAEoAgQiBiABKAIAIgQ2AgggCUF/aiEIIAQoAgghAkEAIQcgBCEDA0AgAiIAKAIIIQIgACADNgIIIAAhAyAHQQFqIgcgCEcNAAsgASAENgIEIAEgBjYCACAEQQA2AggLQQEhCCAGRQ0AIAUoAgAiAEUNASABKAIEIAA2AgggBSAGNgIAIAUgBSgCECAJajYCEAwCCyAIDwsgBSAGNgIADAELIAUoAgRBADYCCEEBDwsgBSABKAIENgIEQQELmQYBA38jAEGwAWsiAiQAIABCADcCACAAQQA2AgggASgCDCIBBEADQCACQTBqIAEoAgAQCCACIAJBMGpB9ggQBSIDIgQoAgg2AkggAiADKQIANwNAIANCADcCACAEQQA2AgggAkEgaiABKAIEEAggAiACQUBrIAIoAiAgAkEgaiACLQArIgNBGHRBGHVBAEgiBBsgAigCJCADIAQbEAYiAyIEKAIINgJYIAIgAykCADcDUCADQgA3AgAgBEEANgIIIAIgAkHQAGpB9ggQBSIDIgQoAgg2AmggAiADKQIANwNgIANCADcCACAEQQA2AgggAkEQaiABKAIIEAggAiACQeAAaiACKAIQIAJBEGogAi0AGyIDQRh0QRh1QQBIIgQbIAIoAhQgAyAEGxAGIgMiBCgCCDYCeCACIAMpAgA3A3AgA0IANwIAIARBADYCCCACIAJB8ABqQfYIEAUiAyIEKAIINgKIASACIAMpAgA3A4ABIANCADcCACAEQQA2AgggAiABKAIMEAggAiACQYABaiACKAIAIAIgAi0ACyIDQRh0QRh1QQBIIgQbIAIoAgQgAyAEGxAGIgMiBCgCCDYCmAEgAiADKQIANwOQASADQgA3AgAgBEEANgIIIAIgAkGQAWpB+ggQBSIDIgQoAgg2AqgBIAIgAykCADcDoAEgA0IANwIAIARBADYCCCAAIAIoAqABIAJBoAFqIAItAKsBIgNBGHRBGHVBAEgiBBsgAigCpAEgAyAEGxAGGiACLACrAUF/TARAIAIoAqABEAMLIAIsAJsBQX9MBEAgAigCkAEQAwsgAiwAC0F/TARAIAIoAgAQAwsgAiwAiwFBf0wEQCACKAKAARADCyACLAB7QX9MBEAgAigCcBADCyACLAAbQX9MBEAgAigCEBADCyACLABrQX9MBEAgAigCYBADCyACLABb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";if(!L(N,M)){var pa=N;N=b.locateFile?b.locateFile(pa,u):u+pa;}function qa(){try{if(C)return new Uint8Array(C);var a=z(N);if(a)return a;if(w)return w(N);throw "both async and sync fetching of the wasm failed";}catch(c){A(c);}}
	function ra(){return C||!q&&!r||"function"!==typeof fetch||L(N,"file://")?new Promise(function(a){a(qa());}):fetch(N,{credentials:"same-origin"}).then(function(a){if(!a.ok)throw "failed to load wasm binary file at '"+N+"'";return a.arrayBuffer()}).catch(function(){return qa()})}la.push({v:function(){sa();}});function ba(a){for(var c=[],e=0;e<a.length;e++){var g=a[e];255<g&&(g&=255);c.push(String.fromCharCode(g));}return c.join("")}
	var ua="function"===typeof atob?atob:function(a){var c="",e=0;a=a.replace(/[^A-Za-z0-9\+\/=]/g,"");do{var g="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=".indexOf(a.charAt(e++));var d="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=".indexOf(a.charAt(e++));var f="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=".indexOf(a.charAt(e++));var h="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=".indexOf(a.charAt(e++));g=g<<2|d>>4;
	d=(d&15)<<4|f>>2;var p=(f&3)<<6|h;c+=String.fromCharCode(g);64!==f&&(c+=String.fromCharCode(d));64!==h&&(c+=String.fromCharCode(p));}while(e<a.length);return c};
	function z(a){if(L(a,M)){a=a.slice(M.length);if("boolean"===typeof t&&t){try{var c=Buffer.from(a,"base64");}catch(f){c=new Buffer(a,"base64");}var e=new Uint8Array(c.buffer,c.byteOffset,c.byteLength);}else try{var g=ua(a),d=new Uint8Array(g.length);for(c=0;c<g.length;++c)d[c]=g.charCodeAt(c);e=d;}catch(f){throw Error("Converting base64 string to bytes failed.");}return e}}
	var va={a:function(){A();},b:function(a,c,e){G.copyWithin(a,c,c+e);},c:function(a){a>>>=0;var c=G.length;if(2147483648<a)return !1;for(var e=1;4>=e;e*=2){var g=c*(1+.2/e);g=Math.min(g,a+100663296);g=Math.max(16777216,a,g);0<g%65536&&(g+=65536-g%65536);a:{try{D.grow(Math.min(2147483648,g)-E.byteLength+65535>>>16);ia(D.buffer);var d=1;break a}catch(f){}d=void 0;}if(d)return !0}return !1},memory:D,table:da};
	(function(){function a(d){b.asm=d.exports;I--;b.monitorRunDependencies&&b.monitorRunDependencies(I);0==I&&(K&&(d=K,K=null,d()));}function c(d){a(d.instance);}function e(d){return ra().then(function(f){return WebAssembly.instantiate(f,g)}).then(d,function(f){B("failed to asynchronously prepare wasm: "+f);A(f);})}var g={a:va};I++;b.monitorRunDependencies&&b.monitorRunDependencies(I);if(b.instantiateWasm)try{return b.instantiateWasm(g,a)}catch(d){return B("Module.instantiateWasm callback failed with error: "+
	d),!1}(function(){if(C||"function"!==typeof WebAssembly.instantiateStreaming||L(N,M)||L(N,"file://")||"function"!==typeof fetch)return e(c);fetch(N,{credentials:"same-origin"}).then(function(d){return WebAssembly.instantiateStreaming(d,g).then(c,function(f){B("wasm streaming compile failed: "+f);B("falling back to ArrayBuffer instantiation");return e(c)})});})();return {}})();var sa=b.___wasm_call_ctors=function(){return (sa=b.___wasm_call_ctors=b.asm.d).apply(null,arguments)};
	b.___em_js__array_bounds_check_error=function(){return (b.___em_js__array_bounds_check_error=b.asm.e).apply(null,arguments)};
	var wa=b._emscripten_bind_VoidPtr___destroy___0=function(){return (wa=b._emscripten_bind_VoidPtr___destroy___0=b.asm.f).apply(null,arguments)},xa=b._emscripten_bind_skeleton_tracer_t_skeleton_tracer_t_0=function(){return (xa=b._emscripten_bind_skeleton_tracer_t_skeleton_tracer_t_0=b.asm.g).apply(null,arguments)},ya=b._emscripten_bind_skeleton_tracer_t_trace_3=function(){return (ya=b._emscripten_bind_skeleton_tracer_t_trace_3=b.asm.h).apply(null,arguments)};
	b._free=function(){return (b._free=b.asm.i).apply(null,arguments)};b._malloc=function(){return (b._malloc=b.asm.j).apply(null,arguments)};var za=b._emscripten_bind_skeleton_tracer_t_destroy_0=function(){return (za=b._emscripten_bind_skeleton_tracer_t_destroy_0=b.asm.k).apply(null,arguments)},Aa=b._emscripten_bind_skeleton_tracer_t___destroy___0=function(){return (Aa=b._emscripten_bind_skeleton_tracer_t___destroy___0=b.asm.l).apply(null,arguments)},O;K=function Ba(){O||P();O||(K=Ba);};
	function P(){function a(){if(!O&&(O=!0,b.calledRun=!0,!ea)){H(la);H(ma);l(b);if(b.onRuntimeInitialized)b.onRuntimeInitialized();if(b.postRun)for("function"==typeof b.postRun&&(b.postRun=[b.postRun]);b.postRun.length;){var c=b.postRun.shift();na.unshift(c);}H(na);}}if(!(0<I)){if(b.preRun)for("function"==typeof b.preRun&&(b.preRun=[b.preRun]);b.preRun.length;)oa();H(ka);0<I||(b.setStatus?(b.setStatus("Running..."),setTimeout(function(){setTimeout(function(){b.setStatus("");},1);a();},1)):a());}}b.run=P;
	if(b.preInit)for("function"==typeof b.preInit&&(b.preInit=[b.preInit]);0<b.preInit.length;)b.preInit.pop()();noExitRuntime=!0;P();function Q(){}Q.prototype=Object.create(Q.prototype);Q.prototype.constructor=Q;Q.prototype.o=Q;Q.s={};b.WrapperObject=Q;function R(a){return (a||Q).s}b.getCache=R;function S(a,c){var e=R(c),g=e[a];if(g)return g;g=Object.create((c||Q).prototype);g.m=a;return e[a]=g}b.wrapPointer=S;b.castObject=function(a,c){return S(a.m,c)};b.NULL=S(0);
	b.destroy=function(a){if(!a.__destroy__)throw "Error: Cannot destroy object. (Did you create it yourself?)";a.__destroy__();delete R(a.o)[a.m];};b.compare=function(a,c){return a.m===c.m};b.getPointer=function(a){return a.m};b.getClass=function(a){return a.o};var T=0,U=0,V=0,W=[],X=0;function Y(){throw "cannot construct a VoidPtr, no constructor in IDL";}Y.prototype=Object.create(Q.prototype);Y.prototype.constructor=Y;Y.prototype.o=Y;Y.s={};b.VoidPtr=Y;Y.prototype.__destroy__=function(){wa(this.m);};
	function Z(){this.m=xa();R(Z)[this.m]=this;}Z.prototype=Object.create(Q.prototype);Z.prototype.constructor=Z;Z.prototype.o=Z;Z.s={};b.skeleton_tracer_t=Z;
	Z.prototype.trace=function(a,c,e){var g=this.m;if(X){for(var d=0;d<W.length;d++)b._free(W[d]);W.length=0;b._free(T);T=0;U+=X;X=0;}T||(U+=128,T=b._malloc(U),assert(T));V=0;if(a&&"object"===typeof a)a=a.m;else if(d=a,"string"===typeof d){for(var f=a=0;f<d.length;++f){var h=d.charCodeAt(f);55296<=h&&57343>=h&&(h=65536+((h&1023)<<10)|d.charCodeAt(++f)&1023);127>=h?++a:a=2047>=h?a+2:65535>=h?a+3:a+4;}a=Array(a+1);h=a.length;f=0;if(0<h){h=f+h-1;for(var p=0;p<d.length;++p){var k=d.charCodeAt(p);if(55296<=
	k&&57343>=k){var Ca=d.charCodeAt(++p);k=65536+((k&1023)<<10)|Ca&1023;}if(127>=k){if(f>=h)break;a[f++]=k;}else {if(2047>=k){if(f+1>=h)break;a[f++]=192|k>>6;}else {if(65535>=k){if(f+2>=h)break;a[f++]=224|k>>12;}else {if(f+3>=h)break;a[f++]=240|k>>18;a[f++]=128|k>>12&63;}a[f++]=128|k>>6&63;}a[f++]=128|k&63;}}a[f]=0;}d=F;assert(T);d=a.length*d.BYTES_PER_ELEMENT;d=d+7&-8;V+d>=U?(assert(0<d),X+=d,f=b._malloc(d),W.push(f)):(f=T+V,V+=d);d=f;h=F;f=d>>>0;switch(h.BYTES_PER_ELEMENT){case 2:f>>>=1;break;case 4:f>>>=2;break;
	case 8:f>>>=3;}for(p=0;p<a.length;p++)h[f+p]=a[p];a=d;}else a=d;c&&"object"===typeof c&&(c=c.m);e&&"object"===typeof e&&(e=e.m);if(c=ya(g,a,c,e)){e=G;a=c+NaN;for(g=c;e[g]&&!(g>=a);)++g;if(16<g-c&&e.subarray&&fa)c=fa.decode(e.subarray(c,g));else {for(a="";c<g;)d=e[c++],d&128?(f=e[c++]&63,192==(d&224)?a+=String.fromCharCode((d&31)<<6|f):(h=e[c++]&63,d=224==(d&240)?(d&15)<<12|f<<6|h:(d&7)<<18|f<<12|h<<6|e[c++]&63,65536>d?a+=String.fromCharCode(d):(d-=65536,a+=String.fromCharCode(55296|d>>10,56320|d&1023)))):
	a+=String.fromCharCode(d);c=a;}}else c="";return c};Z.prototype.destroy=function(){za(this.m);};Z.prototype.__destroy__=function(){Aa(this.m);};


	  return _TRACESKELETON.ready
	}
	);
	})();
	module.exports = _TRACESKELETON;
	});

	class TraceSkeleton {
	  constructor(tracer) {
	    if (typeof tracer === 'undefined') {
	      throw new Error('Cannot be called directly');
	    }
	    this.tracer = tracer;
	  }
	  static load() {
	    return trace_skeleton().then((d) => {
	      return new TraceSkeleton(d);
	    });
	  }

	  fromBoolArray(im, w, h) {
	    var str = '';
	    for (var i = 0; i < im.length; i++) {
	      if (im[i]) {
	        str += String.fromCharCode(1);
	      } else {
	        str += String.fromCharCode(0);
	      }
	    }
	    return this.fromCharString(str, w, h);
	  }
	  fromImageData(im) {
	    var w = im.width;
	    var h = im.height;
	    var data = im.data;
	    var str = '';
	    for (var i = 0; i < data.length; i += 4) {
	      if (data[i]) {
	        str += String.fromCharCode(1);
	      } else {
	        str += String.fromCharCode(0);
	      }
	    }
	    return this.fromCharString(str, w, h);
	  }
	  fromCanvas(im) {
	    var ctx = im.getContext('2d');
	    var imdata = ctx.getImageData(0, 0, im.width, im.height);
	    return this.fromImageData(imdata);
	  }
	  fromCharString(im, w, h) {
	    var T = new this.tracer.skeleton_tracer_t();
	    var s = T.trace(im, w, h);
	    var r = s
	      .split('RECTS:')[1]
	      .split('\n')
	      .filter((x) => x.length)
	      .map((x) => x.split(',').map((x) => parseInt(x)));
	    var p = s
	      .split('RECTS:')[0]
	      .split('POLYLINES:')[1]
	      .split('\n')
	      .filter((x) => x.length)
	      .map((x) =>
	        x
	          .split(' ')
	          .filter((x) => x.length)
	          .map((x) => x.split(',').map((x) => parseInt(x)))
	      );
	    var ret = {
	      rects: r,
	      polylines: p,
	      width: w,
	      height: h,
	    };
	    this.tracer.destroy(T);
	    return ret;
	  }
	  visualize(ret, args) {
	    var r = ret.rects;
	    var p = ret.polylines;

	    if (args == undefined) {
	      args = {};
	    }
	    var s = args.scale == undefined ? 1 : args.scale;
	    var sw = args.strokeWidth == undefined ? 1 : args.strokeWidth;
	    var dr = args.rects == undefined ? 1 : 0;
	    var kpt = (args.keypoints =  1);

	    var svg = `<svg version="1.1" xmlns="http://www.w3.org/2000/svg" width="${
      ret.width * s
    }" height="${ret.height * s}">`;

	    if (dr) {
	      for (var i = 0; i < r.length; i++) {
	        svg += `<rect fill="none" stroke="gray" x="${r[i][0] * s}" y="${
          r[i][1] * s
        }" width="${r[i][2] * s}" height="${r[i][3] * s}" />`;
	      }
	    }
	    for (var i = 0; i < p.length; i++) {
	      svg += `<path fill="none" stroke-width="${sw}" stroke="rgb(${Math.floor(
        Math.random() * 200
      )},${Math.floor(Math.random() * 200)},${Math.floor(
        Math.random() * 200
      )})" d="M${p[i].map((x) => x[0] * s + ',' + x[1] * s).join(' L')}"/>`;
	    }
	    if (kpt) {
	      for (var i = 0; i < p.length; i++) {
	        for (var j = 0; j < p[i].length; j++) {
	          svg += `<rect fill="none" stroke="red" x="${p[i][j][0] * s - 1}" y="${
            p[i][j][1] * s - 1
          }" width="2" height="2"/>`;
	        }
	      }
	    }

	    svg += '</svg>';
	    return svg;
	  }
	}

	return TraceSkeleton;

})));
