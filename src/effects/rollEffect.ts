import Effect from "../Effect";

new Effect({
    label: "Roll",
    id: "rollEffect",
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