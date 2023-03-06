import Effect from "../../Effect";
import { Overlay } from "../index";

new Effect({
    label: "Inverted Colors",
    id: "invertedColorsEffect",
    defaultEnabled: true,
    activate,
    revert
});

function activate() {
    new Overlay({ id: "invertOverlay", pointerEvents: false });
}

function revert() {
    const invertOverlay = document.querySelector("[data-extension='chaosExtension']#invertOverlay");
    
    if (!invertOverlay) return;
    
    invertOverlay.remove();
}