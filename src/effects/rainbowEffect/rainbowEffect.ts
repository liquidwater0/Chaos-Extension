import Effect from "../../Effect";
import { Overlay } from "../index";

new Effect({
    label: "Rainbow",
    id: "rainbowEffect",
    defaultEnabled: true,
    activate,
    revert
});

function activate() {
    new Overlay({ id: "rainbowOverlay", pointerEvents: false });
}

function revert() {
    const rainbowOverlay = document.querySelector("[data-extension='chaosExtension']#rainbowOverlay");

    if (!rainbowOverlay) return;

    rainbowOverlay.remove();
}