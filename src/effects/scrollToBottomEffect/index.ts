import Effect from "@effects/Effect";

export default new Effect({
    id: "scrollToBottomEffect",
    label: "Scroll To Bottom",
    activate,
    revert
});

function activate() {
    window.scrollTo(window.scrollX, document.body.scrollHeight);
}

function revert() {}