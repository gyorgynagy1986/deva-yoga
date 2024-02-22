//ALERT
const alertContainer = document.querySelector(".alert-container");
const removeClass = document.querySelector(".modal");
const btnClost = document.querySelector(".close-modal");
const overlay = document.querySelector(".overlay");

const showAlert = () => {
  alertContainer.classList.remove("hidden");
  removeClass.classList.remove("hidden");
  overlay.classList.remove("hidden");
};

window.setTimeout(showAlert, 1000);

btnClost.addEventListener("click", () => {
  removeClass.classList.add("hidden");
  overlay.classList.add("hidden");
  alertContainer.classList.add("hidden");
});
