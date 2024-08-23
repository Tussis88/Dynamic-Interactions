function dropdownMenu(elementId) {
  const hiddenMenu = document.querySelector("#" + elementId);
  hiddenMenu.classList.toggle("hidden");
}

function dropdownDOM() {
  const menuDiv = document.createElement("div");
  menuDiv.id = "menuDiv";
  const menuButton = document.createElement("button");
  menuButton.id = "menuButton";
  menuButton.textContent = "Button";
  menuButton.addEventListener("click", () => dropdownMenu(optionsDiv.id));
  menuDiv.appendChild(menuButton);

  const optionsDiv = document.createElement("div");
  optionsDiv.id = "optionsDiv";
  optionsDiv.classList.add("hidden");
  menuDiv.appendChild(optionsDiv);

  const option1 = document.createElement("a");
  option1.textContent = "Link1";

  const option2 = document.createElement("a");
  option2.textContent = "Link2";

  const option3 = document.createElement("a");
  option3.textContent = "Link3";

  optionsDiv.appendChild(option1);
  optionsDiv.appendChild(option2);
  optionsDiv.appendChild(option3);

  return menuDiv;
}

export { dropdownDOM };
