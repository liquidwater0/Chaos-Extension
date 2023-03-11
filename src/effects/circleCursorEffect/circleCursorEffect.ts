import Effect from "../../Effect";

new Effect({
    label: "Circle Cursor",
    id: "circleCursorEffect",
    defaultEnabled: true,
    activate,
    revert
});

function setCursorPosition({ pageX, pageY }: MouseEvent) {
    const cursorDiv = document.getElementById("circleCursor");

    cursorDiv.style.setProperty("--x", pageX.toString());
    cursorDiv.style.setProperty("--y", pageY.toString());
}

function activate() {
    document.documentElement.classList.add("circle-cursor-effect");

    const cursorDiv = document.createElement("div");

    cursorDiv.setAttribute("data-extension", "chaosExtension");
    cursorDiv.id = "circleCursor";
    cursorDiv.classList.add("circle-cursor");

    document.body.prepend(cursorDiv);
    document.documentElement.addEventListener("mousemove", setCursorPosition);
}

function revert() {
    document.documentElement.classList.remove("circle-cursor-effect");

    const cursorDiv = document.getElementById("circleCursor");

    if (cursorDiv) cursorDiv.remove();

    document.documentElement.removeEventListener("mousemove", setCursorPosition);
}