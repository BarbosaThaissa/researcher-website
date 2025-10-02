async function includeHTML(id, file, callback) {
  const element = document.getElementById(id);
  try {
    const response = await fetch(file);
    if (response.ok) {
      element.innerHTML = await response.text();
      if (typeof callback === "function") callback();
    }
  } catch (err) {
    console.error("Erro ao carregar o arquivo: ", err);
    element.innerHTML = "<p>Erro ao carregar o conteúdo.</p>";
  }
}

function initMobileMenu() {
  const menuToggle = document.querySelector(".hamburger-menu");
  const menuWrapper = document.querySelector(".bls-dropdown__menu");

  if (menuToggle && menuWrapper) {
    menuToggle.addEventListener("click", (e) => {
      e.preventDefault();
      menuWrapper.classList.toggle("open");
    });
  }
}

function initSubMenus() {
  const arrows = document.querySelectorAll(".btn-arrow");

  arrows.forEach((arrow) => {
    arrow.addEventListener("click", (e) => {
      e.preventDefault();

      const parentItem = arrow.closest(".has-sub");

      document.querySelectorAll(".has-sub.open").forEach((item) => {
        if (item !== parentItem) item.classList.remove("open");
      });

      parentItem.classList.toggle("open");
    });
  });
}

document.addEventListener("DOMContentLoaded", () => {
  includeHTML("header", "/components/header.html", () => {
    initMobileMenu();
    initSubMenus();
  });
  includeHTML("footer", "/components/footer.html");
});
