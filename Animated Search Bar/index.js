const searchBarContEl = document.querySelector(".search-bar-cont");
const magnifierEl = document.querySelector(".magnifier-icon");

magnifierEl.addEventListener("click", () => {
    searchBarContEl.classList.toggle("active");
});