const tabsEl = document.querySelector(".tab-container");
const btnEl = document.querySelectorAll(".btn");
const articleEl = document.querySelectorAll(".content-container");

tabsEl.addEventListener("click", (event) => {
    const id = event.target.dataset.id;

    if (id) {
        btnEl.forEach((butt) => {
            butt.classList.remove("active");
        });
        event.target.classList.add("active");
        articleEl.forEach((article) => {
            article.classList.remove("active");
        });
        const element = document.getElementById(id);
        element.classList.add("active");
    }
});