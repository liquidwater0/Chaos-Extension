import Effect from "../Effect";

new Effect({
    label: "Hide Images",
    id: "hideImagesEffect",
    defaultEnabled: true,
    activate,
    revert
});

function activate() {
    document.documentElement.classList.add("hide-images-effect");
}

function revert() {
    document.documentElement.classList.remove("hide-images-effect");
}