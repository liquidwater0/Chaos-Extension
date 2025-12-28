import Effect from "@effects/Effect";
import "./index.scss";
import { TAGS, DEFAULT_EFFECT_DURATION_MS } from "@/constants/effects";

export default new Effect({
    id: "comicSansEffect",
    label: "Comic Sans",
    durationMs: DEFAULT_EFFECT_DURATION_MS,
    tags: [TAGS.FONT],
    activate,
    revert
});

function activate() {
    document.documentElement.classList.add("comic-sans-effect");
}

function revert() {
    document.documentElement.classList.remove("comic-sans-effect");
}