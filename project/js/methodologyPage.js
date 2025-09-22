const sheetId = "1OENja_SQbOmIxHXnE0xvk640pxst5FJPrf7pzvdJVpc";
const sheetName = "Methodological-Approach";
const container = document.getElementById("methodology-container");

async function loadMethodology() {
  const url = `https://opensheet.elk.sh/${sheetId}/${sheetName}`;
  try {
    const response = await fetch(url);
    const data = await response.json();

    data.forEach((section, index) => {
      // alterna cor de fundo entre seções
      const wrapper = document.createElement("div");
      wrapper.className = `eos-widget ${
        index % 2 === 0 ? "research-background" : ""
      }`;

      wrapper.innerHTML = `
        <div class="container">
          <h2 class="title-big">${section.SectionTitle}</h2>
          <div class="methodology-section">
            <img 
              src="${section.Image}" 
              alt="${section.SectionTitle}" 
              class="methodology-img"
            />
            <ul class="descriptions-big">
              ${section.Tools.split(";")
                .map((tool) => `<li>${tool.trim()}</li>`)
                .join("")}
            </ul>
          </div>
        </div>
      `;

      container.appendChild(wrapper);
    });
  } catch (error) {
    console.error("Erro ao carregar metodologia:", error);
  }
}

document.addEventListener("DOMContentLoaded", loadMethodology);
