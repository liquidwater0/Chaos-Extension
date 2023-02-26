import initEffect from "../initEffect";

initEffect({
    effectName: "hideScrollbars",
    label: "Hide Scrollbars",
    storageKey: "hideScrollbarsEffect",
    defaultEnabled: true,
    activate,
    revert
});

function activate() {
    document.documentElement.classList.add("hide-scrollbars-effect");
}

function revert() {
    document.documentElement.classList.remove("hide-scrollbars-effect");
}