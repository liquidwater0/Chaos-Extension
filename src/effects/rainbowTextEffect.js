import getRandomNumber from "../utitilies/getRandomNumber";

export default {
    name: "Rainbow Text",
    storageKey: "rainbowTextEffect",

    revert: () => { 
        const elements = document.querySelectorAll("*");
        elements.forEach(element => {
            if (!element) return;
            element.style.color = "";
        });
    },

    activate: () => {  
        const elements = document.querySelectorAll("*");

        elements.forEach(element => {
            if (!element) return;
            element.style.color = `rgb(${getRandomNumber(0, 255)}, ${getRandomNumber(0, 255)}, ${getRandomNumber(0, 255)})`;
        });
    }
}