import initEffect from "../initEffect";

initEffect({
    effectName: "halfSize",
    label: "Half Size",
    storageKey: "halfSizeEffect",
    defaultEnabled: true,
    activate,
    revert
});

function activate() {
    document.documentElement.classList.add("half-size-effect");
}

function revert() {
    document.documentElement.classList.remove("half-size-effect");
}