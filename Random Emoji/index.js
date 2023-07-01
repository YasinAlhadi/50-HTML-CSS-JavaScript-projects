const btnEl = document.getElementById("btn");
const emojiEl = document.getElementById("emoji");

const emoji = [];

async function getEmoji() {
    let response = await fetch("https://emoji-api.com/emojis?access_key=40f46f80e5a72639e0e03fe19274cfb7a883e31e");
    data = await response.json();

    for (let i = 0; i < 1500; i++) {
        emoji.push({
            emojiName: data[i].character,
            emojiCode: data[i].unicodeName,
        });
    }
}

getEmoji();

btnEl.addEventListener("click", () => {
    const randomNumber = Math.floor(Math.random() * emoji.length);
    btnEl.innerText = emoji[randomNumber].emojiName;
    emojiEl.innerText = emoji[randomNumber].emojiCode;
});

