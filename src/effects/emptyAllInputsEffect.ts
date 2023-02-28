import initEffect from "../initEffect";

initEffect({
    label: "Empty All Inputs",
    storageKey: "emptyAllInputsEffect",
    defaultEnabled: true,
    activate,
    revert
});

function activate() {
    const inputs = document.querySelectorAll<HTMLInputElement | HTMLTextAreaElement>("input:not([type='button']), textarea");

    inputs.forEach(input => {
        if (!input) return;
        if (input.type == "color") input.value = "#000000";
        if (input.value && input.type != "color") input.value = "";
    });
}

function revert() {}