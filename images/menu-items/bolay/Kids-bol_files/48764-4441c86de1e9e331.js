(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[48764],{79742:function(a,b){"use strict";b.byteLength=function(a){var b=i(a),c=b[0],d=b[1];return(c+d)*3/4-d},b.toByteArray=function(a){var b,c,f,g,h,j=i(a),k=j[0],l=j[1],m=new e((g=k,(g+(h=l))*3/4-h)),n=0,o=l>0?k-4:k;for(c=0;c<o;c+=4)b=d[a.charCodeAt(c)]<<18|d[a.charCodeAt(c+1)]<<12|d[a.charCodeAt(c+2)]<<6|d[a.charCodeAt(c+3)],m[n++]=b>>16&255,m[n++]=b>>8&255,m[n++]=255&b;return 2===l&&(b=d[a.charCodeAt(c)]<<2|d[a.charCodeAt(c+1)]>>4,m[n++]=255&b),1===l&&(b=d[a.charCodeAt(c)]<<10|d[a.charCodeAt(c+1)]<<4|d[a.charCodeAt(c+2)]>>2,m[n++]=b>>8&255,m[n++]=255&b),m},b.fromByteArray=function(a){for(var b,d=a.length,e=d%3,f=[],g=0,h=d-e;g<h;g+=16383)f.push(k(a,g,g+16383>h?h:g+16383));return 1===e?f.push(c[(b=a[d-1])>>2]+c[b<<4&63]+"=="):2===e&&f.push(c[(b=(a[d-2]<<8)+a[d-1])>>10]+c[b>>4&63]+c[b<<2&63]+"="),f.join("")};for(var c=[],d=[],e="undefined"!=typeof Uint8Array?Uint8Array:Array,f="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/",g=0,h=f.length;g<h;++g)c[g]=f[g],d[f.charCodeAt(g)]=g;function i(a){var b=a.length;if(b%4>0)throw Error("Invalid string. Length must be a multiple of 4");var c=a.indexOf("=");-1===c&&(c=b);var d=c===b?0:4-c%4;return[c,d]}function j(a){return c[a>>18&63]+c[a>>12&63]+c[a>>6&63]+c[63&a]}function k(a,b,c){for(var d,e=[],f=b;f<c;f+=3)e.push(j(d=(a[f]<<16&16711680)+(a[f+1]<<8&65280)+(255&a[f+2])));return e.join("")}d["-".charCodeAt(0)]=62,d["_".charCodeAt(0)]=63},48764:function(a,b,c){"use strict";/*!
* The buffer module from node.js, for the browser.
*
* @author Feross Aboukhadijeh <https://feross.org>
* @license MIT
*/var d=c(79742),e=c(80645),f="function"==typeof Symbol&&"function"==typeof Symbol.for?Symbol.for("nodejs.util.inspect.custom"):null;function g(a){if(a>2147483647)throw RangeError('The value "'+a+'" is invalid for option "size"');var b=new Uint8Array(a);return Object.setPrototypeOf(b,h.prototype),b}function h(a,b,c){if("number"==typeof a){if("string"==typeof b)throw TypeError('The "string" argument must be of type string. Received type number');return k(a)}return i(a,b,c)}function i(a,b,c){if("string"==typeof a)return l(a,b);if(ArrayBuffer.isView(a))return n(a);if(null==a)throw TypeError("The first argument must be one of type string, Buffer, ArrayBuffer, Array, or Array-like Object. Received type "+typeof a);if(T(a,ArrayBuffer)||a&&T(a.buffer,ArrayBuffer)||"undefined"!=typeof SharedArrayBuffer&&(T(a,SharedArrayBuffer)||a&&T(a.buffer,SharedArrayBuffer)))return o(a,b,c);if("number"==typeof a)throw TypeError('The "value" argument must not be of type number. Received type number');var d=a.valueOf&&a.valueOf();if(null!=d&&d!==a)return h.from(d,b,c);var e=p(a);if(e)return e;if("undefined"!=typeof Symbol&&null!=Symbol.toPrimitive&&"function"==typeof a[Symbol.toPrimitive])return h.from(a[Symbol.toPrimitive]("string"),b,c);throw TypeError("The first argument must be one of type string, Buffer, ArrayBuffer, Array, or Array-like Object. Received type "+typeof a)}function j(a){if("number"!=typeof a)throw TypeError('"size" argument must be of type number');if(a<0)throw RangeError('The value "'+a+'" is invalid for option "size"')}function k(a){return j(a),g(a<0?0:0|q(a))}function l(a,b){if(("string"!=typeof b||""===b)&&(b="utf8"),!h.isEncoding(b))throw TypeError("Unknown encoding: "+b);var c=0|r(a,b),d=g(c),e=d.write(a,b);return e!==c&&(d=d.slice(0,e)),d}function m(a){for(var b=a.length<0?0:0|q(a.length),c=g(b),d=0;d<b;d+=1)c[d]=255&a[d];return c}function n(a){if(T(a,Uint8Array)){var b=new Uint8Array(a);return o(b.buffer,b.byteOffset,b.byteLength)}return m(a)}function o(a,b,c){var d;if(b<0||a.byteLength<b)throw RangeError('"offset" is outside of buffer bounds');if(a.byteLength<b+(c||0))throw RangeError('"length" is outside of buffer bounds');return Object.setPrototypeOf(d=void 0===b&&void 0===c?new Uint8Array(a):void 0===c?new Uint8Array(a,b):new Uint8Array(a,b,c),h.prototype),d}function p(a){if(h.isBuffer(a)){var b,c=0|q(a.length),d=g(c);return 0===d.length||a.copy(d,0,0,c),d}if(void 0!==a.length){return"number"!=typeof a.length||(b=a.length,b!=b)?g(0):m(a)}if("Buffer"===a.type&&Array.isArray(a.data))return m(a.data)}function q(a){if(a>=2147483647)throw RangeError("Attempt to allocate Buffer larger than maximum size: 0x"+2147483647..toString(16)+" bytes");return 0|a}function r(a,b){if(h.isBuffer(a))return a.length;if(ArrayBuffer.isView(a)||T(a,ArrayBuffer))return a.byteLength;if("string"!=typeof a)throw TypeError('The "string" argument must be one of type string, Buffer, or ArrayBuffer. Received type '+typeof a);var c=a.length,d=arguments.length>2&&!0===arguments[2];if(!d&&0===c)return 0;for(var e=!1;;)switch(b){case"ascii":case"latin1":case"binary":return c;case"utf8":case"utf-8":return O(a).length;case"ucs2":case"ucs-2":case"utf16le":case"utf-16le":return 2*c;case"hex":return c>>>1;case"base64":return R(a).length;default:if(e)return d?-1:O(a).length;b=(""+b).toLowerCase(),e=!0}}function s(a,b,c){var d=!1;if((void 0===b||b<0)&&(b=0),b>this.length||((void 0===c||c>this.length)&&(c=this.length),c<=0||(c>>>=0)<=(b>>>=0)))return"";for(a||(a="utf8");;)switch(a){case"hex":return G(this,b,c);case"utf8":case"utf-8":return C(this,b,c);case"ascii":return E(this,b,c);case"latin1":case"binary":return F(this,b,c);case"base64":return B(this,b,c);case"ucs2":case"ucs-2":case"utf16le":case"utf-16le":return H(this,b,c);default:if(d)throw TypeError("Unknown encoding: "+a);a=(a+"").toLowerCase(),d=!0}}function t(a,b,c){var d=a[b];a[b]=a[c],a[c]=d}function u(a,b,c,d,e){var f;if(0===a.length)return-1;if("string"==typeof c?(d=c,c=0):c>2147483647?c=2147483647:c<-2147483648&&(c=-2147483648),f=c=+c,f!=f&&(c=e?0:a.length-1),c<0&&(c=a.length+c),c>=a.length){if(e)return-1;c=a.length-1}else if(c<0){if(!e)return-1;c=0}if("string"==typeof b&&(b=h.from(b,d)),h.isBuffer(b))return 0===b.length?-1:v(a,b,c,d,e);if("number"==typeof b)return(b&=255,"function"==typeof Uint8Array.prototype.indexOf)?e?Uint8Array.prototype.indexOf.call(a,b,c):Uint8Array.prototype.lastIndexOf.call(a,b,c):v(a,[b],c,d,e);throw TypeError("val must be string, number or Buffer")}function v(a,b,c,d,e){var f,g=1,h=a.length,i=b.length;if(void 0!==d&&("ucs2"===(d=String(d).toLowerCase())||"ucs-2"===d||"utf16le"===d||"utf-16le"===d)){if(a.length<2||b.length<2)return-1;g=2,h/=2,i/=2,c/=2}function j(a,b){return 1===g?a[b]:a.readUInt16BE(b*g)}if(e){var k=-1;for(f=c;f<h;f++)if(j(a,f)===j(b,-1===k?0:f-k)){if(-1===k&&(k=f),f-k+1===i)return k*g}else-1!==k&&(f-=f-k),k=-1}else for(c+i>h&&(c=h-i),f=c;f>=0;f--){for(var l=!0,m=0;m<i;m++)if(j(a,f+m)!==j(b,m)){l=!1;break}if(l)return f}return-1}function w(a,b,c,d){c=Number(c)||0;var e=a.length-c;d?(d=Number(d))>e&&(d=e):d=e;var f=b.length;d>f/2&&(d=f/2);for(var g=0;g<d;++g){var h,i=parseInt(b.substr(2*g,2),16);if(h=i,h!=h)break;a[c+g]=i}return g}function x(a,b,c,d){return S(O(b,a.length-c),a,c,d)}function y(a,b,c,d){return S(P(b),a,c,d)}function z(a,b,c,d){return S(R(b),a,c,d)}function A(a,b,c,d){return S(Q(b,a.length-c),a,c,d)}function B(a,b,c){return 0===b&&c===a.length?d.fromByteArray(a):d.fromByteArray(a.slice(b,c))}function C(a,b,c){c=Math.min(a.length,c);for(var d=[],e=b;e<c;){var f,g,h,i,j=a[e],k=null,l=j>239?4:j>223?3:j>191?2:1;if(e+l<=c)switch(l){case 1:j<128&&(k=j);break;case 2:(192&(f=a[e+1]))==128&&(i=(31&j)<<6|63&f)>127&&(k=i);break;case 3:f=a[e+1],g=a[e+2],(192&f)==128&&(192&g)==128&&(i=(15&j)<<12|(63&f)<<6|63&g)>2047&&(i<55296||i>57343)&&(k=i);break;case 4:f=a[e+1],g=a[e+2],h=a[e+3],(192&f)==128&&(192&g)==128&&(192&h)==128&&(i=(15&j)<<18|(63&f)<<12|(63&g)<<6|63&h)>65535&&i<1114112&&(k=i)}null===k?(k=65533,l=1):k>65535&&(k-=65536,d.push(k>>>10&1023|55296),k=56320|1023&k),d.push(k),e+=l}return D(d)}function D(a){var b=a.length;if(b<=4096)return String.fromCharCode.apply(String,a);for(var c="",d=0;d<b;)c+=String.fromCharCode.apply(String,a.slice(d,d+=4096));return c}function E(a,b,c){var d="";c=Math.min(a.length,c);for(var e=b;e<c;++e)d+=String.fromCharCode(127&a[e]);return d}function F(a,b,c){var d="";c=Math.min(a.length,c);for(var e=b;e<c;++e)d+=String.fromCharCode(a[e]);return d}function G(a,b,c){var d=a.length;(!b||b<0)&&(b=0),(!c||c<0||c>d)&&(c=d);for(var e="",f=b;f<c;++f)e+=U[a[f]];return e}function H(a,b,c){for(var d=a.slice(b,c),e="",f=0;f<d.length-1;f+=2)e+=String.fromCharCode(d[f]+256*d[f+1]);return e}function I(a,b,c){if(a%1!=0||a<0)throw RangeError("offset is not uint");if(a+b>c)throw RangeError("Trying to access beyond buffer length")}function J(a,b,c,d,e,f){if(!h.isBuffer(a))throw TypeError('"buffer" argument must be a Buffer instance');if(b>e||b<f)throw RangeError('"value" argument is out of bounds');if(c+d>a.length)throw RangeError("Index out of range")}function K(a,b,c,d,e,f){if(c+d>a.length||c<0)throw RangeError("Index out of range")}function L(a,b,c,d,f){return b=+b,c>>>=0,f||K(a,b,c,4,34028234663852886e22,-34028234663852886e22),e.write(a,b,c,d,23,4),c+4}function M(a,b,c,d,f){return b=+b,c>>>=0,f||K(a,b,c,8,17976931348623157e292,-17976931348623157e292),e.write(a,b,c,d,52,8),c+8}b.lW=h,b.h2=50,h.TYPED_ARRAY_SUPPORT=function(){try{var a=new Uint8Array(1),b={foo:function(){return 42}};return Object.setPrototypeOf(b,Uint8Array.prototype),Object.setPrototypeOf(a,b),42===a.foo()}catch(c){return!1}}(),h.TYPED_ARRAY_SUPPORT||"undefined"==typeof console||"function"!=typeof console.error||console.error("This browser lacks typed array (Uint8Array) support which is required by `buffer` v5.x. Use `buffer` v4.x if you require old browser support."),Object.defineProperty(h.prototype,"parent",{enumerable:!0,get:function(){if(h.isBuffer(this))return this.buffer}}),Object.defineProperty(h.prototype,"offset",{enumerable:!0,get:function(){if(h.isBuffer(this))return this.byteOffset}}),h.poolSize=8192,h.from=function(a,b,c){return i(a,b,c)},Object.setPrototypeOf(h.prototype,Uint8Array.prototype),Object.setPrototypeOf(h,Uint8Array),h.alloc=function(a,b,c){var d,e,f;return d=a,e=b,f=c,(j(d),d<=0)?g(d):void 0!==e?"string"==typeof f?g(d).fill(e,f):g(d).fill(e):g(d)},h.allocUnsafe=function(a){return k(a)},h.allocUnsafeSlow=function(a){return k(a)},h.isBuffer=function(a){return null!=a&&!0===a._isBuffer&&a!==h.prototype},h.compare=function(a,b){if(T(a,Uint8Array)&&(a=h.from(a,a.offset,a.byteLength)),T(b,Uint8Array)&&(b=h.from(b,b.offset,b.byteLength)),!h.isBuffer(a)||!h.isBuffer(b))throw TypeError('The "buf1", "buf2" arguments must be one of type Buffer or Uint8Array');if(a===b)return 0;for(var c=a.length,d=b.length,e=0,f=Math.min(c,d);e<f;++e)if(a[e]!==b[e]){c=a[e],d=b[e];break}return c<d?-1:d<c?1:0},h.isEncoding=function(a){switch(String(a).toLowerCase()){case"hex":case"utf8":case"utf-8":case"ascii":case"latin1":case"binary":case"base64":case"ucs2":case"ucs-2":case"utf16le":case"utf-16le":return!0;default:return!1}},h.concat=function(a,b){if(!Array.isArray(a))throw TypeError('"list" argument must be an Array of Buffers');if(0===a.length)return h.alloc(0);if(void 0===b)for(c=0,b=0;c<a.length;++c)b+=a[c].length;var c,d=h.allocUnsafe(b),e=0;for(c=0;c<a.length;++c){var f=a[c];if(T(f,Uint8Array))e+f.length>d.length?h.from(f).copy(d,e):Uint8Array.prototype.set.call(d,f,e);else if(h.isBuffer(f))f.copy(d,e);else throw TypeError('"list" argument must be an Array of Buffers');e+=f.length}return d},h.byteLength=r,h.prototype._isBuffer=!0,h.prototype.swap16=function(){var a=this.length;if(a%2!=0)throw RangeError("Buffer size must be a multiple of 16-bits");for(var b=0;b<a;b+=2)t(this,b,b+1);return this},h.prototype.swap32=function(){var a=this.length;if(a%4!=0)throw RangeError("Buffer size must be a multiple of 32-bits");for(var b=0;b<a;b+=4)t(this,b,b+3),t(this,b+1,b+2);return this},h.prototype.swap64=function(){var a=this.length;if(a%8!=0)throw RangeError("Buffer size must be a multiple of 64-bits");for(var b=0;b<a;b+=8)t(this,b,b+7),t(this,b+1,b+6),t(this,b+2,b+5),t(this,b+3,b+4);return this},h.prototype.toString=function(){var a=this.length;return 0===a?"":0===arguments.length?C(this,0,a):s.apply(this,arguments)},h.prototype.toLocaleString=h.prototype.toString,h.prototype.equals=function(a){if(!h.isBuffer(a))throw TypeError("Argument must be a Buffer");return this===a||0===h.compare(this,a)},h.prototype.inspect=function(){var a="",c=b.h2;return a=this.toString("hex",0,c).replace(/(.{2})/g,"$1 ").trim(),this.length>c&&(a+=" ... "),"<Buffer "+a+">"},f&&(h.prototype[f]=h.prototype.inspect),h.prototype.compare=function(a,b,c,d,e){if(T(a,Uint8Array)&&(a=h.from(a,a.offset,a.byteLength)),!h.isBuffer(a))throw TypeError('The "target" argument must be one of type Buffer or Uint8Array. Received type '+typeof a);if(void 0===b&&(b=0),void 0===c&&(c=a?a.length:0),void 0===d&&(d=0),void 0===e&&(e=this.length),b<0||c>a.length||d<0||e>this.length)throw RangeError("out of range index");if(d>=e&&b>=c)return 0;if(d>=e)return-1;if(b>=c)return 1;if(b>>>=0,c>>>=0,d>>>=0,e>>>=0,this===a)return 0;for(var f=e-d,g=c-b,i=Math.min(f,g),j=this.slice(d,e),k=a.slice(b,c),l=0;l<i;++l)if(j[l]!==k[l]){f=j[l],g=k[l];break}return f<g?-1:g<f?1:0},h.prototype.includes=function(a,b,c){return-1!==this.indexOf(a,b,c)},h.prototype.indexOf=function(a,b,c){return u(this,a,b,c,!0)},h.prototype.lastIndexOf=function(a,b,c){return u(this,a,b,c,!1)},h.prototype.write=function(a,b,c,d){if(void 0===b)d="utf8",c=this.length,b=0;else if(void 0===c&&"string"==typeof b)d=b,c=this.length,b=0;else if(isFinite(b))b>>>=0,isFinite(c)?(c>>>=0,void 0===d&&(d="utf8")):(d=c,c=void 0);else throw Error("Buffer.write(string, encoding, offset[, length]) is no longer supported");var e=this.length-b;if((void 0===c||c>e)&&(c=e),a.length>0&&(c<0||b<0)||b>this.length)throw RangeError("Attempt to write outside buffer bounds");d||(d="utf8");for(var f=!1;;)switch(d){case"hex":return w(this,a,b,c);case"utf8":case"utf-8":return x(this,a,b,c);case"ascii":case"latin1":case"binary":return y(this,a,b,c);case"base64":return z(this,a,b,c);case"ucs2":case"ucs-2":case"utf16le":case"utf-16le":return A(this,a,b,c);default:if(f)throw TypeError("Unknown encoding: "+d);d=(""+d).toLowerCase(),f=!0}},h.prototype.toJSON=function(){return{type:"Buffer",data:Array.prototype.slice.call(this._arr||this,0)}},h.prototype.slice=function(a,b){var c=this.length;a=~~a,b=void 0===b?c:~~b,a<0?(a+=c)<0&&(a=0):a>c&&(a=c),b<0?(b+=c)<0&&(b=0):b>c&&(b=c),b<a&&(b=a);var d=this.subarray(a,b);return Object.setPrototypeOf(d,h.prototype),d},h.prototype.readUintLE=h.prototype.readUIntLE=function(a,b,c){a>>>=0,b>>>=0,c||I(a,b,this.length);for(var d=this[a],e=1,f=0;++f<b&&(e*=256);)d+=this[a+f]*e;return d},h.prototype.readUintBE=h.prototype.readUIntBE=function(a,b,c){a>>>=0,b>>>=0,c||I(a,b,this.length);for(var d=this[a+--b],e=1;b>0&&(e*=256);)d+=this[a+--b]*e;return d},h.prototype.readUint8=h.prototype.readUInt8=function(a,b){return a>>>=0,b||I(a,1,this.length),this[a]},h.prototype.readUint16LE=h.prototype.readUInt16LE=function(a,b){return a>>>=0,b||I(a,2,this.length),this[a]|this[a+1]<<8},h.prototype.readUint16BE=h.prototype.readUInt16BE=function(a,b){return a>>>=0,b||I(a,2,this.length),this[a]<<8|this[a+1]},h.prototype.readUint32LE=h.prototype.readUInt32LE=function(a,b){return a>>>=0,b||I(a,4,this.length),(this[a]|this[a+1]<<8|this[a+2]<<16)+16777216*this[a+3]},h.prototype.readUint32BE=h.prototype.readUInt32BE=function(a,b){return a>>>=0,b||I(a,4,this.length),16777216*this[a]+(this[a+1]<<16|this[a+2]<<8|this[a+3])},h.prototype.readIntLE=function(a,b,c){a>>>=0,b>>>=0,c||I(a,b,this.length);for(var d=this[a],e=1,f=0;++f<b&&(e*=256);)d+=this[a+f]*e;return d>=(e*=128)&&(d-=Math.pow(2,8*b)),d},h.prototype.readIntBE=function(a,b,c){a>>>=0,b>>>=0,c||I(a,b,this.length);for(var d=b,e=1,f=this[a+--d];d>0&&(e*=256);)f+=this[a+--d]*e;return f>=(e*=128)&&(f-=Math.pow(2,8*b)),f},h.prototype.readInt8=function(a,b){return(a>>>=0,b||I(a,1,this.length),128&this[a])?-((255-this[a]+1)*1):this[a]},h.prototype.readInt16LE=function(a,b){a>>>=0,b||I(a,2,this.length);var c=this[a]|this[a+1]<<8;return 32768&c?4294901760|c:c},h.prototype.readInt16BE=function(a,b){a>>>=0,b||I(a,2,this.length);var c=this[a+1]|this[a]<<8;return 32768&c?4294901760|c:c},h.prototype.readInt32LE=function(a,b){return a>>>=0,b||I(a,4,this.length),this[a]|this[a+1]<<8|this[a+2]<<16|this[a+3]<<24},h.prototype.readInt32BE=function(a,b){return a>>>=0,b||I(a,4,this.length),this[a]<<24|this[a+1]<<16|this[a+2]<<8|this[a+3]},h.prototype.readFloatLE=function(a,b){return a>>>=0,b||I(a,4,this.length),e.read(this,a,!0,23,4)},h.prototype.readFloatBE=function(a,b){return a>>>=0,b||I(a,4,this.length),e.read(this,a,!1,23,4)},h.prototype.readDoubleLE=function(a,b){return a>>>=0,b||I(a,8,this.length),e.read(this,a,!0,52,8)},h.prototype.readDoubleBE=function(a,b){return a>>>=0,b||I(a,8,this.length),e.read(this,a,!1,52,8)},h.prototype.writeUintLE=h.prototype.writeUIntLE=function(a,b,c,d){if(a=+a,b>>>=0,c>>>=0,!d){var e=Math.pow(2,8*c)-1;J(this,a,b,c,e,0)}var f=1,g=0;for(this[b]=255&a;++g<c&&(f*=256);)this[b+g]=a/f&255;return b+c},h.prototype.writeUintBE=h.prototype.writeUIntBE=function(a,b,c,d){if(a=+a,b>>>=0,c>>>=0,!d){var e=Math.pow(2,8*c)-1;J(this,a,b,c,e,0)}var f=c-1,g=1;for(this[b+f]=255&a;--f>=0&&(g*=256);)this[b+f]=a/g&255;return b+c},h.prototype.writeUint8=h.prototype.writeUInt8=function(a,b,c){return a=+a,b>>>=0,c||J(this,a,b,1,255,0),this[b]=255&a,b+1},h.prototype.writeUint16LE=h.prototype.writeUInt16LE=function(a,b,c){return a=+a,b>>>=0,c||J(this,a,b,2,65535,0),this[b]=255&a,this[b+1]=a>>>8,b+2},h.prototype.writeUint16BE=h.prototype.writeUInt16BE=function(a,b,c){return a=+a,b>>>=0,c||J(this,a,b,2,65535,0),this[b]=a>>>8,this[b+1]=255&a,b+2},h.prototype.writeUint32LE=h.prototype.writeUInt32LE=function(a,b,c){return a=+a,b>>>=0,c||J(this,a,b,4,4294967295,0),this[b+3]=a>>>24,this[b+2]=a>>>16,this[b+1]=a>>>8,this[b]=255&a,b+4},h.prototype.writeUint32BE=h.prototype.writeUInt32BE=function(a,b,c){return a=+a,b>>>=0,c||J(this,a,b,4,4294967295,0),this[b]=a>>>24,this[b+1]=a>>>16,this[b+2]=a>>>8,this[b+3]=255&a,b+4},h.prototype.writeIntLE=function(a,b,c,d){if(a=+a,b>>>=0,!d){var e=Math.pow(2,8*c-1);J(this,a,b,c,e-1,-e)}var f=0,g=1,h=0;for(this[b]=255&a;++f<c&&(g*=256);)a<0&&0===h&&0!==this[b+f-1]&&(h=1),this[b+f]=(a/g>>0)-h&255;return b+c},h.prototype.writeIntBE=function(a,b,c,d){if(a=+a,b>>>=0,!d){var e=Math.pow(2,8*c-1);J(this,a,b,c,e-1,-e)}var f=c-1,g=1,h=0;for(this[b+f]=255&a;--f>=0&&(g*=256);)a<0&&0===h&&0!==this[b+f+1]&&(h=1),this[b+f]=(a/g>>0)-h&255;return b+c},h.prototype.writeInt8=function(a,b,c){return a=+a,b>>>=0,c||J(this,a,b,1,127,-128),a<0&&(a=255+a+1),this[b]=255&a,b+1},h.prototype.writeInt16LE=function(a,b,c){return a=+a,b>>>=0,c||J(this,a,b,2,32767,-32768),this[b]=255&a,this[b+1]=a>>>8,b+2},h.prototype.writeInt16BE=function(a,b,c){return a=+a,b>>>=0,c||J(this,a,b,2,32767,-32768),this[b]=a>>>8,this[b+1]=255&a,b+2},h.prototype.writeInt32LE=function(a,b,c){return a=+a,b>>>=0,c||J(this,a,b,4,2147483647,-2147483648),this[b]=255&a,this[b+1]=a>>>8,this[b+2]=a>>>16,this[b+3]=a>>>24,b+4},h.prototype.writeInt32BE=function(a,b,c){return a=+a,b>>>=0,c||J(this,a,b,4,2147483647,-2147483648),a<0&&(a=4294967295+a+1),this[b]=a>>>24,this[b+1]=a>>>16,this[b+2]=a>>>8,this[b+3]=255&a,b+4},h.prototype.writeFloatLE=function(a,b,c){return L(this,a,b,!0,c)},h.prototype.writeFloatBE=function(a,b,c){return L(this,a,b,!1,c)},h.prototype.writeDoubleLE=function(a,b,c){return M(this,a,b,!0,c)},h.prototype.writeDoubleBE=function(a,b,c){return M(this,a,b,!1,c)},h.prototype.copy=function(a,b,c,d){if(!h.isBuffer(a))throw TypeError("argument should be a Buffer");if(c||(c=0),d||0===d||(d=this.length),b>=a.length&&(b=a.length),b||(b=0),d>0&&d<c&&(d=c),d===c||0===a.length||0===this.length)return 0;if(b<0)throw RangeError("targetStart out of bounds");if(c<0||c>=this.length)throw RangeError("Index out of range");if(d<0)throw RangeError("sourceEnd out of bounds");d>this.length&&(d=this.length),a.length-b<d-c&&(d=a.length-b+c);var e=d-c;return this===a&&"function"==typeof Uint8Array.prototype.copyWithin?this.copyWithin(b,c,d):Uint8Array.prototype.set.call(a,this.subarray(c,d),b),e},h.prototype.fill=function(a,b,c,d){if("string"==typeof a){if("string"==typeof b?(d=b,b=0,c=this.length):"string"==typeof c&&(d=c,c=this.length),void 0!==d&&"string"!=typeof d)throw TypeError("encoding must be a string");if("string"==typeof d&&!h.isEncoding(d))throw TypeError("Unknown encoding: "+d);if(1===a.length){var e,f=a.charCodeAt(0);("utf8"===d&&f<128||"latin1"===d)&&(a=f)}}else"number"==typeof a?a&=255:"boolean"==typeof a&&(a=Number(a));if(b<0||this.length<b||this.length<c)throw RangeError("Out of range index");if(c<=b)return this;if(b>>>=0,c=void 0===c?this.length:c>>>0,a||(a=0),"number"==typeof a)for(e=b;e<c;++e)this[e]=a;else{var g=h.isBuffer(a)?a:h.from(a,d),i=g.length;if(0===i)throw TypeError('The value "'+a+'" is invalid for argument "value"');for(e=0;e<c-b;++e)this[e+b]=g[e%i]}return this};var N=/[^+/0-9A-Za-z-_]/g;function O(a,b){b=b||1/0;for(var c,d=a.length,e=null,f=[],g=0;g<d;++g){if((c=a.charCodeAt(g))>55295&&c<57344){if(!e){if(c>56319||g+1===d){(b-=3)>-1&&f.push(239,191,189);continue}e=c;continue}if(c<56320){(b-=3)>-1&&f.push(239,191,189),e=c;continue}c=(e-55296<<10|c-56320)+65536}else e&&(b-=3)>-1&&f.push(239,191,189);if(e=null,c<128){if((b-=1)<0)break;f.push(c)}else if(c<2048){if((b-=2)<0)break;f.push(c>>6|192,63&c|128)}else if(c<65536){if((b-=3)<0)break;f.push(c>>12|224,c>>6&63|128,63&c|128)}else if(c<1114112){if((b-=4)<0)break;f.push(c>>18|240,c>>12&63|128,c>>6&63|128,63&c|128)}else throw Error("Invalid code point")}return f}function P(a){for(var b=[],c=0;c<a.length;++c)b.push(255&a.charCodeAt(c));return b}function Q(a,b){for(var c,d,e,f=[],g=0;g<a.length&&!((b-=2)<0);++g)d=(c=a.charCodeAt(g))>>8,e=c%256,f.push(e),f.push(d);return f}function R(a){return d.toByteArray(function(a){if((a=(a=a.split("=")[0]).trim().replace(N,"")).length<2)return"";for(;a.length%4!=0;)a+="=";return a}(a))}function S(a,b,c,d){for(var e=0;e<d&&!(e+c>=b.length)&&!(e>=a.length);++e)b[e+c]=a[e];return e}function T(a,b){return a instanceof b||null!=a&&null!=a.constructor&&null!=a.constructor.name&&a.constructor.name===b.name}var U=function(){for(var a="0123456789abcdef",b=Array(256),c=0;c<16;++c)for(var d=16*c,e=0;e<16;++e)b[d+e]=a[c]+a[e];return b}()},80645:function(a,b){/*!ieee754. BSD-3-Clause License. Feross Aboukhadijeh <https://feross.org/opensource>*/b.read=function(a,b,c,d,e){var f,g,h=8*e-d-1,i=(1<<h)-1,j=i>>1,k=-7,l=c?e-1:0,m=c?-1:1,n=a[b+l];for(l+=m,f=n&(1<<-k)-1,n>>=-k,k+=h;k>0;f=256*f+a[b+l],l+=m,k-=8);for(g=f&(1<<-k)-1,f>>=-k,k+=d;k>0;g=256*g+a[b+l],l+=m,k-=8);if(0===f)f=1-j;else{if(f===i)return g?NaN:(n?-1:1)*(1/0);g+=Math.pow(2,d),f-=j}return(n?-1:1)*g*Math.pow(2,f-d)},b.write=function(a,b,c,d,e,f){var g,h,i,j=8*f-e-1,k=(1<<j)-1,l=k>>1,m=23===e?5960464477539062e-23:0,n=d?0:f-1,o=d?1:-1,p=b<0||0===b&&1/b<0?1:0;for(isNaN(b=Math.abs(b))||b===1/0?(h=isNaN(b)?1:0,g=k):(g=Math.floor(Math.log(b)/Math.LN2),b*(i=Math.pow(2,-g))<1&&(g--,i*=2),g+l>=1?b+=m/i:b+=m*Math.pow(2,1-l),b*i>=2&&(g++,i/=2),g+l>=k?(h=0,g=k):g+l>=1?(h=(b*i-1)*Math.pow(2,e),g+=l):(h=b*Math.pow(2,l-1)*Math.pow(2,e),g=0));e>=8;a[c+n]=255&h,n+=o,h/=256,e-=8);for(g=g<<e|h,j+=e;j>0;a[c+n]=255&g,n+=o,g/=256,j-=8);a[c+n-o]|=128*p}}}])