(window.webpackJsonp=window.webpackJsonp||[]).push([[7],{1032:function(e,t,n){"use strict";n.r(t);n(997);var o=n(1026),r=(n(1e3),n(1025)),a=(n(690),n(696)),c=(n(270),n(180)),i=n(1001),l=n.n(i),u=n(1033),p=n(678),f=n(809),s=n(0),h=n.n(s),d=n(1002),y=n.n(d),m=n(51),b=n(1003),g=n.n(b),v=function(e,t,n,o){return new(n||(n=Promise))((function(r,a){function c(e){try{l(o.next(e))}catch(e){a(e)}}function i(e){try{l(o.throw(e))}catch(e){a(e)}}function l(e){var t;e.done?r(e.value):(t=e.value,t instanceof n?t:new n((function(e){e(t)}))).then(c,i)}l((o=o.apply(e,t||[])).next())}))},w=function(e,t){var n,o,r,a,c={label:0,sent:function(){if(1&r[0])throw r[1];return r[1]},trys:[],ops:[]};return a={next:i(0),throw:i(1),return:i(2)},"function"==typeof Symbol&&(a[Symbol.iterator]=function(){return this}),a;function i(a){return function(i){return function(a){if(n)throw new TypeError("Generator is already executing.");for(;c;)try{if(n=1,o&&(r=2&a[0]?o.return:a[0]?o.throw||((r=o.return)&&r.call(o),0):o.next)&&!(r=r.call(o,a[1])).done)return r;switch(o=0,r&&(a=[2&a[0],r.value]),a[0]){case 0:case 1:r=a;break;case 4:return c.label++,{value:a[1],done:!1};case 5:c.label++,o=a[1],a=[0];continue;case 7:a=c.ops.pop(),c.trys.pop();continue;default:if(!(r=(r=c.trys).length>0&&r[r.length-1])&&(6===a[0]||2===a[0])){c=0;continue}if(3===a[0]&&(!r||a[1]>r[0]&&a[1]<r[3])){c.label=a[1];break}if(6===a[0]&&c.label<r[1]){c.label=r[1],r=a;break}if(r&&c.label<r[2]){c.label=r[2],c.ops.push(a);break}r[2]&&c.ops.pop(),c.trys.pop();continue}a=t.call(e,c)}catch(e){a=[6,e],o=0}finally{n=r=0}if(5&a[0])throw a[1];return{value:a[0]?a[1]:void 0,done:!0}}([a,i])}}},x=function(){function e(e,t){this.axiosInstance=g.a.create({baseURL:t,headers:{"Ocp-Apim-Subscription-Key":e}})}return e.prototype.detectFace=function(e){return v(this,void 0,void 0,(function(){var t,n;return w(this,(function(o){switch(o.label){case 0:return[4,fetch(e)];case 1:return[4,o.sent().blob()];case 2:return t=o.sent(),[4,this.axiosInstance.post("/detect",t,{headers:{"Content-Type":"application/octet-stream"}})];case 3:return n=o.sent(),[2,Promise.resolve(n.data[0])]}}))}))},e.prototype.compareFaces=function(e,t){return v(this,void 0,void 0,(function(){var n;return w(this,(function(o){switch(o.label){case 0:return[4,this.axiosInstance.post("/verify",{faceId1:e,faceId2:t})];case 1:return n=o.sent(),[2,Promise.resolve(n.data)]}}))}))},e}(),A=n(192);function C(e){return(C="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}var E=function(){return(E=Object.assign||function(e){for(var t,n=1,o=arguments.length;n<o;n++)for(var r in t=arguments[n])Object.prototype.hasOwnProperty.call(t,r)&&(e[r]=t[r]);return e}).apply(this,arguments)},S=function(e,t,n,o){var r,a=arguments.length,c=a<3?t:null===o?o=Object.getOwnPropertyDescriptor(t,n):o;if("object"===("undefined"==typeof Reflect?"undefined":C(Reflect))&&"function"==typeof Reflect.decorate)c=Reflect.decorate(e,t,n,o);else for(var i=e.length-1;i>=0;i--)(r=e[i])&&(c=(a<3?r(c):a>3?r(t,n,c):r(t,n))||c);return a>3&&c&&Object.defineProperty(t,n,c),c},O=function(e,t,n,o){return new(n||(n=Promise))((function(r,a){function c(e){try{l(o.next(e))}catch(e){a(e)}}function i(e){try{l(o.throw(e))}catch(e){a(e)}}function l(e){var t;e.done?r(e.value):(t=e.value,t instanceof n?t:new n((function(e){e(t)}))).then(c,i)}l((o=o.apply(e,t||[])).next())}))},k=function(e,t){var n,o,r,a,c={label:0,sent:function(){if(1&r[0])throw r[1];return r[1]},trys:[],ops:[]};return a={next:i(0),throw:i(1),return:i(2)},"function"==typeof Symbol&&(a[Symbol.iterator]=function(){return this}),a;function i(a){return function(i){return function(a){if(n)throw new TypeError("Generator is already executing.");for(;c;)try{if(n=1,o&&(r=2&a[0]?o.return:a[0]?o.throw||((r=o.return)&&r.call(o),0):o.next)&&!(r=r.call(o,a[1])).done)return r;switch(o=0,r&&(a=[2&a[0],r.value]),a[0]){case 0:case 1:r=a;break;case 4:return c.label++,{value:a[1],done:!1};case 5:c.label++,o=a[1],a=[0];continue;case 7:a=c.ops.pop(),c.trys.pop();continue;default:if(!(r=(r=c.trys).length>0&&r[r.length-1])&&(6===a[0]||2===a[0])){c=0;continue}if(3===a[0]&&(!r||a[1]>r[0]&&a[1]<r[3])){c.label=a[1];break}if(6===a[0]&&c.label<r[1]){c.label=r[1],r=a;break}if(r&&c.label<r[2]){c.label=r[2],c.ops.push(a);break}r[2]&&c.ops.pop(),c.trys.pop();continue}a=t.call(e,c)}catch(e){a=[6,e],o=0}finally{n=r=0}if(5&a[0])throw a[1];return{value:a[0]?a[1]:void 0,done:!0}}([a,i])}}};Object(p.f)({enforceActions:"observed"});var I=new x(A.microsoftFaceApiKey,A.microsoftFaceApiUrl),R="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVR42mNkYAAAAAYAAjCB0C8AAAAASUVORK5CYII=",j=function(){function e(){this.isLoading=!1,this.photo1={data:R,faceId:""},this.photo2={data:R,faceId:""}}return e.prototype.getFaceMatchConfidence=function(){return O(this,void 0,void 0,(function(){var e,t,n,o,r=this;return k(this,(function(a){switch(a.label){case 0:if(this.photo1.faceId&&this.photo2.faceId)return[2];this.isLoading=!0,a.label=1;case 1:return a.trys.push([1,6,,7]),[4,Promise.all([this.getFaceDetectionDetails(this.photo1),this.getFaceDetectionDetails(this.photo2)])];case 2:return e=a.sent(),Object(p.m)((function(){r.photo1=E(E({},r.photo1),e[0]),r.photo2=E(E({},r.photo2),e[1])})),t=e[0].faceId,n=e[1].faceId,t&&n?[4,I.compareFaces(t,n)]:[3,4];case 3:return o=a.sent(),Object(p.m)((function(){r.isLoading=!1,r.matchConfidence=o.confidence})),[3,5];case 4:Object(p.m)((function(){return r.isLoading=!1})),a.label=5;case 5:return[3,7];case 6:return a.sent(),Object(p.m)((function(){return r.isLoading=!1})),[3,7];case 7:return[2]}}))}))},e.prototype.getFaceDetectionDetails=function(e){return O(this,void 0,void 0,(function(){var t;return k(this,(function(n){switch(n.label){case 0:return e.data===R||e.faceId?[3,2]:[4,I.detectFace(e.data)];case 1:return t=n.sent(),[2,E(E({},e),t)];case 2:return[2,e]}}))}))},S([p.l],e.prototype,"isLoading",void 0),S([p.l],e.prototype,"matchConfidence",void 0),S([p.l],e.prototype,"photo1",void 0),S([p.l],e.prototype,"photo2",void 0),S([p.d],e.prototype,"getFaceMatchConfidence",null),e}();function F(e){return(F="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}var P,N,D,L,_,M,U,B,T=function(e,t){return Object.defineProperty?Object.defineProperty(e,"raw",{value:t}):e.raw=t,e},K=(P=function(e,t){return(P=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(e,t){e.__proto__=t}||function(e,t){for(var n in t)Object.prototype.hasOwnProperty.call(t,n)&&(e[n]=t[n])})(e,t)},function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Class extends value "+String(t)+" is not a constructor or null");function n(){this.constructor=e}P(e,t),e.prototype=null===t?Object.create(t):(n.prototype=t.prototype,new n)}),z=function(e,t,n,o){var r,a=arguments.length,c=a<3?t:null===o?o=Object.getOwnPropertyDescriptor(t,n):o;if("object"===("undefined"==typeof Reflect?"undefined":F(Reflect))&&"function"==typeof Reflect.decorate)c=Reflect.decorate(e,t,n,o);else for(var i=e.length-1;i>=0;i--)(r=e[i])&&(c=(a<3?r(c):a>3?r(t,n,c):r(t,n))||c);return a>3&&c&&Object.defineProperty(t,n,c),c},G=m.b.img.withConfig({displayName:"CapturedImage",componentId:"sc-1h5cvpn-0"})(N||(N=T(["\n  width: 480px;\n  height: 360px;\n  background-color: lightgray;\n  margin-bottom: 1px;\n  margin-left: 1px;\n"],["\n  width: 480px;\n  height: 360px;\n  background-color: lightgray;\n  margin-bottom: 1px;\n  margin-left: 1px;\n"]))),V=m.b.div.withConfig({displayName:"CaptureButtonContainer",componentId:"sc-1h5cvpn-1"})(D||(D=T(["\n  position: absolute;\n  top: 1px;\n  left: 2px;\n"],["\n  position: absolute;\n  top: 1px;\n  left: 2px;\n"]))),Y=m.b.div.withConfig({displayName:"FaceRectangle",componentId:"sc-1h5cvpn-2"})(L||(L=T(["\n  position: absolute;\n  border: 2px solid blue;\n"],["\n  position: absolute;\n  border: 2px solid blue;\n"]))),J=m.b.div.withConfig({displayName:"MatchNumber",componentId:"sc-1h5cvpn-3"})(_||(_=T(["\n  font-size: 72px;\n  line-height: 72px;\n  display: block;\n"],["\n  font-size: 72px;\n  line-height: 72px;\n  display: block;\n"]))),Q=m.b.div.withConfig({displayName:"MatchNumberLabel",componentId:"sc-1h5cvpn-4"})(M||(M=T(["\n  margin-bottom: 1em;\n"],["\n  margin-bottom: 1em;\n"]))),H=m.b.div.withConfig({displayName:"SpinnerContainer",componentId:"sc-1h5cvpn-5"})(U||(U=T(["\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  width: 480px;\n  height: 360px;\n  margin: 0 0 0 auto;\n  background-color: white;\n  text-align: center;\n"],["\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  width: 480px;\n  height: 360px;\n  margin: 0 0 0 auto;\n  background-color: white;\n  text-align: center;\n"]))),W=m.b.div.withConfig({displayName:"StyledWebcam",componentId:"sc-1h5cvpn-6"})(B||(B=T(["\n  video {\n    display: block;\n    background-color: lightgray;\n    margin: 0 0 1px auto;\n  }\n"],["\n  video {\n    display: block;\n    background-color: lightgray;\n    margin: 0 0 1px auto;\n  }\n"]))),q=function(e){function t(){var t=null!==e&&e.apply(this,arguments)||this;return t.faceCognitionStore=new j,t.capture=function(e){return function(){var n=t.webcam.getScreenshot();Object(p.m)((function(){1===e?t.faceCognitionStore.photo1={data:n,faceId:""}:t.faceCognitionStore.photo2={data:n,faceId:""}}))}},t.getMatchConfidence=function(){t.faceCognitionStore.getFaceMatchConfidence()},t}return K(t,e),t.prototype.render=function(){var e=this,t=this.faceCognitionStore,n=t.isLoading,i=t.matchConfidence,l=t.photo1,p=t.photo2,f=n?h.a.createElement(c.a,{size:"large"}):h.a.createElement("div",null,h.a.createElement(J,null,this.formatPercentage(i)),h.a.createElement(Q,null,"match confidence"),h.a.createElement("div",null,h.a.createElement(a.a,{onClick:this.getMatchConfidence},"Update")));return h.a.createElement(h.a.Fragment,null,h.a.createElement(r.a,null,h.a.createElement(o.a,{span:12},h.a.createElement(W,null,h.a.createElement(y.a,{audio:!1,height:360,ref:function(t){return e.webcam=t},screenshotFormat:"image/png",width:480}))),h.a.createElement(o.a,{span:12},l.faceRectangle&&h.a.createElement(Y,{style:{height:l.faceRectangle.height,left:l.faceRectangle.left,top:l.faceRectangle.top,width:l.faceRectangle.width}}),h.a.createElement(G,{src:l.data}),h.a.createElement(V,null,h.a.createElement(a.a,{onClick:this.capture(1)},h.a.createElement(u.a,null))))),h.a.createElement(r.a,null,h.a.createElement(o.a,{span:12},h.a.createElement(H,null,f)),h.a.createElement(o.a,{span:12},p.faceRectangle&&h.a.createElement(Y,{style:{height:p.faceRectangle.height,left:p.faceRectangle.left,top:p.faceRectangle.top,width:p.faceRectangle.width}}),h.a.createElement(G,{src:p.data}),h.a.createElement(V,null,h.a.createElement(a.a,{onClick:this.capture(2)},h.a.createElement(u.a,null))))))},t.prototype.formatPercentage=function(e){return l()(e)?"".concat((100*e).toFixed(0),"%"):"TBD"},z([p.d],t.prototype,"capture",void 0),t=z([f.a],t)}(h.a.Component);t.default=q}}]);