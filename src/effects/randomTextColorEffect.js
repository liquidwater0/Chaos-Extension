import getRandomNumber from "../utitilies/getRandomNumber";

export default {
    name: "Random Text Color",
    storageKey: "randomTextColorEffect",
    
    revert: () => { 
        const html = document.documentElement;

        html.classList.remove("random-text-color-effect");
        html.style.removeProperty("--random-text-color");
    },

    activate: () => {
        const html = document.documentElement;
        const randomTextColor = `rgb(${getRandomNumber(0, 255)}, ${getRandomNumber(0, 255)}, ${getRandomNumber(0, 255)})`;

        html.classList.add("random-text-color-effect");
        html.style.setProperty("--random-text-color", randomTextColor);
    }
}