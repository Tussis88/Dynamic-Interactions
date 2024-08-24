import Fantasy from "./img/fantasy.jpg";
import Girl from "./img/girl.png";
import Leaves from "./img/leaves.jpg";
import Man from "./img/man.jpg";
import Oranges from "./img/orange.png";

function carouselDOM() {
  const images = [Fantasy, Girl, Leaves, Man, Oranges];
  const container = document.createElement("div");
  container.classList.add("carouselContainer");
  const sliderContainer = slider(images);
  container.appendChild(sliderContainer);

  container.appendChild(slideButtons(sliderContainer, images.length));

  return container;
}

function slider(images) {
  const slider = document.createElement("div");
  slider.classList.add("slider");

  images.forEach((image) => {
    const slide = new Image();
    slide.src = image;
    slider.appendChild(slide);
  });

  return slider;
}

function slideButtons(slider, maxLength) {
  let position = 0;
  const slideLength = 640;
  const rightButton = document.createElement("button");
  rightButton.classList.add("rightSlide");
  rightButton.textContent = "right";
  rightButton.addEventListener("click", () => {
    console.log(`before: ${position}`);
    if (position < (maxLength - 1)) position += 1;
    console.log(`after: ${position}`);
    slider.style.left = `-${position * slideLength}px`;
  });
  return rightButton;
}

export { carouselDOM };
