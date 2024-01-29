const closeButton = document.querySelector(".close");
const card = document.querySelector(".card");

closeButton.addEventListener("click", () => {
  card.style.display = "none";
  const button = document.createElement("button");
  button.classList.add("open-button");
  button.textContent = "Open";
  document.querySelector("body").appendChild(button);

  button.addEventListener("click", () => {
    card.style.display = "block";
    button.style.display = "none";
  });
});
