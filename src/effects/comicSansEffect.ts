import initEffect from "../initEffect";

initEffect({
    label: "Comic Sans",
    storageKey: "comicSansEffect",
    defaultEnabled: true,
    activate,
    revert
});

function activate() {
    document.documentElement.classList.add("comic-sans-effect");
}

function revert() {
    document.documentElement.classList.remove("comic-sans-effect");
}