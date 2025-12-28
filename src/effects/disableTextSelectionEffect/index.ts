import Effect from "@effects/Effect";
import "./index.scss";
import { DEFAULT_EFFECT_DURATION_MS, TAGS } from "@/constants/effects";

export default new Effect({
    id: "disableTextSelectionEffect",
    label: "Disable Text Selection",
    durationMs: DEFAULT_EFFECT_DURATION_MS,
    tags: [TAGS.TEXT_SELECTION],
    activate,
    revert
});

function activate() {
    document.documentElement.classList.add("disable-text-selection-effect");
}

function revert() {
    document.documentElement.classList.remove("disable-text-selection-effect");
}