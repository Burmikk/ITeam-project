const e=document.querySelector(".js-menu-container"),o=document.querySelector(".js-open-menu"),t=document.querySelector(".js-close-menu"),d=document.querySelectorAll(".mobile-menu-link"),n=()=>{const t="true"===o.getAttribute("aria-expanded")||!1;o.setAttribute("aria-expanded",!t),e.classList.toggle("is-open");bodyScrollLock[t?"enableBodyScroll":"disableBodyScroll"](document.body)};o.addEventListener("click",n),t.addEventListener("click",n),d.forEach((e=>e.addEventListener("click",n))),window.matchMedia("(min-width: 768px)").addEventListener("change",(t=>{t.matches&&(e.classList.remove("is-open"),o.setAttribute("aria-expanded",!1),bodyScrollLock.enableBodyScroll(document.body))})),(()=>{const e={openModalBtn:document.querySelector("[data-a-modal-open]"),closeModalBtn:document.querySelector("[data-a-modal-close]"),modal:document.querySelector("[data-a-modal]")};function o(){e.modal.classList.toggle("is-hidden")}e.openModalBtn.addEventListener("click",o),e.closeModalBtn.addEventListener("click",o)})(),(()=>{const e={openModalBtn:document.querySelector("[data-b-modal-open]"),closeModalBtn:document.querySelector("[data-b-modal-close]"),modal:document.querySelector("[data-b-modal]")};function o(){e.modal.classList.toggle("is-hidden")}e.openModalBtn.addEventListener("click",o),e.closeModalBtn.addEventListener("click",o)})(),(()=>{const e={openModalBtn:document.querySelector("[data-modal-open]"),closeModalBtn:document.querySelector("[data-modal-close]"),modal:document.querySelector("[data-modal]")};function o(){e.modal.classList.toggle("is-hidden")}e.openModalBtn.addEventListener("click",o),e.closeModalBtn.addEventListener("click",o)})(),(()=>{const e={openModalBtn:document.querySelector("[data-download-modal-open]"),closeModalBtn:document.querySelector("[data-download-modal-close]"),modal:document.querySelector("[data-download-modal]")};function o(){e.modal.classList.toggle("is-hidden")}e.openModalBtn.addEventListener("click",o),e.closeModalBtn.addEventListener("click",o)})();
//# sourceMappingURL=index.20dc8cd6.js.map
