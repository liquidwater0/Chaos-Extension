import Effect from "../Effect";

new Effect({
    label: "Design Mode",
    storageKey: "designModeEffect",
    defaultEnabled: true,
    activate,
    revert
});

function activate() {
    document.designMode = "on";
}

function revert() {
    document.designMode = "off";
}