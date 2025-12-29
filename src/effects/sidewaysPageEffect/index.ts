import Effect from "@effects/Effect";
import "./index.scss";
import { DEFAULT_EFFECT_DURATION_MS, TAGS } from "@/constants/effects";

export default new Effect({
    id: "sidewaysPageEffect",
    label: "Sideways Page",
    durationMs: DEFAULT_EFFECT_DURATION_MS,
    tags: [TAGS.PAGE],
    activate,
    revert
});

function activate() {
    document.documentElement.classList.add("sideways-page-effect");
}

function revert() {
    document.documentElement.classList.remove("sideways-page-effect");
}