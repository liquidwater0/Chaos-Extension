import Effect from "@effects/Effect";
import "./index.scss";
import { Overlay } from "@effects/EffectElements";
import { DEFAULT_EFFECT_DURATION_MS, TAGS } from "@/constants/effects";

export default new Effect({
    id: "vignetteEffect",
    label: "Vignette",
    durationMs: DEFAULT_EFFECT_DURATION_MS,
    tags: [TAGS.OVERLAY],
    activate,
    revert
});

function activate() {
    new Overlay({ id: "vignetteOverlay", pointerEvents: false });
}

function revert() {
    const vignetteOverlay = document.querySelector("[chaos-extension-overlay]#vignetteOverlay");
    if (!vignetteOverlay) return;
    vignetteOverlay.remove();
}