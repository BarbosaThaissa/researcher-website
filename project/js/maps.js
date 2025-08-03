const sheetId = "1OENja_SQbOmIxHXnE0xvk640pxst5FJPrf7pzvdJVpc";
const sheetName = "Maps";
const container = document.querySelector(".maps-list");

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

  data.forEach((item, index) => {
    const content = document.createElement("div");
    content.classList.add("eos-widget", "blog-detail");

    // Adiciona a classe verde nos ímpares
    if (index % 2 !== 0) {
      content.classList.add("maps-fundo-verde");
    }

    content.innerHTML = `
      <div class="container">
        <h2 class="map-model-title title-big">${item.Title}</h2>

        <div class="map-model-body">
          <div class="descriptions-big">
            <p>
              <img
                alt="${item.Title}"
                src="${item.Image}"
                class="map-model-img"
              />
              <br />
            </p>
          </div>
          <div class="block-info">
            <a class="readmore bottons-big" title="Read Morel" href="${item.Link}" target="_blank">
              download map
            </a>
          </div>
        </div>
      </div>
    `;

    container.appendChild(content);
  });

  // bindDownloadButtons();
}

fetchMapsData();

// Para fazer download funcionar, descomente a linha abaixo
//<a class="readmore bottons-big" title="download map">
//             <button data-url="${item.Image}">
//             download map
//         </button>
//     </a>
