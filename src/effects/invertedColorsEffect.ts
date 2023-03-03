import Effect from "../Effect";
import Overlay from "../utitilies/overlay";

new Effect({
    label: "Inverted Colors",
    storageKey: "invertedColorsEffect",
    defaultEnabled: true,
    activate,
    revert
});

function activate() {
    new Overlay({ id: "invertOverlay", pointerEvents: false });
}

function revert() {
    const invertOverlay = document.querySelector("[data-extension='chaosExtension']#invertOverlay");
    
    if (!invertOverlay) return;
    
    invertOverlay.remove();
}