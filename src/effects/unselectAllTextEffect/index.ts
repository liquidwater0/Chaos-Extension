import Effect from "@effects/Effect";

export default new Effect({
    id: "unselectAllTextEffect",
    label: "Unselect All Text",
    activate,
    revert
});

function activate() {
    const selection = document.getSelection();
    if (!selection) return;
    selection.selectAllChildren(document.head);
}

function revert() {}