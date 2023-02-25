import Overlay from "../utitilies/overlay";

export default {
    name: "Blackout",
    storageKey: "blackoutEffect",
    
    revert: () => { 
        const blackoutOverlay = document.querySelector("[data-extension='chaosExtension']#blackoutOverlay");
        if (blackoutOverlay) blackoutOverlay.remove();
    },

    activate: () => new Overlay({ id: "blackoutOverlay", pointerEvents: false })
}