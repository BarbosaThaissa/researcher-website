const sheetIdIntro = "1OENja_SQbOmIxHXnE0xvk640pxst5FJPrf7pzvdJVpc";
const sheetNameIntro = "Home-Intro";
const introElement = document.getElementById("homeIntroText");

const defaultText =
  "Thank you for visiting! I’m a geoscientist fascinated by the dynamic processes that shape Earth and other celestial bodies. My work seeks to reveal how natural and human-driven forces sculpt today’s landscapes, and through this website I aim to share that knowledge in ways that are accessible and inspiring";

async function fetchHomeIntro() {
  const url = `https://opensheet.elk.sh/${sheetIdIntro}/${sheetNameIntro}`;

  try {
    const response = await fetch(url);
    const data = await response.json();

    if (data.length > 0 && introElement) {
      const formattedText = data[0].Text
        ? data[0].Text.replace(/\n/g, "<br />")
        : defaultText;

      introElement.innerHTML = formattedText;
    } else {
      introElement.textContent = defaultText;
    }
  } catch (error) {
    console.error("Erro ao buscar texto da introdução:", error);
    introElement.textContent = defaultText;
  }
}

fetchHomeIntro();
