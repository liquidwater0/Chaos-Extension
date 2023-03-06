import Effect from "../Effect";
import getRandomNumber from "../utitilies/getRandomNumber";

new Effect({
    label: "Rainbow Text",
    id: "rainbowTextEffect",
    defaultEnabled: true,
    activate,
    revert
});

function activate() {
    const elements = document.querySelectorAll<HTMLElement>("*");

    elements.forEach(element => {
        if (!element) return;
        element.style.color = `rgb(${getRandomNumber(0, 255)}, ${getRandomNumber(0, 255)}, ${getRandomNumber(0, 255)})`;
    });
}

function revert() {
    const elements = document.querySelectorAll<HTMLElement>("*");

    elements.forEach(element => {
        if (!element) return;
        element.style.color = "";
    });
}