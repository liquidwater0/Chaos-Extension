import initEffect from "../initEffect";

initEffect({
    effectName: "roll",
    label: "Roll",
    storageKey: "rollEffect",
    defaultEnabled: true,
    activate,
    revert
});

function activate() {
    document.documentElement.classList.add("roll-effect");
}

function revert() {
    document.documentElement.classList.remove("roll-effect");
}