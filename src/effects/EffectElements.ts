import "./effectElements.scss";

export class Overlay {
    constructor({ id, pointerEvents }: { id: string, pointerEvents: boolean }) {
        document.documentElement.insertAdjacentHTML("afterbegin", `
            <div 
                chaos-extension-element
                chaos-extension-overlay
                chaos-extension-pointer-events="${pointerEvents ? "true" : "false"}"
                id="${id}"
            />
        `);
    }
}

export class Cursor {
    constructor({ id }: { id: string }) {
        document.documentElement.insertAdjacentHTML("afterbegin", `
            <div 
                chaos-extension-element
                chaos-extension-cursor
                id="${id}"
            />
        `);
    }
}