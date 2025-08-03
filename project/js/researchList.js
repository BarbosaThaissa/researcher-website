const sheetId = "1OENja_SQbOmIxHXnE0xvk640pxst5FJPrf7pzvdJVpc";
const sheetName = "Research-List";
const container = document.querySelector(".research-list");

async function fetchResearchData() {
  const url = `https://opensheet.elk.sh/${sheetId}/${sheetName}`;
  try {
    const response = await fetch(url);
    const data = await response.json();
    renderResearch(data);
  } catch (error) {
    console.error("Erro ao buscar dados para Research:", error);
  }
}

function renderResearch(data) {
  container.innerHTML = "";

  data.forEach((item) => {
    const content = document.createElement("div");
    content.classList.add("col-12-research", "col-md-6", "col-lg-4");

    content.innerHTML = `
      <div class="card-item blog-landing__item">
          <div class="img research-area-page">
            <a title="${item.Title}" href="${item.Link}">
              <img loading="lazy" src="${item.Image}" alt="${item.Title}" />

              <div class="title subtitle-big">
                ${item.Title}
              </div>
              <div class="description">
                 ${item.Description}
              </div>
            </a>
          </div>
      </div>
    `;

    container.appendChild(content);
  });
}

fetchResearchData();
