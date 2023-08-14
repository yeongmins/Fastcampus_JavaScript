const registerButton = document.getElementById("register_button");
const closeButton = document.getElementById("close_button");
const registerModal = document.getElementById("register");
const body = document.body;

registerButton.addEventListener("click", () => {
  registerModal.classList.add("show");
  body.classList.add("modal-open");
});

closeButton.addEventListener("click", () => {
  registerModal.classList.remove("show");
  body.classList.remove("modal-open");
});