import Effect from "@effects/Effect";
import "./index.scss";
import { TAGS, DEFAULT_EFFECT_DURATION_MS } from "@/constants/effects";

export default new Effect({
    id: "hideTextSelectionEffect",
    label: "Hide Text Selection",
    durationMs: DEFAULT_EFFECT_DURATION_MS,
    tags: [TAGS.TEXT_SELECTION],
    activate,
    revert
});

function activate() {
    document.documentElement.classList.add("hide-text-selection-effect");
}

function revert() {
    document.documentElement.classList.remove("hide-text-selection-effect");
}