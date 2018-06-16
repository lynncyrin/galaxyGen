!function(e){function t(t){for(var r,a,u=t[0],c=t[1],s=t[2],l=0,f=[];l<u.length;l++)a=u[l],o[a]&&f.push(o[a][0]),o[a]=0;for(r in c)Object.prototype.hasOwnProperty.call(c,r)&&(e[r]=c[r]);for(p&&p(t);f.length;)f.shift()();return i.push.apply(i,s||[]),n()}function n(){for(var e,t=0;t<i.length;t++){for(var n=i[t],r=!0,a=1;a<n.length;a++){var u=n[a];0!==o[u]&&(r=!1)}r&&(i.splice(t--,1),e=c(c.s=n[0]))}return e}var r={},o={2:0},i=[];var a={},u={66:function(){return{"./galaxy_gen_backend":{__wbindgen_throw:function(e,t){return c(67).__wbindgen_throw(e,t)}}}}};function c(t){if(r[t])return r[t].exports;var n=r[t]={i:t,l:!1,exports:{}};return e[t].call(n.exports,n,n.exports,c),n.l=!0,n.exports}c.e=function(e){var t=[],n=o[e];if(0!==n)if(n)t.push(n[2]);else{var r=new Promise(function(t,r){n=o[e]=[t,r]});t.push(n[2]=r);var i=document.getElementsByTagName("head")[0],s=document.createElement("script");s.charset="utf-8",s.timeout=120,c.nc&&s.setAttribute("nonce",c.nc),s.src=function(e){return c.p+""+({}[e]||e)+".js"}(e);var l=setTimeout(function(){f({type:"timeout",target:s})},12e4);function f(t){s.onerror=s.onload=null,clearTimeout(l);var n=o[e];if(0!==n){if(n){var r=t&&("load"===t.type?"missing":t.type),i=t&&t.target&&t.target.src,a=new Error("Loading chunk "+e+" failed.\n("+r+": "+i+")");a.type=r,a.request=i,n[1](a)}o[e]=void 0}}s.onerror=s.onload=f,i.appendChild(s)}return({0:[66]}[e]||[]).forEach(function(e){var n=a[e];if(n)t.push(n);else{var r,o=u[e](),i=fetch(c.p+""+{66:"fd6dac9abda0a4868b34"}[e]+".module.wasm");if(o instanceof Promise&&"function"==typeof WebAssembly.compileStreaming)r=Promise.all([WebAssembly.compileStreaming(i),o]).then(function(e){return WebAssembly.instantiate(e[0],e[1])});else if("function"==typeof WebAssembly.instantiateStreaming)r=WebAssembly.instantiateStreaming(i,o);else{r=i.then(function(e){return e.arrayBuffer()}).then(function(e){return WebAssembly.instantiate(e,o)})}t.push(a[e]=r.then(function(t){return c.w[e]=t.instance||t}))}}),Promise.all(t)},c.m=e,c.c=r,c.d=function(e,t,n){c.o(e,t)||Object.defineProperty(e,t,{configurable:!1,enumerable:!0,get:n})},c.r=function(e){Object.defineProperty(e,"__esModule",{value:!0})},c.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return c.d(t,"a",t),t},c.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},c.p="",c.oe=function(e){throw console.error(e),e},c.w={};var s=window.webpackJsonp=window.webpackJsonp||[],l=s.push.bind(s);s.push=t,s=s.slice();for(var f=0;f<s.length;f++)t(s[f]);var p=l;i.push([64,1]),n()}({45:function(e,t){function n(e){return Promise.resolve().then(function(){var t=new Error('Cannot find module "'+e+'".');throw t.code="MODULE_NOT_FOUND",t})}n.keys=function(){return[]},n.resolve=n,e.exports=n,n.id=45},61:function(e,t,n){"use strict";var r=this&&this.__decorate||function(e,t,n,r){var o,i=arguments.length,a=i<3?t:null===r?r=Object.getOwnPropertyDescriptor(t,n):r;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(e,t,n,r);else for(var u=e.length-1;u>=0;u--)(o=e[u])&&(a=(i<3?o(a):i>3?o(t,n,a):o(t,n))||a);return i>3&&a&&Object.defineProperty(t,n,a),a};Object.defineProperty(t,"__esModule",{value:!0});var o=n(1),i=n(60),a=n(65),u=function(){function e(){}return e=r([o.NgModule({declarations:[a.AppComponent],imports:[i.BrowserModule],providers:[],bootstrap:[a.AppComponent]})],e)}();t.AppModule=u},62:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=function(){function e(e,t){this.wasmJSApi=e,this.wasmBinary=t}return e.prototype.cells=function(){return new Uint8Array(this.wasmBinary.memory.buffer,this.galaxy.cells_pointer(),this.memoryRange)},e.prototype.generateData=function(e){this.galaxySize=e,this.galaxy=this.wasmJSApi.Galaxy.new(e),this.galaxy.seed()},Object.defineProperty(e.prototype,"memoryRange",{get:function(){return Math.pow(this.galaxySize,2)},enumerable:!0,configurable:!0}),e}();t.MainScript=r},64:function(e,t,n){"use strict";n.r(t);n(105),n(68);var r=n(106),o=n(62);var i=n(61);!async function(){new o.MainScript(await n.e(0).then(n.bind(null,67)),await n.e(0).then(n.bind(null,66)))}(),Object(r.a)().bootstrapModule(i.AppModule).catch(e=>console.log(e))},65:function(e,t,n){"use strict";var r=this&&this.__decorate||function(e,t,n,r){var o,i=arguments.length,a=i<3?t:null===r?r=Object.getOwnPropertyDescriptor(t,n):r;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(e,t,n,r);else for(var u=e.length-1;u>=0;u--)(o=e[u])&&(a=(i<3?o(a):i>3?o(t,n,a):o(t,n))||a);return i>3&&a&&Object.defineProperty(t,n,a),a};Object.defineProperty(t,"__esModule",{value:!0});var o=n(1),i=function(){function e(){this.title="galaxy gen app"}return e=r([o.Component({selector:"app-root",template:"{{ title }}"})],e)}();t.AppComponent=i}});