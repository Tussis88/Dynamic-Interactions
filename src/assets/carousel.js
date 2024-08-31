import Fantasy from "./img/fantasy.jpg";
import Girl from "./img/girl.png";
import Leaves from "./img/leaves.jpg";
import Man from "./img/man.jpg";
import Oranges from "./img/orange.png";

const carousel = (function() {
  let position = 0;
  const slideLength = 640;
  const images = [Fantasy, Girl, Leaves, Man, Oranges];
  const dots = [];
  let intervalId;

  const slider = () => {
    const slider = document.createElement("div");
    slider.classList.add("slider");

    images.forEach((image) => {
      const slide = new Image();
      slide.src = image;
      slider.appendChild(slide);
    });

    return slider;
  };

  const sliderDiv = slider();

  const carouselDOM = () => {
    const container = document.createElement("div");
    container.classList.add("carouselContainer");
    container.appendChild(sliderDiv);

    container.appendChild(slideRight());
    container.appendChild(slideLeft());
    container.appendChild(navigationDots());

    return container;
  };

  const slideRight = () => {
    const rightButton = document.createElement("button");
    rightButton.classList.add("rightSlide");
    rightButton.textContent = "right";
    rightButton.addEventListener("click", () => {
      if (position < images.length - 1) {
        position += 1;
        sliderDiv.style.left = `-${position * slideLength}px`;
        dotActivator();
        resetInterval();
      }
    });
    return rightButton;
  };

  const slideLeft = () => {
    const leftButton = document.createElement("button");
    leftButton.classList.add("leftSlide");
    leftButton.textContent = "left";
    leftButton.addEventListener("click", () => {
      if (position > 0) {
        position -= 1;
        sliderDiv.style.left = `-${position * slideLength}px`;
        dotActivator();
        resetInterval();
      }
    });
    return leftButton;
  };

  const navigationDots = () => {
    const dotContainer = document.createElement("div");
    dotContainer.classList.add("dotContainer");

    for (let i = 0; i < images.length; i++) {
      const dot = document.createElement("button");
      dot.classList.add("dot");
      dot.id = i;
      dots.push(dot);
      if (i === 0) dot.classList.add("active");
      dot.addEventListener("click", () => {
        position = i;
        sliderDiv.style.left = `-${position * slideLength}px`;
        dotActivator();
        resetInterval();
      });
      dotContainer.appendChild(dot);
    }

    return dotContainer;
  };

  const dotActivator = () => {
    dots.forEach((dot) => {
      dot.classList.remove("active");
      if (position == dot.id) {
        dot.classList.add("active");
      }
    });
  };

  const startInterval = () => {
    intervalId = setInterval(() => {
      if (position < images.length - 1) {
        position += 1;
        sliderDiv.style.left = `-${position * slideLength}px`;
        dotActivator();
      } else if (position === images.length - 1) {
        position = 0;
        sliderDiv.style.left = `-${position * slideLength}px`;
        dotActivator();
      }
    }, 5000);
  };

  const resetInterval = () => {
    clearInterval(intervalId);
  startInterval();
  }

  startInterval();

  return { carouselDOM };
})();

export { carousel };
