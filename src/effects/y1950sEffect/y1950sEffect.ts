import Effect from "../../Effect";
import { Overlay } from "../index";

new Effect({
    label: "1950s",
    id: "y1950sEffect",
    defaultEnabled: true,
    activate,
    revert
});

function activate() {
    new Overlay({ id: "y1950sOverlay", pointerEvents: false });
}

function revert() {
    const y1950sOverlay = document.querySelector("[data-extension='chaosExtension']#y1950sOverlay");

    if (!y1950sOverlay) return;

    y1950sOverlay.remove();
}