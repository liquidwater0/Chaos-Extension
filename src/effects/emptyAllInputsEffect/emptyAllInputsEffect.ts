import Effect from "../../Effect";

new Effect({
    label: "Empty All Inputs",
    id: "emptyAllInputsEffect",
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