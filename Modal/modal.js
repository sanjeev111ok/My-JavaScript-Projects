const modal = document.querySelector("#modal");
const openModalButton = document.querySelector("#open-modal-btn");
const closeModalButton = document.querySelector("#close-modal-btn");
const overlay = document.querySelector("#overlay");

openModalButton.addEventListener("click", () => {
  modal.classList.add("open");
  overlay.classList.add("open");
});
closeModalButton.addEventListener("click", () => {
  modal.classList.remove("open");
  overlay.classList.remove("open");
});
