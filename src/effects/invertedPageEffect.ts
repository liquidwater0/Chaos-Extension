import initEffect from "../initEffect";

initEffect({
    label: "Inverted Page",
    storageKey: "invertedPageEffect",
    defaultEnabled: true,
    activate,
    revert
});

function activate() {
    document.documentElement.classList.add("inverted-page-effect");
}

function revert() {
    document.documentElement.classList.remove("inverted-page-effect");
}