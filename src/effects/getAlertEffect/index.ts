import Effect from "@effects/Effect";

export default new Effect({
    id: "getAlertEffect",
    label: "Get Alert",
    activate,
    revert
});

function activate() {
    setTimeout(() => alert("Alert!"), 250);
}

function revert() {}