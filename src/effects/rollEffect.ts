import Effect from "../Effect";

new Effect({
    label: "Roll",
    storageKey: "rollEffect",
    defaultEnabled: true,
    activate,
    revert
});

function activate() {
    document.documentElement.classList.add("roll-effect");
}

function revert() {
    document.documentElement.classList.remove("roll-effect");
}