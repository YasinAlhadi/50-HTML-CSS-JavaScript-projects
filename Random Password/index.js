const btnEl = document.querySelector(".btn");
const inputEl = document.getElementById("input");
const copyIconEl = document.querySelector(".fa-copy");
const alertContainerEl = document.querySelector(".alert-container");

btnEl.addEventListener("click", () => {
    createPassword();
});

copyIconEl.addEventListener("click", () => {
    copyPassword();
    if (inputEl.value) {
        alertContainerEl.classList.remove("active");
        setTimeout(() => {
            alertContainerEl.classList.add("active");
        }, 2000);
    }
});

function createPassword() {
    const chars = "abcdefghijklmnopqrstuv@#$%{}ABOCDEFGHIJKLMNOPQRSTUVWXYZ1234567890"
    const passwlenght = 10;
    let password = "";
    for (let index = 0; index < passwlenght; index++) {
        const randomNum = Math.floor(Math.random() * chars.length);
        password += chars.substring(randomNum, randomNum + 1);

    }
    inputEl.value = password
    alertContainerEl.innerText = password + " copied!";
}

function copyPassword() {
    inputEl.select();
    inputEl.setSelectionRange(0, 9999);
    navigator.clipboard.writeText(inputEl.value);
}