(()=>{"use strict";var e,t={8483:(e,t,r)=>{const n=window.wp.element;var a=r(6066);function o(e){return o="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},o(e)}function l(){return l=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e},l.apply(this,arguments)}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function c(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){var n,a,l,i;n=e,a=t,l=r[t],i=function(e,t){if("object"!=o(e)||!e)return e;var r=e[Symbol.toPrimitive];if(void 0!==r){var n=r.call(e,"string");if("object"!=o(n))return n;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(e)}(a),(a="symbol"==o(i)?i:String(i))in n?Object.defineProperty(n,a,{value:l,enumerable:!0,configurable:!0,writable:!0}):n[a]=l})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function s(e,t){(null==t||t>e.length)&&(t=e.length);for(var r=0,n=new Array(t);r<t;r++)n[r]=e[r];return n}window.addEventListener("DOMContentLoaded",(function(e){var t,r=function(e,t){var r="undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(!r){if(Array.isArray(e)||(r=function(e,t){if(e){if("string"==typeof e)return s(e,t);var r=Object.prototype.toString.call(e).slice(8,-1);return"Object"===r&&e.constructor&&(r=e.constructor.name),"Map"===r||"Set"===r?Array.from(e):"Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)?s(e,t):void 0}}(e))||t&&e&&"number"==typeof e.length){r&&(e=r);var n=0,a=function(){};return{s:a,n:function(){return n>=e.length?{done:!0}:{done:!1,value:e[n++]}},e:function(e){throw e},f:a}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}var o,l=!0,i=!1;return{s:function(){r=r.call(e)},n:function(){var e=r.next();return l=e.done,e},e:function(e){i=!0,o=e},f:function(){try{l||null==r.return||r.return()}finally{if(i)throw o}}}}(document.getElementsByClassName("eb-slider-wrapper"));try{var o=function(){var e=t.value,r=JSON.parse(e.getAttribute("data-settings")),o=JSON.parse(e.getAttribute("data-images")),i=e.getAttribute("data-sliderContentType"),s=e.getAttribute("data-sliderType"),u=e.getAttribute("data-textAlign"),b=e.getAttribute("data-arrowNextIcon"),f=e.getAttribute("data-arrowPrevIcon"),d=e.getAttribute("data-titleTag")||"h2",m=e.getAttribute("data-contentTag")||"p",p=(0,n.createRef)();function y(e){var t=e.className,r=e.style,n=e.onClick,a=e.arrowNextIcon;return React.createElement("div",{className:t,style:c(c({},r),{},{display:"block"}),onClick:n},React.createElement("i",{"aria-hidden":"true",className:a}))}function g(e){var t=e.className,r=e.style,n=e.onClick,a=e.arrowPrevIcon;return React.createElement("div",{className:t,style:c(c({},r),{},{display:"block"}),onClick:n},React.createElement("i",{"aria-hidden":"true",className:a}))}r.nextArrow=React.createElement(y,{arrowNextIcon:b}),r.prevArrow=React.createElement(g,{arrowPrevIcon:f}),(0,n.render)(React.createElement(a.Z,l({ref:p},r,{key:"".concat(r.autoplay,"-").concat(r.adaptiveHeight),className:s}),o.map((function(e){return React.createElement("div",{className:"eb-slider-item ".concat(i)},"image"===s&&e.buttonUrl&&e.isValidUrl&&React.createElement(React.Fragment,null,React.createElement("a",{href:e.buttonUrl&&e.isValidUrl?e.buttonUrl:"#",target:e.openNewTab?"_blank":"_self",rel:"noopener"},React.createElement("img",{className:"eb-slider-image",src:e.url,alt:e.alt?e.alt:e.title}))),"image"===s&&!e.buttonUrl&&!e.isValidUrlf&&React.createElement("img",{className:"eb-slider-image",src:e.url,alt:e.alt?e.alt:e.title}),"content"===s&&React.createElement(React.Fragment,null,React.createElement("img",{className:"eb-slider-image",src:e.url,alt:e.alt?e.alt:e.title}),React.createElement("div",{className:"eb-slider-content align-".concat(u)},e.title&&e.title.length>0&&React.createElement(React.Fragment,null,React.createElement(d,{className:"eb-slider-title",dangerouslySetInnerHTML:{__html:e.title}})),e.subtitle&&e.subtitle.length>0&&React.createElement(m,{className:"eb-slider-subtitle",dangerouslySetInnerHTML:{__html:e.subtitle}}),React.createElement("div",{className:"eb-slider-button-wrapper"},e.showButton&&e.buttonText&&e.buttonText.length>0&&React.createElement("a",{href:e.buttonUrl&&e.isValidUrl?e.buttonUrl:"#",className:"eb-slider-button",target:e.openNewTab?"_blank":"_self",rel:"noopener",dangerouslySetInnerHTML:{__html:e.buttonText}}),e.showSecondButton&&e.secondButtonText&&e.secondButtonText.length>0&&React.createElement("a",{href:e.secondButtonUrl&&e.isValidUrl?e.secondButtonUrl:"#",className:"eb-slider-second-button",target:e.secondButtonOpenNewTab?"_blank":"_self",rel:"noopener",dangerouslySetInnerHTML:{__html:e.secondButtonText}})))))}))),e)};for(r.s();!(t=r.n()).done;)o()}catch(e){r.e(e)}finally{r.f()}}))},9196:e=>{e.exports=window.React}},r={};function n(e){var a=r[e];if(void 0!==a)return a.exports;var o=r[e]={exports:{}};return t[e].call(o.exports,o,o.exports,n),o.exports}n.m=t,e=[],n.O=(t,r,a,o)=>{if(!r){var l=1/0;for(u=0;u<e.length;u++){for(var[r,a,o]=e[u],i=!0,c=0;c<r.length;c++)(!1&o||l>=o)&&Object.keys(n.O).every((e=>n.O[e](r[c])))?r.splice(c--,1):(i=!1,o<l&&(l=o));if(i){e.splice(u--,1);var s=a();void 0!==s&&(t=s)}}return t}o=o||0;for(var u=e.length;u>0&&e[u-1][2]>o;u--)e[u]=e[u-1];e[u]=[r,a,o]},n.n=e=>{var t=e&&e.__esModule?()=>e.default:()=>e;return n.d(t,{a:t}),t},n.d=(e,t)=>{for(var r in t)n.o(t,r)&&!n.o(e,r)&&Object.defineProperty(e,r,{enumerable:!0,get:t[r]})},n.g=function(){if("object"==typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"==typeof window)return window}}(),n.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t),n.r=e=>{"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n.j=80,(()=>{var e={80:0};n.O.j=t=>0===e[t];var t=(t,r)=>{var a,o,[l,i,c]=r,s=0;if(l.some((t=>0!==e[t]))){for(a in i)n.o(i,a)&&(n.m[a]=i[a]);if(c)var u=c(n)}for(t&&t(r);s<l.length;s++)o=l[s],n.o(e,o)&&e[o]&&e[o][0](),e[o]=0;return n.O(u)},r=globalThis.webpackChunkessential_blocks=globalThis.webpackChunkessential_blocks||[];r.forEach(t.bind(null,0)),r.push=t.bind(null,r.push.bind(r))})(),n.nc=void 0;var a=n.O(void 0,[277],(()=>n(8483)));a=n.O(a)})();