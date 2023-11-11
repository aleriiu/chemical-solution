'use strict';

// banner

const sectionContainer = document.querySelector(".image-container");

let currentIndex = 0;
let slides = [];
let dots = [];

function render() {
    let offset = 0;
    slides.forEach((slide, index) => {
        if (index < currentIndex) {
            offset += slide.offsetWidth;
        }
    });

    sectionContainer.style.transform = `translateX(-${offset}px)`;
    dots.forEach((dot, index) => {
        index === currentIndex
            ? dot.classList.add("btn-active")
            : dot.classList.remove("btn-active");
    });
}

function prev() {
    if (currentIndex < 0) return;
    currentIndex -= 1;
    render();
}

function next() {
    if (currentIndex === slides.length - 1) return;
    currentIndex += 1;
    render();
}

function goto(newIndex) {
    if (newIndex < 0 || newIndex > slides.length - 1) return;
    currentIndex = newIndex;
    render();
}

function init() {
    const newSlides = document.querySelectorAll(".image-container > a");
    slides = newSlides;

    const newDots = document.querySelectorAll(".hero__btn > button");
    newDots.forEach((dot, index) => {
        dot.onclick = () => goto(index);
    });
    dots = newDots;

    render();
}

init();

setInterval(function () {    //переключение по таймеру
    if (currentIndex === slides.length - 1) {
        currentIndex = 0
    } else {
        currentIndex += 1;
    }
    render();
}, 5000)
