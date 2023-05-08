const imgbgE = document.getElementById("img-back");

window.addEventListener("scroll", () => {
    updateBackround();
});

function updateBackround() {
    imgbgE.style.opacity = 1 - window.pageYOffset / 800;
    imgbgE.style.backgroundSize = 160 - window.pageYOffset / 12 + '%';
}