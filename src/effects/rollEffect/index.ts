import Effect from "@effects/Effect";
import "./index.scss";
import { DEFAULT_EFFECT_DURATION_MS, TAGS } from "@/constants/effects";

export default new Effect({
    id: "rollEffect",
    label: "Roll",
    durationMs: DEFAULT_EFFECT_DURATION_MS,
    tags: [TAGS.PAGE],
    activate,
    revert
});

function activate() {
    document.documentElement.classList.add("roll-effect");
}

function revert() {
    document.documentElement.classList.remove("roll-effect");
}