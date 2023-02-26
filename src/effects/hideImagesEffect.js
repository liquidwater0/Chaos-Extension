import initEffect from "../initEffect";

initEffect({
    effectName: "hideImages",
    label: "Hide Images",
    storageKey: "hideImagesEffect",
    defaultEnabled: true,
    activate,
    revert
});

function activate() {
    document.documentElement.classList.add("hide-images-effect");
}

function revert() {
    document.documentElement.classList.remove("hide-images-effect");
}