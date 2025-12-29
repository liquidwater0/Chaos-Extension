import Effect from "@effects/Effect";
import "./index.scss";
import { Overlay } from "@effects/EffectElements";
import { DEFAULT_EFFECT_DURATION_MS, TAGS } from "@/constants/effects";

export default new Effect({
    id: "y1950sEffect",
    label: "1950s",
    durationMs: DEFAULT_EFFECT_DURATION_MS,
    tags: [TAGS.OVERLAY, TAGS.THEME_BACKGROUND],
    activate,
    revert
});

function activate() {
    document.documentElement.classList.add("y1950s-effect");
    new Overlay({ id: "y1950sOverlay", pointerEvents: false });
}

function revert() {
    document.documentElement.classList.remove("y1950s-effect");

    const y1950sOverlay = document.querySelector("[chaos-extension-overlay]#y1950sOverlay");
    if (!y1950sOverlay) return;
    y1950sOverlay.remove();
}