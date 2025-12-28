import Effect from "@effects/Effect";
import "./index.scss";
import { Cursor } from "@effects/EffectElements";
import { TAGS, DEFAULT_EFFECT_DURATION_MS } from "@/constants/effects";

export default new Effect({
    id: "circleCursorEffect",
    label: "Circle Cursor",
    durationMs: DEFAULT_EFFECT_DURATION_MS,
    tags: [TAGS.CURSOR],
    activate,
    revert
});

function setCursorPosition({ pageX, pageY }: MouseEvent) {
    const cursorDiv: HTMLDivElement | null = document.querySelector("[chaos-extension-cursor]#circleCursor");

    if (!cursorDiv) return;

    cursorDiv.style.setProperty("--x", pageX.toString());
    cursorDiv.style.setProperty("--y", pageY.toString());
}

function activate() {
    document.documentElement.classList.add("circle-cursor-effect");

    new Cursor({ id: "circleCursor" });
    
    document.documentElement.addEventListener("mousemove", setCursorPosition);
}

function revert() {
    document.documentElement.classList.remove("circle-cursor-effect");

    const cursorDiv = document.querySelector("[chaos-extension-cursor]#circleCursor");
    if (cursorDiv) cursorDiv.remove();

    document.documentElement.removeEventListener("mousemove", setCursorPosition);
}