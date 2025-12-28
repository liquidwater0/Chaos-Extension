import Effect from "@effects/Effect";
import "./index.scss";
import { DEFAULT_EFFECT_DURATION_MS, TAGS } from "@/constants/effects";

export default new Effect({
    id: "smallTextEffect",
    label: "Small Text",
    durationMs: DEFAULT_EFFECT_DURATION_MS,
    tags: [TAGS.TEXT_SIZE],
    activate,
    revert
});

function activate() {
    document.documentElement.classList.add("small-text-effect");
}

function revert() {
    document.documentElement.classList.remove("small-text-effect");
}