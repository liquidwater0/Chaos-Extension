import Effect from "../../Effect";

new Effect({
    label: "Small Text",
    id: "smallTextEffect",
    defaultEnabled: true,
    activate,
    revert
});

function activate() {
    document.documentElement.classList.add("small-text-effect");
}

function revert() {
    document.documentElement.classList.remove("small-text-effect");
}