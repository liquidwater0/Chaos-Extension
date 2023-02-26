import initEffect from "../initEffect";

initEffect({
    label: "Double Size",
    storageKey: "doubleSizeEffect",
    defaultEnabled: true,
    activate,
    revert
});

function activate() {
    document.documentElement.classList.add("double-size-effect");
}

function revert() {
    document.documentElement.classList.remove("double-size-effect");
}