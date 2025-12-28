import Effect from "@effects/Effect";
import "./index.scss";
import { Overlay } from "@effects/EffectElements";
import { DEFAULT_EFFECT_DURATION_MS } from "@/constants/effects";

export default new Effect({
    id: "disableMouseInputEffect",
    label: "Disable Mouse Input",
    durationMs: DEFAULT_EFFECT_DURATION_MS,
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

    const disableOverlay = document.querySelector("[chaos-extension-overlay]#disableOverlay");
    if (!disableOverlay) return;
    disableOverlay.remove();
}