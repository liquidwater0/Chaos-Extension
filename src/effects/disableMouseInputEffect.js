import Overlay from "../utitilies/overlay";

export default {
    name: "Disable Mouse Input",
    storageKey: "disableMouseInputEffect",

    disableRightClick: event => event.preventDefault(),

    revert: function() { 
        document.documentElement.classList.remove("disable-mouse-input-effect");
        document.removeEventListener("contextmenu", this.disableRightClick);

        const disableOverlay = document.querySelector("[data-extension='chaosExtension']#disableOverlay");
        if (disableOverlay) disableOverlay.remove();
    },

    activate: function() {
        document.documentElement.classList.add("disable-mouse-input-effect");
        document.addEventListener("contextmenu", this.disableRightClick);

        new Overlay({ id: "disableOverlay", pointerEvents: true });
    }
}