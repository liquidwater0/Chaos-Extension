import Effect from "../Effect";
import Overlay from "../utitilies/overlay";

new Effect({
    label: "Vignette",
    id: "vignetteEffect",
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