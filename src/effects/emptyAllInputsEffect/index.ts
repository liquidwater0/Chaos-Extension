import Effect from "@effects/Effect";

export default new Effect({
    id: "emptyAllInputsEffect",
    label: "Empty All Inputs",
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