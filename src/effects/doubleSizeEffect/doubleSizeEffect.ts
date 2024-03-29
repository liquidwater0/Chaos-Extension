import Effect from "../../Effect";

new Effect({
    label: "Double Size",
    id: "doubleSizeEffect",
    defaultEnabled: true,
    activate,
    revert
});

function activate() {
    document.documentElement.classList.add("double-size-effect");
}

function revert() {
    document.documentElement.classList.remove("double-size-effect");
}