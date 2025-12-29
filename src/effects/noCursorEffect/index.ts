import Effect from "@effects/Effect";
import "./index.scss";
import { DEFAULT_EFFECT_DURATION_MS, TAGS } from "@/constants/effects";

export default new Effect({
    id: "noCursorEffect",
    label: "No Cursor",
    durationMs: DEFAULT_EFFECT_DURATION_MS,
    tags: [TAGS.CURSOR],
    activate,
    revert
});

function activate() {
    document.documentElement.classList.add("no-cursor-effect");
}

function revert() {
    document.documentElement.classList.remove("no-cursor-effect");
}