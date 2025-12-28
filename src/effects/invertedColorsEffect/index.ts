import Effect from "@effects/Effect";
import "./index.scss";
import { Overlay } from "@effects/EffectElements";
import { TAGS, DEFAULT_EFFECT_DURATION_MS } from "@/constants/effects";

export default new Effect({
    id: "invertedColorsEffect",
    label: "Inverted Colors",
    durationMs: DEFAULT_EFFECT_DURATION_MS,
    tags: [TAGS.OVERLAY],
    activate,
    revert
});

function activate() {
    new Overlay({ id: "invertOverlay", pointerEvents: false });
}

function revert() {
    const invertOverlay = document.querySelector("[chaos-extension-overlay]#invertOverlay");
    if (!invertOverlay) return;
    invertOverlay.remove();
}