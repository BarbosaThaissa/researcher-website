document.addEventListener("DOMContentLoaded", function () {
  const arrow = document.querySelector(".arrow.fa-angle-down");
  const targetSection = document.querySelector(".home-section.welcome-text");

  arrow.addEventListener("click", function () {
    // Obtém a altura do header fixo
    const headerHeight = document.querySelector("header").offsetHeight;
    // Calcula a posição da seção considerando o header
    const targetPosition =
      targetSection.getBoundingClientRect().top +
      window.pageYOffset -
      headerHeight;

    window.scrollTo({
      top: targetPosition,
      behavior: "smooth",
    });
  });
});
