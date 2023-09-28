"use strict";(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[15560],{34521:function(a,b,c){c.d(b,{fI:function(){return B},VW:function(){return Y},pm:function(){return M}});var d,e,f,g,h=c(10071),i=c(39838);function j(a,b,c){return b in a?Object.defineProperty(a,b,{value:c,enumerable:!0,configurable:!0,writable:!0}):a[b]=c,a}var k={TopStart:i.AnchoredLayerPosition.TopLeft,TopCenter:i.AnchoredLayerPosition.TopCenter,TopEnd:i.AnchoredLayerPosition.TopRight,BottomStart:i.AnchoredLayerPosition.BottomLeft,BottomCenter:i.AnchoredLayerPosition.BottomCenter,BottomEnd:i.AnchoredLayerPosition.BottomRight},l=(j(d={},k.BottomCenter,"center"),j(d,k.TopCenter,"center"),j(d,k.BottomStart,"flex-start"),j(d,k.TopStart,"flex-start"),j(d,k.BottomEnd,"flex-end"),j(d,k.TopEnd,"flex-end"),d),m=c(87379);function n(a,b){var c=Object.keys(a);if(Object.getOwnPropertySymbols){var d=Object.getOwnPropertySymbols(a);b&&(d=d.filter(function(b){return Object.getOwnPropertyDescriptor(a,b).enumerable})),c.push.apply(c,d)}return c}function o(a){for(var b=1;b<arguments.length;b++){var c=null!=arguments[b]?arguments[b]:{};b%2?n(Object(c),!0).forEach(function(b){p(a,b,c[b])}):Object.getOwnPropertyDescriptors?Object.defineProperties(a,Object.getOwnPropertyDescriptors(c)):n(Object(c)).forEach(function(b){Object.defineProperty(a,b,Object.getOwnPropertyDescriptor(c,b))})}return a}function p(a,b,c){return b in a?Object.defineProperty(a,b,{value:c,enumerable:!0,configurable:!0,writable:!0}):a[b]=c,a}var q=function(a){return a===k.TopStart||a===k.TopCenter||a===k.TopEnd},r=function(a){var b=a.toastsToDisplay,c=a.toastsToRender,d=a.setToastsToRender,e={};Object.keys(b).forEach(function(a){c[a]||(e[a]=b[a])}),Object.keys(e).length>0&&d(o(o({},c),e))};function s(a,b){return b||(b=a.slice(0)),Object.freeze(Object.defineProperties(a,{raw:{value:Object.freeze(b)}}))}var t=h.Breakpoints.Mobile,u="calc(100vw - ".concat(2*h.Spacing.XxSmall,"px)"),v=m.default.div.withConfig({displayName:"styles__ToastContainer",componentId:"sc-l1f8ls-0"})(["display:flex;padding:","px;justify-content:",";"],function(a){return a.insetFromEdge},function(a){return l[a.position]}),w=(0,h.withTheming)((0,m.default)(h.Inset).attrs(function(){return{horizontalSize:h.Spacing.Small,verticalSize:h.Spacing.XSmall}}).withConfig({displayName:"styles__ToastContentContainer",componentId:"sc-l1f8ls-1"})(["background:",";border-radius:","px;box-shadow:",";pointer-events:auto;display:inline-flex;min-height:","px;max-width:",";& > *{width:100%;}",";",";"],function(a){return a.theme.Colors.ToastInformationalBackground},function(a){var b=a.theme;return"Pill"===b.Shape.Toast?2*h.Spacing.Large:b.BorderRadius.ToastContainer},h.Shadows.Medium,h.Spacing.XxLarge,u,h.Media.Desktop(e||(e=s(["\n    width: ",";\n  "])),function(a){return a.hasAction?"".concat(t,"px"):"auto"}),h.Media.Mobile(f||(f=s(["\n    width: ",";\n  "])),function(a){return a.hasAction?"".concat(u):"auto"}))),x=m.default.div.withConfig({displayName:"styles__ViewportToastsContainer",componentId:"sc-l1f8ls-2"})(["position:fixed;width:100vw;pointer-events:none;margin:",";bottom:",";left:",";right:",";top:",";"],function(a){var b=a.position;return b===k.TopCenter||b===k.BottomCenter?"auto":void 0},function(a){return q(a.position)?void 0:0},function(a){var b=a.position;return b===k.BottomStart||b===k.TopStart?0:void 0},function(a){var b=a.position;return b===k.BottomEnd||b===k.TopEnd?0:void 0},function(a){return q(a.position)?0:void 0}),y=c(24906),z=c(11890),A=c(67294),B=function(a){var b,c=a.text,d=a.icon,e=a.isLoading,f=a.action,g=a.position,i=a.insetFromEdge,j=A.useContext(h.ThemingContext),k=void 0!==f&&void 0!==f.text&&"function"==typeof f.onClick;return A.createElement(v,{insetFromEdge:i,position:g},A.createElement(w,{role:"alert","aria-live":"off",hasAction:k},A.createElement(h.InlineChildren,{alignItems:h.InlineChildrenAlignment.Center,justifyContent:h.InlineChildrenJustification.SpaceBetween,size:h.InlineChildrenSize.XxSmall},A.createElement(h.InlineChildren,{alignItems:h.InlineChildrenAlignment.Center,size:h.InlineChildrenSize.XxSmall},d&&!e&&A.createElement(h.Icon,{type:d,color:h.TextColor.ToastInformationalForeground}),e&&A.createElement(z.default,{color:z.default.Colors.ToastInformationalForeground,size:z.default.Sizes.Small}),A.createElement(h.Text,{styles:h.TextStyle.ToastBody,color:h.TextColor.ToastInformationalForeground},c)),k&&A.createElement(h.Theming,{overrides:{Colors:{ButtonFlatPrimaryForeground:(b=j).Colors.ToastInformationalAction,ButtonFlatPrimaryForegroundDisabled:b.Colors.ToastInformationalActionDisabled,ButtonFlatPrimaryForegroundHovered:b.Colors.ToastInformationalActionHovered,ButtonFlatPrimaryForegroundPressed:b.Colors.ToastInformationalActionPressed},Typography:{TextStyles:{ToastAction:b.Typography.TextStyles.ToastAction}}}},A.createElement(y.default,{isInline:!0,type:y.default.Types.FlatPrimary,onClick:f.onClick,padding:y.default.Padding.None},A.createElement(h.Text,{color:h.TextColor.ButtonFlatPrimaryForeground,styles:h.TextStyle.ToastAction},f.text))))))},C=c(38410);function D(){return(D=Object.assign||function(a){for(var b=1;b<arguments.length;b++){var c=arguments[b];for(var d in c)Object.prototype.hasOwnProperty.call(c,d)&&(a[d]=c[d])}return a}).apply(this,arguments)}function E(a,b){(null==b||b>a.length)&&(b=a.length);for(var c=0,d=Array(b);c<b;c++)d[c]=a[c];return d}function F(a,b){var c=Object.keys(a);if(Object.getOwnPropertySymbols){var d=Object.getOwnPropertySymbols(a);b&&(d=d.filter(function(b){return Object.getOwnPropertyDescriptor(a,b).enumerable})),c.push.apply(c,d)}return c}function G(a,b,c){return b in a?Object.defineProperty(a,b,{value:c,enumerable:!0,configurable:!0,writable:!0}):a[b]=c,a}var H,I=function(a){var b=a.position,c=a.toastsToDisplay,d=a.toastsToRender,e=a.setToastsToRender,f=(0,C.a)("(prefers-reduced-motion: reduce)")?0:225,g=function(a){var b=function(a){for(var b=1;b<arguments.length;b++){var c=null!=arguments[b]?arguments[b]:{};b%2?F(Object(c),!0).forEach(function(b){G(a,b,c[b])}):Object.getOwnPropertyDescriptors?Object.defineProperties(a,Object.getOwnPropertyDescriptors(c)):F(Object(c)).forEach(function(b){Object.defineProperty(a,b,Object.getOwnPropertyDescriptor(c,b))})}return a}({},d);delete b[a],e(b)};return A.createElement(h.StackChildren,null,Object.entries(d).map(function(a){var d,e,j=(e=2,function a(b){if(Array.isArray(b))return b}(d=a)||function a(b,c){var d,e,f=b&&("undefined"!=typeof Symbol&&b[Symbol.iterator]||b["@@iterator"]);if(null!=f){var g=[],h=!0,i=!1;try{for(f=f.call(b);!(h=(d=f.next()).done)&&(g.push(d.value),!c||g.length!==c);h=!0);}catch(j){i=!0,e=j}finally{try{h||null==f.return||f.return()}finally{if(i)throw e}}return g}}(d,e)||function a(b,c){if(b){if("string"==typeof b)return E(b,c);var d=Object.prototype.toString.call(b).slice(8,-1);if("Object"===d&&b.constructor&&(d=b.constructor.name),"Map"===d||"Set"===d)return Array.from(b);if("Arguments"===d||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(d))return E(b,c)}}(d,e)||function a(){throw TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()),k=j[0],l=j[1];return A.createElement(i.LayerAnimation,{onExited:function(){return g(k)},key:k,exitDuration:f,styleDefault:{transition:"transform ".concat(f,"ms ease-in-out, opacity ").concat(f,"ms linear")},transition:{entering:{transform:"translate3d(0%, ".concat(q(b)?h.Spacing.XxSmall:-h.Spacing.XxSmall,"px, 0)"),opacity:0},entered:{transform:"translate3d(0%, 0px, 0)",opacity:1},exiting:{transform:"translate3d(0%, ".concat(q(b)?h.Spacing.XxSmall:-h.Spacing.XxSmall,"px, 0)"),opacity:0},exited:{transform:"translate3d(0%, 0px, 0)",opacity:0}},in:!!c[k]},A.createElement(B,D({},l,{position:b})))}))},J=function(a){var b=a.toastsToDisplay,c=a.toastsToRender,d=a.setToastsToRender,e=a.position;return A.createElement(x,{position:e},Object.keys(c).length?A.createElement(I,{toastsToDisplay:b,position:e,toastsToRender:c,setToastsToRender:d}):void 0)},K=(0,i.renderOnLayer)(i.Layers.Viewport,J,{AnimationType:i.AnimationTypes.Custom});(H=g||(g={}))[H.Short=4e3]="Short",H[H.Medium=6e3]="Medium",H[H.Long=1e4]="Long";var L=A.createContext({displayToast:function(){return null},hideToast:function(){}}),M=function(){return A.useContext(L)},N=c(51007);function O(a,b){var c=Object.keys(a);if(Object.getOwnPropertySymbols){var d=Object.getOwnPropertySymbols(a);b&&(d=d.filter(function(b){return Object.getOwnPropertyDescriptor(a,b).enumerable})),c.push.apply(c,d)}return c}function P(a){for(var b=1;b<arguments.length;b++){var c=null!=arguments[b]?arguments[b]:{};b%2?O(Object(c),!0).forEach(function(b){Q(a,b,c[b])}):Object.getOwnPropertyDescriptors?Object.defineProperties(a,Object.getOwnPropertyDescriptors(c)):O(Object(c)).forEach(function(b){Object.defineProperty(a,b,Object.getOwnPropertyDescriptor(c,b))})}return a}function Q(a,b,c){return b in a?Object.defineProperty(a,b,{value:c,enumerable:!0,configurable:!0,writable:!0}):a[b]=c,a}function R(a,b){return W(a)||V(a,b)||T(a,b)||S()}function S(){throw TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}function T(a,b){if(a){if("string"==typeof a)return U(a,b);var c=Object.prototype.toString.call(a).slice(8,-1);if("Object"===c&&a.constructor&&(c=a.constructor.name),"Map"===c||"Set"===c)return Array.from(a);if("Arguments"===c||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(c))return U(a,b)}}function U(a,b){(null==b||b>a.length)&&(b=a.length);for(var c=0,d=Array(b);c<b;c++)d[c]=a[c];return d}function V(a,b){var c,d,e=a&&("undefined"!=typeof Symbol&&a[Symbol.iterator]||a["@@iterator"]);if(null!=e){var f=[],g=!0,h=!1;try{for(e=e.call(a);!(g=(c=e.next()).done)&&(f.push(c.value),!b||f.length!==b);g=!0);}catch(i){h=!0,d=i}finally{try{g||null==e.return||e.return()}finally{if(h)throw d}}return f}}function W(a){if(Array.isArray(a))return a}var X=function(a){var b=a.duration,c=a.onDisplay,d=a.onHide,e=a.toastLimit,f=void 0===e?3:e,g=R(A.useState({}),2),h=g[0],i=g[1],j=A.useRef(h);j.current=h;var k=A.useRef({}),l=function(a){clearTimeout(k.current[a]);var b=P({},j.current),c=b[a];delete b[a],i(b),c&&c.onHide&&c.onHide(a,c),c&&d&&d(a,c)},m=function(a){var d=a.duration,e=function(a,b){if(null==a)return{};var c,d,e=function a(b,c){if(null==b)return{};var d,e,f={},g=Object.keys(b);for(e=0;e<g.length;e++)d=g[e],c.indexOf(d)>=0||(f[d]=b[d]);return f}(a,b);if(Object.getOwnPropertySymbols){var f=Object.getOwnPropertySymbols(a);for(d=0;d<f.length;d++)c=f[d],!(b.indexOf(c)>=0)&&Object.prototype.propertyIsEnumerable.call(a,c)&&(e[c]=a[c])}return e}(a,["duration"]);if(Object.entries(j.current).length>=f)return null;var g=(0,N.l)();i(P(P({},j.current),{},Q({},g,e))),c&&c(g,e);var h=d||b;if(h&&h>0){var m=setTimeout(function(){return l(g)},h);k.current[g]=m}return g};return A.useEffect(function(){var a=k.current;return function(){Object.values(a).map(clearTimeout)}},[]),{toasts:h,addToast:m,removeToast:l}},Y=function(a){var b=a.children,c=a.position,d=void 0===c?k.BottomCenter:c,e=a.duration,f=void 0===e?g.Short:e,h=a.onDisplay,j=a.onHide,l=a.setContainerAsViewport,m=X({duration:f,onDisplay:h,onHide:j}),n=m.toasts,o=m.addToast,p=m.removeToast,q=A.useState({}),s=R(q,2),t=s[0],u=s[1];return(A.useEffect(function(){r({toastsToDisplay:n,toastsToRender:t,setToastsToRender:u})},[n,t,u]),l)?A.createElement(A.Fragment,null,A.createElement(L.Provider,{value:{displayToast:o,hideToast:p}},b),A.createElement(K,{toastsToDisplay:n,toastsToRender:t,setToastsToRender:u,position:d})):A.createElement(i.AnchoredLayer,{animation:i.AnchoredLayerAnimation.Custom,content:Object.keys(t).length?A.createElement(I,{toastsToDisplay:n,position:d,toastsToRender:t,setToastsToRender:u}):void 0,inner:!0,position:d,shouldAutomaticallyFlip:!0},A.createElement(L.Provider,{value:{displayToast:o,hideToast:p}},b))};Y.Positions=k,Y.Durations=g},87620:function(a,b,c){c.d(b,{ZP:function(){return i},F_:function(){return j}});var d=c(67294),e=Object.prototype.hasOwnProperty;function f(a,b,c){for(c of a.keys())if(g(c,b))return c}function g(a,b){var c,d,h;if(a===b)return!0;if(a&&b&&(c=a.constructor)===b.constructor){if(c===Date)return a.getTime()===b.getTime();if(c===RegExp)return a.toString()===b.toString();if(c===Array){if((d=a.length)===b.length)for(;d--&&g(a[d],b[d]););return-1===d}if(c===Set){if(a.size!==b.size)return!1;for(d of a)if((h=d)&&"object"==typeof h&&!(h=f(b,h))||!b.has(h))return!1;return!0}if(c===Map){if(a.size!==b.size)return!1;for(d of a)if((h=d[0])&&"object"==typeof h&&!(h=f(b,h))||!g(d[1],b.get(h)))return!1;return!0}if(c===ArrayBuffer)a=new Uint8Array(a),b=new Uint8Array(b);else if(c===DataView){if((d=a.byteLength)===b.byteLength)for(;(d--)&&a.getInt8(d)===b.getInt8(d););return-1===d}if(ArrayBuffer.isView(a)){if((d=a.byteLength)===b.byteLength)for(;(d--)&&a[d]===b[d];);return-1===d}if(!c||"object"==typeof a){for(c in d=0,a)if(e.call(a,c)&&++d&&!e.call(b,c)||!(c in b)||!g(a[c],b[c]))return!1;return Object.keys(b).length===d}}return a!=a&&b!=b}function h(a){var b=d.useRef(a),c=d.useRef(0);return g(a,b.current)||(b.current=a,c.current+=1),d.useMemo(function(){return b.current},[c.current])}function i(a,b){return d.useEffect(a,h(b))}function j(a,b){return d.useEffect(a,h(b))}}}])