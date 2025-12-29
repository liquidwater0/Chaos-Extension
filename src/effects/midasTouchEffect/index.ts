import Effect from "@effects/Effect";
import "./index.scss";
import { DEFAULT_EFFECT_DURATION_MS, TAGS } from "@/constants/effects";

export default new Effect({
    id: "midasTouchEffect",
    label: "Midas Touch",
    durationMs: DEFAULT_EFFECT_DURATION_MS,
    tags: [TAGS.THEME_BACKGROUND, TAGS.THEME_TEXT_COLOR],
    activate,
    revert
});

function makeGold(event: MouseEvent) {
    (event.target as HTMLElement).classList.add("midas-touch-gold");
}

function activate() {
    document.documentElement.classList.add("midas-touch-effect");
    document.addEventListener("click", makeGold);
}

function revert() {
    document.documentElement.classList.remove("midas-touch-effect");
    document.removeEventListener("click", makeGold);

    const elements = document.querySelectorAll<HTMLElement>("*");
    elements.forEach(element => element.classList.remove("midas-touch-gold"));
}