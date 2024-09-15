function scrollParaBaixo() {
    const destino = document.getElementById("destino");
    destino.scrollIntoView({ behavior: "smooth" });
}

const menuButton = document.querySelector('.menu-button');
const links = document.querySelector('.links');

menuButton.addEventListener('click', () => {
  menuButton.classList.toggle('active');
  links.classList.toggle('active');
});

