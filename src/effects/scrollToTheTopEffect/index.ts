import Effect from "@effects/Effect";

export default new Effect({
    id: "scrollToTheTopEffect",
    label: "Scroll To The Top",
    activate,
    revert
});

function activate() {
    window.scrollTo(window.scrollX, 0);
}

function revert() {}