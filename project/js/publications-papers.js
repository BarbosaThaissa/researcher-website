const sheetId2 = "1OENja_SQbOmIxHXnE0xvk640pxst5FJPrf7pzvdJVpc";
const sheetName2 = "Publications-Papers";
const container2 = document.querySelector(".load-papers");

async function fetchPublicationsPapers() {
  const url = `https://opensheet.elk.sh/${sheetId2}/${sheetName2}`;
  try {
    const response = await fetch(url);
    const data = await response.json();

    renderPublicationsPapers(data);
  } catch (error) {
    console.error("Erro ao buscar dados das papers (publicações):", error);
  }
}

function renderPublicationsPapers(data) {
  container2.innerHTML = "";

  const groupedByYear = data.reduce((acc, item) => {
    if (!acc[item.Year]) acc[item.Year] = [];
    acc[item.Year].push(item);
    return acc;
  }, {});

  const years = Object.keys(groupedByYear).sort((a, b) => b - a);

  years.forEach((year) => {
    const yearTitle = document.createElement("h2");
    yearTitle.className = "heading title-big";
    yearTitle.textContent = year;
    container2.appendChild(yearTitle);

    const wrapper = document.createElement("div");
    wrapper.className = "search-landing__wrapper landing__wrapper";

    groupedByYear[year].forEach((pub) => {
      const item = document.createElement("div");
      item.className = "search-result-item";

      item.innerHTML = `
        <h4 class="subtitle-big">
          <a href="${pub.LinkPage}" title="${pub.Title}">
            ${pub.Title}
          </a>
        </h4>
        <div class="text descriptions-big">
          ${pub.Authors}
        </div>
        <div class="addition-text">
          ${pub.Summary}
        </div>
      `;

      wrapper.appendChild(item);
    });

    container2.appendChild(wrapper);
  });
}

fetchPublicationsPapers();
