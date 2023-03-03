import Effect from "../Effect";

new Effect({
    label: "Reload Page",
    storageKey: "reloadPageEffect",
    defaultEnabled: true,
    activate,
    revert
});

function activate() {
    setTimeout(() => window.location.reload(), 250);
}

function revert() {}