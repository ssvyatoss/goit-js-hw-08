function e(e){return e&&e.__esModule?e.default:e}var t="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{};var n,r={save:(e,t)=>{try{const n=JSON.stringify(t);localStorage.setItem(e,n)}catch(e){console.error("Set state error: ",e.message)}},load:e=>{try{const t=localStorage.getItem(e);return null===t?void 0:JSON.parse(t)}catch(e){console.error("Get state error: ",e.message)}},remove:e=>{try{localStorage.removeItem(e)}catch(e){console.log("Remove item error: ",e.message)}}},o=/^\s+|\s+$/g,i=/^[-+]0x[0-9a-f]+$/i,a=/^0b[01]+$/i,u=/^0o[0-7]+$/i,f=parseInt,c="object"==typeof t&&t&&t.Object===Object&&t,l="object"==typeof self&&self&&self.Object===Object&&self,s=c||l||Function("return this")(),d=Object.prototype.toString,v=Math.max,m=Math.min,g=function(){return s.Date.now()};function p(e,t,n){var r,o,i,a,u,f,c=0,l=!1,s=!1,d=!0;if("function"!=typeof e)throw new TypeError("Expected a function");function p(t){var n=r,i=o;return r=o=void 0,c=t,a=e.apply(i,n)}function h(e){return c=e,u=setTimeout(w,t),l?p(e):a}function j(e){var n=e-f;return void 0===f||n>=t||n<0||s&&e-c>=i}function w(){var e=g();if(j(e))return O(e);u=setTimeout(w,function(e){var n=t-(e-f);return s?m(n,i-(e-c)):n}(e))}function O(e){return u=void 0,d&&r?p(e):(r=o=void 0,a)}function S(){var e=g(),n=j(e);if(r=arguments,o=this,f=e,n){if(void 0===u)return h(f);if(s)return u=setTimeout(w,t),p(f)}return void 0===u&&(u=setTimeout(w,t)),a}return t=b(t)||0,y(n)&&(l=!!n.leading,i=(s="maxWait"in n)?v(b(n.maxWait)||0,t):i,d="trailing"in n?!!n.trailing:d),S.cancel=function(){void 0!==u&&clearTimeout(u),c=0,r=f=o=u=void 0},S.flush=function(){return void 0===u?a:O(g())},S}function y(e){var t=typeof e;return!!e&&("object"==t||"function"==t)}function b(e){if("number"==typeof e)return e;if(function(e){return"symbol"==typeof e||function(e){return!!e&&"object"==typeof e}(e)&&"[object Symbol]"==d.call(e)}(e))return NaN;if(y(e)){var t="function"==typeof e.valueOf?e.valueOf():e;e=y(t)?t+"":t}if("string"!=typeof e)return 0===e?e:+e;e=e.replace(o,"");var n=a.test(e);return n||u.test(e)?f(e.slice(2),n?2:8):i.test(e)?NaN:+e}n=function(e,t,n){var r=!0,o=!0;if("function"!=typeof e)throw new TypeError("Expected a function");return y(n)&&(r="leading"in n?!!n.leading:r,o="trailing"in n?!!n.trailing:o),p(e,t,{leading:r,maxWait:t,trailing:o})};const h=document.querySelector(".feedback-form"),j={};h.addEventListener("input",e(n)((e=>{const{target:t}=e,n=t.name,o=t.value;j[n]=o,r.save("userData",j)}),500)),h.addEventListener("submit",(e=>{e.preventDefault(),r.remove("userData"),h.reset(),console.log(j)}));
//# sourceMappingURL=03-feedback.9d1947b6.js.map
