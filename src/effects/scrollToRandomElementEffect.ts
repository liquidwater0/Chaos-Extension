import initEffect from "../initEffect";

initEffect({
    label: "Scroll To Random Element",
    storageKey: "scrollToRandomElementEffect",
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