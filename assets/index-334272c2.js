(function(){const o=document.createElement("link").relList;if(o&&o.supports&&o.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))l(e);new MutationObserver(e=>{for(const t of e)if(t.type==="childList")for(const c of t.addedNodes)c.tagName==="LINK"&&c.rel==="modulepreload"&&l(c)}).observe(document,{childList:!0,subtree:!0});function r(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerpolicy&&(t.referrerPolicy=e.referrerpolicy),e.crossorigin==="use-credentials"?t.credentials="include":e.crossorigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function l(e){if(e.ep)return;e.ep=!0;const t=r(e);fetch(e.href,t)}})();(()=>{const n=document.querySelector("[data-menu-open]"),o=document.querySelector("[data-menu-close]"),r=document.querySelector("[data-menu]"),l=document.querySelector(".mobile-menu-list");n.addEventListener("click",e),o.addEventListener("click",e),l.addEventListener("click",t);function e(){r.classList.toggle("is-hidden")}function t(){r.classList.add("is-hidden")}})();(()=>{const n={openModalBtn:document.querySelectorAll("[data-modal-open]"),closeModalBtn:document.querySelector("[data-modal-close]"),modal:document.querySelector("[data-modal]")};n.openModalBtn.forEach(r=>{r.addEventListener("click",o)}),n.closeModalBtn.addEventListener("click",o);function o(){n.modal.classList.toggle("is-hidden"),document.body.classList.toggle("no-scroll")}})();new Swiper(".hero-gallery-inner-wrap",{direction:"horizontal",loop:!0,effect:"fade",navigation:{nextEl:".btn-prev",prevEl:".btn-next"},autoplay:{delay:2e3},fadeEffect:{crossFade:!0}});