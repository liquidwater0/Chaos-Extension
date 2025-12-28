import Effect from "@effects/Effect";
import "./index.scss";
import { Overlay } from "@effects/EffectElements";
import { DEFAULT_EFFECT_DURATION_MS, TAGS } from "@/constants/effects";

export default new Effect({
    id: "blurryVisionEffect",
    label: "Blurry Vision",
    durationMs: DEFAULT_EFFECT_DURATION_MS,
    tags: [TAGS.OVERLAY],
    activate,
    revert
});

function activate() {
    new Overlay({ id: "blurOverlay", pointerEvents: false });
}

function revert() {
    const blurOverlay = document.querySelector("[chaos-extension-overlay]#blurOverlay");
    if (!blurOverlay) return;
    blurOverlay.remove();
}