(window.webpackJsonp=window.webpackJsonp||[]).push([[5],{641:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var a=w(n(653)),l=w(n(674)),o=w(n(269)),r=w(n(667)),c=w(n(650)),i=w(n(186)),u=n(19),f=n(270),d=w(n(1)),p=w(n(666)),s=w(n(127)),h=j(["\n  width: 480px;\n  height: 360px;\n  background-color: lightgray;\n  margin-bottom: 1px;\n  margin-left: 1px;\n"]),m=j(["\n  position: absolute;\n  top: 1px;\n  left: 2px;\n"]),g=j(["\n  position: absolute;\n  border: 2px solid blue;\n"]),b=j(["\n  font-size: 72px;\n  line-height: 72px;\n  display: block;\n"]),y=j(["\n  margin-bottom: 1em;\n"]),v=j(["\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  width: 480px;\n  height: 360px;\n  margin: 0 0 0 auto;\n  background-color: white;\n  text-align: center;\n"]),E=j(["\n  video {\n    display: block;\n    background-color: lightgray;\n    margin: 0 0 1px auto;\n  }\n"]);function w(e){return e&&e.__esModule?e:{default:e}}function x(e,t){for(var n=0;n<t.length;n++){var a=t[n];a.enumerable=a.enumerable||!1,a.configurable=!0,"value"in a&&(a.writable=!0),Object.defineProperty(e,a.key,a)}}function O(e,t){return!t||"object"!==k(t)&&"function"!=typeof t?function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e):t}function j(e,t){return t||(t=e.slice(0)),Object.freeze(Object.defineProperties(e,{raw:{value:Object.freeze(t)}}))}function k(e){return(k="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}var R=function(e,t,n,a){var l,o=arguments.length,r=o<3?t:null===a?a=Object.getOwnPropertyDescriptor(t,n):a;if("object"===k(Reflect)&&"function"==typeof Reflect.decorate)r=Reflect.decorate(e,t,n,a);else for(var c=e.length-1;c>=0;c--)(l=e[c])&&(r=(o<3?l(r):o>3?l(t,n,r):l(t,n))||r);return o>3&&r&&Object.defineProperty(t,n,r),r},_=s.default.img(h),C=(0,s.default)(a.default)(m),S=s.default.div(g),P=s.default.div(b),z=s.default.div(y),F=s.default.div(v),M=s.default.div(E),T=function(e){function t(){return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t),O(this,(t.__proto__||Object.getPrototypeOf(t)).apply(this,arguments))}var n,u,f;return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(t,d.default.Component),n=t,(u=[{key:"render",value:function(){var e=this,t=this.props.faceCognitionStore,n=t.isLoading,i=t.getFaceMatchConfidence,u=t.matchConfidence,f=t.photo1,s=t.photo2,h=n?d.default.createElement(c.default,{size:"large"}):d.default.createElement("div",null,d.default.createElement(P,null,this.formatPercentage(u)),d.default.createElement(z,null,"match confidence"),d.default.createElement("div",null,d.default.createElement(a.default,{onClick:i.bind(this.props.faceCognitionStore)},"Update")));return d.default.createElement(d.default.Fragment,null,d.default.createElement(r.default,null,d.default.createElement(l.default,{span:12},d.default.createElement(M,null,d.default.createElement(p.default,{audio:!1,height:360,ref:function(t){return e.webcam=t},screenshotFormat:"image/png",width:480}))),d.default.createElement(l.default,{span:12},f.faceRectangle&&d.default.createElement(S,{style:{height:f.faceRectangle.height,left:f.faceRectangle.left,top:f.faceRectangle.top,width:f.faceRectangle.width}}),d.default.createElement(_,{src:f.data}),d.default.createElement(C,{onClick:this.capture.bind(this,1)},d.default.createElement(o.default,{type:"pushpin"})))),d.default.createElement(r.default,null,d.default.createElement(l.default,{span:12},d.default.createElement(F,null,h)),d.default.createElement(l.default,{span:12},s.faceRectangle&&d.default.createElement(S,{style:{height:s.faceRectangle.height,left:s.faceRectangle.left,top:s.faceRectangle.top,width:s.faceRectangle.width}}),d.default.createElement(_,{src:s.data}),d.default.createElement(C,{onClick:this.capture.bind(this,2)},d.default.createElement(o.default,{type:"pushpin"})))))}},{key:"capture",value:function(e){var t=this.webcam.getScreenshot();1===e?this.props.faceCognitionStore.photo1.data=t:this.props.faceCognitionStore.photo2.data=t}},{key:"formatPercentage",value:function(e){return i.default.isNumber(e)?"".concat((100*e).toFixed(0),"%"):"TBD"}}])&&x(n.prototype,u),f&&x(n,f),t}();R([u.action],T.prototype,"capture",null);var D=T=R([f.observer],T);t.default=D}}]);