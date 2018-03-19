(window.webpackJsonp=window.webpackJsonp||[]).push([[6],{642:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var a=m(n(677)),o=m(n(1)),r=n(647),l=function(e){if(e&&e.__esModule)return e;var t={};if(null!=e)for(var n in e)if(Object.prototype.hasOwnProperty.call(e,n)){var a=Object.defineProperty&&Object.getOwnPropertyDescriptor?Object.getOwnPropertyDescriptor(e,n):{};a.get||a.set?Object.defineProperty(t,n,a):t[n]=e[n]}return t.default=e,t}(n(127)),i=m(n(674)),u=k(["\n  min-height: 100vh;\n  background-color: #fc3;\n  display: flex;\n  flex-direction: column;\n"]),c=k(["\n  display: inline-block;\n  margin-top: 10px;\n  margin-left: 10px;\n"]),s=k(["\n  flex-grow: 1;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n"]),f=k(["\n  flex-grow: 1;\n  overflow: hidden;\n  text-align: center;\n  position: relative;\n  min-height: 200px;\n"]),d=k(["\n  position: absolute;\n  z-index: 10;\n  top: 0;\n  left: 50%;\n  transform: translateX(-50%);\n"]),p=k(["\n  @include keyframes(slide) {\n    0% {\n      transform: translate3d(0,0,0);\n    }\n    100% {\n      transform: translate3d(-600px,0,0);\n    }\n  }\n"]),h=k(['\n  position: absolute;\n  background: url("/images/firecracker.gif") repeat-x left top;\n  animation: '," 3s linear infinite;\n  width: 300vw;\n  height: 150px;\n  top: 0;\n"]),y=k(["\n  background-position: 75px top;\n  top: 125px;\n"]);function m(e){return e&&e.__esModule?e:{default:e}}function b(e){return(b="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function g(e,t){for(var n=0;n<t.length;n++){var a=t[n];a.enumerable=a.enumerable||!1,a.configurable=!0,"value"in a&&(a.writable=!0),Object.defineProperty(e,a.key,a)}}function v(e,t){return!t||"object"!==b(t)&&"function"!=typeof t?function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e):t}function k(e,t){return t||(t=e.slice(0)),Object.freeze(Object.defineProperties(e,{raw:{value:Object.freeze(t)}}))}var C=l.default.div(u),w=(0,l.default)(a.default)(c),O=l.default.div(s),P=l.default.div(f),_=l.default.img(d),x=(0,l.keyframes)(p),j=l.default.div(h,x),E=(0,l.default)(j)(y),S=function(e){function t(e){var n;return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t),(n=v(this,(t.__proto__||Object.getPrototypeOf(t)).call(this,e))).audio=new Audio("/audios/ly-ngua-o.aac"),n.togglePlayback=function(){var e=n.state.isPlaying;e?n.audio.pause():n.audio.play(),n.setState({isPlaying:!e})},n.state={isPlaying:!0},n}var n,a,l;return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(t,o.default.Component),n=t,(a=[{key:"componentDidMount",value:function(){var e=this;this.audio.loop=!0,this.audio.volume=.5;var t=this.audio.play();void 0!==t&&t.catch(function(){e.setState({isPlaying:!1})})}},{key:"componentWillUnmount",value:function(){this.audio.pause(),this.audio.src="",this.audio.load()}},{key:"render",value:function(){var e=this.state.isPlaying;return o.default.createElement(o.default.Fragment,null,o.default.createElement(r.Helmet,null,o.default.createElement("link",{href:"//fonts.googleapis.com/css?family=Press+Start+2P",rel:"stylesheet"}),o.default.createElement("meta",{property:"og:type",content:"website"}),o.default.createElement("meta",{property:"og:title",content:"BẢOLABS – Year of the Dog"}),o.default.createElement("meta",{property:"og:url",content:"http://labs.baohouse.net/year-of-the-dog"}),o.default.createElement("meta",{property:"og:image",content:"http://labs.baohouse.net/images/dog-app.thumb.png"}),o.default.createElement("title",null,"BẢOLABS – Year of the Dog")),o.default.createElement(C,null,o.default.createElement("div",null,o.default.createElement(w,{checked:e,checkedChildren:"Playing",unCheckedChildren:"Paused",onChange:this.togglePlayback})),o.default.createElement(O,null,o.default.createElement(i.default,null,"Happy New Year of the Dog!")),o.default.createElement(P,null,o.default.createElement(_,{src:"/images/dogs.gif"}),o.default.createElement(j,null),o.default.createElement(E,null))))}}])&&g(n.prototype,a),l&&g(n,l),t}();t.default=S},674:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var a=f(n(186)),o=f(n(1)),r=n(274),l=f(n(127)),i=function(e){if(e&&e.__esModule)return e;var t={};if(null!=e)for(var n in e)if(Object.prototype.hasOwnProperty.call(e,n)){var a=Object.defineProperty&&Object.getOwnPropertyDescriptor?Object.getOwnPropertyDescriptor(e,n):{};a.get||a.set?Object.defineProperty(t,n,a):t[n]=e[n]}return t.default=e,t}(n(271)),u=d(["\n  width: 100%;\n"]),c=d(["\n  font-family: 'Press Start 2P', cursive;\n  line-height: 1.2em;\n  color: #9E2B0E;\n  text-align: center;\n"]),s=d(["\n  font-size: 1.4rem;\n"]);function f(e){return e&&e.__esModule?e:{default:e}}function d(e,t){return t||(t=e.slice(0)),Object.freeze(Object.defineProperties(e,{raw:{value:Object.freeze(t)}}))}var p=l.default.div(u),h=l.default.h1(c),y=(0,l.default)(h)(s),m=function(e){var t=e.children;return o.default.createElement(p,null,o.default.createElement(r.ContainerQuery,{query:i.BreakpointsMap},function(e){return a.default.includes([i.default.X_SMALL,i.default.SMALL],a.default.findKey(e,function(e){return e}))?o.default.createElement(y,null,t):o.default.createElement(h,null,t)}))};t.default=m},675:function(e,t,n){"use strict";n.r(t);var a=n(3),o=n.n(a),r=n(53),l=n.n(r),i=n(123),u=n.n(i),c=n(12),s=n.n(c),f=n(21),d=n.n(f),p=n(10),h=n.n(p),y=n(11),m=n.n(y),b=n(1),g=n.n(b),v=n(0),k=n.n(v),C=n(28);function w(){}var O=function(e){function t(e){s()(this,t);var n=h()(this,(t.__proto__||Object.getPrototypeOf(t)).call(this,e));P.call(n);var a=!1;return a="checked"in e?!!e.checked:!!e.defaultChecked,n.state={checked:a},n}return m()(t,e),d()(t,[{key:"componentDidMount",value:function(){var e=this.props,t=e.autoFocus,n=e.disabled;t&&!n&&this.focus()}},{key:"componentWillReceiveProps",value:function(e){"checked"in e&&this.setState({checked:!!e.checked})}},{key:"setChecked",value:function(e){this.props.disabled||("checked"in this.props||this.setState({checked:e}),this.props.onChange(e))}},{key:"focus",value:function(){this.node.focus()}},{key:"blur",value:function(){this.node.blur()}},{key:"render",value:function(){var e,t=this.props,n=t.className,a=t.prefixCls,r=t.disabled,i=t.checkedChildren,c=t.tabIndex,s=t.unCheckedChildren,f=u()(t,["className","prefixCls","disabled","checkedChildren","tabIndex","unCheckedChildren"]),d=this.state.checked,p=r?-1:c||0,h=C((e={},l()(e,n,!!n),l()(e,a,!0),l()(e,a+"-checked",d),l()(e,a+"-disabled",r),e));return g.a.createElement("span",o()({},f,{className:h,tabIndex:p,ref:this.saveNode,onKeyDown:this.handleKeyDown,onClick:this.toggle,onMouseUp:this.handleMouseUp}),g.a.createElement("span",{className:a+"-inner"},d?i:s))}}]),t}(b.Component),P=function(){var e=this;this.toggle=function(){var t=e.props.onClick,n=!e.state.checked;e.setChecked(n),t(n)},this.handleKeyDown=function(t){37===t.keyCode?e.setChecked(!1):39===t.keyCode?e.setChecked(!0):32!==t.keyCode&&13!==t.keyCode||e.toggle()},this.handleMouseUp=function(t){e.node&&e.node.blur(),e.props.onMouseUp&&e.props.onMouseUp(t)},this.saveNode=function(t){e.node=t}};O.propTypes={className:k.a.string,prefixCls:k.a.string,disabled:k.a.bool,checkedChildren:k.a.any,unCheckedChildren:k.a.any,onChange:k.a.func,onMouseUp:k.a.func,onClick:k.a.func,tabIndex:k.a.number,checked:k.a.bool,defaultChecked:k.a.bool,autoFocus:k.a.bool},O.defaultProps={prefixCls:"rc-switch",checkedChildren:null,unCheckedChildren:null,className:"",defaultChecked:!1,onChange:w,onClick:w},t.default=O},676:function(e,t,n){e.exports=n(675)},677:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var a=h(n(3)),o=h(n(53)),r=h(n(12)),l=h(n(21)),i=h(n(10)),u=h(n(11)),c=function(e){if(e&&e.__esModule)return e;var t={};if(null!=e)for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&(t[n]=e[n]);return t.default=e,t}(n(1)),s=h(n(0)),f=h(n(676)),d=h(n(28)),p=h(n(185));function h(e){return e&&e.__esModule?e:{default:e}}var y=function(e){function t(){(0,r.default)(this,t);var e=(0,i.default)(this,(t.__proto__||Object.getPrototypeOf(t)).apply(this,arguments));return e.saveSwitch=function(t){e.rcSwitch=t},e}return(0,u.default)(t,e),(0,l.default)(t,[{key:"focus",value:function(){this.rcSwitch.focus()}},{key:"blur",value:function(){this.rcSwitch.blur()}},{key:"render",value:function(){var e,t=this.props,n=t.prefixCls,r=t.size,l=t.loading,i=t.className,u=void 0===i?"":i,s=(0,d.default)(u,(e={},(0,o.default)(e,n+"-small","small"===r),(0,o.default)(e,n+"-loading",l),e));return c.createElement(f.default,(0,a.default)({},(0,p.default)(this.props,["loading"]),{className:s,ref:this.saveSwitch}))}}]),t}(c.Component);t.default=y,y.defaultProps={prefixCls:"ant-switch"},y.propTypes={prefixCls:s.default.string,size:s.default.oneOf(["small","default","large"]),className:s.default.string},e.exports=t.default}}]);