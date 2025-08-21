function bindDownloadButtons() {
  const buttons = document.querySelectorAll(".download-map");

  buttons.forEach((button) => {
    button.addEventListener("click", async function () {
      const imageUrl = this.dataset.url;

      try {
        const response = await fetch(imageUrl, { mode: "cors" });
        if (!response.ok) throw new Error("Erro ao buscar imagem");

        const blob = await response.blob();
        const blobUrl = URL.createObjectURL(blob);

        const link = document.createElement("a");
        link.href = blobUrl;
        link.download = imageUrl.split("/").pop();
        document.body.appendChild(link);
        link.click();
        link.remove();
        URL.revokeObjectURL(blobUrl);
      } catch (error) {
        console.error("Erro ao fazer download da imagem:", error);
        alert("Não foi possível baixar a imagem.");
      }
    });
  });
}
