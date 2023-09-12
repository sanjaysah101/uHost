const backdrop = document.querySelector(".backdrop");
const modal = document.querySelector(".modal");
const modalNoButton = document.querySelector(".modal__action--negative");
const selectPlanButtons = document.querySelectorAll(".plan button");
const toggleButton = document.querySelector(".toggle-button");
const mobileNav = document.querySelector(".mobile-nav");

selectPlanButtons.forEach((selectPlanButton) => {
  selectPlanButton.addEventListener("click", () => {
    modal.style.display = "block";
    backdrop.style.display = "block";
  });
});

const closeModal = () => {
  if (modal) modal.style.display = "none";
  backdrop.style.display = "none";
};

backdrop.addEventListener("click", () => {
  mobileNav.style.display = "none";
  closeModal();
});

if (modalNoButton) modalNoButton.addEventListener("click", closeModal);

toggleButton.addEventListener("click", () => {
  mobileNav.style.display = "block";
  backdrop.style.display = "block";
});
