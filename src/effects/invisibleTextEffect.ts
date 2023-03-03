import Effect from "../Effect";

new Effect({
    label: "Invisible Text",
    storageKey: "invisibleTextEffect",
    defaultEnabled: true,
    activate,
    revert
});

function activate() {
    document.documentElement.classList.add("invisible-text-effect");
}

function revert() {
    document.documentElement.classList.remove("invisible-text-effect");
}