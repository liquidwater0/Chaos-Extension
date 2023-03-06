import Effect from "../Effect";

new Effect({
    label: "Scroll To The Top",
    id: "scrollToTheTopEffect",
    defaultEnabled: true,
    activate,
    revert
});

function activate() {
    window.scrollTo(window.scrollX, 0);
}

function revert() {}