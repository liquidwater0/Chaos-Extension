export default class Overlay {
    constructor({ id, pointerEvents }: { id: string, pointerEvents: boolean }) {
        document.body.insertAdjacentHTML("afterbegin", `
            <div 
                data-extension="chaosExtension" 
                class="overlay ${pointerEvents ? '' : 'no-pointer-events'}" 
                id="${id}"
            />
        `);
    }
}