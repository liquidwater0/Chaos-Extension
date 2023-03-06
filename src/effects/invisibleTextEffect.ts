import Effect from "../Effect";

new Effect({
    label: "Invisible Text",
    id: "invisibleTextEffect",
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