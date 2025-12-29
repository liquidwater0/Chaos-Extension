import Effect from "@effects/Effect";
import "./index.scss";
import { DEFAULT_EFFECT_DURATION_MS, TAGS } from "@/constants/effects";

export default new Effect({
    id: "invertedPageEffect",
    label: "Inverted Page",
    durationMs: DEFAULT_EFFECT_DURATION_MS,
    tags: [TAGS.PAGE],
    activate,
    revert
});

function activate() {
    document.documentElement.classList.add("inverted-page-effect");
}

function revert() {
    document.documentElement.classList.remove("inverted-page-effect");
}