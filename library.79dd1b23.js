function t(t){return t&&t.__esModule?t.default:t}var e="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},n={},o={},a=e.parcelRequired7c6;null==a&&((a=function(t){if(t in n)return n[t].exports;if(t in o){var e=o[t];delete o[t];var a={id:t,exports:{}};return n[t]=a,e.call(a.exports,a,a.exports),a.exports}var d=new Error("Cannot find module '"+t+"'");throw d.code="MODULE_NOT_FOUND",d}).register=function(t,e){o[t]=e},e.parcelRequired7c6=a),a("kyEFX").register(JSON.parse('{"1zJhX":"library.79dd1b23.js","bM4YN":"poster-plug.77123679.png","5W5ZI":"zdun.5b228a39.png"}'));var d=a("lyvUQ");const c=`<div class='not-found_container'>\n<h2 class="library_not-found-text">Are you serious? No movies have been added yet. \nOk, I'll wait. </br><a href="./index.html" class="link_to-home">Go home page.</a></h1>\n<img src="${t(new URL(a("kyEFX").resolve("5W5ZI"),import.meta.url).toString())}" width="400px" class='img_not-found'>\n    </div>`;function l(){document.querySelector(".films-catalog").innerHTML=c}const s=document.querySelector("#watched-btn"),r=document.querySelector("#queue-btn"),i=document.querySelector(".films-catalog");function u(){const t=localStorage.getItem("watched-movies"),e=JSON.parse(t);if(s.classList.add("library_btn--active"),r.classList.remove("library_btn--active"),e&&0!==e.length){const t=(0,d.default)(e);i.innerHTML=t}else l()}s.addEventListener("click",u);d=a("lyvUQ");const m=document.querySelector(".films-catalog"),b=document.querySelector("#watched-btn"),y=document.querySelector("#queue-btn");function v(){const t=JSON.parse(localStorage.getItem("queued-movies"));b.classList.remove("library_btn--active"),y.classList.add("library_btn--active"),t&&0!==t.length?m.innerHTML=(0,d.default)(t):l()}y.addEventListener("click",v);var g,f=a("fQz6f");g=new URL(a("kyEFX").resolve("bM4YN"),import.meta.url).toString();let p=JSON.parse(localStorage.getItem("watched-movies"));const h=document.querySelector("[data-queue]"),w=document.querySelector("[data-watch]");function S(){const t=JSON.parse(localStorage.getItem("Genre")),e=t.flatMap((t=>t.id)),n=t.flatMap((t=>t.name));return e.reduce(((t,e,o)=>({...t,[e]:n[o]})),{})}h.addEventListener("click",(function(){return p=JSON.parse(localStorage.getItem("queued-movies")),p})),w.addEventListener("click",(function(){return p=JSON.parse(localStorage.getItem("watched-movies")),console.log(p),p})),function(){const e={openModalCard:document.querySelector(".container-catalog"),modal:document.querySelector("[data-modal]"),modalContainer:document.querySelector(".modal-container")};e.openModalCard.addEventListener("click",(function(n){document.body.style.overflow="hidden";const o=n.target.closest(".film-card__link");if(!o)return;e.modal.classList.toggle("is-hidden"),window.addEventListener("keydown",_);const a=Number(o.dataset.id),d=p.find((({id:t})=>t===a));(function(){const n=d.genre_ids,o=S();let a=[];n.map((t=>a.push(o[t])));let c=d.poster_path?`https://image.tmdb.org/t/p/w500${d.poster_path}`:t(g);const l=d.title,s=Number(d.vote_average).toFixed(1),r=d.vote_count,i=Number(d.popularity).toFixed(1);let u=a.join(", ");u||(u="no information");let m=d.overview;m||(m="no information, but coming soon");const b=`<div class="img-box">\n           <img\n             class="img-modal"\n             src="${c}"\n             alt="${l}"\n             width="240px"\n           />\n         </div>\n         <div class="content-box">\n           <div class="text-box">\n             <h2 class="modal-title">${l}</h2>\n             <table>\n               <tbody class="tbody">\n                 <tr>\n                   <td class="tbody-category">Vote / Votes</td>\n                   <td class="tbody-vote">${s}</td>\n                   <td class="tbody-slash">/</td>\n                   <td class="tbody-votes">${r}</td>\n                   <td></td>\n                 </tr>\n                 <tr>\n                   <td class="tbody-category">Popularity</td>\n                   <td colspan="4">${i}</td>\n                   <td></td>\n                   <td></td>\n                 </tr>\n                 <tr>\n                   <td class="tbody-category">Original Title</td>\n                   <td class="tbody-category__text" colspan="4">${l}</td>\n                   <td></td>\n                   <td></td>\n                 </tr>\n                 <tr>\n                   <td class="tbody-category">Genre</td>\n                   <td class="tbody-category__text" colspan="4">${u}</td>\n                   <td></td>\n                   <td></td>\n                 </tr>\n               </tbody>\n             </table>\n      \n             <h3 class="modal-subtitle">About</h3>\n             <p class="textAbout">\n               ${m}\n             </p>\n           </div>\n           <div class="btn-container">\n             <button class="js-toWatched btn-click-modal">add to watched</button>\n             <button class="js-toQueue btn-click-modal">add to queue</button>\n           </div>\n         </div>`;e.modalContainer.innerHTML=b})(),(0,f.default)(d)}))}(),function(){const t={closeModalBtn:document.querySelector("[data-modal-close]"),modal:document.querySelector("[data-modal]")};t.closeModalBtn.addEventListener("click",(function(){console.log("close"),document.body.style.overflow="auto",h.classList.contains("library_btn--active")&&v();w.classList.contains("library_btn--active")&&u();t.modal.classList.toggle("is-hidden")})),window.removeEventListener("keydown",_)}(),S();function _(t){document.body.style.overflow="auto","Escape"===t.code&&(document.querySelector("[data-modal]").classList.toggle("is-hidden"),console.log("close"),h.classList.contains("library_btn--active")&&v(),w.classList.contains("library_btn--active")&&u(),window.removeEventListener("keydown",_))}document.querySelector(".backdrop").addEventListener("click",(function(t){t.currentTarget===t.target&&(document.body.style.overflow="auto",document.querySelector("[data-modal]").classList.toggle("is-hidden"),h.classList.contains("library_btn--active")&&v(),w.classList.contains("library_btn--active")&&u());window.removeEventListener("keydown",_)})),a("evw5H"),a("6gB84"),u();
//# sourceMappingURL=library.79dd1b23.js.map
