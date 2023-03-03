import Effect from "../Effect";

new Effect({
    label: "Disable Scrolling",
    storageKey: "disableScrollingEffect",
    defaultEnabled: true,
    activate,
    revert
});

function activate() {
    document.documentElement.classList.add("disable-scrolling-effect");
}

function revert() {
    document.documentElement.classList.remove("disable-scrolling-effect");
}