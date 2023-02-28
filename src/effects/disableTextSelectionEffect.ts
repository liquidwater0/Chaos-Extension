import initEffect from "../initEffect";

initEffect({
    label: "Disable Text Selection",
    storageKey: "disableTextSelectionEffect",
    defaultEnabled: true,
    activate,
    revert
});

function activate() {
    document.documentElement.classList.add("disable-text-selection-effect");
}

function revert() {
    document.documentElement.classList.remove("disable-text-selection-effect");
}