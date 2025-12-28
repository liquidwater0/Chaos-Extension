import Effect from "@effects/Effect";

export default new Effect({
    id: "scrollToRandomElementEffect",
    label: "Scroll To Random Element",
    activate,
    revert
});

function activate() {
    const elements = document.querySelectorAll<HTMLElement>("body *");
    const randomElement = elements[Math.floor(Math.random() * elements.length)];

    if (!randomElement) return;
    
    randomElement.scrollIntoView();
}

function revert() {}