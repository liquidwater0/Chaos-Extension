import initEffect from "../initEffect";

initEffect({
    effectName: "nothing",
    label: "Nothing",
    storageKey: "nothingEffect",
    defaultEnabled: true,
    activate,
    revert
});

function activate() {}

function revert() {}