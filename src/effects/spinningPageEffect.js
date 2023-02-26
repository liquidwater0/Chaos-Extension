import initEffect from "../initEffect";

initEffect({
    effectName: "spinningPage",
    label: "Spinning Page",
    storageKey: "spinningPageEffect",
    defaultEnabled: true,
    activate,
    revert
});

function activate() {
    document.documentElement.classList.add("spinning-page-effect");
}

function revert() {
    document.documentElement.classList.remove("spinning-page-effect");
}