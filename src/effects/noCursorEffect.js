export default {
    name: "No Cursor",
    storageKey: "noCursorEffect",
    
    revert: () => document.documentElement.classList.remove("no-cursor-effect"),
    activate: () => document.documentElement.classList.add("no-cursor-effect")
}