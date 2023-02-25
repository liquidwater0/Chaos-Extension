export default {
    name: "Half Size",
    storageKey: "halfSizeEffect",
    
    revert: () => document.documentElement.classList.remove("half-size-effect"),
    activate: () => document.documentElement.classList.add("half-size-effect")
}