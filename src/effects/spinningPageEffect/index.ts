import Effect from "@effects/Effect";
import "./index.scss";
import { DEFAULT_EFFECT_DURATION_MS, TAGS } from "@/constants/effects";

export default new Effect({
    id: "spinningPageEffect",
    label: "Spinning Page",
    durationMs: DEFAULT_EFFECT_DURATION_MS,
    tags: [TAGS.PAGE, TAGS.OVERLAY],
    activate,
    revert
});

function activate() {
    document.documentElement.classList.add("spinning-page-effect");
}

function revert() {
    document.documentElement.classList.remove("spinning-page-effect");
}