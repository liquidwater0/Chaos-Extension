import Effect from "@effects/Effect";
import "./index.scss";
import { DEFAULT_EFFECT_DURATION_MS, TAGS } from "@/constants/effects";
import { getRandomNumber } from "@/utilities";

export default new Effect({
    id: "randomTextColorEffect",
    label: "Random Text Color",
    durationMs: DEFAULT_EFFECT_DURATION_MS,
    tags: [TAGS.TEXT],
    activate,
    revert
});

function activate() {
    const html = document.documentElement;
    const randomTextColor = `rgb(${getRandomNumber(0, 255)}, ${getRandomNumber(0, 255)}, ${getRandomNumber(0, 255)})`;

    html.classList.add("random-text-color-effect");
    html.style.setProperty("--random-text-color", randomTextColor);
}

function revert() {
    const html = document.documentElement;

    html.classList.remove("random-text-color-effect");
    html.style.removeProperty("--random-text-color");
}