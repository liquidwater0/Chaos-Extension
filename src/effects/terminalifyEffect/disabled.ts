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

    const elements = document.querySelectorAll<HTMLElement>("*:not([chaos-extension-element])");

    elements.forEach(element => {
        if (!element) return;

        const parts = window.getComputedStyle(element).getPropertyValue("background-color").match(/[\d.]+/g);
        const terminalifyBackgroundColor = `rgb(25 25 25 / ${parts![3]})`;

        element.style.setProperty("--terminalify-background", terminalifyBackgroundColor);
    });
}

function revert() {
    document.documentElement.classList.remove("terminalify-effect");

    const elements = document.querySelectorAll<HTMLElement>("*:not([chaos-extension-element])");

    elements.forEach(element => {
        if (!element) return;
        element.style.removeProperty("--terminalify-background");
    });
}