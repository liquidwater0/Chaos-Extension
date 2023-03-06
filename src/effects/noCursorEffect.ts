import Effect from "../Effect";

new Effect({
    label: "No Cursor",
    id: "noCursorEffect",
    defaultEnabled: true,
    activate,
    revert
});

function activate() {
    document.documentElement.classList.add("no-cursor-effect");
}

function revert() {
    document.documentElement.classList.remove("no-cursor-effect");
}