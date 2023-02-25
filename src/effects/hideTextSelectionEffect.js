export default {
    name: "Hide Text Selection",
    storageKey: "hideTextSelectionEffect",
    
    revert: () => document.documentElement.classList.remove("hide-text-selection-effect"),
    activate: () => document.documentElement.classList.add("hide-text-selection-effect")
}