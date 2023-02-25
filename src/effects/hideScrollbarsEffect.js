export default {
    name: "Hide Scrollbars",
    storageKey: "hideScrollbarsEffect",
    
    revert: () => document.documentElement.classList.remove("hide-scrollbars-effect"),
    activate: () => document.documentElement.classList.add("hide-scrollbars-effect")
}