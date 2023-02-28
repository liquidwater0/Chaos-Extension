import initEffect from "../initEffect";

initEffect({
    label: "Upside Down",
    storageKey: "upsideDownEffect",
    defaultEnabled: true,
    activate,
    revert
});

function activate() {
    document.documentElement.classList.add("upside-down-effect");
}

function revert() {
    document.documentElement.classList.remove("upside-down-effect");
}