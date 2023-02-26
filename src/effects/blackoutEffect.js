import initEffect from "../initEffect";
import Overlay from "../utitilies/overlay";

initEffect({
    effectName: "blackout",
    label: "Blackout",
    storageKey: "blackoutEffect",
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