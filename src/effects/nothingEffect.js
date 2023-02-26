import initEffect from "../initEffect";

initEffect({
    label: "Nothing",
    storageKey: "nothingEffect",
    defaultEnabled: true,
    activate,
    revert
});

function activate() {}

function revert() {}