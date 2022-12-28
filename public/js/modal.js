const open = document.querySelector("#open");
const btnSaveElem = document.querySelector("#btn-save");
const btnCancelElem = document.querySelector("#btn-cancel");
const modal = document.querySelector("#modal");

open.addEventListener("click", () => {
  modal.classList.add("show");
});

btnSaveElem.addEventListener("click", () => {
  modal.classList.remove("show");
});

btnCancelElem.addEventListener("click", () => {
  modal.classList.remove("show");
});
