
export default function mainPage() {
  const contentDiv = document.querySelector("#content");
  const dropDownButton = document.querySelector("#dropdown");
  const carouselButton = document.querySelector("#carousel");

  dropDownButton.addEventListener("click", () => {
    contentDiv.textContent = "";
    contentDiv.textContent = "dropDown cliccato";
  });

  carouselButton.addEventListener("click", () => {
    contentDiv.textContent = "";
    contentDiv.textContent = "carousel cliccato";
  });
}
