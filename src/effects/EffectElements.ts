import "./effectElements.scss";

export class Overlay {
    constructor({ id, pointerEvents }: { id: string, pointerEvents: boolean }) {
        document.body.insertAdjacentHTML("afterbegin", `
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
        document.body.insertAdjacentHTML("afterbegin", `
            <div 
                chaos-extension-element
                chaos-extension-cursor
                id="${id}"
            />
        `);
    }
}