import Effect from "../../Effect";

new Effect({
    label: "Sideways Page",
    id: "sidewaysPageEffect",
    defaultEnabled: true,
    activate,
    revert
});

function activate() {
    document.documentElement.classList.add("sideways-page-effect");
}

function revert() {
    document.documentElement.classList.remove("sideways-page-effect");
}