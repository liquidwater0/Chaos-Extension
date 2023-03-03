import Effect from "../Effect";

new Effect({
    label: "Uppercase Text",
    storageKey: "uppercaseTextEffect",
    defaultEnabled: true,
    activate,
    revert
});

function activate() {
    document.documentElement.classList.add("uppercase-text-effect");
}

function revert() {
    document.documentElement.classList.remove("uppercase-text-effect");
}