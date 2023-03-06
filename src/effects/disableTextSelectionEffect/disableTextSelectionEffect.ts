import Effect from "../../Effect";

new Effect({
    label: "Disable Text Selection",
    id: "disableTextSelectionEffect",
    defaultEnabled: true,
    activate,
    revert
});

function activate() {
    document.documentElement.classList.add("disable-text-selection-effect");
}

function revert() {
    document.documentElement.classList.remove("disable-text-selection-effect");
}