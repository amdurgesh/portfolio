function toggleMenu() {
  const menu = document.querySelector(".menu-links");
  const icon = document.querySelector(".hamburger-icon");
  menu.classList.toggle("open");
  icon.classList.toggle("open");
}

const text = [
  "FRONTEND",
  "WEB DEVELOPER",
  "DESIGNER"
]

let speed = 100;
const textElements = document.querySelector(".section__text__p3");

let textIndex = 0;
let characterIndex = 0;

function typeWrite() {
  if (characterIndex < text[textIndex].length) {
    textElements.innerHTML += text[textIndex].charAt(characterIndex);
    characterIndex++;
    setTimeout(typeWrite, speed);
  }

  else {
    setTimeout(eraseText, 1000);
  }
}

function eraseText() {
  if (textElements.innerHTML.length > 0) {
    textElements.innerHTML = textElements.innerHTML.slice(0, -1);
    setTimeout(eraseText, 50);

  }
  else {
    textIndex = (textIndex + 1) % text.length;
    characterIndex = 0;
    setTimeout(typeWrite, 500)
  }

}


window.onload = typeWrite