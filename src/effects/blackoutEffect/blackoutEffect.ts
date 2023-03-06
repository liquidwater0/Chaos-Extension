import Effect from "../../Effect";
import Overlay from "../../utitilies/overlay";

new Effect({
    label: "Blackout",
    id: "blackoutEffect",
    defaultEnabled: true,
    activate,
    revert
});

function activate() {
    new Overlay({ id: "blackoutOverlay", pointerEvents: false });
}

function revert() {
    const blackoutOverlay = document.querySelector("[data-extension='chaosExtension']#blackoutOverlay");

    if (!blackoutOverlay) return;
    
    blackoutOverlay.remove();
}