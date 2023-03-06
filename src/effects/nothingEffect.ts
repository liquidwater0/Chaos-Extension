import Effect from "../Effect";

new Effect({
    label: "Nothing",
    id: "nothingEffect",
    defaultEnabled: true,
    activate,
    revert
});

function activate() {}

function revert() {}