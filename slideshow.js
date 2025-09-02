const images = [
    "images/slide1.jpeg",
    "images/slide2.jpeg",
];

let currentIndex =0;
const slideshowImg = document.getElementById("slideshow-img");

function changeSlide() {
    slideshowImg.classList.add("fade-out");

    setTimeout(() => {
        currentIndex = (currentIndex + 1) % images.length;
        slideshowImg.src = images[currentIndex];
        slideshowImg.classList.remove("fade-out");
    }, 500);
}

setInterval(changeSlide, 3000);
