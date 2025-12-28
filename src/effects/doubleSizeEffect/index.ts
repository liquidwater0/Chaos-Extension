import Effect from "@effects/Effect";
import "./index.scss";
import { DEFAULT_EFFECT_DURATION_MS, TAGS } from "@/constants/effects";

export default new Effect({
    id: "doubleSizeEffect",
    label: "Double Size",
    durationMs: DEFAULT_EFFECT_DURATION_MS,
    tags: [TAGS.SIZE, TAGS.CURSOR, TAGS.OVERLAY],
    activate,
    revert
});

function activate() {
    document.documentElement.classList.add("double-size-effect");
}

function revert() {
    document.documentElement.classList.remove("double-size-effect");
}