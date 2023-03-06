import Effect from "../../Effect";

new Effect({
    label: "Spinning Page",
    id: "spinningPageEffect",
    defaultEnabled: true,
    activate,
    revert
});

function activate() {
    document.documentElement.classList.add("spinning-page-effect");
}

function revert() {
    document.documentElement.classList.remove("spinning-page-effect");
}