import initEffect from "../initEffect";
import Overlay from "../utitilies/overlay";

initEffect({
    effectName: "blurryVision",
    label: "Blurry Vision",
    storageKey: "blurryVisionEffect",
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