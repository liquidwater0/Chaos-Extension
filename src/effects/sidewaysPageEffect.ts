import initEffect from "../initEffect";

initEffect({
    label: "Sideways Page",
    storageKey: "sidewaysPageEffect",
    defaultEnabled: true,
    activate,
    revert
});

function activate() {
    document.documentElement.classList.add("sideways-page-effect");
}

function revert() {
    document.documentElement.classList.remove("sideways-page-effect");
}