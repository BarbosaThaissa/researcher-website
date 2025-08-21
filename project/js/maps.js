const sheetId = "1OENja_SQbOmIxHXnE0xvk640pxst5FJPrf7pzvdJVpc";
const sheetName = "Maps";
const container = document.querySelector(".container-maps");

async function fetchMapsData() {
  const url = `https://opensheet.elk.sh/${sheetId}/${sheetName}`;
  try {
    const response = await fetch(url);
    const data = await response.json();
    renderMaps(data);
  } catch (error) {
    console.error("Erro ao buscar dados dos Maps:", error);
  }
}

function renderMaps(data) {
  container.innerHTML = "";

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
        <div class="block-info">
          <a class="readmore bottons-big" title="Download Map" href="${item.Image}" download target="_blank">
            download map
          </a>
        </div>
      </div>
    `;

    container.appendChild(content);
  });
}

fetchMapsData();
