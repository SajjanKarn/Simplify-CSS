const modal = document.querySelector(".modal");
const modalCloseBtn = document.querySelector(".modal-close-btn");

const openModal = () => {
  modal.style.display = "block";
};

modalCloseBtn.addEventListener("click", () => {
  modal.style.display = "none";
});
