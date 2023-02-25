export default {
    name: "Roll",
    storageKey: "rollEffect",
    
    revert: () => document.documentElement.classList.remove("roll-effect"),
    activate: () => document.documentElement.classList.add("roll-effect")
}