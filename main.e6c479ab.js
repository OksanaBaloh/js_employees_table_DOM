parcelRequire=function(e,r,t,n){var i,o="function"==typeof parcelRequire&&parcelRequire,u="function"==typeof require&&require;function f(t,n){if(!r[t]){if(!e[t]){var i="function"==typeof parcelRequire&&parcelRequire;if(!n&&i)return i(t,!0);if(o)return o(t,!0);if(u&&"string"==typeof t)return u(t);var c=new Error("Cannot find module '"+t+"'");throw c.code="MODULE_NOT_FOUND",c}p.resolve=function(r){return e[t][1][r]||r},p.cache={};var l=r[t]=new f.Module(t);e[t][0].call(l.exports,p,l,l.exports,this)}return r[t].exports;function p(e){return f(p.resolve(e))}}f.isParcelRequire=!0,f.Module=function(e){this.id=e,this.bundle=f,this.exports={}},f.modules=e,f.cache=r,f.parent=o,f.register=function(r,t){e[r]=[function(e,r){r.exports=t},{}]};for(var c=0;c<t.length;c++)try{f(t[c])}catch(e){i||(i=e)}if(t.length){var l=f(t[t.length-1]);"object"==typeof exports&&"undefined"!=typeof module?module.exports=l:"function"==typeof define&&define.amd?define(function(){return l}):n&&(this[n]=l)}if(parcelRequire=f,i)throw i;return f}({"KIzB":[function(require,module,exports) {
"use strict";function t(t){return r(t)||o(t)||n(t)||e()}function e(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}function n(t,e){if(t){if("string"==typeof t)return a(t,e);var n=Object.prototype.toString.call(t).slice(8,-1);return"Object"===n&&t.constructor&&(n=t.constructor.name),"Map"===n||"Set"===n?Array.from(t):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?a(t,e):void 0}}function o(t){if("undefined"!=typeof Symbol&&Symbol.iterator in Object(t))return Array.from(t)}function r(t){if(Array.isArray(t))return a(t)}function a(t,e){(null==e||e>t.length)&&(e=t.length);for(var n=0,o=new Array(e);n<e;n++)o[n]=t[n];return o}var i=document.querySelector("thead"),c=document.querySelector("tbody"),l=t(c.children);function s(t){var e=t.cellIndex;switch(t.setAttribute("data-sort","asc"),t.textContent){case"Salary":return l.sort(function(t,n){return u(t.children[e].textContent)-u(n.children[e].textContent)});default:return l.sort(function(t,n){return t.children[e].textContent.localeCompare(n.children[e].textContent)})}}function d(t){var e=t.cellIndex;switch(t.setAttribute("data-sort","desc"),t.textContent){case"Salary":return l.sort(function(t,n){return u(n.children[e].textContent)-u(t.children[e].textContent)});default:return l.sort(function(t,n){return n.children[e].textContent.localeCompare(t.children[e].textContent)})}}function u(t){return+t.slice(1).split(",").join("")}i.addEventListener("click",function(e){var n=e.target.closest("th");"asc"===n.dataset.sort?c.append.apply(c,t(d(n))):c.append.apply(c,t(s(n)))}),c.addEventListener("click",function(t){var e=t.target.closest("tr"),n=l.find(function(t){return"active"===t.className});n&&n.classList.remove("active"),e.classList.add("active")}),document.body.insertAdjacentHTML("beforeend",'\n  <form class= "new-employee-form">\n    <label>Name: \n      <input \n        name="name" \n        type="text"\n        data-qa="name"\n      >\n    </label>\n\n    <label>Position: \n      <input \n        name="position" \n        type="text"\n        data-qa="position"\n      >\n    </label>\n\n    <label>Office: \n      <select name="office" data-qa="office">\n        <option value="Tokyo" selected>Tokyo</option>\n        <option value="Singapore">Singapore</option>\n        <option value="London">London</option>\n        <option value="New York">New York</option>\n        <option value="Edinburgh">Edinburgh</option>\n        <option value="San Francisco">San Francisco</option>\n      </select>\n    </label>\n\n    <label>Age: \n      <input \n        name="age" \n        type="number"\n        data-qa="age"\n      >\n    </label>\n\n    <label>Salary: \n      <input \n        name="salary" \n        type="number"\n        data-qa="salary"\n      >\n    </label>\n\n    <button type= "submit">\n      Save to table\n    </button>\n  </form>\n');var m=document.querySelector("form");m.addEventListener("submit",function(t){t.preventDefault();var e=new FormData(m),n=Object.fromEntries(e.entries());n.name.length<4?f("Error message","Name couldn't be less than 4 letters.","error"):n.age<18||n.age>90?f("Error message","Age couldn't be less than 18 or more than 90.","error"):n.position?n.salary?(c.insertAdjacentHTML("beforeend","\n    <tr>\n      <td>".concat(n.name,"</td>\n      <td>").concat(n.position,"</td>\n      <td>").concat(n.office,"</td>\n      <td>").concat(n.age,"</td>\n      <td>$").concat(Number(n.salary).toLocaleString("en-US"),"</td>\n    </tr>\n  ")),f("Success message","New employee was successfully added to the table.","success")):f("Error message","Salary should be indicated.","error"):f("Error message","Position should be indicated.","error")});var f=function(t,e,n){document.querySelector(".notification").remove(),document.body.insertAdjacentHTML("beforeend",'\n    <div data-qa="notification" class="notification '.concat(n,'">\n      <h2 class="title">').concat(t,"</h2>\n      <p>").concat(e,"</p>\n    </div>\n  "));var o=document.querySelector(".notification");setTimeout(function(){o.remove()},"5000")};
},{}]},{},["KIzB"], null)
//# sourceMappingURL=main.e6c479ab.js.map