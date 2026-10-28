const button = document.querySelector("#details-button");
const details = document.querySelector("#details");
const button2 = document.querySelector("#details-button2");
const details2 = document.querySelector("#details2");

button.addEventListener("click", function () {
    const isHidden = details.classList.toggle("hidden");
    button.setAttribute("aria-expanded", String(!isHidden));
    button.textContent = isHidden ? "Afficher le texte" : "Cacher le texte";
});

button2.addEventListener("click", function () {
    const isHidden = details2.classList.toggle("hidden");
    button2.setAttribute("aria-expanded", String(!isHidden));
    button2.textContent = isHidden ? "Afficher le texte" : "Cacher le texte";
});