import Effect from "../../Effect";

new Effect({
    label: "Midas Touch",
    id: "midasTouchEffect",
    defaultEnabled: true,
    activate,
    revert
});

function makeGold(event: MouseEvent) {
    (event.target as HTMLElement).classList.add("midas-touch-gold");
}

function activate() {
    document.documentElement.classList.add("midas-touch-effect");
    document.addEventListener("click", makeGold);
}

function revert() {
    document.documentElement.classList.remove("midas-touch-effect");
    document.removeEventListener("click", makeGold);

    const elements = document.querySelectorAll<HTMLElement>("*");
    elements.forEach(element => element.classList.remove("midas-touch-gold"));
}