import Effect from "../Effect";

new Effect({
    label: "Select All Text",
    storageKey: "selectAllTextEffect",
    defaultEnabled: true,
    activate,
    revert
});

function activate() {
    document.getSelection().selectAllChildren(document.body);
}

function revert() {}