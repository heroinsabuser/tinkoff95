(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const o of document.querySelectorAll('link[rel="modulepreload"]'))r(o);new MutationObserver(o=>{for(const l of o)if(l.type==="childList")for(const i of l.addedNodes)i.tagName==="LINK"&&i.rel==="modulepreload"&&r(i)}).observe(document,{childList:!0,subtree:!0});function n(o){const l={};return o.integrity&&(l.integrity=o.integrity),o.referrerPolicy&&(l.referrerPolicy=o.referrerPolicy),o.crossOrigin==="use-credentials"?l.credentials="include":o.crossOrigin==="anonymous"?l.credentials="omit":l.credentials="same-origin",l}function r(o){if(o.ep)return;o.ep=!0;const l=n(o);fetch(o.href,l)}})();function On(e){return e&&e.__esModule&&Object.prototype.hasOwnProperty.call(e,"default")?e.default:e}var Bc={exports:{}},Ml={},Mc={exports:{}},K={};/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var xo=Symbol.for("react.element"),Mp=Symbol.for("react.portal"),Fp=Symbol.for("react.fragment"),Hp=Symbol.for("react.strict_mode"),Up=Symbol.for("react.profiler"),Qp=Symbol.for("react.provider"),Vp=Symbol.for("react.context"),Wp=Symbol.for("react.forward_ref"),Gp=Symbol.for("react.suspense"),Kp=Symbol.for("react.memo"),Yp=Symbol.for("react.lazy"),lu=Symbol.iterator;function Xp(e){return e===null||typeof e!="object"?null:(e=lu&&e[lu]||e["@@iterator"],typeof e=="function"?e:null)}var Fc={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},Hc=Object.assign,Uc={};function Er(e,t,n){this.props=e,this.context=t,this.refs=Uc,this.updater=n||Fc}Er.prototype.isReactComponent={};Er.prototype.setState=function(e,t){if(typeof e!="object"&&typeof e!="function"&&e!=null)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,e,t,"setState")};Er.prototype.forceUpdate=function(e){this.updater.enqueueForceUpdate(this,e,"forceUpdate")};function Qc(){}Qc.prototype=Er.prototype;function Ja(e,t,n){this.props=e,this.context=t,this.refs=Uc,this.updater=n||Fc}var qa=Ja.prototype=new Qc;qa.constructor=Ja;Hc(qa,Er.prototype);qa.isPureReactComponent=!0;var iu=Array.isArray,Vc=Object.prototype.hasOwnProperty,es={current:null},Wc={key:!0,ref:!0,__self:!0,__source:!0};function Gc(e,t,n){var r,o={},l=null,i=null;if(t!=null)for(r in t.ref!==void 0&&(i=t.ref),t.key!==void 0&&(l=""+t.key),t)Vc.call(t,r)&&!Wc.hasOwnProperty(r)&&(o[r]=t[r]);var a=arguments.length-2;if(a===1)o.children=n;else if(1<a){for(var s=Array(a),c=0;c<a;c++)s[c]=arguments[c+2];o.children=s}if(e&&e.defaultProps)for(r in a=e.defaultProps,a)o[r]===void 0&&(o[r]=a[r]);return{$$typeof:xo,type:e,key:l,ref:i,props:o,_owner:es.current}}function Zp(e,t){return{$$typeof:xo,type:e.type,key:t,ref:e.ref,props:e.props,_owner:e._owner}}function ts(e){return typeof e=="object"&&e!==null&&e.$$typeof===xo}function Jp(e){var t={"=":"=0",":":"=2"};return"$"+e.replace(/[=:]/g,function(n){return t[n]})}var au=/\/+/g;function di(e,t){return typeof e=="object"&&e!==null&&e.key!=null?Jp(""+e.key):t.toString(36)}function Yo(e,t,n,r,o){var l=typeof e;(l==="undefined"||l==="boolean")&&(e=null);var i=!1;if(e===null)i=!0;else switch(l){case"string":case"number":i=!0;break;case"object":switch(e.$$typeof){case xo:case Mp:i=!0}}if(i)return i=e,o=o(i),e=r===""?"."+di(i,0):r,iu(o)?(n="",e!=null&&(n=e.replace(au,"$&/")+"/"),Yo(o,t,n,"",function(c){return c})):o!=null&&(ts(o)&&(o=Zp(o,n+(!o.key||i&&i.key===o.key?"":(""+o.key).replace(au,"$&/")+"/")+e)),t.push(o)),1;if(i=0,r=r===""?".":r+":",iu(e))for(var a=0;a<e.length;a++){l=e[a];var s=r+di(l,a);i+=Yo(l,t,n,s,o)}else if(s=Xp(e),typeof s=="function")for(e=s.call(e),a=0;!(l=e.next()).done;)l=l.value,s=r+di(l,a++),i+=Yo(l,t,n,s,o);else if(l==="object")throw t=String(e),Error("Objects are not valid as a React child (found: "+(t==="[object Object]"?"object with keys {"+Object.keys(e).join(", ")+"}":t)+"). If you meant to render a collection of children, use an array instead.");return i}function Co(e,t,n){if(e==null)return e;var r=[],o=0;return Yo(e,r,"","",function(l){return t.call(n,l,o++)}),r}function qp(e){if(e._status===-1){var t=e._result;t=t(),t.then(function(n){(e._status===0||e._status===-1)&&(e._status=1,e._result=n)},function(n){(e._status===0||e._status===-1)&&(e._status=2,e._result=n)}),e._status===-1&&(e._status=0,e._result=t)}if(e._status===1)return e._result.default;throw e._result}var He={current:null},Xo={transition:null},eh={ReactCurrentDispatcher:He,ReactCurrentBatchConfig:Xo,ReactCurrentOwner:es};K.Children={map:Co,forEach:function(e,t,n){Co(e,function(){t.apply(this,arguments)},n)},count:function(e){var t=0;return Co(e,function(){t++}),t},toArray:function(e){return Co(e,function(t){return t})||[]},only:function(e){if(!ts(e))throw Error("React.Children.only expected to receive a single React element child.");return e}};K.Component=Er;K.Fragment=Fp;K.Profiler=Up;K.PureComponent=Ja;K.StrictMode=Hp;K.Suspense=Gp;K.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=eh;K.cloneElement=function(e,t,n){if(e==null)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+e+".");var r=Hc({},e.props),o=e.key,l=e.ref,i=e._owner;if(t!=null){if(t.ref!==void 0&&(l=t.ref,i=es.current),t.key!==void 0&&(o=""+t.key),e.type&&e.type.defaultProps)var a=e.type.defaultProps;for(s in t)Vc.call(t,s)&&!Wc.hasOwnProperty(s)&&(r[s]=t[s]===void 0&&a!==void 0?a[s]:t[s])}var s=arguments.length-2;if(s===1)r.children=n;else if(1<s){a=Array(s);for(var c=0;c<s;c++)a[c]=arguments[c+2];r.children=a}return{$$typeof:xo,type:e.type,key:o,ref:l,props:r,_owner:i}};K.createContext=function(e){return e={$$typeof:Vp,_currentValue:e,_currentValue2:e,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},e.Provider={$$typeof:Qp,_context:e},e.Consumer=e};K.createElement=Gc;K.createFactory=function(e){var t=Gc.bind(null,e);return t.type=e,t};K.createRef=function(){return{current:null}};K.forwardRef=function(e){return{$$typeof:Wp,render:e}};K.isValidElement=ts;K.lazy=function(e){return{$$typeof:Yp,_payload:{_status:-1,_result:e},_init:qp}};K.memo=function(e,t){return{$$typeof:Kp,type:e,compare:t===void 0?null:t}};K.startTransition=function(e){var t=Xo.transition;Xo.transition={};try{e()}finally{Xo.transition=t}};K.unstable_act=function(){throw Error("act(...) is not supported in production builds of React.")};K.useCallback=function(e,t){return He.current.useCallback(e,t)};K.useContext=function(e){return He.current.useContext(e)};K.useDebugValue=function(){};K.useDeferredValue=function(e){return He.current.useDeferredValue(e)};K.useEffect=function(e,t){return He.current.useEffect(e,t)};K.useId=function(){return He.current.useId()};K.useImperativeHandle=function(e,t,n){return He.current.useImperativeHandle(e,t,n)};K.useInsertionEffect=function(e,t){return He.current.useInsertionEffect(e,t)};K.useLayoutEffect=function(e,t){return He.current.useLayoutEffect(e,t)};K.useMemo=function(e,t){return He.current.useMemo(e,t)};K.useReducer=function(e,t,n){return He.current.useReducer(e,t,n)};K.useRef=function(e){return He.current.useRef(e)};K.useState=function(e){return He.current.useState(e)};K.useSyncExternalStore=function(e,t,n){return He.current.useSyncExternalStore(e,t,n)};K.useTransition=function(){return He.current.useTransition()};K.version="18.2.0";Mc.exports=K;var w=Mc.exports;const y=On(w);/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var th=w,nh=Symbol.for("react.element"),rh=Symbol.for("react.fragment"),oh=Object.prototype.hasOwnProperty,lh=th.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,ih={key:!0,ref:!0,__self:!0,__source:!0};function Kc(e,t,n){var r,o={},l=null,i=null;n!==void 0&&(l=""+n),t.key!==void 0&&(l=""+t.key),t.ref!==void 0&&(i=t.ref);for(r in t)oh.call(t,r)&&!ih.hasOwnProperty(r)&&(o[r]=t[r]);if(e&&e.defaultProps)for(r in t=e.defaultProps,t)o[r]===void 0&&(o[r]=t[r]);return{$$typeof:nh,type:e,key:l,ref:i,props:o,_owner:lh.current}}Ml.Fragment=rh;Ml.jsx=Kc;Ml.jsxs=Kc;Bc.exports=Ml;var u=Bc.exports,Vi={},Yc={exports:{}},et={},Xc={exports:{}},Zc={};/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */(function(e){function t(A,L){var R=A.length;A.push(L);e:for(;0<R;){var W=R-1>>>1,Y=A[W];if(0<o(Y,L))A[W]=L,A[R]=Y,R=W;else break e}}function n(A){return A.length===0?null:A[0]}function r(A){if(A.length===0)return null;var L=A[0],R=A.pop();if(R!==L){A[0]=R;e:for(var W=0,Y=A.length,O=Y>>>1;W<O;){var B=2*(W+1)-1,G=A[B],M=B+1,Q=A[M];if(0>o(G,R))M<Y&&0>o(Q,G)?(A[W]=Q,A[M]=R,W=M):(A[W]=G,A[B]=R,W=B);else if(M<Y&&0>o(Q,R))A[W]=Q,A[M]=R,W=M;else break e}}return L}function o(A,L){var R=A.sortIndex-L.sortIndex;return R!==0?R:A.id-L.id}if(typeof performance=="object"&&typeof performance.now=="function"){var l=performance;e.unstable_now=function(){return l.now()}}else{var i=Date,a=i.now();e.unstable_now=function(){return i.now()-a}}var s=[],c=[],g=1,h=null,m=3,x=!1,k=!1,b=!1,_=typeof setTimeout=="function"?setTimeout:null,f=typeof clearTimeout=="function"?clearTimeout:null,d=typeof setImmediate<"u"?setImmediate:null;typeof navigator<"u"&&navigator.scheduling!==void 0&&navigator.scheduling.isInputPending!==void 0&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function p(A){for(var L=n(c);L!==null;){if(L.callback===null)r(c);else if(L.startTime<=A)r(c),L.sortIndex=L.expirationTime,t(s,L);else break;L=n(c)}}function v(A){if(b=!1,p(A),!k)if(n(s)!==null)k=!0,ke(E);else{var L=n(c);L!==null&&be(v,L.startTime-A)}}function E(A,L){k=!1,b&&(b=!1,f(D),D=-1),x=!0;var R=m;try{for(p(L),h=n(s);h!==null&&(!(h.expirationTime>L)||A&&!q());){var W=h.callback;if(typeof W=="function"){h.callback=null,m=h.priorityLevel;var Y=W(h.expirationTime<=L);L=e.unstable_now(),typeof Y=="function"?h.callback=Y:h===n(s)&&r(s),p(L)}else r(s);h=n(s)}if(h!==null)var O=!0;else{var B=n(c);B!==null&&be(v,B.startTime-L),O=!1}return O}finally{h=null,m=R,x=!1}}var S=!1,$=null,D=-1,H=5,P=-1;function q(){return!(e.unstable_now()-P<H)}function ee(){if($!==null){var A=e.unstable_now();P=A;var L=!0;try{L=$(!0,A)}finally{L?pe():(S=!1,$=null)}}else S=!1}var pe;if(typeof d=="function")pe=function(){d(ee)};else if(typeof MessageChannel<"u"){var he=new MessageChannel,se=he.port2;he.port1.onmessage=ee,pe=function(){se.postMessage(null)}}else pe=function(){_(ee,0)};function ke(A){$=A,S||(S=!0,pe())}function be(A,L){D=_(function(){A(e.unstable_now())},L)}e.unstable_IdlePriority=5,e.unstable_ImmediatePriority=1,e.unstable_LowPriority=4,e.unstable_NormalPriority=3,e.unstable_Profiling=null,e.unstable_UserBlockingPriority=2,e.unstable_cancelCallback=function(A){A.callback=null},e.unstable_continueExecution=function(){k||x||(k=!0,ke(E))},e.unstable_forceFrameRate=function(A){0>A||125<A?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):H=0<A?Math.floor(1e3/A):5},e.unstable_getCurrentPriorityLevel=function(){return m},e.unstable_getFirstCallbackNode=function(){return n(s)},e.unstable_next=function(A){switch(m){case 1:case 2:case 3:var L=3;break;default:L=m}var R=m;m=L;try{return A()}finally{m=R}},e.unstable_pauseExecution=function(){},e.unstable_requestPaint=function(){},e.unstable_runWithPriority=function(A,L){switch(A){case 1:case 2:case 3:case 4:case 5:break;default:A=3}var R=m;m=A;try{return L()}finally{m=R}},e.unstable_scheduleCallback=function(A,L,R){var W=e.unstable_now();switch(typeof R=="object"&&R!==null?(R=R.delay,R=typeof R=="number"&&0<R?W+R:W):R=W,A){case 1:var Y=-1;break;case 2:Y=250;break;case 5:Y=1073741823;break;case 4:Y=1e4;break;default:Y=5e3}return Y=R+Y,A={id:g++,callback:L,priorityLevel:A,startTime:R,expirationTime:Y,sortIndex:-1},R>W?(A.sortIndex=R,t(c,A),n(s)===null&&A===n(c)&&(b?(f(D),D=-1):b=!0,be(v,R-W))):(A.sortIndex=Y,t(s,A),k||x||(k=!0,ke(E))),A},e.unstable_shouldYield=q,e.unstable_wrapCallback=function(A){var L=m;return function(){var R=m;m=L;try{return A.apply(this,arguments)}finally{m=R}}}})(Zc);Xc.exports=Zc;var ah=Xc.exports;/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Jc=w,qe=ah;function T(e){for(var t="https://reactjs.org/docs/error-decoder.html?invariant="+e,n=1;n<arguments.length;n++)t+="&args[]="+encodeURIComponent(arguments[n]);return"Minified React error #"+e+"; visit "+t+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var qc=new Set,Jr={};function Bn(e,t){fr(e,t),fr(e+"Capture",t)}function fr(e,t){for(Jr[e]=t,e=0;e<t.length;e++)qc.add(t[e])}var Ot=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),Wi=Object.prototype.hasOwnProperty,sh=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,su={},uu={};function uh(e){return Wi.call(uu,e)?!0:Wi.call(su,e)?!1:sh.test(e)?uu[e]=!0:(su[e]=!0,!1)}function ch(e,t,n,r){if(n!==null&&n.type===0)return!1;switch(typeof t){case"function":case"symbol":return!0;case"boolean":return r?!1:n!==null?!n.acceptsBooleans:(e=e.toLowerCase().slice(0,5),e!=="data-"&&e!=="aria-");default:return!1}}function dh(e,t,n,r){if(t===null||typeof t>"u"||ch(e,t,n,r))return!0;if(r)return!1;if(n!==null)switch(n.type){case 3:return!t;case 4:return t===!1;case 5:return isNaN(t);case 6:return isNaN(t)||1>t}return!1}function Ue(e,t,n,r,o,l,i){this.acceptsBooleans=t===2||t===3||t===4,this.attributeName=r,this.attributeNamespace=o,this.mustUseProperty=n,this.propertyName=e,this.type=t,this.sanitizeURL=l,this.removeEmptyString=i}var Le={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(e){Le[e]=new Ue(e,0,!1,e,null,!1,!1)});[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(e){var t=e[0];Le[t]=new Ue(t,1,!1,e[1],null,!1,!1)});["contentEditable","draggable","spellCheck","value"].forEach(function(e){Le[e]=new Ue(e,2,!1,e.toLowerCase(),null,!1,!1)});["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(e){Le[e]=new Ue(e,2,!1,e,null,!1,!1)});"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(e){Le[e]=new Ue(e,3,!1,e.toLowerCase(),null,!1,!1)});["checked","multiple","muted","selected"].forEach(function(e){Le[e]=new Ue(e,3,!0,e,null,!1,!1)});["capture","download"].forEach(function(e){Le[e]=new Ue(e,4,!1,e,null,!1,!1)});["cols","rows","size","span"].forEach(function(e){Le[e]=new Ue(e,6,!1,e,null,!1,!1)});["rowSpan","start"].forEach(function(e){Le[e]=new Ue(e,5,!1,e.toLowerCase(),null,!1,!1)});var ns=/[\-:]([a-z])/g;function rs(e){return e[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(e){var t=e.replace(ns,rs);Le[t]=new Ue(t,1,!1,e,null,!1,!1)});"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(e){var t=e.replace(ns,rs);Le[t]=new Ue(t,1,!1,e,"http://www.w3.org/1999/xlink",!1,!1)});["xml:base","xml:lang","xml:space"].forEach(function(e){var t=e.replace(ns,rs);Le[t]=new Ue(t,1,!1,e,"http://www.w3.org/XML/1998/namespace",!1,!1)});["tabIndex","crossOrigin"].forEach(function(e){Le[e]=new Ue(e,1,!1,e.toLowerCase(),null,!1,!1)});Le.xlinkHref=new Ue("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1);["src","href","action","formAction"].forEach(function(e){Le[e]=new Ue(e,1,!1,e.toLowerCase(),null,!0,!0)});function os(e,t,n,r){var o=Le.hasOwnProperty(t)?Le[t]:null;(o!==null?o.type!==0:r||!(2<t.length)||t[0]!=="o"&&t[0]!=="O"||t[1]!=="n"&&t[1]!=="N")&&(dh(t,n,o,r)&&(n=null),r||o===null?uh(t)&&(n===null?e.removeAttribute(t):e.setAttribute(t,""+n)):o.mustUseProperty?e[o.propertyName]=n===null?o.type===3?!1:"":n:(t=o.attributeName,r=o.attributeNamespace,n===null?e.removeAttribute(t):(o=o.type,n=o===3||o===4&&n===!0?"":""+n,r?e.setAttributeNS(r,t,n):e.setAttribute(t,n))))}var Ht=Jc.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,To=Symbol.for("react.element"),Wn=Symbol.for("react.portal"),Gn=Symbol.for("react.fragment"),ls=Symbol.for("react.strict_mode"),Gi=Symbol.for("react.profiler"),ed=Symbol.for("react.provider"),td=Symbol.for("react.context"),is=Symbol.for("react.forward_ref"),Ki=Symbol.for("react.suspense"),Yi=Symbol.for("react.suspense_list"),as=Symbol.for("react.memo"),Kt=Symbol.for("react.lazy"),nd=Symbol.for("react.offscreen"),cu=Symbol.iterator;function jr(e){return e===null||typeof e!="object"?null:(e=cu&&e[cu]||e["@@iterator"],typeof e=="function"?e:null)}var fe=Object.assign,fi;function Pr(e){if(fi===void 0)try{throw Error()}catch(n){var t=n.stack.trim().match(/\n( *(at )?)/);fi=t&&t[1]||""}return`
`+fi+e}var pi=!1;function hi(e,t){if(!e||pi)return"";pi=!0;var n=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(t)if(t=function(){throw Error()},Object.defineProperty(t.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(t,[])}catch(c){var r=c}Reflect.construct(e,[],t)}else{try{t.call()}catch(c){r=c}e.call(t.prototype)}else{try{throw Error()}catch(c){r=c}e()}}catch(c){if(c&&r&&typeof c.stack=="string"){for(var o=c.stack.split(`
`),l=r.stack.split(`
`),i=o.length-1,a=l.length-1;1<=i&&0<=a&&o[i]!==l[a];)a--;for(;1<=i&&0<=a;i--,a--)if(o[i]!==l[a]){if(i!==1||a!==1)do if(i--,a--,0>a||o[i]!==l[a]){var s=`
`+o[i].replace(" at new "," at ");return e.displayName&&s.includes("<anonymous>")&&(s=s.replace("<anonymous>",e.displayName)),s}while(1<=i&&0<=a);break}}}finally{pi=!1,Error.prepareStackTrace=n}return(e=e?e.displayName||e.name:"")?Pr(e):""}function fh(e){switch(e.tag){case 5:return Pr(e.type);case 16:return Pr("Lazy");case 13:return Pr("Suspense");case 19:return Pr("SuspenseList");case 0:case 2:case 15:return e=hi(e.type,!1),e;case 11:return e=hi(e.type.render,!1),e;case 1:return e=hi(e.type,!0),e;default:return""}}function Xi(e){if(e==null)return null;if(typeof e=="function")return e.displayName||e.name||null;if(typeof e=="string")return e;switch(e){case Gn:return"Fragment";case Wn:return"Portal";case Gi:return"Profiler";case ls:return"StrictMode";case Ki:return"Suspense";case Yi:return"SuspenseList"}if(typeof e=="object")switch(e.$$typeof){case td:return(e.displayName||"Context")+".Consumer";case ed:return(e._context.displayName||"Context")+".Provider";case is:var t=e.render;return e=e.displayName,e||(e=t.displayName||t.name||"",e=e!==""?"ForwardRef("+e+")":"ForwardRef"),e;case as:return t=e.displayName||null,t!==null?t:Xi(e.type)||"Memo";case Kt:t=e._payload,e=e._init;try{return Xi(e(t))}catch{}}return null}function ph(e){var t=e.type;switch(e.tag){case 24:return"Cache";case 9:return(t.displayName||"Context")+".Consumer";case 10:return(t._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return e=t.render,e=e.displayName||e.name||"",t.displayName||(e!==""?"ForwardRef("+e+")":"ForwardRef");case 7:return"Fragment";case 5:return t;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return Xi(t);case 8:return t===ls?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if(typeof t=="function")return t.displayName||t.name||null;if(typeof t=="string")return t}return null}function cn(e){switch(typeof e){case"boolean":case"number":case"string":case"undefined":return e;case"object":return e;default:return""}}function rd(e){var t=e.type;return(e=e.nodeName)&&e.toLowerCase()==="input"&&(t==="checkbox"||t==="radio")}function hh(e){var t=rd(e)?"checked":"value",n=Object.getOwnPropertyDescriptor(e.constructor.prototype,t),r=""+e[t];if(!e.hasOwnProperty(t)&&typeof n<"u"&&typeof n.get=="function"&&typeof n.set=="function"){var o=n.get,l=n.set;return Object.defineProperty(e,t,{configurable:!0,get:function(){return o.call(this)},set:function(i){r=""+i,l.call(this,i)}}),Object.defineProperty(e,t,{enumerable:n.enumerable}),{getValue:function(){return r},setValue:function(i){r=""+i},stopTracking:function(){e._valueTracker=null,delete e[t]}}}}function jo(e){e._valueTracker||(e._valueTracker=hh(e))}function od(e){if(!e)return!1;var t=e._valueTracker;if(!t)return!0;var n=t.getValue(),r="";return e&&(r=rd(e)?e.checked?"true":"false":e.value),e=r,e!==n?(t.setValue(e),!0):!1}function fl(e){if(e=e||(typeof document<"u"?document:void 0),typeof e>"u")return null;try{return e.activeElement||e.body}catch{return e.body}}function Zi(e,t){var n=t.checked;return fe({},t,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:n??e._wrapperState.initialChecked})}function du(e,t){var n=t.defaultValue==null?"":t.defaultValue,r=t.checked!=null?t.checked:t.defaultChecked;n=cn(t.value!=null?t.value:n),e._wrapperState={initialChecked:r,initialValue:n,controlled:t.type==="checkbox"||t.type==="radio"?t.checked!=null:t.value!=null}}function ld(e,t){t=t.checked,t!=null&&os(e,"checked",t,!1)}function Ji(e,t){ld(e,t);var n=cn(t.value),r=t.type;if(n!=null)r==="number"?(n===0&&e.value===""||e.value!=n)&&(e.value=""+n):e.value!==""+n&&(e.value=""+n);else if(r==="submit"||r==="reset"){e.removeAttribute("value");return}t.hasOwnProperty("value")?qi(e,t.type,n):t.hasOwnProperty("defaultValue")&&qi(e,t.type,cn(t.defaultValue)),t.checked==null&&t.defaultChecked!=null&&(e.defaultChecked=!!t.defaultChecked)}function fu(e,t,n){if(t.hasOwnProperty("value")||t.hasOwnProperty("defaultValue")){var r=t.type;if(!(r!=="submit"&&r!=="reset"||t.value!==void 0&&t.value!==null))return;t=""+e._wrapperState.initialValue,n||t===e.value||(e.value=t),e.defaultValue=t}n=e.name,n!==""&&(e.name=""),e.defaultChecked=!!e._wrapperState.initialChecked,n!==""&&(e.name=n)}function qi(e,t,n){(t!=="number"||fl(e.ownerDocument)!==e)&&(n==null?e.defaultValue=""+e._wrapperState.initialValue:e.defaultValue!==""+n&&(e.defaultValue=""+n))}var Or=Array.isArray;function ir(e,t,n,r){if(e=e.options,t){t={};for(var o=0;o<n.length;o++)t["$"+n[o]]=!0;for(n=0;n<e.length;n++)o=t.hasOwnProperty("$"+e[n].value),e[n].selected!==o&&(e[n].selected=o),o&&r&&(e[n].defaultSelected=!0)}else{for(n=""+cn(n),t=null,o=0;o<e.length;o++){if(e[o].value===n){e[o].selected=!0,r&&(e[o].defaultSelected=!0);return}t!==null||e[o].disabled||(t=e[o])}t!==null&&(t.selected=!0)}}function ea(e,t){if(t.dangerouslySetInnerHTML!=null)throw Error(T(91));return fe({},t,{value:void 0,defaultValue:void 0,children:""+e._wrapperState.initialValue})}function pu(e,t){var n=t.value;if(n==null){if(n=t.children,t=t.defaultValue,n!=null){if(t!=null)throw Error(T(92));if(Or(n)){if(1<n.length)throw Error(T(93));n=n[0]}t=n}t==null&&(t=""),n=t}e._wrapperState={initialValue:cn(n)}}function id(e,t){var n=cn(t.value),r=cn(t.defaultValue);n!=null&&(n=""+n,n!==e.value&&(e.value=n),t.defaultValue==null&&e.defaultValue!==n&&(e.defaultValue=n)),r!=null&&(e.defaultValue=""+r)}function hu(e){var t=e.textContent;t===e._wrapperState.initialValue&&t!==""&&t!==null&&(e.value=t)}function ad(e){switch(e){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function ta(e,t){return e==null||e==="http://www.w3.org/1999/xhtml"?ad(t):e==="http://www.w3.org/2000/svg"&&t==="foreignObject"?"http://www.w3.org/1999/xhtml":e}var _o,sd=function(e){return typeof MSApp<"u"&&MSApp.execUnsafeLocalFunction?function(t,n,r,o){MSApp.execUnsafeLocalFunction(function(){return e(t,n,r,o)})}:e}(function(e,t){if(e.namespaceURI!=="http://www.w3.org/2000/svg"||"innerHTML"in e)e.innerHTML=t;else{for(_o=_o||document.createElement("div"),_o.innerHTML="<svg>"+t.valueOf().toString()+"</svg>",t=_o.firstChild;e.firstChild;)e.removeChild(e.firstChild);for(;t.firstChild;)e.appendChild(t.firstChild)}});function qr(e,t){if(t){var n=e.firstChild;if(n&&n===e.lastChild&&n.nodeType===3){n.nodeValue=t;return}}e.textContent=t}var Hr={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},mh=["Webkit","ms","Moz","O"];Object.keys(Hr).forEach(function(e){mh.forEach(function(t){t=t+e.charAt(0).toUpperCase()+e.substring(1),Hr[t]=Hr[e]})});function ud(e,t,n){return t==null||typeof t=="boolean"||t===""?"":n||typeof t!="number"||t===0||Hr.hasOwnProperty(e)&&Hr[e]?(""+t).trim():t+"px"}function cd(e,t){e=e.style;for(var n in t)if(t.hasOwnProperty(n)){var r=n.indexOf("--")===0,o=ud(n,t[n],r);n==="float"&&(n="cssFloat"),r?e.setProperty(n,o):e[n]=o}}var gh=fe({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function na(e,t){if(t){if(gh[e]&&(t.children!=null||t.dangerouslySetInnerHTML!=null))throw Error(T(137,e));if(t.dangerouslySetInnerHTML!=null){if(t.children!=null)throw Error(T(60));if(typeof t.dangerouslySetInnerHTML!="object"||!("__html"in t.dangerouslySetInnerHTML))throw Error(T(61))}if(t.style!=null&&typeof t.style!="object")throw Error(T(62))}}function ra(e,t){if(e.indexOf("-")===-1)return typeof t.is=="string";switch(e){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var oa=null;function ss(e){return e=e.target||e.srcElement||window,e.correspondingUseElement&&(e=e.correspondingUseElement),e.nodeType===3?e.parentNode:e}var la=null,ar=null,sr=null;function mu(e){if(e=bo(e)){if(typeof la!="function")throw Error(T(280));var t=e.stateNode;t&&(t=Vl(t),la(e.stateNode,e.type,t))}}function dd(e){ar?sr?sr.push(e):sr=[e]:ar=e}function fd(){if(ar){var e=ar,t=sr;if(sr=ar=null,mu(e),t)for(e=0;e<t.length;e++)mu(t[e])}}function pd(e,t){return e(t)}function hd(){}var mi=!1;function md(e,t,n){if(mi)return e(t,n);mi=!0;try{return pd(e,t,n)}finally{mi=!1,(ar!==null||sr!==null)&&(hd(),fd())}}function eo(e,t){var n=e.stateNode;if(n===null)return null;var r=Vl(n);if(r===null)return null;n=r[t];e:switch(t){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(r=!r.disabled)||(e=e.type,r=!(e==="button"||e==="input"||e==="select"||e==="textarea")),e=!r;break e;default:e=!1}if(e)return null;if(n&&typeof n!="function")throw Error(T(231,t,typeof n));return n}var ia=!1;if(Ot)try{var _r={};Object.defineProperty(_r,"passive",{get:function(){ia=!0}}),window.addEventListener("test",_r,_r),window.removeEventListener("test",_r,_r)}catch{ia=!1}function vh(e,t,n,r,o,l,i,a,s){var c=Array.prototype.slice.call(arguments,3);try{t.apply(n,c)}catch(g){this.onError(g)}}var Ur=!1,pl=null,hl=!1,aa=null,yh={onError:function(e){Ur=!0,pl=e}};function xh(e,t,n,r,o,l,i,a,s){Ur=!1,pl=null,vh.apply(yh,arguments)}function wh(e,t,n,r,o,l,i,a,s){if(xh.apply(this,arguments),Ur){if(Ur){var c=pl;Ur=!1,pl=null}else throw Error(T(198));hl||(hl=!0,aa=c)}}function Mn(e){var t=e,n=e;if(e.alternate)for(;t.return;)t=t.return;else{e=t;do t=e,t.flags&4098&&(n=t.return),e=t.return;while(e)}return t.tag===3?n:null}function gd(e){if(e.tag===13){var t=e.memoizedState;if(t===null&&(e=e.alternate,e!==null&&(t=e.memoizedState)),t!==null)return t.dehydrated}return null}function gu(e){if(Mn(e)!==e)throw Error(T(188))}function kh(e){var t=e.alternate;if(!t){if(t=Mn(e),t===null)throw Error(T(188));return t!==e?null:e}for(var n=e,r=t;;){var o=n.return;if(o===null)break;var l=o.alternate;if(l===null){if(r=o.return,r!==null){n=r;continue}break}if(o.child===l.child){for(l=o.child;l;){if(l===n)return gu(o),e;if(l===r)return gu(o),t;l=l.sibling}throw Error(T(188))}if(n.return!==r.return)n=o,r=l;else{for(var i=!1,a=o.child;a;){if(a===n){i=!0,n=o,r=l;break}if(a===r){i=!0,r=o,n=l;break}a=a.sibling}if(!i){for(a=l.child;a;){if(a===n){i=!0,n=l,r=o;break}if(a===r){i=!0,r=l,n=o;break}a=a.sibling}if(!i)throw Error(T(189))}}if(n.alternate!==r)throw Error(T(190))}if(n.tag!==3)throw Error(T(188));return n.stateNode.current===n?e:t}function vd(e){return e=kh(e),e!==null?yd(e):null}function yd(e){if(e.tag===5||e.tag===6)return e;for(e=e.child;e!==null;){var t=yd(e);if(t!==null)return t;e=e.sibling}return null}var xd=qe.unstable_scheduleCallback,vu=qe.unstable_cancelCallback,bh=qe.unstable_shouldYield,Sh=qe.unstable_requestPaint,ve=qe.unstable_now,Eh=qe.unstable_getCurrentPriorityLevel,us=qe.unstable_ImmediatePriority,wd=qe.unstable_UserBlockingPriority,ml=qe.unstable_NormalPriority,$h=qe.unstable_LowPriority,kd=qe.unstable_IdlePriority,Fl=null,At=null;function Ah(e){if(At&&typeof At.onCommitFiberRoot=="function")try{At.onCommitFiberRoot(Fl,e,void 0,(e.current.flags&128)===128)}catch{}}var mt=Math.clz32?Math.clz32:jh,Ch=Math.log,Th=Math.LN2;function jh(e){return e>>>=0,e===0?32:31-(Ch(e)/Th|0)|0}var Do=64,No=4194304;function Br(e){switch(e&-e){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return e&4194240;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return e&130023424;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return e}}function gl(e,t){var n=e.pendingLanes;if(n===0)return 0;var r=0,o=e.suspendedLanes,l=e.pingedLanes,i=n&268435455;if(i!==0){var a=i&~o;a!==0?r=Br(a):(l&=i,l!==0&&(r=Br(l)))}else i=n&~o,i!==0?r=Br(i):l!==0&&(r=Br(l));if(r===0)return 0;if(t!==0&&t!==r&&!(t&o)&&(o=r&-r,l=t&-t,o>=l||o===16&&(l&4194240)!==0))return t;if(r&4&&(r|=n&16),t=e.entangledLanes,t!==0)for(e=e.entanglements,t&=r;0<t;)n=31-mt(t),o=1<<n,r|=e[n],t&=~o;return r}function _h(e,t){switch(e){case 1:case 2:case 4:return t+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return t+5e3;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return-1;case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function Dh(e,t){for(var n=e.suspendedLanes,r=e.pingedLanes,o=e.expirationTimes,l=e.pendingLanes;0<l;){var i=31-mt(l),a=1<<i,s=o[i];s===-1?(!(a&n)||a&r)&&(o[i]=_h(a,t)):s<=t&&(e.expiredLanes|=a),l&=~a}}function sa(e){return e=e.pendingLanes&-1073741825,e!==0?e:e&1073741824?1073741824:0}function bd(){var e=Do;return Do<<=1,!(Do&4194240)&&(Do=64),e}function gi(e){for(var t=[],n=0;31>n;n++)t.push(e);return t}function wo(e,t,n){e.pendingLanes|=t,t!==536870912&&(e.suspendedLanes=0,e.pingedLanes=0),e=e.eventTimes,t=31-mt(t),e[t]=n}function Nh(e,t){var n=e.pendingLanes&~t;e.pendingLanes=t,e.suspendedLanes=0,e.pingedLanes=0,e.expiredLanes&=t,e.mutableReadLanes&=t,e.entangledLanes&=t,t=e.entanglements;var r=e.eventTimes;for(e=e.expirationTimes;0<n;){var o=31-mt(n),l=1<<o;t[o]=0,r[o]=-1,e[o]=-1,n&=~l}}function cs(e,t){var n=e.entangledLanes|=t;for(e=e.entanglements;n;){var r=31-mt(n),o=1<<r;o&t|e[r]&t&&(e[r]|=t),n&=~o}}var te=0;function Sd(e){return e&=-e,1<e?4<e?e&268435455?16:536870912:4:1}var Ed,ds,$d,Ad,Cd,ua=!1,Io=[],en=null,tn=null,nn=null,to=new Map,no=new Map,Xt=[],Ih="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function yu(e,t){switch(e){case"focusin":case"focusout":en=null;break;case"dragenter":case"dragleave":tn=null;break;case"mouseover":case"mouseout":nn=null;break;case"pointerover":case"pointerout":to.delete(t.pointerId);break;case"gotpointercapture":case"lostpointercapture":no.delete(t.pointerId)}}function Dr(e,t,n,r,o,l){return e===null||e.nativeEvent!==l?(e={blockedOn:t,domEventName:n,eventSystemFlags:r,nativeEvent:l,targetContainers:[o]},t!==null&&(t=bo(t),t!==null&&ds(t)),e):(e.eventSystemFlags|=r,t=e.targetContainers,o!==null&&t.indexOf(o)===-1&&t.push(o),e)}function Lh(e,t,n,r,o){switch(t){case"focusin":return en=Dr(en,e,t,n,r,o),!0;case"dragenter":return tn=Dr(tn,e,t,n,r,o),!0;case"mouseover":return nn=Dr(nn,e,t,n,r,o),!0;case"pointerover":var l=o.pointerId;return to.set(l,Dr(to.get(l)||null,e,t,n,r,o)),!0;case"gotpointercapture":return l=o.pointerId,no.set(l,Dr(no.get(l)||null,e,t,n,r,o)),!0}return!1}function Td(e){var t=bn(e.target);if(t!==null){var n=Mn(t);if(n!==null){if(t=n.tag,t===13){if(t=gd(n),t!==null){e.blockedOn=t,Cd(e.priority,function(){$d(n)});return}}else if(t===3&&n.stateNode.current.memoizedState.isDehydrated){e.blockedOn=n.tag===3?n.stateNode.containerInfo:null;return}}}e.blockedOn=null}function Zo(e){if(e.blockedOn!==null)return!1;for(var t=e.targetContainers;0<t.length;){var n=ca(e.domEventName,e.eventSystemFlags,t[0],e.nativeEvent);if(n===null){n=e.nativeEvent;var r=new n.constructor(n.type,n);oa=r,n.target.dispatchEvent(r),oa=null}else return t=bo(n),t!==null&&ds(t),e.blockedOn=n,!1;t.shift()}return!0}function xu(e,t,n){Zo(e)&&n.delete(t)}function zh(){ua=!1,en!==null&&Zo(en)&&(en=null),tn!==null&&Zo(tn)&&(tn=null),nn!==null&&Zo(nn)&&(nn=null),to.forEach(xu),no.forEach(xu)}function Nr(e,t){e.blockedOn===t&&(e.blockedOn=null,ua||(ua=!0,qe.unstable_scheduleCallback(qe.unstable_NormalPriority,zh)))}function ro(e){function t(o){return Nr(o,e)}if(0<Io.length){Nr(Io[0],e);for(var n=1;n<Io.length;n++){var r=Io[n];r.blockedOn===e&&(r.blockedOn=null)}}for(en!==null&&Nr(en,e),tn!==null&&Nr(tn,e),nn!==null&&Nr(nn,e),to.forEach(t),no.forEach(t),n=0;n<Xt.length;n++)r=Xt[n],r.blockedOn===e&&(r.blockedOn=null);for(;0<Xt.length&&(n=Xt[0],n.blockedOn===null);)Td(n),n.blockedOn===null&&Xt.shift()}var ur=Ht.ReactCurrentBatchConfig,vl=!0;function Rh(e,t,n,r){var o=te,l=ur.transition;ur.transition=null;try{te=1,fs(e,t,n,r)}finally{te=o,ur.transition=l}}function Ph(e,t,n,r){var o=te,l=ur.transition;ur.transition=null;try{te=4,fs(e,t,n,r)}finally{te=o,ur.transition=l}}function fs(e,t,n,r){if(vl){var o=ca(e,t,n,r);if(o===null)Ai(e,t,r,yl,n),yu(e,r);else if(Lh(o,e,t,n,r))r.stopPropagation();else if(yu(e,r),t&4&&-1<Ih.indexOf(e)){for(;o!==null;){var l=bo(o);if(l!==null&&Ed(l),l=ca(e,t,n,r),l===null&&Ai(e,t,r,yl,n),l===o)break;o=l}o!==null&&r.stopPropagation()}else Ai(e,t,r,null,n)}}var yl=null;function ca(e,t,n,r){if(yl=null,e=ss(r),e=bn(e),e!==null)if(t=Mn(e),t===null)e=null;else if(n=t.tag,n===13){if(e=gd(t),e!==null)return e;e=null}else if(n===3){if(t.stateNode.current.memoizedState.isDehydrated)return t.tag===3?t.stateNode.containerInfo:null;e=null}else t!==e&&(e=null);return yl=e,null}function jd(e){switch(e){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch(Eh()){case us:return 1;case wd:return 4;case ml:case $h:return 16;case kd:return 536870912;default:return 16}default:return 16}}var Jt=null,ps=null,Jo=null;function _d(){if(Jo)return Jo;var e,t=ps,n=t.length,r,o="value"in Jt?Jt.value:Jt.textContent,l=o.length;for(e=0;e<n&&t[e]===o[e];e++);var i=n-e;for(r=1;r<=i&&t[n-r]===o[l-r];r++);return Jo=o.slice(e,1<r?1-r:void 0)}function qo(e){var t=e.keyCode;return"charCode"in e?(e=e.charCode,e===0&&t===13&&(e=13)):e=t,e===10&&(e=13),32<=e||e===13?e:0}function Lo(){return!0}function wu(){return!1}function tt(e){function t(n,r,o,l,i){this._reactName=n,this._targetInst=o,this.type=r,this.nativeEvent=l,this.target=i,this.currentTarget=null;for(var a in e)e.hasOwnProperty(a)&&(n=e[a],this[a]=n?n(l):l[a]);return this.isDefaultPrevented=(l.defaultPrevented!=null?l.defaultPrevented:l.returnValue===!1)?Lo:wu,this.isPropagationStopped=wu,this}return fe(t.prototype,{preventDefault:function(){this.defaultPrevented=!0;var n=this.nativeEvent;n&&(n.preventDefault?n.preventDefault():typeof n.returnValue!="unknown"&&(n.returnValue=!1),this.isDefaultPrevented=Lo)},stopPropagation:function(){var n=this.nativeEvent;n&&(n.stopPropagation?n.stopPropagation():typeof n.cancelBubble!="unknown"&&(n.cancelBubble=!0),this.isPropagationStopped=Lo)},persist:function(){},isPersistent:Lo}),t}var $r={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(e){return e.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},hs=tt($r),ko=fe({},$r,{view:0,detail:0}),Oh=tt(ko),vi,yi,Ir,Hl=fe({},ko,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:ms,button:0,buttons:0,relatedTarget:function(e){return e.relatedTarget===void 0?e.fromElement===e.srcElement?e.toElement:e.fromElement:e.relatedTarget},movementX:function(e){return"movementX"in e?e.movementX:(e!==Ir&&(Ir&&e.type==="mousemove"?(vi=e.screenX-Ir.screenX,yi=e.screenY-Ir.screenY):yi=vi=0,Ir=e),vi)},movementY:function(e){return"movementY"in e?e.movementY:yi}}),ku=tt(Hl),Bh=fe({},Hl,{dataTransfer:0}),Mh=tt(Bh),Fh=fe({},ko,{relatedTarget:0}),xi=tt(Fh),Hh=fe({},$r,{animationName:0,elapsedTime:0,pseudoElement:0}),Uh=tt(Hh),Qh=fe({},$r,{clipboardData:function(e){return"clipboardData"in e?e.clipboardData:window.clipboardData}}),Vh=tt(Qh),Wh=fe({},$r,{data:0}),bu=tt(Wh),Gh={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},Kh={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},Yh={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function Xh(e){var t=this.nativeEvent;return t.getModifierState?t.getModifierState(e):(e=Yh[e])?!!t[e]:!1}function ms(){return Xh}var Zh=fe({},ko,{key:function(e){if(e.key){var t=Gh[e.key]||e.key;if(t!=="Unidentified")return t}return e.type==="keypress"?(e=qo(e),e===13?"Enter":String.fromCharCode(e)):e.type==="keydown"||e.type==="keyup"?Kh[e.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:ms,charCode:function(e){return e.type==="keypress"?qo(e):0},keyCode:function(e){return e.type==="keydown"||e.type==="keyup"?e.keyCode:0},which:function(e){return e.type==="keypress"?qo(e):e.type==="keydown"||e.type==="keyup"?e.keyCode:0}}),Jh=tt(Zh),qh=fe({},Hl,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),Su=tt(qh),e0=fe({},ko,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:ms}),t0=tt(e0),n0=fe({},$r,{propertyName:0,elapsedTime:0,pseudoElement:0}),r0=tt(n0),o0=fe({},Hl,{deltaX:function(e){return"deltaX"in e?e.deltaX:"wheelDeltaX"in e?-e.wheelDeltaX:0},deltaY:function(e){return"deltaY"in e?e.deltaY:"wheelDeltaY"in e?-e.wheelDeltaY:"wheelDelta"in e?-e.wheelDelta:0},deltaZ:0,deltaMode:0}),l0=tt(o0),i0=[9,13,27,32],gs=Ot&&"CompositionEvent"in window,Qr=null;Ot&&"documentMode"in document&&(Qr=document.documentMode);var a0=Ot&&"TextEvent"in window&&!Qr,Dd=Ot&&(!gs||Qr&&8<Qr&&11>=Qr),Eu=" ",$u=!1;function Nd(e,t){switch(e){case"keyup":return i0.indexOf(t.keyCode)!==-1;case"keydown":return t.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function Id(e){return e=e.detail,typeof e=="object"&&"data"in e?e.data:null}var Kn=!1;function s0(e,t){switch(e){case"compositionend":return Id(t);case"keypress":return t.which!==32?null:($u=!0,Eu);case"textInput":return e=t.data,e===Eu&&$u?null:e;default:return null}}function u0(e,t){if(Kn)return e==="compositionend"||!gs&&Nd(e,t)?(e=_d(),Jo=ps=Jt=null,Kn=!1,e):null;switch(e){case"paste":return null;case"keypress":if(!(t.ctrlKey||t.altKey||t.metaKey)||t.ctrlKey&&t.altKey){if(t.char&&1<t.char.length)return t.char;if(t.which)return String.fromCharCode(t.which)}return null;case"compositionend":return Dd&&t.locale!=="ko"?null:t.data;default:return null}}var c0={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function Au(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t==="input"?!!c0[e.type]:t==="textarea"}function Ld(e,t,n,r){dd(r),t=xl(t,"onChange"),0<t.length&&(n=new hs("onChange","change",null,n,r),e.push({event:n,listeners:t}))}var Vr=null,oo=null;function d0(e){Vd(e,0)}function Ul(e){var t=Zn(e);if(od(t))return e}function f0(e,t){if(e==="change")return t}var zd=!1;if(Ot){var wi;if(Ot){var ki="oninput"in document;if(!ki){var Cu=document.createElement("div");Cu.setAttribute("oninput","return;"),ki=typeof Cu.oninput=="function"}wi=ki}else wi=!1;zd=wi&&(!document.documentMode||9<document.documentMode)}function Tu(){Vr&&(Vr.detachEvent("onpropertychange",Rd),oo=Vr=null)}function Rd(e){if(e.propertyName==="value"&&Ul(oo)){var t=[];Ld(t,oo,e,ss(e)),md(d0,t)}}function p0(e,t,n){e==="focusin"?(Tu(),Vr=t,oo=n,Vr.attachEvent("onpropertychange",Rd)):e==="focusout"&&Tu()}function h0(e){if(e==="selectionchange"||e==="keyup"||e==="keydown")return Ul(oo)}function m0(e,t){if(e==="click")return Ul(t)}function g0(e,t){if(e==="input"||e==="change")return Ul(t)}function v0(e,t){return e===t&&(e!==0||1/e===1/t)||e!==e&&t!==t}var yt=typeof Object.is=="function"?Object.is:v0;function lo(e,t){if(yt(e,t))return!0;if(typeof e!="object"||e===null||typeof t!="object"||t===null)return!1;var n=Object.keys(e),r=Object.keys(t);if(n.length!==r.length)return!1;for(r=0;r<n.length;r++){var o=n[r];if(!Wi.call(t,o)||!yt(e[o],t[o]))return!1}return!0}function ju(e){for(;e&&e.firstChild;)e=e.firstChild;return e}function _u(e,t){var n=ju(e);e=0;for(var r;n;){if(n.nodeType===3){if(r=e+n.textContent.length,e<=t&&r>=t)return{node:n,offset:t-e};e=r}e:{for(;n;){if(n.nextSibling){n=n.nextSibling;break e}n=n.parentNode}n=void 0}n=ju(n)}}function Pd(e,t){return e&&t?e===t?!0:e&&e.nodeType===3?!1:t&&t.nodeType===3?Pd(e,t.parentNode):"contains"in e?e.contains(t):e.compareDocumentPosition?!!(e.compareDocumentPosition(t)&16):!1:!1}function Od(){for(var e=window,t=fl();t instanceof e.HTMLIFrameElement;){try{var n=typeof t.contentWindow.location.href=="string"}catch{n=!1}if(n)e=t.contentWindow;else break;t=fl(e.document)}return t}function vs(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t&&(t==="input"&&(e.type==="text"||e.type==="search"||e.type==="tel"||e.type==="url"||e.type==="password")||t==="textarea"||e.contentEditable==="true")}function y0(e){var t=Od(),n=e.focusedElem,r=e.selectionRange;if(t!==n&&n&&n.ownerDocument&&Pd(n.ownerDocument.documentElement,n)){if(r!==null&&vs(n)){if(t=r.start,e=r.end,e===void 0&&(e=t),"selectionStart"in n)n.selectionStart=t,n.selectionEnd=Math.min(e,n.value.length);else if(e=(t=n.ownerDocument||document)&&t.defaultView||window,e.getSelection){e=e.getSelection();var o=n.textContent.length,l=Math.min(r.start,o);r=r.end===void 0?l:Math.min(r.end,o),!e.extend&&l>r&&(o=r,r=l,l=o),o=_u(n,l);var i=_u(n,r);o&&i&&(e.rangeCount!==1||e.anchorNode!==o.node||e.anchorOffset!==o.offset||e.focusNode!==i.node||e.focusOffset!==i.offset)&&(t=t.createRange(),t.setStart(o.node,o.offset),e.removeAllRanges(),l>r?(e.addRange(t),e.extend(i.node,i.offset)):(t.setEnd(i.node,i.offset),e.addRange(t)))}}for(t=[],e=n;e=e.parentNode;)e.nodeType===1&&t.push({element:e,left:e.scrollLeft,top:e.scrollTop});for(typeof n.focus=="function"&&n.focus(),n=0;n<t.length;n++)e=t[n],e.element.scrollLeft=e.left,e.element.scrollTop=e.top}}var x0=Ot&&"documentMode"in document&&11>=document.documentMode,Yn=null,da=null,Wr=null,fa=!1;function Du(e,t,n){var r=n.window===n?n.document:n.nodeType===9?n:n.ownerDocument;fa||Yn==null||Yn!==fl(r)||(r=Yn,"selectionStart"in r&&vs(r)?r={start:r.selectionStart,end:r.selectionEnd}:(r=(r.ownerDocument&&r.ownerDocument.defaultView||window).getSelection(),r={anchorNode:r.anchorNode,anchorOffset:r.anchorOffset,focusNode:r.focusNode,focusOffset:r.focusOffset}),Wr&&lo(Wr,r)||(Wr=r,r=xl(da,"onSelect"),0<r.length&&(t=new hs("onSelect","select",null,t,n),e.push({event:t,listeners:r}),t.target=Yn)))}function zo(e,t){var n={};return n[e.toLowerCase()]=t.toLowerCase(),n["Webkit"+e]="webkit"+t,n["Moz"+e]="moz"+t,n}var Xn={animationend:zo("Animation","AnimationEnd"),animationiteration:zo("Animation","AnimationIteration"),animationstart:zo("Animation","AnimationStart"),transitionend:zo("Transition","TransitionEnd")},bi={},Bd={};Ot&&(Bd=document.createElement("div").style,"AnimationEvent"in window||(delete Xn.animationend.animation,delete Xn.animationiteration.animation,delete Xn.animationstart.animation),"TransitionEvent"in window||delete Xn.transitionend.transition);function Ql(e){if(bi[e])return bi[e];if(!Xn[e])return e;var t=Xn[e],n;for(n in t)if(t.hasOwnProperty(n)&&n in Bd)return bi[e]=t[n];return e}var Md=Ql("animationend"),Fd=Ql("animationiteration"),Hd=Ql("animationstart"),Ud=Ql("transitionend"),Qd=new Map,Nu="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function hn(e,t){Qd.set(e,t),Bn(t,[e])}for(var Si=0;Si<Nu.length;Si++){var Ei=Nu[Si],w0=Ei.toLowerCase(),k0=Ei[0].toUpperCase()+Ei.slice(1);hn(w0,"on"+k0)}hn(Md,"onAnimationEnd");hn(Fd,"onAnimationIteration");hn(Hd,"onAnimationStart");hn("dblclick","onDoubleClick");hn("focusin","onFocus");hn("focusout","onBlur");hn(Ud,"onTransitionEnd");fr("onMouseEnter",["mouseout","mouseover"]);fr("onMouseLeave",["mouseout","mouseover"]);fr("onPointerEnter",["pointerout","pointerover"]);fr("onPointerLeave",["pointerout","pointerover"]);Bn("onChange","change click focusin focusout input keydown keyup selectionchange".split(" "));Bn("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" "));Bn("onBeforeInput",["compositionend","keypress","textInput","paste"]);Bn("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" "));Bn("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" "));Bn("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var Mr="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),b0=new Set("cancel close invalid load scroll toggle".split(" ").concat(Mr));function Iu(e,t,n){var r=e.type||"unknown-event";e.currentTarget=n,wh(r,t,void 0,e),e.currentTarget=null}function Vd(e,t){t=(t&4)!==0;for(var n=0;n<e.length;n++){var r=e[n],o=r.event;r=r.listeners;e:{var l=void 0;if(t)for(var i=r.length-1;0<=i;i--){var a=r[i],s=a.instance,c=a.currentTarget;if(a=a.listener,s!==l&&o.isPropagationStopped())break e;Iu(o,a,c),l=s}else for(i=0;i<r.length;i++){if(a=r[i],s=a.instance,c=a.currentTarget,a=a.listener,s!==l&&o.isPropagationStopped())break e;Iu(o,a,c),l=s}}}if(hl)throw e=aa,hl=!1,aa=null,e}function re(e,t){var n=t[va];n===void 0&&(n=t[va]=new Set);var r=e+"__bubble";n.has(r)||(Wd(t,e,2,!1),n.add(r))}function $i(e,t,n){var r=0;t&&(r|=4),Wd(n,e,r,t)}var Ro="_reactListening"+Math.random().toString(36).slice(2);function io(e){if(!e[Ro]){e[Ro]=!0,qc.forEach(function(n){n!=="selectionchange"&&(b0.has(n)||$i(n,!1,e),$i(n,!0,e))});var t=e.nodeType===9?e:e.ownerDocument;t===null||t[Ro]||(t[Ro]=!0,$i("selectionchange",!1,t))}}function Wd(e,t,n,r){switch(jd(t)){case 1:var o=Rh;break;case 4:o=Ph;break;default:o=fs}n=o.bind(null,t,n,e),o=void 0,!ia||t!=="touchstart"&&t!=="touchmove"&&t!=="wheel"||(o=!0),r?o!==void 0?e.addEventListener(t,n,{capture:!0,passive:o}):e.addEventListener(t,n,!0):o!==void 0?e.addEventListener(t,n,{passive:o}):e.addEventListener(t,n,!1)}function Ai(e,t,n,r,o){var l=r;if(!(t&1)&&!(t&2)&&r!==null)e:for(;;){if(r===null)return;var i=r.tag;if(i===3||i===4){var a=r.stateNode.containerInfo;if(a===o||a.nodeType===8&&a.parentNode===o)break;if(i===4)for(i=r.return;i!==null;){var s=i.tag;if((s===3||s===4)&&(s=i.stateNode.containerInfo,s===o||s.nodeType===8&&s.parentNode===o))return;i=i.return}for(;a!==null;){if(i=bn(a),i===null)return;if(s=i.tag,s===5||s===6){r=l=i;continue e}a=a.parentNode}}r=r.return}md(function(){var c=l,g=ss(n),h=[];e:{var m=Qd.get(e);if(m!==void 0){var x=hs,k=e;switch(e){case"keypress":if(qo(n)===0)break e;case"keydown":case"keyup":x=Jh;break;case"focusin":k="focus",x=xi;break;case"focusout":k="blur",x=xi;break;case"beforeblur":case"afterblur":x=xi;break;case"click":if(n.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":x=ku;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":x=Mh;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":x=t0;break;case Md:case Fd:case Hd:x=Uh;break;case Ud:x=r0;break;case"scroll":x=Oh;break;case"wheel":x=l0;break;case"copy":case"cut":case"paste":x=Vh;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":x=Su}var b=(t&4)!==0,_=!b&&e==="scroll",f=b?m!==null?m+"Capture":null:m;b=[];for(var d=c,p;d!==null;){p=d;var v=p.stateNode;if(p.tag===5&&v!==null&&(p=v,f!==null&&(v=eo(d,f),v!=null&&b.push(ao(d,v,p)))),_)break;d=d.return}0<b.length&&(m=new x(m,k,null,n,g),h.push({event:m,listeners:b}))}}if(!(t&7)){e:{if(m=e==="mouseover"||e==="pointerover",x=e==="mouseout"||e==="pointerout",m&&n!==oa&&(k=n.relatedTarget||n.fromElement)&&(bn(k)||k[Bt]))break e;if((x||m)&&(m=g.window===g?g:(m=g.ownerDocument)?m.defaultView||m.parentWindow:window,x?(k=n.relatedTarget||n.toElement,x=c,k=k?bn(k):null,k!==null&&(_=Mn(k),k!==_||k.tag!==5&&k.tag!==6)&&(k=null)):(x=null,k=c),x!==k)){if(b=ku,v="onMouseLeave",f="onMouseEnter",d="mouse",(e==="pointerout"||e==="pointerover")&&(b=Su,v="onPointerLeave",f="onPointerEnter",d="pointer"),_=x==null?m:Zn(x),p=k==null?m:Zn(k),m=new b(v,d+"leave",x,n,g),m.target=_,m.relatedTarget=p,v=null,bn(g)===c&&(b=new b(f,d+"enter",k,n,g),b.target=p,b.relatedTarget=_,v=b),_=v,x&&k)t:{for(b=x,f=k,d=0,p=b;p;p=Hn(p))d++;for(p=0,v=f;v;v=Hn(v))p++;for(;0<d-p;)b=Hn(b),d--;for(;0<p-d;)f=Hn(f),p--;for(;d--;){if(b===f||f!==null&&b===f.alternate)break t;b=Hn(b),f=Hn(f)}b=null}else b=null;x!==null&&Lu(h,m,x,b,!1),k!==null&&_!==null&&Lu(h,_,k,b,!0)}}e:{if(m=c?Zn(c):window,x=m.nodeName&&m.nodeName.toLowerCase(),x==="select"||x==="input"&&m.type==="file")var E=f0;else if(Au(m))if(zd)E=g0;else{E=h0;var S=p0}else(x=m.nodeName)&&x.toLowerCase()==="input"&&(m.type==="checkbox"||m.type==="radio")&&(E=m0);if(E&&(E=E(e,c))){Ld(h,E,n,g);break e}S&&S(e,m,c),e==="focusout"&&(S=m._wrapperState)&&S.controlled&&m.type==="number"&&qi(m,"number",m.value)}switch(S=c?Zn(c):window,e){case"focusin":(Au(S)||S.contentEditable==="true")&&(Yn=S,da=c,Wr=null);break;case"focusout":Wr=da=Yn=null;break;case"mousedown":fa=!0;break;case"contextmenu":case"mouseup":case"dragend":fa=!1,Du(h,n,g);break;case"selectionchange":if(x0)break;case"keydown":case"keyup":Du(h,n,g)}var $;if(gs)e:{switch(e){case"compositionstart":var D="onCompositionStart";break e;case"compositionend":D="onCompositionEnd";break e;case"compositionupdate":D="onCompositionUpdate";break e}D=void 0}else Kn?Nd(e,n)&&(D="onCompositionEnd"):e==="keydown"&&n.keyCode===229&&(D="onCompositionStart");D&&(Dd&&n.locale!=="ko"&&(Kn||D!=="onCompositionStart"?D==="onCompositionEnd"&&Kn&&($=_d()):(Jt=g,ps="value"in Jt?Jt.value:Jt.textContent,Kn=!0)),S=xl(c,D),0<S.length&&(D=new bu(D,e,null,n,g),h.push({event:D,listeners:S}),$?D.data=$:($=Id(n),$!==null&&(D.data=$)))),($=a0?s0(e,n):u0(e,n))&&(c=xl(c,"onBeforeInput"),0<c.length&&(g=new bu("onBeforeInput","beforeinput",null,n,g),h.push({event:g,listeners:c}),g.data=$))}Vd(h,t)})}function ao(e,t,n){return{instance:e,listener:t,currentTarget:n}}function xl(e,t){for(var n=t+"Capture",r=[];e!==null;){var o=e,l=o.stateNode;o.tag===5&&l!==null&&(o=l,l=eo(e,n),l!=null&&r.unshift(ao(e,l,o)),l=eo(e,t),l!=null&&r.push(ao(e,l,o))),e=e.return}return r}function Hn(e){if(e===null)return null;do e=e.return;while(e&&e.tag!==5);return e||null}function Lu(e,t,n,r,o){for(var l=t._reactName,i=[];n!==null&&n!==r;){var a=n,s=a.alternate,c=a.stateNode;if(s!==null&&s===r)break;a.tag===5&&c!==null&&(a=c,o?(s=eo(n,l),s!=null&&i.unshift(ao(n,s,a))):o||(s=eo(n,l),s!=null&&i.push(ao(n,s,a)))),n=n.return}i.length!==0&&e.push({event:t,listeners:i})}var S0=/\r\n?/g,E0=/\u0000|\uFFFD/g;function zu(e){return(typeof e=="string"?e:""+e).replace(S0,`
`).replace(E0,"")}function Po(e,t,n){if(t=zu(t),zu(e)!==t&&n)throw Error(T(425))}function wl(){}var pa=null,ha=null;function ma(e,t){return e==="textarea"||e==="noscript"||typeof t.children=="string"||typeof t.children=="number"||typeof t.dangerouslySetInnerHTML=="object"&&t.dangerouslySetInnerHTML!==null&&t.dangerouslySetInnerHTML.__html!=null}var ga=typeof setTimeout=="function"?setTimeout:void 0,$0=typeof clearTimeout=="function"?clearTimeout:void 0,Ru=typeof Promise=="function"?Promise:void 0,A0=typeof queueMicrotask=="function"?queueMicrotask:typeof Ru<"u"?function(e){return Ru.resolve(null).then(e).catch(C0)}:ga;function C0(e){setTimeout(function(){throw e})}function Ci(e,t){var n=t,r=0;do{var o=n.nextSibling;if(e.removeChild(n),o&&o.nodeType===8)if(n=o.data,n==="/$"){if(r===0){e.removeChild(o),ro(t);return}r--}else n!=="$"&&n!=="$?"&&n!=="$!"||r++;n=o}while(n);ro(t)}function rn(e){for(;e!=null;e=e.nextSibling){var t=e.nodeType;if(t===1||t===3)break;if(t===8){if(t=e.data,t==="$"||t==="$!"||t==="$?")break;if(t==="/$")return null}}return e}function Pu(e){e=e.previousSibling;for(var t=0;e;){if(e.nodeType===8){var n=e.data;if(n==="$"||n==="$!"||n==="$?"){if(t===0)return e;t--}else n==="/$"&&t++}e=e.previousSibling}return null}var Ar=Math.random().toString(36).slice(2),$t="__reactFiber$"+Ar,so="__reactProps$"+Ar,Bt="__reactContainer$"+Ar,va="__reactEvents$"+Ar,T0="__reactListeners$"+Ar,j0="__reactHandles$"+Ar;function bn(e){var t=e[$t];if(t)return t;for(var n=e.parentNode;n;){if(t=n[Bt]||n[$t]){if(n=t.alternate,t.child!==null||n!==null&&n.child!==null)for(e=Pu(e);e!==null;){if(n=e[$t])return n;e=Pu(e)}return t}e=n,n=e.parentNode}return null}function bo(e){return e=e[$t]||e[Bt],!e||e.tag!==5&&e.tag!==6&&e.tag!==13&&e.tag!==3?null:e}function Zn(e){if(e.tag===5||e.tag===6)return e.stateNode;throw Error(T(33))}function Vl(e){return e[so]||null}var ya=[],Jn=-1;function mn(e){return{current:e}}function le(e){0>Jn||(e.current=ya[Jn],ya[Jn]=null,Jn--)}function ne(e,t){Jn++,ya[Jn]=e.current,e.current=t}var dn={},Be=mn(dn),We=mn(!1),_n=dn;function pr(e,t){var n=e.type.contextTypes;if(!n)return dn;var r=e.stateNode;if(r&&r.__reactInternalMemoizedUnmaskedChildContext===t)return r.__reactInternalMemoizedMaskedChildContext;var o={},l;for(l in n)o[l]=t[l];return r&&(e=e.stateNode,e.__reactInternalMemoizedUnmaskedChildContext=t,e.__reactInternalMemoizedMaskedChildContext=o),o}function Ge(e){return e=e.childContextTypes,e!=null}function kl(){le(We),le(Be)}function Ou(e,t,n){if(Be.current!==dn)throw Error(T(168));ne(Be,t),ne(We,n)}function Gd(e,t,n){var r=e.stateNode;if(t=t.childContextTypes,typeof r.getChildContext!="function")return n;r=r.getChildContext();for(var o in r)if(!(o in t))throw Error(T(108,ph(e)||"Unknown",o));return fe({},n,r)}function bl(e){return e=(e=e.stateNode)&&e.__reactInternalMemoizedMergedChildContext||dn,_n=Be.current,ne(Be,e),ne(We,We.current),!0}function Bu(e,t,n){var r=e.stateNode;if(!r)throw Error(T(169));n?(e=Gd(e,t,_n),r.__reactInternalMemoizedMergedChildContext=e,le(We),le(Be),ne(Be,e)):le(We),ne(We,n)}var Lt=null,Wl=!1,Ti=!1;function Kd(e){Lt===null?Lt=[e]:Lt.push(e)}function _0(e){Wl=!0,Kd(e)}function gn(){if(!Ti&&Lt!==null){Ti=!0;var e=0,t=te;try{var n=Lt;for(te=1;e<n.length;e++){var r=n[e];do r=r(!0);while(r!==null)}Lt=null,Wl=!1}catch(o){throw Lt!==null&&(Lt=Lt.slice(e+1)),xd(us,gn),o}finally{te=t,Ti=!1}}return null}var qn=[],er=0,Sl=null,El=0,ot=[],lt=0,Dn=null,zt=1,Rt="";function wn(e,t){qn[er++]=El,qn[er++]=Sl,Sl=e,El=t}function Yd(e,t,n){ot[lt++]=zt,ot[lt++]=Rt,ot[lt++]=Dn,Dn=e;var r=zt;e=Rt;var o=32-mt(r)-1;r&=~(1<<o),n+=1;var l=32-mt(t)+o;if(30<l){var i=o-o%5;l=(r&(1<<i)-1).toString(32),r>>=i,o-=i,zt=1<<32-mt(t)+o|n<<o|r,Rt=l+e}else zt=1<<l|n<<o|r,Rt=e}function ys(e){e.return!==null&&(wn(e,1),Yd(e,1,0))}function xs(e){for(;e===Sl;)Sl=qn[--er],qn[er]=null,El=qn[--er],qn[er]=null;for(;e===Dn;)Dn=ot[--lt],ot[lt]=null,Rt=ot[--lt],ot[lt]=null,zt=ot[--lt],ot[lt]=null}var Je=null,Ze=null,ae=!1,ht=null;function Xd(e,t){var n=it(5,null,null,0);n.elementType="DELETED",n.stateNode=t,n.return=e,t=e.deletions,t===null?(e.deletions=[n],e.flags|=16):t.push(n)}function Mu(e,t){switch(e.tag){case 5:var n=e.type;return t=t.nodeType!==1||n.toLowerCase()!==t.nodeName.toLowerCase()?null:t,t!==null?(e.stateNode=t,Je=e,Ze=rn(t.firstChild),!0):!1;case 6:return t=e.pendingProps===""||t.nodeType!==3?null:t,t!==null?(e.stateNode=t,Je=e,Ze=null,!0):!1;case 13:return t=t.nodeType!==8?null:t,t!==null?(n=Dn!==null?{id:zt,overflow:Rt}:null,e.memoizedState={dehydrated:t,treeContext:n,retryLane:1073741824},n=it(18,null,null,0),n.stateNode=t,n.return=e,e.child=n,Je=e,Ze=null,!0):!1;default:return!1}}function xa(e){return(e.mode&1)!==0&&(e.flags&128)===0}function wa(e){if(ae){var t=Ze;if(t){var n=t;if(!Mu(e,t)){if(xa(e))throw Error(T(418));t=rn(n.nextSibling);var r=Je;t&&Mu(e,t)?Xd(r,n):(e.flags=e.flags&-4097|2,ae=!1,Je=e)}}else{if(xa(e))throw Error(T(418));e.flags=e.flags&-4097|2,ae=!1,Je=e}}}function Fu(e){for(e=e.return;e!==null&&e.tag!==5&&e.tag!==3&&e.tag!==13;)e=e.return;Je=e}function Oo(e){if(e!==Je)return!1;if(!ae)return Fu(e),ae=!0,!1;var t;if((t=e.tag!==3)&&!(t=e.tag!==5)&&(t=e.type,t=t!=="head"&&t!=="body"&&!ma(e.type,e.memoizedProps)),t&&(t=Ze)){if(xa(e))throw Zd(),Error(T(418));for(;t;)Xd(e,t),t=rn(t.nextSibling)}if(Fu(e),e.tag===13){if(e=e.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(T(317));e:{for(e=e.nextSibling,t=0;e;){if(e.nodeType===8){var n=e.data;if(n==="/$"){if(t===0){Ze=rn(e.nextSibling);break e}t--}else n!=="$"&&n!=="$!"&&n!=="$?"||t++}e=e.nextSibling}Ze=null}}else Ze=Je?rn(e.stateNode.nextSibling):null;return!0}function Zd(){for(var e=Ze;e;)e=rn(e.nextSibling)}function hr(){Ze=Je=null,ae=!1}function ws(e){ht===null?ht=[e]:ht.push(e)}var D0=Ht.ReactCurrentBatchConfig;function ft(e,t){if(e&&e.defaultProps){t=fe({},t),e=e.defaultProps;for(var n in e)t[n]===void 0&&(t[n]=e[n]);return t}return t}var $l=mn(null),Al=null,tr=null,ks=null;function bs(){ks=tr=Al=null}function Ss(e){var t=$l.current;le($l),e._currentValue=t}function ka(e,t,n){for(;e!==null;){var r=e.alternate;if((e.childLanes&t)!==t?(e.childLanes|=t,r!==null&&(r.childLanes|=t)):r!==null&&(r.childLanes&t)!==t&&(r.childLanes|=t),e===n)break;e=e.return}}function cr(e,t){Al=e,ks=tr=null,e=e.dependencies,e!==null&&e.firstContext!==null&&(e.lanes&t&&(Ve=!0),e.firstContext=null)}function st(e){var t=e._currentValue;if(ks!==e)if(e={context:e,memoizedValue:t,next:null},tr===null){if(Al===null)throw Error(T(308));tr=e,Al.dependencies={lanes:0,firstContext:e}}else tr=tr.next=e;return t}var Sn=null;function Es(e){Sn===null?Sn=[e]:Sn.push(e)}function Jd(e,t,n,r){var o=t.interleaved;return o===null?(n.next=n,Es(t)):(n.next=o.next,o.next=n),t.interleaved=n,Mt(e,r)}function Mt(e,t){e.lanes|=t;var n=e.alternate;for(n!==null&&(n.lanes|=t),n=e,e=e.return;e!==null;)e.childLanes|=t,n=e.alternate,n!==null&&(n.childLanes|=t),n=e,e=e.return;return n.tag===3?n.stateNode:null}var Yt=!1;function $s(e){e.updateQueue={baseState:e.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function qd(e,t){e=e.updateQueue,t.updateQueue===e&&(t.updateQueue={baseState:e.baseState,firstBaseUpdate:e.firstBaseUpdate,lastBaseUpdate:e.lastBaseUpdate,shared:e.shared,effects:e.effects})}function Pt(e,t){return{eventTime:e,lane:t,tag:0,payload:null,callback:null,next:null}}function on(e,t,n){var r=e.updateQueue;if(r===null)return null;if(r=r.shared,X&2){var o=r.pending;return o===null?t.next=t:(t.next=o.next,o.next=t),r.pending=t,Mt(e,n)}return o=r.interleaved,o===null?(t.next=t,Es(r)):(t.next=o.next,o.next=t),r.interleaved=t,Mt(e,n)}function el(e,t,n){if(t=t.updateQueue,t!==null&&(t=t.shared,(n&4194240)!==0)){var r=t.lanes;r&=e.pendingLanes,n|=r,t.lanes=n,cs(e,n)}}function Hu(e,t){var n=e.updateQueue,r=e.alternate;if(r!==null&&(r=r.updateQueue,n===r)){var o=null,l=null;if(n=n.firstBaseUpdate,n!==null){do{var i={eventTime:n.eventTime,lane:n.lane,tag:n.tag,payload:n.payload,callback:n.callback,next:null};l===null?o=l=i:l=l.next=i,n=n.next}while(n!==null);l===null?o=l=t:l=l.next=t}else o=l=t;n={baseState:r.baseState,firstBaseUpdate:o,lastBaseUpdate:l,shared:r.shared,effects:r.effects},e.updateQueue=n;return}e=n.lastBaseUpdate,e===null?n.firstBaseUpdate=t:e.next=t,n.lastBaseUpdate=t}function Cl(e,t,n,r){var o=e.updateQueue;Yt=!1;var l=o.firstBaseUpdate,i=o.lastBaseUpdate,a=o.shared.pending;if(a!==null){o.shared.pending=null;var s=a,c=s.next;s.next=null,i===null?l=c:i.next=c,i=s;var g=e.alternate;g!==null&&(g=g.updateQueue,a=g.lastBaseUpdate,a!==i&&(a===null?g.firstBaseUpdate=c:a.next=c,g.lastBaseUpdate=s))}if(l!==null){var h=o.baseState;i=0,g=c=s=null,a=l;do{var m=a.lane,x=a.eventTime;if((r&m)===m){g!==null&&(g=g.next={eventTime:x,lane:0,tag:a.tag,payload:a.payload,callback:a.callback,next:null});e:{var k=e,b=a;switch(m=t,x=n,b.tag){case 1:if(k=b.payload,typeof k=="function"){h=k.call(x,h,m);break e}h=k;break e;case 3:k.flags=k.flags&-65537|128;case 0:if(k=b.payload,m=typeof k=="function"?k.call(x,h,m):k,m==null)break e;h=fe({},h,m);break e;case 2:Yt=!0}}a.callback!==null&&a.lane!==0&&(e.flags|=64,m=o.effects,m===null?o.effects=[a]:m.push(a))}else x={eventTime:x,lane:m,tag:a.tag,payload:a.payload,callback:a.callback,next:null},g===null?(c=g=x,s=h):g=g.next=x,i|=m;if(a=a.next,a===null){if(a=o.shared.pending,a===null)break;m=a,a=m.next,m.next=null,o.lastBaseUpdate=m,o.shared.pending=null}}while(!0);if(g===null&&(s=h),o.baseState=s,o.firstBaseUpdate=c,o.lastBaseUpdate=g,t=o.shared.interleaved,t!==null){o=t;do i|=o.lane,o=o.next;while(o!==t)}else l===null&&(o.shared.lanes=0);In|=i,e.lanes=i,e.memoizedState=h}}function Uu(e,t,n){if(e=t.effects,t.effects=null,e!==null)for(t=0;t<e.length;t++){var r=e[t],o=r.callback;if(o!==null){if(r.callback=null,r=n,typeof o!="function")throw Error(T(191,o));o.call(r)}}}var ef=new Jc.Component().refs;function ba(e,t,n,r){t=e.memoizedState,n=n(r,t),n=n==null?t:fe({},t,n),e.memoizedState=n,e.lanes===0&&(e.updateQueue.baseState=n)}var Gl={isMounted:function(e){return(e=e._reactInternals)?Mn(e)===e:!1},enqueueSetState:function(e,t,n){e=e._reactInternals;var r=Fe(),o=an(e),l=Pt(r,o);l.payload=t,n!=null&&(l.callback=n),t=on(e,l,o),t!==null&&(gt(t,e,o,r),el(t,e,o))},enqueueReplaceState:function(e,t,n){e=e._reactInternals;var r=Fe(),o=an(e),l=Pt(r,o);l.tag=1,l.payload=t,n!=null&&(l.callback=n),t=on(e,l,o),t!==null&&(gt(t,e,o,r),el(t,e,o))},enqueueForceUpdate:function(e,t){e=e._reactInternals;var n=Fe(),r=an(e),o=Pt(n,r);o.tag=2,t!=null&&(o.callback=t),t=on(e,o,r),t!==null&&(gt(t,e,r,n),el(t,e,r))}};function Qu(e,t,n,r,o,l,i){return e=e.stateNode,typeof e.shouldComponentUpdate=="function"?e.shouldComponentUpdate(r,l,i):t.prototype&&t.prototype.isPureReactComponent?!lo(n,r)||!lo(o,l):!0}function tf(e,t,n){var r=!1,o=dn,l=t.contextType;return typeof l=="object"&&l!==null?l=st(l):(o=Ge(t)?_n:Be.current,r=t.contextTypes,l=(r=r!=null)?pr(e,o):dn),t=new t(n,l),e.memoizedState=t.state!==null&&t.state!==void 0?t.state:null,t.updater=Gl,e.stateNode=t,t._reactInternals=e,r&&(e=e.stateNode,e.__reactInternalMemoizedUnmaskedChildContext=o,e.__reactInternalMemoizedMaskedChildContext=l),t}function Vu(e,t,n,r){e=t.state,typeof t.componentWillReceiveProps=="function"&&t.componentWillReceiveProps(n,r),typeof t.UNSAFE_componentWillReceiveProps=="function"&&t.UNSAFE_componentWillReceiveProps(n,r),t.state!==e&&Gl.enqueueReplaceState(t,t.state,null)}function Sa(e,t,n,r){var o=e.stateNode;o.props=n,o.state=e.memoizedState,o.refs=ef,$s(e);var l=t.contextType;typeof l=="object"&&l!==null?o.context=st(l):(l=Ge(t)?_n:Be.current,o.context=pr(e,l)),o.state=e.memoizedState,l=t.getDerivedStateFromProps,typeof l=="function"&&(ba(e,t,l,n),o.state=e.memoizedState),typeof t.getDerivedStateFromProps=="function"||typeof o.getSnapshotBeforeUpdate=="function"||typeof o.UNSAFE_componentWillMount!="function"&&typeof o.componentWillMount!="function"||(t=o.state,typeof o.componentWillMount=="function"&&o.componentWillMount(),typeof o.UNSAFE_componentWillMount=="function"&&o.UNSAFE_componentWillMount(),t!==o.state&&Gl.enqueueReplaceState(o,o.state,null),Cl(e,n,o,r),o.state=e.memoizedState),typeof o.componentDidMount=="function"&&(e.flags|=4194308)}function Lr(e,t,n){if(e=n.ref,e!==null&&typeof e!="function"&&typeof e!="object"){if(n._owner){if(n=n._owner,n){if(n.tag!==1)throw Error(T(309));var r=n.stateNode}if(!r)throw Error(T(147,e));var o=r,l=""+e;return t!==null&&t.ref!==null&&typeof t.ref=="function"&&t.ref._stringRef===l?t.ref:(t=function(i){var a=o.refs;a===ef&&(a=o.refs={}),i===null?delete a[l]:a[l]=i},t._stringRef=l,t)}if(typeof e!="string")throw Error(T(284));if(!n._owner)throw Error(T(290,e))}return e}function Bo(e,t){throw e=Object.prototype.toString.call(t),Error(T(31,e==="[object Object]"?"object with keys {"+Object.keys(t).join(", ")+"}":e))}function Wu(e){var t=e._init;return t(e._payload)}function nf(e){function t(f,d){if(e){var p=f.deletions;p===null?(f.deletions=[d],f.flags|=16):p.push(d)}}function n(f,d){if(!e)return null;for(;d!==null;)t(f,d),d=d.sibling;return null}function r(f,d){for(f=new Map;d!==null;)d.key!==null?f.set(d.key,d):f.set(d.index,d),d=d.sibling;return f}function o(f,d){return f=sn(f,d),f.index=0,f.sibling=null,f}function l(f,d,p){return f.index=p,e?(p=f.alternate,p!==null?(p=p.index,p<d?(f.flags|=2,d):p):(f.flags|=2,d)):(f.flags|=1048576,d)}function i(f){return e&&f.alternate===null&&(f.flags|=2),f}function a(f,d,p,v){return d===null||d.tag!==6?(d=zi(p,f.mode,v),d.return=f,d):(d=o(d,p),d.return=f,d)}function s(f,d,p,v){var E=p.type;return E===Gn?g(f,d,p.props.children,v,p.key):d!==null&&(d.elementType===E||typeof E=="object"&&E!==null&&E.$$typeof===Kt&&Wu(E)===d.type)?(v=o(d,p.props),v.ref=Lr(f,d,p),v.return=f,v):(v=il(p.type,p.key,p.props,null,f.mode,v),v.ref=Lr(f,d,p),v.return=f,v)}function c(f,d,p,v){return d===null||d.tag!==4||d.stateNode.containerInfo!==p.containerInfo||d.stateNode.implementation!==p.implementation?(d=Ri(p,f.mode,v),d.return=f,d):(d=o(d,p.children||[]),d.return=f,d)}function g(f,d,p,v,E){return d===null||d.tag!==7?(d=Tn(p,f.mode,v,E),d.return=f,d):(d=o(d,p),d.return=f,d)}function h(f,d,p){if(typeof d=="string"&&d!==""||typeof d=="number")return d=zi(""+d,f.mode,p),d.return=f,d;if(typeof d=="object"&&d!==null){switch(d.$$typeof){case To:return p=il(d.type,d.key,d.props,null,f.mode,p),p.ref=Lr(f,null,d),p.return=f,p;case Wn:return d=Ri(d,f.mode,p),d.return=f,d;case Kt:var v=d._init;return h(f,v(d._payload),p)}if(Or(d)||jr(d))return d=Tn(d,f.mode,p,null),d.return=f,d;Bo(f,d)}return null}function m(f,d,p,v){var E=d!==null?d.key:null;if(typeof p=="string"&&p!==""||typeof p=="number")return E!==null?null:a(f,d,""+p,v);if(typeof p=="object"&&p!==null){switch(p.$$typeof){case To:return p.key===E?s(f,d,p,v):null;case Wn:return p.key===E?c(f,d,p,v):null;case Kt:return E=p._init,m(f,d,E(p._payload),v)}if(Or(p)||jr(p))return E!==null?null:g(f,d,p,v,null);Bo(f,p)}return null}function x(f,d,p,v,E){if(typeof v=="string"&&v!==""||typeof v=="number")return f=f.get(p)||null,a(d,f,""+v,E);if(typeof v=="object"&&v!==null){switch(v.$$typeof){case To:return f=f.get(v.key===null?p:v.key)||null,s(d,f,v,E);case Wn:return f=f.get(v.key===null?p:v.key)||null,c(d,f,v,E);case Kt:var S=v._init;return x(f,d,p,S(v._payload),E)}if(Or(v)||jr(v))return f=f.get(p)||null,g(d,f,v,E,null);Bo(d,v)}return null}function k(f,d,p,v){for(var E=null,S=null,$=d,D=d=0,H=null;$!==null&&D<p.length;D++){$.index>D?(H=$,$=null):H=$.sibling;var P=m(f,$,p[D],v);if(P===null){$===null&&($=H);break}e&&$&&P.alternate===null&&t(f,$),d=l(P,d,D),S===null?E=P:S.sibling=P,S=P,$=H}if(D===p.length)return n(f,$),ae&&wn(f,D),E;if($===null){for(;D<p.length;D++)$=h(f,p[D],v),$!==null&&(d=l($,d,D),S===null?E=$:S.sibling=$,S=$);return ae&&wn(f,D),E}for($=r(f,$);D<p.length;D++)H=x($,f,D,p[D],v),H!==null&&(e&&H.alternate!==null&&$.delete(H.key===null?D:H.key),d=l(H,d,D),S===null?E=H:S.sibling=H,S=H);return e&&$.forEach(function(q){return t(f,q)}),ae&&wn(f,D),E}function b(f,d,p,v){var E=jr(p);if(typeof E!="function")throw Error(T(150));if(p=E.call(p),p==null)throw Error(T(151));for(var S=E=null,$=d,D=d=0,H=null,P=p.next();$!==null&&!P.done;D++,P=p.next()){$.index>D?(H=$,$=null):H=$.sibling;var q=m(f,$,P.value,v);if(q===null){$===null&&($=H);break}e&&$&&q.alternate===null&&t(f,$),d=l(q,d,D),S===null?E=q:S.sibling=q,S=q,$=H}if(P.done)return n(f,$),ae&&wn(f,D),E;if($===null){for(;!P.done;D++,P=p.next())P=h(f,P.value,v),P!==null&&(d=l(P,d,D),S===null?E=P:S.sibling=P,S=P);return ae&&wn(f,D),E}for($=r(f,$);!P.done;D++,P=p.next())P=x($,f,D,P.value,v),P!==null&&(e&&P.alternate!==null&&$.delete(P.key===null?D:P.key),d=l(P,d,D),S===null?E=P:S.sibling=P,S=P);return e&&$.forEach(function(ee){return t(f,ee)}),ae&&wn(f,D),E}function _(f,d,p,v){if(typeof p=="object"&&p!==null&&p.type===Gn&&p.key===null&&(p=p.props.children),typeof p=="object"&&p!==null){switch(p.$$typeof){case To:e:{for(var E=p.key,S=d;S!==null;){if(S.key===E){if(E=p.type,E===Gn){if(S.tag===7){n(f,S.sibling),d=o(S,p.props.children),d.return=f,f=d;break e}}else if(S.elementType===E||typeof E=="object"&&E!==null&&E.$$typeof===Kt&&Wu(E)===S.type){n(f,S.sibling),d=o(S,p.props),d.ref=Lr(f,S,p),d.return=f,f=d;break e}n(f,S);break}else t(f,S);S=S.sibling}p.type===Gn?(d=Tn(p.props.children,f.mode,v,p.key),d.return=f,f=d):(v=il(p.type,p.key,p.props,null,f.mode,v),v.ref=Lr(f,d,p),v.return=f,f=v)}return i(f);case Wn:e:{for(S=p.key;d!==null;){if(d.key===S)if(d.tag===4&&d.stateNode.containerInfo===p.containerInfo&&d.stateNode.implementation===p.implementation){n(f,d.sibling),d=o(d,p.children||[]),d.return=f,f=d;break e}else{n(f,d);break}else t(f,d);d=d.sibling}d=Ri(p,f.mode,v),d.return=f,f=d}return i(f);case Kt:return S=p._init,_(f,d,S(p._payload),v)}if(Or(p))return k(f,d,p,v);if(jr(p))return b(f,d,p,v);Bo(f,p)}return typeof p=="string"&&p!==""||typeof p=="number"?(p=""+p,d!==null&&d.tag===6?(n(f,d.sibling),d=o(d,p),d.return=f,f=d):(n(f,d),d=zi(p,f.mode,v),d.return=f,f=d),i(f)):n(f,d)}return _}var mr=nf(!0),rf=nf(!1),So={},Ct=mn(So),uo=mn(So),co=mn(So);function En(e){if(e===So)throw Error(T(174));return e}function As(e,t){switch(ne(co,t),ne(uo,e),ne(Ct,So),e=t.nodeType,e){case 9:case 11:t=(t=t.documentElement)?t.namespaceURI:ta(null,"");break;default:e=e===8?t.parentNode:t,t=e.namespaceURI||null,e=e.tagName,t=ta(t,e)}le(Ct),ne(Ct,t)}function gr(){le(Ct),le(uo),le(co)}function of(e){En(co.current);var t=En(Ct.current),n=ta(t,e.type);t!==n&&(ne(uo,e),ne(Ct,n))}function Cs(e){uo.current===e&&(le(Ct),le(uo))}var ce=mn(0);function Tl(e){for(var t=e;t!==null;){if(t.tag===13){var n=t.memoizedState;if(n!==null&&(n=n.dehydrated,n===null||n.data==="$?"||n.data==="$!"))return t}else if(t.tag===19&&t.memoizedProps.revealOrder!==void 0){if(t.flags&128)return t}else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return null;t=t.return}t.sibling.return=t.return,t=t.sibling}return null}var ji=[];function Ts(){for(var e=0;e<ji.length;e++)ji[e]._workInProgressVersionPrimary=null;ji.length=0}var tl=Ht.ReactCurrentDispatcher,_i=Ht.ReactCurrentBatchConfig,Nn=0,de=null,Ee=null,Ae=null,jl=!1,Gr=!1,fo=0,N0=0;function ze(){throw Error(T(321))}function js(e,t){if(t===null)return!1;for(var n=0;n<t.length&&n<e.length;n++)if(!yt(e[n],t[n]))return!1;return!0}function _s(e,t,n,r,o,l){if(Nn=l,de=t,t.memoizedState=null,t.updateQueue=null,t.lanes=0,tl.current=e===null||e.memoizedState===null?R0:P0,e=n(r,o),Gr){l=0;do{if(Gr=!1,fo=0,25<=l)throw Error(T(301));l+=1,Ae=Ee=null,t.updateQueue=null,tl.current=O0,e=n(r,o)}while(Gr)}if(tl.current=_l,t=Ee!==null&&Ee.next!==null,Nn=0,Ae=Ee=de=null,jl=!1,t)throw Error(T(300));return e}function Ds(){var e=fo!==0;return fo=0,e}function bt(){var e={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return Ae===null?de.memoizedState=Ae=e:Ae=Ae.next=e,Ae}function ut(){if(Ee===null){var e=de.alternate;e=e!==null?e.memoizedState:null}else e=Ee.next;var t=Ae===null?de.memoizedState:Ae.next;if(t!==null)Ae=t,Ee=e;else{if(e===null)throw Error(T(310));Ee=e,e={memoizedState:Ee.memoizedState,baseState:Ee.baseState,baseQueue:Ee.baseQueue,queue:Ee.queue,next:null},Ae===null?de.memoizedState=Ae=e:Ae=Ae.next=e}return Ae}function po(e,t){return typeof t=="function"?t(e):t}function Di(e){var t=ut(),n=t.queue;if(n===null)throw Error(T(311));n.lastRenderedReducer=e;var r=Ee,o=r.baseQueue,l=n.pending;if(l!==null){if(o!==null){var i=o.next;o.next=l.next,l.next=i}r.baseQueue=o=l,n.pending=null}if(o!==null){l=o.next,r=r.baseState;var a=i=null,s=null,c=l;do{var g=c.lane;if((Nn&g)===g)s!==null&&(s=s.next={lane:0,action:c.action,hasEagerState:c.hasEagerState,eagerState:c.eagerState,next:null}),r=c.hasEagerState?c.eagerState:e(r,c.action);else{var h={lane:g,action:c.action,hasEagerState:c.hasEagerState,eagerState:c.eagerState,next:null};s===null?(a=s=h,i=r):s=s.next=h,de.lanes|=g,In|=g}c=c.next}while(c!==null&&c!==l);s===null?i=r:s.next=a,yt(r,t.memoizedState)||(Ve=!0),t.memoizedState=r,t.baseState=i,t.baseQueue=s,n.lastRenderedState=r}if(e=n.interleaved,e!==null){o=e;do l=o.lane,de.lanes|=l,In|=l,o=o.next;while(o!==e)}else o===null&&(n.lanes=0);return[t.memoizedState,n.dispatch]}function Ni(e){var t=ut(),n=t.queue;if(n===null)throw Error(T(311));n.lastRenderedReducer=e;var r=n.dispatch,o=n.pending,l=t.memoizedState;if(o!==null){n.pending=null;var i=o=o.next;do l=e(l,i.action),i=i.next;while(i!==o);yt(l,t.memoizedState)||(Ve=!0),t.memoizedState=l,t.baseQueue===null&&(t.baseState=l),n.lastRenderedState=l}return[l,r]}function lf(){}function af(e,t){var n=de,r=ut(),o=t(),l=!yt(r.memoizedState,o);if(l&&(r.memoizedState=o,Ve=!0),r=r.queue,Ns(cf.bind(null,n,r,e),[e]),r.getSnapshot!==t||l||Ae!==null&&Ae.memoizedState.tag&1){if(n.flags|=2048,ho(9,uf.bind(null,n,r,o,t),void 0,null),je===null)throw Error(T(349));Nn&30||sf(n,t,o)}return o}function sf(e,t,n){e.flags|=16384,e={getSnapshot:t,value:n},t=de.updateQueue,t===null?(t={lastEffect:null,stores:null},de.updateQueue=t,t.stores=[e]):(n=t.stores,n===null?t.stores=[e]:n.push(e))}function uf(e,t,n,r){t.value=n,t.getSnapshot=r,df(t)&&ff(e)}function cf(e,t,n){return n(function(){df(t)&&ff(e)})}function df(e){var t=e.getSnapshot;e=e.value;try{var n=t();return!yt(e,n)}catch{return!0}}function ff(e){var t=Mt(e,1);t!==null&&gt(t,e,1,-1)}function Gu(e){var t=bt();return typeof e=="function"&&(e=e()),t.memoizedState=t.baseState=e,e={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:po,lastRenderedState:e},t.queue=e,e=e.dispatch=z0.bind(null,de,e),[t.memoizedState,e]}function ho(e,t,n,r){return e={tag:e,create:t,destroy:n,deps:r,next:null},t=de.updateQueue,t===null?(t={lastEffect:null,stores:null},de.updateQueue=t,t.lastEffect=e.next=e):(n=t.lastEffect,n===null?t.lastEffect=e.next=e:(r=n.next,n.next=e,e.next=r,t.lastEffect=e)),e}function pf(){return ut().memoizedState}function nl(e,t,n,r){var o=bt();de.flags|=e,o.memoizedState=ho(1|t,n,void 0,r===void 0?null:r)}function Kl(e,t,n,r){var o=ut();r=r===void 0?null:r;var l=void 0;if(Ee!==null){var i=Ee.memoizedState;if(l=i.destroy,r!==null&&js(r,i.deps)){o.memoizedState=ho(t,n,l,r);return}}de.flags|=e,o.memoizedState=ho(1|t,n,l,r)}function Ku(e,t){return nl(8390656,8,e,t)}function Ns(e,t){return Kl(2048,8,e,t)}function hf(e,t){return Kl(4,2,e,t)}function mf(e,t){return Kl(4,4,e,t)}function gf(e,t){if(typeof t=="function")return e=e(),t(e),function(){t(null)};if(t!=null)return e=e(),t.current=e,function(){t.current=null}}function vf(e,t,n){return n=n!=null?n.concat([e]):null,Kl(4,4,gf.bind(null,t,e),n)}function Is(){}function yf(e,t){var n=ut();t=t===void 0?null:t;var r=n.memoizedState;return r!==null&&t!==null&&js(t,r[1])?r[0]:(n.memoizedState=[e,t],e)}function xf(e,t){var n=ut();t=t===void 0?null:t;var r=n.memoizedState;return r!==null&&t!==null&&js(t,r[1])?r[0]:(e=e(),n.memoizedState=[e,t],e)}function wf(e,t,n){return Nn&21?(yt(n,t)||(n=bd(),de.lanes|=n,In|=n,e.baseState=!0),t):(e.baseState&&(e.baseState=!1,Ve=!0),e.memoizedState=n)}function I0(e,t){var n=te;te=n!==0&&4>n?n:4,e(!0);var r=_i.transition;_i.transition={};try{e(!1),t()}finally{te=n,_i.transition=r}}function kf(){return ut().memoizedState}function L0(e,t,n){var r=an(e);if(n={lane:r,action:n,hasEagerState:!1,eagerState:null,next:null},bf(e))Sf(t,n);else if(n=Jd(e,t,n,r),n!==null){var o=Fe();gt(n,e,r,o),Ef(n,t,r)}}function z0(e,t,n){var r=an(e),o={lane:r,action:n,hasEagerState:!1,eagerState:null,next:null};if(bf(e))Sf(t,o);else{var l=e.alternate;if(e.lanes===0&&(l===null||l.lanes===0)&&(l=t.lastRenderedReducer,l!==null))try{var i=t.lastRenderedState,a=l(i,n);if(o.hasEagerState=!0,o.eagerState=a,yt(a,i)){var s=t.interleaved;s===null?(o.next=o,Es(t)):(o.next=s.next,s.next=o),t.interleaved=o;return}}catch{}finally{}n=Jd(e,t,o,r),n!==null&&(o=Fe(),gt(n,e,r,o),Ef(n,t,r))}}function bf(e){var t=e.alternate;return e===de||t!==null&&t===de}function Sf(e,t){Gr=jl=!0;var n=e.pending;n===null?t.next=t:(t.next=n.next,n.next=t),e.pending=t}function Ef(e,t,n){if(n&4194240){var r=t.lanes;r&=e.pendingLanes,n|=r,t.lanes=n,cs(e,n)}}var _l={readContext:st,useCallback:ze,useContext:ze,useEffect:ze,useImperativeHandle:ze,useInsertionEffect:ze,useLayoutEffect:ze,useMemo:ze,useReducer:ze,useRef:ze,useState:ze,useDebugValue:ze,useDeferredValue:ze,useTransition:ze,useMutableSource:ze,useSyncExternalStore:ze,useId:ze,unstable_isNewReconciler:!1},R0={readContext:st,useCallback:function(e,t){return bt().memoizedState=[e,t===void 0?null:t],e},useContext:st,useEffect:Ku,useImperativeHandle:function(e,t,n){return n=n!=null?n.concat([e]):null,nl(4194308,4,gf.bind(null,t,e),n)},useLayoutEffect:function(e,t){return nl(4194308,4,e,t)},useInsertionEffect:function(e,t){return nl(4,2,e,t)},useMemo:function(e,t){var n=bt();return t=t===void 0?null:t,e=e(),n.memoizedState=[e,t],e},useReducer:function(e,t,n){var r=bt();return t=n!==void 0?n(t):t,r.memoizedState=r.baseState=t,e={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:e,lastRenderedState:t},r.queue=e,e=e.dispatch=L0.bind(null,de,e),[r.memoizedState,e]},useRef:function(e){var t=bt();return e={current:e},t.memoizedState=e},useState:Gu,useDebugValue:Is,useDeferredValue:function(e){return bt().memoizedState=e},useTransition:function(){var e=Gu(!1),t=e[0];return e=I0.bind(null,e[1]),bt().memoizedState=e,[t,e]},useMutableSource:function(){},useSyncExternalStore:function(e,t,n){var r=de,o=bt();if(ae){if(n===void 0)throw Error(T(407));n=n()}else{if(n=t(),je===null)throw Error(T(349));Nn&30||sf(r,t,n)}o.memoizedState=n;var l={value:n,getSnapshot:t};return o.queue=l,Ku(cf.bind(null,r,l,e),[e]),r.flags|=2048,ho(9,uf.bind(null,r,l,n,t),void 0,null),n},useId:function(){var e=bt(),t=je.identifierPrefix;if(ae){var n=Rt,r=zt;n=(r&~(1<<32-mt(r)-1)).toString(32)+n,t=":"+t+"R"+n,n=fo++,0<n&&(t+="H"+n.toString(32)),t+=":"}else n=N0++,t=":"+t+"r"+n.toString(32)+":";return e.memoizedState=t},unstable_isNewReconciler:!1},P0={readContext:st,useCallback:yf,useContext:st,useEffect:Ns,useImperativeHandle:vf,useInsertionEffect:hf,useLayoutEffect:mf,useMemo:xf,useReducer:Di,useRef:pf,useState:function(){return Di(po)},useDebugValue:Is,useDeferredValue:function(e){var t=ut();return wf(t,Ee.memoizedState,e)},useTransition:function(){var e=Di(po)[0],t=ut().memoizedState;return[e,t]},useMutableSource:lf,useSyncExternalStore:af,useId:kf,unstable_isNewReconciler:!1},O0={readContext:st,useCallback:yf,useContext:st,useEffect:Ns,useImperativeHandle:vf,useInsertionEffect:hf,useLayoutEffect:mf,useMemo:xf,useReducer:Ni,useRef:pf,useState:function(){return Ni(po)},useDebugValue:Is,useDeferredValue:function(e){var t=ut();return Ee===null?t.memoizedState=e:wf(t,Ee.memoizedState,e)},useTransition:function(){var e=Ni(po)[0],t=ut().memoizedState;return[e,t]},useMutableSource:lf,useSyncExternalStore:af,useId:kf,unstable_isNewReconciler:!1};function vr(e,t){try{var n="",r=t;do n+=fh(r),r=r.return;while(r);var o=n}catch(l){o=`
Error generating stack: `+l.message+`
`+l.stack}return{value:e,source:t,stack:o,digest:null}}function Ii(e,t,n){return{value:e,source:null,stack:n??null,digest:t??null}}function Ea(e,t){try{console.error(t.value)}catch(n){setTimeout(function(){throw n})}}var B0=typeof WeakMap=="function"?WeakMap:Map;function $f(e,t,n){n=Pt(-1,n),n.tag=3,n.payload={element:null};var r=t.value;return n.callback=function(){Nl||(Nl=!0,La=r),Ea(e,t)},n}function Af(e,t,n){n=Pt(-1,n),n.tag=3;var r=e.type.getDerivedStateFromError;if(typeof r=="function"){var o=t.value;n.payload=function(){return r(o)},n.callback=function(){Ea(e,t)}}var l=e.stateNode;return l!==null&&typeof l.componentDidCatch=="function"&&(n.callback=function(){Ea(e,t),typeof r!="function"&&(ln===null?ln=new Set([this]):ln.add(this));var i=t.stack;this.componentDidCatch(t.value,{componentStack:i!==null?i:""})}),n}function Yu(e,t,n){var r=e.pingCache;if(r===null){r=e.pingCache=new B0;var o=new Set;r.set(t,o)}else o=r.get(t),o===void 0&&(o=new Set,r.set(t,o));o.has(n)||(o.add(n),e=q0.bind(null,e,t,n),t.then(e,e))}function Xu(e){do{var t;if((t=e.tag===13)&&(t=e.memoizedState,t=t!==null?t.dehydrated!==null:!0),t)return e;e=e.return}while(e!==null);return null}function Zu(e,t,n,r,o){return e.mode&1?(e.flags|=65536,e.lanes=o,e):(e===t?e.flags|=65536:(e.flags|=128,n.flags|=131072,n.flags&=-52805,n.tag===1&&(n.alternate===null?n.tag=17:(t=Pt(-1,1),t.tag=2,on(n,t,1))),n.lanes|=1),e)}var M0=Ht.ReactCurrentOwner,Ve=!1;function Me(e,t,n,r){t.child=e===null?rf(t,null,n,r):mr(t,e.child,n,r)}function Ju(e,t,n,r,o){n=n.render;var l=t.ref;return cr(t,o),r=_s(e,t,n,r,l,o),n=Ds(),e!==null&&!Ve?(t.updateQueue=e.updateQueue,t.flags&=-2053,e.lanes&=~o,Ft(e,t,o)):(ae&&n&&ys(t),t.flags|=1,Me(e,t,r,o),t.child)}function qu(e,t,n,r,o){if(e===null){var l=n.type;return typeof l=="function"&&!Fs(l)&&l.defaultProps===void 0&&n.compare===null&&n.defaultProps===void 0?(t.tag=15,t.type=l,Cf(e,t,l,r,o)):(e=il(n.type,null,r,t,t.mode,o),e.ref=t.ref,e.return=t,t.child=e)}if(l=e.child,!(e.lanes&o)){var i=l.memoizedProps;if(n=n.compare,n=n!==null?n:lo,n(i,r)&&e.ref===t.ref)return Ft(e,t,o)}return t.flags|=1,e=sn(l,r),e.ref=t.ref,e.return=t,t.child=e}function Cf(e,t,n,r,o){if(e!==null){var l=e.memoizedProps;if(lo(l,r)&&e.ref===t.ref)if(Ve=!1,t.pendingProps=r=l,(e.lanes&o)!==0)e.flags&131072&&(Ve=!0);else return t.lanes=e.lanes,Ft(e,t,o)}return $a(e,t,n,r,o)}function Tf(e,t,n){var r=t.pendingProps,o=r.children,l=e!==null?e.memoizedState:null;if(r.mode==="hidden")if(!(t.mode&1))t.memoizedState={baseLanes:0,cachePool:null,transitions:null},ne(rr,Xe),Xe|=n;else{if(!(n&1073741824))return e=l!==null?l.baseLanes|n:n,t.lanes=t.childLanes=1073741824,t.memoizedState={baseLanes:e,cachePool:null,transitions:null},t.updateQueue=null,ne(rr,Xe),Xe|=e,null;t.memoizedState={baseLanes:0,cachePool:null,transitions:null},r=l!==null?l.baseLanes:n,ne(rr,Xe),Xe|=r}else l!==null?(r=l.baseLanes|n,t.memoizedState=null):r=n,ne(rr,Xe),Xe|=r;return Me(e,t,o,n),t.child}function jf(e,t){var n=t.ref;(e===null&&n!==null||e!==null&&e.ref!==n)&&(t.flags|=512,t.flags|=2097152)}function $a(e,t,n,r,o){var l=Ge(n)?_n:Be.current;return l=pr(t,l),cr(t,o),n=_s(e,t,n,r,l,o),r=Ds(),e!==null&&!Ve?(t.updateQueue=e.updateQueue,t.flags&=-2053,e.lanes&=~o,Ft(e,t,o)):(ae&&r&&ys(t),t.flags|=1,Me(e,t,n,o),t.child)}function ec(e,t,n,r,o){if(Ge(n)){var l=!0;bl(t)}else l=!1;if(cr(t,o),t.stateNode===null)rl(e,t),tf(t,n,r),Sa(t,n,r,o),r=!0;else if(e===null){var i=t.stateNode,a=t.memoizedProps;i.props=a;var s=i.context,c=n.contextType;typeof c=="object"&&c!==null?c=st(c):(c=Ge(n)?_n:Be.current,c=pr(t,c));var g=n.getDerivedStateFromProps,h=typeof g=="function"||typeof i.getSnapshotBeforeUpdate=="function";h||typeof i.UNSAFE_componentWillReceiveProps!="function"&&typeof i.componentWillReceiveProps!="function"||(a!==r||s!==c)&&Vu(t,i,r,c),Yt=!1;var m=t.memoizedState;i.state=m,Cl(t,r,i,o),s=t.memoizedState,a!==r||m!==s||We.current||Yt?(typeof g=="function"&&(ba(t,n,g,r),s=t.memoizedState),(a=Yt||Qu(t,n,a,r,m,s,c))?(h||typeof i.UNSAFE_componentWillMount!="function"&&typeof i.componentWillMount!="function"||(typeof i.componentWillMount=="function"&&i.componentWillMount(),typeof i.UNSAFE_componentWillMount=="function"&&i.UNSAFE_componentWillMount()),typeof i.componentDidMount=="function"&&(t.flags|=4194308)):(typeof i.componentDidMount=="function"&&(t.flags|=4194308),t.memoizedProps=r,t.memoizedState=s),i.props=r,i.state=s,i.context=c,r=a):(typeof i.componentDidMount=="function"&&(t.flags|=4194308),r=!1)}else{i=t.stateNode,qd(e,t),a=t.memoizedProps,c=t.type===t.elementType?a:ft(t.type,a),i.props=c,h=t.pendingProps,m=i.context,s=n.contextType,typeof s=="object"&&s!==null?s=st(s):(s=Ge(n)?_n:Be.current,s=pr(t,s));var x=n.getDerivedStateFromProps;(g=typeof x=="function"||typeof i.getSnapshotBeforeUpdate=="function")||typeof i.UNSAFE_componentWillReceiveProps!="function"&&typeof i.componentWillReceiveProps!="function"||(a!==h||m!==s)&&Vu(t,i,r,s),Yt=!1,m=t.memoizedState,i.state=m,Cl(t,r,i,o);var k=t.memoizedState;a!==h||m!==k||We.current||Yt?(typeof x=="function"&&(ba(t,n,x,r),k=t.memoizedState),(c=Yt||Qu(t,n,c,r,m,k,s)||!1)?(g||typeof i.UNSAFE_componentWillUpdate!="function"&&typeof i.componentWillUpdate!="function"||(typeof i.componentWillUpdate=="function"&&i.componentWillUpdate(r,k,s),typeof i.UNSAFE_componentWillUpdate=="function"&&i.UNSAFE_componentWillUpdate(r,k,s)),typeof i.componentDidUpdate=="function"&&(t.flags|=4),typeof i.getSnapshotBeforeUpdate=="function"&&(t.flags|=1024)):(typeof i.componentDidUpdate!="function"||a===e.memoizedProps&&m===e.memoizedState||(t.flags|=4),typeof i.getSnapshotBeforeUpdate!="function"||a===e.memoizedProps&&m===e.memoizedState||(t.flags|=1024),t.memoizedProps=r,t.memoizedState=k),i.props=r,i.state=k,i.context=s,r=c):(typeof i.componentDidUpdate!="function"||a===e.memoizedProps&&m===e.memoizedState||(t.flags|=4),typeof i.getSnapshotBeforeUpdate!="function"||a===e.memoizedProps&&m===e.memoizedState||(t.flags|=1024),r=!1)}return Aa(e,t,n,r,l,o)}function Aa(e,t,n,r,o,l){jf(e,t);var i=(t.flags&128)!==0;if(!r&&!i)return o&&Bu(t,n,!1),Ft(e,t,l);r=t.stateNode,M0.current=t;var a=i&&typeof n.getDerivedStateFromError!="function"?null:r.render();return t.flags|=1,e!==null&&i?(t.child=mr(t,e.child,null,l),t.child=mr(t,null,a,l)):Me(e,t,a,l),t.memoizedState=r.state,o&&Bu(t,n,!0),t.child}function _f(e){var t=e.stateNode;t.pendingContext?Ou(e,t.pendingContext,t.pendingContext!==t.context):t.context&&Ou(e,t.context,!1),As(e,t.containerInfo)}function tc(e,t,n,r,o){return hr(),ws(o),t.flags|=256,Me(e,t,n,r),t.child}var Ca={dehydrated:null,treeContext:null,retryLane:0};function Ta(e){return{baseLanes:e,cachePool:null,transitions:null}}function Df(e,t,n){var r=t.pendingProps,o=ce.current,l=!1,i=(t.flags&128)!==0,a;if((a=i)||(a=e!==null&&e.memoizedState===null?!1:(o&2)!==0),a?(l=!0,t.flags&=-129):(e===null||e.memoizedState!==null)&&(o|=1),ne(ce,o&1),e===null)return wa(t),e=t.memoizedState,e!==null&&(e=e.dehydrated,e!==null)?(t.mode&1?e.data==="$!"?t.lanes=8:t.lanes=1073741824:t.lanes=1,null):(i=r.children,e=r.fallback,l?(r=t.mode,l=t.child,i={mode:"hidden",children:i},!(r&1)&&l!==null?(l.childLanes=0,l.pendingProps=i):l=Zl(i,r,0,null),e=Tn(e,r,n,null),l.return=t,e.return=t,l.sibling=e,t.child=l,t.child.memoizedState=Ta(n),t.memoizedState=Ca,e):Ls(t,i));if(o=e.memoizedState,o!==null&&(a=o.dehydrated,a!==null))return F0(e,t,i,r,a,o,n);if(l){l=r.fallback,i=t.mode,o=e.child,a=o.sibling;var s={mode:"hidden",children:r.children};return!(i&1)&&t.child!==o?(r=t.child,r.childLanes=0,r.pendingProps=s,t.deletions=null):(r=sn(o,s),r.subtreeFlags=o.subtreeFlags&14680064),a!==null?l=sn(a,l):(l=Tn(l,i,n,null),l.flags|=2),l.return=t,r.return=t,r.sibling=l,t.child=r,r=l,l=t.child,i=e.child.memoizedState,i=i===null?Ta(n):{baseLanes:i.baseLanes|n,cachePool:null,transitions:i.transitions},l.memoizedState=i,l.childLanes=e.childLanes&~n,t.memoizedState=Ca,r}return l=e.child,e=l.sibling,r=sn(l,{mode:"visible",children:r.children}),!(t.mode&1)&&(r.lanes=n),r.return=t,r.sibling=null,e!==null&&(n=t.deletions,n===null?(t.deletions=[e],t.flags|=16):n.push(e)),t.child=r,t.memoizedState=null,r}function Ls(e,t){return t=Zl({mode:"visible",children:t},e.mode,0,null),t.return=e,e.child=t}function Mo(e,t,n,r){return r!==null&&ws(r),mr(t,e.child,null,n),e=Ls(t,t.pendingProps.children),e.flags|=2,t.memoizedState=null,e}function F0(e,t,n,r,o,l,i){if(n)return t.flags&256?(t.flags&=-257,r=Ii(Error(T(422))),Mo(e,t,i,r)):t.memoizedState!==null?(t.child=e.child,t.flags|=128,null):(l=r.fallback,o=t.mode,r=Zl({mode:"visible",children:r.children},o,0,null),l=Tn(l,o,i,null),l.flags|=2,r.return=t,l.return=t,r.sibling=l,t.child=r,t.mode&1&&mr(t,e.child,null,i),t.child.memoizedState=Ta(i),t.memoizedState=Ca,l);if(!(t.mode&1))return Mo(e,t,i,null);if(o.data==="$!"){if(r=o.nextSibling&&o.nextSibling.dataset,r)var a=r.dgst;return r=a,l=Error(T(419)),r=Ii(l,r,void 0),Mo(e,t,i,r)}if(a=(i&e.childLanes)!==0,Ve||a){if(r=je,r!==null){switch(i&-i){case 4:o=2;break;case 16:o=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:o=32;break;case 536870912:o=268435456;break;default:o=0}o=o&(r.suspendedLanes|i)?0:o,o!==0&&o!==l.retryLane&&(l.retryLane=o,Mt(e,o),gt(r,e,o,-1))}return Ms(),r=Ii(Error(T(421))),Mo(e,t,i,r)}return o.data==="$?"?(t.flags|=128,t.child=e.child,t=em.bind(null,e),o._reactRetry=t,null):(e=l.treeContext,Ze=rn(o.nextSibling),Je=t,ae=!0,ht=null,e!==null&&(ot[lt++]=zt,ot[lt++]=Rt,ot[lt++]=Dn,zt=e.id,Rt=e.overflow,Dn=t),t=Ls(t,r.children),t.flags|=4096,t)}function nc(e,t,n){e.lanes|=t;var r=e.alternate;r!==null&&(r.lanes|=t),ka(e.return,t,n)}function Li(e,t,n,r,o){var l=e.memoizedState;l===null?e.memoizedState={isBackwards:t,rendering:null,renderingStartTime:0,last:r,tail:n,tailMode:o}:(l.isBackwards=t,l.rendering=null,l.renderingStartTime=0,l.last=r,l.tail=n,l.tailMode=o)}function Nf(e,t,n){var r=t.pendingProps,o=r.revealOrder,l=r.tail;if(Me(e,t,r.children,n),r=ce.current,r&2)r=r&1|2,t.flags|=128;else{if(e!==null&&e.flags&128)e:for(e=t.child;e!==null;){if(e.tag===13)e.memoizedState!==null&&nc(e,n,t);else if(e.tag===19)nc(e,n,t);else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===t)break e;for(;e.sibling===null;){if(e.return===null||e.return===t)break e;e=e.return}e.sibling.return=e.return,e=e.sibling}r&=1}if(ne(ce,r),!(t.mode&1))t.memoizedState=null;else switch(o){case"forwards":for(n=t.child,o=null;n!==null;)e=n.alternate,e!==null&&Tl(e)===null&&(o=n),n=n.sibling;n=o,n===null?(o=t.child,t.child=null):(o=n.sibling,n.sibling=null),Li(t,!1,o,n,l);break;case"backwards":for(n=null,o=t.child,t.child=null;o!==null;){if(e=o.alternate,e!==null&&Tl(e)===null){t.child=o;break}e=o.sibling,o.sibling=n,n=o,o=e}Li(t,!0,n,null,l);break;case"together":Li(t,!1,null,null,void 0);break;default:t.memoizedState=null}return t.child}function rl(e,t){!(t.mode&1)&&e!==null&&(e.alternate=null,t.alternate=null,t.flags|=2)}function Ft(e,t,n){if(e!==null&&(t.dependencies=e.dependencies),In|=t.lanes,!(n&t.childLanes))return null;if(e!==null&&t.child!==e.child)throw Error(T(153));if(t.child!==null){for(e=t.child,n=sn(e,e.pendingProps),t.child=n,n.return=t;e.sibling!==null;)e=e.sibling,n=n.sibling=sn(e,e.pendingProps),n.return=t;n.sibling=null}return t.child}function H0(e,t,n){switch(t.tag){case 3:_f(t),hr();break;case 5:of(t);break;case 1:Ge(t.type)&&bl(t);break;case 4:As(t,t.stateNode.containerInfo);break;case 10:var r=t.type._context,o=t.memoizedProps.value;ne($l,r._currentValue),r._currentValue=o;break;case 13:if(r=t.memoizedState,r!==null)return r.dehydrated!==null?(ne(ce,ce.current&1),t.flags|=128,null):n&t.child.childLanes?Df(e,t,n):(ne(ce,ce.current&1),e=Ft(e,t,n),e!==null?e.sibling:null);ne(ce,ce.current&1);break;case 19:if(r=(n&t.childLanes)!==0,e.flags&128){if(r)return Nf(e,t,n);t.flags|=128}if(o=t.memoizedState,o!==null&&(o.rendering=null,o.tail=null,o.lastEffect=null),ne(ce,ce.current),r)break;return null;case 22:case 23:return t.lanes=0,Tf(e,t,n)}return Ft(e,t,n)}var If,ja,Lf,zf;If=function(e,t){for(var n=t.child;n!==null;){if(n.tag===5||n.tag===6)e.appendChild(n.stateNode);else if(n.tag!==4&&n.child!==null){n.child.return=n,n=n.child;continue}if(n===t)break;for(;n.sibling===null;){if(n.return===null||n.return===t)return;n=n.return}n.sibling.return=n.return,n=n.sibling}};ja=function(){};Lf=function(e,t,n,r){var o=e.memoizedProps;if(o!==r){e=t.stateNode,En(Ct.current);var l=null;switch(n){case"input":o=Zi(e,o),r=Zi(e,r),l=[];break;case"select":o=fe({},o,{value:void 0}),r=fe({},r,{value:void 0}),l=[];break;case"textarea":o=ea(e,o),r=ea(e,r),l=[];break;default:typeof o.onClick!="function"&&typeof r.onClick=="function"&&(e.onclick=wl)}na(n,r);var i;n=null;for(c in o)if(!r.hasOwnProperty(c)&&o.hasOwnProperty(c)&&o[c]!=null)if(c==="style"){var a=o[c];for(i in a)a.hasOwnProperty(i)&&(n||(n={}),n[i]="")}else c!=="dangerouslySetInnerHTML"&&c!=="children"&&c!=="suppressContentEditableWarning"&&c!=="suppressHydrationWarning"&&c!=="autoFocus"&&(Jr.hasOwnProperty(c)?l||(l=[]):(l=l||[]).push(c,null));for(c in r){var s=r[c];if(a=o!=null?o[c]:void 0,r.hasOwnProperty(c)&&s!==a&&(s!=null||a!=null))if(c==="style")if(a){for(i in a)!a.hasOwnProperty(i)||s&&s.hasOwnProperty(i)||(n||(n={}),n[i]="");for(i in s)s.hasOwnProperty(i)&&a[i]!==s[i]&&(n||(n={}),n[i]=s[i])}else n||(l||(l=[]),l.push(c,n)),n=s;else c==="dangerouslySetInnerHTML"?(s=s?s.__html:void 0,a=a?a.__html:void 0,s!=null&&a!==s&&(l=l||[]).push(c,s)):c==="children"?typeof s!="string"&&typeof s!="number"||(l=l||[]).push(c,""+s):c!=="suppressContentEditableWarning"&&c!=="suppressHydrationWarning"&&(Jr.hasOwnProperty(c)?(s!=null&&c==="onScroll"&&re("scroll",e),l||a===s||(l=[])):(l=l||[]).push(c,s))}n&&(l=l||[]).push("style",n);var c=l;(t.updateQueue=c)&&(t.flags|=4)}};zf=function(e,t,n,r){n!==r&&(t.flags|=4)};function zr(e,t){if(!ae)switch(e.tailMode){case"hidden":t=e.tail;for(var n=null;t!==null;)t.alternate!==null&&(n=t),t=t.sibling;n===null?e.tail=null:n.sibling=null;break;case"collapsed":n=e.tail;for(var r=null;n!==null;)n.alternate!==null&&(r=n),n=n.sibling;r===null?t||e.tail===null?e.tail=null:e.tail.sibling=null:r.sibling=null}}function Re(e){var t=e.alternate!==null&&e.alternate.child===e.child,n=0,r=0;if(t)for(var o=e.child;o!==null;)n|=o.lanes|o.childLanes,r|=o.subtreeFlags&14680064,r|=o.flags&14680064,o.return=e,o=o.sibling;else for(o=e.child;o!==null;)n|=o.lanes|o.childLanes,r|=o.subtreeFlags,r|=o.flags,o.return=e,o=o.sibling;return e.subtreeFlags|=r,e.childLanes=n,t}function U0(e,t,n){var r=t.pendingProps;switch(xs(t),t.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return Re(t),null;case 1:return Ge(t.type)&&kl(),Re(t),null;case 3:return r=t.stateNode,gr(),le(We),le(Be),Ts(),r.pendingContext&&(r.context=r.pendingContext,r.pendingContext=null),(e===null||e.child===null)&&(Oo(t)?t.flags|=4:e===null||e.memoizedState.isDehydrated&&!(t.flags&256)||(t.flags|=1024,ht!==null&&(Pa(ht),ht=null))),ja(e,t),Re(t),null;case 5:Cs(t);var o=En(co.current);if(n=t.type,e!==null&&t.stateNode!=null)Lf(e,t,n,r,o),e.ref!==t.ref&&(t.flags|=512,t.flags|=2097152);else{if(!r){if(t.stateNode===null)throw Error(T(166));return Re(t),null}if(e=En(Ct.current),Oo(t)){r=t.stateNode,n=t.type;var l=t.memoizedProps;switch(r[$t]=t,r[so]=l,e=(t.mode&1)!==0,n){case"dialog":re("cancel",r),re("close",r);break;case"iframe":case"object":case"embed":re("load",r);break;case"video":case"audio":for(o=0;o<Mr.length;o++)re(Mr[o],r);break;case"source":re("error",r);break;case"img":case"image":case"link":re("error",r),re("load",r);break;case"details":re("toggle",r);break;case"input":du(r,l),re("invalid",r);break;case"select":r._wrapperState={wasMultiple:!!l.multiple},re("invalid",r);break;case"textarea":pu(r,l),re("invalid",r)}na(n,l),o=null;for(var i in l)if(l.hasOwnProperty(i)){var a=l[i];i==="children"?typeof a=="string"?r.textContent!==a&&(l.suppressHydrationWarning!==!0&&Po(r.textContent,a,e),o=["children",a]):typeof a=="number"&&r.textContent!==""+a&&(l.suppressHydrationWarning!==!0&&Po(r.textContent,a,e),o=["children",""+a]):Jr.hasOwnProperty(i)&&a!=null&&i==="onScroll"&&re("scroll",r)}switch(n){case"input":jo(r),fu(r,l,!0);break;case"textarea":jo(r),hu(r);break;case"select":case"option":break;default:typeof l.onClick=="function"&&(r.onclick=wl)}r=o,t.updateQueue=r,r!==null&&(t.flags|=4)}else{i=o.nodeType===9?o:o.ownerDocument,e==="http://www.w3.org/1999/xhtml"&&(e=ad(n)),e==="http://www.w3.org/1999/xhtml"?n==="script"?(e=i.createElement("div"),e.innerHTML="<script><\/script>",e=e.removeChild(e.firstChild)):typeof r.is=="string"?e=i.createElement(n,{is:r.is}):(e=i.createElement(n),n==="select"&&(i=e,r.multiple?i.multiple=!0:r.size&&(i.size=r.size))):e=i.createElementNS(e,n),e[$t]=t,e[so]=r,If(e,t,!1,!1),t.stateNode=e;e:{switch(i=ra(n,r),n){case"dialog":re("cancel",e),re("close",e),o=r;break;case"iframe":case"object":case"embed":re("load",e),o=r;break;case"video":case"audio":for(o=0;o<Mr.length;o++)re(Mr[o],e);o=r;break;case"source":re("error",e),o=r;break;case"img":case"image":case"link":re("error",e),re("load",e),o=r;break;case"details":re("toggle",e),o=r;break;case"input":du(e,r),o=Zi(e,r),re("invalid",e);break;case"option":o=r;break;case"select":e._wrapperState={wasMultiple:!!r.multiple},o=fe({},r,{value:void 0}),re("invalid",e);break;case"textarea":pu(e,r),o=ea(e,r),re("invalid",e);break;default:o=r}na(n,o),a=o;for(l in a)if(a.hasOwnProperty(l)){var s=a[l];l==="style"?cd(e,s):l==="dangerouslySetInnerHTML"?(s=s?s.__html:void 0,s!=null&&sd(e,s)):l==="children"?typeof s=="string"?(n!=="textarea"||s!=="")&&qr(e,s):typeof s=="number"&&qr(e,""+s):l!=="suppressContentEditableWarning"&&l!=="suppressHydrationWarning"&&l!=="autoFocus"&&(Jr.hasOwnProperty(l)?s!=null&&l==="onScroll"&&re("scroll",e):s!=null&&os(e,l,s,i))}switch(n){case"input":jo(e),fu(e,r,!1);break;case"textarea":jo(e),hu(e);break;case"option":r.value!=null&&e.setAttribute("value",""+cn(r.value));break;case"select":e.multiple=!!r.multiple,l=r.value,l!=null?ir(e,!!r.multiple,l,!1):r.defaultValue!=null&&ir(e,!!r.multiple,r.defaultValue,!0);break;default:typeof o.onClick=="function"&&(e.onclick=wl)}switch(n){case"button":case"input":case"select":case"textarea":r=!!r.autoFocus;break e;case"img":r=!0;break e;default:r=!1}}r&&(t.flags|=4)}t.ref!==null&&(t.flags|=512,t.flags|=2097152)}return Re(t),null;case 6:if(e&&t.stateNode!=null)zf(e,t,e.memoizedProps,r);else{if(typeof r!="string"&&t.stateNode===null)throw Error(T(166));if(n=En(co.current),En(Ct.current),Oo(t)){if(r=t.stateNode,n=t.memoizedProps,r[$t]=t,(l=r.nodeValue!==n)&&(e=Je,e!==null))switch(e.tag){case 3:Po(r.nodeValue,n,(e.mode&1)!==0);break;case 5:e.memoizedProps.suppressHydrationWarning!==!0&&Po(r.nodeValue,n,(e.mode&1)!==0)}l&&(t.flags|=4)}else r=(n.nodeType===9?n:n.ownerDocument).createTextNode(r),r[$t]=t,t.stateNode=r}return Re(t),null;case 13:if(le(ce),r=t.memoizedState,e===null||e.memoizedState!==null&&e.memoizedState.dehydrated!==null){if(ae&&Ze!==null&&t.mode&1&&!(t.flags&128))Zd(),hr(),t.flags|=98560,l=!1;else if(l=Oo(t),r!==null&&r.dehydrated!==null){if(e===null){if(!l)throw Error(T(318));if(l=t.memoizedState,l=l!==null?l.dehydrated:null,!l)throw Error(T(317));l[$t]=t}else hr(),!(t.flags&128)&&(t.memoizedState=null),t.flags|=4;Re(t),l=!1}else ht!==null&&(Pa(ht),ht=null),l=!0;if(!l)return t.flags&65536?t:null}return t.flags&128?(t.lanes=n,t):(r=r!==null,r!==(e!==null&&e.memoizedState!==null)&&r&&(t.child.flags|=8192,t.mode&1&&(e===null||ce.current&1?$e===0&&($e=3):Ms())),t.updateQueue!==null&&(t.flags|=4),Re(t),null);case 4:return gr(),ja(e,t),e===null&&io(t.stateNode.containerInfo),Re(t),null;case 10:return Ss(t.type._context),Re(t),null;case 17:return Ge(t.type)&&kl(),Re(t),null;case 19:if(le(ce),l=t.memoizedState,l===null)return Re(t),null;if(r=(t.flags&128)!==0,i=l.rendering,i===null)if(r)zr(l,!1);else{if($e!==0||e!==null&&e.flags&128)for(e=t.child;e!==null;){if(i=Tl(e),i!==null){for(t.flags|=128,zr(l,!1),r=i.updateQueue,r!==null&&(t.updateQueue=r,t.flags|=4),t.subtreeFlags=0,r=n,n=t.child;n!==null;)l=n,e=r,l.flags&=14680066,i=l.alternate,i===null?(l.childLanes=0,l.lanes=e,l.child=null,l.subtreeFlags=0,l.memoizedProps=null,l.memoizedState=null,l.updateQueue=null,l.dependencies=null,l.stateNode=null):(l.childLanes=i.childLanes,l.lanes=i.lanes,l.child=i.child,l.subtreeFlags=0,l.deletions=null,l.memoizedProps=i.memoizedProps,l.memoizedState=i.memoizedState,l.updateQueue=i.updateQueue,l.type=i.type,e=i.dependencies,l.dependencies=e===null?null:{lanes:e.lanes,firstContext:e.firstContext}),n=n.sibling;return ne(ce,ce.current&1|2),t.child}e=e.sibling}l.tail!==null&&ve()>yr&&(t.flags|=128,r=!0,zr(l,!1),t.lanes=4194304)}else{if(!r)if(e=Tl(i),e!==null){if(t.flags|=128,r=!0,n=e.updateQueue,n!==null&&(t.updateQueue=n,t.flags|=4),zr(l,!0),l.tail===null&&l.tailMode==="hidden"&&!i.alternate&&!ae)return Re(t),null}else 2*ve()-l.renderingStartTime>yr&&n!==1073741824&&(t.flags|=128,r=!0,zr(l,!1),t.lanes=4194304);l.isBackwards?(i.sibling=t.child,t.child=i):(n=l.last,n!==null?n.sibling=i:t.child=i,l.last=i)}return l.tail!==null?(t=l.tail,l.rendering=t,l.tail=t.sibling,l.renderingStartTime=ve(),t.sibling=null,n=ce.current,ne(ce,r?n&1|2:n&1),t):(Re(t),null);case 22:case 23:return Bs(),r=t.memoizedState!==null,e!==null&&e.memoizedState!==null!==r&&(t.flags|=8192),r&&t.mode&1?Xe&1073741824&&(Re(t),t.subtreeFlags&6&&(t.flags|=8192)):Re(t),null;case 24:return null;case 25:return null}throw Error(T(156,t.tag))}function Q0(e,t){switch(xs(t),t.tag){case 1:return Ge(t.type)&&kl(),e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 3:return gr(),le(We),le(Be),Ts(),e=t.flags,e&65536&&!(e&128)?(t.flags=e&-65537|128,t):null;case 5:return Cs(t),null;case 13:if(le(ce),e=t.memoizedState,e!==null&&e.dehydrated!==null){if(t.alternate===null)throw Error(T(340));hr()}return e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 19:return le(ce),null;case 4:return gr(),null;case 10:return Ss(t.type._context),null;case 22:case 23:return Bs(),null;case 24:return null;default:return null}}var Fo=!1,Oe=!1,V0=typeof WeakSet=="function"?WeakSet:Set,I=null;function nr(e,t){var n=e.ref;if(n!==null)if(typeof n=="function")try{n(null)}catch(r){me(e,t,r)}else n.current=null}function _a(e,t,n){try{n()}catch(r){me(e,t,r)}}var rc=!1;function W0(e,t){if(pa=vl,e=Od(),vs(e)){if("selectionStart"in e)var n={start:e.selectionStart,end:e.selectionEnd};else e:{n=(n=e.ownerDocument)&&n.defaultView||window;var r=n.getSelection&&n.getSelection();if(r&&r.rangeCount!==0){n=r.anchorNode;var o=r.anchorOffset,l=r.focusNode;r=r.focusOffset;try{n.nodeType,l.nodeType}catch{n=null;break e}var i=0,a=-1,s=-1,c=0,g=0,h=e,m=null;t:for(;;){for(var x;h!==n||o!==0&&h.nodeType!==3||(a=i+o),h!==l||r!==0&&h.nodeType!==3||(s=i+r),h.nodeType===3&&(i+=h.nodeValue.length),(x=h.firstChild)!==null;)m=h,h=x;for(;;){if(h===e)break t;if(m===n&&++c===o&&(a=i),m===l&&++g===r&&(s=i),(x=h.nextSibling)!==null)break;h=m,m=h.parentNode}h=x}n=a===-1||s===-1?null:{start:a,end:s}}else n=null}n=n||{start:0,end:0}}else n=null;for(ha={focusedElem:e,selectionRange:n},vl=!1,I=t;I!==null;)if(t=I,e=t.child,(t.subtreeFlags&1028)!==0&&e!==null)e.return=t,I=e;else for(;I!==null;){t=I;try{var k=t.alternate;if(t.flags&1024)switch(t.tag){case 0:case 11:case 15:break;case 1:if(k!==null){var b=k.memoizedProps,_=k.memoizedState,f=t.stateNode,d=f.getSnapshotBeforeUpdate(t.elementType===t.type?b:ft(t.type,b),_);f.__reactInternalSnapshotBeforeUpdate=d}break;case 3:var p=t.stateNode.containerInfo;p.nodeType===1?p.textContent="":p.nodeType===9&&p.documentElement&&p.removeChild(p.documentElement);break;case 5:case 6:case 4:case 17:break;default:throw Error(T(163))}}catch(v){me(t,t.return,v)}if(e=t.sibling,e!==null){e.return=t.return,I=e;break}I=t.return}return k=rc,rc=!1,k}function Kr(e,t,n){var r=t.updateQueue;if(r=r!==null?r.lastEffect:null,r!==null){var o=r=r.next;do{if((o.tag&e)===e){var l=o.destroy;o.destroy=void 0,l!==void 0&&_a(t,n,l)}o=o.next}while(o!==r)}}function Yl(e,t){if(t=t.updateQueue,t=t!==null?t.lastEffect:null,t!==null){var n=t=t.next;do{if((n.tag&e)===e){var r=n.create;n.destroy=r()}n=n.next}while(n!==t)}}function Da(e){var t=e.ref;if(t!==null){var n=e.stateNode;switch(e.tag){case 5:e=n;break;default:e=n}typeof t=="function"?t(e):t.current=e}}function Rf(e){var t=e.alternate;t!==null&&(e.alternate=null,Rf(t)),e.child=null,e.deletions=null,e.sibling=null,e.tag===5&&(t=e.stateNode,t!==null&&(delete t[$t],delete t[so],delete t[va],delete t[T0],delete t[j0])),e.stateNode=null,e.return=null,e.dependencies=null,e.memoizedProps=null,e.memoizedState=null,e.pendingProps=null,e.stateNode=null,e.updateQueue=null}function Pf(e){return e.tag===5||e.tag===3||e.tag===4}function oc(e){e:for(;;){for(;e.sibling===null;){if(e.return===null||Pf(e.return))return null;e=e.return}for(e.sibling.return=e.return,e=e.sibling;e.tag!==5&&e.tag!==6&&e.tag!==18;){if(e.flags&2||e.child===null||e.tag===4)continue e;e.child.return=e,e=e.child}if(!(e.flags&2))return e.stateNode}}function Na(e,t,n){var r=e.tag;if(r===5||r===6)e=e.stateNode,t?n.nodeType===8?n.parentNode.insertBefore(e,t):n.insertBefore(e,t):(n.nodeType===8?(t=n.parentNode,t.insertBefore(e,n)):(t=n,t.appendChild(e)),n=n._reactRootContainer,n!=null||t.onclick!==null||(t.onclick=wl));else if(r!==4&&(e=e.child,e!==null))for(Na(e,t,n),e=e.sibling;e!==null;)Na(e,t,n),e=e.sibling}function Ia(e,t,n){var r=e.tag;if(r===5||r===6)e=e.stateNode,t?n.insertBefore(e,t):n.appendChild(e);else if(r!==4&&(e=e.child,e!==null))for(Ia(e,t,n),e=e.sibling;e!==null;)Ia(e,t,n),e=e.sibling}var De=null,pt=!1;function Vt(e,t,n){for(n=n.child;n!==null;)Of(e,t,n),n=n.sibling}function Of(e,t,n){if(At&&typeof At.onCommitFiberUnmount=="function")try{At.onCommitFiberUnmount(Fl,n)}catch{}switch(n.tag){case 5:Oe||nr(n,t);case 6:var r=De,o=pt;De=null,Vt(e,t,n),De=r,pt=o,De!==null&&(pt?(e=De,n=n.stateNode,e.nodeType===8?e.parentNode.removeChild(n):e.removeChild(n)):De.removeChild(n.stateNode));break;case 18:De!==null&&(pt?(e=De,n=n.stateNode,e.nodeType===8?Ci(e.parentNode,n):e.nodeType===1&&Ci(e,n),ro(e)):Ci(De,n.stateNode));break;case 4:r=De,o=pt,De=n.stateNode.containerInfo,pt=!0,Vt(e,t,n),De=r,pt=o;break;case 0:case 11:case 14:case 15:if(!Oe&&(r=n.updateQueue,r!==null&&(r=r.lastEffect,r!==null))){o=r=r.next;do{var l=o,i=l.destroy;l=l.tag,i!==void 0&&(l&2||l&4)&&_a(n,t,i),o=o.next}while(o!==r)}Vt(e,t,n);break;case 1:if(!Oe&&(nr(n,t),r=n.stateNode,typeof r.componentWillUnmount=="function"))try{r.props=n.memoizedProps,r.state=n.memoizedState,r.componentWillUnmount()}catch(a){me(n,t,a)}Vt(e,t,n);break;case 21:Vt(e,t,n);break;case 22:n.mode&1?(Oe=(r=Oe)||n.memoizedState!==null,Vt(e,t,n),Oe=r):Vt(e,t,n);break;default:Vt(e,t,n)}}function lc(e){var t=e.updateQueue;if(t!==null){e.updateQueue=null;var n=e.stateNode;n===null&&(n=e.stateNode=new V0),t.forEach(function(r){var o=tm.bind(null,e,r);n.has(r)||(n.add(r),r.then(o,o))})}}function dt(e,t){var n=t.deletions;if(n!==null)for(var r=0;r<n.length;r++){var o=n[r];try{var l=e,i=t,a=i;e:for(;a!==null;){switch(a.tag){case 5:De=a.stateNode,pt=!1;break e;case 3:De=a.stateNode.containerInfo,pt=!0;break e;case 4:De=a.stateNode.containerInfo,pt=!0;break e}a=a.return}if(De===null)throw Error(T(160));Of(l,i,o),De=null,pt=!1;var s=o.alternate;s!==null&&(s.return=null),o.return=null}catch(c){me(o,t,c)}}if(t.subtreeFlags&12854)for(t=t.child;t!==null;)Bf(t,e),t=t.sibling}function Bf(e,t){var n=e.alternate,r=e.flags;switch(e.tag){case 0:case 11:case 14:case 15:if(dt(t,e),kt(e),r&4){try{Kr(3,e,e.return),Yl(3,e)}catch(b){me(e,e.return,b)}try{Kr(5,e,e.return)}catch(b){me(e,e.return,b)}}break;case 1:dt(t,e),kt(e),r&512&&n!==null&&nr(n,n.return);break;case 5:if(dt(t,e),kt(e),r&512&&n!==null&&nr(n,n.return),e.flags&32){var o=e.stateNode;try{qr(o,"")}catch(b){me(e,e.return,b)}}if(r&4&&(o=e.stateNode,o!=null)){var l=e.memoizedProps,i=n!==null?n.memoizedProps:l,a=e.type,s=e.updateQueue;if(e.updateQueue=null,s!==null)try{a==="input"&&l.type==="radio"&&l.name!=null&&ld(o,l),ra(a,i);var c=ra(a,l);for(i=0;i<s.length;i+=2){var g=s[i],h=s[i+1];g==="style"?cd(o,h):g==="dangerouslySetInnerHTML"?sd(o,h):g==="children"?qr(o,h):os(o,g,h,c)}switch(a){case"input":Ji(o,l);break;case"textarea":id(o,l);break;case"select":var m=o._wrapperState.wasMultiple;o._wrapperState.wasMultiple=!!l.multiple;var x=l.value;x!=null?ir(o,!!l.multiple,x,!1):m!==!!l.multiple&&(l.defaultValue!=null?ir(o,!!l.multiple,l.defaultValue,!0):ir(o,!!l.multiple,l.multiple?[]:"",!1))}o[so]=l}catch(b){me(e,e.return,b)}}break;case 6:if(dt(t,e),kt(e),r&4){if(e.stateNode===null)throw Error(T(162));o=e.stateNode,l=e.memoizedProps;try{o.nodeValue=l}catch(b){me(e,e.return,b)}}break;case 3:if(dt(t,e),kt(e),r&4&&n!==null&&n.memoizedState.isDehydrated)try{ro(t.containerInfo)}catch(b){me(e,e.return,b)}break;case 4:dt(t,e),kt(e);break;case 13:dt(t,e),kt(e),o=e.child,o.flags&8192&&(l=o.memoizedState!==null,o.stateNode.isHidden=l,!l||o.alternate!==null&&o.alternate.memoizedState!==null||(Ps=ve())),r&4&&lc(e);break;case 22:if(g=n!==null&&n.memoizedState!==null,e.mode&1?(Oe=(c=Oe)||g,dt(t,e),Oe=c):dt(t,e),kt(e),r&8192){if(c=e.memoizedState!==null,(e.stateNode.isHidden=c)&&!g&&e.mode&1)for(I=e,g=e.child;g!==null;){for(h=I=g;I!==null;){switch(m=I,x=m.child,m.tag){case 0:case 11:case 14:case 15:Kr(4,m,m.return);break;case 1:nr(m,m.return);var k=m.stateNode;if(typeof k.componentWillUnmount=="function"){r=m,n=m.return;try{t=r,k.props=t.memoizedProps,k.state=t.memoizedState,k.componentWillUnmount()}catch(b){me(r,n,b)}}break;case 5:nr(m,m.return);break;case 22:if(m.memoizedState!==null){ac(h);continue}}x!==null?(x.return=m,I=x):ac(h)}g=g.sibling}e:for(g=null,h=e;;){if(h.tag===5){if(g===null){g=h;try{o=h.stateNode,c?(l=o.style,typeof l.setProperty=="function"?l.setProperty("display","none","important"):l.display="none"):(a=h.stateNode,s=h.memoizedProps.style,i=s!=null&&s.hasOwnProperty("display")?s.display:null,a.style.display=ud("display",i))}catch(b){me(e,e.return,b)}}}else if(h.tag===6){if(g===null)try{h.stateNode.nodeValue=c?"":h.memoizedProps}catch(b){me(e,e.return,b)}}else if((h.tag!==22&&h.tag!==23||h.memoizedState===null||h===e)&&h.child!==null){h.child.return=h,h=h.child;continue}if(h===e)break e;for(;h.sibling===null;){if(h.return===null||h.return===e)break e;g===h&&(g=null),h=h.return}g===h&&(g=null),h.sibling.return=h.return,h=h.sibling}}break;case 19:dt(t,e),kt(e),r&4&&lc(e);break;case 21:break;default:dt(t,e),kt(e)}}function kt(e){var t=e.flags;if(t&2){try{e:{for(var n=e.return;n!==null;){if(Pf(n)){var r=n;break e}n=n.return}throw Error(T(160))}switch(r.tag){case 5:var o=r.stateNode;r.flags&32&&(qr(o,""),r.flags&=-33);var l=oc(e);Ia(e,l,o);break;case 3:case 4:var i=r.stateNode.containerInfo,a=oc(e);Na(e,a,i);break;default:throw Error(T(161))}}catch(s){me(e,e.return,s)}e.flags&=-3}t&4096&&(e.flags&=-4097)}function G0(e,t,n){I=e,Mf(e)}function Mf(e,t,n){for(var r=(e.mode&1)!==0;I!==null;){var o=I,l=o.child;if(o.tag===22&&r){var i=o.memoizedState!==null||Fo;if(!i){var a=o.alternate,s=a!==null&&a.memoizedState!==null||Oe;a=Fo;var c=Oe;if(Fo=i,(Oe=s)&&!c)for(I=o;I!==null;)i=I,s=i.child,i.tag===22&&i.memoizedState!==null?sc(o):s!==null?(s.return=i,I=s):sc(o);for(;l!==null;)I=l,Mf(l),l=l.sibling;I=o,Fo=a,Oe=c}ic(e)}else o.subtreeFlags&8772&&l!==null?(l.return=o,I=l):ic(e)}}function ic(e){for(;I!==null;){var t=I;if(t.flags&8772){var n=t.alternate;try{if(t.flags&8772)switch(t.tag){case 0:case 11:case 15:Oe||Yl(5,t);break;case 1:var r=t.stateNode;if(t.flags&4&&!Oe)if(n===null)r.componentDidMount();else{var o=t.elementType===t.type?n.memoizedProps:ft(t.type,n.memoizedProps);r.componentDidUpdate(o,n.memoizedState,r.__reactInternalSnapshotBeforeUpdate)}var l=t.updateQueue;l!==null&&Uu(t,l,r);break;case 3:var i=t.updateQueue;if(i!==null){if(n=null,t.child!==null)switch(t.child.tag){case 5:n=t.child.stateNode;break;case 1:n=t.child.stateNode}Uu(t,i,n)}break;case 5:var a=t.stateNode;if(n===null&&t.flags&4){n=a;var s=t.memoizedProps;switch(t.type){case"button":case"input":case"select":case"textarea":s.autoFocus&&n.focus();break;case"img":s.src&&(n.src=s.src)}}break;case 6:break;case 4:break;case 12:break;case 13:if(t.memoizedState===null){var c=t.alternate;if(c!==null){var g=c.memoizedState;if(g!==null){var h=g.dehydrated;h!==null&&ro(h)}}}break;case 19:case 17:case 21:case 22:case 23:case 25:break;default:throw Error(T(163))}Oe||t.flags&512&&Da(t)}catch(m){me(t,t.return,m)}}if(t===e){I=null;break}if(n=t.sibling,n!==null){n.return=t.return,I=n;break}I=t.return}}function ac(e){for(;I!==null;){var t=I;if(t===e){I=null;break}var n=t.sibling;if(n!==null){n.return=t.return,I=n;break}I=t.return}}function sc(e){for(;I!==null;){var t=I;try{switch(t.tag){case 0:case 11:case 15:var n=t.return;try{Yl(4,t)}catch(s){me(t,n,s)}break;case 1:var r=t.stateNode;if(typeof r.componentDidMount=="function"){var o=t.return;try{r.componentDidMount()}catch(s){me(t,o,s)}}var l=t.return;try{Da(t)}catch(s){me(t,l,s)}break;case 5:var i=t.return;try{Da(t)}catch(s){me(t,i,s)}}}catch(s){me(t,t.return,s)}if(t===e){I=null;break}var a=t.sibling;if(a!==null){a.return=t.return,I=a;break}I=t.return}}var K0=Math.ceil,Dl=Ht.ReactCurrentDispatcher,zs=Ht.ReactCurrentOwner,at=Ht.ReactCurrentBatchConfig,X=0,je=null,we=null,Ne=0,Xe=0,rr=mn(0),$e=0,mo=null,In=0,Xl=0,Rs=0,Yr=null,Qe=null,Ps=0,yr=1/0,Nt=null,Nl=!1,La=null,ln=null,Ho=!1,qt=null,Il=0,Xr=0,za=null,ol=-1,ll=0;function Fe(){return X&6?ve():ol!==-1?ol:ol=ve()}function an(e){return e.mode&1?X&2&&Ne!==0?Ne&-Ne:D0.transition!==null?(ll===0&&(ll=bd()),ll):(e=te,e!==0||(e=window.event,e=e===void 0?16:jd(e.type)),e):1}function gt(e,t,n,r){if(50<Xr)throw Xr=0,za=null,Error(T(185));wo(e,n,r),(!(X&2)||e!==je)&&(e===je&&(!(X&2)&&(Xl|=n),$e===4&&Zt(e,Ne)),Ke(e,r),n===1&&X===0&&!(t.mode&1)&&(yr=ve()+500,Wl&&gn()))}function Ke(e,t){var n=e.callbackNode;Dh(e,t);var r=gl(e,e===je?Ne:0);if(r===0)n!==null&&vu(n),e.callbackNode=null,e.callbackPriority=0;else if(t=r&-r,e.callbackPriority!==t){if(n!=null&&vu(n),t===1)e.tag===0?_0(uc.bind(null,e)):Kd(uc.bind(null,e)),A0(function(){!(X&6)&&gn()}),n=null;else{switch(Sd(r)){case 1:n=us;break;case 4:n=wd;break;case 16:n=ml;break;case 536870912:n=kd;break;default:n=ml}n=Kf(n,Ff.bind(null,e))}e.callbackPriority=t,e.callbackNode=n}}function Ff(e,t){if(ol=-1,ll=0,X&6)throw Error(T(327));var n=e.callbackNode;if(dr()&&e.callbackNode!==n)return null;var r=gl(e,e===je?Ne:0);if(r===0)return null;if(r&30||r&e.expiredLanes||t)t=Ll(e,r);else{t=r;var o=X;X|=2;var l=Uf();(je!==e||Ne!==t)&&(Nt=null,yr=ve()+500,Cn(e,t));do try{Z0();break}catch(a){Hf(e,a)}while(!0);bs(),Dl.current=l,X=o,we!==null?t=0:(je=null,Ne=0,t=$e)}if(t!==0){if(t===2&&(o=sa(e),o!==0&&(r=o,t=Ra(e,o))),t===1)throw n=mo,Cn(e,0),Zt(e,r),Ke(e,ve()),n;if(t===6)Zt(e,r);else{if(o=e.current.alternate,!(r&30)&&!Y0(o)&&(t=Ll(e,r),t===2&&(l=sa(e),l!==0&&(r=l,t=Ra(e,l))),t===1))throw n=mo,Cn(e,0),Zt(e,r),Ke(e,ve()),n;switch(e.finishedWork=o,e.finishedLanes=r,t){case 0:case 1:throw Error(T(345));case 2:kn(e,Qe,Nt);break;case 3:if(Zt(e,r),(r&130023424)===r&&(t=Ps+500-ve(),10<t)){if(gl(e,0)!==0)break;if(o=e.suspendedLanes,(o&r)!==r){Fe(),e.pingedLanes|=e.suspendedLanes&o;break}e.timeoutHandle=ga(kn.bind(null,e,Qe,Nt),t);break}kn(e,Qe,Nt);break;case 4:if(Zt(e,r),(r&4194240)===r)break;for(t=e.eventTimes,o=-1;0<r;){var i=31-mt(r);l=1<<i,i=t[i],i>o&&(o=i),r&=~l}if(r=o,r=ve()-r,r=(120>r?120:480>r?480:1080>r?1080:1920>r?1920:3e3>r?3e3:4320>r?4320:1960*K0(r/1960))-r,10<r){e.timeoutHandle=ga(kn.bind(null,e,Qe,Nt),r);break}kn(e,Qe,Nt);break;case 5:kn(e,Qe,Nt);break;default:throw Error(T(329))}}}return Ke(e,ve()),e.callbackNode===n?Ff.bind(null,e):null}function Ra(e,t){var n=Yr;return e.current.memoizedState.isDehydrated&&(Cn(e,t).flags|=256),e=Ll(e,t),e!==2&&(t=Qe,Qe=n,t!==null&&Pa(t)),e}function Pa(e){Qe===null?Qe=e:Qe.push.apply(Qe,e)}function Y0(e){for(var t=e;;){if(t.flags&16384){var n=t.updateQueue;if(n!==null&&(n=n.stores,n!==null))for(var r=0;r<n.length;r++){var o=n[r],l=o.getSnapshot;o=o.value;try{if(!yt(l(),o))return!1}catch{return!1}}}if(n=t.child,t.subtreeFlags&16384&&n!==null)n.return=t,t=n;else{if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return!0;t=t.return}t.sibling.return=t.return,t=t.sibling}}return!0}function Zt(e,t){for(t&=~Rs,t&=~Xl,e.suspendedLanes|=t,e.pingedLanes&=~t,e=e.expirationTimes;0<t;){var n=31-mt(t),r=1<<n;e[n]=-1,t&=~r}}function uc(e){if(X&6)throw Error(T(327));dr();var t=gl(e,0);if(!(t&1))return Ke(e,ve()),null;var n=Ll(e,t);if(e.tag!==0&&n===2){var r=sa(e);r!==0&&(t=r,n=Ra(e,r))}if(n===1)throw n=mo,Cn(e,0),Zt(e,t),Ke(e,ve()),n;if(n===6)throw Error(T(345));return e.finishedWork=e.current.alternate,e.finishedLanes=t,kn(e,Qe,Nt),Ke(e,ve()),null}function Os(e,t){var n=X;X|=1;try{return e(t)}finally{X=n,X===0&&(yr=ve()+500,Wl&&gn())}}function Ln(e){qt!==null&&qt.tag===0&&!(X&6)&&dr();var t=X;X|=1;var n=at.transition,r=te;try{if(at.transition=null,te=1,e)return e()}finally{te=r,at.transition=n,X=t,!(X&6)&&gn()}}function Bs(){Xe=rr.current,le(rr)}function Cn(e,t){e.finishedWork=null,e.finishedLanes=0;var n=e.timeoutHandle;if(n!==-1&&(e.timeoutHandle=-1,$0(n)),we!==null)for(n=we.return;n!==null;){var r=n;switch(xs(r),r.tag){case 1:r=r.type.childContextTypes,r!=null&&kl();break;case 3:gr(),le(We),le(Be),Ts();break;case 5:Cs(r);break;case 4:gr();break;case 13:le(ce);break;case 19:le(ce);break;case 10:Ss(r.type._context);break;case 22:case 23:Bs()}n=n.return}if(je=e,we=e=sn(e.current,null),Ne=Xe=t,$e=0,mo=null,Rs=Xl=In=0,Qe=Yr=null,Sn!==null){for(t=0;t<Sn.length;t++)if(n=Sn[t],r=n.interleaved,r!==null){n.interleaved=null;var o=r.next,l=n.pending;if(l!==null){var i=l.next;l.next=o,r.next=i}n.pending=r}Sn=null}return e}function Hf(e,t){do{var n=we;try{if(bs(),tl.current=_l,jl){for(var r=de.memoizedState;r!==null;){var o=r.queue;o!==null&&(o.pending=null),r=r.next}jl=!1}if(Nn=0,Ae=Ee=de=null,Gr=!1,fo=0,zs.current=null,n===null||n.return===null){$e=1,mo=t,we=null;break}e:{var l=e,i=n.return,a=n,s=t;if(t=Ne,a.flags|=32768,s!==null&&typeof s=="object"&&typeof s.then=="function"){var c=s,g=a,h=g.tag;if(!(g.mode&1)&&(h===0||h===11||h===15)){var m=g.alternate;m?(g.updateQueue=m.updateQueue,g.memoizedState=m.memoizedState,g.lanes=m.lanes):(g.updateQueue=null,g.memoizedState=null)}var x=Xu(i);if(x!==null){x.flags&=-257,Zu(x,i,a,l,t),x.mode&1&&Yu(l,c,t),t=x,s=c;var k=t.updateQueue;if(k===null){var b=new Set;b.add(s),t.updateQueue=b}else k.add(s);break e}else{if(!(t&1)){Yu(l,c,t),Ms();break e}s=Error(T(426))}}else if(ae&&a.mode&1){var _=Xu(i);if(_!==null){!(_.flags&65536)&&(_.flags|=256),Zu(_,i,a,l,t),ws(vr(s,a));break e}}l=s=vr(s,a),$e!==4&&($e=2),Yr===null?Yr=[l]:Yr.push(l),l=i;do{switch(l.tag){case 3:l.flags|=65536,t&=-t,l.lanes|=t;var f=$f(l,s,t);Hu(l,f);break e;case 1:a=s;var d=l.type,p=l.stateNode;if(!(l.flags&128)&&(typeof d.getDerivedStateFromError=="function"||p!==null&&typeof p.componentDidCatch=="function"&&(ln===null||!ln.has(p)))){l.flags|=65536,t&=-t,l.lanes|=t;var v=Af(l,a,t);Hu(l,v);break e}}l=l.return}while(l!==null)}Vf(n)}catch(E){t=E,we===n&&n!==null&&(we=n=n.return);continue}break}while(!0)}function Uf(){var e=Dl.current;return Dl.current=_l,e===null?_l:e}function Ms(){($e===0||$e===3||$e===2)&&($e=4),je===null||!(In&268435455)&&!(Xl&268435455)||Zt(je,Ne)}function Ll(e,t){var n=X;X|=2;var r=Uf();(je!==e||Ne!==t)&&(Nt=null,Cn(e,t));do try{X0();break}catch(o){Hf(e,o)}while(!0);if(bs(),X=n,Dl.current=r,we!==null)throw Error(T(261));return je=null,Ne=0,$e}function X0(){for(;we!==null;)Qf(we)}function Z0(){for(;we!==null&&!bh();)Qf(we)}function Qf(e){var t=Gf(e.alternate,e,Xe);e.memoizedProps=e.pendingProps,t===null?Vf(e):we=t,zs.current=null}function Vf(e){var t=e;do{var n=t.alternate;if(e=t.return,t.flags&32768){if(n=Q0(n,t),n!==null){n.flags&=32767,we=n;return}if(e!==null)e.flags|=32768,e.subtreeFlags=0,e.deletions=null;else{$e=6,we=null;return}}else if(n=U0(n,t,Xe),n!==null){we=n;return}if(t=t.sibling,t!==null){we=t;return}we=t=e}while(t!==null);$e===0&&($e=5)}function kn(e,t,n){var r=te,o=at.transition;try{at.transition=null,te=1,J0(e,t,n,r)}finally{at.transition=o,te=r}return null}function J0(e,t,n,r){do dr();while(qt!==null);if(X&6)throw Error(T(327));n=e.finishedWork;var o=e.finishedLanes;if(n===null)return null;if(e.finishedWork=null,e.finishedLanes=0,n===e.current)throw Error(T(177));e.callbackNode=null,e.callbackPriority=0;var l=n.lanes|n.childLanes;if(Nh(e,l),e===je&&(we=je=null,Ne=0),!(n.subtreeFlags&2064)&&!(n.flags&2064)||Ho||(Ho=!0,Kf(ml,function(){return dr(),null})),l=(n.flags&15990)!==0,n.subtreeFlags&15990||l){l=at.transition,at.transition=null;var i=te;te=1;var a=X;X|=4,zs.current=null,W0(e,n),Bf(n,e),y0(ha),vl=!!pa,ha=pa=null,e.current=n,G0(n),Sh(),X=a,te=i,at.transition=l}else e.current=n;if(Ho&&(Ho=!1,qt=e,Il=o),l=e.pendingLanes,l===0&&(ln=null),Ah(n.stateNode),Ke(e,ve()),t!==null)for(r=e.onRecoverableError,n=0;n<t.length;n++)o=t[n],r(o.value,{componentStack:o.stack,digest:o.digest});if(Nl)throw Nl=!1,e=La,La=null,e;return Il&1&&e.tag!==0&&dr(),l=e.pendingLanes,l&1?e===za?Xr++:(Xr=0,za=e):Xr=0,gn(),null}function dr(){if(qt!==null){var e=Sd(Il),t=at.transition,n=te;try{if(at.transition=null,te=16>e?16:e,qt===null)var r=!1;else{if(e=qt,qt=null,Il=0,X&6)throw Error(T(331));var o=X;for(X|=4,I=e.current;I!==null;){var l=I,i=l.child;if(I.flags&16){var a=l.deletions;if(a!==null){for(var s=0;s<a.length;s++){var c=a[s];for(I=c;I!==null;){var g=I;switch(g.tag){case 0:case 11:case 15:Kr(8,g,l)}var h=g.child;if(h!==null)h.return=g,I=h;else for(;I!==null;){g=I;var m=g.sibling,x=g.return;if(Rf(g),g===c){I=null;break}if(m!==null){m.return=x,I=m;break}I=x}}}var k=l.alternate;if(k!==null){var b=k.child;if(b!==null){k.child=null;do{var _=b.sibling;b.sibling=null,b=_}while(b!==null)}}I=l}}if(l.subtreeFlags&2064&&i!==null)i.return=l,I=i;else e:for(;I!==null;){if(l=I,l.flags&2048)switch(l.tag){case 0:case 11:case 15:Kr(9,l,l.return)}var f=l.sibling;if(f!==null){f.return=l.return,I=f;break e}I=l.return}}var d=e.current;for(I=d;I!==null;){i=I;var p=i.child;if(i.subtreeFlags&2064&&p!==null)p.return=i,I=p;else e:for(i=d;I!==null;){if(a=I,a.flags&2048)try{switch(a.tag){case 0:case 11:case 15:Yl(9,a)}}catch(E){me(a,a.return,E)}if(a===i){I=null;break e}var v=a.sibling;if(v!==null){v.return=a.return,I=v;break e}I=a.return}}if(X=o,gn(),At&&typeof At.onPostCommitFiberRoot=="function")try{At.onPostCommitFiberRoot(Fl,e)}catch{}r=!0}return r}finally{te=n,at.transition=t}}return!1}function cc(e,t,n){t=vr(n,t),t=$f(e,t,1),e=on(e,t,1),t=Fe(),e!==null&&(wo(e,1,t),Ke(e,t))}function me(e,t,n){if(e.tag===3)cc(e,e,n);else for(;t!==null;){if(t.tag===3){cc(t,e,n);break}else if(t.tag===1){var r=t.stateNode;if(typeof t.type.getDerivedStateFromError=="function"||typeof r.componentDidCatch=="function"&&(ln===null||!ln.has(r))){e=vr(n,e),e=Af(t,e,1),t=on(t,e,1),e=Fe(),t!==null&&(wo(t,1,e),Ke(t,e));break}}t=t.return}}function q0(e,t,n){var r=e.pingCache;r!==null&&r.delete(t),t=Fe(),e.pingedLanes|=e.suspendedLanes&n,je===e&&(Ne&n)===n&&($e===4||$e===3&&(Ne&130023424)===Ne&&500>ve()-Ps?Cn(e,0):Rs|=n),Ke(e,t)}function Wf(e,t){t===0&&(e.mode&1?(t=No,No<<=1,!(No&130023424)&&(No=4194304)):t=1);var n=Fe();e=Mt(e,t),e!==null&&(wo(e,t,n),Ke(e,n))}function em(e){var t=e.memoizedState,n=0;t!==null&&(n=t.retryLane),Wf(e,n)}function tm(e,t){var n=0;switch(e.tag){case 13:var r=e.stateNode,o=e.memoizedState;o!==null&&(n=o.retryLane);break;case 19:r=e.stateNode;break;default:throw Error(T(314))}r!==null&&r.delete(t),Wf(e,n)}var Gf;Gf=function(e,t,n){if(e!==null)if(e.memoizedProps!==t.pendingProps||We.current)Ve=!0;else{if(!(e.lanes&n)&&!(t.flags&128))return Ve=!1,H0(e,t,n);Ve=!!(e.flags&131072)}else Ve=!1,ae&&t.flags&1048576&&Yd(t,El,t.index);switch(t.lanes=0,t.tag){case 2:var r=t.type;rl(e,t),e=t.pendingProps;var o=pr(t,Be.current);cr(t,n),o=_s(null,t,r,e,o,n);var l=Ds();return t.flags|=1,typeof o=="object"&&o!==null&&typeof o.render=="function"&&o.$$typeof===void 0?(t.tag=1,t.memoizedState=null,t.updateQueue=null,Ge(r)?(l=!0,bl(t)):l=!1,t.memoizedState=o.state!==null&&o.state!==void 0?o.state:null,$s(t),o.updater=Gl,t.stateNode=o,o._reactInternals=t,Sa(t,r,e,n),t=Aa(null,t,r,!0,l,n)):(t.tag=0,ae&&l&&ys(t),Me(null,t,o,n),t=t.child),t;case 16:r=t.elementType;e:{switch(rl(e,t),e=t.pendingProps,o=r._init,r=o(r._payload),t.type=r,o=t.tag=rm(r),e=ft(r,e),o){case 0:t=$a(null,t,r,e,n);break e;case 1:t=ec(null,t,r,e,n);break e;case 11:t=Ju(null,t,r,e,n);break e;case 14:t=qu(null,t,r,ft(r.type,e),n);break e}throw Error(T(306,r,""))}return t;case 0:return r=t.type,o=t.pendingProps,o=t.elementType===r?o:ft(r,o),$a(e,t,r,o,n);case 1:return r=t.type,o=t.pendingProps,o=t.elementType===r?o:ft(r,o),ec(e,t,r,o,n);case 3:e:{if(_f(t),e===null)throw Error(T(387));r=t.pendingProps,l=t.memoizedState,o=l.element,qd(e,t),Cl(t,r,null,n);var i=t.memoizedState;if(r=i.element,l.isDehydrated)if(l={element:r,isDehydrated:!1,cache:i.cache,pendingSuspenseBoundaries:i.pendingSuspenseBoundaries,transitions:i.transitions},t.updateQueue.baseState=l,t.memoizedState=l,t.flags&256){o=vr(Error(T(423)),t),t=tc(e,t,r,n,o);break e}else if(r!==o){o=vr(Error(T(424)),t),t=tc(e,t,r,n,o);break e}else for(Ze=rn(t.stateNode.containerInfo.firstChild),Je=t,ae=!0,ht=null,n=rf(t,null,r,n),t.child=n;n;)n.flags=n.flags&-3|4096,n=n.sibling;else{if(hr(),r===o){t=Ft(e,t,n);break e}Me(e,t,r,n)}t=t.child}return t;case 5:return of(t),e===null&&wa(t),r=t.type,o=t.pendingProps,l=e!==null?e.memoizedProps:null,i=o.children,ma(r,o)?i=null:l!==null&&ma(r,l)&&(t.flags|=32),jf(e,t),Me(e,t,i,n),t.child;case 6:return e===null&&wa(t),null;case 13:return Df(e,t,n);case 4:return As(t,t.stateNode.containerInfo),r=t.pendingProps,e===null?t.child=mr(t,null,r,n):Me(e,t,r,n),t.child;case 11:return r=t.type,o=t.pendingProps,o=t.elementType===r?o:ft(r,o),Ju(e,t,r,o,n);case 7:return Me(e,t,t.pendingProps,n),t.child;case 8:return Me(e,t,t.pendingProps.children,n),t.child;case 12:return Me(e,t,t.pendingProps.children,n),t.child;case 10:e:{if(r=t.type._context,o=t.pendingProps,l=t.memoizedProps,i=o.value,ne($l,r._currentValue),r._currentValue=i,l!==null)if(yt(l.value,i)){if(l.children===o.children&&!We.current){t=Ft(e,t,n);break e}}else for(l=t.child,l!==null&&(l.return=t);l!==null;){var a=l.dependencies;if(a!==null){i=l.child;for(var s=a.firstContext;s!==null;){if(s.context===r){if(l.tag===1){s=Pt(-1,n&-n),s.tag=2;var c=l.updateQueue;if(c!==null){c=c.shared;var g=c.pending;g===null?s.next=s:(s.next=g.next,g.next=s),c.pending=s}}l.lanes|=n,s=l.alternate,s!==null&&(s.lanes|=n),ka(l.return,n,t),a.lanes|=n;break}s=s.next}}else if(l.tag===10)i=l.type===t.type?null:l.child;else if(l.tag===18){if(i=l.return,i===null)throw Error(T(341));i.lanes|=n,a=i.alternate,a!==null&&(a.lanes|=n),ka(i,n,t),i=l.sibling}else i=l.child;if(i!==null)i.return=l;else for(i=l;i!==null;){if(i===t){i=null;break}if(l=i.sibling,l!==null){l.return=i.return,i=l;break}i=i.return}l=i}Me(e,t,o.children,n),t=t.child}return t;case 9:return o=t.type,r=t.pendingProps.children,cr(t,n),o=st(o),r=r(o),t.flags|=1,Me(e,t,r,n),t.child;case 14:return r=t.type,o=ft(r,t.pendingProps),o=ft(r.type,o),qu(e,t,r,o,n);case 15:return Cf(e,t,t.type,t.pendingProps,n);case 17:return r=t.type,o=t.pendingProps,o=t.elementType===r?o:ft(r,o),rl(e,t),t.tag=1,Ge(r)?(e=!0,bl(t)):e=!1,cr(t,n),tf(t,r,o),Sa(t,r,o,n),Aa(null,t,r,!0,e,n);case 19:return Nf(e,t,n);case 22:return Tf(e,t,n)}throw Error(T(156,t.tag))};function Kf(e,t){return xd(e,t)}function nm(e,t,n,r){this.tag=e,this.key=n,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=t,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=r,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function it(e,t,n,r){return new nm(e,t,n,r)}function Fs(e){return e=e.prototype,!(!e||!e.isReactComponent)}function rm(e){if(typeof e=="function")return Fs(e)?1:0;if(e!=null){if(e=e.$$typeof,e===is)return 11;if(e===as)return 14}return 2}function sn(e,t){var n=e.alternate;return n===null?(n=it(e.tag,t,e.key,e.mode),n.elementType=e.elementType,n.type=e.type,n.stateNode=e.stateNode,n.alternate=e,e.alternate=n):(n.pendingProps=t,n.type=e.type,n.flags=0,n.subtreeFlags=0,n.deletions=null),n.flags=e.flags&14680064,n.childLanes=e.childLanes,n.lanes=e.lanes,n.child=e.child,n.memoizedProps=e.memoizedProps,n.memoizedState=e.memoizedState,n.updateQueue=e.updateQueue,t=e.dependencies,n.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext},n.sibling=e.sibling,n.index=e.index,n.ref=e.ref,n}function il(e,t,n,r,o,l){var i=2;if(r=e,typeof e=="function")Fs(e)&&(i=1);else if(typeof e=="string")i=5;else e:switch(e){case Gn:return Tn(n.children,o,l,t);case ls:i=8,o|=8;break;case Gi:return e=it(12,n,t,o|2),e.elementType=Gi,e.lanes=l,e;case Ki:return e=it(13,n,t,o),e.elementType=Ki,e.lanes=l,e;case Yi:return e=it(19,n,t,o),e.elementType=Yi,e.lanes=l,e;case nd:return Zl(n,o,l,t);default:if(typeof e=="object"&&e!==null)switch(e.$$typeof){case ed:i=10;break e;case td:i=9;break e;case is:i=11;break e;case as:i=14;break e;case Kt:i=16,r=null;break e}throw Error(T(130,e==null?e:typeof e,""))}return t=it(i,n,t,o),t.elementType=e,t.type=r,t.lanes=l,t}function Tn(e,t,n,r){return e=it(7,e,r,t),e.lanes=n,e}function Zl(e,t,n,r){return e=it(22,e,r,t),e.elementType=nd,e.lanes=n,e.stateNode={isHidden:!1},e}function zi(e,t,n){return e=it(6,e,null,t),e.lanes=n,e}function Ri(e,t,n){return t=it(4,e.children!==null?e.children:[],e.key,t),t.lanes=n,t.stateNode={containerInfo:e.containerInfo,pendingChildren:null,implementation:e.implementation},t}function om(e,t,n,r,o){this.tag=t,this.containerInfo=e,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=gi(0),this.expirationTimes=gi(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=gi(0),this.identifierPrefix=r,this.onRecoverableError=o,this.mutableSourceEagerHydrationData=null}function Hs(e,t,n,r,o,l,i,a,s){return e=new om(e,t,n,a,s),t===1?(t=1,l===!0&&(t|=8)):t=0,l=it(3,null,null,t),e.current=l,l.stateNode=e,l.memoizedState={element:r,isDehydrated:n,cache:null,transitions:null,pendingSuspenseBoundaries:null},$s(l),e}function lm(e,t,n){var r=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:Wn,key:r==null?null:""+r,children:e,containerInfo:t,implementation:n}}function Yf(e){if(!e)return dn;e=e._reactInternals;e:{if(Mn(e)!==e||e.tag!==1)throw Error(T(170));var t=e;do{switch(t.tag){case 3:t=t.stateNode.context;break e;case 1:if(Ge(t.type)){t=t.stateNode.__reactInternalMemoizedMergedChildContext;break e}}t=t.return}while(t!==null);throw Error(T(171))}if(e.tag===1){var n=e.type;if(Ge(n))return Gd(e,n,t)}return t}function Xf(e,t,n,r,o,l,i,a,s){return e=Hs(n,r,!0,e,o,l,i,a,s),e.context=Yf(null),n=e.current,r=Fe(),o=an(n),l=Pt(r,o),l.callback=t??null,on(n,l,o),e.current.lanes=o,wo(e,o,r),Ke(e,r),e}function Jl(e,t,n,r){var o=t.current,l=Fe(),i=an(o);return n=Yf(n),t.context===null?t.context=n:t.pendingContext=n,t=Pt(l,i),t.payload={element:e},r=r===void 0?null:r,r!==null&&(t.callback=r),e=on(o,t,i),e!==null&&(gt(e,o,i,l),el(e,o,i)),i}function zl(e){if(e=e.current,!e.child)return null;switch(e.child.tag){case 5:return e.child.stateNode;default:return e.child.stateNode}}function dc(e,t){if(e=e.memoizedState,e!==null&&e.dehydrated!==null){var n=e.retryLane;e.retryLane=n!==0&&n<t?n:t}}function Us(e,t){dc(e,t),(e=e.alternate)&&dc(e,t)}function im(){return null}var Zf=typeof reportError=="function"?reportError:function(e){console.error(e)};function Qs(e){this._internalRoot=e}ql.prototype.render=Qs.prototype.render=function(e){var t=this._internalRoot;if(t===null)throw Error(T(409));Jl(e,t,null,null)};ql.prototype.unmount=Qs.prototype.unmount=function(){var e=this._internalRoot;if(e!==null){this._internalRoot=null;var t=e.containerInfo;Ln(function(){Jl(null,e,null,null)}),t[Bt]=null}};function ql(e){this._internalRoot=e}ql.prototype.unstable_scheduleHydration=function(e){if(e){var t=Ad();e={blockedOn:null,target:e,priority:t};for(var n=0;n<Xt.length&&t!==0&&t<Xt[n].priority;n++);Xt.splice(n,0,e),n===0&&Td(e)}};function Vs(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11)}function ei(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11&&(e.nodeType!==8||e.nodeValue!==" react-mount-point-unstable "))}function fc(){}function am(e,t,n,r,o){if(o){if(typeof r=="function"){var l=r;r=function(){var c=zl(i);l.call(c)}}var i=Xf(t,r,e,0,null,!1,!1,"",fc);return e._reactRootContainer=i,e[Bt]=i.current,io(e.nodeType===8?e.parentNode:e),Ln(),i}for(;o=e.lastChild;)e.removeChild(o);if(typeof r=="function"){var a=r;r=function(){var c=zl(s);a.call(c)}}var s=Hs(e,0,!1,null,null,!1,!1,"",fc);return e._reactRootContainer=s,e[Bt]=s.current,io(e.nodeType===8?e.parentNode:e),Ln(function(){Jl(t,s,n,r)}),s}function ti(e,t,n,r,o){var l=n._reactRootContainer;if(l){var i=l;if(typeof o=="function"){var a=o;o=function(){var s=zl(i);a.call(s)}}Jl(t,i,e,o)}else i=am(n,t,e,o,r);return zl(i)}Ed=function(e){switch(e.tag){case 3:var t=e.stateNode;if(t.current.memoizedState.isDehydrated){var n=Br(t.pendingLanes);n!==0&&(cs(t,n|1),Ke(t,ve()),!(X&6)&&(yr=ve()+500,gn()))}break;case 13:Ln(function(){var r=Mt(e,1);if(r!==null){var o=Fe();gt(r,e,1,o)}}),Us(e,1)}};ds=function(e){if(e.tag===13){var t=Mt(e,134217728);if(t!==null){var n=Fe();gt(t,e,134217728,n)}Us(e,134217728)}};$d=function(e){if(e.tag===13){var t=an(e),n=Mt(e,t);if(n!==null){var r=Fe();gt(n,e,t,r)}Us(e,t)}};Ad=function(){return te};Cd=function(e,t){var n=te;try{return te=e,t()}finally{te=n}};la=function(e,t,n){switch(t){case"input":if(Ji(e,n),t=n.name,n.type==="radio"&&t!=null){for(n=e;n.parentNode;)n=n.parentNode;for(n=n.querySelectorAll("input[name="+JSON.stringify(""+t)+'][type="radio"]'),t=0;t<n.length;t++){var r=n[t];if(r!==e&&r.form===e.form){var o=Vl(r);if(!o)throw Error(T(90));od(r),Ji(r,o)}}}break;case"textarea":id(e,n);break;case"select":t=n.value,t!=null&&ir(e,!!n.multiple,t,!1)}};pd=Os;hd=Ln;var sm={usingClientEntryPoint:!1,Events:[bo,Zn,Vl,dd,fd,Os]},Rr={findFiberByHostInstance:bn,bundleType:0,version:"18.2.0",rendererPackageName:"react-dom"},um={bundleType:Rr.bundleType,version:Rr.version,rendererPackageName:Rr.rendererPackageName,rendererConfig:Rr.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:Ht.ReactCurrentDispatcher,findHostInstanceByFiber:function(e){return e=vd(e),e===null?null:e.stateNode},findFiberByHostInstance:Rr.findFiberByHostInstance||im,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.2.0-next-9e3b772b8-20220608"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var Uo=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!Uo.isDisabled&&Uo.supportsFiber)try{Fl=Uo.inject(um),At=Uo}catch{}}et.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=sm;et.createPortal=function(e,t){var n=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!Vs(t))throw Error(T(200));return lm(e,t,null,n)};et.createRoot=function(e,t){if(!Vs(e))throw Error(T(299));var n=!1,r="",o=Zf;return t!=null&&(t.unstable_strictMode===!0&&(n=!0),t.identifierPrefix!==void 0&&(r=t.identifierPrefix),t.onRecoverableError!==void 0&&(o=t.onRecoverableError)),t=Hs(e,1,!1,null,null,n,!1,r,o),e[Bt]=t.current,io(e.nodeType===8?e.parentNode:e),new Qs(t)};et.findDOMNode=function(e){if(e==null)return null;if(e.nodeType===1)return e;var t=e._reactInternals;if(t===void 0)throw typeof e.render=="function"?Error(T(188)):(e=Object.keys(e).join(","),Error(T(268,e)));return e=vd(t),e=e===null?null:e.stateNode,e};et.flushSync=function(e){return Ln(e)};et.hydrate=function(e,t,n){if(!ei(t))throw Error(T(200));return ti(null,e,t,!0,n)};et.hydrateRoot=function(e,t,n){if(!Vs(e))throw Error(T(405));var r=n!=null&&n.hydratedSources||null,o=!1,l="",i=Zf;if(n!=null&&(n.unstable_strictMode===!0&&(o=!0),n.identifierPrefix!==void 0&&(l=n.identifierPrefix),n.onRecoverableError!==void 0&&(i=n.onRecoverableError)),t=Xf(t,null,e,1,n??null,o,!1,l,i),e[Bt]=t.current,io(e),r)for(e=0;e<r.length;e++)n=r[e],o=n._getVersion,o=o(n._source),t.mutableSourceEagerHydrationData==null?t.mutableSourceEagerHydrationData=[n,o]:t.mutableSourceEagerHydrationData.push(n,o);return new ql(t)};et.render=function(e,t,n){if(!ei(t))throw Error(T(200));return ti(null,e,t,!1,n)};et.unmountComponentAtNode=function(e){if(!ei(e))throw Error(T(40));return e._reactRootContainer?(Ln(function(){ti(null,null,e,!1,function(){e._reactRootContainer=null,e[Bt]=null})}),!0):!1};et.unstable_batchedUpdates=Os;et.unstable_renderSubtreeIntoContainer=function(e,t,n,r){if(!ei(n))throw Error(T(200));if(e==null||e._reactInternals===void 0)throw Error(T(38));return ti(e,t,n,!1,r)};et.version="18.2.0-next-9e3b772b8-20220608";function Jf(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(Jf)}catch(e){console.error(e)}}Jf(),Yc.exports=et;var qf=Yc.exports,pc=qf;Vi.createRoot=pc.createRoot,Vi.hydrateRoot=pc.hydrateRoot;var Te=function(){return Te=Object.assign||function(t){for(var n,r=1,o=arguments.length;r<o;r++){n=arguments[r];for(var l in n)Object.prototype.hasOwnProperty.call(n,l)&&(t[l]=n[l])}return t},Te.apply(this,arguments)};function go(e,t,n){if(n||arguments.length===2)for(var r=0,o=t.length,l;r<o;r++)(l||!(r in t))&&(l||(l=Array.prototype.slice.call(t,0,r)),l[r]=t[r]);return e.concat(l||Array.prototype.slice.call(t))}var oe="-ms-",Zr="-moz-",Z="-webkit-",ep="comm",ni="rule",Ws="decl",cm="@import",tp="@keyframes",dm="@layer",fm=Math.abs,Gs=String.fromCharCode,Oa=Object.assign;function pm(e,t){return Ce(e,0)^45?(((t<<2^Ce(e,0))<<2^Ce(e,1))<<2^Ce(e,2))<<2^Ce(e,3):0}function np(e){return e.trim()}function It(e,t){return(e=t.exec(e))?e[0]:e}function V(e,t,n){return e.replace(t,n)}function al(e,t){return e.indexOf(t)}function Ce(e,t){return e.charCodeAt(t)|0}function xr(e,t,n){return e.slice(t,n)}function Et(e){return e.length}function rp(e){return e.length}function Fr(e,t){return t.push(e),e}function hm(e,t){return e.map(t).join("")}function hc(e,t){return e.filter(function(n){return!It(n,t)})}var ri=1,wr=1,op=0,ct=0,xe=0,Cr="";function oi(e,t,n,r,o,l,i,a){return{value:e,root:t,parent:n,type:r,props:o,children:l,line:ri,column:wr,length:i,return:"",siblings:a}}function Gt(e,t){return Oa(oi("",null,null,"",null,null,0,e.siblings),e,{length:-e.length},t)}function Un(e){for(;e.root;)e=Gt(e.root,{children:[e]});Fr(e,e.siblings)}function mm(){return xe}function gm(){return xe=ct>0?Ce(Cr,--ct):0,wr--,xe===10&&(wr=1,ri--),xe}function vt(){return xe=ct<op?Ce(Cr,ct++):0,wr++,xe===10&&(wr=1,ri++),xe}function jn(){return Ce(Cr,ct)}function sl(){return ct}function li(e,t){return xr(Cr,e,t)}function Ba(e){switch(e){case 0:case 9:case 10:case 13:case 32:return 5;case 33:case 43:case 44:case 47:case 62:case 64:case 126:case 59:case 123:case 125:return 4;case 58:return 3;case 34:case 39:case 40:case 91:return 2;case 41:case 93:return 1}return 0}function vm(e){return ri=wr=1,op=Et(Cr=e),ct=0,[]}function ym(e){return Cr="",e}function Pi(e){return np(li(ct-1,Ma(e===91?e+2:e===40?e+1:e)))}function xm(e){for(;(xe=jn())&&xe<33;)vt();return Ba(e)>2||Ba(xe)>3?"":" "}function wm(e,t){for(;--t&&vt()&&!(xe<48||xe>102||xe>57&&xe<65||xe>70&&xe<97););return li(e,sl()+(t<6&&jn()==32&&vt()==32))}function Ma(e){for(;vt();)switch(xe){case e:return ct;case 34:case 39:e!==34&&e!==39&&Ma(xe);break;case 40:e===41&&Ma(e);break;case 92:vt();break}return ct}function km(e,t){for(;vt()&&e+xe!==57;)if(e+xe===84&&jn()===47)break;return"/*"+li(t,ct-1)+"*"+Gs(e===47?e:vt())}function bm(e){for(;!Ba(jn());)vt();return li(e,ct)}function Sm(e){return ym(ul("",null,null,null,[""],e=vm(e),0,[0],e))}function ul(e,t,n,r,o,l,i,a,s){for(var c=0,g=0,h=i,m=0,x=0,k=0,b=1,_=1,f=1,d=0,p="",v=o,E=l,S=r,$=p;_;)switch(k=d,d=vt()){case 40:if(k!=108&&Ce($,h-1)==58){al($+=V(Pi(d),"&","&\f"),"&\f")!=-1&&(f=-1);break}case 34:case 39:case 91:$+=Pi(d);break;case 9:case 10:case 13:case 32:$+=xm(k);break;case 92:$+=wm(sl()-1,7);continue;case 47:switch(jn()){case 42:case 47:Fr(Em(km(vt(),sl()),t,n,s),s);break;default:$+="/"}break;case 123*b:a[c++]=Et($)*f;case 125*b:case 59:case 0:switch(d){case 0:case 125:_=0;case 59+g:f==-1&&($=V($,/\f/g,"")),x>0&&Et($)-h&&Fr(x>32?gc($+";",r,n,h-1,s):gc(V($," ","")+";",r,n,h-2,s),s);break;case 59:$+=";";default:if(Fr(S=mc($,t,n,c,g,o,a,p,v=[],E=[],h,l),l),d===123)if(g===0)ul($,t,S,S,v,l,h,a,E);else switch(m===99&&Ce($,3)===110?100:m){case 100:case 108:case 109:case 115:ul(e,S,S,r&&Fr(mc(e,S,S,0,0,o,a,p,o,v=[],h,E),E),o,E,h,a,r?v:E);break;default:ul($,S,S,S,[""],E,0,a,E)}}c=g=x=0,b=f=1,p=$="",h=i;break;case 58:h=1+Et($),x=k;default:if(b<1){if(d==123)--b;else if(d==125&&b++==0&&gm()==125)continue}switch($+=Gs(d),d*b){case 38:f=g>0?1:($+="\f",-1);break;case 44:a[c++]=(Et($)-1)*f,f=1;break;case 64:jn()===45&&($+=Pi(vt())),m=jn(),g=h=Et(p=$+=bm(sl())),d++;break;case 45:k===45&&Et($)==2&&(b=0)}}return l}function mc(e,t,n,r,o,l,i,a,s,c,g,h){for(var m=o-1,x=o===0?l:[""],k=rp(x),b=0,_=0,f=0;b<r;++b)for(var d=0,p=xr(e,m+1,m=fm(_=i[b])),v=e;d<k;++d)(v=np(_>0?x[d]+" "+p:V(p,/&\f/g,x[d])))&&(s[f++]=v);return oi(e,t,n,o===0?ni:a,s,c,g,h)}function Em(e,t,n,r){return oi(e,t,n,ep,Gs(mm()),xr(e,2,-2),0,r)}function gc(e,t,n,r,o){return oi(e,t,n,Ws,xr(e,0,r),xr(e,r+1,-1),r,o)}function lp(e,t,n){switch(pm(e,t)){case 5103:return Z+"print-"+e+e;case 5737:case 4201:case 3177:case 3433:case 1641:case 4457:case 2921:case 5572:case 6356:case 5844:case 3191:case 6645:case 3005:case 6391:case 5879:case 5623:case 6135:case 4599:case 4855:case 4215:case 6389:case 5109:case 5365:case 5621:case 3829:return Z+e+e;case 4789:return Zr+e+e;case 5349:case 4246:case 4810:case 6968:case 2756:return Z+e+Zr+e+oe+e+e;case 5936:switch(Ce(e,t+11)){case 114:return Z+e+oe+V(e,/[svh]\w+-[tblr]{2}/,"tb")+e;case 108:return Z+e+oe+V(e,/[svh]\w+-[tblr]{2}/,"tb-rl")+e;case 45:return Z+e+oe+V(e,/[svh]\w+-[tblr]{2}/,"lr")+e}case 6828:case 4268:case 2903:return Z+e+oe+e+e;case 6165:return Z+e+oe+"flex-"+e+e;case 5187:return Z+e+V(e,/(\w+).+(:[^]+)/,Z+"box-$1$2"+oe+"flex-$1$2")+e;case 5443:return Z+e+oe+"flex-item-"+V(e,/flex-|-self/g,"")+(It(e,/flex-|baseline/)?"":oe+"grid-row-"+V(e,/flex-|-self/g,""))+e;case 4675:return Z+e+oe+"flex-line-pack"+V(e,/align-content|flex-|-self/g,"")+e;case 5548:return Z+e+oe+V(e,"shrink","negative")+e;case 5292:return Z+e+oe+V(e,"basis","preferred-size")+e;case 6060:return Z+"box-"+V(e,"-grow","")+Z+e+oe+V(e,"grow","positive")+e;case 4554:return Z+V(e,/([^-])(transform)/g,"$1"+Z+"$2")+e;case 6187:return V(V(V(e,/(zoom-|grab)/,Z+"$1"),/(image-set)/,Z+"$1"),e,"")+e;case 5495:case 3959:return V(e,/(image-set\([^]*)/,Z+"$1$`$1");case 4968:return V(V(e,/(.+:)(flex-)?(.*)/,Z+"box-pack:$3"+oe+"flex-pack:$3"),/s.+-b[^;]+/,"justify")+Z+e+e;case 4200:if(!It(e,/flex-|baseline/))return oe+"grid-column-align"+xr(e,t)+e;break;case 2592:case 3360:return oe+V(e,"template-","")+e;case 4384:case 3616:return n&&n.some(function(r,o){return t=o,It(r.props,/grid-\w+-end/)})?~al(e+(n=n[t].value),"span")?e:oe+V(e,"-start","")+e+oe+"grid-row-span:"+(~al(n,"span")?It(n,/\d+/):+It(n,/\d+/)-+It(e,/\d+/))+";":oe+V(e,"-start","")+e;case 4896:case 4128:return n&&n.some(function(r){return It(r.props,/grid-\w+-start/)})?e:oe+V(V(e,"-end","-span"),"span ","")+e;case 4095:case 3583:case 4068:case 2532:return V(e,/(.+)-inline(.+)/,Z+"$1$2")+e;case 8116:case 7059:case 5753:case 5535:case 5445:case 5701:case 4933:case 4677:case 5533:case 5789:case 5021:case 4765:if(Et(e)-1-t>6)switch(Ce(e,t+1)){case 109:if(Ce(e,t+4)!==45)break;case 102:return V(e,/(.+:)(.+)-([^]+)/,"$1"+Z+"$2-$3$1"+Zr+(Ce(e,t+3)==108?"$3":"$2-$3"))+e;case 115:return~al(e,"stretch")?lp(V(e,"stretch","fill-available"),t,n)+e:e}break;case 5152:case 5920:return V(e,/(.+?):(\d+)(\s*\/\s*(span)?\s*(\d+))?(.*)/,function(r,o,l,i,a,s,c){return oe+o+":"+l+c+(i?oe+o+"-span:"+(a?s:+s-+l)+c:"")+e});case 4949:if(Ce(e,t+6)===121)return V(e,":",":"+Z)+e;break;case 6444:switch(Ce(e,Ce(e,14)===45?18:11)){case 120:return V(e,/(.+:)([^;\s!]+)(;|(\s+)?!.+)?/,"$1"+Z+(Ce(e,14)===45?"inline-":"")+"box$3$1"+Z+"$2$3$1"+oe+"$2box$3")+e;case 100:return V(e,":",":"+oe)+e}break;case 5719:case 2647:case 2135:case 3927:case 2391:return V(e,"scroll-","scroll-snap-")+e}return e}function Rl(e,t){for(var n="",r=0;r<e.length;r++)n+=t(e[r],r,e,t)||"";return n}function $m(e,t,n,r){switch(e.type){case dm:if(e.children.length)break;case cm:case Ws:return e.return=e.return||e.value;case ep:return"";case tp:return e.return=e.value+"{"+Rl(e.children,r)+"}";case ni:if(!Et(e.value=e.props.join(",")))return""}return Et(n=Rl(e.children,r))?e.return=e.value+"{"+n+"}":""}function Am(e){var t=rp(e);return function(n,r,o,l){for(var i="",a=0;a<t;a++)i+=e[a](n,r,o,l)||"";return i}}function Cm(e){return function(t){t.root||(t=t.return)&&e(t)}}function Tm(e,t,n,r){if(e.length>-1&&!e.return)switch(e.type){case Ws:e.return=lp(e.value,e.length,n);return;case tp:return Rl([Gt(e,{value:V(e.value,"@","@"+Z)})],r);case ni:if(e.length)return hm(n=e.props,function(o){switch(It(o,r=/(::plac\w+|:read-\w+)/)){case":read-only":case":read-write":Un(Gt(e,{props:[V(o,/:(read-\w+)/,":"+Zr+"$1")]})),Un(Gt(e,{props:[o]})),Oa(e,{props:hc(n,r)});break;case"::placeholder":Un(Gt(e,{props:[V(o,/:(plac\w+)/,":"+Z+"input-$1")]})),Un(Gt(e,{props:[V(o,/:(plac\w+)/,":"+Zr+"$1")]})),Un(Gt(e,{props:[V(o,/:(plac\w+)/,oe+"input-$1")]})),Un(Gt(e,{props:[o]})),Oa(e,{props:hc(n,r)});break}return""})}}var jm={animationIterationCount:1,aspectRatio:1,borderImageOutset:1,borderImageSlice:1,borderImageWidth:1,boxFlex:1,boxFlexGroup:1,boxOrdinalGroup:1,columnCount:1,columns:1,flex:1,flexGrow:1,flexPositive:1,flexShrink:1,flexNegative:1,flexOrder:1,gridRow:1,gridRowEnd:1,gridRowSpan:1,gridRowStart:1,gridColumn:1,gridColumnEnd:1,gridColumnSpan:1,gridColumnStart:1,msGridRow:1,msGridRowSpan:1,msGridColumn:1,msGridColumnSpan:1,fontWeight:1,lineHeight:1,opacity:1,order:1,orphans:1,tabSize:1,widows:1,zIndex:1,zoom:1,WebkitLineClamp:1,fillOpacity:1,floodOpacity:1,stopOpacity:1,strokeDasharray:1,strokeDashoffset:1,strokeMiterlimit:1,strokeOpacity:1,strokeWidth:1},Ye={},kr=typeof process<"u"&&Ye!==void 0&&(Ye.REACT_APP_SC_ATTR||Ye.SC_ATTR)||"data-styled",Ks=typeof window<"u"&&"HTMLElement"in window,_m=!!(typeof SC_DISABLE_SPEEDY=="boolean"?SC_DISABLE_SPEEDY:typeof process<"u"&&Ye!==void 0&&Ye.REACT_APP_SC_DISABLE_SPEEDY!==void 0&&Ye.REACT_APP_SC_DISABLE_SPEEDY!==""?Ye.REACT_APP_SC_DISABLE_SPEEDY!=="false"&&Ye.REACT_APP_SC_DISABLE_SPEEDY:typeof process<"u"&&Ye!==void 0&&Ye.SC_DISABLE_SPEEDY!==void 0&&Ye.SC_DISABLE_SPEEDY!==""&&Ye.SC_DISABLE_SPEEDY!=="false"&&Ye.SC_DISABLE_SPEEDY),Dm={},ii=Object.freeze([]),br=Object.freeze({});function ip(e,t,n){return n===void 0&&(n=br),e.theme!==n.theme&&e.theme||t||n.theme}var ap=new Set(["a","abbr","address","area","article","aside","audio","b","base","bdi","bdo","big","blockquote","body","br","button","canvas","caption","cite","code","col","colgroup","data","datalist","dd","del","details","dfn","dialog","div","dl","dt","em","embed","fieldset","figcaption","figure","footer","form","h1","h2","h3","h4","h5","h6","header","hgroup","hr","html","i","iframe","img","input","ins","kbd","keygen","label","legend","li","link","main","map","mark","menu","menuitem","meta","meter","nav","noscript","object","ol","optgroup","option","output","p","param","picture","pre","progress","q","rp","rt","ruby","s","samp","script","section","select","small","source","span","strong","style","sub","summary","sup","table","tbody","td","textarea","tfoot","th","thead","time","tr","track","u","ul","use","var","video","wbr","circle","clipPath","defs","ellipse","foreignObject","g","image","line","linearGradient","marker","mask","path","pattern","polygon","polyline","radialGradient","rect","stop","svg","text","tspan"]),Nm=/[!"#$%&'()*+,./:;<=>?@[\\\]^`{|}~-]+/g,Im=/(^-|-$)/g;function vc(e){return e.replace(Nm,"-").replace(Im,"")}var Lm=/(a)(d)/gi,yc=function(e){return String.fromCharCode(e+(e>25?39:97))};function Fa(e){var t,n="";for(t=Math.abs(e);t>52;t=t/52|0)n=yc(t%52)+n;return(yc(t%52)+n).replace(Lm,"$1-$2")}var Oi,or=function(e,t){for(var n=t.length;n;)e=33*e^t.charCodeAt(--n);return e},sp=function(e){return or(5381,e)};function up(e){return Fa(sp(e)>>>0)}function zm(e){return e.displayName||e.name||"Component"}function Bi(e){return typeof e=="string"&&!0}var cp=typeof Symbol=="function"&&Symbol.for,dp=cp?Symbol.for("react.memo"):60115,Rm=cp?Symbol.for("react.forward_ref"):60112,Pm={childContextTypes:!0,contextType:!0,contextTypes:!0,defaultProps:!0,displayName:!0,getDefaultProps:!0,getDerivedStateFromError:!0,getDerivedStateFromProps:!0,mixins:!0,propTypes:!0,type:!0},Om={name:!0,length:!0,prototype:!0,caller:!0,callee:!0,arguments:!0,arity:!0},fp={$$typeof:!0,compare:!0,defaultProps:!0,displayName:!0,propTypes:!0,type:!0},Bm=((Oi={})[Rm]={$$typeof:!0,render:!0,defaultProps:!0,displayName:!0,propTypes:!0},Oi[dp]=fp,Oi);function xc(e){return("type"in(t=e)&&t.type.$$typeof)===dp?fp:"$$typeof"in e?Bm[e.$$typeof]:Pm;var t}var Mm=Object.defineProperty,Fm=Object.getOwnPropertyNames,wc=Object.getOwnPropertySymbols,Hm=Object.getOwnPropertyDescriptor,Um=Object.getPrototypeOf,kc=Object.prototype;function pp(e,t,n){if(typeof t!="string"){if(kc){var r=Um(t);r&&r!==kc&&pp(e,r,n)}var o=Fm(t);wc&&(o=o.concat(wc(t)));for(var l=xc(e),i=xc(t),a=0;a<o.length;++a){var s=o[a];if(!(s in Om||n&&n[s]||i&&s in i||l&&s in l)){var c=Hm(t,s);try{Mm(e,s,c)}catch{}}}}return e}function zn(e){return typeof e=="function"}function Ys(e){return typeof e=="object"&&"styledComponentId"in e}function $n(e,t){return e&&t?"".concat(e," ").concat(t):e||t||""}function Ha(e,t){if(e.length===0)return"";for(var n=e[0],r=1;r<e.length;r++)n+=t?t+e[r]:e[r];return n}function vo(e){return e!==null&&typeof e=="object"&&e.constructor.name===Object.name&&!("props"in e&&e.$$typeof)}function Ua(e,t,n){if(n===void 0&&(n=!1),!n&&!vo(e)&&!Array.isArray(e))return t;if(Array.isArray(t))for(var r=0;r<t.length;r++)e[r]=Ua(e[r],t[r]);else if(vo(t))for(var r in t)e[r]=Ua(e[r],t[r]);return e}function Xs(e,t){Object.defineProperty(e,"toString",{value:t})}function Rn(e){for(var t=[],n=1;n<arguments.length;n++)t[n-1]=arguments[n];return new Error("An error occurred. See https://github.com/styled-components/styled-components/blob/main/packages/styled-components/src/utils/errors.md#".concat(e," for more information.").concat(t.length>0?" Args: ".concat(t.join(", ")):""))}var Qm=function(){function e(t){this.groupSizes=new Uint32Array(512),this.length=512,this.tag=t}return e.prototype.indexOfGroup=function(t){for(var n=0,r=0;r<t;r++)n+=this.groupSizes[r];return n},e.prototype.insertRules=function(t,n){if(t>=this.groupSizes.length){for(var r=this.groupSizes,o=r.length,l=o;t>=l;)if((l<<=1)<0)throw Rn(16,"".concat(t));this.groupSizes=new Uint32Array(l),this.groupSizes.set(r),this.length=l;for(var i=o;i<l;i++)this.groupSizes[i]=0}for(var a=this.indexOfGroup(t+1),s=(i=0,n.length);i<s;i++)this.tag.insertRule(a,n[i])&&(this.groupSizes[t]++,a++)},e.prototype.clearGroup=function(t){if(t<this.length){var n=this.groupSizes[t],r=this.indexOfGroup(t),o=r+n;this.groupSizes[t]=0;for(var l=r;l<o;l++)this.tag.deleteRule(r)}},e.prototype.getGroup=function(t){var n="";if(t>=this.length||this.groupSizes[t]===0)return n;for(var r=this.groupSizes[t],o=this.indexOfGroup(t),l=o+r,i=o;i<l;i++)n+="".concat(this.tag.getRule(i)).concat(`/*!sc*/
`);return n},e}(),cl=new Map,Pl=new Map,dl=1,Qo=function(e){if(cl.has(e))return cl.get(e);for(;Pl.has(dl);)dl++;var t=dl++;return cl.set(e,t),Pl.set(t,e),t},Vm=function(e,t){dl=t+1,cl.set(e,t),Pl.set(t,e)},Wm="style[".concat(kr,"][").concat("data-styled-version",'="').concat("6.1.1",'"]'),Gm=new RegExp("^".concat(kr,'\\.g(\\d+)\\[id="([\\w\\d-]+)"\\].*?"([^"]*)')),Km=function(e,t,n){for(var r,o=n.split(","),l=0,i=o.length;l<i;l++)(r=o[l])&&e.registerName(t,r)},Ym=function(e,t){for(var n,r=((n=t.textContent)!==null&&n!==void 0?n:"").split(`/*!sc*/
`),o=[],l=0,i=r.length;l<i;l++){var a=r[l].trim();if(a){var s=a.match(Gm);if(s){var c=0|parseInt(s[1],10),g=s[2];c!==0&&(Vm(g,c),Km(e,g,s[3]),e.getTag().insertRules(c,o)),o.length=0}else o.push(a)}}};function Xm(){return typeof __webpack_nonce__<"u"?__webpack_nonce__:null}var hp=function(e){var t=document.head,n=e||t,r=document.createElement("style"),o=function(a){var s=Array.from(a.querySelectorAll("style[".concat(kr,"]")));return s[s.length-1]}(n),l=o!==void 0?o.nextSibling:null;r.setAttribute(kr,"active"),r.setAttribute("data-styled-version","6.1.1");var i=Xm();return i&&r.setAttribute("nonce",i),n.insertBefore(r,l),r},Zm=function(){function e(t){this.element=hp(t),this.element.appendChild(document.createTextNode("")),this.sheet=function(n){if(n.sheet)return n.sheet;for(var r=document.styleSheets,o=0,l=r.length;o<l;o++){var i=r[o];if(i.ownerNode===n)return i}throw Rn(17)}(this.element),this.length=0}return e.prototype.insertRule=function(t,n){try{return this.sheet.insertRule(n,t),this.length++,!0}catch{return!1}},e.prototype.deleteRule=function(t){this.sheet.deleteRule(t),this.length--},e.prototype.getRule=function(t){var n=this.sheet.cssRules[t];return n&&n.cssText?n.cssText:""},e}(),Jm=function(){function e(t){this.element=hp(t),this.nodes=this.element.childNodes,this.length=0}return e.prototype.insertRule=function(t,n){if(t<=this.length&&t>=0){var r=document.createTextNode(n);return this.element.insertBefore(r,this.nodes[t]||null),this.length++,!0}return!1},e.prototype.deleteRule=function(t){this.element.removeChild(this.nodes[t]),this.length--},e.prototype.getRule=function(t){return t<this.length?this.nodes[t].textContent:""},e}(),qm=function(){function e(t){this.rules=[],this.length=0}return e.prototype.insertRule=function(t,n){return t<=this.length&&(this.rules.splice(t,0,n),this.length++,!0)},e.prototype.deleteRule=function(t){this.rules.splice(t,1),this.length--},e.prototype.getRule=function(t){return t<this.length?this.rules[t]:""},e}(),bc=Ks,eg={isServer:!Ks,useCSSOMInjection:!_m},Ol=function(){function e(t,n,r){t===void 0&&(t=br),n===void 0&&(n={});var o=this;this.options=Te(Te({},eg),t),this.gs=n,this.names=new Map(r),this.server=!!t.isServer,!this.server&&Ks&&bc&&(bc=!1,function(l){for(var i=document.querySelectorAll(Wm),a=0,s=i.length;a<s;a++){var c=i[a];c&&c.getAttribute(kr)!=="active"&&(Ym(l,c),c.parentNode&&c.parentNode.removeChild(c))}}(this)),Xs(this,function(){return function(l){for(var i=l.getTag(),a=i.length,s="",c=function(h){var m=function(f){return Pl.get(f)}(h);if(m===void 0)return"continue";var x=l.names.get(m),k=i.getGroup(h);if(x===void 0||k.length===0)return"continue";var b="".concat(kr,".g").concat(h,'[id="').concat(m,'"]'),_="";x!==void 0&&x.forEach(function(f){f.length>0&&(_+="".concat(f,","))}),s+="".concat(k).concat(b,'{content:"').concat(_,'"}').concat(`/*!sc*/
`)},g=0;g<a;g++)c(g);return s}(o)})}return e.registerId=function(t){return Qo(t)},e.prototype.reconstructWithOptions=function(t,n){return n===void 0&&(n=!0),new e(Te(Te({},this.options),t),this.gs,n&&this.names||void 0)},e.prototype.allocateGSInstance=function(t){return this.gs[t]=(this.gs[t]||0)+1},e.prototype.getTag=function(){return this.tag||(this.tag=(t=function(n){var r=n.useCSSOMInjection,o=n.target;return n.isServer?new qm(o):r?new Zm(o):new Jm(o)}(this.options),new Qm(t)));var t},e.prototype.hasNameForId=function(t,n){return this.names.has(t)&&this.names.get(t).has(n)},e.prototype.registerName=function(t,n){if(Qo(t),this.names.has(t))this.names.get(t).add(n);else{var r=new Set;r.add(n),this.names.set(t,r)}},e.prototype.insertRules=function(t,n,r){this.registerName(t,n),this.getTag().insertRules(Qo(t),r)},e.prototype.clearNames=function(t){this.names.has(t)&&this.names.get(t).clear()},e.prototype.clearRules=function(t){this.getTag().clearGroup(Qo(t)),this.clearNames(t)},e.prototype.clearTag=function(){this.tag=void 0},e}(),tg=/&/g,ng=/^\s*\/\/.*$/gm;function mp(e,t){return e.map(function(n){return n.type==="rule"&&(n.value="".concat(t," ").concat(n.value),n.value=n.value.replaceAll(",",",".concat(t," ")),n.props=n.props.map(function(r){return"".concat(t," ").concat(r)})),Array.isArray(n.children)&&n.type!=="@keyframes"&&(n.children=mp(n.children,t)),n})}function rg(e){var t,n,r,o=e===void 0?br:e,l=o.options,i=l===void 0?br:l,a=o.plugins,s=a===void 0?ii:a,c=function(m,x,k){return k===n||k.startsWith(n)&&k.endsWith(n)&&k.replaceAll(n,"").length>0?".".concat(t):m},g=s.slice();g.push(function(m){m.type===ni&&m.value.includes("&")&&(m.props[0]=m.props[0].replace(tg,n).replace(r,c))}),i.prefix&&g.push(Tm),g.push($m);var h=function(m,x,k,b){x===void 0&&(x=""),k===void 0&&(k=""),b===void 0&&(b="&"),t=b,n=x,r=new RegExp("\\".concat(n,"\\b"),"g");var _=m.replace(ng,""),f=Sm(k||x?"".concat(k," ").concat(x," { ").concat(_," }"):_);i.namespace&&(f=mp(f,i.namespace));var d=[];return Rl(f,Am(g.concat(Cm(function(p){return d.push(p)})))),d};return h.hash=s.length?s.reduce(function(m,x){return x.name||Rn(15),or(m,x.name)},5381).toString():"",h}var og=new Ol,Qa=rg(),gp=y.createContext({shouldForwardProp:void 0,styleSheet:og,stylis:Qa});gp.Consumer;y.createContext(void 0);function Va(){return w.useContext(gp)}var lg=function(){function e(t,n){var r=this;this.inject=function(o,l){l===void 0&&(l=Qa);var i=r.name+l.hash;o.hasNameForId(r.id,i)||o.insertRules(r.id,i,l(r.rules,i,"@keyframes"))},this.name=t,this.id="sc-keyframes-".concat(t),this.rules=n,Xs(this,function(){throw Rn(12,String(r.name))})}return e.prototype.getName=function(t){return t===void 0&&(t=Qa),this.name+t.hash},e}(),ig=function(e){return e>="A"&&e<="Z"};function Sc(e){for(var t="",n=0;n<e.length;n++){var r=e[n];if(n===1&&r==="-"&&e[0]==="-")return e;ig(r)?t+="-"+r.toLowerCase():t+=r}return t.startsWith("ms-")?"-"+t:t}var vp=function(e){return e==null||e===!1||e===""},yp=function(e){var t,n,r=[];for(var o in e){var l=e[o];e.hasOwnProperty(o)&&!vp(l)&&(Array.isArray(l)&&l.isCss||zn(l)?r.push("".concat(Sc(o),":"),l,";"):vo(l)?r.push.apply(r,go(go(["".concat(o," {")],yp(l),!1),["}"],!1)):r.push("".concat(Sc(o),": ").concat((t=o,(n=l)==null||typeof n=="boolean"||n===""?"":typeof n!="number"||n===0||t in jm||t.startsWith("--")?String(n).trim():"".concat(n,"px")),";")))}return r};function un(e,t,n,r){if(vp(e))return[];if(Ys(e))return[".".concat(e.styledComponentId)];if(zn(e)){if(!zn(l=e)||l.prototype&&l.prototype.isReactComponent||!t)return[e];var o=e(t);return un(o,t,n,r)}var l;return e instanceof lg?n?(e.inject(n,r),[e.getName(r)]):[e]:vo(e)?yp(e):Array.isArray(e)?Array.prototype.concat.apply(ii,e.map(function(i){return un(i,t,n,r)})):[e.toString()]}function xp(e){for(var t=0;t<e.length;t+=1){var n=e[t];if(zn(n)&&!Ys(n))return!1}return!0}var ag=sp("6.1.1"),sg=function(){function e(t,n,r){this.rules=t,this.staticRulesId="",this.isStatic=(r===void 0||r.isStatic)&&xp(t),this.componentId=n,this.baseHash=or(ag,n),this.baseStyle=r,Ol.registerId(n)}return e.prototype.generateAndInjectStyles=function(t,n,r){var o=this.baseStyle?this.baseStyle.generateAndInjectStyles(t,n,r):"";if(this.isStatic&&!r.hash)if(this.staticRulesId&&n.hasNameForId(this.componentId,this.staticRulesId))o=$n(o,this.staticRulesId);else{var l=Ha(un(this.rules,t,n,r)),i=Fa(or(this.baseHash,l)>>>0);if(!n.hasNameForId(this.componentId,i)){var a=r(l,".".concat(i),void 0,this.componentId);n.insertRules(this.componentId,i,a)}o=$n(o,i),this.staticRulesId=i}else{for(var s=or(this.baseHash,r.hash),c="",g=0;g<this.rules.length;g++){var h=this.rules[g];if(typeof h=="string")c+=h;else if(h){var m=Ha(un(h,t,n,r));s=or(s,m+g),c+=m}}if(c){var x=Fa(s>>>0);n.hasNameForId(this.componentId,x)||n.insertRules(this.componentId,x,r(c,".".concat(x),void 0,this.componentId)),o=$n(o,x)}}return o},e}(),yo=y.createContext(void 0);yo.Consumer;function rt(e){var t=y.useContext(yo),n=w.useMemo(function(){return function(r,o){if(!r)throw Rn(14);if(zn(r)){var l=r(o);return l}if(Array.isArray(r)||typeof r!="object")throw Rn(8);return o?Te(Te({},o),r):r}(e.theme,t)},[e.theme,t]);return e.children?y.createElement(yo.Provider,{value:n},e.children):null}var Mi={};function ug(e,t,n){var r=Ys(e),o=e,l=!Bi(e),i=t.attrs,a=i===void 0?ii:i,s=t.componentId,c=s===void 0?function(v,E){var S=typeof v!="string"?"sc":vc(v);Mi[S]=(Mi[S]||0)+1;var $="".concat(S,"-").concat(up("6.1.1"+S+Mi[S]));return E?"".concat(E,"-").concat($):$}(t.displayName,t.parentComponentId):s,g=t.displayName,h=g===void 0?function(v){return Bi(v)?"styled.".concat(v):"Styled(".concat(zm(v),")")}(e):g,m=t.displayName&&t.componentId?"".concat(vc(t.displayName),"-").concat(t.componentId):t.componentId||c,x=r&&o.attrs?o.attrs.concat(a).filter(Boolean):a,k=t.shouldForwardProp;if(r&&o.shouldForwardProp){var b=o.shouldForwardProp;if(t.shouldForwardProp){var _=t.shouldForwardProp;k=function(v,E){return b(v,E)&&_(v,E)}}else k=b}var f=new sg(n,m,r?o.componentStyle:void 0);function d(v,E){return function(S,$,D){var H=S.attrs,P=S.componentStyle,q=S.defaultProps,ee=S.foldedComponentIds,pe=S.styledComponentId,he=S.target,se=y.useContext(yo),ke=Va(),be=S.shouldForwardProp||ke.shouldForwardProp,A=function(B,G,M){for(var Q,ye=Te(Te({},G),{className:void 0,theme:M}),j=0;j<B.length;j+=1){var F=zn(Q=B[j])?Q(ye):Q;for(var U in F)ye[U]=U==="className"?$n(ye[U],F[U]):U==="style"?Te(Te({},ye[U]),F[U]):F[U]}return G.className&&(ye.className=$n(ye.className,G.className)),ye}(H,$,ip($,se,q)||br),L=A.as||he,R={};for(var W in A)A[W]===void 0||W[0]==="$"||W==="as"||W==="theme"||(W==="forwardedAs"?R.as=A.forwardedAs:be&&!be(W,L)||(R[W]=A[W]));var Y=function(B,G){var M=Va(),Q=B.generateAndInjectStyles(G,M.styleSheet,M.stylis);return Q}(P,A),O=$n(ee,pe);return Y&&(O+=" "+Y),A.className&&(O+=" "+A.className),R[Bi(L)&&!ap.has(L)?"class":"className"]=O,R.ref=D,w.createElement(L,R)}(p,v,E)}d.displayName=h;var p=y.forwardRef(d);return p.attrs=x,p.componentStyle=f,p.displayName=h,p.shouldForwardProp=k,p.foldedComponentIds=r?$n(o.foldedComponentIds,o.styledComponentId):"",p.styledComponentId=m,p.target=r?o.target:e,Object.defineProperty(p,"defaultProps",{get:function(){return this._foldedDefaultProps},set:function(v){this._foldedDefaultProps=r?function(E){for(var S=[],$=1;$<arguments.length;$++)S[$-1]=arguments[$];for(var D=0,H=S;D<H.length;D++)Ua(E,H[D],!0);return E}({},o.defaultProps,v):v}}),Xs(p,function(){return".".concat(p.styledComponentId)}),l&&pp(p,e,{attrs:!0,componentStyle:!0,displayName:!0,foldedComponentIds:!0,shouldForwardProp:!0,styledComponentId:!0,target:!0}),p}function Ec(e,t){for(var n=[e[0]],r=0,o=t.length;r<o;r+=1)n.push(t[r],e[r+1]);return n}var $c=function(e){return Object.assign(e,{isCss:!0})};function N(e){for(var t=[],n=1;n<arguments.length;n++)t[n-1]=arguments[n];if(zn(e)||vo(e)){var r=e;return $c(un(Ec(ii,go([r],t,!0))))}var o=e;return t.length===0&&o.length===1&&typeof o[0]=="string"?un(o):$c(un(Ec(o,t)))}function Wa(e,t,n){if(n===void 0&&(n=br),!t)throw Rn(1,t);var r=function(o){for(var l=[],i=1;i<arguments.length;i++)l[i-1]=arguments[i];return e(t,n,N.apply(void 0,go([o],l,!1)))};return r.attrs=function(o){return Wa(e,t,Te(Te({},n),{attrs:Array.prototype.concat(n.attrs,o).filter(Boolean)}))},r.withConfig=function(o){return Wa(e,t,Te(Te({},n),o))},r}var wp=function(e){return Wa(ug,e)},C=wp;ap.forEach(function(e){C[e]=wp(e)});var cg=function(){function e(t,n){this.rules=t,this.componentId=n,this.isStatic=xp(t),Ol.registerId(this.componentId+1)}return e.prototype.createStyles=function(t,n,r,o){var l=o(Ha(un(this.rules,n,r,o)),""),i=this.componentId+t;r.insertRules(i,i,l)},e.prototype.removeStyles=function(t,n){n.clearRules(this.componentId+t)},e.prototype.renderStyles=function(t,n,r,o){t>2&&Ol.registerId(this.componentId+t),this.removeStyles(t,r),this.createStyles(t,n,r,o)},e}();function dg(e){for(var t=[],n=1;n<arguments.length;n++)t[n-1]=arguments[n];var r=N.apply(void 0,go([e],t,!1)),o="sc-global-".concat(up(JSON.stringify(r))),l=new cg(r,o),i=function(s){var c=Va(),g=y.useContext(yo),h=y.useRef(c.styleSheet.allocateGSInstance(o)).current;return c.styleSheet.server&&a(h,s,c.styleSheet,g,c.stylis),y.useLayoutEffect(function(){if(!c.styleSheet.server)return a(h,s,c.styleSheet,g,c.stylis),function(){return l.removeStyles(h,c.styleSheet)}},[h,s,c.styleSheet,g,c.stylis]),null};function a(s,c,g,h,m){if(l.isStatic)l.renderStyles(s,Dm,g,m);else{var x=Te(Te({},c),{theme:ip(c,h,i.defaultProps)});l.renderStyles(s,x,g,m)}}return y.memo(i)}var fg={name:"original",anchor:"#1034a6",anchorVisited:"#440381",borderDark:"#848584",borderDarkest:"#0a0a0a",borderLight:"#dfdfdf",borderLightest:"#fefefe",canvas:"#ffffff",canvasText:"#0a0a0a",canvasTextDisabled:"#848584",canvasTextDisabledShadow:"#fefefe",canvasTextInvert:"#fefefe",checkmark:"#0a0a0a",checkmarkDisabled:"#848584",desktopBackground:"#008080",flatDark:"#9e9e9e",flatLight:"#d8d8d8",focusSecondary:"#fefe03",headerBackground:"#060084",headerNotActiveBackground:"#7f787f",headerNotActiveText:"#c6c6c6",headerText:"#fefefe",hoverBackground:"#060084",material:"#c6c6c6",materialDark:"#9a9e9c",materialText:"#0a0a0a",materialTextDisabled:"#848584",materialTextDisabledShadow:"#fefefe",materialTextInvert:"#fefefe",progress:"#060084",tooltip:"#fefbcc"},pg=fg;const Vo=On(pg);var hg={name:"white",anchor:"rgb(0, 0, 128)",anchorVisited:"rgb(0, 0, 128)",borderDark:"rgb(0, 0, 0)",borderDarkest:"rgb(255, 255, 255)",borderLight:"rgb(0, 0, 0)",borderLightest:"rgb(255, 255, 255)",canvas:"rgb(255, 255, 255)",canvasText:"rgb(0, 0, 0)",canvasTextDisabled:"rgb(0, 0, 0)",canvasTextDisabledShadow:"rgb(255, 255, 255)",canvasTextInvert:"rgb(255, 255, 255)",checkmark:"rgb(0, 0, 0)",checkmarkDisabled:"rgb(128, 128, 128)",desktopBackground:"rgb(0, 128, 128)",flatDark:"rgb(0, 0, 0)",flatLight:"rgb(0, 0, 0)",focusSecondary:"rgb(255, 255, 255)",headerBackground:"linear-gradient(to right, rgb(0, 0, 128), rgb(0, 0, 128))",headerNotActiveBackground:"linear-gradient(to right, rgb(128, 128, 128), rgb(128, 128, 128))",headerNotActiveText:"rgb(192, 192, 192)",headerText:"rgb(255, 255, 255)",hoverBackground:"rgb(0, 0, 128)",material:"rgb(255, 255, 255)",materialDark:"rgb(128, 128, 128)",materialText:"rgb(0, 0, 0)",materialTextDisabled:"rgb(0, 0, 0)",materialTextDisabledShadow:"rgb(255, 255, 255)",materialTextInvert:"rgb(255, 255, 255)",progress:"rgb(0, 0, 128)",tooltip:"rgb(255, 255, 128)"},mg=hg;const gg=On(mg),vg="/tinkoff95/assets/ms_sans_serif-7vK4zdaj.woff2",yg="/tinkoff95/assets/ms_sans_serif_bold--XaUURxl.woff2",Zs="4px 4px 10px 0 rgba(0, 0, 0, 0.35)",Js="inset 2px 2px 3px rgba(0,0,0,0.2)",xt=()=>N`
  -webkit-text-fill-color: ${({theme:e})=>e.materialTextDisabled};
  color: ${({theme:e})=>e.materialTextDisabled};
  text-shadow: 1px 1px ${({theme:e})=>e.materialTextDisabledShadow};
  /* filter: grayscale(100%); */
`,wt=({background:e="material",color:t="materialText"}={})=>N`
  box-sizing: border-box;
  display: inline-block;
  background: ${({theme:n})=>n[e]};
  color: ${({theme:n})=>n[t]};
`,Eo=({mainColor:e="black",secondaryColor:t="transparent",pixelSize:n=2})=>N`
  background-image: ${[`linear-gradient(
      45deg,
      ${e} 25%,
      transparent 25%,
      transparent 75%,
      ${e} 75%
    )`,`linear-gradient(
      45deg,
      ${e} 25%,
      transparent 25%,
      transparent 75%,
      ${e} 75%
    )`].join(",")};
  background-color: ${t};
  background-size: ${`${n*2}px ${n*2}px`};
  background-position: 0 0, ${`${n}px ${n}px`};
`,Pn=()=>N`
  position: relative;
  box-sizing: border-box;
  display: inline-block;
  color: ${({theme:e})=>e.materialText};
  background: ${({$disabled:e,theme:t})=>e?t.flatLight:t.canvas};
  border: 2px solid ${({theme:e})=>e.canvas};
  outline: 2px solid ${({theme:e})=>e.flatDark};
  outline-offset: -4px;
`,Qn={button:{topLeftOuter:"borderLightest",topLeftInner:"borderLight",bottomRightInner:"borderDark",bottomRightOuter:"borderDarkest"},buttonPressed:{topLeftOuter:"borderDarkest",topLeftInner:"borderDark",bottomRightInner:"borderLight",bottomRightOuter:"borderLightest"},buttonThin:{topLeftOuter:"borderLightest",topLeftInner:null,bottomRightInner:null,bottomRightOuter:"borderDark"},buttonThinPressed:{topLeftOuter:"borderDark",topLeftInner:null,bottomRightInner:null,bottomRightOuter:"borderLightest"},field:{topLeftOuter:"borderDark",topLeftInner:"borderDarkest",bottomRightInner:"borderLight",bottomRightOuter:"borderLightest"},grouping:{topLeftOuter:"borderDark",topLeftInner:"borderLightest",bottomRightInner:"borderDark",bottomRightOuter:"borderLightest"},status:{topLeftOuter:"borderDark",topLeftInner:null,bottomRightInner:null,bottomRightOuter:"borderLightest"},window:{topLeftOuter:"borderLight",topLeftInner:"borderLightest",bottomRightInner:"borderDark",bottomRightOuter:"borderDarkest"}},xg=({theme:e,topLeftInner:t,bottomRightInner:n,hasShadow:r=!1,hasInsetShadow:o=!1})=>[r?Zs:!1,o?Js:!1,t!==null?`inset 1px 1px 0px 1px ${e[t]}`:!1,n!==null?`inset -1px -1px 0 1px ${e[n]}`:!1].filter(Boolean).join(", "),ge=({invert:e=!1,style:t="button"}={})=>{const n={topLeftOuter:e?"bottomRightOuter":"topLeftOuter",topLeftInner:e?"bottomRightInner":"topLeftInner",bottomRightInner:e?"topLeftInner":"bottomRightInner",bottomRightOuter:e?"topLeftOuter":"bottomRightOuter"};return N`
    border-style: solid;
    border-width: 2px;
    border-left-color: ${({theme:r})=>r[Qn[t][n.topLeftOuter]]};
    border-top-color: ${({theme:r})=>r[Qn[t][n.topLeftOuter]]};
    border-right-color: ${({theme:r})=>r[Qn[t][n.bottomRightOuter]]};
    border-bottom-color: ${({theme:r})=>r[Qn[t][n.bottomRightOuter]]};
    box-shadow: ${({theme:r,shadow:o})=>xg({theme:r,topLeftInner:Qn[t][n.topLeftInner],bottomRightInner:Qn[t][n.bottomRightInner],hasShadow:o})};
  `},Sr=()=>N`
  outline: 2px dotted ${({theme:e})=>e.materialText};
`,wg=e=>Buffer.from(e).toString("base64"),kg=typeof btoa<"u"?btoa:wg,Wo=(e,t=0)=>{const n=`<svg height="26" width="26" viewBox="0 0 26 26" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
    <g transform="rotate(${t} 13 13)">
      <polygon fill="${e}" points="6,10 20,10 13,17"/>
    </g>
  </svg>`;return`url(data:image/svg+xml;base64,${kg(n)})`},qs=(e="default")=>N`
  ::-webkit-scrollbar {
    width: 26px;
    height: 26px;
  }
  ::-webkit-scrollbar-track {
    ${({theme:t})=>Eo({mainColor:e==="flat"?t.flatLight:t.material,secondaryColor:e==="flat"?t.canvas:t.borderLightest})}
  }
  ::-webkit-scrollbar-thumb {
    ${wt()}
    ${e==="flat"?Pn():ge({style:"window"})}
      outline-offset: -2px;
  }

  ::-webkit-scrollbar-corner {
    background-color: ${({theme:t})=>t.material};
  }
  ::-webkit-scrollbar-button {
    ${wt()}
    ${e==="flat"?Pn():ge({style:"window"})}
      display: block;
    outline-offset: -2px;
    height: 26px;
    width: 26px;
    background-repeat: no-repeat;
    background-size: 100%;
    background-position: 0 0;
  }
  ::-webkit-scrollbar-button:active,
  ::-webkit-scrollbar-button:active {
    background-position: 0 1px;
    ${e==="default"?ge({style:"window",invert:!0}):""}
  }

  ::-webkit-scrollbar-button:horizontal:increment:start,
  ::-webkit-scrollbar-button:horizontal:decrement:end,
  ::-webkit-scrollbar-button:vertical:increment:start,
  ::-webkit-scrollbar-button:vertical:decrement:end {
    display: none;
  }

  ::-webkit-scrollbar-button:horizontal:decrement {
    background-image: ${({theme:t})=>Wo(t.materialText,90)};
  }

  ::-webkit-scrollbar-button:horizontal:increment {
    background-image: ${({theme:t})=>Wo(t.materialText,270)};
  }

  ::-webkit-scrollbar-button:vertical:decrement {
    background-image: ${({theme:t})=>Wo(t.materialText,180)};
  }

  ::-webkit-scrollbar-button:vertical:increment {
    background-image: ${({theme:t})=>Wo(t.materialText,0)};
  }
`,bg=C.a`
  color: ${({theme:e})=>e.anchor};
  font-size: inherit;
  text-decoration: ${({underline:e})=>e?"underline":"none"};
  &:visited {
    color: ${({theme:e})=>e.anchorVisited};
  }
`,Sg=w.forwardRef(({children:e,underline:t=!0,...n},r)=>y.createElement(bg,{ref:r,underline:t,...n},e));Sg.displayName="Anchor";const Eg=C.header`
  ${ge()};
  ${wt()};

  position: ${e=>{var t;return(t=e.position)!==null&&t!==void 0?t:e.fixed?"fixed":"absolute"}};
  top: 0;
  right: 0;
  left: auto;
  display: flex;
  flex-direction: column;
  width: 100%;
`,$g=w.forwardRef(({children:e,fixed:t=!0,position:n="fixed",...r},o)=>y.createElement(Eg,{fixed:t,position:t!==!1?n:void 0,ref:o,...r},e));$g.displayName="AppBar";const Fn=()=>{};function An(e,t,n){return n!==null&&e>n?n:t!==null&&e<t?t:e}function Ag(e){if(Math.abs(e)<1){const n=e.toExponential().split("e-"),r=n[0].split(".")[1];return(r?r.length:0)+parseInt(n[1],10)}const t=e.toString().split(".")[1];return t?t.length:0}function Ac(e,t,n){const r=Math.round((e-n)/t)*t+n;return Number(r.toFixed(Ag(t)))}function fn(e){return typeof e=="number"?`${e}px`:e}const Cg=C.div`
  display: inline-block;
  box-sizing: border-box;
  object-fit: contain;
  ${({size:e})=>`
    height: ${e};
    width: ${e};
    `}
  border-radius: ${({square:e})=>e?0:"50%"};
  overflow: hidden;
  ${({noBorder:e,theme:t})=>!e&&`
    border-top: 2px solid ${t.borderDark};
    border-left: 2px solid ${t.borderDark};
    border-bottom: 2px solid ${t.borderLightest};
    border-right: 2px solid ${t.borderLightest};
    background: ${t.material};
  `}
  ${({src:e})=>!e&&`
    display: flex;
    align-items: center;
    justify-content: space-around;
    font-weight: bold;
    font-size: 1rem;
  `}
`,Tg=C.img`
  display: block;
  object-fit: contain;
  width: 100%;
  height: 100%;
`,jg=w.forwardRef(({alt:e="",children:t,noBorder:n=!1,size:r=35,square:o=!1,src:l,...i},a)=>y.createElement(Cg,{noBorder:n,ref:a,size:fn(r),square:o,src:l,...i},l?y.createElement(Tg,{src:l,alt:e}):t));jg.displayName="Avatar";const Ie={sm:"28px",md:"36px",lg:"44px"},_g=N`
  position: relative;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  height: ${({size:e="md"})=>Ie[e]};
  width: ${({fullWidth:e,size:t="md",square:n})=>e?"100%":n?Ie[t]:"auto"};
  padding: ${({square:e})=>e?0:"0 10px"};
  font-size: 1rem;
  user-select: none;
  &:active {
    padding-top: ${({disabled:e})=>!e&&"2px"};
  }
  padding-top: ${({active:e,disabled:t})=>e&&!t&&"2px"};
  &:after {
    content: '';
    position: absolute;
    display: block;
    top: 0;
    left: 0;
    height: 100%;
    width: 100%;
  }
  &:not(:disabled) {
    cursor: pointer;
  }
  font-family: inherit;
`,ai=C.button`
  ${({active:e,disabled:t,primary:n,theme:r,variant:o})=>o==="flat"?N`
          ${Pn()}
          ${n?`
          border: 2px solid ${r.checkmark};
            outline: 2px solid ${r.flatDark};
            outline-offset: -4px;
          `:`
          border: 2px solid ${r.flatDark};
            outline: 2px solid transparent;
            outline-offset: -4px;
          `}
          &:focus:after, &:active:after {
            ${!e&&!t&&Sr}
            outline-offset: -4px;
          }
        `:o==="menu"||o==="thin"?N`
          ${wt()};
          border: 2px solid transparent;
          &:hover,
          &:focus {
            ${!t&&!e&&ge({style:"buttonThin"})}
          }
          &:active {
            ${!t&&ge({style:"buttonThinPressed"})}
          }
          ${e&&ge({style:"buttonThinPressed"})}
          ${t&&xt()}
        `:N`
          ${wt()};
          border: none;
          ${t&&xt()}
          ${e?Eo({mainColor:r.material,secondaryColor:r.borderLightest}):""}
          &:before {
            box-sizing: border-box;
            content: '';
            position: absolute;
            ${n?N`
                  left: 2px;
                  top: 2px;
                  width: calc(100% - 4px);
                  height: calc(100% - 4px);
                  outline: 2px solid ${r.borderDarkest};
                `:N`
                  left: 0;
                  top: 0;
                  width: 100%;
                  height: 100%;
                `}

            ${ge(e?{style:o==="raised"?"window":"button",invert:!0}:{style:o==="raised"?"window":"button",invert:!1})}
          }
          &:active:before {
            ${!t&&ge({style:o==="raised"?"window":"button",invert:!0})}
          }
          &:focus:after,
          &:active:after {
            ${!e&&!t&&Sr}
            outline-offset: -8px;
          }
          &:active:focus:after,
          &:active:after {
            top: ${e?"0":"1px"};
          }
        `}
  ${_g}
`,J=w.forwardRef(({onClick:e,disabled:t=!1,children:n,type:r="button",fullWidth:o=!1,size:l="md",square:i=!1,active:a=!1,onTouchStart:s=Fn,primary:c=!1,variant:g="default",...h},m)=>y.createElement(ai,{active:a,disabled:t,$disabled:t,fullWidth:o,onClick:t?void 0:e,onTouchStart:s,primary:c,ref:m,size:l,square:i,type:r,variant:g,...h},n));J.displayName="Button";function pn({defaultValue:e,onChange:t,onChangePropName:n="onChange",readOnly:r,value:o,valuePropName:l="value"}){const i=o!==void 0,[a,s]=w.useState(e),c=w.useCallback(g=>{i||s(g)},[i]);if(i&&typeof t!="function"&&!r){const g=`Warning: You provided a \`${l}\` prop to a component without an \`${n}\` handler.${l==="value"?`This will render a read-only field. If the field should be mutable use \`defaultValue\`. Otherwise, set either \`${n}\` or \`readOnly\`.`:`This breaks the component state. You must provide an \`${n}\` function that updates \`${l}\`.`}`;console.warn(g)}return[i?o:a,c]}const Ga=C.li`
  box-sizing: border-box;

  display: flex;
  align-items: center;
  position: relative;
  height: ${e=>Ie[e.size]};
  width: ${e=>e.square?Ie[e.size]:"auto"};
  padding: 0 8px;
  font-size: 1rem;
  white-space: nowrap;
  justify-content: ${e=>e.square?"space-around":"space-between"};
  text-align: center;
  line-height: ${e=>Ie[e.size]};
  color: ${({theme:e})=>e.materialText};
  pointer-events: ${({$disabled:e})=>e?"none":"auto"};
  font-weight: ${({primary:e})=>e?"bold":"normal"};
  &:hover {
    ${({theme:e,$disabled:t})=>!t&&`
        color: ${e.materialTextInvert};
        background: ${e.hoverBackground};
      `}

    cursor: default;
  }
  ${e=>e.$disabled&&xt()}
`,z=w.forwardRef(({size:e="lg",disabled:t,square:n,children:r,onClick:o,primary:l,...i},a)=>y.createElement(Ga,{$disabled:t,size:e,square:n,onClick:t?void 0:o,primary:l,role:"menuitem",ref:a,"aria-disabled":t,...i},r));z.displayName="MenuListItem";const St=C.ul.attrs(()=>({role:"menu"}))`
  box-sizing: border-box;
  width: ${e=>e.fullWidth?"100%":"auto"};
  padding: 4px;
  ${ge({style:"window"})}
  ${wt()}
  ${e=>e.inline&&`
    display: inline-flex;
    align-items: center;
  `}
  list-style: none;
  position: relative;
`;St.displayName="MenuList";const Tt=20,Bl=C.input`
  position: absolute;
  left: 0;
  margin: 0;
  width: ${Tt}px;
  height: ${Tt}px;
  opacity: 0;
  z-index: -1;
`,eu=C.label`
  display: inline-flex;
  align-items: center;
  position: relative;
  margin: 8px 0;
  cursor: ${({$disabled:e})=>e?"auto":"pointer"};
  user-select: none;
  font-size: 1rem;
  color: ${({theme:e})=>e.materialText};
  ${e=>e.$disabled&&xt()}

  ${Ga} & {
    margin: 0;
    height: 100%;
  }
  ${Ga}:hover & {
    ${({$disabled:e,theme:t})=>!e&&N`
        color: ${t.materialTextInvert};
      `};
  }
`,tu=C.span`
  display: inline-block;
  line-height: 1;
  padding: 2px;
  ${Bl}:focus ~ & {
    ${Sr}
  }
  ${Bl}:not(:disabled) ~ &:active {
    ${Sr}
  }
`,jt=C.div`
  position: relative;
  box-sizing: border-box;
  padding: 2px;
  font-size: 1rem;
  border-style: solid;
  border-width: 2px;
  border-left-color: ${({theme:e})=>e.borderDark};
  border-top-color: ${({theme:e})=>e.borderDark};
  border-right-color: ${({theme:e})=>e.borderLightest};
  border-bottom-color: ${({theme:e})=>e.borderLightest};
  line-height: 1.5;
  &:before {
    position: absolute;
    left: 0;
    top: 0;
    content: '';
    width: calc(100% - 4px);
    height: calc(100% - 4px);

    border-style: solid;
    border-width: 2px;
    border-left-color: ${({theme:e})=>e.borderDarkest};
    border-top-color: ${({theme:e})=>e.borderDarkest};
    border-right-color: ${({theme:e})=>e.borderLight};
    border-bottom-color: ${({theme:e})=>e.borderLight};

    pointer-events: none;
    ${e=>e.shadow&&`box-shadow:${Js};`}
  }
`,Dg=C.div`
  box-sizing: border-box;
  width: 100%;
  height: 100%;
  padding: 4px;
  overflow: auto;
  ${qs()}
`,$o=w.forwardRef(({children:e,shadow:t=!0,...n},r)=>y.createElement(jt,{ref:r,shadow:t,...n},y.createElement(Dg,null,e)));$o.displayName="ScrollView";const kp=N`
  width: ${Tt}px;
  height: ${Tt}px;
  display: flex;
  align-items: center;
  justify-content: space-around;
  margin-right: 0.5rem;
`,Ng=C(jt)`
  ${kp}
  width: ${Tt}px;
  height: ${Tt}px;
  background: ${({$disabled:e,theme:t})=>e?t.material:t.canvas};
  &:before {
    box-shadow: none;
  }
`,Ig=C.div`
  position: relative;
  box-sizing: border-box;
  display: inline-block;
  background: ${({$disabled:e,theme:t})=>e?t.flatLight:t.canvas};
  ${kp}
  width: ${Tt-4}px;
  height: ${Tt-4}px;
  outline: none;
  border: 2px solid ${({theme:e})=>e.flatDark};
  background: ${({$disabled:e,theme:t})=>e?t.flatLight:t.canvas};
`,Lg=C.span.attrs(()=>({"data-testid":"checkmarkIcon"}))`
  display: inline-block;
  position: relative;
  width: 100%;
  height: 100%;
  &:after {
    content: '';
    display: block;
    position: absolute;
    left: 50%;
    top: calc(50% - 1px);
    width: 3px;
    height: 7px;

    border: solid
      ${({$disabled:e,theme:t})=>e?t.checkmarkDisabled:t.checkmark};
    border-width: 0 3px 3px 0;
    transform: translate(-50%, -50%) rotate(45deg);

    border-color: ${e=>e.$disabled?e.theme.checkmarkDisabled:e.theme.checkmark};
  }
`,zg=C.span.attrs(()=>({"data-testid":"indeterminateIcon"}))`
  display: inline-block;
  position: relative;

  width: 100%;
  height: 100%;

  &:after {
    content: '';
    display: block;

    width: 100%;
    height: 100%;

    ${({$disabled:e,theme:t})=>Eo({mainColor:e?t.checkmarkDisabled:t.checkmark})}
    background-position: 0px 0px, 2px 2px;
  }
`,Rg={flat:Ig,default:Ng},Pg=w.forwardRef(({checked:e,className:t="",defaultChecked:n=!1,disabled:r=!1,indeterminate:o=!1,label:l="",onChange:i=Fn,style:a={},value:s,variant:c="default",...g},h)=>{var m;const[x,k]=pn({defaultValue:n,onChange:i,readOnly:(m=g.readOnly)!==null&&m!==void 0?m:r,value:e}),b=w.useCallback(d=>{const p=d.target.checked;k(p),i(d)},[i,k]),_=Rg[c];let f=null;return o?f=zg:x&&(f=Lg),y.createElement(eu,{$disabled:r,className:t,style:a},y.createElement(Bl,{disabled:r,onChange:r?void 0:b,readOnly:r,type:"checkbox",value:s,checked:x,"data-indeterminate":o,ref:h,...g}),y.createElement(_,{$disabled:r,role:"presentation"},f&&y.createElement(f,{$disabled:r,variant:c})),l&&y.createElement(tu,null,l))});Pg.displayName="Checkbox";const Pe=C.div`
  ${({orientation:e,theme:t,size:n="100%"})=>e==="vertical"?`
    height: ${fn(n)};
    border-left: 2px solid ${t.borderDark};
    border-right: 2px solid ${t.borderLightest};
    margin: 0;
    `:`
    width: ${fn(n)};
    border-bottom: 2px solid ${t.borderLightest};
    border-top: 2px solid ${t.borderDark};
    margin: 0;
    `}
`;Pe.displayName="Separator";const Og=C(ai)`
  padding-left: 8px;
`,Bg=C(Pe)`
  height: 21px;
  position: relative;
  top: 0;
`,bp=C.input`
  box-sizing: border-box;
  width: 100%;
  height: 100%;
  position: absolute;
  left: 0;
  top: 0;
  opacity: 0;
  z-index: 1;
  cursor: pointer;
  &:disabled {
    cursor: default;
  }
`,Mg=C.div`
  box-sizing: border-box;
  height: 19px;
  display: inline-block;
  width: 35px;
  margin-right: 5px;

  background: ${({color:e})=>e};

  ${({$disabled:e})=>e?N`
          border: 2px solid ${({theme:t})=>t.materialTextDisabled};
          filter: drop-shadow(
            1px 1px 0px ${({theme:t})=>t.materialTextDisabledShadow}
          );
        `:N`
          border: 2px solid ${({theme:t})=>t.materialText};
        `}
  ${bp}:focus:not(:active) + &:after {
    content: '';
    position: absolute;
    left: 0;
    top: 0;
    width: 100%;
    height: 100%;
    ${Sr}
    outline-offset: -8px;
  }
`,Fg=C.span`
  width: 0px;
  height: 0px;
  border-left: 6px solid transparent;
  border-right: 6px solid transparent;
  display: inline-block;
  margin-left: 6px;

  ${({$disabled:e})=>e?N`
          border-top: 6px solid ${({theme:t})=>t.materialTextDisabled};
          filter: drop-shadow(
            1px 1px 0px ${({theme:t})=>t.materialTextDisabledShadow}
          );
        `:N`
          border-top: 6px solid ${({theme:t})=>t.materialText};
        `}
  &:after {
    content: '';
    box-sizing: border-box;
    position: absolute;
    top: ${({variant:e})=>e==="flat"?"6px":"8px"};
    right: 8px;
    width: 16px;
    height: 19px;
  }
`,Hg=w.forwardRef(({value:e,defaultValue:t,onChange:n=Fn,disabled:r=!1,variant:o="default",...l},i)=>{var a;const[s,c]=pn({defaultValue:t,onChange:n,readOnly:(a=l.readOnly)!==null&&a!==void 0?a:r,value:e}),g=h=>{const m=h.target.value;c(m),n(h)};return y.createElement(Og,{disabled:r,as:"div",variant:o,size:"md"},y.createElement(bp,{onChange:g,readOnly:r,disabled:r,value:s??"#008080",type:"color",ref:i,...l}),y.createElement(Mg,{$disabled:r,color:s??"#008080",role:"presentation"}),o==="default"&&y.createElement(Bg,{orientation:"vertical"}),y.createElement(Fg,{$disabled:r,variant:o}))});Hg.displayName="ColorInput";const Ug=C.div`
  position: relative;
  --react95-digit-primary-color: #ff0102;
  --react95-digit-secondary-color: #740201;
  --react95-digit-bg-color: #000000;

  ${({pixelSize:e})=>N`
    width: ${11*e}px;
    height: ${21*e}px;
    margin: ${e}px;

    span,
    span:before,
    span:after {
      box-sizing: border-box;
      display: inline-block;
      position: absolute;
    }
    span.active,
    span.active:before,
    span.active:after {
      background: var(--react95-digit-primary-color);
    }
    span:not(.active),
    span:not(.active):before,
    span:not(.active):after {
      ${Eo({mainColor:"var(--react95-digit-bg-color)",secondaryColor:"var(--react95-digit-secondary-color)",pixelSize:e})}
    }

    span.horizontal,
    span.horizontal:before,
    span.horizontal:after {
      height: ${e}px;
      border-left: ${e}px solid var(--react95-digit-bg-color);
      border-right: ${e}px solid var(--react95-digit-bg-color);
    }
    span.horizontal.active,
    span.horizontal.active:before,
    span.horizontal.active:after {
      height: ${e}px;
      border-left: ${e}px solid var(--react95-digit-primary-color);
      border-right: ${e}px solid var(--react95-digit-primary-color);
    }
    span.horizontal {
      left: ${e}px;
      width: ${9*e}px;
    }
    span.horizontal:before {
      content: '';
      width: 100%;
      top: ${e}px;
      left: ${0}px;
    }
    span.horizontal:after {
      content: '';
      width: calc(100% - ${e*2}px);
      top: ${2*e}px;
      left: ${e}px;
    }
    span.horizontal.top {
      top: 0;
    }
    span.horizontal.bottom {
      bottom: 0;
      transform: rotateX(180deg);
    }

    span.center,
    span.center:before,
    span.center:after {
      height: ${e}px;
      border-left: ${e}px solid var(--react95-digit-bg-color);
      border-right: ${e}px solid var(--react95-digit-bg-color);
    }
    span.center.active,
    span.center.active:before,
    span.center.active:after {
      border-left: ${e}px solid var(--react95-digit-primary-color);
      border-right: ${e}px solid var(--react95-digit-primary-color);
    }
    span.center {
      top: 50%;
      transform: translateY(-50%);
      left: ${e}px;
      width: ${9*e}px;
    }
    span.center:before,
    span.center:after {
      content: '';
      width: 100%;
    }
    span.center:before {
      top: ${e}px;
    }
    span.center:after {
      bottom: ${e}px;
    }

    span.vertical,
    span.vertical:before,
    span.vertical:after {
      width: ${e}px;
      border-top: ${e}px solid var(--react95-digit-bg-color);
      border-bottom: ${e}px solid var(--react95-digit-bg-color);
    }
    span.vertical {
      height: ${11*e}px;
    }
    span.vertical.left {
      left: 0;
    }
    span.vertical.right {
      right: 0;
      transform: rotateY(180deg);
    }
    span.vertical.top {
      top: 0px;
    }
    span.vertical.bottom {
      bottom: 0px;
    }
    span.vertical:before {
      content: '';
      height: 100%;
      top: ${0}px;
      left: ${e}px;
    }
    span.vertical:after {
      content: '';
      height: calc(100% - ${e*2}px);
      top: ${e}px;
      left: ${e*2}px;
    }
  `}
`,Cc=["horizontal top","center","horizontal bottom","vertical top left","vertical top right","vertical bottom left","vertical bottom right"],Qg=[[1,0,1,1,1,1,1],[0,0,0,0,1,0,1],[1,1,1,0,1,1,0],[1,1,1,0,1,0,1],[0,1,0,1,1,0,1],[1,1,1,1,0,0,1],[1,1,1,1,0,1,1],[1,0,0,0,1,0,1],[1,1,1,1,1,1,1],[1,1,1,1,1,0,1]];function Vg({digit:e=0,pixelSize:t=2,...n}){const r=Qg[Number(e)].map((o,l)=>o?`${Cc[l]} active`:Cc[l]);return y.createElement(Ug,{pixelSize:t,...n},r.map((o,l)=>y.createElement("span",{className:o,key:l})))}const Wg=C.div`
  ${ge({style:"status"})}
  display: inline-flex;
  background: #000000;
`,Gg={sm:1,md:2,lg:3,xl:4},Kg=w.forwardRef(({value:e=0,minLength:t=3,size:n="md",...r},o)=>{const l=w.useMemo(()=>e.toString().padStart(t,"0").split(""),[t,e]);return y.createElement(Wg,{ref:o,...r},l.map((i,a)=>y.createElement(Vg,{digit:i,pixelSize:Gg[n],key:a})))});Kg.displayName="Counter";const Sp=N`
  display: flex;
  align-items: center;
  width: ${({fullWidth:e})=>e?"100%":"auto"};
  min-height: ${Ie.md};
`,Yg=C(jt).attrs({"data-testid":"variant-default"})`
  ${Sp}
  background: ${({$disabled:e,theme:t})=>e?t.material:t.canvas};
`,Xg=C.div.attrs({"data-testid":"variant-flat"})`
  ${Pn()}
  ${Sp}
  position: relative;
`,Ep=N`
  display: block;
  box-sizing: border-box;
  width: 100%;
  height: 100%;
  outline: none;
  border: none;
  background: none;
  font-size: 1rem;
  min-height: 27px;
  font-family: inherit;
  color: ${({theme:e})=>e.canvasText};
  ${({disabled:e,variant:t})=>t!=="flat"&&e&&xt()}
`,Zg=C.input`
  ${Ep}
  padding: 0 8px;
`,Jg=C.textarea`
  ${Ep}
  padding: 8px;
  resize: none;
  ${({variant:e})=>qs(e)}
`,nu=w.forwardRef(({className:e,disabled:t=!1,fullWidth:n,onChange:r=Fn,shadow:o=!0,style:l,variant:i="default",...a},s)=>{const c=i==="flat"?Xg:Yg,g=w.useMemo(()=>{var h;return a.multiline?y.createElement(Jg,{disabled:t,onChange:t?void 0:r,readOnly:t,ref:s,variant:i,...a}):y.createElement(Zg,{disabled:t,onChange:t?void 0:r,readOnly:t,ref:s,type:(h=a.type)!==null&&h!==void 0?h:"text",variant:i,...a})},[t,r,a,s,i]);return y.createElement(c,{className:e,fullWidth:n,$disabled:t,shadow:o,style:l},g)});nu.displayName="TextInput";const qg=C.div`
  display: inline-flex;
  align-items: center;
`,Ka=C(J)`
  width: 30px;
  padding: 0;
  flex-shrink: 0;

  ${({variant:e})=>e==="flat"?N`
          height: calc(50% - 1px);
        `:N`
          height: 50%;
        `}
`,ev=C.div`
  display: flex;
  flex-direction: column;
  flex-wrap: nowrap;
  justify-content: space-between;

  ${({variant:e})=>e==="flat"?N`
          height: calc(${Ie.md} - 4px);
        `:N`
          height: ${Ie.md};
          margin-left: 2px;
        `}
`,Tc=C.span`
  width: 0px;
  height: 0px;
  display: inline-block;
  ${({invert:e})=>e?N`
          border-left: 4px solid transparent;
          border-right: 4px solid transparent;
          border-bottom: 4px solid ${({theme:t})=>t.materialText};
        `:N`
          border-left: 4px solid transparent;
          border-right: 4px solid transparent;
          border-top: 4px solid ${({theme:t})=>t.materialText};
        `}
  ${Ka}:disabled & {
    filter: drop-shadow(
      1px 1px 0px ${({theme:e})=>e.materialTextDisabledShadow}
    );
    ${({invert:e})=>e?N`
            border-bottom-color: ${({theme:t})=>t.materialTextDisabled};
          `:N`
            border-top-color: ${({theme:t})=>t.materialTextDisabled};
          `}
  }
`,$p=w.forwardRef(({className:e,defaultValue:t,disabled:n=!1,max:r,min:o,onChange:l,readOnly:i,step:a=1,style:s,value:c,variant:g="default",width:h,...m},x)=>{const[k,b]=pn({defaultValue:t,onChange:l,readOnly:i,value:c}),_=w.useCallback(S=>{const $=parseFloat(S.target.value);b($)},[b]),f=w.useCallback(S=>{const $=An(parseFloat(((k??0)+S).toFixed(2)),o??null,r??null);b($),l==null||l($)},[r,o,l,b,k]),d=w.useCallback(()=>{k!==void 0&&(l==null||l(k))},[l,k]),p=w.useCallback(()=>{f(a)},[f,a]),v=w.useCallback(()=>{f(-a)},[f,a]),E=g==="flat"?"flat":"raised";return y.createElement(qg,{className:e,style:{...s,width:h!==void 0?fn(h):"auto"},...m},y.createElement(nu,{value:k,variant:g,onChange:_,disabled:n,type:"number",readOnly:i,ref:x,fullWidth:!0,onBlur:d}),y.createElement(ev,{variant:g},y.createElement(Ka,{"data-testid":"increment",variant:E,disabled:n||i,onClick:p},y.createElement(Tc,{invert:!0})),y.createElement(Ka,{"data-testid":"decrement",variant:E,disabled:n||i,onClick:v},y.createElement(Tc,null))))});$p.displayName="NumberInput";function tv(){const e="0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";let t="";for(let n=0;n<10;n+=1)t+=e[Math.floor(Math.random()*e.length)];return t}const Ap=e=>w.useMemo(()=>e??tv(),[e]),Cp=N`
  box-sizing: border-box;
  padding-left: 4px;
  overflow: hidden;
  white-space: nowrap;
  user-select: none;
  line-height: 100%;
`,Tp=N`
  background: ${({theme:e})=>e.hoverBackground};
  color: ${({theme:e})=>e.canvasTextInvert};
`,ru=C.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  height: 100%;
  width: 100%;
  &:focus {
    outline: none;
  }
`,nv=C.div`
  ${Cp}
  padding-right: 8px;
  align-items: center;
  display: flex;
  height: calc(100% - 4px);
  width: calc(100% - 4px);
  margin: 0 2px;
  border: 2px solid transparent;
  ${ru}:focus & {
    ${Tp}
    border: 2px dotted ${({theme:e})=>e.focusSecondary};
  }
`,jp=N`
  height: ${Ie.md};
  display: inline-block;
  color: ${({$disabled:e=!1,theme:t})=>e?xt():t.canvasText};
  font-size: 1rem;
  cursor: ${({$disabled:e})=>e?"default":"pointer"};
`,rv=C(jt)`
  ${jp}
  background: ${({$disabled:e=!1,theme:t})=>e?t.material:t.canvas};
  &:focus {
    outline: 0;
  }
`,ov=C.div`
  ${Pn()}
  ${jp}
  background: ${({$disabled:e=!1,theme:t})=>e?t.flatLight:t.canvas};
`,lv=C.select`
  -moz-appearance: none;
  -webkit-appearance: none;
  display: block;
  width: 100%;
  height: 100%;
  color: inherit;
  font-size: 1rem;
  border: 0;
  margin: 0;
  background: none;
  -webkit-tap-highlight-color: transparent;
  border-radius: 0;
  padding-right: 30px;
  ${Cp}
  cursor: pointer;
  &:disabled {
    ${xt()};
    background: ${({theme:e})=>e.material};
    cursor: default;
  }
`,_p=C(ai).attrs(()=>({"aria-hidden":"true"}))`
  width: 30px;
  padding: 0;
  flex-shrink: 0;
  ${({variant:e="default"})=>e==="flat"?N`
          height: 100%;
          margin-right: 0;
        `:N`
          height: 100%;
        `}
  ${({native:e=!1,variant:t="default"})=>e&&(t==="flat"?`
      position: absolute;
      right: 0;
      height: 100%;
      `:`
    position: absolute;
    top: 2px;
    right: 2px;
    height: calc(100% - 4px);
    `)}
    pointer-events: ${({$disabled:e=!1,native:t=!1})=>e||t?"none":"auto"}
`,iv=C.span`
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
  width: 0;
  height: 0;
  border-left: 6px solid transparent;
  border-right: 6px solid transparent;
  display: inline-block;
  border-top: 6px solid
    ${({$disabled:e=!1,theme:t})=>e?t.materialTextDisabled:t.materialText};
  ${({$disabled:e=!1,theme:t})=>e&&`
    filter: drop-shadow(1px 1px 0px ${t.materialTextDisabledShadow});
    border-top-color: ${t.materialTextDisabled};
    `}
  ${_p}:active & {
    margin-top: 2px;
  }
`,av=C.ul`
  box-sizing: border-box;

  font-size: 1rem;
  position: absolute;
  transform: translateY(100%);
  left: 0;
  background: ${({theme:e})=>e.canvas};
  padding: 2px;
  border-top: none;
  cursor: default;
  z-index: 1;
  cursor: pointer;
  box-shadow: ${Zs};
  ${({variant:e="default"})=>e==="flat"?N`
          bottom: 2px;
          width: 100%;
          border: 2px solid ${({theme:t})=>t.flatDark};
        `:N`
          bottom: -2px;
          width: calc(100% - 2px);
          border: 2px solid ${({theme:t})=>t.borderDarkest};
        `}
  ${({variant:e="default"})=>qs(e)}
`,sv=C.li`
  box-sizing: border-box;

  width: 100%;
  padding-left: 8px;

  height: calc(${Ie.md} - 4px);
  line-height: calc(${Ie.md} - 4px);
  font-size: 1rem;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  color: ${({theme:e})=>e.canvasText};
  &:focus {
    outline: 0;
  }
  ${({active:e})=>e?Tp:""}
  user-select: none;
`,uv=[],Dp=({className:e,defaultValue:t,disabled:n,native:r,onChange:o,options:l=uv,readOnly:i,style:a,value:s,variant:c,width:g})=>{var h;const m=w.useMemo(()=>l.filter(Boolean),[l]),[x,k]=pn({defaultValue:t??((h=m==null?void 0:m[0])===null||h===void 0?void 0:h.value),onChange:o,readOnly:i,value:s}),b=!(n||i),_=w.useMemo(()=>({className:e,style:{...a,width:g}}),[e,a,g]),f=w.useMemo(()=>y.createElement(_p,{as:"div","data-testid":"select-button",$disabled:n,native:r,tabIndex:-1,variant:c==="flat"?"flat":"raised"},y.createElement(iv,{"data-testid":"select-icon",$disabled:n})),[n,r,c]),d=w.useMemo(()=>c==="flat"?ov:rv,[c]);return w.useMemo(()=>({isEnabled:b,options:m,value:x,setValue:k,wrapperProps:_,DropdownButton:f,Wrapper:d}),[f,d,b,m,k,x,_])},cv={ARROW_DOWN:"ArrowDown",ARROW_LEFT:"ArrowLeft",ARROW_RIGHT:"ArrowRight",ARROW_UP:"ArrowUp",END:"End",ENTER:"Enter",ESC:"Escape",HOME:"Home",SPACE:"Space",TAB:"Tab"},dv=1e3,fv=({onBlur:e,onChange:t,onClose:n,onFocus:r,onKeyDown:o,onMouseDown:l,onOpen:i,open:a,options:s,readOnly:c,value:g,selectRef:h,setValue:m,wrapperRef:x})=>{const k=w.useRef(null),b=w.useRef([]),_=w.useRef(0),f=w.useRef(0),d=w.useRef(),p=w.useRef("search"),v=w.useRef(""),E=w.useRef(),[S,$]=pn({defaultValue:!1,onChange:i,onChangePropName:"onOpen",readOnly:c,value:a,valuePropName:"open"}),D=w.useMemo(()=>{const j=s.findIndex(F=>F.value===g);return _.current=An(j,0,null),s[j]},[s,g]),[H,P]=w.useState(s[0]),q=w.useCallback(j=>{const F=k.current,U=b.current[j];if(!U||!F){d.current=j;return}d.current=void 0;const ue=F.clientHeight,ie=F.scrollTop,_e=F.scrollTop+ue,Se=U.offsetTop,nt=U.offsetHeight,_t=U.offsetTop+U.offsetHeight;Se<ie&&F.scrollTo(0,Se),_t>_e&&F.scrollTo(0,Se-ue+nt),U.focus({preventScroll:!0})},[k]),ee=w.useCallback((j,{scroll:F}={})=>{var U;const ue=s.length-1;let ie;switch(j){case"first":{ie=0;break}case"last":{ie=ue;break}case"next":{ie=An(f.current+1,0,ue);break}case"previous":{ie=An(f.current-1,0,ue);break}case"selected":{ie=An((U=_.current)!==null&&U!==void 0?U:0,0,ue);break}default:ie=j}f.current=ie,P(s[ie]),F&&q(ie)},[f,s,q]),pe=w.useCallback(({fromEvent:j})=>{$(!0),ee("selected",{scroll:!0}),i==null||i({fromEvent:j})},[ee,i,$]),he=w.useCallback(()=>{p.current="search",v.current="",clearTimeout(E.current)},[]),se=w.useCallback(({focusSelect:j,fromEvent:F})=>{var U;n==null||n({fromEvent:F}),$(!1),P(s[0]),he(),d.current=void 0,j&&((U=h.current)===null||U===void 0||U.focus())},[he,n,s,h,$]),ke=w.useCallback(({fromEvent:j})=>{S?se({focusSelect:!1,fromEvent:j}):pe({fromEvent:j})},[se,pe,S]),be=w.useCallback((j,{fromEvent:F})=>{_.current!==j&&(_.current=j,m(s[j].value),t==null||t(s[j],{fromEvent:F}))},[t,s,m]),A=w.useCallback(({focusSelect:j,fromEvent:F})=>{be(f.current,{fromEvent:F}),se({focusSelect:j,fromEvent:F})},[se,be]),L=w.useCallback((j,{fromEvent:F,select:U})=>{var ue;switch(p.current==="cycleFirstLetter"&&j!==v.current&&(p.current="search"),j===v.current?p.current="cycleFirstLetter":v.current+=j,p.current){case"search":{let ie=s.findIndex(_e=>{var Se;return((Se=_e.label)===null||Se===void 0?void 0:Se.toLocaleUpperCase().indexOf(v.current))===0});ie<0&&(ie=s.findIndex(_e=>{var Se;return((Se=_e.label)===null||Se===void 0?void 0:Se.toLocaleUpperCase().indexOf(j))===0}),v.current=j),ie>=0&&(U?be(ie,{fromEvent:F}):ee(ie,{scroll:!0}));break}case"cycleFirstLetter":{const ie=U?(ue=_.current)!==null&&ue!==void 0?ue:-1:f.current;let _e=s.findIndex((Se,nt)=>{var _t;return nt>ie&&((_t=Se.label)===null||_t===void 0?void 0:_t.toLocaleUpperCase().indexOf(j))===0});_e<0&&(_e=s.findIndex(Se=>{var nt;return((nt=Se.label)===null||nt===void 0?void 0:nt.toLocaleUpperCase().indexOf(j))===0})),_e>=0&&(U?be(_e,{fromEvent:F}):ee(_e,{scroll:!0}));break}}clearTimeout(E.current),E.current=setTimeout(()=>{p.current==="search"&&(v.current="")},dv)},[ee,s,be]),R=w.useCallback(j=>{var F;j.button===0&&(j.preventDefault(),(F=h.current)===null||F===void 0||F.focus(),ke({fromEvent:j}),l==null||l(j))},[l,h,ke]),W=w.useCallback(j=>{A({focusSelect:!0,fromEvent:j})},[A]),Y=w.useCallback(j=>{const{altKey:F,code:U,ctrlKey:ue,metaKey:ie,shiftKey:_e}=j,{ARROW_DOWN:Se,ARROW_UP:nt,END:_t,ENTER:yn,ESC:Qt,HOME:ui,SPACE:ci,TAB:Tr}=cv,ou=F||ue||ie||_e;if(!(U===Tr&&(F||ue||ie)||U!==Tr&&ou))switch(U){case Se:{if(j.preventDefault(),!S){pe({fromEvent:j});return}ee("next",{scroll:!0});break}case nt:{if(j.preventDefault(),!S){pe({fromEvent:j});return}ee("previous",{scroll:!0});break}case _t:{if(j.preventDefault(),!S){pe({fromEvent:j});return}ee("last",{scroll:!0});break}case yn:{if(!S)return;j.preventDefault(),A({focusSelect:!0,fromEvent:j});break}case Qt:{if(!S)return;j.preventDefault(),se({focusSelect:!0,fromEvent:j});break}case ui:{if(j.preventDefault(),!S){pe({fromEvent:j});return}ee("first",{scroll:!0});break}case ci:{j.preventDefault(),S?A({focusSelect:!0,fromEvent:j}):pe({fromEvent:j});break}case Tr:{if(!S)return;_e||j.preventDefault(),A({focusSelect:!_e,fromEvent:j});break}default:!ou&&U.match(/^Key/)&&(j.preventDefault(),j.stopPropagation(),L(U.replace(/^Key/,""),{select:!S,fromEvent:j}))}},[ee,se,S,pe,L,A]),O=w.useCallback(j=>{Y(j),o==null||o(j)},[Y,o]),B=w.useCallback(j=>{ee(j)},[ee]),G=w.useCallback(j=>{S||(he(),e==null||e(j))},[he,e,S]),M=w.useCallback(j=>{he(),r==null||r(j)},[he,r]),Q=w.useCallback(j=>{k.current=j,d.current!==void 0&&q(d.current)},[q]),ye=w.useCallback((j,F)=>{b.current[F]=j,d.current===F&&q(d.current)},[q]);return w.useEffect(()=>{if(!S)return()=>{};const j=F=>{var U;const ue=F.target;!((U=x.current)===null||U===void 0)&&U.contains(ue)||(F.preventDefault(),se({focusSelect:!1,fromEvent:F}))};return document.addEventListener("mousedown",j),()=>{document.removeEventListener("mousedown",j)}},[se,S,x]),w.useMemo(()=>({activeOption:H,handleActivateOptionIndex:B,handleBlur:G,handleButtonKeyDown:O,handleDropdownKeyDown:Y,handleFocus:M,handleMouseDown:R,handleOptionClick:W,handleSetDropdownRef:Q,handleSetOptionRef:ye,open:S,selectedOption:D}),[H,B,G,O,M,Y,R,W,Q,ye,S,D])},pv=w.forwardRef(({className:e,defaultValue:t,disabled:n,onChange:r,options:o,readOnly:l,style:i,value:a,variant:s,width:c,...g},h)=>{const{isEnabled:m,options:x,setValue:k,value:b,DropdownButton:_,Wrapper:f}=Dp({defaultValue:t,disabled:n,native:!0,onChange:r,options:o,readOnly:l,value:a,variant:s}),d=w.useCallback(p=>{const v=x.find(E=>E.value===p.target.value);v&&(k(v.value),r==null||r(v,{fromEvent:p}))},[r,x,k]);return y.createElement(f,{className:e,style:{...i,width:c}},y.createElement(ru,null,y.createElement(lv,{...g,disabled:n,onChange:m?d:Fn,ref:h,value:b},x.map((p,v)=>{var E;return y.createElement("option",{key:`${p.value}-${v}`,value:p.value},(E=p.label)!==null&&E!==void 0?E:p.value)})),_))});pv.displayName="SelectNative";function hv({activateOptionIndex:e,active:t,index:n,onClick:r,option:o,selected:l,setRef:i}){const a=w.useCallback(()=>{e(n)},[e,n]),s=w.useCallback(g=>{i(g,n)},[n,i]),c=Ap();return y.createElement(sv,{active:t,"aria-selected":l?"true":void 0,"data-value":o.value,id:c,onClick:r,onMouseEnter:a,ref:s,role:"option",tabIndex:0},o.label)}function mv({"aria-label":e,"aria-labelledby":t,className:n,defaultValue:r,disabled:o=!1,formatDisplay:l,inputProps:i,labelId:a,menuMaxHeight:s,name:c,onBlur:g,onChange:h,onClose:m,onFocus:x,onKeyDown:k,onMouseDown:b,onOpen:_,open:f,options:d,readOnly:p,shadow:v=!0,style:E,variant:S="default",value:$,width:D="auto",...H},P){const{isEnabled:q,options:ee,setValue:pe,value:he,wrapperProps:se,DropdownButton:ke,Wrapper:be}=Dp({className:n,defaultValue:r,disabled:o,native:!1,onChange:h,options:d,style:E,readOnly:p,value:$,variant:S,width:D}),A=w.useRef(null),L=w.useRef(null),R=w.useRef(null),{activeOption:W,handleActivateOptionIndex:Y,handleBlur:O,handleButtonKeyDown:B,handleDropdownKeyDown:G,handleFocus:M,handleMouseDown:Q,handleOptionClick:ye,handleSetDropdownRef:j,handleSetOptionRef:F,open:U,selectedOption:ue}=fv({onBlur:g,onChange:h,onClose:m,onFocus:x,onKeyDown:k,onMouseDown:b,onOpen:_,open:f,options:ee,value:he,selectRef:L,setValue:pe,wrapperRef:R});w.useImperativeHandle(P,()=>({focus:yn=>{var Qt;(Qt=L.current)===null||Qt===void 0||Qt.focus(yn)},node:A.current,value:String(he)}),[he]);const ie=w.useMemo(()=>ue?typeof l=="function"?l(ue):ue.label:"",[l,ue]),_e=q?1:void 0,Se=w.useMemo(()=>s?{overflow:"auto",maxHeight:s}:void 0,[s]),nt=Ap(),_t=w.useMemo(()=>ee.map((yn,Qt)=>{const ui=`${he}-${Qt}`,ci=yn===W,Tr=yn===ue;return y.createElement(hv,{activateOptionIndex:Y,active:ci,index:Qt,key:ui,onClick:ye,option:yn,selected:Tr,setRef:F})}),[W,Y,ye,F,ee,ue,he]);return y.createElement(be,{...se,$disabled:o,ref:R,shadow:v,style:{...E,width:D}},y.createElement("input",{name:c,ref:A,type:"hidden",value:String(he),...i}),y.createElement(ru,{"aria-disabled":o,"aria-expanded":U,"aria-haspopup":"listbox","aria-label":e,"aria-labelledby":t??a,"aria-owns":q&&U?nt:void 0,onBlur:O,onFocus:M,onKeyDown:B,onMouseDown:q?Q:b,ref:L,role:"button",tabIndex:_e,...H},y.createElement(nv,null,ie),ke),q&&U&&y.createElement(av,{id:nt,onKeyDown:G,ref:j,role:"listbox",style:Se,tabIndex:0,variant:S},_t))}const Np=w.forwardRef(mv);Np.displayName="Select";const gv=C.div`
  position: relative;
  display: flex;
  align-items: center;
  padding: ${e=>e.noPadding?"0":"4px"};
`,Ya=w.forwardRef(function({children:t,noPadding:n=!1,...r},o){return y.createElement(gv,{noPadding:n,ref:o,...r},t)});Ya.displayName="Toolbar";const vv=C.div`
  padding: 16px;
`,vn=w.forwardRef(function({children:t,...n},r){return y.createElement(vv,{ref:r,...n},t)});vn.displayName="WindowContent";const yv=C.div`
  height: 33px;
  line-height: 33px;
  padding-left: 0.25rem;
  padding-right: 3px;
  font-weight: bold;
  border: 2px solid ${({theme:e})=>e.material};
  ${({active:e})=>e===!1?N`
          background: ${({theme:t})=>t.headerNotActiveBackground};
          color: ${({theme:t})=>t.headerNotActiveText};
        `:N`
          background: ${({theme:t})=>t.headerBackground};
          color: ${({theme:t})=>t.headerText};
        `}

  ${ai} {
    padding-left: 0;
    padding-right: 0;
    height: 27px;
    width: 31px;
  }
`,Ao=w.forwardRef(function({active:t=!0,children:n,...r},o){return y.createElement(yv,{active:t,ref:o,...r},n)});Ao.displayName="WindowHeader";const xv=C.div`
  position: relative;
  padding: 4px;
  font-size: 1rem;
  ${ge({style:"window"})}
  ${wt()}
`,wv=C.span`
  ${({theme:e})=>N`
    display: inline-block;
    position: absolute;
    bottom: 10px;
    right: 10px;
    width: 25px;
    height: 25px;
    background-image: linear-gradient(
      135deg,
      ${e.borderLightest} 16.67%,
      ${e.material} 16.67%,
      ${e.material} 33.33%,
      ${e.borderDark} 33.33%,
      ${e.borderDark} 50%,
      ${e.borderLightest} 50%,
      ${e.borderLightest} 66.67%,
      ${e.material} 66.67%,
      ${e.material} 83.33%,
      ${e.borderDark} 83.33%,
      ${e.borderDark} 100%
    );
    background-size: 8.49px 8.49px;
    clip-path: polygon(100% 0px, 0px 100%, 100% 100%);
    cursor: nwse-resize;
  `}
`,Ut=w.forwardRef(({children:e,resizable:t=!1,resizeRef:n,shadow:r=!0,...o},l)=>y.createElement(xv,{ref:l,shadow:r,...o},e,t&&y.createElement(wv,{"data-testid":"resizeHandle",ref:n})));Ut.displayName="Window";const kv=C($o)`
  width: 234px;
  margin: 1rem 0;
  background: ${({theme:e})=>e.canvas};
`,bv=C.div`
  display: flex;
  background: ${({theme:e})=>e.materialDark};
  color: #dfe0e3;
`,Sv=C.div`
  display: flex;
  flex-wrap: wrap;
`,Dt=C.div`
  text-align: center;
  height: 1.5em;
  line-height: 1.5em;
  width: 14.28%;
`,Ev=C.span`
  cursor: pointer;

  background: ${({active:e,theme:t})=>e?t.hoverBackground:"transparent"};
  color: ${({active:e,theme:t})=>e?t.canvasTextInvert:t.canvasText};

  &:hover {
    border: 2px dashed
      ${({theme:e,active:t})=>t?"none":e.materialDark};
  }
`,$v=[{value:0,label:"January"},{value:1,label:"February"},{value:2,label:"March"},{value:3,label:"April"},{value:4,label:"May"},{value:5,label:"June"},{value:6,label:"July"},{value:7,label:"August"},{value:8,label:"September"},{value:9,label:"October"},{value:10,label:"November"},{value:11,label:"December"}];function Av(e,t){return new Date(e,t+1,0).getDate()}function Cv(e,t,n){return new Date(e,t,n).getDay()}function Tv(e){const t=new Date(Date.parse(e)),n=t.getUTCDate(),r=t.getUTCMonth(),o=t.getUTCFullYear();return{day:n,month:r,year:o}}const jv=w.forwardRef(({className:e,date:t=new Date().toISOString(),onAccept:n,onCancel:r,shadow:o=!0},l)=>{const[i,a]=w.useState(()=>Tv(t)),{year:s,month:c,day:g}=i,h=w.useCallback(({value:_})=>{a(f=>({...f,month:_}))},[]),m=w.useCallback(_=>{a(f=>({...f,year:_}))},[]),x=w.useCallback(_=>{a(f=>({...f,day:_}))},[]),k=w.useCallback(()=>{const _=[i.year,i.month+1,i.day].map(f=>String(f).padStart(2,"0")).join("-");n==null||n(_)},[i.day,i.month,i.year,n]),b=w.useMemo(()=>{const _=Array.from({length:42}),f=Cv(s,c,1);let d=g;const p=Av(s,c);return d=d<p?d:p,_.forEach((v,E)=>{if(E>=f&&E<p+f){const S=E-f+1;_[E]=y.createElement(Dt,{key:E,onClick:()=>{x(S)}},y.createElement(Ev,{active:S===d},S))}else _[E]=y.createElement(Dt,{key:E})}),_},[g,x,c,s]);return y.createElement(Ut,{className:e,ref:l,shadow:o,style:{margin:20}},y.createElement(Ao,null,y.createElement("span",{role:"img","aria-label":"📆"},"📆"),"Date"),y.createElement(vn,null,y.createElement(Ya,{noPadding:!0,style:{justifyContent:"space-between"}},y.createElement(Np,{options:$v,value:c,onChange:h,width:128,menuMaxHeight:200}),y.createElement($p,{value:s,onChange:m,width:100})),y.createElement(kv,null,y.createElement(bv,null,y.createElement(Dt,null,"S"),y.createElement(Dt,null,"M"),y.createElement(Dt,null,"T"),y.createElement(Dt,null,"W"),y.createElement(Dt,null,"T"),y.createElement(Dt,null,"F"),y.createElement(Dt,null,"S")),y.createElement(Sv,null,b)),y.createElement(Ya,{noPadding:!0,style:{justifyContent:"space-between"}},y.createElement(J,{fullWidth:!0,onClick:r,disabled:!r},"Cancel"),y.createElement(J,{fullWidth:!0,onClick:n?k:void 0,disabled:!n},"OK"))))});jv.displayName="DatePicker";const _v=e=>{switch(e){case"status":case"well":return N`
        ${ge({style:"status"})}
      `;case"window":case"outside":return N`
        ${ge({style:"window"})}
      `;case"field":return N`
        ${ge({style:"field"})}
      `;default:return N`
        ${ge()}
      `}},Dv=C.div`
  position: relative;
  font-size: 1rem;
  ${({variant:e})=>_v(e)}
  ${({variant:e})=>wt(e==="field"?{background:"canvas",color:"canvasText"}:void 0)}
`,Nv=w.forwardRef(({children:e,shadow:t=!1,variant:n="window",...r},o)=>y.createElement(Dv,{ref:o,shadow:t,variant:n,...r},e));Nv.displayName="Frame";const Iv=C.fieldset`
  position: relative;
  border: 2px solid
    ${({theme:e,variant:t})=>t==="flat"?e.flatDark:e.borderLightest};
  padding: 16px;
  margin-top: 8px;
  font-size: 1rem;
  color: ${({theme:e})=>e.materialText};
  ${({variant:e})=>e!=="flat"&&N`
      box-shadow: -1px -1px 0 1px ${({theme:t})=>t.borderDark},
        inset -1px -1px 0 1px ${({theme:t})=>t.borderDark};
    `}
  ${e=>e.$disabled&&xt()}
`,Lv=C.legend`
  display: flex;
  position: absolute;
  top: 0;
  left: 8px;
  transform: translateY(calc(-50% - 2px));
  padding: 0 8px;

  font-size: 1rem;
  background: ${({theme:e,variant:t})=>t==="flat"?e.canvas:e.material};
`,zv=w.forwardRef(({label:e,disabled:t=!1,variant:n="default",children:r,...o},l)=>y.createElement(Iv,{"aria-disabled":t,$disabled:t,variant:n,ref:l,...o},e&&y.createElement(Lv,{variant:n},e),r));zv.displayName="GroupBox";const Ip=C.div`
  ${({theme:e,size:t="100%"})=>`
  display: inline-block;
  box-sizing: border-box;
  height: ${fn(t)};
  width: 5px;
  border-top: 2px solid ${e.borderLightest};
  border-left: 2px solid ${e.borderLightest};
  border-bottom: 2px solid ${e.borderDark};
  border-right: 2px solid ${e.borderDark};
  background: ${e.material};
`}
`;Ip.displayName="Handle";const Rv="url('data:image/gif;base64,R0lGODlhPAA8APQAADc3N6+vr4+Pj05OTvn5+V1dXZ+fn29vby8vLw8PD/X19d/f37S0tJSUlLq6und3d39/f9XV1c/Pz+bm5qamphkZGWZmZsbGxr+/v+rq6tra2u/v7yIiIv///wAAAAAAACH/C05FVFNDQVBFMi4wAwEAAAAh+QQFBAAfACH+I1Jlc2l6ZWQgb24gaHR0cHM6Ly9lemdpZi5jb20vcmVzaXplACwAAAAAPAA8AAAF/+AnjmRpnmiqrmzrvnAsz3Rt37jr7Xzv/8BebhQsGn1D0XFZTH6YUGQySvU4fYKAdsvtdi1Cp3In6ZjP6HTawBMTyWbFYk6v18/snXvsKXciUApmeVZ7PH6ATIIdhHtPcB0TDQ1gQBCTBINthpBnAUEaa5tuh2mfQKFojZx9aRMSEhA7FLAbonqsfmoUOxFqmriknWm8Hr6/q8IeCAAAx2cTERG2aBTNHMGOj8a/v8WF2m/c3cSj4SQ8C92n4Ocm6evm7ui9CosdBPbs8yo8E2YO5PE74Q+gwIElCnYImA3hux3/Fh50yCciw3YUt2GQtiiDtGQO4f3al1GkGpIDeXlg0KDhXpoMLBtMVPaMnJlv/HjUtIkzHA8HEya4tLkhqICGV4bZVAMyaaul3ZpOUQoVz8wbpaoyvWojq1ZVXGt4/QoM49SnZMs6GktW6hC2X93mgKtVbtceWbzo9VIJKdYqUJwCPiJ4cJOzhg+/TWwko+PHkCNLdhgCACH5BAUEAB8ALAAAAAABAAEAAAUD4BcCACH5BAUEAB8ALBYADAAQAA0AAAVFYCeOZPmVaKqimeO+MPxFXv3d+F17Cm3nuJ1ic7lAdroapUjABZCfnQb4ef6k1OHGULtsNk3qjVKLiIFkj/mMIygU4VwIACH5BAUEAB8ALAAAAAABAAEAAAUD4BcCACH5BAUEAB8ALBkAIwAKAAcAAAUp4CdehrGI6Ed5XpSKa4teguBoGlVPAXuJBpam5/l9gh7NZrFQiDJMRQgAIfkEBQQAHwAsAAAAAAEAAQAABQPgFwIAIfkEBQQAHwAsFgAPABAAIQAABVBgJ45kaZ5oakZB67bZ+M10bd94ru987//AoHBILNYYAsGlR/F4IkwnlLeZTBQ9UlaWwzweERHjuzAKFZkMYYZWm4mOw0ETfdanO8Vms7aFAAAh+QQFBAAfACwAAAAAAQABAAAFA+AXAgAh+QQFBAAfACwZABIACgAeAAAFUGAnjmRpnij5rerqtu4Hx3Rt33iu758iZrUZa1TDCASLGsXjiSiZzmFnM5n4TNJSdmREElfL5lO8cgwGACbgrAkwPat3+x1naggKRS+f/4QAACH5BAUEAB8ALAAAAAABAAEAAAUD4BcCACH5BAUEAB8ALBYAIwAQAA0AAAVE4CeOXdmNaGqeabu27SUIC5xSnifZKK7zl8djkCsIaylGziNaakaEzcbH/Cwl0k9kuWxyPYptzrZULA7otFpNIK1eoxAAIfkEBQQAHwAsAAAAAAEAAQAABQPgFwIAIfkEBQQAHwAsAAAAAAEAAQAABQPgFwIAIfkEBQQAHwAsAAAAAAEAAQAABQPgFwIAIfkEBQQAHwAsAAAAAAEAAQAABQPgFwIAIfkEBQQAHwAsAAAAAAEAAQAABQPgFwIAIfkEBQQAHwAsAAAAAAEAAQAABQPgFwIAIfkEBQQAHwAsAAAAAAEAAQAABQPgFwIAIfkEBQQAHwAsAAAAAAEAAQAABQPgFwIAIfkEBQQAHwAsAAAAAAEAAQAABQPgFwIAIfkECQQAHwAsDgAEACAANAAABTHgJ45kaZ5oqq5s675wLM90bd94ru987//AoHBILBqPyKRyyWw6n9CodEqtWq/Y7CoEACH5BAUEAB8ALAAAAAA8ADwAAAX/4CeOZGmeaKqubFt6biy3Xj3fuFjveU/vPJ/wBAQOj6RiEClUGpk9IMAJxQEdmQK1Grt2OhutkvurOb7f8JaM8qLT4iKbuDu/0erxfOS+4+NPex9mfn55coIfCAuFhoBLbDUAjI1vh4FkOxSVd5eQXB4GnI5rXAAbo6R6VTUFqKmWjzasNaKwsaVIHhAEt3cLTjBQA6++XwoHuUM1vMYdyMorwoN8wkC2t9A8s102204Wxana3DNAAQO1FjUCEDXhvuTT5nUdEwOiGxa8BBDwXxKaLTiAKoMFRvJy9CmmoFcHAgrQSEiwKwICDwU0pAMQIdmnboR8TfwWrJyMPrAiz1DkNs2aSRbe6hnr99LEvDJ9IB5DQ8Dhm36glNh5COGBAmQNHrbz+WXBFChOTqFx5+GBxwYCmL1ZcPHmMiWuvkTgECzBBUvrvH4tErbDWCcYDB2IBPbV2yJJ72SZ46TtXSB5v2RIp1ZXXbFkgWxCc68mk752E3tY/OZeIsiIaxi9o+BBokGH3SZ+4FPbZ8yiPQxNeDl0hNUeHWcKjYb1Zx20bd/GzRaV7t28gRSYELvw7pIfgVcLplwF8+bOo0Ffjmm6zerWrxvPzoe79w8hAAAh+QQJBAAfACwBAAEAOgA6AAAFRuAnjmRpnmiqrmzrvnAsz3Rt33iu73zv/8CgcEgsGo/IpHLJbDqf0Kh0Sq1ar9isdsvter/gsHhMLpvP6LR6zW673/D4MgQAIfkEBQQAHwAsAAAAADwAPAAABf/gJ45kaZ5oqq5s675wLM90bd94ru987//AoHBILBqPyJxnyTQym6nn0ilVSa9XGHY7jXKx2m/WK36Gy1CUVCBpu9+OtNqDeNslgip5Gej4/4ATcidLAICHHQF6c0x9iH+CXV6Gj36KZnsejgsREQSACp0Yg0ydEZWWi4RPjgdLG48apEuogJeDJVKtr7GzHrV/t5KrjX6uHhQMF4cKCwujTxHOwKmYjHzGTw+VEVIK1MGqJrrZTNuP3U/f4IniuazlSwMUFMugE/j47NW4JOQdx9bsoybMgxV4ALEIGAis4MFiCZkUaLPgUAYHGDF+Yucw0y5z3Lzt63hNUzwP5xCRpWOyDhxJYtgiStBQEVCGAAEM6MLp0p0/hMdgIZI17AOTntZgmowo9BBRgz9/EfQ54h8BBS39bKDXwBc9CrVejkNYKRLUSWGpivhXtt9PSpXEvmNiwYDdu3jzFB3LAa9fAxbUGkXjtmSZh4TPJM4kRgbhvVEL9xhTEongJJgza97MubPnz6BDix5NurTp0yJCAAAh+QQJBAAfACwEAA4ANAAgAAAFMeAnjmRpnmiqrmzrvnAsz3Rt33iu73zv/8CgcEgsGo/IpHLJbDqf0Kh0Sq1ar9jsKgQAIfkEBQQAHwAsAAAAADwAPAAABf/gJ45kaZ5oqq5s6bVwLHu0bN8uXeM8rP+9YOoHFBpHRN1xmSwue02A82lrFjaOKbVl3XQ6WeWWm7x+v+HdeFj2ntHaNbL9jUAI5/RLTurWOR53eXFbfh0RgB4PCm9hfCKGiDSLb18Bjx+RiR4HjG8TA3trmkSdZxuhalSkRA2VBqpPrD+ulR0Go3SHmz8CeG8bFqJMupJNHr5nCsKxQccTg4oUNA0YCYG/HQQQYsSlnmCUFLUXgm8EAsPeP6Zf2baV2+rEmTrt8PDyzS7O9uD4b5YV2VGjGw52/wB+CaYjlQcpNBAQioHwy4QMCxe4i3BKGIQN3K7AArBATz8anUDADcgQDMGCbQkknDKAh4ABNxQ0gpnoQ8eDVAUO0ADAzUNMhbZMQiG4R4mOo0gb8eTCQgeEqJVM7juCDWvWJnI4ev2aZIwHl2PfZIBIZBXKtAsLgC1kJu0GuWXNaoB7d67ZlWP75jVLw4JXwW35PNSJFPFUrmIb402smFNCW44N5kJ5+dTkx+vuAfus+VHF0X4xzeHsObXq1ZY7ZN76mt0C0rRf1zuWW/du175PHAu+YjhxFcCPm6CsHHnv5kig6w4BACH5BAkEAB8ALAEAAQA6ADoAAAVG4CeOZGmeaKqubOu+cCzPdG3feK7vfO//wKBwSCwaj8ikcslsOp/QqHRKrVqv2Kx2y+16v+CweEwum8/otHrNbrvf8PgyBAAh+QQFBAAfACwAAAAAPAA8AAAF/+AnjmRpnmiqrmzrvnAsz3Rt37jr7Xzv/8BebhQsGn1D0XFZTH6YUGQySvU4fYKAdsvtdi1Cp3In6ZjP6HTawBMTyWbFYk6v18/snXvsKXciUApmeVZ7PH6ATIIdhHtPcB0TDQ1gQBCTBINthpBnAUEaa5tuh2mfQKFojZx9aRMSEhA7FLAbonqsfmoUOxFqmriknWm8Hr6/q8IeCAAAx2cTERG2aBTNHMGOj8a/v8WF2m/c3cSj4SQ8C92n4Ocm6evm7ui9CosdBPbs8yo8E2YO5PE74Q+gwIElCnYImA3hux3/Fh50yCciw3YUt2GQtiiDtGQO4f3al1GkGpIDeXlg0KDhXpoMLBtMVPaMnJlv/HjUtIkzHA8HEya4tLkhqICGV4bZVAMyaaul3ZpOUQoVz8wbpaoyvWojq1ZVXGt4/QoM49SnZMs6GktW6hC2X93mgKtVbtceWbzo9VIJKdYqUJwCPiJ4cJOzhg+/TWwko+PHkCNLdhgCACH5BAUEAB8ALAAAAAABAAEAAAUD4BcCADs=')",Pv=C.div`
  display: inline-block;
  height: ${({size:e})=>fn(e)};
  width: ${({size:e})=>fn(e)};
`,Ov=C.span`
  display: block;
  background: ${Rv};
  background-size: cover;
  width: 100%;
  height: 100%;
`,Bv=w.forwardRef(({size:e=30,...t},n)=>y.createElement(Pv,{size:e,ref:n,...t},y.createElement(Ov,null)));Bv.displayName="Hourglass";const Mv=C.div`
  position: relative;
  display: inline-block;
  padding-bottom: 26px;
`,Fv=C.div`
  position: relative;
`,Hv=C.div`
  position: relative;
  z-index: 1;
  box-sizing: border-box;
  width: 195px;
  height: 155px;
  padding: 12px;
  background: ${({theme:e})=>e.material};
  border-top: 4px solid ${({theme:e})=>e.borderLightest};
  border-left: 4px solid ${({theme:e})=>e.borderLightest};
  border-bottom: 4px solid ${({theme:e})=>e.borderDark};
  border-right: 4px solid ${({theme:e})=>e.borderDark};

  outline: 1px dotted ${({theme:e})=>e.material};
  outline-offset: -3px;
  &:before {
    content: '';
    position: absolute;
    left: 0;
    top: 0;
    width: 100%;
    height: 100%;
    outline: 1px dotted ${({theme:e})=>e.material};
  }
  box-shadow: 1px 1px 0 1px ${({theme:e})=>e.borderDarkest};

  &:after {
    content: '';
    display: inline-block;
    position: absolute;
    bottom: 4px;
    right: 12px;
    width: 10px;
    border-top: 2px solid #4d9046;
    border-bottom: 2px solid #07ff00;
  }
`,Uv=C(jt).attrs(()=>({"data-testid":"background"}))`
  width: 100%;
  height: 100%;
`,Qv=C.div`
  box-sizing: border-box;
  position: absolute;
  top: calc(100% + 2px);
  left: 50%;
  transform: translateX(-50%);
  height: 10px;
  width: 50%;
  background: ${({theme:e})=>e.material};
  border-left: 2px solid ${({theme:e})=>e.borderLightest};
  border-bottom: 2px solid ${({theme:e})=>e.borderDarkest};
  border-right: 2px solid ${({theme:e})=>e.borderDarkest};
  box-shadow: inset 0px 0px 0px 2px ${({theme:e})=>e.borderDark};

  &:before {
    content: '';
    position: absolute;
    top: calc(100% + 2px);
    left: 50%;
    transform: translateX(-50%);
    width: 80%;
    height: 8px;
    background: ${({theme:e})=>e.material};
    border-left: 2px solid ${({theme:e})=>e.borderLightest};
    border-right: 2px solid ${({theme:e})=>e.borderDarkest};
    box-shadow: inset 0px 0px 0px 2px ${({theme:e})=>e.borderDark};
  }
  &:after {
    content: '';
    position: absolute;
    top: calc(100% + 8px);
    left: 50%;
    transform: translateX(-50%);
    width: 150%;
    height: 4px;
    background: ${({theme:e})=>e.material};
    border: 2px solid ${({theme:e})=>e.borderDark};
    border-bottom: none;
    box-shadow: inset 1px 1px 0px 1px ${({theme:e})=>e.borderLightest},
      1px 1px 0 1px ${({theme:e})=>e.borderDarkest};
  }
`,Vv=w.forwardRef(({backgroundStyles:e,children:t,...n},r)=>y.createElement(Mv,{ref:r,...n},y.createElement(Fv,null,y.createElement(Hv,null,y.createElement(Uv,{style:e},t)),y.createElement(Qv,null))));Vv.displayName="Monitor";const Wv=C.div`
  display: inline-block;
  height: ${Ie.md};
  width: 100%;
`,Gv=C(jt)`
  width: 100%;
  height: 100%;
  position: relative;
  text-align: center;
  padding: 0;
  overflow: hidden;
  &:before {
    z-index: 1;
  }
`,Lp=N`
  width: calc(100% - 4px);
  height: calc(100% - 4px);

  display: flex;
  align-items: center;
  justify-content: space-around;
`,Kv=C.div`
  position: relative;
  top: 4px;
  ${Lp}
  background: ${({theme:e})=>e.canvas};
  color: #000;
  margin-left: 2px;
  margin-top: -2px;
  color: ${({theme:e})=>e.materialText};
`,Yv=C.div`
  position: absolute;
  top: 2px;
  left: 2px;
  ${Lp}
  color: ${({theme:e})=>e.materialTextInvert};
  background: ${({theme:e})=>e.progress};
  clip-path: polygon(
    0 0,
    ${({value:e=0})=>e}% 0,
    ${({value:e=0})=>e}% 100%,
    0 100%
  );
  transition: 0.4s linear clip-path;
`,Xv=C.div`
  width: calc(100% - 6px);
  height: calc(100% - 8px);
  position: absolute;
  left: 3px;
  top: 4px;
  box-sizing: border-box;
  display: inline-flex;
`,zp=17,Zv=C.span`
  display: inline-block;
  width: ${zp}px;
  box-sizing: border-box;
  height: 100%;
  background: ${({theme:e})=>e.progress};
  border-color: ${({theme:e})=>e.material};
  border-width: 0px 1px;
  border-style: solid;
`,Jv=w.forwardRef(({hideValue:e=!1,shadow:t=!0,value:n,variant:r="default",...o},l)=>{const i=e?null:`${n}%`,a=w.useRef(null),[s,c]=w.useState([]),g=w.useCallback(()=>{if(!a.current||n===void 0)return;const h=a.current.getBoundingClientRect().width,m=Math.round(n/100*h/zp);c(Array.from({length:m}))},[n]);return w.useEffect(()=>(g(),window.addEventListener("resize",g),()=>window.removeEventListener("resize",g)),[g]),y.createElement(Wv,{"aria-valuenow":n!==void 0?Math.round(n):void 0,ref:l,role:"progressbar",variant:r,...o},y.createElement(Gv,{variant:r,shadow:t},r==="default"?y.createElement(y.Fragment,null,y.createElement(Kv,{"data-testid":"defaultProgress1"},i),y.createElement(Yv,{"data-testid":"defaultProgress2",value:n},i)):y.createElement(Xv,{ref:a,"data-testid":"tileProgress"},s.map((h,m)=>y.createElement(Zv,{key:m})))))});Jv.displayName="ProgressBar";const Rp=N`
  width: ${Tt}px;
  height: ${Tt}px;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: space-around;
  margin-right: 0.5rem;
`,qv=C(jt)`
  ${Rp}
  background: ${({$disabled:e,theme:t})=>e?t.material:t.canvas};

  &:before {
    content: '';
    position: absolute;
    left: 0px;
    top: 0px;
    width: calc(100% - 4px);
    height: calc(100% - 4px);
    border-radius: 50%;
    box-shadow: none;
  }
`,e1=C.div`
  ${Pn()}
  ${Rp}
  outline: none;
  background: ${({$disabled:e,theme:t})=>e?t.flatLight:t.canvas};
  &:before {
    content: '';
    display: inline-block;
    position: absolute;
    top: 0;
    left: 0;
    width: calc(100% - 4px);
    height: calc(100% - 4px);
    border: 2px solid ${({theme:e})=>e.flatDark};
    border-radius: 50%;
  }
`,t1=C.span.attrs(()=>({"data-testid":"checkmarkIcon"}))`
  position: absolute;
  content: '';
  display: inline-block;
  top: 50%;
  left: 50%;
  width: 6px;
  height: 6px;
  transform: translate(-50%, -50%);
  border-radius: 50%;
  background: ${e=>e.$disabled?e.theme.checkmarkDisabled:e.theme.checkmark};
`,n1={flat:e1,default:qv},r1=w.forwardRef(({checked:e,className:t="",disabled:n=!1,label:r="",onChange:o,style:l={},variant:i="default",...a},s)=>{const c=n1[i];return y.createElement(eu,{$disabled:n,className:t,style:l},y.createElement(c,{$disabled:n,role:"presentation"},e&&y.createElement(t1,{$disabled:n,variant:i})),y.createElement(Bl,{disabled:n,onChange:n?void 0:o,readOnly:n,type:"radio",checked:e,ref:s,...a}),r&&y.createElement(tu,null,r))});r1.displayName="Radio";const o1=typeof window<"u"?w.useLayoutEffect:w.useEffect;function xn(e){const t=w.useRef(e);return o1(()=>{t.current=e}),w.useCallback((...n)=>(0,t.current)(...n),[])}function jc(e,t){typeof e=="function"?e(t):e&&(e.current=t)}function _c(e,t){return w.useMemo(()=>e==null&&t==null?null:n=>{jc(e,n),jc(t,n)},[e,t])}let si=!0,Xa=!1,Dc;const l1={text:!0,search:!0,url:!0,tel:!0,email:!0,password:!0,number:!0,date:!0,month:!0,week:!0,time:!0,datetime:!0,"datetime-local":!0};function i1(e){if("type"in e){const{type:t,tagName:n}=e;if(n==="INPUT"&&l1[t]&&!e.readOnly||n==="TEXTAREA"&&!e.readOnly)return!0}return!!("isContentEditable"in e&&e.isContentEditable)}function a1(e){e.metaKey||e.altKey||e.ctrlKey||(si=!0)}function Fi(){si=!1}function s1(){this.visibilityState==="hidden"&&Xa&&(si=!0)}function u1(e){e.addEventListener("keydown",a1,!0),e.addEventListener("mousedown",Fi,!0),e.addEventListener("pointerdown",Fi,!0),e.addEventListener("touchstart",Fi,!0),e.addEventListener("visibilitychange",s1,!0)}function c1(e){const{target:t}=e;try{return t.matches(":focus-visible")}catch{}return si||i1(t)}function d1(){Xa=!0,window.clearTimeout(Dc),Dc=window.setTimeout(()=>{Xa=!1},100)}function f1(){const e=w.useCallback(t=>{const n=qf.findDOMNode(t);n!=null&&u1(n.ownerDocument)},[]);return{isFocusVisible:c1,onBlurVisible:d1,ref:e}}function p1(e,t,n){return(n-t)*e+t}function Go(e,t){if(t!==void 0&&"changedTouches"in e){for(let n=0;n<e.changedTouches.length;n+=1){const r=e.changedTouches[n];if(r.identifier===t)return{x:r.clientX,y:r.clientY}}return!1}return"clientX"in e?{x:e.clientX,y:e.clientY}:!1}function Ko(e){return e&&e.ownerDocument||document}function h1(e,t){var n;const{index:r}=(n=e.reduce((o,l,i)=>{const a=Math.abs(t-l);return o===null||a<o.distance||a===o.distance?{distance:a,index:i}:o},null))!==null&&n!==void 0?n:{};return r??-1}const m1=C.div`
  display: inline-block;
  position: relative;
  touch-action: none;
  &:before {
    content: '';
    display: inline-block;
    position: absolute;
    top: -2px;
    left: -15px;
    width: calc(100% + 30px);
    height: ${({hasMarks:e})=>e?"41px":"39px"};
    ${({isFocused:e,theme:t})=>e&&`
        outline: 2px dotted ${t.materialText};
        `}
  }

  ${({orientation:e,size:t})=>e==="vertical"?N`
          height: ${t};
          margin-right: 1.5rem;
          &:before {
            left: -6px;
            top: -15px;
            height: calc(100% + 30px);
            width: ${({hasMarks:n})=>n?"41px":"39px"};
          }
        `:N`
          width: ${t};
          margin-bottom: 1.5rem;
          &:before {
            top: -2px;
            left: -15px;
            width: calc(100% + 30px);
            height: ${({hasMarks:n})=>n?"41px":"39px"};
          }
        `}

  pointer-events: ${({$disabled:e})=>e?"none":"auto"};
`,Pp=()=>N`
  position: absolute;
  ${({orientation:e})=>e==="vertical"?N`
          bottom: 0;
          left: 50%;
          transform: translateX(-50%);
          height: 100%;
          width: 8px;
        `:N`
          left: 0;
          top: 50%;
          transform: translateY(-50%);
          height: 8px;
          width: 100%;
        `}
`,g1=C(jt)`
  ${Pp()}
`,v1=C(jt)`
  ${Pp()}

  border-left-color: ${({theme:e})=>e.flatLight};
  border-top-color: ${({theme:e})=>e.flatLight};
  border-right-color: ${({theme:e})=>e.canvas};
  border-bottom-color: ${({theme:e})=>e.canvas};
  &:before {
    border-left-color: ${({theme:e})=>e.flatDark};
    border-top-color: ${({theme:e})=>e.flatDark};
    border-right-color: ${({theme:e})=>e.flatLight};
    border-bottom-color: ${({theme:e})=>e.flatLight};
  }
`,y1=C.span`
  position: relative;
  ${({orientation:e})=>e==="vertical"?N`
          width: 32px;
          height: 18px;
          right: 2px;
          transform: translateY(-50%);
        `:N`
          height: 32px;
          width: 18px;
          top: 2px;
          transform: translateX(-50%);
        `}
  ${({variant:e})=>e==="flat"?N`
          ${Pn()}
          outline: 2px solid ${({theme:t})=>t.flatDark};
          background: ${({theme:t})=>t.flatLight};
        `:N`
          ${wt()}
          ${ge()}
          &:focus {
            outline: none;
          }
        `}
    ${({$disabled:e,theme:t})=>e&&Eo({mainColor:t.material,secondaryColor:t.borderLightest})}
`,lr=6,x1=C.span`
  display: inline-block;
  position: absolute;

  ${({orientation:e})=>e==="vertical"?N`
          right: ${-lr-2}px;
          bottom: 0px;
          transform: translateY(1px);
          width: ${lr}px;
          border-bottom: 2px solid ${({theme:t})=>t.materialText};
        `:N`
          bottom: ${-lr}px;
          height: ${lr}px;
          transform: translateX(-1px);
          border-left: 1px solid ${({theme:t})=>t.materialText};
          border-right: 1px solid ${({theme:t})=>t.materialText};
        `}

  color:  ${({theme:e})=>e.materialText};
  ${({$disabled:e,theme:t})=>e&&N`
      ${xt()}
      box-shadow: 1px 1px 0px ${t.materialTextDisabledShadow};
      border-color: ${t.materialTextDisabled};
    `}
`,w1=C.div`
  position: absolute;
  bottom: 0;
  left: 0;
  line-height: 1;
  font-size: 0.875rem;

  ${({orientation:e})=>e==="vertical"?N`
          transform: translate(${lr+2}px, ${lr+1}px);
        `:N`
          transform: translate(-0.5ch, calc(100% + 2px));
        `}
`,k1=w.forwardRef(({defaultValue:e,disabled:t=!1,marks:n=!1,max:r=100,min:o=0,name:l,onChange:i,onChangeCommitted:a,onMouseDown:s,orientation:c="horizontal",size:g="100%",step:h=1,value:m,variant:x="default",...k},b)=>{const _=x==="flat"?v1:g1,f=c==="vertical",[d=o,p]=pn({defaultValue:e,onChange:i??a,value:m}),{isFocusVisible:v,onBlurVisible:E,ref:S}=f1(),[$,D]=w.useState(!1),H=w.useRef(),P=w.useRef(null),q=_c(S,H),ee=_c(b,q),pe=xn(O=>{v(O)&&D(!0)}),he=xn(()=>{$!==!1&&(D(!1),E())}),se=w.useRef(),ke=w.useMemo(()=>n===!0&&Number.isFinite(h)?[...Array(Math.round((r-o)/h)+1)].map((O,B)=>({label:void 0,value:o+h*B})):Array.isArray(n)?n:[],[n,r,o,h]),be=xn(O=>{const B=(r-o)/10,G=ke.map(ye=>ye.value),M=G.indexOf(d);let Q=0;switch(O.key){case"Home":Q=o;break;case"End":Q=r;break;case"PageUp":h&&(Q=d+B);break;case"PageDown":h&&(Q=d-B);break;case"ArrowRight":case"ArrowUp":h?Q=d+h:Q=G[M+1]||G[G.length-1];break;case"ArrowLeft":case"ArrowDown":h?Q=d-h:Q=G[M-1]||G[0];break;default:return}O.preventDefault(),h&&(Q=Ac(Q,h,o)),Q=An(Q,o,r),p(Q),D(!0),i==null||i(Q),a==null||a(Q)}),A=w.useCallback(O=>{if(!H.current)return 0;const B=H.current.getBoundingClientRect();let G;f?G=(B.bottom-O.y)/B.height:G=(O.x-B.left)/B.width;let M;if(M=p1(G,o,r),h)M=Ac(M,h,o);else{const Q=ke.map(j=>j.value),ye=h1(Q,M);M=Q[ye]}return M=An(M,o,r),M},[ke,r,o,h,f]),L=xn(O=>{var B;const G=Go(O,se.current);if(!G)return;const M=A(G);(B=P.current)===null||B===void 0||B.focus(),p(M),D(!0),i==null||i(M)}),R=xn(O=>{const B=Go(O,se.current);if(!B)return;const G=A(B);a==null||a(G),se.current=void 0;const M=Ko(H.current);M.removeEventListener("mousemove",L),M.removeEventListener("mouseup",R),M.removeEventListener("touchmove",L),M.removeEventListener("touchend",R)}),W=xn(O=>{var B;s==null||s(O),O.preventDefault(),(B=P.current)===null||B===void 0||B.focus(),D(!0);const G=Go(O,se.current);if(G){const Q=A(G);p(Q),i==null||i(Q)}const M=Ko(H.current);M.addEventListener("mousemove",L),M.addEventListener("mouseup",R)}),Y=xn(O=>{var B;O.preventDefault();const G=O.changedTouches[0];G!=null&&(se.current=G.identifier),(B=P.current)===null||B===void 0||B.focus(),D(!0);const M=Go(O,se.current);if(M){const ye=A(M);p(ye),i==null||i(ye)}const Q=Ko(H.current);Q.addEventListener("touchmove",L),Q.addEventListener("touchend",R)});return w.useEffect(()=>{const{current:O}=H;O==null||O.addEventListener("touchstart",Y);const B=Ko(O);return()=>{O==null||O.removeEventListener("touchstart",Y),B.removeEventListener("mousemove",L),B.removeEventListener("mouseup",R),B.removeEventListener("touchmove",L),B.removeEventListener("touchend",R)}},[R,L,Y]),y.createElement(m1,{$disabled:t,hasMarks:!!ke.length,isFocused:$,onMouseDown:W,orientation:c,ref:ee,size:fn(g),...k},y.createElement("input",{disabled:t,name:l,type:"hidden",value:d??0}),ke&&ke.map(O=>y.createElement(x1,{$disabled:t,"data-testid":"tick",key:O.value/(r-o)*100,orientation:c,style:{[f?"bottom":"left"]:`${(O.value-o)/(r-o)*100}%`}},O.label&&y.createElement(w1,{"aria-hidden":!0,"data-testid":"mark",orientation:c},O.label))),y.createElement(_,{orientation:c,variant:x}),y.createElement(y1,{$disabled:t,"aria-disabled":t?!0:void 0,"aria-orientation":c,"aria-valuemax":r,"aria-valuemin":o,"aria-valuenow":d,onBlur:he,onFocus:pe,onKeyDown:be,orientation:c,ref:P,role:"slider",style:{[f?"bottom":"left"]:`${(f?-100:0)+100*(d-o)/(r-o)}%`},tabIndex:t?void 0:0,variant:x}))});k1.displayName="Slider";const b1=C.tbody`
  background: ${({theme:e})=>e.canvas};
  display: table-row-group;
  box-shadow: ${Js};
  overflow-y: auto;
`,S1=w.forwardRef(function({children:t,...n},r){return y.createElement(b1,{ref:r,...n},t)});S1.displayName="TableBody";const E1=C.td`
  padding: 0 8px;
`,$1=w.forwardRef(function({children:t,...n},r){return y.createElement(E1,{ref:r,...n},t)});$1.displayName="TableDataCell";const A1=C.thead`
  display: table-header-group;
`,C1=w.forwardRef(function({children:t,...n},r){return y.createElement(A1,{ref:r,...n},t)});C1.displayName="TableHead";const T1=C.th`
  position: relative;
  padding: 0 8px;
  display: table-cell;
  vertical-align: inherit;
  background: ${({theme:e})=>e.material};
  cursor: default;
  user-select: none;
  &:before {
    box-sizing: border-box;
    content: '';
    position: absolute;
    left: 0;
    top: 0;
    width: 100%;
    height: 100%;
    ${ge()}

    border-left: none;
    border-top: none;
  }
  ${({$disabled:e})=>!e&&N`
      &:active {
        &:before {
          ${ge({invert:!0,style:"window"})}
          border-left: none;
          border-top: none;
          padding-top: 2px;
        }

        & > div {
          position: relative;
          top: 2px;
        }
      }
    `}

  color: ${({theme:e})=>e.materialText};
  ${({$disabled:e})=>e&&xt()}
  &:hover {
    color: ${({theme:e})=>e.materialText};
    ${({$disabled:e})=>e&&xt()}
  }
`,j1=w.forwardRef(function({disabled:t=!1,children:n,onClick:r,onTouchStart:o=Fn,sort:l,...i},a){const s=l==="asc"?"ascending":l==="desc"?"descending":void 0;return y.createElement(T1,{$disabled:t,"aria-disabled":t,"aria-sort":s,onClick:t?void 0:r,onTouchStart:t?void 0:o,ref:a,...i},y.createElement("div",null,n))});j1.displayName="TableHeadCell";const _1=C.tr`
  color: inherit;
  display: table-row;
  height: calc(${Ie.md} - 2px);
  line-height: calc(${Ie.md} - 2px);
  vertical-align: middle;
  outline: none;

  color: ${({theme:e})=>e.canvasText};
  &:hover {
    background: ${({theme:e})=>e.hoverBackground};
    color: ${({theme:e})=>e.canvasTextInvert};
  }
`,D1=w.forwardRef(function({children:t,...n},r){return y.createElement(_1,{ref:r,...n},t)});D1.displayName="TableRow";const N1=C.table`
  display: table;
  width: 100%;
  border-collapse: collapse;
  border-spacing: 0;
  font-size: 1rem;
`,I1=C(jt)`
  &:before {
    box-shadow: none;
  }
`,L1=w.forwardRef(({children:e,...t},n)=>y.createElement(I1,null,y.createElement(N1,{ref:n,...t},e)));L1.displayName="Table";const z1=C.button`
  ${wt()}
  ${ge()}
  position: relative;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  font-size: 1rem;
  height: ${Ie.md};
  line-height: ${Ie.md};
  padding: 0 8px;
  border-bottom: none;
  border-top-left-radius: 5px;
  border-top-right-radius: 5px;
  margin: 0 0 -2px 0;
  cursor: default;
  color: ${({theme:e})=>e.materialText};
  user-select: none;
  font-family: inherit;
  &:focus:after,
  &:active:after {
    content: '';
    position: absolute;
    left: 0;
    top: 0;
    width: 100%;
    height: 100%;
    ${Sr}
    outline-offset: -6px;
  }
  ${e=>e.selected&&`
    z-index: 1;
    height: calc(${Ie.md} + 4px);
    top: -4px;
    margin-bottom: -6px;
    padding: 0 16px;
    margin-left: -8px;
    &:not(:last-child) {
      margin-right: -8px;
    }
  `}
  &:before {
    content: '';
    position: absolute;
    width: calc(100% - 4px);
    height: 6px;
    background: ${({theme:e})=>e.material};
    bottom: -4px;
    left: 2px;
  }
`,R1=w.forwardRef(({value:e,onClick:t,selected:n=!1,children:r,...o},l)=>y.createElement(z1,{"aria-selected":n,selected:n,onClick:i=>t==null?void 0:t(e,i),ref:l,role:"tab",...o},r));R1.displayName="Tab";const P1=C.div`
  ${wt()}
  ${ge()}
  position: relative;
  display: block;
  height: 100%;
  padding: 16px;
  font-size: 1rem;
`,O1=w.forwardRef(({children:e,...t},n)=>y.createElement(P1,{ref:n,...t},e));O1.displayName="TabBody";const B1=C.div`
  position: relative;
  ${({isMultiRow:e,theme:t})=>e&&`
  button {
    flex-grow: 1;
  }
  button:last-child:before {
    border-right: 2px solid ${t.borderDark};
  }
  `}
`,M1=C.div.attrs(()=>({"data-testid":"tab-row"}))`
  position: relative;
  display: flex;
  flex-wrap: no-wrap;
  text-align: left;
  left: 8px;
  width: calc(100% - 8px);

  &:not(:first-child):before {
    content: '';
    position: absolute;
    right: 0;
    left: 0;
    height: 100%;
    border-right: 2px solid ${({theme:e})=>e.borderDarkest};
    border-left: 2px solid ${({theme:e})=>e.borderLightest};
  }
`;function F1(e,t){const n=[];for(let r=t;r>0;r-=1)n.push(e.splice(0,Math.ceil(e.length/r)));return n}const H1=w.forwardRef(({value:e,onChange:t=Fn,children:n,rows:r=1,...o},l)=>{const i=w.useMemo(()=>{var a;const s=(a=y.Children.map(n,h=>{if(!y.isValidElement(h))return null;const m={selected:h.props.value===e,onClick:t};return y.cloneElement(h,m)}))!==null&&a!==void 0?a:[],c=F1(s,r).map((h,m)=>({key:m,tabs:h})),g=c.findIndex(h=>h.tabs.some(m=>m.props.selected));return c.push(c.splice(g,1)[0]),c},[n,t,r,e]);return y.createElement(B1,{...o,isMultiRow:r>1,role:"tablist",ref:l},i.map(a=>y.createElement(M1,{key:a.key},a.tabs)))});H1.displayName="Tabs";const U1=["blur","focus"],Q1=["click","contextmenu","doubleclick","drag","dragend","dragenter","dragexit","dragleave","dragover","dragstart","drop","mousedown","mouseenter","mouseleave","mousemove","mouseout","mouseover","mouseup"];function Nc(e){return"nativeEvent"in e&&U1.includes(e.type)}function Ic(e){return"nativeEvent"in e&&Q1.includes(e.type)}const V1={top:`top: -4px;
        left: 50%;
        transform: translate(-50%, -100%);`,bottom:`bottom: -4px;
           left: 50%;
           transform: translate(-50%, 100%);`,left:`left: -4px;
         top: 50%;
         transform: translate(-100%, -50%);`,right:`right: -4px;
          top: 50%;
          transform: translate(100%, -50%);`},W1=C.span`
  position: absolute;

  z-index: 1;
  display: ${e=>e.show?"block":"none"};
  padding: 4px;
  border: 2px solid ${({theme:e})=>e.borderDarkest};
  background: ${({theme:e})=>e.tooltip};
  box-shadow: ${Zs};
  text-align: center;
  font-size: 1rem;
  ${e=>V1[e.position]}
`,G1=C.div`
  position: relative;
  display: inline-block;
  white-space: nowrap;
`,K1=w.forwardRef(({className:e,children:t,disableFocusListener:n=!1,disableMouseListener:r=!1,enterDelay:o=1e3,leaveDelay:l=0,onBlur:i,onClose:a,onFocus:s,onMouseEnter:c,onMouseLeave:g,onOpen:h,style:m,text:x,position:k="top",...b},_)=>{const[f,d]=w.useState(!1),[p,v]=w.useState(),[E,S]=w.useState(),$=!n,D=!r,H=A=>{window.clearTimeout(p),window.clearTimeout(E);const L=window.setTimeout(()=>{d(!0),h==null||h(A)},o);v(L)},P=A=>{A.persist(),Nc(A)?s==null||s(A):Ic(A)&&(c==null||c(A)),H(A)},q=A=>{window.clearTimeout(p),window.clearTimeout(E);const L=window.setTimeout(()=>{d(!1),a==null||a(A)},l);S(L)},ee=A=>{A.persist(),Nc(A)?i==null||i(A):Ic(A)&&(g==null||g(A)),q(A)},pe=$?ee:void 0,he=$?P:void 0,se=D?P:void 0,ke=D?ee:void 0,be=$?0:void 0;return y.createElement(G1,{"data-testid":"tooltip-wrapper",onBlur:pe,onFocus:he,onMouseEnter:se,onMouseLeave:ke,tabIndex:be},y.createElement(W1,{className:e,"data-testid":"tooltip",position:k,ref:_,show:f,style:m,...b},x),t)});K1.displayName="Tooltip";const Za=C(tu)`
  white-space: nowrap;
`,Op=N`
  :focus {
    outline: none;
  }

  ${({$disabled:e})=>e?"cursor: default;":N`
          cursor: pointer;

          :focus {
            ${Za} {
              background: ${({theme:t})=>t.hoverBackground};
              color: ${({theme:t})=>t.materialTextInvert};
              outline: 2px dotted ${({theme:t})=>t.focusSecondary};
            }
          }
        `}
`,Y1=C.ul`
  position: relative;
  isolation: isolate;

  ${({isRootLevel:e})=>e&&N`
      &:before {
        content: '';
        position: absolute;
        top: 20px;
        bottom: 0;
        left: 5.5px;
        width: 1px;
        border-left: 2px dashed ${({theme:t})=>t.borderDark};
      }
    `}

  ul {
    padding-left: 19.5px;
  }

  li {
    position: relative;

    &:before {
      content: '';
      position: absolute;
      top: 17.5px;
      left: 5.5px;
      width: 22px;
      border-top: 2px dashed ${({theme:e})=>e.borderDark};
      font-size: 12px;
    }
  }
`,X1=C.li`
  position: relative;
  padding-left: ${({hasItems:e})=>e?"0":"13px"};

  ${({isRootLevel:e})=>e?N`
          &:last-child {
            &:after {
              content: '';
              position: absolute;
              top: 19.5px;
              left: 1px;
              bottom: 0;
              width: 10px;
              background: ${({theme:t})=>t.material};
            }
          }
        `:N`
          &:last-child {
            &:after {
              content: '';
              position: absolute;
              z-index: 1;
              top: 19.5px;
              bottom: 0;
              left: 1.5px;
              width: 10px;
              background: ${({theme:t})=>t.material};
            }
          }
        `}

  & > details > ul {
    &:after {
      content: '';
      position: absolute;
      top: -18px;
      bottom: 0;
      left: 25px;
      border-left: 2px dashed ${({theme:e})=>e.borderDark};
    }
  }
`,Z1=C.details`
  position: relative;
  z-index: 2;

  &[open] > summary:before {
    content: '-';
  }
`,J1=C.summary`
  position: relative;
  z-index: 1;
  display: inline-flex;
  align-items: center;
  color: ${({theme:e})=>e.materialText};
  user-select: none;
  padding-left: 18px;
  ${Op};

  &::-webkit-details-marker {
    display: none;
  }

  &:before {
    content: '+';
    position: absolute;
    left: 0;
    display: block;
    width: 8px;
    height: 9px;
    border: 2px solid #808080;
    padding-left: 1px;
    background-color: #fff;
    line-height: 8px;
    text-align: center;
  }
`,Lc=C(eu)`
  position: relative;
  z-index: 1;
  background: none;
  border: 0;
  font-family: inherit;
  padding-top: 8px;
  padding-bottom: 8px;
  margin: 0;
  ${Op};
`,q1=C.span`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 16px;
  height: 16px;
  margin-right: 6px;
`;function zc(e,t){return e.includes(t)?e.filter(n=>n!==t):[...e,t]}function Rc(e){e.preventDefault()}function Bp({className:e,disabled:t,expanded:n,innerRef:r,level:o,select:l,selected:i,style:a,tree:s=[]}){const c=o===0,g=w.useCallback(h=>{var m,x;const k=!!(h.items&&h.items.length>0),b=n.includes(h.id),_=(m=t||h.disabled)!==null&&m!==void 0?m:!1,f=_?Rc:E=>l(E,h),d=_?Rc:E=>l(E,h),p=i===h.id,v=y.createElement(q1,{"aria-hidden":!0},h.icon);return y.createElement(X1,{key:h.label,isRootLevel:c,role:"treeitem","aria-expanded":b,"aria-selected":p,hasItems:k},k?y.createElement(Z1,{open:b},y.createElement(J1,{onClick:f,$disabled:_},y.createElement(Lc,{$disabled:_},v,y.createElement(Za,null,h.label))),b&&y.createElement(Bp,{className:e,disabled:_,expanded:n,level:o+1,select:l,selected:i,style:a,tree:(x=h.items)!==null&&x!==void 0?x:[]})):y.createElement(Lc,{as:"button",$disabled:_,onClick:d},v,y.createElement(Za,null,h.label)))},[e,t,n,c,o,l,i,a]);return y.createElement(Y1,{className:c?e:void 0,style:c?a:void 0,ref:c?r:void 0,role:c?"tree":"group",isRootLevel:c},s.map(g))}function ey({className:e,defaultExpanded:t=[],defaultSelected:n,disabled:r=!1,expanded:o,onNodeSelect:l,onNodeToggle:i,selected:a,style:s,tree:c=[]},g){const[h,m]=pn({defaultValue:t,onChange:i,onChangePropName:"onNodeToggle",value:o,valuePropName:"expanded"}),[x,k]=pn({defaultValue:n,onChange:l,onChangePropName:"onNodeSelect",value:a,valuePropName:"selected"}),b=w.useCallback((d,p)=>{if(i){const v=zc(h,p);i(d,v)}m(v=>zc(v,p))},[h,i,m]),_=w.useCallback((d,p)=>{k(p),l&&l(d,p)},[l,k]),f=w.useCallback((d,p)=>{d.preventDefault(),_(d,p.id),p.items&&p.items.length&&b(d,p.id)},[_,b]);return y.createElement(Bp,{className:e,disabled:r,expanded:h,level:0,innerRef:g,select:f,selected:x,style:s,tree:c})}const ty=w.forwardRef(ey);ty.displayName="TreeView";const ny=()=>{const[e,t]=w.useState(!1),[n,r]=w.useState(!1),[o,l]=w.useState(!1),[i,a]=w.useState(!1),[s,c]=w.useState(!1),[g,h]=w.useState(!1),[m,x]=w.useState(!1),[k,b]=w.useState(!1);return u.jsx("div",{className:"header",children:u.jsxs("div",{className:"navbar",children:[u.jsxs(Ao,{className:"title",children:["Tinkoff95",u.jsx(J,{as:"a",href:"https://www.youtube.com/watch?v=dQw4w9WgXcQ",target:"_blank",children:u.jsx("span",{className:"close-icon",children:"x"})})]}),u.jsxs("div",{className:"container",children:[u.jsx("div",{className:"icon",children:u.jsx("a",{href:"#",children:u.jsx("h2",{style:{fontSize:"25px"},children:"TINKOFF"})})}),u.jsxs("ul",{className:"nav",children:[u.jsxs("div",{className:"nav_1",children:[u.jsx(J,{variant:"thin",onClick:()=>t(!e),children:"Частным лицам"}),u.jsxs("div",{className:`menu ${e?"active":""}`,children:[u.jsxs(St,{className:"menu_dropdown",children:[u.jsx(z,{onClick:()=>r(!n),primary:!0,size:"sm",children:"Банк"}),u.jsx(Pe,{}),u.jsx(z,{onClick:()=>l(!o),size:"sm",children:"Инвестиции"}),u.jsx(z,{onClick:()=>a(!i),size:"sm",children:"Сим-карта"}),u.jsx(z,{onClick:()=>c(!s),size:"sm",children:"Страхование"}),u.jsx(z,{onClick:()=>h(!g),size:"sm",children:"Путешествия"}),u.jsx(Pe,{}),u.jsx(z,{onClick:()=>x(!m),size:"sm",children:"Город"})]}),u.jsxs(St,{style:{position:"absolute"},className:`menu_bank ${n?"active":""}`,children:[u.jsx(z,{size:"sm",children:"Кредитные карты"}),u.jsx(Pe,{}),u.jsx(z,{size:"sm",children:"Дебетовые карты"}),u.jsx(z,{size:"sm",children:"Кредиты и ипотека"}),u.jsx(z,{size:"sm",children:"Детская карта"}),u.jsx(z,{size:"sm",children:"Вклады"}),u.jsx(z,{size:"sm",children:"Накопительный счет"}),u.jsx(z,{size:"sm",children:"Подписка Pro"}),u.jsx(z,{size:"sm",children:"Рассрочка"}),u.jsx(Pe,{}),u.jsx(z,{size:"sm",children:"Долями"})]}),u.jsxs(St,{style:{marginTop:"34px",position:"absolute"},className:`menu_bank ${o?"active":""}`,children:[u.jsx(z,{size:"sm",children:"Брокерский счет"}),u.jsx(Pe,{}),u.jsx(z,{size:"sm",children:"ИИС"}),u.jsx(z,{size:"sm",children:"Каталог бумаг"}),u.jsx(z,{size:"sm",children:"Пульс"}),u.jsx(z,{size:"sm",children:"Аналитика"}),u.jsx(z,{size:"sm",children:"Академия"}),u.jsx(Pe,{}),u.jsx(z,{size:"sm",children:"Терминал"})]}),u.jsxs(St,{style:{marginTop:"64px",position:"absolute"},className:`menu_bank ${i?"active":""}`,children:[u.jsx(z,{size:"sm",children:"Заказать симку"}),u.jsx(Pe,{}),u.jsx(z,{size:"sm",children:"Тарифы"}),u.jsx(z,{size:"sm",children:"Электронная сим-карта"}),u.jsx(z,{size:"sm",children:"Красивые номера"}),u.jsx(z,{size:"sm",children:"Услуги"}),u.jsx(z,{size:"sm",children:"Перенос номера"}),u.jsx(z,{size:"sm",children:"Роуминг"}),u.jsx(Pe,{}),u.jsx(z,{size:"sm",children:"Помощь"})]}),u.jsxs(St,{style:{marginTop:"92px",position:"absolute"},className:`menu_bank ${s?"active":""}`,children:[u.jsx(z,{size:"sm",children:"ОСАГО"}),u.jsx(Pe,{}),u.jsx(z,{size:"sm",children:"Каско"}),u.jsx(z,{size:"sm",children:"Путешествия"}),u.jsx(z,{size:"sm",children:"Ипотека"}),u.jsx(z,{size:"sm",children:"Квартира"}),u.jsx(z,{size:"sm",children:"Здоровье"}),u.jsx(Pe,{}),u.jsx(z,{size:"sm",children:"Помощь на дорогах"})]}),u.jsxs(St,{style:{marginTop:"116px",position:"absolute"},className:`menu_bank ${g?"active":""}`,children:[u.jsx(z,{size:"sm",children:"Авиабилеты"}),u.jsx(Pe,{}),u.jsx(z,{size:"sm",children:"Отели"}),u.jsx(z,{size:"sm",children:"Туры"}),u.jsx(Pe,{}),u.jsx(z,{size:"sm",children:"Ж/д билеты"})]}),u.jsxs(St,{style:{marginTop:"150px",position:"absolute"},className:`menu_bank ${m?"active":""}`,children:[u.jsx(z,{size:"sm",children:"Топливо"}),u.jsx(Pe,{}),u.jsx(z,{size:"sm",children:"Доставка продуктов"}),u.jsx(z,{size:"sm",children:"Кино"}),u.jsx(z,{size:"sm",children:"Театры"}),u.jsx(z,{size:"sm",children:"Концерты"}),u.jsx(z,{size:"sm",children:"Салоны красоты"}),u.jsx(z,{size:"sm",children:"Рестораны"}),u.jsx(z,{size:"sm",children:"Автомобили"}),u.jsx(Pe,{}),u.jsx(z,{size:"sm",children:"Блог"})]})]})]}),u.jsx("div",{children:u.jsx(J,{variant:"thin",children:"Бизнесу"})}),u.jsx("div",{children:u.jsx(J,{variant:"thin",children:"Премиум"})}),u.jsx("div",{children:u.jsx(J,{variant:"thin",children:"Еще"})})]}),u.jsxs("div",{className:"lk",style:{position:"relative"},children:[u.jsxs(J,{variant:"thin",onClick:()=>b(!k),children:["Личный кабинет",u.jsx("img",{className:"lk_img",src:"./1699635.svg"})]}),u.jsxs(St,{style:{position:"absolute",display:"flex",flexDirection:"column",width:"180px",marginLeft:"0"},className:`menu ${k?"active":""}`,children:[u.jsxs(z,{children:[u.jsx("img",{src:"https://acdn.tinkoff.ru/static/blocks/files/f432f710-b13a-4713-8d8a-2c7002968338.svg",alt:""}),"Интернет банк"]}),u.jsxs(z,{children:[u.jsx("img",{src:"https://acdn.tinkoff.ru/static/blocks/files/d7a23f9f-308a-4a82-b8ee-75de0d450e92.svg",alt:""}),"Тинькофф Бизнес"]}),u.jsxs(z,{children:[u.jsx("img",{src:"https://acdn.tinkoff.ru/static/blocks/files/635fc5f0-d563-40dc-b901-bba3bc90b291.svg",alt:""}),"Инвестиции"]}),u.jsxs(z,{children:[u.jsx("img",{src:"https://acdn.tinkoff.ru/static/blocks/files/3bde1b2f-a3e9-461e-9195-f5407606144d.svg",alt:""}),"Тинькофф Мобайл"]})]})]})]})]})})},Wt=({image:e,btn:t,title:n,paragraph:r})=>u.jsx("div",{className:"product",children:u.jsxs(Ut,{children:[u.jsxs(Ao,{className:"title",children:[n,u.jsx(J,{children:u.jsx("span",{className:"close-icon",children:"x"})})]}),u.jsxs(vn,{children:[u.jsx("p",{style:{paddingBottom:"5px"},children:r}),u.jsxs($o,{children:[u.jsx("img",{style:{display:"flex",marginTop:"50px"},src:e,alt:""}),u.jsx("div",{style:{display:"flex",justifyContent:"center"},children:u.jsx(J,{variant:"flat",id:"product_button",children:t})})]})]})]})}),Hi=({title:e,image:t,paragraph:n,btn:r,bg:o})=>u.jsx("div",{className:"product_small",children:u.jsxs(Ut,{id:"product_small_content",style:{height:"100%",background:o,borderRadius:"10px"},children:[u.jsxs(vn,{style:{padding:"40px 32px",textAlign:"center"},children:[u.jsx("h2",{children:e}),u.jsx("p",{style:{marginTop:"12px"},children:n})]}),u.jsx("picture",{className:"product_small_img",children:u.jsx("img",{className:"product_img",src:t,alt:""})}),u.jsx(J,{id:"product_small_btn",children:r})]})});var ry={name:"shelbiTeal",anchor:"rgb(0, 128, 128)",anchorVisited:"rgb(0, 128, 128)",borderDark:"rgb(96, 128, 128)",borderDarkest:"rgb(0, 0, 0)",borderLight:"rgb(192, 204, 204)",borderLightest:"rgb(204, 224, 224)",canvas:"rgb(255, 255, 255)",canvasText:"rgb(0, 0, 0)",canvasTextDisabled:"rgb(96, 128, 128)",canvasTextDisabledShadow:"rgb(204, 224, 224)",canvasTextInvert:"rgb(255, 255, 255)",checkmark:"rgb(0, 0, 0)",checkmarkDisabled:"rgb(96, 128, 128)",desktopBackground:"rgb(0, 128, 128)",flatDark:"rgb(96, 128, 128)",flatLight:"rgb(192, 204, 204)",focusSecondary:"rgb(204, 224, 224)",headerBackground:"linear-gradient(to right, rgb(0, 128, 128), rgb(0, 204, 204))",headerNotActiveBackground:"linear-gradient(to right, rgb(96, 128, 128), rgb(160, 192, 192))",headerNotActiveText:"rgb(192, 204, 204)",headerText:"rgb(255, 255, 255)",hoverBackground:"rgb(0, 128, 128)",material:"rgb(168, 192, 192)",materialDark:"rgb(96, 128, 128)",materialText:"rgb(0, 0, 0)",materialTextDisabled:"rgb(96, 128, 128)",materialTextDisabledShadow:"rgb(204, 224, 224)",materialTextInvert:"rgb(255, 255, 255)",progress:"rgb(0, 128, 128)",tooltip:"rgb(224, 255, 255)"},oy=ry;const Ui=On(oy);var ly={name:"slate",anchor:"#1034a6",anchorVisited:"#440381",borderDark:"#446b7c",borderDarkest:"#000814",borderLight:"#adc8da",borderLightest:"#c3d9e9",canvas:"#f2ffff",canvasText:"#00010f",canvasTextDisabled:"#446b7c",canvasTextDisabledShadow:"#c3d9e9",canvasTextInvert:"#f2ffff",checkmark:"#00010f",checkmarkDisabled:"#446b7c",desktopBackground:"#414141",flatDark:"#9e9e9e",flatLight:"#d8d8d8",focusSecondary:"#fefe03",headerBackground:"#448199",headerNotActiveBackground:"#807f80",headerNotActiveText:"#c2c1c2",headerText:"#f2ffff",hoverBackground:"#448199",material:"#97b9cb",materialDark:"#9a9e9c",materialText:"#00010f",materialTextDisabled:"#446b7c",materialTextDisabledShadow:"#c3d9e9",materialTextInvert:"#f2ffff",progress:"#448199",tooltip:"#fefbcc"},iy=ly;const Pc=On(iy),Oc=({title:e,paragraph:t,image:n,btn:r})=>u.jsx("div",{children:u.jsx(Ut,{id:"product_long",children:u.jsx($o,{style:{height:"100%",padding:"0"},children:u.jsxs("div",{className:"product_long_content",children:[u.jsxs("div",{className:"product_long_text",children:[u.jsx("h2",{style:{marginBottom:"16px"},children:e}),u.jsx("p",{children:t}),u.jsx("div",{style:{marginTop:"auto"},children:u.jsx(J,{style:{height:"44px",color:"#126df7",background:"#244a7f0f"},children:r})})]}),u.jsx("div",{className:"product_long_image",children:u.jsx("img",{src:n,alt:""})})]})})})}),Vn=({image:e,btn:t,title:n,paragraph:r})=>u.jsx("div",{className:"product_mini",children:u.jsx(Ut,{style:{padding:"32px",height:"100%",borderRadius:"10px"},children:u.jsxs(vn,{id:"product_mini_content",children:[u.jsxs("div",{style:{display:"inline-block"},children:[u.jsx("div",{style:{marginBottom:"34px"},children:u.jsx("img",{src:e,alt:""})}),u.jsx("div",{className:"title",children:u.jsx("h2",{children:n})}),u.jsx("div",{style:{marginTop:"12px"},children:u.jsx("p",{children:r})})]}),u.jsx("div",{style:{marginTop:"auto",paddingTop:"32px"},children:u.jsx(J,{style:{color:"#126df7"},variant:"thin",children:t})})]})})}),Qi=({btn:e,title:t,paragraph:n})=>u.jsx("div",{className:"product_mini",children:u.jsx(Ut,{style:{padding:"32px",height:"100%",borderRadius:"10px"},children:u.jsxs(vn,{id:"product_mini_content",children:[u.jsxs("div",{style:{display:"inline-block"},children:[u.jsx("div",{className:"title",children:u.jsx("h2",{children:t})}),u.jsx("div",{style:{marginTop:"12px"},children:u.jsx("p",{children:n})})]}),u.jsx("div",{style:{marginTop:"auto",paddingTop:"32px"},children:u.jsx(J,{style:{color:"#126df7"},variant:"thin",children:e})})]})})}),ay=()=>u.jsx("div",{children:u.jsx(Ut,{style:{padding:"0"},children:u.jsxs(vn,{style:{padding:"2px",display:"inline-flex",position:"relative",overflow:"hidden"},children:[u.jsxs("div",{className:"appwindow_content",children:[u.jsx("div",{style:{marginBottom:"64px",background:"#FFDD2D",borderRadius:"40px"},children:u.jsx("img",{src:"https://acdn.tinkoff.ru/static/pages/files/e6487ab3-1c3c-4cf9-bf82-6f868d85a6b7.svg",alt:""})}),u.jsx("div",{children:u.jsx("h2",{style:{fontSize:"35px"},children:"Мобильное приложение Тинькофф"})}),u.jsx("div",{style:{marginTop:"12px"},children:u.jsx("p",{children:"Проверяйте баланс, оплачивайте услуги, получайте помощь в чате 24/7"})}),u.jsx("div",{style:{marginTop:"40px",display:"flex"}})]}),u.jsx("div",{style:{display:"flex"},children:u.jsx("img",{style:{},src:"https://imgproxy.cdn-tinkoff.ru/zoom_05:compressed95/aHR0cHM6Ly9hY2RuLnRpbmtvZmYucnUvc3RhdGljL3BhZ2VzL2ZpbGVzL2YwYjdlZjRmLWJjYWYtNGRlZC04ZWE4LTQ5ZGU4YjY5ZWM0Ny5wbmc=",alt:""})})]})})});var sy={name:"aiee",anchor:"rgb(0,0,128)",anchorVisited:"rgb(0,0,128)",borderDark:"rgb(211,214,217)",borderDarkest:"rgb(65,187,241)",borderLight:"rgb(238,244,252)",borderLightest:"rgb(250,254,255)",canvas:"rgb(255,255,255)",canvasText:"rgb(0,62,1090)",canvasTextDisabled:"rgb(211,214,217)",canvasTextDisabledShadow:"rgb(250,254,255)",canvasTextInvert:"rgb(0,62,109)",checkmark:"rgb(0,62,1090)",checkmarkDisabled:"rgb(88,152,231)",desktopBackground:"rgb(68,125,183)",flatDark:"rgb(211,214,217)",flatLight:"rgb(238,244,252)",focusSecondary:"rgb(250,254,255)",headerBackground:"linear-gradient(to right, rgb(4,118,180), rgb(251,211,61))",headerNotActiveBackground:"linear-gradient(to right, rgb(0,159,223), rgb(0,207,247))",headerNotActiveText:"rgb(0,62,109)",headerText:"rgb(255,255,255)",hoverBackground:"rgb(251,211,61)",material:"rgb(227,238,251)",materialDark:"rgb(0,159,223)",materialText:"rgb(0,62,109)",materialTextDisabled:"rgb(211,214,217)",materialTextDisabledShadow:"rgb(250,254,255)",materialTextInvert:"rgb(0,62,109)",progress:"rgb(251,211,61)",tooltip:"rgb(255,243,185)"},uy=sy;const cy=On(uy);var dy={name:"maple",anchor:"#1034a6",anchorVisited:"#440381",borderDark:"#ab9042",borderDarkest:"#2a1801",borderLight:"#f5e2bb",borderLightest:"#ffffff",canvas:"#ffffff",canvasText:"#2a1801",canvasTextDisabled:"#ab9042",canvasTextDisabledShadow:"#ffffff",canvasTextInvert:"#ffffff",checkmark:"#2a1801",checkmarkDisabled:"#ab9042",desktopBackground:"#000000",flatDark:"#9e9e9e",flatLight:"#d8d8d8",focusSecondary:"#fefe03",headerBackground:"#8e0101",headerNotActiveBackground:"#a1a0a5",headerNotActiveText:"#f5e2bb",headerText:"#ffffff",hoverBackground:"#8e0101",material:"#e5cc90",materialDark:"#9a9e9c",materialText:"#2a1801",materialTextDisabled:"#ab9042",materialTextDisabledShadow:"#ffffff",materialTextInvert:"#ffffff",progress:"#8e0101",tooltip:"#fefbcc"},fy=dy;const py=On(fy),hy=()=>{const e=()=>n({value:""}),[t,n]=w.useState({value:""}),r=o=>{n(o.target.value)};return u.jsxs("div",{className:"main_container",children:[u.jsx("div",{className:"vklad",children:u.jsx("div",{className:"vklad_container",children:u.jsxs("div",{className:"vklad_content",children:[u.jsx("img",{className:"vklad_icon",src:"https://acdn.tinkoff.ru/static/pages/files/6be3d428-be6c-4a74-9046-0a252317e0b9.svg",alt:""}),u.jsx("p",{children:"Оформите вклад в Тинькофф с доходностью до 15% годовых"}),u.jsx(J,{variant:"flat",id:"vklad_button",children:"Подробнее"})]})})}),u.jsxs("div",{className:"black",children:[u.jsxs("h1",{children:["Дебетовая карта, которую рекомендуют ",u.jsx("br",{})," ваши друзья"]}),u.jsx("p",{className:"black_paragraph",children:"Кэшбэк рублями до 30%, до 5% годовых ежемесячно, переводы без комиссии"}),u.jsx(J,{id:"black_button",children:"Оформить карту"}),u.jsxs(Ut,{style:{width:"800px",minHeight:"500px"},children:[u.jsxs(Ao,{className:"title",children:["Tinkoff.black",u.jsx(J,{children:u.jsx("span",{className:"close-icon",children:"x"})})]}),u.jsx(vn,{children:u.jsx($o,{style:{minHeight:"500px",paddingTop:"75px"},children:u.jsx("img",{className:"black_img",src:"https://acdn.tinkoff.ru/static/pages/files/765f5875-0f5c-4f9a-b710-c1242b4b9458.png",alt:""})})})]})]}),u.jsx("div",{className:"navigation",children:u.jsxs(St,{inline:!0,style:{height:"124px"},children:[u.jsxs(z,{id:"nav_button",children:[u.jsx("img",{src:"https://acdn.tinkoff.ru/static/pages/files/cac302fa-a803-44b7-917a-6d317e3d3388.svg",alt:""}),"Дебетовые ",u.jsx("br",{})," карты"]}),u.jsxs(z,{id:"nav_button",children:[u.jsx("img",{src:"https://acdn.tinkoff.ru/static/pages/files/792653fd-b4bb-4906-95be-1e26efb11685.svg",alt:""}),"Кредитные ",u.jsx("br",{})," карты"]}),u.jsxs(z,{id:"nav_button",children:[u.jsx("img",{src:"https://acdn.tinkoff.ru/static/pages/files/24c9fb64-cb87-41ac-8a38-91d032613bdf.svg",alt:""}),"Кредиты"]}),u.jsxs(z,{id:"nav_button",children:[u.jsx("img",{src:"https://acdn.tinkoff.ru/static/pages/files/37b68120-77bd-43a1-ac3a-621133b8bba5.svg",alt:""}),"Премиум"]}),u.jsxs(z,{id:"nav_button",children:[u.jsx("img",{src:"https://acdn.tinkoff.ru/static/pages/files/3369fb29-faeb-4eab-af92-37a56aca811d.svg",alt:""}),"Вклады"]}),u.jsxs(z,{id:"nav_button",children:[u.jsx("img",{src:"https://acdn.tinkoff.ru/static/pages/files/e7ee20db-abf5-49cf-8bc6-8597f27d5abf.svg",alt:""}),"Инвестиции"]}),u.jsxs(z,{id:"nav_button",children:[u.jsx("img",{src:"https://acdn.tinkoff.ru/static/pages/files/4081cbef-7648-4b3d-814d-7d1d2dda1203.svg",alt:""}),"Сим-карта"]}),u.jsxs(z,{id:"nav_button",children:[u.jsx("img",{src:"https://acdn.tinkoff.ru/static/pages/files/a6dc5a54-9f67-465a-a12b-30f85f16a9d2.svg",alt:""}),"Страхование"]}),u.jsxs(z,{id:"nav_button",children:[u.jsx("img",{src:"https://acdn.tinkoff.ru/static/pages/files/9abeae59-2f27-4b0c-a42a-ac829617bfc3.svg",alt:""}),"Путешествия"]}),u.jsx(Ip,{size:38}),u.jsxs(z,{id:"nav_button",children:[u.jsx("img",{src:"https://acdn.tinkoff.ru/static/pages/files/2406a7d3-72be-44d0-ba53-c4f309e35274.svg",alt:""}),"Бизнес"]})]})}),u.jsx("div",{style:{paddingTop:"76px"},children:u.jsx("h1",{children:"Рекомендуемые продукты"})}),u.jsxs("div",{className:"products",children:[u.jsx(rt,{theme:Vo,children:u.jsx(Wt,{image:"https://acdn.tinkoff.ru/static/pages/files/64ae016f-dc29-483c-95c3-d802ac968d72.png",title:"Кредитная карта «Тинькофф Платинум»",paragraph:"Оформите кредитку до 31 декабря и получите 1000 ₽ за покупки",btn:"Оформить карту"})}),u.jsx(rt,{theme:Ui,children:u.jsx(Wt,{image:"https://acdn.tinkoff.ru/static/pages/files/8d2a519f-b4a9-4517-bacd-db6111b24dbd.png",title:"Тинькофф Инвестиции",paragraph:"Понятные тарифы и удобное приложение",btn:"Стать инвестором"})})]}),u.jsxs("div",{className:"products_small",children:[u.jsx(Hi,{title:"Сим-карта Тинькофф",paragraph:"Попробуйте бесплатно: телефонный секретарь Олег, 600 минут, 20 ГБ",image:"https://acdn.tinkoff.ru/static/pages/files/4f7ba74c-df13-4686-8bf9-44f852a122a2.png",btn:"Подробнее",bg:"#EAECEE"}),u.jsx(Hi,{title:"Вклады",paragraph:"Откройте вклад с пополнением и частичным изъятием. Каждый месяц получайте проценты на карту или вклад",image:"https://acdn.tinkoff.ru/static/pages/files/bddc0e85-9588-49c9-ad80-4633737384fd.png",btn:"Открыть вклад",bg:"#f1ebd6"}),u.jsx(Hi,{title:"Страхование ОСАГО",paragraph:"Электронный полис с онлайн-калькулятором  и скидками (КБМ) за безаварийность",image:"https://acdn.tinkoff.ru/static/pages/files/f2eb3840-912c-410a-95b4-2f69ab8009fb.png",btn:"Рассчитать стоимость",bg:"#D0F4F2"})]}),u.jsx("div",{style:{justifyContent:"center",display:"flex",paddingTop:"48px"},children:u.jsx(J,{style:{height:"44px",color:"#126df7"},variant:"flat",children:"Все продукты"})}),u.jsx("div",{style:{justifyContent:"center",display:"flex",paddingTop:"100px",paddingBottom:"24px"},children:u.jsx("h1",{children:"Нам доверяют более 38 млн клиентов"})}),u.jsx("div",{style:{padding:"24px 0"},children:u.jsx(Oc,{title:`Тинькофф обладатель пяти наград премии «Банк года»\r
        Банки.ру`,paragraph:`Тинькофф был признан лучшим в следующих категориях: «Забота\r
        о клиенте», «Digital-банк года», «Инвестиционная компания года»,\r
        «Инвестиционный продукт года», «Народный рейтинг страховых\r
        компаний»`,btn:"Подробнее",image:"https://acdn.tinkoff.ru/static/pages/files/dc2602c9-7659-4f32-a3f0-8d4583849492.png"})}),u.jsx("div",{style:{padding:"76px 0 24px"},children:u.jsx("h1",{children:"Сервисы и услуги"})}),u.jsxs("div",{style:{display:"inline-flex",paddingBottom:"24px"},children:[u.jsx(Vn,{image:"https://acdn.tinkoff.ru/static/pages/files/213da44c-4821-4951-afed-e24a5968ccfc.svg",title:"Курсы валют",paragraph:"Перевод между своими счетами, оплата услуг и снятие наличных в сервисах Тинькофф",btn:"Смотреть"}),u.jsx(Vn,{image:"https://acdn.tinkoff.ru/static/pages/files/8c77eb9b-b24f-44ea-849d-1048f62960cd.svg",title:"Снятие наличных",paragraph:"В банкоматах Тинькофф без комиссии. И без карты, если у вас смартфон",btn:"Найти банкомат"}),u.jsx(Vn,{image:"https://acdn.tinkoff.ru/static/pages/files/055719cb-437f-4e01-b1cf-d3101a140153.svg",title:"Переводы и пополнения",paragraph:"С карты на карту или на счет Тинькофф",btn:"Пополнить или перевести"})]}),u.jsxs("div",{className:"products",style:{paddingTop:"24px"},children:[u.jsx(rt,{theme:Vo,children:u.jsx(Wt,{image:"https://acdn.tinkoff.ru/static/pages/files/5e26a6a1-784b-4148-a2a1-f09c3580de05.png",title:"Приведи друга",paragraph:"До 5000 ₽ за рекомендации друзьям",btn:"Подробнее"})}),u.jsx(rt,{theme:Pc,children:u.jsx(Wt,{image:"https://acdn.tinkoff.ru/static/pages/files/d24e6e75-ec39-470b-9f7e-4aa844d4bbda.png",title:"Tinkoff Pay — оплата в несколько касаний",paragraph:"Все как вы привыкли: легко, надежно и с сохранением кэшбэка",btn:"Попробовать"})})]}),u.jsx("div",{style:{padding:"24px 0"},children:u.jsx(rt,{theme:Ui,children:u.jsx(ay,{})})}),u.jsx("div",{style:{paddingTop:"76px",paddingBottom:"24px"},children:u.jsx("h1",{children:"Актуально сейчас"})}),u.jsx("div",{style:{paddingBottom:"24px"},children:u.jsx(rt,{theme:cy,children:u.jsx(Oc,{title:"Разыгрываем до 3 000 000 ₽ на погашение ипотеки",paragraph:"Оформите ипотечную страховку в Тинькофф со скидкой 10% до 31 декабря и участвуйте в акции",btn:"Подробнее",image:"https://acdn.tinkoff.ru/static/pages/files/276d87de-0603-455a-83d2-8b9928f156b2.png"})})}),u.jsxs("div",{style:{padding:"24px 0",display:"inline-flex"},children:[u.jsx(Qi,{title:"Порекомендуйте другу Tinkoff Black и получите 1500 ₽ на счет",paragraph:"Участвуйте в акции «Приведи друга» с 27 ноября по 31 декабря",btn:"Читать"}),u.jsx(Qi,{title:"Карта Tinkoff Black с любимым дизайном",paragraph:`Новый стиль нашей дебетовки — для фанатов хоккея и группы \r
          «Король и шут»`,btn:"Читать"}),u.jsx(Qi,{title:"1 000 000 ₽ на путешествие мечты",paragraph:"Оформите туристическую страховку в Тинькофф и участвуйте в розыгрыше",btn:"Читать"})]}),u.jsx("div",{style:{justifyContent:"center",display:"flex",padding:"24px 0"},children:u.jsx(J,{style:{height:"44px",color:"#126df7"},variant:"flat",children:"Другие статьи и новости - в блоге Тинькофф"})}),u.jsx("div",{style:{paddingTop:"76px"},children:u.jsx("h1",{children:"Работа и развитие"})}),u.jsxs("div",{className:"products",children:[u.jsx(rt,{theme:Vo,children:u.jsx(Wt,{image:"https://acdn.tinkoff.ru/static/pages/files/7b8f9fc1-813e-41b7-a849-bfd1dbbf1138.png",title:"Вакансии",paragraph:"В вашем или любом другом городе",btn:"Смотреть вакансии"})}),u.jsx(rt,{theme:py,children:u.jsx(Wt,{image:"https://acdn.tinkoff.ru/static/pages/files/744472ea-e919-4e5d-803d-40a5c4ef688d.png",title:"Тинькофф Образование",paragraph:"Учебные курсы и оплачиваемые программы развития",btn:"Подробнее"})})]}),u.jsxs("div",{className:"products",children:[u.jsx(rt,{theme:Ui,children:u.jsx(Wt,{image:"https://acdn.tinkoff.ru/static/pages/files/8e09834a-603c-401c-9603-ee5f2cf2e6c0.png",title:"Как на самом деле пользоваться кредиткой",paragraph:"Тинькофф журнал",btn:"Читать"})}),u.jsx(rt,{theme:Pc,children:u.jsx(Wt,{image:"https://acdn.tinkoff.ru/static/pages/files/60a6d162-7441-4509-b8cf-e9dc649e45bb.png",title:"Бизнес-секреты",paragraph:"Медиа о том, как вести бизнес в России",btn:"Узнать больше"})})]}),u.jsx("div",{style:{paddingTop:"76px",paddingBottom:"24px"},children:u.jsx("h1",{children:"Дополнительно"})}),u.jsxs("div",{style:{paddingBottom:"24px",display:"inline-flex"},children:[u.jsx(Vn,{image:"https://acdn.tinkoff.ru/static/pages/files/c93cc583-32fa-41f6-a3bd-cd667c034b80.svg",title:"Помощь",paragraph:"Отвечаем на вопросы по всем продуктам",btn:"Подробнее"}),u.jsx(Vn,{image:"https://acdn.tinkoff.ru/static/pages/files/1e3c62f0-4a98-4f0a-9321-5e7640b2e0cb.svg",title:"Тинькофф Отзывы",paragraph:"Выбирайте продукты Тинькофф, магазины, рестораны, сервисы и бренды на основе реальных отзывов",btn:"Подробнее"}),u.jsx(Vn,{image:"https://acdn.tinkoff.ru/static/pages/files/ce57cec9-f4ee-4f32-993d-857293531f61.svg",title:"Кредитные каникулы в 2023",paragraph:"Горячая линия по предоставлению каникул для участников СВО и членов их семей: 8 800 555-89-77",btn:"Подробнее"})]}),u.jsx("div",{style:{paddingTop:"76px",paddingBottom:"24px"},children:u.jsx("h1",{children:"Поиск по ответам на вопросы"})}),u.jsx("div",{style:{display:"inline-flex",width:"100%"},children:u.jsxs(rt,{theme:Vo,children:[u.jsx(nu,{style:{height:"48px",width:"100%"},placeholder:"Поиск",value:t.value,onChange:r}),u.jsx(J,{onClick:e,style:{marginLeft:4,height:"44px"},children:"Стереть"})]})}),u.jsxs("div",{className:"input_layouts",children:[u.jsx(J,{style:{margin:"5px"},variant:"flat",onClick:()=>n({value:"Как написать в чат"}),children:"Как написать в чат"}),u.jsx(J,{style:{margin:"5px"},variant:"flat",onClick:()=>n({value:"Как скачать приложение"}),children:"Как скачать приложение"}),u.jsx(J,{style:{margin:"5px"},variant:"flat",onClick:()=>n({value:"Как войти в личный кабинет"}),children:"Как войти в личный кабинет"}),u.jsx(J,{style:{margin:"5px"},variant:"flat",onClick:()=>n({value:"Переводы"}),children:"Переводы"}),u.jsx(J,{style:{margin:"5px"},variant:"flat",onClick:()=>n({value:"Отменить перевод"}),children:"Отменить перевод"}),u.jsx(J,{style:{margin:"5px"},variant:"flat",onClick:()=>n({value:"Лимит переводов"}),children:"Лимит переводов"}),u.jsx(J,{style:{margin:"5px"},variant:"flat",onClick:()=>n({value:"Оспорить списание"}),children:"Оспорить списание"}),u.jsx(J,{style:{margin:"5px"},variant:"flat",onClick:()=>n({value:"Получить справку или выписку"}),children:"Получить справку или выписку"})]})]})},my=dg`
 
  @font-face {
    font-family: 'ms_sans_serif';
    src: url('${vg}') format('woff2');
    font-weight: 400;
    font-style: normal
  }
  @font-face {
    font-family: 'ms_sans_serif';
    src: url('${yg}') format('woff2');
    font-weight: bold;
    font-style: normal
  }
  body {
    font-family: 'ms_sans_serif';
  }
`;function gy(){return u.jsxs(u.Fragment,{children:[u.jsx(my,{}),u.jsxs(rt,{theme:gg,children:[u.jsx(ny,{}),u.jsx(hy,{})]})]})}Vi.createRoot(document.getElementById("root")).render(u.jsx(y.StrictMode,{children:u.jsx(gy,{})}));
