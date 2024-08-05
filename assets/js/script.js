const fireContainer = document.querySelector(".fire-container");

const maxFlames = 50; // Set the maximum number of flames you want to display
function createFlameElement(container) {
  const flameElement = document.createElement("div");
  flameElement.classList.add("fire-element");

  const randomX = Math.random() * (container.offsetWidth - 10);
  const randomY = Math.random() * (container.offsetHeight - 10);

  flameElement.style.left = randomX + "px";
  flameElement.style.top = randomY + "px";

  container.appendChild(flameElement);

  flameElement.addEventListener('animationend', () => {
    flameElement.remove();
  });

  if (container.children.length < 50) { // Ensure not too many flames
    setTimeout(() => createFlameElement(container), 500);
  }
}
createFlameElement(fireContainer);
