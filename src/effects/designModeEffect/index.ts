import Effect from "@effects/Effect";
import { DEFAULT_EFFECT_DURATION_MS } from "@/constants/effects";

export default new Effect({
    id: "designModeEffect",
    label: "Design Mode",
    durationMs: DEFAULT_EFFECT_DURATION_MS,
    activate,
    revert
});

function activate() {
    document.designMode = "on";
}

function revert() {
    document.designMode = "off";
}