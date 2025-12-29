import Effect from "@effects/Effect";
import "./index.scss";
import { TAGS, DEFAULT_EFFECT_DURATION_MS } from "@/constants/effects";

export default new Effect({
    id: "halfSizeEffect",
    label: "Half Size",
    durationMs: DEFAULT_EFFECT_DURATION_MS,
    tags: [TAGS.SIZE],
    activate,
    revert
});

function activate() {
    document.documentElement.classList.add("half-size-effect");
}

function revert() {
    document.documentElement.classList.remove("half-size-effect");
}