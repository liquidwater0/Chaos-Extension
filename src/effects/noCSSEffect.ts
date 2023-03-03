import Effect from "../Effect";

new Effect({
    label: "No CSS",
    storageKey: "noCSSEffect",
    defaultEnabled: true,
    activate,
    revert
});

function activate() {
    const styleSheets = [...document.styleSheets];
    styleSheets.forEach(styleSheet => styleSheet.disabled = true);
}

function revert() {
    const styleSheets = [...document.styleSheets];
    styleSheets.forEach(styleSheet => styleSheet.disabled = false);
}