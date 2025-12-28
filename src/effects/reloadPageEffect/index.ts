import Effect from "@effects/Effect";

export default new Effect({
    id: "reloadPageEffect",
    label: "Reload Page",
    activate,
    revert
});

function activate() {
    setTimeout(() => window.location.reload(), 500);
}

function revert() {}