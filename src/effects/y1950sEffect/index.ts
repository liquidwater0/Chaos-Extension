import Effect from "@effects/Effect";
import "./index.scss";
import { Overlay } from "@effects/EffectElements";
import { DEFAULT_EFFECT_DURATION_MS, TAGS } from "@/constants/effects";

export default new Effect({
    id: "y1950sEffect",
    label: "1950s",
    durationMs: DEFAULT_EFFECT_DURATION_MS,
    tags: [TAGS.OVERLAY],
    activate,
    revert
});

function activate() {
    new Overlay({ id: "y1950sOverlay", pointerEvents: false });
}

function revert() {
    const y1950sOverlay = document.querySelector("[chaos-extension-overlay]#y1950sOverlay");
    if (!y1950sOverlay) return;
    y1950sOverlay.remove();
}