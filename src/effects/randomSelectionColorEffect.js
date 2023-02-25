import getRandomNumber from "../utitilies/getRandomNumber";

export default {
    name: "Random Selection Color",
    storageKey: "randomSelectionColorEffect",
    
    revert: () => {
        const html = document.documentElement;

        html.classList.remove("random-selection-color-effect");
        html.style.removeProperty("--random-background-color");
        html.style.removeProperty("--random-text-color");
    },

    activate: () => { 
        const html = document.documentElement;
        const randomBackgroundColor = `rgb(${getRandomNumber(0, 255)}, ${getRandomNumber(0, 255)}, ${getRandomNumber(0, 255)})`;
        const randomTextColor = `rgb(${getRandomNumber(0, 255)}, ${getRandomNumber(0, 255)}, ${getRandomNumber(0, 255)})`;

        html.classList.add("random-selection-color-effect");
        html.style.setProperty("--random-background-color", randomBackgroundColor);
        html.style.setProperty("--random-text-color", randomTextColor);
    }
}