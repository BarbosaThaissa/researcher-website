const sheetIdAbout = "1OENja_SQbOmIxHXnE0xvk640pxst5FJPrf7pzvdJVpc";
const sheetNameAbout = "About-Me";
const biographyElement = document.getElementById("biographyText");
const interestsElement = document.getElementById("interestsText");

const defaultTextBiography = `I am a geologist with a primary background in geomorphology and Quaternary research, focusing on sedimentary landforms and landscapes. More recently, I have expanded my expertise to near-surface geophysics and planetary surface processes. 
    <br /><br />
    My academic journey began at the Federal University of Sergipe (Brazil), where I earned my Bachelor’s degree in Geology in 2012. I then completed a Master’s in Geosciences and Environment at São Paulo State University (UNESP) in 2015, investigating the Late Quaternary history of the Vaza-Barris system. This study combined geomorphological mapping of alluvial and coastal plains with geochronology (OSL and radiocarbon), sediment analysis, and Chirp Sub-bottom Profiler data to reconstruct paleovalleys along the continental margin.
    <br /><br />
    My Ph.D., also at UNESP and under the supervision of Professor Edgardo Latrubesse, focused on geomorphic surface mapping, sedimentary analysis, and luminescence dating to reconstruct the Late Quaternary evolution of the fluvial-aeolian system in the Middle São Francisco River region, Northeast Brazil. During this time, I also contributed to international research projects funded by the National Science Foundation (USA), National Geographic, the University of Texas, and the University of Florida. These collaborations included field studies on large rivers of the Brazilian and Bolivian Amazon (Solimões, Negro, Amazonas, Tapajós, Beni, Mamoré, and Madeira) and aeolian systems of Argentina, broadening my perspective on landscape evolution across South America.
    <br /><br />
    Before my doctoral studies, I worked as a Research Assistant at Nanyang Technological University (Singapore) within the Asia School of the Environment and the Earth Observatory of Singapore (2019–2020), as part of the Latrubesse Research Group’s project Large Rivers: Long-Term Basin Evolution, Morphodynamics, and Global Change. 
    <br /><br />
    My earliest academic experiences came between 2008 and 2014, as a member of the Georioemar Research Group led by Professor Luiz Carlos Fontes. There, I studied the evolution of the Sergipe-Alagoas sedimentary basin during the Quaternary. I took part in several oceanographic campaigns, both on the continental shelf and in deep-sea environments (>3000 m), where I gained hands-on experience with sediment coring and geophysical data acquisition. These formative years provided the foundation for my long-standing interest in source-to-sink processes and sedimentary basin evolution. 
    <br /><br />
    Together, these experiences have shaped my research path: from local studies of Brazilian basins to regional analyses of South American landscapes, and now to planetary geomorphology, always driven by a search to understand the processes that sculpt Earth and other celestial bodies. 
    <br /><br />
    Currently, as a Postdoctoral Fellow at the China University of Geosciences under the supervision of Professor Zhou Feng, I am combining geomorphology with near-surface geophysics to investigate the evolution of planetary and lunar landscapes, integrating digital terrain analysis, geomorphological mapping, and Lunar Penetrating Radar data`;
const defaultTextInterests =
  "I am seeking to understand how Earth and planetary surface processes, including those induced by human activities, shape the development of landforms and landscapes. Using an integrated approach that combines Geomorphology and Near-Surface Geophysics, my current scientific interest is focused on the São Francisco Basin (Brazil), the Yangtze Basin (China), and the Von Karman Crater (Moon's far side)";

async function fetchAboutMe() {
  const url = `https://opensheet.elk.sh/${sheetIdAbout}/${sheetNameAbout}`;

  try {
    const response = await fetch(url);
    const data = await response.json();

    if (data.length > 0 && biographyElement) {
      const formattedTextBiography = data[0].Biography
        ? data[0].Biography.replace(/\n/g, "<br />")
        : defaultText;

      biographyElement.innerHTML = formattedTextBiography;
    }

    if (data.length > 0 && interestsElement) {
      const formattedTextInterests = data[0].Interests
        ? data[0].Interests.replace(/\n/g, "<br />")
        : defaultText;

      interestsElement.innerHTML = formattedTextInterests;
    }
  } catch (error) {
    console.error("Erro ao buscar textos de About Me:", error);

    biographyElement.innerHTML = defaultTextBiography;
    interestsElement.textContent = defaultTextInterests;
  }
}

fetchAboutMe();
