import Effect from "../Effect";

new Effect({
    label: "Unselect All Text",
    storageKey: "unselectAllTextEffect",
    defaultEnabled: true,
    activate,
    revert
});

function activate() {
    document.getSelection().selectAllChildren(document.head);
}

function revert() {}