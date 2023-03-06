import Effect from "../../Effect";

new Effect({
    label: "Get Alert",
    id: "getAlertEffect",
    defaultEnabled: true,
    activate,
    revert
});

function activate() {
    setTimeout(() => alert("Alert!"), 250);
}

function revert() {}