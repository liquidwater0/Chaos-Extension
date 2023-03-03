import Effect from "../Effect";
import getRandomNumber from "../utitilies/getRandomNumber";

new Effect({
    label: "Random Selection Color",
    storageKey: "randomSelectionColorEffect",
    defaultEnabled: true,
    activate,
    revert
});

function activate() {
    const html = document.documentElement;
    const randomBackgroundColor = `rgb(${getRandomNumber(0, 255)}, ${getRandomNumber(0, 255)}, ${getRandomNumber(0, 255)})`;
    const randomTextColor = `rgb(${getRandomNumber(0, 255)}, ${getRandomNumber(0, 255)}, ${getRandomNumber(0, 255)})`;

    html.classList.add("random-selection-color-effect");
    html.style.setProperty("--random-background-color", randomBackgroundColor);
    html.style.setProperty("--random-text-color", randomTextColor);
}

function revert() {
    const html = document.documentElement;

    html.classList.remove("random-selection-color-effect");
    html.style.removeProperty("--random-background-color");
    html.style.removeProperty("--random-text-color");
}