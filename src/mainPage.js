import { carousel } from "./assets/carousel";
import { dropdownDOM } from "./assets/dropdown";

export default function mainPage() {
  const contentDiv = document.querySelector("#content");
  const dropDownButton = document.querySelector("#dropdown");
  const carouselButton = document.querySelector("#carousel");

  dropDownButton.addEventListener("click", () => {
    dropDownButton.classList.add("selected");
    carouselButton.classList.remove("selected");
    contentDiv.textContent = "";
    contentDiv.appendChild(dropdownDOM());
    const textStuff = document.createElement("div");
    textStuff.textContent = "random text under the dropdownbutton";
    contentDiv.appendChild(textStuff)
  });

  carouselButton.addEventListener("click", () => {
    carouselButton.classList.add("selected");
    dropDownButton.classList.remove("selected");
    contentDiv.textContent = "";
    contentDiv.appendChild(carousel.carouselDOM());
  });
}
