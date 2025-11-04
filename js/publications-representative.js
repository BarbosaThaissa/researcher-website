const sheetId1 = "1OENja_SQbOmIxHXnE0xvk640pxst5FJPrf7pzvdJVpc";
const sheetName1 = "Representative-Publications";
const container1 = document.querySelector(".load-representative");

async function fetchPublicationsRepresentative() {
  const url = `https://opensheet.elk.sh/${sheetId1}/${sheetName1}`;
  try {
    const response = await fetch(url);
    const data = await response.json();

    renderPublicationsRepresentative(data);
  } catch (error) {
    console.error(
      "Erro ao buscar dados das representative (publicações):",
      error
    );
  }
}

function renderPublicationsRepresentative(data) {
  container1.innerHTML = "";

  data.forEach((item) => {
    const wrapper = document.createElement("div");
    wrapper.className = "search-landing__wrapper landing__wrapper";

    const itemContentet = document.createElement("div");
    itemContentet.className = "search-result-item";

    itemContentet.innerHTML = `
        <h4 class="subtitle-big">
          <a href="${item.LinkPage}" title="${item.Title}">
            ${item.Title}
          </a>
        </h4>
        <div class="text descriptions-big">
          ${item.Authors}
        </div>
        <div class="addition-text">
          ${item.Summary}
        </div>
      `;

    wrapper.appendChild(itemContentet);

    container1.appendChild(wrapper);
  });
}

fetchPublicationsRepresentative();
