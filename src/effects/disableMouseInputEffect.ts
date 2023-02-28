import initEffect from "../initEffect";
import Overlay from "../utitilies/overlay";

initEffect({
    label: "Disable Mouse Input",
    storageKey: "disableMouseInputEffect",
    defaultEnabled: true,
    activate,
    revert
});

function disableRightClick(event: MouseEvent) {
    event.preventDefault();
}

function activate() {
    document.documentElement.classList.add("disable-mouse-input-effect");
    document.addEventListener("contextmenu", disableRightClick);

    new Overlay({ id: "disableOverlay", pointerEvents: true });
}

function revert() {
    document.documentElement.classList.remove("disable-mouse-input-effect");
    document.removeEventListener("contextmenu", disableRightClick);

    const disableOverlay = document.querySelector("[data-extension='chaosExtension']#disableOverlay");
    
    if (!disableOverlay) return;
    
    disableOverlay.remove();
}