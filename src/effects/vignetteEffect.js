import Overlay from "../utitilies/overlay";

export default {
    name: "Vignette",
    storageKey: "vignetteEffect",

    revert: () => {
        const vignetteOverlay = document.querySelector("[data-extension='chaosExtension']#vignetteOverlay");
        if (vignetteOverlay) vignetteOverlay.remove();
    },
    activate: () => new Overlay({ id: "vignetteOverlay", pointerEvents: false })
}