import Effect from "@effects/Effect";
import "./index.scss";
import { DEFAULT_EFFECT_DURATION_MS, TAGS } from "@/constants/effects";

export default new Effect({
    id: "terminalifyEffect",
    label: "Terminalify",
    durationMs: DEFAULT_EFFECT_DURATION_MS,
    tags: [
        TAGS.OVERLAY, 
        TAGS.TEXT, 
        TAGS.TEXT_SELECTION,
        TAGS.CURSOR
    ],
    activate,
    revert
});

function activate() {
    document.documentElement.classList.add("terminalify-effect");
}

function revert() {
    document.documentElement.classList.remove("terminalify-effect");

    const elements = document.querySelectorAll<HTMLElement>("*:not([chaos-extension-element])");

    elements.forEach(element => {
        if (!element) return;
    });
}