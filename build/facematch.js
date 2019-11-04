(window.webpackJsonp=window.webpackJsonp||[]).push([[6],{1054:function(e,t,n){var a=n(78),o=n(79),r="[object Number]";e.exports=function(e){return"number"==typeof e||o(e)&&a(e)==r}},1055:function(e,t,n){var a;a=function(e,t){return function(e){var t={};function n(a){if(t[a])return t[a].exports;var o=t[a]={i:a,l:!1,exports:{}};return e[a].call(o.exports,o,o.exports,n),o.l=!0,o.exports}return n.m=e,n.c=t,n.i=function(e){return e},n.d=function(e,t,a){n.o(e,t)||Object.defineProperty(e,t,{configurable:!1,enumerable:!0,get:a})},n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.p="",n(n.s=2)}([function(t,n){t.exports=e},function(e,n){e.exports=t},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var a="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},o=function(){function e(e,t){for(var n=0;n<t.length;n++){var a=t[n];a.enumerable=a.enumerable||!1,a.configurable=!0,"value"in a&&(a.writable=!0),Object.defineProperty(e,a.key,a)}}return function(t,n,a){return n&&e(t.prototype,n),a&&e(t,a),t}}(),r=n(1),i=u(r),s=u(n(0));function u(e){return e&&e.__esModule?e:{default:e}}var c=s.default.oneOfType([s.default.string,s.default.arrayOf(s.default.string),s.default.shape({exact:s.default.oneOfType([s.default.string,s.default.arrayOf(s.default.string)])}),s.default.shape({ideal:s.default.oneOfType([s.default.string,s.default.arrayOf(s.default.string)])})]),l=s.default.oneOfType([s.default.shape({exact:s.default.bool}),s.default.shape({ideal:s.default.bool})]),d=s.default.oneOfType([s.default.number,s.default.shape({exact:s.default.number,ideal:s.default.number,min:s.default.number,max:s.default.number})]),f=d,p=s.default.shape({deviceId:c,groupId:c,autoGainControl:l,channelCount:d,latency:f,noiseSuppression:l,sampleRate:d,sampleSize:d,volume:f}),h=s.default.shape({deviceId:c,groupId:c,aspectRatio:f,facingMode:c,frameRate:f,height:d,width:d}),m=function(e){function t(){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t);var e=function(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}(this,(t.__proto__||Object.getPrototypeOf(t)).call(this));return e.state={hasUserMedia:!1},e}return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(t,e),o(t,[{key:"componentDidMount",value:function(){(navigator.mediaDevices&&navigator.mediaDevices.getUserMedia||navigator.webkitGetUserMedia||navigator.mozGetUserMedia||navigator.msGetUserMedia)&&(t.mountedInstances.push(this),this.state.hasUserMedia||t.userMediaRequested||this.requestUserMedia())}},{key:"componentDidUpdate",value:function(e){JSON.stringify(e.audioConstraints)===JSON.stringify(this.props.audioConstraints)&&JSON.stringify(e.videoConstraints)===JSON.stringify(this.props.videoConstraints)||this.requestUserMedia()}},{key:"componentWillUnmount",value:function(){var e=t.mountedInstances.indexOf(this);t.mountedInstances.splice(e,1),t.userMediaRequested=!1,0===t.mountedInstances.length&&this.state.hasUserMedia&&(this.stream.getVideoTracks&&this.stream.getAudioTracks?(this.stream.getVideoTracks().map((function(e){return e.stop()})),this.stream.getAudioTracks().map((function(e){return e.stop()}))):this.stream.stop(),window.URL.revokeObjectURL(this.state.src))}},{key:"getScreenshot",value:function(){if(!this.state.hasUserMedia)return null;var e=this.getCanvas();return e&&e.toDataURL(this.props.screenshotFormat,this.props.screenshotQuality)}},{key:"getCanvas",value:function(){if(!this.state.hasUserMedia||!this.video.videoHeight)return null;if(!this.ctx){var e=document.createElement("canvas"),t=this.video.videoWidth/this.video.videoHeight,n=this.props.minScreenshotWidth||this.video.clientWidth,a=n/t;this.props.minScreenshotHeight&&a<this.props.minScreenshotHeight&&(n=(a=this.props.minScreenshotHeight)*t),e.width=n,e.height=a,this.canvas=e,this.ctx=e.getContext("2d")}var o=this.ctx,r=this.canvas;return o.imageSmoothingEnabled=this.props.imageSmoothing,o.drawImage(this.video,0,0,r.width,r.height),r}},{key:"requestUserMedia",value:function(){var e=this;navigator.getUserMedia=navigator.mediaDevices.getUserMedia||navigator.webkitGetUserMedia||navigator.mozGetUserMedia||navigator.msGetUserMedia;var n=function(n,a){var o={video:a||!0};e.props.audio&&(o.audio=n||!0),navigator.mediaDevices.getUserMedia(o).then((function(e){t.mountedInstances.forEach((function(t){return t.handleUserMedia(null,e)}))})).catch((function(e){t.mountedInstances.forEach((function(t){return t.handleUserMedia(e)}))}))};if("mediaDevices"in navigator)n(this.props.audioConstraints,this.props.videoConstraints);else{var o=function(e){return{optional:[{sourceId:e}]}},r=function(e){var t=(e||{}).deviceId;return"string"==typeof t?t:Array.isArray(t)&&t.length>0?t[0]:"object"===(void 0===t?"undefined":a(t))&&t.ideal?t.ideal:null};MediaStreamTrack.getSources((function(t){var a=null,i=null;t.forEach((function(e){"audio"===e.kind?a=e.id:"video"===e.kind&&(i=e.id)}));var s=r(e.props.audioConstraints);s&&(a=s);var u=r(e.props.videoConstraints);u&&(i=u),n(o(a),o(i))}))}t.userMediaRequested=!0}},{key:"handleUserMedia",value:function(e,t){if(e)return this.setState({hasUserMedia:!1}),void this.props.onUserMediaError(e);this.stream=t;try{this.video.srcObject=t,this.setState({hasUserMedia:!0})}catch(e){this.setState({hasUserMedia:!0,src:window.URL.createObjectURL(t)})}this.props.onUserMedia()}},{key:"render",value:function(){var e=this;return i.default.createElement("video",{autoPlay:!0,width:this.props.width,height:this.props.height,src:this.state.src,muted:this.props.audio,className:this.props.className,playsInline:!0,style:this.props.style,ref:function(t){e.video=t}})}}]),t}(r.Component);m.defaultProps={audio:!0,className:"",height:480,imageSmoothing:!0,onUserMedia:function(){},onUserMediaError:function(){},screenshotFormat:"image/webp",width:640,screenshotQuality:.92},m.propTypes={audio:s.default.bool,onUserMedia:s.default.func,onUserMediaError:s.default.func,height:s.default.oneOfType([s.default.number,s.default.string]),width:s.default.oneOfType([s.default.number,s.default.string]),screenshotFormat:s.default.oneOf(["image/webp","image/png","image/jpeg"]),style:s.default.object,className:s.default.string,screenshotQuality:s.default.number,minScreenshotWidth:s.default.number,minScreenshotHeight:s.default.number,audioConstraints:p,videoConstraints:h,imageSmoothing:s.default.bool},m.mountedInstances=[],m.userMediaRequested=!1,t.default=m,e.exports=t.default}])},e.exports=a(n(1),n(0))},1066:function(e,t,n){"use strict";n.r(t);n(976);var a=n(227),o=n.n(a),r=(n(981),n(988)),i=n.n(r),s=(n(983),n(984)),u=n.n(s),c=(n(975),n(978)),l=n.n(c),d=(n(965),n(967)),f=n.n(d),p=n(1054),h=n.n(p),m=n(5),g=n(229),y=n(0),v=n.n(y),b=n(1055),w=n.n(b),x=n(48);function M(e){return(M="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}var O,E,S,U,k,C,R,j,_=function(e,t){return Object.defineProperty?Object.defineProperty(e,"raw",{value:t}):e.raw=t,e},I=(O=function(e,t){return(O=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(e,t){e.__proto__=t}||function(e,t){for(var n in t)t.hasOwnProperty(n)&&(e[n]=t[n])})(e,t)},function(e,t){function n(){this.constructor=e}O(e,t),e.prototype=null===t?Object.create(t):(n.prototype=t.prototype,new n)}),P=function(e,t,n,a){var o,r=arguments.length,i=r<3?t:null===a?a=Object.getOwnPropertyDescriptor(t,n):a;if("object"===("undefined"==typeof Reflect?"undefined":M(Reflect))&&"function"==typeof Reflect.decorate)i=Reflect.decorate(e,t,n,a);else for(var s=e.length-1;s>=0;s--)(o=e[s])&&(i=(r<3?o(i):r>3?o(t,n,i):o(t,n))||i);return r>3&&i&&Object.defineProperty(t,n,i),i},T=x.a.img(E||(E=_(["\n  width: 480px;\n  height: 360px;\n  background-color: lightgray;\n  margin-bottom: 1px;\n  margin-left: 1px;\n"],["\n  width: 480px;\n  height: 360px;\n  background-color: lightgray;\n  margin-bottom: 1px;\n  margin-left: 1px;\n"]))),D=x.a.div(S||(S=_(["\n  position: absolute;\n  top: 1px;\n  left: 2px;\n"],["\n  position: absolute;\n  top: 1px;\n  left: 2px;\n"]))),N=x.a.div(U||(U=_(["\n  position: absolute;\n  border: 2px solid blue;\n"],["\n  position: absolute;\n  border: 2px solid blue;\n"]))),q=x.a.div(k||(k=_(["\n  font-size: 72px;\n  line-height: 72px;\n  display: block;\n"],["\n  font-size: 72px;\n  line-height: 72px;\n  display: block;\n"]))),F=x.a.div(C||(C=_(["\n  margin-bottom: 1em;\n"],["\n  margin-bottom: 1em;\n"]))),G=x.a.div(R||(R=_(["\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  width: 480px;\n  height: 360px;\n  margin: 0 0 0 auto;\n  background-color: white;\n  text-align: center;\n"],["\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  width: 480px;\n  height: 360px;\n  margin: 0 0 0 auto;\n  background-color: white;\n  text-align: center;\n"]))),z=x.a.div(j||(j=_(["\n  video {\n    display: block;\n    background-color: lightgray;\n    margin: 0 0 1px auto;\n  }\n"],["\n  video {\n    display: block;\n    background-color: lightgray;\n    margin: 0 0 1px auto;\n  }\n"]))),H=function(e){function t(){var t=null!==e&&e.apply(this,arguments)||this;return t.capture=function(e){return function(){var n=t.webcam.getScreenshot();Object(m.l)((function(){1===e?t.props.faceCognitionStore.photo1={data:n,faceId:""}:t.props.faceCognitionStore.photo2={data:n,faceId:""}}))}},t.getMatchConfidence=function(){t.props.faceCognitionStore.getFaceMatchConfidence()},t}return I(t,e),t.prototype.render=function(){var e=this,t=this.props.faceCognitionStore,n=t.isLoading,a=t.matchConfidence,r=t.photo1,s=t.photo2,c=n?v.a.createElement(f.a,{size:"large"}):v.a.createElement("div",null,v.a.createElement(q,null,this.formatPercentage(a)),v.a.createElement(F,null,"match confidence"),v.a.createElement("div",null,v.a.createElement(l.a,{onClick:this.getMatchConfidence},"Update")));return v.a.createElement(v.a.Fragment,null,v.a.createElement(u.a,null,v.a.createElement(i.a,{span:12},v.a.createElement(z,null,v.a.createElement(w.a,{audio:!1,height:360,ref:function(t){return e.webcam=t},screenshotFormat:"image/png",width:480}))),v.a.createElement(i.a,{span:12},r.faceRectangle&&v.a.createElement(N,{style:{height:r.faceRectangle.height,left:r.faceRectangle.left,top:r.faceRectangle.top,width:r.faceRectangle.width}}),v.a.createElement(T,{src:r.data}),v.a.createElement(D,null,v.a.createElement(l.a,{onClick:this.capture(1)},v.a.createElement(o.a,{type:"pushpin"}))))),v.a.createElement(u.a,null,v.a.createElement(i.a,{span:12},v.a.createElement(G,null,c)),v.a.createElement(i.a,{span:12},s.faceRectangle&&v.a.createElement(N,{style:{height:s.faceRectangle.height,left:s.faceRectangle.left,top:s.faceRectangle.top,width:s.faceRectangle.width}}),v.a.createElement(T,{src:s.data}),v.a.createElement(D,null,v.a.createElement(l.a,{onClick:this.capture(2)},v.a.createElement(o.a,{type:"pushpin"}))))))},t.prototype.formatPercentage=function(e){return h()(e)?(100*e).toFixed(0)+"%":"TBD"},P([m.d],t.prototype,"capture",void 0),t=P([g.a],t)}(v.a.Component);t.default=H}}]);