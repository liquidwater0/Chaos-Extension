import Effect from "../../Effect";

new Effect({
    label: "Square Cursor",
    id: "squareCursorEffect",
    defaultEnabled: true,
    activate,
    revert
});

function setCursorPosition({ pageX, pageY }: MouseEvent) {
    const cursorDiv = document.getElementById("squareCursor");

    cursorDiv.style.setProperty("--x", pageX.toString());
    cursorDiv.style.setProperty("--y", pageY.toString());
}

function activate() {
    document.documentElement.classList.add("square-cursor-effect");

    const cursorDiv = document.createElement("div");

    cursorDiv.setAttribute("data-extension", "chaosExtension");
    cursorDiv.id = "squareCursor";
    cursorDiv.classList.add("square-cursor");

    document.body.prepend(cursorDiv);
    document.documentElement.addEventListener("mousemove", setCursorPosition);
}

function revert() {
    document.documentElement.classList.remove("square-cursor-effect");

    const cursorDiv = document.getElementById("squareCursor");

    if (cursorDiv) cursorDiv.remove();

    document.documentElement.removeEventListener("mousemove", setCursorPosition);
}