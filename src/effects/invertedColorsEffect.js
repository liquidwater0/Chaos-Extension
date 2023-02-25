import Overlay from "../utitilies/overlay";

export default {
    name: "Inverted Colors",
    storageKey: "invertedColorsEffect",
    
    revert: () => { 
        const invertOverlay = document.querySelector("[data-extension='chaosExtension']#invertOverlay");
        if (invertOverlay) invertOverlay.remove();
    },

    activate: () => new Overlay({ id: "invertOverlay", pointerEvents: false })
}