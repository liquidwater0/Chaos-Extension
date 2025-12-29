import Effect from "@effects/Effect";

export default new Effect({
    id: "scrollToTopEffect",
    label: "Scroll To Top",
    activate,
    revert
});

function activate() {
    window.scrollTo(window.scrollX, 0);
}

function revert() {}