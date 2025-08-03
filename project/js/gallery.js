const sheetId = "1OENja_SQbOmIxHXnE0xvk640pxst5FJPrf7pzvdJVpc";
const sheetName = "Gallery";
const container = document.querySelector(".container-gallery");

async function fetchGalleryData() {
  const url = `https://opensheet.elk.sh/${sheetId}/${sheetName}`;
  try {
    const response = await fetch(url);
    const data = await response.json();
    renderGallery(data);
  } catch (error) {
    console.error("Erro ao buscar dados da galeria:", error);
  }
}

function renderGallery(data) {
  container.innerHTML = ""; // Limpa o conteúdo existente

  data.forEach((item) => {
    const content = document.createElement("div");
    content.classList.add("content-meta");

    content.innerHTML = `
      <div class="image-capa lado-esquerdo">
        <img alt="${item.Title}" src="${item.Image}" />
      </div>
      <div class="lado-direito">
        <h1 class="title-big">${item.Title}</h1>
        <div>
          <p class="descriptions-big">
            ${item.Description}
          </p>
        </div>
      </div>
    `;

    container.appendChild(content);
  });
}

fetchGalleryData();
