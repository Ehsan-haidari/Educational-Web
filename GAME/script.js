

let randomNumber = Math.floor(Math.random() * 15) + 1; 
let attempts = 0;

function checkGuess() {
    const guessInput = document.getElementById("guessInput");
    const resultMessage = document.getElementById("resultMessage");
    const attemptsCount = document.getElementById("attemptsCount");

    const guess = parseInt(guessInput.value);
    attempts++;

    if (isNaN(guess) || guess < 1  ||  guess > 100) {
        resultMessage.textContent = "لطفاً یک عدد معتبر بین 1 تا 15 وارد کنید.";
        speak("لطفاً یک عدد معتبر بین 1 تا 15 وارد کنید.");
        return;
    }

    if (guess < randomNumber) {
        resultMessage.textContent = "بزرگ‌تر حدس بزنید!";
        speak("بزرگ‌تر حدس بزنید!");
    } else if (guess > randomNumber) {
        resultMessage.textContent = "کوچک‌تر حدس بزنید!";
        speak("کوچک‌تر حدس بزنید!");
    } else {
        resultMessage.textContent =` تبریک! شما عدد ${randomNumber} را حدس زدید در ${attempts} تلاش.`;
        speak(`تبریک! شما عدد ${randomNumber} را حدس زدید.`);
    }

    attemptsCount.textContent = attempts;
}

function resetGame() {
    randomNumber = Math.floor(Math.random() * 15) + 1;
    attempts = 0;
    document.getElementById("guessInput").value = "";
    document.getElementById("resultMessage").textContent = "";
    document.getElementById("attemptsCount").textContent = attempts;
}


function speak(text) {
    const speech = new SpeechSynthesisUtterance(text);
    speech.lang = "fa-IR";
    window.speechSynthesis.speak(speech);
}