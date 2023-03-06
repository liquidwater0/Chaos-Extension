import Effect from "../../Effect";

new Effect({
    label: "Scroll To Random Element",
    id: "scrollToRandomElementEffect",
    defaultEnabled: true,
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