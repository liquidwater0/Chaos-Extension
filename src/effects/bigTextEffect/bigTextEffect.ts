import Effect from "../../Effect";

new Effect({
    label: "Big Text",
    id: "bigTextEffect",
    defaultEnabled: true,
    activate,
    revert
});

function activate() {
    document.documentElement.classList.add("big-text-effect");
}

function revert() {
    document.documentElement.classList.remove("big-text-effect");
}