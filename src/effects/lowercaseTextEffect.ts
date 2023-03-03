import Effect from "../Effect";

new Effect({
    label: "Lowercase Text",
    storageKey: "lowercaseTextEffect",
    defaultEnabled: true,
    activate,
    revert
});

function activate() {
    document.documentElement.classList.add("lowercase-text-effect");
}

function revert() {
    document.documentElement.classList.remove("lowercase-text-effect");
}