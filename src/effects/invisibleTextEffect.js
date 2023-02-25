export default {
    name: "Invisible Text",
    storageKey: "invisibleTextEffect",
    
    revert: () => document.documentElement.classList.remove("invisible-text-effect"),
    activate: () => document.documentElement.classList.add("invisible-text-effect")
}