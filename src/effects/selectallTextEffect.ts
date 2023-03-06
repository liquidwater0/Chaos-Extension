import Effect from "../Effect";

new Effect({
    label: "Select All Text",
    id: "selectAllTextEffect",
    defaultEnabled: true,
    activate,
    revert
});

function activate() {
    document.getSelection().selectAllChildren(document.body);
}

function revert() {}