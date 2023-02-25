export default class Overlay {
    constructor({ id, pointerEvents }) {
        document.body.insertAdjacentHTML("afterbegin", `
            <div 
                data-extension="chaosExtension" 
                class="overlay ${pointerEvents ? '' : 'no-pointer-events'}" 
                id="${id}"
            />
        `);
    }
}