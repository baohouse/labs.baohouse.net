(window.webpackJsonp=window.webpackJsonp||[]).push([[5],{890:function(e,n,t){"use strict";Object.defineProperty(n,"__esModule",{value:!0});var o,r=function(e,n){if(Array.isArray(e))return e;if(Symbol.iterator in Object(e))return function(e,n){var t=[],o=!0,r=!1,a=void 0;try{for(var i,l=e[Symbol.iterator]();!(o=(i=l.next()).done)&&(t.push(i.value),!n||t.length!==n);o=!0);}catch(e){r=!0,a=e}finally{try{!o&&l.return&&l.return()}finally{if(r)throw a}}return t}(e,n);throw new TypeError("Invalid attempt to destructure non-iterable instance")},a=t(0),i=t(35),l=(o=i)&&o.__esModule?o:{default:o};var c=function(e,n,t){var o=e.reduce((function(e,n){var t=n.font.replace(/ +/g,"+"),o=(n.weights||[]).join(",");return[].concat(function(e){if(Array.isArray(e)){for(var n=0,t=Array(e.length);n<e.length;n++)t[n]=e[n];return t}return Array.from(e)}(e),[t+(o&&":"+o)])}),[]).join("|"),r=document.createElement("link");return r.rel="stylesheet",r.href="https://fonts.googleapis.com/css?family="+o,n&&Array.isArray(n)&&n.length>0&&(r.href+="&subset="+n.join(",")),t&&(r.href+="&display="+t),r},s=function(e){var n=e.fonts,t=e.subsets,o=e.display,i=void 0===o?null:o,l=(0,a.useState)(c(n,t,i)),s=r(l,2),u=s[0],f=s[1];return(0,a.useEffect)((function(){return document.head.appendChild(u),function(){return document.head.removeChild(u)}}),[u]),(0,a.useEffect)((function(){f(c(n,t,i))}),[n,t,i]),null};s.propTypes={fonts:l.default.arrayOf(l.default.shape({font:l.default.string.isRequired,weights:l.default.arrayOf(l.default.oneOfType([l.default.string,l.default.number]))})).isRequired,subsets:l.default.arrayOf(l.default.string),display:l.default.string},n.default=s},925:function(e,n,t){"use strict";t.r(n);var o=t(1),r=t(4),a=t(7),i=t(0),l=t.n(i),c=t(6),s=t.n(c),u=t(127),f=t(36),d=["className","component","viewBox","spin","rotate","tabIndex","onClick","children"],p=i.forwardRef((function(e,n){var t=e.className,l=e.component,c=e.viewBox,p=e.spin,m=e.rotate,h=e.tabIndex,y=e.onClick,g=e.children,b=Object(a.a)(e,d);Object(f.g)(Boolean(l||g),"Should have `component` prop or `children`."),Object(f.f)();var v=i.useContext(u.a).prefixCls,w=void 0===v?"anticon":v,x=s()(w,t),O=s()(Object(r.a)({},"".concat(w,"-spin"),!!p)),j=m?{msTransform:"rotate(".concat(m,"deg)"),transform:"rotate(".concat(m,"deg)")}:void 0,E=Object(o.a)(Object(o.a)({},f.e),{},{className:O,style:j,viewBox:c});c||delete E.viewBox;var C=h;return void 0===C&&y&&(C=-1),i.createElement("span",Object(o.a)(Object(o.a)({role:"img"},b),{},{ref:n,tabIndex:C,onClick:y,className:x}),l?i.createElement(l,Object(o.a)({},E),g):g?(Object(f.g)(Boolean(c)||1===i.Children.count(g)&&i.isValidElement(g)&&"use"===i.Children.only(g).type,"Make sure that you provide correct `viewBox` prop (default `0 0 1024 1024`) to the icon."),i.createElement("svg",Object(o.a)(Object(o.a)({},E),{},{viewBox:c}),g)):null)}));p.displayName="AntdIcon";var m,h,y,g,b,v,w,x,O,j,E,C,k,P=p,B=t(890),A=t.n(B),I=t(689),N=t(48),S=t(217),_=t.n(S),T=t(225),M=t.n(T),z=t(235),D=t(135),L=function(e,n){return Object.defineProperty?Object.defineProperty(e,"raw",{value:n}):e.raw=n,e},R=N.b.div.withConfig({displayName:"TitleContainer",componentId:"md0d9m-0"})(m||(m=L(["\n  width: 100%;\n"],["\n  width: 100%;\n"]))),q=N.b.h1.withConfig({displayName:"TitleContent",componentId:"md0d9m-1"})(h||(h=L(["\n  font-family: 'Press Start 2P', cursive;\n  line-height: 1.2em;\n  color: #9E2B0E;\n  text-align: center;\n  margin: 1em;\n"],["\n  font-family: 'Press Start 2P', cursive;\n  line-height: 1.2em;\n  color: #9E2B0E;\n  text-align: center;\n  margin: 1em;\n"]))),F=Object(N.b)(q).withConfig({displayName:"TitleContentSm",componentId:"md0d9m-2"})(y||(y=L(["\n  font-size: 1.4rem;\n"],["\n  font-size: 1.4rem;\n"]))),X=function(e){var n=e.children;return l.a.createElement(R,null,l.a.createElement(z.ContainerQuery,{query:D.a},(function(e){return _()([D.b.X_SMALL,D.b.SMALL],M()(e,(function(e){return e})))?l.a.createElement(F,null,n):l.a.createElement(q,null,n)})))},Y=function(e,n){return Object.defineProperty?Object.defineProperty(e,"raw",{value:n}):e.raw=n,e},J=(g=function(e,n){return(g=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(e,n){e.__proto__=n}||function(e,n){for(var t in n)Object.prototype.hasOwnProperty.call(n,t)&&(e[t]=n[t])})(e,n)},function(e,n){if("function"!=typeof n&&null!==n)throw new TypeError("Class extends value "+String(n)+" is not a constructor or null");function t(){this.constructor=e}g(e,n),e.prototype=null===n?Object.create(n):(t.prototype=n.prototype,new t)}),H=N.b.div.withConfig({displayName:"Container",componentId:"dt8e8f-0"})(b||(b=Y(["\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  min-height: 100vh;\n  background-color: #fc3;\n"],["\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  min-height: 100vh;\n  background-color: #fc3;\n"]))),Q=Object(N.b)(P).withConfig({displayName:"PlaybackButton",componentId:"dt8e8f-1"})(v||(v=Y(["\n  font-size: 48px;\n  color: #9e2b0e;\n"],["\n  font-size: 48px;\n  color: #9e2b0e;\n"]))),U=N.b.div.withConfig({displayName:"TitleRow",componentId:"dt8e8f-2"})(w||(w=Y(["\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  align-items: center;\n  margin-top: 1em;\n"],["\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  align-items: center;\n  margin-top: 1em;\n"]))),V=N.b.div.withConfig({displayName:"DogRow",componentId:"dt8e8f-3"})(O||(O=Y(["\n  overflow: hidden;\n  text-align: center;\n  position: relative;\n  min-height: 240px;\n\n  ","\n"],["\n  overflow: hidden;\n  text-align: center;\n  position: relative;\n  min-height: 240px;\n\n  ","\n"])),(function(e){return e.isMobile&&Object(N.a)(x||(x=Y(["\n      zoom: 0.5;\n    "],["\n      zoom: 0.5;\n    "])))})),W=N.b.img.withConfig({displayName:"Dog",componentId:"dt8e8f-4"})(j||(j=Y(["\n  position: absolute;\n  z-index: 10;\n  top: 0;\n  left: 50%;\n  transform: translateX(-50%);\n"],["\n  position: absolute;\n  z-index: 10;\n  top: 0;\n  left: 50%;\n  transform: translateX(-50%);\n"]))),G=Object(N.c)(E||(E=Y(["\n  @include keyframes(slide) {\n    0% {\n      transform: translate3d(0,0,0);\n    }\n    100% {\n      transform: translate3d(-600px,0,0);\n    }\n  }\n"],["\n  @include keyframes(slide) {\n    0% {\n      transform: translate3d(0,0,0);\n    }\n    100% {\n      transform: translate3d(-600px,0,0);\n    }\n  }\n"]))),K=N.b.div.withConfig({displayName:"FirecrackersTop",componentId:"dt8e8f-5"})(C||(C=Y(["\n  position: absolute;\n  background: url('/images/firecracker.gif') repeat-x left top;\n  animation: "," 3s linear infinite;\n  width: 300vw;\n  height: 150px;\n  top: 0;\n"],["\n  position: absolute;\n  background: url('/images/firecracker.gif') repeat-x left top;\n  animation: "," 3s linear infinite;\n  width: 300vw;\n  height: 150px;\n  top: 0;\n"])),G),Z=Object(N.b)(K).withConfig({displayName:"FirecrackersBottom",componentId:"dt8e8f-6"})(k||(k=Y(["\n  background-position: 75px top;\n  top: 125px;\n"],["\n  background-position: 75px top;\n  top: 125px;\n"]))),$=function(e){function n(n){var t=e.call(this,n)||this;return t.audio=new Audio("/audios/ly-ngua-o.aac"),t.togglePlayback=function(){var e=t.state.isPlaying;e?t.audio.pause():t.audio.play(),t.setState({isPlaying:!e})},t.state={isPlaying:!1},t}return J(n,e),n.prototype.componentDidMount=function(){this.audio.loop=!0,this.audio.volume=.5},n.prototype.componentWillUnmount=function(){this.audio.pause(),this.audio.src="",this.audio.load()},n.prototype.render=function(){var e=this.props.isMobile,n=this.state.isPlaying;return l.a.createElement(l.a.Fragment,null,l.a.createElement(A.a,{fonts:[{font:"Press Start 2P"}]}),l.a.createElement(I.Helmet,null,l.a.createElement("meta",{property:"og:type",content:"website"}),l.a.createElement("meta",{property:"og:title",content:"BẢOLABS – Year of the Dog"}),l.a.createElement("meta",{property:"og:url",content:"http://labs.baohouse.net/year-of-the-dog"}),l.a.createElement("meta",{property:"og:image",content:"http://labs.baohouse.net/images/dog-app.thumb.png"}),l.a.createElement("title",null,"BẢOLABS – Year of the Dog")),l.a.createElement(H,null,l.a.createElement(U,null,l.a.createElement(Q,{onClick:this.togglePlayback,theme:"filled",type:n?"pause-circle":"play-circle"}),l.a.createElement(X,null,"Year of the Dog!")),l.a.createElement(V,{isMobile:e},l.a.createElement(W,{src:"/images/dogs.gif"}),l.a.createElement(K,null),l.a.createElement(Z,null))))},n}(l.a.Component);n.default=$}}]);