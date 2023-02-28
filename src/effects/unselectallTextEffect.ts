import initEffect from "../initEffect";

initEffect({
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