import Effect from "@effects/Effect";
import "./index.scss";
import { DEFAULT_EFFECT_DURATION_MS, TAGS } from "@/constants/effects";

export default new Effect({
    id: "upsideDownEffect",
    label: "Upside Down",
    durationMs: DEFAULT_EFFECT_DURATION_MS,
    tags: [TAGS.PAGE],
    activate,
    revert
});

function activate() {
    document.documentElement.classList.add("upside-down-effect");
}

function revert() {
    document.documentElement.classList.remove("upside-down-effect");
}