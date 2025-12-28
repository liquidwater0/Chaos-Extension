import Effect from "@effects/Effect";
import "./index.scss";
import { DEFAULT_EFFECT_DURATION_MS, TAGS } from "@/constants/effects";

export default new Effect({
    id: "disableScrollingEffect",
    label: "Disable Scrolling",
    durationMs: DEFAULT_EFFECT_DURATION_MS,
    tags: [TAGS.SCROLLBAR],
    activate,
    revert
});

function activate() {
    document.documentElement.classList.add("disable-scrolling-effect");
}

function revert() {
    document.documentElement.classList.remove("disable-scrolling-effect");
}