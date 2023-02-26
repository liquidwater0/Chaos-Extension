import initEffect from "../initEffect";
import Overlay from "../utitilies/overlay";

initEffect({
    effectName: "vignette",
    label: "Vignette",
    storageKey: "vignetteEffect",
    defaultEnabled: true,
    activate,
    revert
});

function activate() {
    new Overlay({ id: "vignetteOverlay", pointerEvents: false });
}

function revert() {
    const vignetteOverlay = document.querySelector("[data-extension='chaosExtension']#vignetteOverlay");
    
    if (!vignetteOverlay) return;
    
    vignetteOverlay.remove();
}