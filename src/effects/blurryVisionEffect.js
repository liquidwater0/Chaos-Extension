import Overlay from "../utitilies/overlay";

export default {
    name: "Blurry Vision",
    storageKey: "blurryVisionEffect",
    
    revert: () => { 
        const blurOverlay = document.querySelector("[data-extension='chaosExtension']#blurOverlay");
        if (blurOverlay) blurOverlay.remove();
    },

    activate: () =>  new Overlay({ id: "blurOverlay", pointerEvents: false })
}