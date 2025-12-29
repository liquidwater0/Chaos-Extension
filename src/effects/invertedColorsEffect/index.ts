import Effect from "@effects/Effect";
import "./index.scss";
import { Overlay } from "@effects/EffectElements";
import { TAGS, DEFAULT_EFFECT_DURATION_MS } from "@/constants/effects";

export default new Effect({
    id: "invertedColorsEffect",
    label: "Inverted Colors",
    durationMs: DEFAULT_EFFECT_DURATION_MS,
    tags: [
        TAGS.OVERLAY, 
        TAGS.THEME_BACKGROUND, 
        TAGS.THEME_TEXT_COLOR
    ],
    activate,
    revert
});

function activate() {
    document.documentElement.classList.add("inverted-colors-effect");
    new Overlay({ id: "invertOverlay", pointerEvents: false });
}

function revert() {
    document.documentElement.classList.remove("inverted-colors-effect");

    const invertOverlay = document.querySelector("[chaos-extension-overlay]#invertOverlay");
    if (!invertOverlay) return;
    invertOverlay.remove();
}