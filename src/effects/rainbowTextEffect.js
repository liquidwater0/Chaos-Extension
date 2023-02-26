import initEffect from "../initEffect";
import getRandomNumber from "../utitilies/getRandomNumber";

initEffect({
    label: "Rainbow Text",
    storageKey: "rainbowTextEffect",
    defaultEnabled: true,
    activate,
    revert
});

function activate() {
    const elements = document.querySelectorAll("*");

    elements.forEach(element => {
        if (!element) return;
        element.style.color = `rgb(${getRandomNumber(0, 255)}, ${getRandomNumber(0, 255)}, ${getRandomNumber(0, 255)})`;
    });
}

function revert() {
    const elements = document.querySelectorAll("*");

    elements.forEach(element => {
        if (!element) return;
        element.style.color = "";
    });
}