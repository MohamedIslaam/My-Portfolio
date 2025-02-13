var btn = document.getElementById("btn");
btn.addEventListener('click', function () {
    alert("This form does not send any data. If you wish to contact me, please reach out via email at mohamedislaam87@gmail.com.");
});

const nav = document.getElementById("open");
const clos = document.getElementById("close");
const side = document.getElementById("side-nav");
const lis = document.getElementsByClassName("lis");

nav.addEventListener('click', () => {
    side.style.display = "inline";
});

clos.addEventListener('click', () => {
    side.style.display = "none";
});

for (let i = 0; i < lis.length; i++) {
    lis[i].addEventListener('click', () => {
        side.style.display = "none";
    });
}

const words = ["Web Developer", "React Native Developer"];
let wordIndex = 0;
let charIndex = 0;
let isDeleting = false;
const speed = 100;
const eraseSpeed = 50;
const delay = 1000;
const textElement = document.getElementById("text");

function typeEffect() {
    const currentWord = words[wordIndex];
    if (isDeleting) {
        charIndex--;
    } else {
        charIndex++;
    }

    textElement.innerHTML = currentWord.substring(0, charIndex);

    if (!isDeleting && charIndex === currentWord.length) {
        setTimeout(() => (isDeleting = true), delay);
    } else if (isDeleting && charIndex === 0) {
        isDeleting = false;
        wordIndex = (wordIndex + 1) % words.length;
    }

    setTimeout(typeEffect, isDeleting ? eraseSpeed : speed);
}

typeEffect();
