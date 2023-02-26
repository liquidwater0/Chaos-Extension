import initEffect from "../initEffect";

initEffect({
    label: "Get Alert",
    storageKey: "getAlertEffect",
    defaultEnabled: true,
    activate,
    revert
});

function activate() {
    setTimeout(() => alert("Alert!"), 250);
}

function revert() {}