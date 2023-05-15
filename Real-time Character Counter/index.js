const teaxtareaEl = document.getElementById("textarea");
const totalcharEl = document.getElementById("total-char");
const remaincharEl = document.getElementById("remain-char")

teaxtareaEl.addEventListener("keyup", () => {
    updateCounter()
})

function updateCounter() {
    totalcharEl.innerText = teaxtareaEl.value.length;
    remaincharEl.innerText = teaxtareaEl.getAttribute("maxlength") - teaxtareaEl.value.length;
}