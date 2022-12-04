(() => {
  const refs = {
    openModalBtn: document.querySelector("[data-b-modal-open]"),
    closeModalBtn: document.querySelector("[data-b-modal-close]"),
    modal: document.querySelector("[data-b-modal]"),
  };

  refs.openModalBtn.addEventListener("click", toggleModal);
  refs.closeModalBtn.addEventListener("click", toggleModal);

  function toggleModal() {
    refs.modal.classList.toggle("is-hidden");
  }
})();