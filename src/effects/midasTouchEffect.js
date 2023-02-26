import initEffect from "../initEffect";

initEffect({
    effectName: "midasTouch",
    label: "Midas Touch",
    storageKey: "midasTouchEffect",
    defaultEnabled: true,
    activate,
    revert
});

function makeGold(event) {
    event.target.classList.add("midas-touch-gold");
}

function activate() {
    document.documentElement.classList.add("midas-touch-effect");
    document.addEventListener("click", makeGold);
}

function revert() {
    document.documentElement.classList.remove("midas-touch-effect");
    document.removeEventListener("click", makeGold);

    const elements = document.querySelectorAll("*");
    elements.forEach(element => element.classList.remove("midas-touch-gold"));
}