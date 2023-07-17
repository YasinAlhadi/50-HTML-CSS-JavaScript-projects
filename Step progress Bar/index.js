const nextEl = document.getElementById("next");
const prevEl = document.getElementById("prev");

const stepsEL = document.querySelectorAll(".step");
const progressEl = document.querySelector(".progress-bar-front");

let currentCheck = 1;

nextEl.addEventListener("click", () => {
    currentCheck++;
    if (currentCheck > stepsEL.length) {
        currentCheck = stepsEL.length
    }
    updateStepProgress();
});

prevEl.addEventListener("click", () => {
    currentCheck--;
    if (currentCheck < 1) {
        currentCheck = 1;
    }
    updateStepProgress();
});

function updateStepProgress() {
    stepsEL.forEach((stepEl, idx) => {
        if (idx < currentCheck) {
            stepEl.classList.add("checked");
            stepEl.innerHTML = `
            <i class="fa-solid fa-check"></i>
            <small>${idx === 0
                    ? "Start"
                    : idx === stepsEL.length - 1
                        ? "Finaly"
                        : "Step " + idx}</small>
            `;
        } else {
            stepEl.classList.remove("checked");
            stepEl.innerHTML = `<i class="fa-solid fa-xmark"></i>`
        }
    });
    const checkNum = document.querySelectorAll(".checked");

    progressEl.style.width = ((checkNum.length - 1) / (stepsEL.length - 1) * 100 + "%");

    if (currentCheck == 1) {
        prevEl.disabled = true;
    } else if (currentCheck == stepsEL.length) {
        nextEl.disabled = true;
    } else {
        nextEl.disabled = false;
        prevEl.disabled = false;
    }
}