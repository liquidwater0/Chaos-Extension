import Effect from "../Effect";

new Effect({
    label: "Comic Sans",
    id: "comicSansEffect",
    defaultEnabled: true,
    activate,
    revert
});

function activate() {
    document.documentElement.classList.add("comic-sans-effect");
}

function revert() {
    document.documentElement.classList.remove("comic-sans-effect");
}