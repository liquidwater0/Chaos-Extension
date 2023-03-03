import Effect from "../Effect";
import getRandomNumber from "../utitilies/getRandomNumber";

new Effect({
    label: "Random Text Color",
    storageKey: "randomTextColorEffect",
    defaultEnabled: true,
    activate,
    revert
});

function activate() {
    const html = document.documentElement;
    const randomTextColor = `rgb(${getRandomNumber(0, 255)}, ${getRandomNumber(0, 255)}, ${getRandomNumber(0, 255)})`;

    html.classList.add("random-text-color-effect");
    html.style.setProperty("--random-text-color", randomTextColor);
}

function revert() {
    const html = document.documentElement;

    html.classList.remove("random-text-color-effect");
    html.style.removeProperty("--random-text-color");
}