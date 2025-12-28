import Effect from "@effects/Effect";

export default new Effect({
    id: "selectAllTextEffect",
    label: "Select All Text",
    activate,
    revert
});

function activate() {
    const documentSelection = document.getSelection();
    if (!documentSelection) return;
    documentSelection.selectAllChildren(document.body);
}

function revert() {}