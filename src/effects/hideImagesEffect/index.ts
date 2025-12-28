import Effect from "@effects/Effect";
import "./index.scss";
import { DEFAULT_EFFECT_DURATION_MS, TAGS } from "@/constants/effects";

export default new Effect({
    id: "hideImagesEffect",
    label: "Hide Images",
    durationMs: DEFAULT_EFFECT_DURATION_MS,
    tags: [TAGS.IMAGES],
    activate,
    revert
});

function activate() {
    document.documentElement.classList.add("hide-images-effect");
}

function revert() {
    document.documentElement.classList.remove("hide-images-effect");
}