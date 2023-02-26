import initEffect from "../initEffect";

initEffect({
    effectName: "emptyAllInputs",
    label: "Empty All Inputs",
    storageKey: "emptyAllInputsEffect",
    defaultEnabled: true,
    activate,
    revert
});

function activate() {
    const inputs = document.querySelectorAll("input:not([type='button']), textarea");

    inputs.forEach(input => {
        if (!input) return;
        if (input.type == "color") input.value = "#000000";
        if (input.value && input.type != "color") input.value = "";
    });
}

function revert() {}