document.addEventListener("DOMContentLoaded", () => {
  const menuToggle = document.querySelector(".hamburger-menu");
  const menuWrapper = document.querySelector(".bls-dropdown__menu");

  menuToggle.addEventListener("click", (e) => {
    e.preventDefault(); // evita rolagem pro topo se for <a>
    menuWrapper.classList.toggle("open");
  });
});
