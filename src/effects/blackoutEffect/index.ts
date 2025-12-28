import Effect from "@effects/Effect";
import "./index.scss";
import { Overlay } from "@effects/EffectElements";
import { DEFAULT_EFFECT_DURATION_MS, TAGS } from "@/constants/effects";

export default new Effect({
    id: "blackoutEffect",
    label: "Blackout",
    durationMs: DEFAULT_EFFECT_DURATION_MS,
    tags: [TAGS.OVERLAY],
    activate,
    revert
});

function activate() {
    new Overlay({ id: "blackoutOverlay", pointerEvents: false });
}

function revert() {
    const blackoutOverlay = document.querySelector("[chaos-extension-overlay]#blackoutOverlay");
    if (!blackoutOverlay) return;
    blackoutOverlay.remove();
}