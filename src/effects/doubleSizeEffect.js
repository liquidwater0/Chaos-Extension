export default {
    name: "Double Size",
    storageKey: "doubleSizeEffect",

    revert: () => document.documentElement.classList.remove("double-size-effect"),
    activate: () => document.documentElement.classList.add("double-size-effect")
}