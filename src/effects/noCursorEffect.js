import initEffect from "../initEffect";

initEffect({
    effectName: "noCursor",
    label: "No Cursor",
    storageKey: "noCursorEffect",
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