import{a as P,S as q,i as r}from"./assets/vendor-C2ySes1p.js";(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))l(e);new MutationObserver(e=>{for(const s of e)if(s.type==="childList")for(const a of s.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&l(a)}).observe(document,{childList:!0,subtree:!0});function i(e){const s={};return e.integrity&&(s.integrity=e.integrity),e.referrerPolicy&&(s.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?s.credentials="include":e.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function l(e){if(e.ep)return;e.ep=!0;const s=i(e);fetch(e.href,s)}})();const M="https://pixabay.com/api/",R="55211619-6f7bac51831f98ad8082e4e8c",E=15;async function p(o,t){return(await P.get(M,{params:{key:R,q:o,image_type:"photo",orientation:"horizontal",safesearch:!0,page:t,per_page:E}})).data}const h=document.querySelector(".gallery"),m=document.querySelector(".loader"),g=document.querySelector(".load-more"),$=new q(".gallery a",{captionsData:"alt",captionDelay:250});function B(o){return o.map(({webformatURL:t,largeImageURL:i,tags:l,likes:e,views:s,comments:a,downloads:S})=>`
        <li class="gallery-item">
          <a class="gallery-link" href="${i}">
            <img
              class="gallery-image"
              src="${t}"
              alt="${l}"
            />
          </a>
          <div class="info">
            <p class="info-item">
              <span class="info-label">Likes</span>
              <span class="info-value">${e}</span>
            </p>
            <p class="info-item">
              <span class="info-label">Views</span>
              <span class="info-value">${s}</span>
            </p>
            <p class="info-item">
              <span class="info-label">Comments</span>
              <span class="info-value">${a}</span>
            </p>
            <p class="info-item">
              <span class="info-label">Downloads</span>
              <span class="info-value">${S}</span>
            </p>
          </div>
        </li>
      `).join("")}function y(o){h.insertAdjacentHTML("beforeend",B(o)),$.refresh()}function A(){h.innerHTML=""}function L(){m.classList.remove("is-hidden")}function b(){m.classList.add("is-hidden")}function f(){g.classList.remove("is-hidden")}function d(){g.classList.add("is-hidden")}const v=document.querySelector(".form"),O=document.querySelector(".load-more");let c="",n=1,u=0;const w=15;v.addEventListener("submit",_);O.addEventListener("click",x);async function _(o){if(o.preventDefault(),c=o.currentTarget.elements["search-text"].value.trim(),!c){r.error({message:"Please fill in the search field!",position:"topRight"});return}n=1,u=0,A(),d(),L();try{const t=await p(c,n);if(u=t.totalHits,t.hits.length===0){r.error({message:"Sorry, there are no images matching your search query. Please try again!",position:"topRight"});return}y(t.hits),u<=w?(d(),r.info({message:"We're sorry, but you've reached the end of search results.",position:"topRight"})):f()}catch{r.error({message:"Something went wrong. Please try again later!",position:"topRight"})}finally{b(),v.reset()}}async function x(){n+=1,d(),L();try{const o=await p(c,n);y(o.hits);const t=Math.ceil(u/w);n>=t?(d(),r.info({message:"We're sorry, but you've reached the end of search results.",position:"topRight"})):f(),H()}catch{r.error({message:"Something went wrong. Please try again later!",position:"topRight"}),f()}finally{b()}}function H(){const o=document.querySelector(".gallery-item");if(!o)return;const t=o.getBoundingClientRect().height;window.scrollBy({top:t*2,behavior:"smooth"})}
//# sourceMappingURL=index.js.map
