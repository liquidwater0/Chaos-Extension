import Effect from "../Effect";

new Effect({
    label: "Nothing",
    storageKey: "nothingEffect",
    defaultEnabled: true,
    activate,
    revert
});

function activate() {}

function revert() {}