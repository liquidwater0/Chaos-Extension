import Effect from "@effects/Effect";
import "./index.scss";
import { Overlay } from "@effects/EffectElements";
import { TAGS, DEFAULT_EFFECT_DURATION_MS } from "@/constants/effects";

export default new Effect({
    id: "rainbowEffect",
    label: "Rainbow",
    durationMs: DEFAULT_EFFECT_DURATION_MS,
    tags: [TAGS.OVERLAY],
    activate,
    revert
});

function activate() {
    new Overlay({ id: "rainbowOverlay", pointerEvents: false });
}

function revert() {
    const rainbowOverlay = document.querySelector("[chaos-extension-overlay]#rainbowOverlay");
    if (!rainbowOverlay) return;
    rainbowOverlay.remove();
}