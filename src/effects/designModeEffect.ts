import Effect from "../Effect";

new Effect({
    label: "Design Mode",
    id: "designModeEffect",
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