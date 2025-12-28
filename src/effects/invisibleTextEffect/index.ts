import Effect from "@effects/Effect";
import "./index.scss";
import { DEFAULT_EFFECT_DURATION_MS, TAGS } from "@/constants/effects";

export default new Effect({
    id: "invisibleTextEffect",
    label: "Invisible Text",
    durationMs: DEFAULT_EFFECT_DURATION_MS,
    tags: [TAGS.TEXT],
    activate,
    revert
});

function activate() {
    document.documentElement.classList.add("invisible-text-effect");
}

function revert() {
    document.documentElement.classList.remove("invisible-text-effect");
}