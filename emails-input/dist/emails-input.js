!function(){"use strict";var e={509:function(e,t){Object.defineProperty(t,"__esModule",{value:!0}),t.EMAIL_REGEX=t.ADD_CHIP_EVENTS=t.REMOVE_ICON_SVG=t.DEFAULT_PLACEHOLDER=void 0,t.DEFAULT_PLACEHOLDER="add more people...",t.REMOVE_ICON_SVG='<svg width="8" height="8" viewBox="0 0 8 8" fill="none" xmlns="http://www.w3.org/2000/svg">\n<path fill-rule="evenodd" clip-rule="evenodd" d="M8 0.8L7.2 0L4 3.2L0.8 0L0 0.8L3.2 4L0 7.2L0.8 8L4 4.8L7.2 8L8 7.2L4.8 4L8 0.8Z" fill="#050038"/>\n</svg>',t.ADD_CHIP_EVENTS=["keyup","blur"],t.EMAIL_REGEX=/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/},820:function(e,t,n){var i,r=this&&this.__extends||(i=function(e,t){return(i=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(e,t){e.__proto__=t}||function(e,t){for(var n in t)Object.prototype.hasOwnProperty.call(t,n)&&(e[n]=t[n])})(e,t)},function(e,t){function n(){this.constructor=e}i(e,t),e.prototype=null===t?Object.create(t):(n.prototype=t.prototype,new n)}),o=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(t,"__esModule",{value:!0}),t.EmailsInput=void 0,n(273);var a=o(n(291)),s=n(904),l=function(e){function t(t,n){var i=e.call(this,t,n)||this;return i.init(),i}return r(t,e),t.prototype.init=function(){this.createComponent(),this.loadEventListeners()},t.prototype.addEmail=function(e){void 0===e&&(e=s.randomEmailGenerator()),this.addChips(e)},Object.defineProperty(t.prototype,"validAddedEmails",{get:function(){return this.addedEmails.filter((function(e){return e.isValid}))},enumerable:!1,configurable:!0}),t}(a.default);t.EmailsInput=l,window.EmailsInput=function(e,t){if(!e)throw new Error("Please provide HTML container first");return new l(e,t)}},291:function(e,t,n){Object.defineProperty(t,"__esModule",{value:!0});var i=n(509),r=n(904),o=function(){function e(e,t){this.userContainerEl=e,this.params=t,this.addedEmails=[],this.selectors={container:"email-inputs",input:"email-inputs--input",chip:"email-inputs--chip",chipInvalid:"email-inputs--chip__invalid",chipRemove:"email-inputs--chip-close"}}return Object.defineProperty(e.prototype,"inputElement",{get:function(){return this.mainContainer.querySelector("."+this.selectors.input)},enumerable:!1,configurable:!0}),e.prototype.createComponent=function(){var e,t=document.createElement("div");t.classList.add(this.selectors.container),t.innerHTML='<input type="text" class="'+this.selectors.input+'" placeholder="'+((null===(e=this.params)||void 0===e?void 0:e.placeholder)||i.DEFAULT_PLACEHOLDER)+'">',this.mainContainer=t,this.userContainerEl.appendChild(t)},e.prototype.loadEventListeners=function(){var e=this;this.mainContainer.addEventListener("click",(function(t){var n=t.target;n.classList.contains(e.selectors.chipRemove)&&e.removeChip(n.parentElement)})),i.ADD_CHIP_EVENTS.forEach((function(t){e.inputElement.addEventListener(t,(function(t){var n=t.target,i=t.type;n.value&&(r.isTargetKeyPressed(t)||"blur"===i)&&e.addChips(n.value)}))}))},e.prototype.addChips=function(e){var t,n,o=this;void 0===e&&(e="");var a=e.trim().split(",");if(a.length){var s=document.createDocumentFragment(),l=[];a.forEach((function(e){var t;if((e=e.trim()).length){var n={id:r.randomString(),email:e,isValid:((null===(t=o.params)||void 0===t?void 0:t.emailValidationRules)||i.EMAIL_REGEX).test(e)},a=document.createElement("div");a.setAttribute("data-id",n.id),a.classList.add(o.selectors.chip),n.isValid||a.classList.add(o.selectors.chipInvalid),a.innerHTML=e+' <span class="'+o.selectors.chipRemove+'">'+i.REMOVE_ICON_SVG+"</span>",s.appendChild(a),l.push(n)}}));for(var c=0;c<(null===(t=s.children)||void 0===t?void 0:t.length);c++)r.fadeIn(s.children[c]);this.mainContainer.insertBefore(s,this.mainContainer.children[this.mainContainer.children.length-1]),this.inputElement.value="",this.addedEmails=this.addedEmails.concat(l),(null===(n=this.params)||void 0===n?void 0:n.onEmailAdd)&&this.params.onEmailAdd(l)}},e.prototype.removeChip=function(e){var t,n=this,i=e.innerHTML.split(" ")[0],o=e.getAttribute("data-id");this.addedEmails=this.addedEmails.filter((function(e){return e.id!==o})),r.fadeOut(e,(function(){return n.mainContainer.removeChild(e)})),(null===(t=this.params)||void 0===t?void 0:t.onEmailRemove)&&this.params.onEmailRemove(i)},e}();t.default=o},904:function(e,t){function n(){return Math.random().toString(36).substring(2,5)+Math.random().toString(36).substring(2,5)}Object.defineProperty(t,"__esModule",{value:!0}),t.isTargetKeyPressed=t.triggerEvent=t.randomString=t.randomEmailGenerator=t.fadeIn=t.fadeOut=void 0,t.fadeOut=function(e,t){e.style.opacity=1,function n(){(e.style.opacity-=.1)<0?(e.style.display="none",t&&t()):requestAnimationFrame(n)}()},t.fadeIn=function(e,t){void 0===t&&(t="block"),e.style.opacity=0,e.style.display=t,function t(){var n=parseFloat(e.style.opacity);(n+=.1)>1||(e.style.opacity=""+n,requestAnimationFrame(t))}()},t.randomEmailGenerator=function(){return n()+"@test.com"},t.randomString=n,t.triggerEvent=function(e,t){var n=document.createEvent("HTMLEvents");n.initEvent(t,!1,!0),e.dispatchEvent(n)},t.isTargetKeyPressed=function(e){var t=e.code,n=e.keyCode;return e.code?"Enter"===t||"Comma"===t:13===n||188===n}},99:function(e,t,n){var i=n(645),r=n.n(i)()((function(e){return e[1]}));r.push([e.id,"@import url(https://fonts.googleapis.com/css2?family=Open+Sans:wght@400;700&display=swap);"]),r.push([e.id,'.email-inputs{font-family:"Open Sans",sans-serif;font-size:14px;line-height:23px;border-radius:4px;color:#050038;background-color:#fff;border:1px solid #c3c2cf;padding:8px 7px;display:flex;flex-wrap:wrap;align-items:flex-start;height:96px;overflow-y:auto}.email-inputs--chip{background-color:rgba(102,153,255,.2);border-radius:100px;padding:0 24px 0 10px;margin-right:8px;position:relative;margin-bottom:3px}.email-inputs--chip__invalid{background-color:#fff;border-bottom:1px dashed #d92929;border-radius:0;padding-left:0}.email-inputs--chip-close{position:absolute;right:8px;top:-2px;z-index:0;display:block;cursor:pointer}.email-inputs--chip-close svg{pointer-events:none}.email-inputs--input{color:#050038;font-family:"Open Sans",sans-serif;font-size:14px;line-height:23px;padding:0;outline:0;border:0}.email-inputs--input::placeholder{color:#c3c2cf}',""]),t.Z=r},645:function(e){e.exports=function(e){var t=[];return t.toString=function(){return this.map((function(t){var n=e(t);return t[2]?"@media ".concat(t[2]," {").concat(n,"}"):n})).join("")},t.i=function(e,n,i){"string"==typeof e&&(e=[[null,e,""]]);var r={};if(i)for(var o=0;o<this.length;o++){var a=this[o][0];null!=a&&(r[a]=!0)}for(var s=0;s<e.length;s++){var l=[].concat(e[s]);i&&r[l[0]]||(n&&(l[2]?l[2]="".concat(n," and ").concat(l[2]):l[2]=n),t.push(l))}},t}},273:function(e,t,n){n.r(t);var i=n(379),r=n.n(i),o=n(99);r()(o.Z,{insert:"head",singleton:!1}),t.default=o.Z.locals||{}},379:function(e,t,n){var i,r=function(){var e={};return function(t){if(void 0===e[t]){var n=document.querySelector(t);if(window.HTMLIFrameElement&&n instanceof window.HTMLIFrameElement)try{n=n.contentDocument.head}catch(e){n=null}e[t]=n}return e[t]}}(),o=[];function a(e){for(var t=-1,n=0;n<o.length;n++)if(o[n].identifier===e){t=n;break}return t}function s(e,t){for(var n={},i=[],r=0;r<e.length;r++){var s=e[r],l=t.base?s[0]+t.base:s[0],c=n[l]||0,d="".concat(l," ").concat(c);n[l]=c+1;var u=a(d),p={css:s[1],media:s[2],sourceMap:s[3]};-1!==u?(o[u].references++,o[u].updater(p)):o.push({identifier:d,updater:m(p,t),references:1}),i.push(d)}return i}function l(e){var t=document.createElement("style"),i=e.attributes||{};if(void 0===i.nonce){var o=n.nc;o&&(i.nonce=o)}if(Object.keys(i).forEach((function(e){t.setAttribute(e,i[e])})),"function"==typeof e.insert)e.insert(t);else{var a=r(e.insert||"head");if(!a)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");a.appendChild(t)}return t}var c,d=(c=[],function(e,t){return c[e]=t,c.filter(Boolean).join("\n")});function u(e,t,n,i){var r=n?"":i.media?"@media ".concat(i.media," {").concat(i.css,"}"):i.css;if(e.styleSheet)e.styleSheet.cssText=d(t,r);else{var o=document.createTextNode(r),a=e.childNodes;a[t]&&e.removeChild(a[t]),a.length?e.insertBefore(o,a[t]):e.appendChild(o)}}function p(e,t,n){var i=n.css,r=n.media,o=n.sourceMap;if(r?e.setAttribute("media",r):e.removeAttribute("media"),o&&"undefined"!=typeof btoa&&(i+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(o))))," */")),e.styleSheet)e.styleSheet.cssText=i;else{for(;e.firstChild;)e.removeChild(e.firstChild);e.appendChild(document.createTextNode(i))}}var f=null,h=0;function m(e,t){var n,i,r;if(t.singleton){var o=h++;n=f||(f=l(t)),i=u.bind(null,n,o,!1),r=u.bind(null,n,o,!0)}else n=l(t),i=p.bind(null,n,t),r=function(){!function(e){if(null===e.parentNode)return!1;e.parentNode.removeChild(e)}(n)};return i(e),function(t){if(t){if(t.css===e.css&&t.media===e.media&&t.sourceMap===e.sourceMap)return;i(e=t)}else r()}}e.exports=function(e,t){(t=t||{}).singleton||"boolean"==typeof t.singleton||(t.singleton=(void 0===i&&(i=Boolean(window&&document&&document.all&&!window.atob)),i));var n=s(e=e||[],t);return function(e){if(e=e||[],"[object Array]"===Object.prototype.toString.call(e)){for(var i=0;i<n.length;i++){var r=a(n[i]);o[r].references--}for(var l=s(e,t),c=0;c<n.length;c++){var d=a(n[c]);0===o[d].references&&(o[d].updater(),o.splice(d,1))}n=l}}}}},t={};function n(i){if(t[i])return t[i].exports;var r=t[i]={id:i,exports:{}};return e[i].call(r.exports,r,r.exports,n),r.exports}n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,{a:t}),t},n.d=function(e,t){for(var i in t)n.o(t,i)&&!n.o(e,i)&&Object.defineProperty(e,i,{enumerable:!0,get:t[i]})},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n(820)}();