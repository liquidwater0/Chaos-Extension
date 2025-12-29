import Effect from "@effects/Effect";
import "./index.scss";
import { Overlay } from "@effects/EffectElements";
import { TAGS, DEFAULT_EFFECT_DURATION_MS } from "@/constants/effects";

export default new Effect({
    id: "rainbowEffect",
    label: "Rainbow",
    durationMs: DEFAULT_EFFECT_DURATION_MS,
    tags: [TAGS.OVERLAY, TAGS.THEME_BACKGROUND],
    activate,
    revert
});

function activate() {
    document.documentElement.classList.add("rainbow-effect");
    new Overlay({ id: "rainbowOverlay", pointerEvents: false });
}

function revert() {
    document.documentElement.classList.remove("rainbow-effect");
    
    const rainbowOverlay = document.querySelector("[chaos-extension-overlay]#rainbowOverlay");
    if (!rainbowOverlay) return;
    rainbowOverlay.remove();
}