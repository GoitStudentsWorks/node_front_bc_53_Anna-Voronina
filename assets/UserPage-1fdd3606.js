import{a2 as Ye,a3 as tt,a4 as l,a5 as rt,a6 as we,a7 as He,a8 as Z,a9 as W,aa as nt,ab as Y,ac as at,ad as Ne,ae as it,af as Ee,ag as ot,ah as _e,ai as st,aj as ut,ak as lt,s as v,j as s,x as q,k as K,A as be,q as H,a as We,b as ae,d as ct,e as dt,al as ft,am as pt,an as ht,ao as vt,P as R,u as ue,m as mt,ap as ze,aq as xt,Q as N,ar as yt,as as wt,B as Te,t as gt,M as bt,i as Tt,at as Pt,D as Ct,N as kt,au as jt}from"./index-213be6ca.js";import{C as Dt}from"./Container-6e3a74bb.js";import{P as Ut}from"./Pagination-179d4229.js";import{D as Ot}from"./DeleteModal-f0a3ca30.js";import{T as $t}from"./Title-b63f3259.js";var Mt=6e4,At=36e5,Et=1e3;function _t(n,o){if(n==null)throw new TypeError("assign requires that input parameter not be null or undefined");for(var i in o)Object.prototype.hasOwnProperty.call(o,i)&&(n[i]=o[i]);return n}function Ie(n,o){(o==null||o>n.length)&&(o=n.length);for(var i=0,r=new Array(o);i<o;i++)r[i]=n[i];return r}function It(n,o){if(n){if(typeof n=="string")return Ie(n,o);var i=Object.prototype.toString.call(n).slice(8,-1);if(i==="Object"&&n.constructor&&(i=n.constructor.name),i==="Map"||i==="Set")return Array.from(n);if(i==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(i))return Ie(n,o)}}function Le(n,o){var i=typeof Symbol<"u"&&n[Symbol.iterator]||n["@@iterator"];if(!i){if(Array.isArray(n)||(i=It(n))||o&&n&&typeof n.length=="number"){i&&(n=i);var r=0,e=function(){};return{s:e,n:function(){return r>=n.length?{done:!0}:{done:!1,value:n[r++]}},e:function(f){throw f},f:e}}throw new TypeError(`Invalid attempt to iterate non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}var a=!0,t=!1,u;return{s:function(){i=i.call(n)},n:function(){var f=i.next();return a=f.done,f},e:function(f){t=!0,u=f},f:function(){try{!a&&i.return!=null&&i.return()}finally{if(t)throw u}}}}function c(n){if(n===void 0)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return n}function ge(n,o){return ge=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(r,e){return r.__proto__=e,r},ge(n,o)}function m(n,o){if(typeof o!="function"&&o!==null)throw new TypeError("Super expression must either be null or a function");n.prototype=Object.create(o&&o.prototype,{constructor:{value:n,writable:!0,configurable:!0}}),Object.defineProperty(n,"prototype",{writable:!1}),o&&ge(n,o)}function oe(n){return oe=Object.setPrototypeOf?Object.getPrototypeOf.bind():function(i){return i.__proto__||Object.getPrototypeOf(i)},oe(n)}function Lt(){if(typeof Reflect>"u"||!Reflect.construct||Reflect.construct.sham)return!1;if(typeof Proxy=="function")return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],function(){})),!0}catch{return!1}}function qt(n,o){if(o&&(Ye(o)==="object"||typeof o=="function"))return o;if(o!==void 0)throw new TypeError("Derived constructors may only return object or undefined");return c(n)}function x(n){var o=Lt();return function(){var r=oe(n),e;if(o){var a=oe(this).constructor;e=Reflect.construct(r,arguments,a)}else e=r.apply(this,arguments);return qt(this,e)}}function p(n,o){if(!(n instanceof o))throw new TypeError("Cannot call a class as a function")}function qe(n,o){for(var i=0;i<o.length;i++){var r=o[i];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(n,tt(r.key),r)}}function h(n,o,i){return o&&qe(n.prototype,o),i&&qe(n,i),Object.defineProperty(n,"prototype",{writable:!1}),n}var Rt=10,Fe=function(){function n(){p(this,n),l(this,"priority",void 0),l(this,"subPriority",0)}return h(n,[{key:"validate",value:function(i,r){return!0}}]),n}(),Yt=function(n){m(i,n);var o=x(i);function i(r,e,a,t,u){var d;return p(this,i),d=o.call(this),d.value=r,d.validateValue=e,d.setValue=a,d.priority=t,u&&(d.subPriority=u),d}return h(i,[{key:"validate",value:function(e,a){return this.validateValue(e,this.value,a)}},{key:"set",value:function(e,a,t){return this.setValue(e,a,this.value,t)}}]),i}(Fe),Ht=function(n){m(i,n);var o=x(i);function i(){var r;p(this,i);for(var e=arguments.length,a=new Array(e),t=0;t<e;t++)a[t]=arguments[t];return r=o.call.apply(o,[this].concat(a)),l(c(r),"priority",Rt),l(c(r),"subPriority",-1),r}return h(i,[{key:"set",value:function(e,a){if(a.timestampIsSet)return e;var t=new Date(0);return t.setFullYear(e.getUTCFullYear(),e.getUTCMonth(),e.getUTCDate()),t.setHours(e.getUTCHours(),e.getUTCMinutes(),e.getUTCSeconds(),e.getUTCMilliseconds()),t}}]),i}(Fe),y=function(){function n(){p(this,n),l(this,"incompatibleTokens",void 0),l(this,"priority",void 0),l(this,"subPriority",void 0)}return h(n,[{key:"run",value:function(i,r,e,a){var t=this.parse(i,r,e,a);return t?{setter:new Yt(t.value,this.validate,this.set,this.priority,this.subPriority),rest:t.rest}:null}},{key:"validate",value:function(i,r,e){return!0}}]),n}(),Nt=function(n){m(i,n);var o=x(i);function i(){var r;p(this,i);for(var e=arguments.length,a=new Array(e),t=0;t<e;t++)a[t]=arguments[t];return r=o.call.apply(o,[this].concat(a)),l(c(r),"priority",140),l(c(r),"incompatibleTokens",["R","u","t","T"]),r}return h(i,[{key:"parse",value:function(e,a,t){switch(a){case"G":case"GG":case"GGG":return t.era(e,{width:"abbreviated"})||t.era(e,{width:"narrow"});case"GGGGG":return t.era(e,{width:"narrow"});case"GGGG":default:return t.era(e,{width:"wide"})||t.era(e,{width:"abbreviated"})||t.era(e,{width:"narrow"})}}},{key:"set",value:function(e,a,t){return a.era=t,e.setUTCFullYear(t,0,1),e.setUTCHours(0,0,0,0),e}}]),i}(y),C={month:/^(1[0-2]|0?\d)/,date:/^(3[0-1]|[0-2]?\d)/,dayOfYear:/^(36[0-6]|3[0-5]\d|[0-2]?\d?\d)/,week:/^(5[0-3]|[0-4]?\d)/,hour23h:/^(2[0-3]|[0-1]?\d)/,hour24h:/^(2[0-4]|[0-1]?\d)/,hour11h:/^(1[0-1]|0?\d)/,hour12h:/^(1[0-2]|0?\d)/,minute:/^[0-5]?\d/,second:/^[0-5]?\d/,singleDigit:/^\d/,twoDigits:/^\d{1,2}/,threeDigits:/^\d{1,3}/,fourDigits:/^\d{1,4}/,anyDigitsSigned:/^-?\d+/,singleDigitSigned:/^-?\d/,twoDigitsSigned:/^-?\d{1,2}/,threeDigitsSigned:/^-?\d{1,3}/,fourDigitsSigned:/^-?\d{1,4}/},M={basicOptionalMinutes:/^([+-])(\d{2})(\d{2})?|Z/,basic:/^([+-])(\d{2})(\d{2})|Z/,basicOptionalSeconds:/^([+-])(\d{2})(\d{2})((\d{2}))?|Z/,extended:/^([+-])(\d{2}):(\d{2})|Z/,extendedOptionalSeconds:/^([+-])(\d{2}):(\d{2})(:(\d{2}))?|Z/};function k(n,o){return n&&{value:o(n.value),rest:n.rest}}function b(n,o){var i=o.match(n);return i?{value:parseInt(i[0],10),rest:o.slice(i[0].length)}:null}function A(n,o){var i=o.match(n);if(!i)return null;if(i[0]==="Z")return{value:0,rest:o.slice(1)};var r=i[1]==="+"?1:-1,e=i[2]?parseInt(i[2],10):0,a=i[3]?parseInt(i[3],10):0,t=i[5]?parseInt(i[5],10):0;return{value:r*(e*At+a*Mt+t*Et),rest:o.slice(i[0].length)}}function Be(n){return b(C.anyDigitsSigned,n)}function T(n,o){switch(n){case 1:return b(C.singleDigit,o);case 2:return b(C.twoDigits,o);case 3:return b(C.threeDigits,o);case 4:return b(C.fourDigits,o);default:return b(new RegExp("^\\d{1,"+n+"}"),o)}}function se(n,o){switch(n){case 1:return b(C.singleDigitSigned,o);case 2:return b(C.twoDigitsSigned,o);case 3:return b(C.threeDigitsSigned,o);case 4:return b(C.fourDigitsSigned,o);default:return b(new RegExp("^-?\\d{1,"+n+"}"),o)}}function Pe(n){switch(n){case"morning":return 4;case"evening":return 17;case"pm":case"noon":case"afternoon":return 12;case"am":case"midnight":case"night":default:return 0}}function Qe(n,o){var i=o>0,r=i?o:1-o,e;if(r<=50)e=n||100;else{var a=r+50,t=Math.floor(a/100)*100,u=n>=a%100;e=n+t-(u?100:0)}return i?e:1-e}function Ve(n){return n%400===0||n%4===0&&n%100!==0}var Wt=function(n){m(i,n);var o=x(i);function i(){var r;p(this,i);for(var e=arguments.length,a=new Array(e),t=0;t<e;t++)a[t]=arguments[t];return r=o.call.apply(o,[this].concat(a)),l(c(r),"priority",130),l(c(r),"incompatibleTokens",["Y","R","u","w","I","i","e","c","t","T"]),r}return h(i,[{key:"parse",value:function(e,a,t){var u=function(f){return{year:f,isTwoDigitYear:a==="yy"}};switch(a){case"y":return k(T(4,e),u);case"yo":return k(t.ordinalNumber(e,{unit:"year"}),u);default:return k(T(a.length,e),u)}}},{key:"validate",value:function(e,a){return a.isTwoDigitYear||a.year>0}},{key:"set",value:function(e,a,t){var u=e.getUTCFullYear();if(t.isTwoDigitYear){var d=Qe(t.year,u);return e.setUTCFullYear(d,0,1),e.setUTCHours(0,0,0,0),e}var f=!("era"in a)||a.era===1?t.year:1-t.year;return e.setUTCFullYear(f,0,1),e.setUTCHours(0,0,0,0),e}}]),i}(y),zt=function(n){m(i,n);var o=x(i);function i(){var r;p(this,i);for(var e=arguments.length,a=new Array(e),t=0;t<e;t++)a[t]=arguments[t];return r=o.call.apply(o,[this].concat(a)),l(c(r),"priority",130),l(c(r),"incompatibleTokens",["y","R","u","Q","q","M","L","I","d","D","i","t","T"]),r}return h(i,[{key:"parse",value:function(e,a,t){var u=function(f){return{year:f,isTwoDigitYear:a==="YY"}};switch(a){case"Y":return k(T(4,e),u);case"Yo":return k(t.ordinalNumber(e,{unit:"year"}),u);default:return k(T(a.length,e),u)}}},{key:"validate",value:function(e,a){return a.isTwoDigitYear||a.year>0}},{key:"set",value:function(e,a,t,u){var d=rt(e,u);if(t.isTwoDigitYear){var f=Qe(t.year,d);return e.setUTCFullYear(f,0,u.firstWeekContainsDate),e.setUTCHours(0,0,0,0),we(e,u)}var P=!("era"in a)||a.era===1?t.year:1-t.year;return e.setUTCFullYear(P,0,u.firstWeekContainsDate),e.setUTCHours(0,0,0,0),we(e,u)}}]),i}(y),Ft=function(n){m(i,n);var o=x(i);function i(){var r;p(this,i);for(var e=arguments.length,a=new Array(e),t=0;t<e;t++)a[t]=arguments[t];return r=o.call.apply(o,[this].concat(a)),l(c(r),"priority",130),l(c(r),"incompatibleTokens",["G","y","Y","u","Q","q","M","L","w","d","D","e","c","t","T"]),r}return h(i,[{key:"parse",value:function(e,a){return se(a==="R"?4:a.length,e)}},{key:"set",value:function(e,a,t){var u=new Date(0);return u.setUTCFullYear(t,0,4),u.setUTCHours(0,0,0,0),He(u)}}]),i}(y),Bt=function(n){m(i,n);var o=x(i);function i(){var r;p(this,i);for(var e=arguments.length,a=new Array(e),t=0;t<e;t++)a[t]=arguments[t];return r=o.call.apply(o,[this].concat(a)),l(c(r),"priority",130),l(c(r),"incompatibleTokens",["G","y","Y","R","w","I","i","e","c","t","T"]),r}return h(i,[{key:"parse",value:function(e,a){return se(a==="u"?4:a.length,e)}},{key:"set",value:function(e,a,t){return e.setUTCFullYear(t,0,1),e.setUTCHours(0,0,0,0),e}}]),i}(y),Qt=function(n){m(i,n);var o=x(i);function i(){var r;p(this,i);for(var e=arguments.length,a=new Array(e),t=0;t<e;t++)a[t]=arguments[t];return r=o.call.apply(o,[this].concat(a)),l(c(r),"priority",120),l(c(r),"incompatibleTokens",["Y","R","q","M","L","w","I","d","D","i","e","c","t","T"]),r}return h(i,[{key:"parse",value:function(e,a,t){switch(a){case"Q":case"QQ":return T(a.length,e);case"Qo":return t.ordinalNumber(e,{unit:"quarter"});case"QQQ":return t.quarter(e,{width:"abbreviated",context:"formatting"})||t.quarter(e,{width:"narrow",context:"formatting"});case"QQQQQ":return t.quarter(e,{width:"narrow",context:"formatting"});case"QQQQ":default:return t.quarter(e,{width:"wide",context:"formatting"})||t.quarter(e,{width:"abbreviated",context:"formatting"})||t.quarter(e,{width:"narrow",context:"formatting"})}}},{key:"validate",value:function(e,a){return a>=1&&a<=4}},{key:"set",value:function(e,a,t){return e.setUTCMonth((t-1)*3,1),e.setUTCHours(0,0,0,0),e}}]),i}(y),Vt=function(n){m(i,n);var o=x(i);function i(){var r;p(this,i);for(var e=arguments.length,a=new Array(e),t=0;t<e;t++)a[t]=arguments[t];return r=o.call.apply(o,[this].concat(a)),l(c(r),"priority",120),l(c(r),"incompatibleTokens",["Y","R","Q","M","L","w","I","d","D","i","e","c","t","T"]),r}return h(i,[{key:"parse",value:function(e,a,t){switch(a){case"q":case"qq":return T(a.length,e);case"qo":return t.ordinalNumber(e,{unit:"quarter"});case"qqq":return t.quarter(e,{width:"abbreviated",context:"standalone"})||t.quarter(e,{width:"narrow",context:"standalone"});case"qqqqq":return t.quarter(e,{width:"narrow",context:"standalone"});case"qqqq":default:return t.quarter(e,{width:"wide",context:"standalone"})||t.quarter(e,{width:"abbreviated",context:"standalone"})||t.quarter(e,{width:"narrow",context:"standalone"})}}},{key:"validate",value:function(e,a){return a>=1&&a<=4}},{key:"set",value:function(e,a,t){return e.setUTCMonth((t-1)*3,1),e.setUTCHours(0,0,0,0),e}}]),i}(y),Gt=function(n){m(i,n);var o=x(i);function i(){var r;p(this,i);for(var e=arguments.length,a=new Array(e),t=0;t<e;t++)a[t]=arguments[t];return r=o.call.apply(o,[this].concat(a)),l(c(r),"incompatibleTokens",["Y","R","q","Q","L","w","I","D","i","e","c","t","T"]),l(c(r),"priority",110),r}return h(i,[{key:"parse",value:function(e,a,t){var u=function(f){return f-1};switch(a){case"M":return k(b(C.month,e),u);case"MM":return k(T(2,e),u);case"Mo":return k(t.ordinalNumber(e,{unit:"month"}),u);case"MMM":return t.month(e,{width:"abbreviated",context:"formatting"})||t.month(e,{width:"narrow",context:"formatting"});case"MMMMM":return t.month(e,{width:"narrow",context:"formatting"});case"MMMM":default:return t.month(e,{width:"wide",context:"formatting"})||t.month(e,{width:"abbreviated",context:"formatting"})||t.month(e,{width:"narrow",context:"formatting"})}}},{key:"validate",value:function(e,a){return a>=0&&a<=11}},{key:"set",value:function(e,a,t){return e.setUTCMonth(t,1),e.setUTCHours(0,0,0,0),e}}]),i}(y),Xt=function(n){m(i,n);var o=x(i);function i(){var r;p(this,i);for(var e=arguments.length,a=new Array(e),t=0;t<e;t++)a[t]=arguments[t];return r=o.call.apply(o,[this].concat(a)),l(c(r),"priority",110),l(c(r),"incompatibleTokens",["Y","R","q","Q","M","w","I","D","i","e","c","t","T"]),r}return h(i,[{key:"parse",value:function(e,a,t){var u=function(f){return f-1};switch(a){case"L":return k(b(C.month,e),u);case"LL":return k(T(2,e),u);case"Lo":return k(t.ordinalNumber(e,{unit:"month"}),u);case"LLL":return t.month(e,{width:"abbreviated",context:"standalone"})||t.month(e,{width:"narrow",context:"standalone"});case"LLLLL":return t.month(e,{width:"narrow",context:"standalone"});case"LLLL":default:return t.month(e,{width:"wide",context:"standalone"})||t.month(e,{width:"abbreviated",context:"standalone"})||t.month(e,{width:"narrow",context:"standalone"})}}},{key:"validate",value:function(e,a){return a>=0&&a<=11}},{key:"set",value:function(e,a,t){return e.setUTCMonth(t,1),e.setUTCHours(0,0,0,0),e}}]),i}(y);function Kt(n,o,i){Z(2,arguments);var r=W(n),e=Y(o),a=nt(r,i)-e;return r.setUTCDate(r.getUTCDate()-a*7),r}var Zt=function(n){m(i,n);var o=x(i);function i(){var r;p(this,i);for(var e=arguments.length,a=new Array(e),t=0;t<e;t++)a[t]=arguments[t];return r=o.call.apply(o,[this].concat(a)),l(c(r),"priority",100),l(c(r),"incompatibleTokens",["y","R","u","q","Q","M","L","I","d","D","i","t","T"]),r}return h(i,[{key:"parse",value:function(e,a,t){switch(a){case"w":return b(C.week,e);case"wo":return t.ordinalNumber(e,{unit:"week"});default:return T(a.length,e)}}},{key:"validate",value:function(e,a){return a>=1&&a<=53}},{key:"set",value:function(e,a,t,u){return we(Kt(e,t,u),u)}}]),i}(y);function St(n,o){Z(2,arguments);var i=W(n),r=Y(o),e=at(i)-r;return i.setUTCDate(i.getUTCDate()-e*7),i}var Jt=function(n){m(i,n);var o=x(i);function i(){var r;p(this,i);for(var e=arguments.length,a=new Array(e),t=0;t<e;t++)a[t]=arguments[t];return r=o.call.apply(o,[this].concat(a)),l(c(r),"priority",100),l(c(r),"incompatibleTokens",["y","Y","u","q","Q","M","L","w","d","D","e","c","t","T"]),r}return h(i,[{key:"parse",value:function(e,a,t){switch(a){case"I":return b(C.week,e);case"Io":return t.ordinalNumber(e,{unit:"week"});default:return T(a.length,e)}}},{key:"validate",value:function(e,a){return a>=1&&a<=53}},{key:"set",value:function(e,a,t){return He(St(e,t))}}]),i}(y),er=[31,28,31,30,31,30,31,31,30,31,30,31],tr=[31,29,31,30,31,30,31,31,30,31,30,31],rr=function(n){m(i,n);var o=x(i);function i(){var r;p(this,i);for(var e=arguments.length,a=new Array(e),t=0;t<e;t++)a[t]=arguments[t];return r=o.call.apply(o,[this].concat(a)),l(c(r),"priority",90),l(c(r),"subPriority",1),l(c(r),"incompatibleTokens",["Y","R","q","Q","w","I","D","i","e","c","t","T"]),r}return h(i,[{key:"parse",value:function(e,a,t){switch(a){case"d":return b(C.date,e);case"do":return t.ordinalNumber(e,{unit:"date"});default:return T(a.length,e)}}},{key:"validate",value:function(e,a){var t=e.getUTCFullYear(),u=Ve(t),d=e.getUTCMonth();return u?a>=1&&a<=tr[d]:a>=1&&a<=er[d]}},{key:"set",value:function(e,a,t){return e.setUTCDate(t),e.setUTCHours(0,0,0,0),e}}]),i}(y),nr=function(n){m(i,n);var o=x(i);function i(){var r;p(this,i);for(var e=arguments.length,a=new Array(e),t=0;t<e;t++)a[t]=arguments[t];return r=o.call.apply(o,[this].concat(a)),l(c(r),"priority",90),l(c(r),"subpriority",1),l(c(r),"incompatibleTokens",["Y","R","q","Q","M","L","w","I","d","E","i","e","c","t","T"]),r}return h(i,[{key:"parse",value:function(e,a,t){switch(a){case"D":case"DD":return b(C.dayOfYear,e);case"Do":return t.ordinalNumber(e,{unit:"date"});default:return T(a.length,e)}}},{key:"validate",value:function(e,a){var t=e.getUTCFullYear(),u=Ve(t);return u?a>=1&&a<=366:a>=1&&a<=365}},{key:"set",value:function(e,a,t){return e.setUTCMonth(0,t),e.setUTCHours(0,0,0,0),e}}]),i}(y);function Ce(n,o,i){var r,e,a,t,u,d,f,P;Z(2,arguments);var D=Ne(),$=Y((r=(e=(a=(t=i==null?void 0:i.weekStartsOn)!==null&&t!==void 0?t:i==null||(u=i.locale)===null||u===void 0||(d=u.options)===null||d===void 0?void 0:d.weekStartsOn)!==null&&a!==void 0?a:D.weekStartsOn)!==null&&e!==void 0?e:(f=D.locale)===null||f===void 0||(P=f.options)===null||P===void 0?void 0:P.weekStartsOn)!==null&&r!==void 0?r:0);if(!($>=0&&$<=6))throw new RangeError("weekStartsOn must be between 0 and 6 inclusively");var U=W(n),I=Y(o),g=U.getUTCDay(),E=I%7,_=(E+7)%7,z=(_<$?7:0)+I-g;return U.setUTCDate(U.getUTCDate()+z),U}var ar=function(n){m(i,n);var o=x(i);function i(){var r;p(this,i);for(var e=arguments.length,a=new Array(e),t=0;t<e;t++)a[t]=arguments[t];return r=o.call.apply(o,[this].concat(a)),l(c(r),"priority",90),l(c(r),"incompatibleTokens",["D","i","e","c","t","T"]),r}return h(i,[{key:"parse",value:function(e,a,t){switch(a){case"E":case"EE":case"EEE":return t.day(e,{width:"abbreviated",context:"formatting"})||t.day(e,{width:"short",context:"formatting"})||t.day(e,{width:"narrow",context:"formatting"});case"EEEEE":return t.day(e,{width:"narrow",context:"formatting"});case"EEEEEE":return t.day(e,{width:"short",context:"formatting"})||t.day(e,{width:"narrow",context:"formatting"});case"EEEE":default:return t.day(e,{width:"wide",context:"formatting"})||t.day(e,{width:"abbreviated",context:"formatting"})||t.day(e,{width:"short",context:"formatting"})||t.day(e,{width:"narrow",context:"formatting"})}}},{key:"validate",value:function(e,a){return a>=0&&a<=6}},{key:"set",value:function(e,a,t,u){return e=Ce(e,t,u),e.setUTCHours(0,0,0,0),e}}]),i}(y),ir=function(n){m(i,n);var o=x(i);function i(){var r;p(this,i);for(var e=arguments.length,a=new Array(e),t=0;t<e;t++)a[t]=arguments[t];return r=o.call.apply(o,[this].concat(a)),l(c(r),"priority",90),l(c(r),"incompatibleTokens",["y","R","u","q","Q","M","L","I","d","D","E","i","c","t","T"]),r}return h(i,[{key:"parse",value:function(e,a,t,u){var d=function(P){var D=Math.floor((P-1)/7)*7;return(P+u.weekStartsOn+6)%7+D};switch(a){case"e":case"ee":return k(T(a.length,e),d);case"eo":return k(t.ordinalNumber(e,{unit:"day"}),d);case"eee":return t.day(e,{width:"abbreviated",context:"formatting"})||t.day(e,{width:"short",context:"formatting"})||t.day(e,{width:"narrow",context:"formatting"});case"eeeee":return t.day(e,{width:"narrow",context:"formatting"});case"eeeeee":return t.day(e,{width:"short",context:"formatting"})||t.day(e,{width:"narrow",context:"formatting"});case"eeee":default:return t.day(e,{width:"wide",context:"formatting"})||t.day(e,{width:"abbreviated",context:"formatting"})||t.day(e,{width:"short",context:"formatting"})||t.day(e,{width:"narrow",context:"formatting"})}}},{key:"validate",value:function(e,a){return a>=0&&a<=6}},{key:"set",value:function(e,a,t,u){return e=Ce(e,t,u),e.setUTCHours(0,0,0,0),e}}]),i}(y),or=function(n){m(i,n);var o=x(i);function i(){var r;p(this,i);for(var e=arguments.length,a=new Array(e),t=0;t<e;t++)a[t]=arguments[t];return r=o.call.apply(o,[this].concat(a)),l(c(r),"priority",90),l(c(r),"incompatibleTokens",["y","R","u","q","Q","M","L","I","d","D","E","i","e","t","T"]),r}return h(i,[{key:"parse",value:function(e,a,t,u){var d=function(P){var D=Math.floor((P-1)/7)*7;return(P+u.weekStartsOn+6)%7+D};switch(a){case"c":case"cc":return k(T(a.length,e),d);case"co":return k(t.ordinalNumber(e,{unit:"day"}),d);case"ccc":return t.day(e,{width:"abbreviated",context:"standalone"})||t.day(e,{width:"short",context:"standalone"})||t.day(e,{width:"narrow",context:"standalone"});case"ccccc":return t.day(e,{width:"narrow",context:"standalone"});case"cccccc":return t.day(e,{width:"short",context:"standalone"})||t.day(e,{width:"narrow",context:"standalone"});case"cccc":default:return t.day(e,{width:"wide",context:"standalone"})||t.day(e,{width:"abbreviated",context:"standalone"})||t.day(e,{width:"short",context:"standalone"})||t.day(e,{width:"narrow",context:"standalone"})}}},{key:"validate",value:function(e,a){return a>=0&&a<=6}},{key:"set",value:function(e,a,t,u){return e=Ce(e,t,u),e.setUTCHours(0,0,0,0),e}}]),i}(y);function sr(n,o){Z(2,arguments);var i=Y(o);i%7===0&&(i=i-7);var r=1,e=W(n),a=e.getUTCDay(),t=i%7,u=(t+7)%7,d=(u<r?7:0)+i-a;return e.setUTCDate(e.getUTCDate()+d),e}var ur=function(n){m(i,n);var o=x(i);function i(){var r;p(this,i);for(var e=arguments.length,a=new Array(e),t=0;t<e;t++)a[t]=arguments[t];return r=o.call.apply(o,[this].concat(a)),l(c(r),"priority",90),l(c(r),"incompatibleTokens",["y","Y","u","q","Q","M","L","w","d","D","E","e","c","t","T"]),r}return h(i,[{key:"parse",value:function(e,a,t){var u=function(f){return f===0?7:f};switch(a){case"i":case"ii":return T(a.length,e);case"io":return t.ordinalNumber(e,{unit:"day"});case"iii":return k(t.day(e,{width:"abbreviated",context:"formatting"})||t.day(e,{width:"short",context:"formatting"})||t.day(e,{width:"narrow",context:"formatting"}),u);case"iiiii":return k(t.day(e,{width:"narrow",context:"formatting"}),u);case"iiiiii":return k(t.day(e,{width:"short",context:"formatting"})||t.day(e,{width:"narrow",context:"formatting"}),u);case"iiii":default:return k(t.day(e,{width:"wide",context:"formatting"})||t.day(e,{width:"abbreviated",context:"formatting"})||t.day(e,{width:"short",context:"formatting"})||t.day(e,{width:"narrow",context:"formatting"}),u)}}},{key:"validate",value:function(e,a){return a>=1&&a<=7}},{key:"set",value:function(e,a,t){return e=sr(e,t),e.setUTCHours(0,0,0,0),e}}]),i}(y),lr=function(n){m(i,n);var o=x(i);function i(){var r;p(this,i);for(var e=arguments.length,a=new Array(e),t=0;t<e;t++)a[t]=arguments[t];return r=o.call.apply(o,[this].concat(a)),l(c(r),"priority",80),l(c(r),"incompatibleTokens",["b","B","H","k","t","T"]),r}return h(i,[{key:"parse",value:function(e,a,t){switch(a){case"a":case"aa":case"aaa":return t.dayPeriod(e,{width:"abbreviated",context:"formatting"})||t.dayPeriod(e,{width:"narrow",context:"formatting"});case"aaaaa":return t.dayPeriod(e,{width:"narrow",context:"formatting"});case"aaaa":default:return t.dayPeriod(e,{width:"wide",context:"formatting"})||t.dayPeriod(e,{width:"abbreviated",context:"formatting"})||t.dayPeriod(e,{width:"narrow",context:"formatting"})}}},{key:"set",value:function(e,a,t){return e.setUTCHours(Pe(t),0,0,0),e}}]),i}(y),cr=function(n){m(i,n);var o=x(i);function i(){var r;p(this,i);for(var e=arguments.length,a=new Array(e),t=0;t<e;t++)a[t]=arguments[t];return r=o.call.apply(o,[this].concat(a)),l(c(r),"priority",80),l(c(r),"incompatibleTokens",["a","B","H","k","t","T"]),r}return h(i,[{key:"parse",value:function(e,a,t){switch(a){case"b":case"bb":case"bbb":return t.dayPeriod(e,{width:"abbreviated",context:"formatting"})||t.dayPeriod(e,{width:"narrow",context:"formatting"});case"bbbbb":return t.dayPeriod(e,{width:"narrow",context:"formatting"});case"bbbb":default:return t.dayPeriod(e,{width:"wide",context:"formatting"})||t.dayPeriod(e,{width:"abbreviated",context:"formatting"})||t.dayPeriod(e,{width:"narrow",context:"formatting"})}}},{key:"set",value:function(e,a,t){return e.setUTCHours(Pe(t),0,0,0),e}}]),i}(y),dr=function(n){m(i,n);var o=x(i);function i(){var r;p(this,i);for(var e=arguments.length,a=new Array(e),t=0;t<e;t++)a[t]=arguments[t];return r=o.call.apply(o,[this].concat(a)),l(c(r),"priority",80),l(c(r),"incompatibleTokens",["a","b","t","T"]),r}return h(i,[{key:"parse",value:function(e,a,t){switch(a){case"B":case"BB":case"BBB":return t.dayPeriod(e,{width:"abbreviated",context:"formatting"})||t.dayPeriod(e,{width:"narrow",context:"formatting"});case"BBBBB":return t.dayPeriod(e,{width:"narrow",context:"formatting"});case"BBBB":default:return t.dayPeriod(e,{width:"wide",context:"formatting"})||t.dayPeriod(e,{width:"abbreviated",context:"formatting"})||t.dayPeriod(e,{width:"narrow",context:"formatting"})}}},{key:"set",value:function(e,a,t){return e.setUTCHours(Pe(t),0,0,0),e}}]),i}(y),fr=function(n){m(i,n);var o=x(i);function i(){var r;p(this,i);for(var e=arguments.length,a=new Array(e),t=0;t<e;t++)a[t]=arguments[t];return r=o.call.apply(o,[this].concat(a)),l(c(r),"priority",70),l(c(r),"incompatibleTokens",["H","K","k","t","T"]),r}return h(i,[{key:"parse",value:function(e,a,t){switch(a){case"h":return b(C.hour12h,e);case"ho":return t.ordinalNumber(e,{unit:"hour"});default:return T(a.length,e)}}},{key:"validate",value:function(e,a){return a>=1&&a<=12}},{key:"set",value:function(e,a,t){var u=e.getUTCHours()>=12;return u&&t<12?e.setUTCHours(t+12,0,0,0):!u&&t===12?e.setUTCHours(0,0,0,0):e.setUTCHours(t,0,0,0),e}}]),i}(y),pr=function(n){m(i,n);var o=x(i);function i(){var r;p(this,i);for(var e=arguments.length,a=new Array(e),t=0;t<e;t++)a[t]=arguments[t];return r=o.call.apply(o,[this].concat(a)),l(c(r),"priority",70),l(c(r),"incompatibleTokens",["a","b","h","K","k","t","T"]),r}return h(i,[{key:"parse",value:function(e,a,t){switch(a){case"H":return b(C.hour23h,e);case"Ho":return t.ordinalNumber(e,{unit:"hour"});default:return T(a.length,e)}}},{key:"validate",value:function(e,a){return a>=0&&a<=23}},{key:"set",value:function(e,a,t){return e.setUTCHours(t,0,0,0),e}}]),i}(y),hr=function(n){m(i,n);var o=x(i);function i(){var r;p(this,i);for(var e=arguments.length,a=new Array(e),t=0;t<e;t++)a[t]=arguments[t];return r=o.call.apply(o,[this].concat(a)),l(c(r),"priority",70),l(c(r),"incompatibleTokens",["h","H","k","t","T"]),r}return h(i,[{key:"parse",value:function(e,a,t){switch(a){case"K":return b(C.hour11h,e);case"Ko":return t.ordinalNumber(e,{unit:"hour"});default:return T(a.length,e)}}},{key:"validate",value:function(e,a){return a>=0&&a<=11}},{key:"set",value:function(e,a,t){var u=e.getUTCHours()>=12;return u&&t<12?e.setUTCHours(t+12,0,0,0):e.setUTCHours(t,0,0,0),e}}]),i}(y),vr=function(n){m(i,n);var o=x(i);function i(){var r;p(this,i);for(var e=arguments.length,a=new Array(e),t=0;t<e;t++)a[t]=arguments[t];return r=o.call.apply(o,[this].concat(a)),l(c(r),"priority",70),l(c(r),"incompatibleTokens",["a","b","h","H","K","t","T"]),r}return h(i,[{key:"parse",value:function(e,a,t){switch(a){case"k":return b(C.hour24h,e);case"ko":return t.ordinalNumber(e,{unit:"hour"});default:return T(a.length,e)}}},{key:"validate",value:function(e,a){return a>=1&&a<=24}},{key:"set",value:function(e,a,t){var u=t<=24?t%24:t;return e.setUTCHours(u,0,0,0),e}}]),i}(y),mr=function(n){m(i,n);var o=x(i);function i(){var r;p(this,i);for(var e=arguments.length,a=new Array(e),t=0;t<e;t++)a[t]=arguments[t];return r=o.call.apply(o,[this].concat(a)),l(c(r),"priority",60),l(c(r),"incompatibleTokens",["t","T"]),r}return h(i,[{key:"parse",value:function(e,a,t){switch(a){case"m":return b(C.minute,e);case"mo":return t.ordinalNumber(e,{unit:"minute"});default:return T(a.length,e)}}},{key:"validate",value:function(e,a){return a>=0&&a<=59}},{key:"set",value:function(e,a,t){return e.setUTCMinutes(t,0,0),e}}]),i}(y),xr=function(n){m(i,n);var o=x(i);function i(){var r;p(this,i);for(var e=arguments.length,a=new Array(e),t=0;t<e;t++)a[t]=arguments[t];return r=o.call.apply(o,[this].concat(a)),l(c(r),"priority",50),l(c(r),"incompatibleTokens",["t","T"]),r}return h(i,[{key:"parse",value:function(e,a,t){switch(a){case"s":return b(C.second,e);case"so":return t.ordinalNumber(e,{unit:"second"});default:return T(a.length,e)}}},{key:"validate",value:function(e,a){return a>=0&&a<=59}},{key:"set",value:function(e,a,t){return e.setUTCSeconds(t,0),e}}]),i}(y),yr=function(n){m(i,n);var o=x(i);function i(){var r;p(this,i);for(var e=arguments.length,a=new Array(e),t=0;t<e;t++)a[t]=arguments[t];return r=o.call.apply(o,[this].concat(a)),l(c(r),"priority",30),l(c(r),"incompatibleTokens",["t","T"]),r}return h(i,[{key:"parse",value:function(e,a){var t=function(d){return Math.floor(d*Math.pow(10,-a.length+3))};return k(T(a.length,e),t)}},{key:"set",value:function(e,a,t){return e.setUTCMilliseconds(t),e}}]),i}(y),wr=function(n){m(i,n);var o=x(i);function i(){var r;p(this,i);for(var e=arguments.length,a=new Array(e),t=0;t<e;t++)a[t]=arguments[t];return r=o.call.apply(o,[this].concat(a)),l(c(r),"priority",10),l(c(r),"incompatibleTokens",["t","T","x"]),r}return h(i,[{key:"parse",value:function(e,a){switch(a){case"X":return A(M.basicOptionalMinutes,e);case"XX":return A(M.basic,e);case"XXXX":return A(M.basicOptionalSeconds,e);case"XXXXX":return A(M.extendedOptionalSeconds,e);case"XXX":default:return A(M.extended,e)}}},{key:"set",value:function(e,a,t){return a.timestampIsSet?e:new Date(e.getTime()-t)}}]),i}(y),gr=function(n){m(i,n);var o=x(i);function i(){var r;p(this,i);for(var e=arguments.length,a=new Array(e),t=0;t<e;t++)a[t]=arguments[t];return r=o.call.apply(o,[this].concat(a)),l(c(r),"priority",10),l(c(r),"incompatibleTokens",["t","T","X"]),r}return h(i,[{key:"parse",value:function(e,a){switch(a){case"x":return A(M.basicOptionalMinutes,e);case"xx":return A(M.basic,e);case"xxxx":return A(M.basicOptionalSeconds,e);case"xxxxx":return A(M.extendedOptionalSeconds,e);case"xxx":default:return A(M.extended,e)}}},{key:"set",value:function(e,a,t){return a.timestampIsSet?e:new Date(e.getTime()-t)}}]),i}(y),br=function(n){m(i,n);var o=x(i);function i(){var r;p(this,i);for(var e=arguments.length,a=new Array(e),t=0;t<e;t++)a[t]=arguments[t];return r=o.call.apply(o,[this].concat(a)),l(c(r),"priority",40),l(c(r),"incompatibleTokens","*"),r}return h(i,[{key:"parse",value:function(e){return Be(e)}},{key:"set",value:function(e,a,t){return[new Date(t*1e3),{timestampIsSet:!0}]}}]),i}(y),Tr=function(n){m(i,n);var o=x(i);function i(){var r;p(this,i);for(var e=arguments.length,a=new Array(e),t=0;t<e;t++)a[t]=arguments[t];return r=o.call.apply(o,[this].concat(a)),l(c(r),"priority",20),l(c(r),"incompatibleTokens","*"),r}return h(i,[{key:"parse",value:function(e){return Be(e)}},{key:"set",value:function(e,a,t){return[new Date(t),{timestampIsSet:!0}]}}]),i}(y),Pr={G:new Nt,y:new Wt,Y:new zt,R:new Ft,u:new Bt,Q:new Qt,q:new Vt,M:new Gt,L:new Xt,w:new Zt,I:new Jt,d:new rr,D:new nr,E:new ar,e:new ir,c:new or,i:new ur,a:new lr,b:new cr,B:new dr,h:new fr,H:new pr,K:new hr,k:new vr,m:new mr,s:new xr,S:new yr,X:new wr,x:new gr,t:new br,T:new Tr},Cr=/[yYQqMLwIdDecihHKkms]o|(\w)\1*|''|'(''|[^'])+('|$)|./g,kr=/P+p+|P+|p+|''|'(''|[^'])+('|$)|./g,jr=/^'([^]*?)'?$/,Dr=/''/g,Ur=/\S/,Or=/[a-zA-Z]/;function $r(n,o,i,r){var e,a,t,u,d,f,P,D,$,U,I,g,E,_,z,le,ce,de;Z(3,arguments);var L=String(n),S=String(o),F=Ne(),J=(e=(a=r==null?void 0:r.locale)!==null&&a!==void 0?a:F.locale)!==null&&e!==void 0?e:it;if(!J.match)throw new RangeError("locale must contain match property");var fe=Y((t=(u=(d=(f=r==null?void 0:r.firstWeekContainsDate)!==null&&f!==void 0?f:r==null||(P=r.locale)===null||P===void 0||(D=P.options)===null||D===void 0?void 0:D.firstWeekContainsDate)!==null&&d!==void 0?d:F.firstWeekContainsDate)!==null&&u!==void 0?u:($=F.locale)===null||$===void 0||(U=$.options)===null||U===void 0?void 0:U.firstWeekContainsDate)!==null&&t!==void 0?t:1);if(!(fe>=1&&fe<=7))throw new RangeError("firstWeekContainsDate must be between 1 and 7 inclusively");var pe=Y((I=(g=(E=(_=r==null?void 0:r.weekStartsOn)!==null&&_!==void 0?_:r==null||(z=r.locale)===null||z===void 0||(le=z.options)===null||le===void 0?void 0:le.weekStartsOn)!==null&&E!==void 0?E:F.weekStartsOn)!==null&&g!==void 0?g:(ce=F.locale)===null||ce===void 0||(de=ce.options)===null||de===void 0?void 0:de.weekStartsOn)!==null&&I!==void 0?I:0);if(!(pe>=0&&pe<=6))throw new RangeError("weekStartsOn must be between 0 and 6 inclusively");if(S==="")return L===""?W(i):new Date(NaN);var he={firstWeekContainsDate:fe,weekStartsOn:pe,locale:J},ve=[new Ht],Se=S.match(kr).map(function(j){var w=j[0];if(w in Ee){var O=Ee[w];return O(j,J.formatLong)}return j}).join("").match(Cr),me=[],ee=Le(Se),ke;try{var Je=function(){var w=ke.value;!(r!=null&&r.useAdditionalWeekYearTokens)&&ot(w)&&_e(w,S,n),!(r!=null&&r.useAdditionalDayOfYearTokens)&&st(w)&&_e(w,S,n);var O=w[0],ne=Pr[O];if(ne){var $e=ne.incompatibleTokens;if(Array.isArray($e)){var Me=me.find(function(Ae){return $e.includes(Ae.token)||Ae.token===O});if(Me)throw new RangeError("The format string mustn't contain `".concat(Me.fullToken,"` and `").concat(w,"` at the same time"))}else if(ne.incompatibleTokens==="*"&&me.length>0)throw new RangeError("The format string mustn't contain `".concat(w,"` and any other token at the same time"));me.push({token:O,fullToken:w});var ye=ne.run(L,w,J.match,he);if(!ye)return{v:new Date(NaN)};ve.push(ye.setter),L=ye.rest}else{if(O.match(Or))throw new RangeError("Format string contains an unescaped latin alphabet character `"+O+"`");if(w==="''"?w="'":O==="'"&&(w=Mr(w)),L.indexOf(w)===0)L=L.slice(w.length);else return{v:new Date(NaN)}}};for(ee.s();!(ke=ee.n()).done;){var je=Je();if(Ye(je)==="object")return je.v}}catch(j){ee.e(j)}finally{ee.f()}if(L.length>0&&Ur.test(L))return new Date(NaN);var et=ve.map(function(j){return j.priority}).sort(function(j,w){return w-j}).filter(function(j,w,O){return O.indexOf(j)===w}).map(function(j){return ve.filter(function(w){return w.priority===j}).sort(function(w,O){return O.subPriority-w.subPriority})}).map(function(j){return j[0]}),xe=W(i);if(isNaN(xe.getTime()))return new Date(NaN);var B=ut(xe,lt(xe)),De={},te=Le(et),Ue;try{for(te.s();!(Ue=te.n()).done;){var Oe=Ue.value;if(!Oe.validate(B,he))return new Date(NaN);var re=Oe.set(B,De,he);Array.isArray(re)?(B=re[0],_t(De,re[1])):B=re}}catch(j){te.e(j)}finally{te.f()}return B}function Mr(n){return n.match(jr)[1].replace(Dr,"'")}const Ar="/node_front_bc_53_Anna-Voronina/assets/pets-58617244.png",Er="/node_front_bc_53_Anna-Voronina/assets/pets@1x-4d5d611d.webp",_r="/node_front_bc_53_Anna-Voronina/assets/pets@2x-336d7999.webp",Ir="/node_front_bc_53_Anna-Voronina/assets/petsp@1x-9c9753da.png",Lr="/node_front_bc_53_Anna-Voronina/assets/petsp@2x-cbc29aff.png",qr=v.picture`
  margin: 0 auto 20px;
  display: block;

  @media only screen and (min-width: 1280px) {
    margin: 0 150px 20px;
  }
`,Rr=v.p`
  width: 300px;
  margin: 0 auto 130px;
  text-align: center;
`,Yr=()=>s.jsxs(s.Fragment,{children:[s.jsxs(qr,{children:[s.jsx("source",{srcSet:`${Er} 1x, ${_r} 2x`,type:"image/webp"}),s.jsx("source",{srcSet:`${Ir} 1x, ${Lr} 2x`,type:"image/png"}),s.jsx("img",{src:Ar,alt:"Empty pets list"})]}),s.jsx(Rr,{children:'You have not added your pets, if you want to add them, click on the button "Add pet"'})]}),Hr=v.ul`
  margin-bottom: 50px;
  display: flex;
  flex-direction: column;
  gap: 20px;

  @media only screen and (min-width: 1280px) {
    gap: 24px;
  }
`,Nr=v.li`
  position: relative;
  padding: 16px 20px 40px;
  display: flex;
  flex-direction: column;
  align-items: center;
  border-radius: ${({theme:n})=>n.radii.s};
  background: ${({theme:n})=>n.colors.white};
  box-shadow: ${({theme:n})=>n.shadows.primary};

  @media only screen and (min-width: 768px) {
    height: 256px;
    padding: 20px 20px 0 20px;
    flex-direction: row;
    align-items: flex-start;
    border-radius: ${({theme:n})=>n.radii.l};
  }

  @media only screen and (min-width: 1280px) {
    height: 100%;
    padding: 20px 28px 20px 20px;
  }

  ul {
    margin-top: 20px;
    display: flex;
    flex-direction: column;
    gap: 12px;

    @media only screen and (min-width: 768px) {
      margin-top: 0;
      gap: 16px;
    }

    @media only screen and (min-width: 1280px) {
      margin-top: 0;
      gap: 12px;
    }
  }
`,Wr=v.img`
  width: 240px;
  height: 240px;
  border-radius: ${({theme:n})=>n.radii.s};

  @media only screen and (min-width: 768px) {
    width: 128px;
    height: 128px;
    margin-right: 20px;
  }

  @media only screen and (min-width: 1280px) {
    width: 161px;
    height: 161px;
    margin-right: 32px;
  }
`,ie=v.li`
  font-size: ${({theme:n})=>n.fontSizes.s};
  letter-spacing: 0.56px;
  color: #000;

  @media only screen and (min-width: 768px) {
    color: ${({theme:n})=>n.colors.black};
  }

  @media only screen and (min-width: 1280px) {
    font-size: ${({theme:n})=>n.fontSizes.m};
    letter-spacing: 0.64px;
    line-height: 1.375;
  }

  h3 {
    display: inline;
    font-family: ${({theme:n})=>n.fonts.manrope.bold};
    font-weight: ${({theme:n})=>n.fontWeights.bold};

    @media only screen and (min-width: 768px) {
      font-family: ${({theme:n})=>n.fonts.manrope.semiBold};
      font-weight: ${({theme:n})=>n.fontWeights.semiBold};
    }
  }
  p {
    display: inline;
    font-family: ${({theme:n})=>n.fonts.manrope.regular};
    font-weight: ${({theme:n})=>n.fontWeights.regular};

    @media only screen and (min-width: 768px) {
      font-family: ${({theme:n})=>n.fonts.manrope.regular};
      font-weight: ${({theme:n})=>n.fontWeights.regular};
    }
  }
`,zr=v.svg`
  position: absolute;
  top: 272px;
  right: 16px;
  fill: transparent;
  stroke: ${({theme:n})=>n.colors.blue};

  @media only screen and (min-width: 768px) {
    top: 20px;
    right: 20px;
  }
`;v.h3`
  width: 200px;
  margin: 60px auto 14px;
  font-size: ${({theme:n})=>n.fontSizes.xl};
  font-family: ${({theme:n})=>n.fonts.manrope.bold};
  font-weight: ${({theme:n})=>n.fontWeights.bold};
  letter-spacing: 0.96px;
  text-align: center;
  color: ${({theme:n})=>n.colors.black};

  @media only screen and (min-width: 768px) {
    width: 288px;
    margin: 60px auto 40px;
    font-size: 28px;
    letter-spacing: -0.28px;
    color: #000;
  }
`;v.p`
  width: 230px;
  margin: 0 auto 44px;
  text-align: center;
  font-size: ${({theme:n})=>n.fontSizes.s};
  font-family: ${({theme:n})=>n.fonts.manrope.medium};
  font-weight: ${({theme:n})=>n.fontWeights.medium};
  letter-spacing: -0.14px;
  color: #000;

  span {
    font-family: ${({theme:n})=>n.fonts.manrope.bold};
    font-weight: ${({theme:n})=>n.fontWeights.bold};
  }

  @media only screen and (min-width: 768px) {
    width: 393px;
    margin: 0 auto 48px;
    font-size: ${({theme:n})=>n.fontSizes.m};
    letter-spacing: -0.16px;
  }
`;v.div`
  margin-bottom: 60px;
  display: flex;
  flex-direction: column;
  gap: 8px;

  @media only screen and (min-width: 768px) {
    flex-direction: row;
    justify-content: center;
    gap: 17px;
  }
`;const Fr=()=>{const[n,o]=q.useState(!1),[i,r]=q.useState(""),[e,a]=q.useState(""),t=K(be),u=t==null?void 0:t.pets,[d,f]=q.useState(1),[P,D]=q.useState([]);q.useEffect(()=>{if(u){const g=(d-1)*2,E=g+2,_=u.slice(g,E);D(_)}},[d,u]);const $=({id:g,name:E})=>{document.body.style.overflow="hidden",o(_=>!_),r(E),a(g)},U=()=>{o(g=>!g),document.body.style.overflow="auto"},I=g=>{f(g)};return s.jsxs(s.Fragment,{children:[s.jsx(Hr,{children:P.map(g=>s.jsxs(Nr,{children:[s.jsx(Wr,{src:g.file,alt:"default"}),s.jsxs("ul",{children:[s.jsxs(ie,{children:[s.jsx("h3",{children:"Name: "}),s.jsx("p",{children:g.name})]}),s.jsxs(ie,{children:[s.jsx("h3",{children:"Date of birth: "}),s.jsx("p",{children:g.date})]}),s.jsxs(ie,{children:[s.jsx("h3",{children:"Type: "}),s.jsx("p",{children:g.type})]}),s.jsxs(ie,{children:[s.jsx("h3",{children:" Comments: "}),s.jsx("p",{children:g.comments})]})]}),s.jsx("button",{type:"button","aria-label":"Remove the card",onClick:()=>$({name:g.name,id:g._id}),children:s.jsx(zr,{width:"24px",height:"24px",children:s.jsx("use",{href:H+"#trash-2"})})})]},g._id))}),n&&s.jsx(Ot,{onClose:U,type:"own",title:i,id:e}),(u==null?void 0:u.length)===0&&s.jsx(Yr,{}),s.jsx(Ut,{onPageChange:I,currentPage:d,perPage:2,totalItems:u==null?void 0:u.length})]})},Br=We().shape({name:ae().required("The 'Name' field is required").matches(ct,"Name must contain only letters and spaces"),email:ae().matches(dt,"Invalid email format").required("The field 'Email' is required"),birthday:ft().required("required field").test("is-in-the-past","Date must be current or in the past",n=>n?new Date(n)<=new Date:!0),phone:ae().required("The 'Phone' field is required").matches(pt,"Incorrect phone format. Example: +380671234567"),city:ae().matches(ht,"Incorrect city format. Example: Brovary, Kyiv, Akhtyrka, Sumy").required("The 'City' field is required")}),Qr=We().shape({avatar:vt().required("Download avatar is required").test("fileSize","Avatar size must not exceed 3 MB",n=>n?n.size<=3e6:!0)}),Vr=v.div`
  margin: 0 auto 59px;

  img {
    height: 182px;
    width: 182px;
    margin: 0 auto;
    border-radius: ${({theme:n})=>n.radii.l};
    overflow: hidden;
    object-fit: cover;
  }

  @media only screen and (min-width: 768px) {
    margin: 0 0 0 71px;
  }
  @media only screen and (min-width: 1280px) {
    margin: 0 auto 63px;
  }
`,Gr=v.label`
  position: absolute;
  top: 225px;
  left: 50%;
  transform: translate(-50%, -50%);

  input {
    display: none;
  }

  @media only screen and (min-width: 768px) {
    top: 213px;
    left: 489px;
    transform: translate(0%, 0%);
  }
  @media only screen and (min-width: 1280px) {
    top: 216px;
    left: 143px;
  }
`,Xr=v.div`
  display: flex;
  gap: 8px;
  align-items: center;

  button {
    display: flex;
    gap: 8px;
  }

  svg {
    width: 24px;
    height: 24px;
  }
  p {
    font-family: ${({theme:n})=>n.fonts.manrope.regular};
    font-size: ${({theme:n})=>n.fontSizes.xs};
    font-weight: ${({theme:n})=>n.fontWeights.regular};
    line-height: 1.83;
    letter-spacing: 0.48px;
    color: ${({theme:n})=>n.colors.black};
  }
`,Kr=v.svg`
  fill: ${({theme:n})=>n.colors.blue};

  &:hover,
  &:focus {
    fill: ${({theme:n})=>n.colors.yellow};
  }
`,Zr=v.svg`
  fill: transparent;
  stroke: ${({theme:n})=>n.colors.blue};

  &:hover,
  &:focus {
    stroke: ${({theme:n})=>n.colors.yellow};
  }
`,Sr=v.svg`
  stroke: ${({theme:n})=>n.colors.red};
`,Jr=v.p`
  position: absolute;
  font-size: ${({theme:n})=>n.fontSizes.xs};
  top: 23px;
  color: ${({theme:n})=>n.colors.red};

  @media only screen and (min-width: 768px) {
    top: 25px;
  }
`,Ge=({editing:n,handleEditClick:o})=>{const i=ue(),r=K(mt),e=K(be),a=ze({initialValues:{avatarURL:""},validationSchema:Qr}),{avatarURL:t}=a.values,u=d=>{d.preventDefault();const f=new FormData;f.append("avatarURL",t),i(xt(f)).unwrap().then(()=>{o(),N.success("Avatar updated successfully")}).catch(P=>{N.error(P)}),a.setValues({...a.values})};return s.jsx(s.Fragment,{children:s.jsx("form",{onSubmit:u,children:s.jsxs(Vr,{htmlFor:"avatarURL",children:[n?t?s.jsx("img",{src:URL.createObjectURL(t),alt:"User photo"}):s.jsx("img",{src:e==null?void 0:e.avatarURL,alt:"User Avatar"}):s.jsx("img",{src:e==null?void 0:e.avatarURL,alt:"User Avatar"}),n?s.jsxs(Gr,{children:[s.jsx(Xr,{children:t?s.jsxs(s.Fragment,{children:[s.jsxs("button",{type:"submit",children:[s.jsx(Zr,{children:s.jsx("use",{href:H+"#check"})}),s.jsx("p",{children:r?"Loading...":"Confirm"})]}),s.jsx("button",{type:"button",onClick:()=>{URL.revokeObjectURL(URL.createObjectURL(t)),a.setFieldValue("avatarURL","")},children:s.jsx(Sr,{children:s.jsx("use",{href:H+"#cross-small"})})})]}):s.jsxs(s.Fragment,{children:[s.jsx(Kr,{children:s.jsx("use",{href:H+"#camera"})}),s.jsx("p",{children:" Edit photo"})]})}),s.jsx("input",{type:"file",name:"avatarURL",accept:"image/*",onChange:d=>{a.setFieldValue("avatarURL",d.target.files[0])}})]}):null,a.touched.avatarURL&&a.errors.avatarURL?s.jsx(Jr,{children:a.errors.avatarURL}):null]})})})};Ge.propTypes={editing:R.bool.isRequired,handleEditClick:R.func.isRequired};const Re=n=>{if(n)return yt($r(n,"dd-MM-yyyy",new Date),"yyyy-MM-dd")},en=n=>{if(n)return n.split("-").reverse().join("-")},tn=v.form`
  display: flex;
  flex-direction: column;
  gap: 16px;

  @media only screen and (min-width: 768px) {
    gap: 10px;
  }
  @media only screen and (min-width: 1280px) {
    flex-direction: column;
    gap: 0;
  }
`,rn=v.div`
  display: flex;
  flex-direction: column;
  gap: 16px;

  @media only screen and (min-width: 768px) {
    width: 355px;
    gap: 10px;
  }
`,Q=v.label`
  position: relative;
  display: flex;
  justify-content: space-between;
`,V=v.p`
  font-family: ${({theme:n})=>n.fonts.manrope.semiBold};
  font-size: ${({theme:n})=>n.fontSizes.s};
  font-weight: ${({theme:n})=>n.fontWeights.semiBold};
  letter-spacing: 0.56px;
  color: ${({theme:n})=>n.colors.black};

  @media only screen and (min-width: 768px) {
    font-size: 18px;
    letter-spacing: 0.72px;
  }
`,G=v.input`
  width: 70%;
  height: 24px;
  padding: 4px 12px;
  border-radius: ${({theme:n})=>n.radii.l};
  border: 1px solid ${({theme:n})=>n.colors.blue};

  color: ${({theme:n})=>n.colors.black};
  font-family: ${({theme:n})=>n.fonts.manrope.regular};
  font-size: ${({theme:n})=>n.fontSizes.xs};
  font-weight: ${({theme:n})=>n.fontWeights.regular};
  letter-spacing: 0.48px;

  @media only screen and (min-width: 768px) {
    width: 255px;
    height: 30px;
    padding: 4px 12px;
    border-radius: ${({theme:n})=>n.radii.s};

    font-size: ${({theme:n})=>n.fontSizes.m};
    letter-spacing: 0.64px;
  }
`,X=v.p`
  position: absolute;
  font-size: ${({theme:n})=>n.fontSizes.xs};
  top: 23px;
  color: ${({theme:n})=>n.colors.red};

  @media only screen and (min-width: 768px) {
    top: 25px;
  }
`,Xe=({editing:n,handleEditClick:o})=>{const i=ue(),r=K(be),e={name:(r==null?void 0:r.name)||"",email:(r==null?void 0:r.email)||"",birthday:Re(r==null?void 0:r.birthday)||"",phone:(r==null?void 0:r.phone)||"",city:(r==null?void 0:r.city)||""},a=ze({initialValues:e,validationSchema:Br,onSubmit:D=>{const $={...D,birthday:D.birthday?en(D.birthday):""};i(wt($)).unwrap().then(()=>{o(),N.success("Personal data updated successfully")}).catch(U=>{U.includes("E11000")?N.error("This email is already in use"):N.error(U)})}}),{name:t,email:u,birthday:d,phone:f,city:P}=a.values;return s.jsx(s.Fragment,{children:s.jsxs(tn,{onSubmit:a.handleSubmit,children:[s.jsxs(rn,{children:[s.jsxs(Q,{htmlFor:"name",children:[s.jsx(V,{children:"Name:"}),s.jsx(G,{type:"text",name:"name",placeholder:"Anna",autoComplete:"off",defaultValue:n?t:r==null?void 0:r.name,onChange:a.handleChange,readOnly:!n}),a.touched.name&&a.errors.name?s.jsx(X,{children:a.errors.name}):null]}),s.jsxs(Q,{htmlFor:"email",children:[s.jsx(V,{children:"Email:"}),s.jsx(G,{type:"email",name:"email",placeholder:"anna00@gmail.com",defaultValue:n?u:r==null?void 0:r.email,onChange:a.handleChange,readOnly:!n}),a.touched.email&&a.errors.email?s.jsx(X,{children:a.errors.email}):null]}),s.jsxs(Q,{htmlFor:"birthday",children:[s.jsx(V,{children:"Birthday:"}),s.jsx(G,{type:"date",name:"birthday",defaultValue:n?d:Re(r==null?void 0:r.birthday),onChange:a.handleChange,readOnly:!n}),a.touched.birthday&&a.errors.birthday?s.jsx(X,{children:a.errors.birthday}):null]}),s.jsxs(Q,{htmlFor:"phone",children:[s.jsx(V,{children:"Phone:"}),s.jsx(G,{type:"tel",name:"phone",placeholder:"+38000000000",defaultValue:n?f:r==null?void 0:r.phone,onChange:a.handleChange,readOnly:!n}),a.touched.phone&&a.errors.phone?s.jsx(X,{children:a.errors.phone}):null]}),s.jsxs(Q,{htmlFor:"city",children:[s.jsx(V,{children:"City:"}),s.jsx(G,{type:"text",name:"city",placeholder:"Kyiv",defaultValue:n?P:r==null?void 0:r.city,onChange:a.handleChange,readOnly:!n}),a.touched.city&&a.errors.city?s.jsx(X,{children:a.errors.city}):null]})]}),n&&s.jsx(Te,{text:"Save",type:"submit",variant:"Save"})]})})};Xe.propTypes={editing:R.bool.isRequired,handleEditClick:R.func.isRequired};const Ke=({editing:n,handleEditClick:o})=>s.jsxs(s.Fragment,{children:[s.jsx(Ge,{editing:n,handleEditClick:o}),s.jsx(Xe,{editing:n,handleEditClick:o})]});Ke.propTypes={editing:R.any,handleEditClick:R.any};const nn=v.button`
  position: absolute;
  top: 14px;
  right: 14px;

  @media only screen and (min-width: 768px) {
    top: 18px;
    right: 18px;
  }
`,an=v.svg`
  fill: ${({theme:n})=>n.colors.blue};

  &:hover,
  &:focus {
    fill: ${({theme:n})=>n.colors.yellow};
  }
`,on=v.svg`
  stroke: ${({theme:n})=>n.colors.blue};

  &:hover,
  &:focus {
    stroke: ${({theme:n})=>n.colors.yellow};
  }
`,Ze=({editing:n,handleEditClick:o})=>s.jsxs(s.Fragment,{children:[s.jsx(nn,{onClick:o,children:n?s.jsx(on,{width:"24px",height:"24px",children:s.jsx("use",{href:H+"#cross-small"})}):s.jsx(an,{width:"24px",height:"24px",children:s.jsx("use",{href:H+"#edit-2"})})}),s.jsx(Ke,{editing:n,handleEditClick:o})]});Ze.propTypes={editing:R.bool.isRequired,handleEditClick:R.func.isRequired};const sn=v.div`
  position: relative;

  h2 {
    font-family: ${({theme:n})=>n.fonts.manrope.medium};
    font-size: ${({theme:n})=>n.fontSizes.l};
    font-weight: ${({theme:n})=>n.fontWeights.medium};
    letter-spacing: 0.8px;
    color: #000;

    @media only screen and (min-width: 768px) {
      font-size: 28px;
      letter-spacing: normal;
      color: ${({theme:n})=>n.colors.black};
    }
    @media only screen and (min-width: 1280px) {
      margin: 0 auto 24px;
    }
  }

  @media only screen and (min-width: 1280px) {
    display: flex;
    gap: 32px;
    margin-top: 62px;
  }
`,un=v.h2`
  margin: 40px auto 18px;

  @media only screen and (min-width: 768px) {
    margin: 60px auto 24px;
  }
`,ln=v.h2`
  margin: 46px auto 31px;

  @media only screen and (min-width: 768px) {
    margin: 40px auto 22px;
  }
`,cn=v.div`
  position: relative;
  padding: 20px 8px 20px;
  border-radius: ${({theme:n})=>n.radii.s};
  background-color: ${({theme:n})=>n.colors.white};
  box-shadow: ${({theme:n})=>n.shadows.primary};

  @media only screen and (min-width: 768px) {
    display: flex;
    flex-direction: row-reverse;
    justify-content: flex-end;
    flex-wrap: wrap;
    padding: 20px 76px 16px 20px;
    border-radius: ${({theme:n})=>n.radii.l};
  }
  @media only screen and (min-width: 1280px) {
    display: block;
    width: 395px;
    padding: 20px 24px 19px 16px;
  }
`,dn=v(gt)`
  position: absolute;
  top: 736px;
  right: 0;
  @media only screen and (min-width: 768px) {
    top: 370px;
  }
  @media only screen and (min-width: 1280px) {
    top: 0;
  }
`,fn=v.div`
  width: 100%;
`,pn=v.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  padding: 44px 0 36px 0;

  @media screen and (min-width: 768px) {
    padding: 36px 0 36px 0;
  }
  @media screen and (min-width: 1280px) {
  }
`,hn=v.p`
  margin: 24px 0 40px 0;
  font-family: ${({theme:n})=>n.fonts.manrope.semiBold};
  font-size: ${({theme:n})=>n.fontSizes.m};
  font-style: normal;
  font-weight: ${({theme:n})=>n.fontWeights.semiBold};
  line-height: normal;
  letter-spacing: 0.64;

  @media screen and (min-width: 768px) {
    margin: 52px 0 60px 0;
    font-size: ${({theme:n})=>n.fontSizes.xl};
    letter-spacing: 0.96;
  }
  @media screen and (min-width: 1280px) {
  }
`,vn=()=>{const n=ue(),o=()=>{n(Tt(!1))};return s.jsx(bt,{variant:"bigPadding",onClose:o,children:s.jsxs(pn,{children:[s.jsx($t,{text:"Congrats!"}),s.jsx(hn,{children:"Your registration completed successfully"}),s.jsx(Te,{text:"Go to Profile",icon:"pawprint",variant:"bigButtonSecond",iconPosition:"right",onClick:o})]})})},bn=()=>{const[n,o]=q.useState(!1),i=K(Pt),r=ue(),e=Ct();q.useEffect(()=>{r(kt()).unwrap().catch(t=>N.error(t))},[r]);const a=()=>{o(t=>!t)};return s.jsxs(Dt,{children:[s.jsxs(sn,{children:[s.jsxs("div",{children:[s.jsx(un,{children:"My information:"}),s.jsxs(cn,{children:[s.jsx(Ze,{editing:n,handleEditClick:a}),n?null:s.jsx(jt,{variant:"profile"})]})]}),s.jsxs(fn,{children:[s.jsx(dn,{to:"/add-pet",state:{from:e},children:s.jsx(Te,{text:"Add pet",icon:"plus",iconPosition:"right",variant:"addButton"})}),s.jsx(ln,{children:"My pets:"}),s.jsx(Fr,{})]})]}),i&&s.jsx(vn,{})]})};export{bn as default};
