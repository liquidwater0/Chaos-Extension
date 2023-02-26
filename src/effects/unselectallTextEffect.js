import initEffect from "../initEffect";

initEffect({
    effectName: "unselectAllText",
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