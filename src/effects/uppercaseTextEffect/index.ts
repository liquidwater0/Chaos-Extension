import Effect from "@effects/Effect";
import "./index.scss";
import { DEFAULT_EFFECT_DURATION_MS, TAGS } from "@/constants/effects";

export default new Effect({
    id: "uppercaseTextEffect",
    label: "Uppercase Text",
    durationMs: DEFAULT_EFFECT_DURATION_MS,
    tags: [TAGS.TEXT_CASE],
    activate,
    revert
});

function activate() {
    document.documentElement.classList.add("uppercase-text-effect");
}

function revert() {
    document.documentElement.classList.remove("uppercase-text-effect");
}