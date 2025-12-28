import Effect from "@effects/Effect";
import "./index.scss";
import { TAGS, DEFAULT_EFFECT_DURATION_MS } from "@/constants/effects";

export default new Effect({
    id: "hideScrollbarsEffect",
    label: "Hide Scrollbars",
    durationMs: DEFAULT_EFFECT_DURATION_MS,
    tags: [TAGS.SCROLLBAR],
    activate,
    revert
});

function activate() {
    document.documentElement.classList.add("hide-scrollbars-effect");
}

function revert() {
    document.documentElement.classList.remove("hide-scrollbars-effect");
}