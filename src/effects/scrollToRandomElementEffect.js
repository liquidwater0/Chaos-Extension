export default {
    name: "Scroll To Random Element",
    storageKey: "scrollToRandomElementEffect",
    
    revert: () => {},
    activate: () => { 
        const elements = document.querySelectorAll("body *");
        const randomElement = elements[Math.floor(Math.random() * elements.length)];
        if (randomElement) randomElement.scrollIntoView();
    }
}