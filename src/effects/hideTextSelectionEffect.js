import initEffect from "../initEffect";

initEffect({
    effectName: "hideTextSelection",
    label: "Hide Text Selection",
    storageKey: "hideTextSelectionEffect",
    defaultEnabled: true,
    activate,
    revert
});

function activate() {
    document.documentElement.classList.add("hide-text-selection-effect");
}

function revert() {
    document.documentElement.classList.remove("hide-text-selection-effect");
}