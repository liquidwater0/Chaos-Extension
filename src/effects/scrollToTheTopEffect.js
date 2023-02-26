import initEffect from "../initEffect";

initEffect({
    effectName: "scrollToTheTop",
    label: "Scroll To The Top",
    storageKey: "scrollToTheTopEffect",
    defaultEnabled: true,
    activate,
    revert
});

function activate() {
    window.scrollTo(window.scrollX, 0);
}

function revert() {}