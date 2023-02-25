//Maybe find a better way to set a dark background on everything

export default {
    name: "Terminalify",
    storageKey: "terminalifyEffect",
    
    revert: () => {
        document.documentElement.classList.remove("terminalify-effect");

        const elements = document.querySelectorAll("*");

        elements.forEach(element => {
            if (!element) return;
            element.style.backgroundColor = "";
        });
    },

    activate: () => { 
        document.documentElement.classList.add("terminalify-effect");

        const elements = document.querySelectorAll("body *, body, html");

        function getColor(element) {
            const parts = window.getComputedStyle(element, null).getPropertyValue("background-color").match(/[\d.]+/g);

            if (parts.length == 3) {
                return "rgb(25, 25, 25)";
            } else {
                return `rgba(25, 25, 25, ${parts[3]})`;
            }
        }

        elements.forEach(element => {
            if (!element) return;
            element.style.setProperty("background-color", getColor(element), "important");
        });
    }
}