// Função para carregar componentes
async function includeHTML(id, file) {
  const element = document.getElementById(id);
  try {
    const response = await fetch(file);
    if (response.ok) {
      element.innerHTML = await response.text();
    }
  } catch (err) {
    console.error("Erro ao carregar o arquivo: ", err);

    element.innerHTML = "<p>Erro ao carregar o conteúdo.</p>";
  }
}

// Carrega o header e footer quando a página é carregada
document.addEventListener("DOMContentLoaded", () => {
  includeHTML("header", "./components/header.html");
  includeHTML("footer", "./components/footer.html");
  includeHTML("header", "../components/header.html");
  includeHTML("footer", "../components/footer.html");
});
