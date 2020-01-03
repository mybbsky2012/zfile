(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["cacheManager"],{"13df":function(e,t,r){"use strict";r.r(t);var n=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("el-row",[r("el-form",{staticClass:"demo-form-inline",attrs:{inline:!0,model:e.formData}},[r("el-form-item",{attrs:{label:"是否已开启缓存"}},[r("el-switch",{attrs:{disabled:""},model:{value:e.formData.enableCache,callback:function(t){e.$set(e.formData,"enableCache",t)},expression:"formData.enableCache"}})],1),r("el-form-item",{attrs:{label:"是否已完成缓存"}},[r("el-switch",{attrs:{disabled:""},model:{value:e.formData.cacheFinish,callback:function(t){e.$set(e.formData,"cacheFinish",t)},expression:"formData.cacheFinish"}})],1),r("el-form-item",{attrs:{label:"已缓存条目"}},[r("span",{staticStyle:{"font-weight":"bold",color:"red"},domProps:{textContent:e._s(e.formData.cacheCount)}})]),r("el-form-item",[r("el-button",{attrs:{type:"danger",size:"small",disabled:!e.formData.enableCache||!e.formData.cacheFinish,round:""},on:{click:e.clearAllCache}},[e._v("清理缓存")]),r("el-button",{attrs:{type:"primary",size:"small",disabled:!e.formData.cacheFinish,round:""},on:{click:e.cacheAll}},[e._v("缓存所有")])],1)],1),r("el-table",{staticStyle:{width:"100%"},attrs:{data:e.tableData.filter((function(t){return!e.formData.search||t.name.toLowerCase().includes(e.formData.search.toLowerCase())}))}},[r("el-table-column",{attrs:{prop:"name",label:"缓存 Key (文件夹名称)",width:"550"}}),r("el-table-column",{scopedSlots:e._u([{key:"header",fn:function(t){return[r("el-input",{attrs:{size:"mini",placeholder:"输入关键字搜索"},model:{value:e.formData.search,callback:function(t){e.$set(e.formData,"search",t)},expression:"formData.search"}})]}},{key:"default",fn:function(t){return[r("el-button",{attrs:{size:"mini",type:"primary",round:""},on:{click:function(r){return e.refreshCache(t.$index,t.row)}}},[e._v("刷新缓存")])]}}])})],1)],1)},a=[],o=(r("55dd"),r("7f7f"),r("4328")),i=r.n(o),c={name:"CacheManager",data:function(){return{formData:{enableCache:!0,cacheFinish:!0,cacheCount:0,search:""},tableData:[{name:"xx"}]}},methods:{cacheAll:function(){var e=this;this.$http.post("admin/cache/all",i.a.stringify(this.form)).then((function(){e.$message({message:"操作成功",type:"success"})}))},clearAllCache:function(){var e=this;this.$http.post("admin/cache/clear",i.a.stringify(this.form)).then((function(){e.$message({message:"清理成功",type:"success"}),e.loadConfig()}))},refreshCache:function(e,t){var r=this;this.$http.post("admin/cache/refresh",i.a.stringify({key:t.name})).then((function(){r.$message({message:"刷新成功",type:"success"})}))},loadConfig:function(){var e=this;this.$http.get("admin/cache/config").then((function(t){var r=t.data.data;e.formData.enableCache=r.enableCache,e.formData.cacheFinish=r.cacheFinish,e.formData.cacheCount=r.cacheKeys.length;var n=r.cacheKeys;n.sort((function(e,t){return e.length-t.length}));for(var a=[],o=0;o<n.length;o++)a[o]={name:n[o]};e.tableData=a}))}},mounted:function(){this.loadConfig()}},l=c,s=(r("d882"),r("2877")),f=Object(s["a"])(l,n,a,!1,null,"6735d159",null);t["default"]=f.exports},4127:function(e,t,r){"use strict";var n=r("d233"),a=r("b313"),o={brackets:function(e){return e+"[]"},indices:function(e,t){return e+"["+t+"]"},repeat:function(e){return e}},i=Date.prototype.toISOString,c={delimiter:"&",encode:!0,encoder:n.encode,encodeValuesOnly:!1,serializeDate:function(e){return i.call(e)},skipNulls:!1,strictNullHandling:!1},l=function e(t,r,a,o,i,l,s,f,u,p,d,h){var y=t;if("function"===typeof s)y=s(r,y);else if(y instanceof Date)y=p(y);else if(null===y){if(o)return l&&!h?l(r,c.encoder):r;y=""}if("string"===typeof y||"number"===typeof y||"boolean"===typeof y||n.isBuffer(y)){if(l){var m=h?r:l(r,c.encoder);return[d(m)+"="+d(l(y,c.encoder))]}return[d(r)+"="+d(String(y))]}var b,g=[];if("undefined"===typeof y)return g;if(Array.isArray(s))b=s;else{var v=Object.keys(y);b=f?v.sort(f):v}for(var j=0;j<b.length;++j){var w=b[j];i&&null===y[w]||(g=Array.isArray(y)?g.concat(e(y[w],a(r,w),a,o,i,l,s,f,u,p,d,h)):g.concat(e(y[w],r+(u?"."+w:"["+w+"]"),a,o,i,l,s,f,u,p,d,h)))}return g};e.exports=function(e,t){var r=e,i=t?n.assign({},t):{};if(null!==i.encoder&&void 0!==i.encoder&&"function"!==typeof i.encoder)throw new TypeError("Encoder has to be a function.");var s="undefined"===typeof i.delimiter?c.delimiter:i.delimiter,f="boolean"===typeof i.strictNullHandling?i.strictNullHandling:c.strictNullHandling,u="boolean"===typeof i.skipNulls?i.skipNulls:c.skipNulls,p="boolean"===typeof i.encode?i.encode:c.encode,d="function"===typeof i.encoder?i.encoder:c.encoder,h="function"===typeof i.sort?i.sort:null,y="undefined"!==typeof i.allowDots&&i.allowDots,m="function"===typeof i.serializeDate?i.serializeDate:c.serializeDate,b="boolean"===typeof i.encodeValuesOnly?i.encodeValuesOnly:c.encodeValuesOnly;if("undefined"===typeof i.format)i.format=a["default"];else if(!Object.prototype.hasOwnProperty.call(a.formatters,i.format))throw new TypeError("Unknown format option provided.");var g,v,j=a.formatters[i.format];"function"===typeof i.filter?(v=i.filter,r=v("",r)):Array.isArray(i.filter)&&(v=i.filter,g=v);var w,O=[];if("object"!==typeof r||null===r)return"";w=i.arrayFormat in o?i.arrayFormat:"indices"in i?i.indices?"indices":"repeat":"indices";var D=o[w];g||(g=Object.keys(r)),h&&g.sort(h);for(var C=0;C<g.length;++C){var A=g[C];u&&null===r[A]||(O=O.concat(l(r[A],A,D,f,u,p?d:null,v,h,y,m,j,b)))}var x=O.join(s),k=!0===i.addQueryPrefix?"?":"";return x.length>0?k+x:""}},4328:function(e,t,r){"use strict";var n=r("4127"),a=r("9e6a"),o=r("b313");e.exports={formats:o,parse:a,stringify:n}},"4b2d":function(e,t,r){},"9e6a":function(e,t,r){"use strict";var n=r("d233"),a=Object.prototype.hasOwnProperty,o={allowDots:!1,allowPrototypes:!1,arrayLimit:20,decoder:n.decode,delimiter:"&",depth:5,parameterLimit:1e3,plainObjects:!1,strictNullHandling:!1},i=function(e,t){for(var r={},n=t.ignoreQueryPrefix?e.replace(/^\?/,""):e,i=t.parameterLimit===1/0?void 0:t.parameterLimit,c=n.split(t.delimiter,i),l=0;l<c.length;++l){var s,f,u=c[l],p=u.indexOf("]="),d=-1===p?u.indexOf("="):p+1;-1===d?(s=t.decoder(u,o.decoder),f=t.strictNullHandling?null:""):(s=t.decoder(u.slice(0,d),o.decoder),f=t.decoder(u.slice(d+1),o.decoder)),a.call(r,s)?r[s]=[].concat(r[s]).concat(f):r[s]=f}return r},c=function(e,t,r){for(var n=t,a=e.length-1;a>=0;--a){var o,i=e[a];if("[]"===i)o=[],o=o.concat(n);else{o=r.plainObjects?Object.create(null):{};var c="["===i.charAt(0)&&"]"===i.charAt(i.length-1)?i.slice(1,-1):i,l=parseInt(c,10);!isNaN(l)&&i!==c&&String(l)===c&&l>=0&&r.parseArrays&&l<=r.arrayLimit?(o=[],o[l]=n):o[c]=n}n=o}return n},l=function(e,t,r){if(e){var n=r.allowDots?e.replace(/\.([^.[]+)/g,"[$1]"):e,o=/(\[[^[\]]*])/,i=/(\[[^[\]]*])/g,l=o.exec(n),s=l?n.slice(0,l.index):n,f=[];if(s){if(!r.plainObjects&&a.call(Object.prototype,s)&&!r.allowPrototypes)return;f.push(s)}var u=0;while(null!==(l=i.exec(n))&&u<r.depth){if(u+=1,!r.plainObjects&&a.call(Object.prototype,l[1].slice(1,-1))&&!r.allowPrototypes)return;f.push(l[1])}return l&&f.push("["+n.slice(l.index)+"]"),c(f,t,r)}};e.exports=function(e,t){var r=t?n.assign({},t):{};if(null!==r.decoder&&void 0!==r.decoder&&"function"!==typeof r.decoder)throw new TypeError("Decoder has to be a function.");if(r.ignoreQueryPrefix=!0===r.ignoreQueryPrefix,r.delimiter="string"===typeof r.delimiter||n.isRegExp(r.delimiter)?r.delimiter:o.delimiter,r.depth="number"===typeof r.depth?r.depth:o.depth,r.arrayLimit="number"===typeof r.arrayLimit?r.arrayLimit:o.arrayLimit,r.parseArrays=!1!==r.parseArrays,r.decoder="function"===typeof r.decoder?r.decoder:o.decoder,r.allowDots="boolean"===typeof r.allowDots?r.allowDots:o.allowDots,r.plainObjects="boolean"===typeof r.plainObjects?r.plainObjects:o.plainObjects,r.allowPrototypes="boolean"===typeof r.allowPrototypes?r.allowPrototypes:o.allowPrototypes,r.parameterLimit="number"===typeof r.parameterLimit?r.parameterLimit:o.parameterLimit,r.strictNullHandling="boolean"===typeof r.strictNullHandling?r.strictNullHandling:o.strictNullHandling,""===e||null===e||"undefined"===typeof e)return r.plainObjects?Object.create(null):{};for(var a="string"===typeof e?i(e,r):e,c=r.plainObjects?Object.create(null):{},s=Object.keys(a),f=0;f<s.length;++f){var u=s[f],p=l(u,a[u],r);c=n.merge(c,p,r)}return n.compact(c)}},b313:function(e,t,r){"use strict";var n=String.prototype.replace,a=/%20/g;e.exports={default:"RFC3986",formatters:{RFC1738:function(e){return n.call(e,a,"+")},RFC3986:function(e){return e}},RFC1738:"RFC1738",RFC3986:"RFC3986"}},d233:function(e,t,r){"use strict";var n=Object.prototype.hasOwnProperty,a=function(){for(var e=[],t=0;t<256;++t)e.push("%"+((t<16?"0":"")+t.toString(16)).toUpperCase());return e}(),o=function(e){var t;while(e.length){var r=e.pop();if(t=r.obj[r.prop],Array.isArray(t)){for(var n=[],a=0;a<t.length;++a)"undefined"!==typeof t[a]&&n.push(t[a]);r.obj[r.prop]=n}}return t},i=function(e,t){for(var r=t&&t.plainObjects?Object.create(null):{},n=0;n<e.length;++n)"undefined"!==typeof e[n]&&(r[n]=e[n]);return r},c=function e(t,r,a){if(!r)return t;if("object"!==typeof r){if(Array.isArray(t))t.push(r);else{if("object"!==typeof t)return[t,r];(a.plainObjects||a.allowPrototypes||!n.call(Object.prototype,r))&&(t[r]=!0)}return t}if("object"!==typeof t)return[t].concat(r);var o=t;return Array.isArray(t)&&!Array.isArray(r)&&(o=i(t,a)),Array.isArray(t)&&Array.isArray(r)?(r.forEach((function(r,o){n.call(t,o)?t[o]&&"object"===typeof t[o]?t[o]=e(t[o],r,a):t.push(r):t[o]=r})),t):Object.keys(r).reduce((function(t,o){var i=r[o];return n.call(t,o)?t[o]=e(t[o],i,a):t[o]=i,t}),o)},l=function(e,t){return Object.keys(t).reduce((function(e,r){return e[r]=t[r],e}),e)},s=function(e){try{return decodeURIComponent(e.replace(/\+/g," "))}catch(t){return e}},f=function(e){if(0===e.length)return e;for(var t="string"===typeof e?e:String(e),r="",n=0;n<t.length;++n){var o=t.charCodeAt(n);45===o||46===o||95===o||126===o||o>=48&&o<=57||o>=65&&o<=90||o>=97&&o<=122?r+=t.charAt(n):o<128?r+=a[o]:o<2048?r+=a[192|o>>6]+a[128|63&o]:o<55296||o>=57344?r+=a[224|o>>12]+a[128|o>>6&63]+a[128|63&o]:(n+=1,o=65536+((1023&o)<<10|1023&t.charCodeAt(n)),r+=a[240|o>>18]+a[128|o>>12&63]+a[128|o>>6&63]+a[128|63&o])}return r},u=function(e){for(var t=[{obj:{o:e},prop:"o"}],r=[],n=0;n<t.length;++n)for(var a=t[n],i=a.obj[a.prop],c=Object.keys(i),l=0;l<c.length;++l){var s=c[l],f=i[s];"object"===typeof f&&null!==f&&-1===r.indexOf(f)&&(t.push({obj:i,prop:s}),r.push(f))}return o(t)},p=function(e){return"[object RegExp]"===Object.prototype.toString.call(e)},d=function(e){return null!==e&&"undefined"!==typeof e&&!!(e.constructor&&e.constructor.isBuffer&&e.constructor.isBuffer(e))};e.exports={arrayToObject:i,assign:l,compact:u,decode:s,encode:f,isBuffer:d,isRegExp:p,merge:c}},d882:function(e,t,r){"use strict";var n=r("4b2d"),a=r.n(n);a.a}}]);
//# sourceMappingURL=cacheManager.6549e7b8.js.map