export default {
    name: "Disable Text Selection",
    storageKey: "disableTextSelectionEffect",
    
    revert: () => document.documentElement.classList.remove("disable-text-selection-effect"),
    activate: () => document.documentElement.classList.add("disable-text-selection-effect")
}