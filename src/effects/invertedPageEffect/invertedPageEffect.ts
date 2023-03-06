import Effect from "../../Effect";

new Effect({
    label: "Inverted Page",
    id: "invertedPageEffect",
    defaultEnabled: true,
    activate,
    revert
});

function activate() {
    document.documentElement.classList.add("inverted-page-effect");
}

function revert() {
    document.documentElement.classList.remove("inverted-page-effect");
}