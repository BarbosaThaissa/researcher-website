const sheetIdIntro = "1OENja_SQbOmIxHXnE0xvk640pxst5FJPrf7pzvdJVpc";
const sheetNameIntro = "Home-Intro";
const introElement = document.getElementById("homeIntroText");

async function fetchHomeIntro() {
  const url = `https://opensheet.elk.sh/${sheetIdIntro}/${sheetNameIntro}`;
  try {
    const response = await fetch(url);
    const data = await response.json();

    if (data.length > 0 && introElement) {
      introElement.textContent = data[0].Text;
    }
  } catch (error) {
    console.error("Erro ao buscar texto da introdução:", error);
  }
}

fetchHomeIntro();
