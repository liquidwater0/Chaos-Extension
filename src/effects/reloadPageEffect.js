import initEffect from "../initEffect";

initEffect({
    effectName: "reloadPage",
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