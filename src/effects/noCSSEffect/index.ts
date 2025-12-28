import Effect from "@effects/Effect";
import { DEFAULT_EFFECT_DURATION_MS } from "@/constants/effects";

export default new Effect({
    id: "noCSSEffect",
    label: "No CSS",
    durationMs: DEFAULT_EFFECT_DURATION_MS,
    activate,
    revert
});

function activate() {
    const styleSheets = [...document.styleSheets].filter(styleSheet => {
        const isExtensionStyleTag = 
            (styleSheet.ownerNode as HTMLStyleElement).tagName === "STYLE" &&
            (styleSheet.ownerNode as HTMLStyleElement).hasAttribute("chaos-extension-style");

        return !isExtensionStyleTag;
    });

    styleSheets.forEach(styleSheet => styleSheet.disabled = true);
}

function revert() {
    const styleSheets = [...document.styleSheets].filter(styleSheet => {
        const isExtensionStyleTag = 
            (styleSheet.ownerNode as HTMLStyleElement).tagName === "STYLE" &&
            (styleSheet.ownerNode as HTMLStyleElement).hasAttribute("chaos-extension-style");

        return !isExtensionStyleTag;
    });
    
    styleSheets.forEach(styleSheet => styleSheet.disabled = false);
}