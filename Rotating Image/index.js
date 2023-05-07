const imgcontE = document.querySelector(".img-container");
const prevE = document.getElementById("prev");
const nextE = document.getElementById("next");

let x = 0;
let timer;

prevE.addEventListener("click", () => {
    x = x + 45;
    clearTimeout(timer);
    updateGallery();
});

nextE.addEventListener("click", () => {
    x = x - 45;
    clearTimeout(timer);
    updateGallery();
});

function updateGallery() {
    imgcontE.style.transform = `perspective(1000px) rotateY(${x}deg)`;
    timer = setTimeout(() => {
        x = x - 45;
        updateGallery();
    }, 3000);
}

updateGallery();