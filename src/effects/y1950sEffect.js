import Overlay from "../utitilies/overlay";

export default {
    name: "1950s",
    storageKey: "y1950sEffect",
    
    revert: () => { 
        const y1950sOverlay = document.querySelector("[data-extension='chaosExtension']#y1950sOverlay");
        if (y1950sOverlay) y1950sOverlay.remove();
    },

    activate: () => new Overlay({ id: "y1950sOverlay", pointerEvents: false })
}