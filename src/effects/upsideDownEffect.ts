import Effect from "../Effect";

new Effect({
    label: "Upside Down",
    id: "upsideDownEffect",
    defaultEnabled: true,
    activate,
    revert
});

function activate() {
    document.documentElement.classList.add("upside-down-effect");
}

function revert() {
    document.documentElement.classList.remove("upside-down-effect");
}