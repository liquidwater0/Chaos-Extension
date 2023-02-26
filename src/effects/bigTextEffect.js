import initEffect from "../initEffect";

initEffect({
    label: "Big Text",
    storageKey: "bigTextEffect",
    defaultEnabled: true,
    activate,
    revert
});

function activate() {
    document.documentElement.classList.add("big-text-effect");
}

function revert() {
    document.documentElement.classList.remove("big-text-effect");
}