import{g as q,r as x}from"./index-2506bfc3.js";import{p as $,u as z}from"./VideoPlayer-dda4aebe.js";function B(f,u){for(var p=0;p<u.length;p++){const l=u[p];if(typeof l!="string"&&!Array.isArray(l)){for(const c in l)if(c!=="default"&&!(c in f)){const y=Object.getOwnPropertyDescriptor(l,c);y&&Object.defineProperty(f,c,y.get?y:{enumerable:!0,get:()=>l[c]})}}}return Object.freeze(Object.defineProperty(f,Symbol.toStringTag,{value:"Module"}))}var b={};(function(f){function u(e){return typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?u=function(n){return typeof n}:u=function(n){return n&&typeof Symbol=="function"&&n.constructor===Symbol&&n!==Symbol.prototype?"symbol":typeof n},u(e)}Object.defineProperty(f,"__esModule",{value:!0}),f.default=void 0;var p=S(x),l=z,c=$;function y(){if(typeof WeakMap!="function")return null;var e=new WeakMap;return y=function(){return e},e}function S(e){if(e&&e.__esModule)return e;if(e===null||u(e)!=="object"&&typeof e!="function")return{default:e};var r=y();if(r&&r.has(e))return r.get(e);var n={},t=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var o in e)if(Object.prototype.hasOwnProperty.call(e,o)){var a=t?Object.getOwnPropertyDescriptor(e,o):null;a&&(a.get||a.set)?Object.defineProperty(n,o,a):n[o]=e[o]}return n.default=e,r&&r.set(e,n),n}function w(e,r){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);r&&(t=t.filter(function(o){return Object.getOwnPropertyDescriptor(e,o).enumerable})),n.push.apply(n,t)}return n}function R(e){for(var r=1;r<arguments.length;r++){var n=arguments[r]!=null?arguments[r]:{};r%2?w(Object(n),!0).forEach(function(t){s(e,t,n[t])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):w(Object(n)).forEach(function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))})}return e}function k(e,r){if(!(e instanceof r))throw new TypeError("Cannot call a class as a function")}function D(e,r){for(var n=0;n<r.length;n++){var t=r[n];t.enumerable=t.enumerable||!1,t.configurable=!0,"value"in t&&(t.writable=!0),Object.defineProperty(e,t.key,t)}}function V(e,r,n){return r&&D(e.prototype,r),n&&D(e,n),e}function E(e,r){if(typeof r!="function"&&r!==null)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(r&&r.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),r&&v(e,r)}function v(e,r){return v=Object.setPrototypeOf||function(t,o){return t.__proto__=o,t},v(e,r)}function j(e){var r=T();return function(){var t=h(e),o;if(r){var a=h(this).constructor;o=Reflect.construct(t,arguments,a)}else o=t.apply(this,arguments);return M(this,o)}}function M(e,r){return r&&(u(r)==="object"||typeof r=="function")?r:d(e)}function d(e){if(e===void 0)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function T(){if(typeof Reflect>"u"||!Reflect.construct||Reflect.construct.sham)return!1;if(typeof Proxy=="function")return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],function(){})),!0}catch{return!1}}function h(e){return h=Object.setPrototypeOf?Object.getPrototypeOf:function(n){return n.__proto__||Object.getPrototypeOf(n)},h(e)}function s(e,r,n){return r in e?Object.defineProperty(e,r,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[r]=n,e}var A="https://play.vidyard.com/embed/v4.js",L="VidyardV4",C="onVidyardAPI",g=function(e){E(n,e);var r=j(n);function n(){var t;k(this,n);for(var o=arguments.length,a=new Array(o),i=0;i<o;i++)a[i]=arguments[i];return t=r.call.apply(r,[this].concat(a)),s(d(t),"callPlayer",l.callPlayer),s(d(t),"mute",function(){t.setVolume(0)}),s(d(t),"unmute",function(){t.props.volume!==null&&t.setVolume(t.props.volume)}),s(d(t),"ref",function(_){t.container=_}),t}return V(n,[{key:"componentDidMount",value:function(){this.props.onMount&&this.props.onMount(this)}},{key:"load",value:function(o){var a=this,i=this.props,_=i.playing,K=i.config,W=i.onError,I=i.onDuration,m=o&&o.match(c.MATCH_URL_VIDYARD)[1];this.player&&this.stop(),(0,l.getSDK)(A,L,C).then(function(O){a.container&&(O.api.addReadyListener(function(P,N){a.player||(a.player=N,a.player.on("ready",a.props.onReady),a.player.on("play",a.props.onPlay),a.player.on("pause",a.props.onPause),a.player.on("seek",a.props.onSeek),a.player.on("playerComplete",a.props.onEnded))},m),O.api.renderPlayer(R({uuid:m,container:a.container,autoplay:_?1:0},K.options)),O.api.getPlayerMetadata(m).then(function(P){a.duration=P.length_in_seconds,I(P.length_in_seconds)}))},W)}},{key:"play",value:function(){this.callPlayer("play")}},{key:"pause",value:function(){this.callPlayer("pause")}},{key:"stop",value:function(){window.VidyardV4.api.destroyPlayer(this.player)}},{key:"seekTo",value:function(o){this.callPlayer("seek",o)}},{key:"setVolume",value:function(o){this.callPlayer("setVolume",o)}},{key:"setPlaybackRate",value:function(o){this.callPlayer("setPlaybackSpeed",o)}},{key:"getDuration",value:function(){return this.duration}},{key:"getCurrentTime",value:function(){return this.callPlayer("currentTime")}},{key:"getSecondsLoaded",value:function(){return null}},{key:"render",value:function(){var o=this.props.display,a={width:"100%",height:"100%",display:o};return p.default.createElement("div",{style:a},p.default.createElement("div",{ref:this.ref}))}}]),n}(p.Component);f.default=g,s(g,"displayName","Vidyard"),s(g,"canPlay",c.canPlay.vidyard)})(b);const G=q(b),F=B({__proto__:null,default:G},[b]);export{F as V};
//# sourceMappingURL=Vidyard-e536db4f.js.map
