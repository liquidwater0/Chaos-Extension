import Effect from "@effects/Effect";
import "./index.scss";
import { Cursor } from "@effects/EffectElements";
import { DEFAULT_EFFECT_DURATION_MS, TAGS } from "@/constants/effects";

export default new Effect({
    id: "squareCursorEffect",
    label: "Square Cursor",
    durationMs: DEFAULT_EFFECT_DURATION_MS,
    tags: [TAGS.CURSOR],
    activate,
    revert
});

function setCursorPosition({ pageX, pageY }: MouseEvent) {
    const cursorDiv: HTMLDivElement | null = document.querySelector("[chaos-extension-cursor]#squareCursor");

    if (!cursorDiv) return;

    cursorDiv.style.setProperty("--x", pageX.toString());
    cursorDiv.style.setProperty("--y", pageY.toString());
}

function activate() {
    document.documentElement.classList.add("square-cursor-effect");

    new Cursor({ id: "squareCursor" });

    document.documentElement.addEventListener("mousemove", setCursorPosition);
}

function revert() {
    document.documentElement.classList.remove("square-cursor-effect");

    const cursorDiv = document.querySelector("[chaos-extension-cursor]#squareCursor");
    if (cursorDiv) cursorDiv.remove();

    document.documentElement.removeEventListener("mousemove", setCursorPosition);
}