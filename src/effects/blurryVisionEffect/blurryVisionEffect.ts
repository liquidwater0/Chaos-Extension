import Effect from "../../Effect";
import { Overlay } from "../index";

new Effect({
    label: "Blurry Vision",
    id: "blurryVisionEffect",
    defaultEnabled: true,
    activate,
    revert
});

function activate() {
    new Overlay({ id: "blurOverlay", pointerEvents: false });
}

function revert() {
    const blurOverlay = document.querySelector("[data-extension='chaosExtension']#blurOverlay");
    
    if (!blurOverlay) return;
    
    blurOverlay.remove();
}