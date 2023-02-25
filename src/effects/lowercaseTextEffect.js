export default {
    name: "Lowercase Text",
    storageKey: "lowercaseTextEffect",

    revert: () => document.documentElement.classList.remove("lowercase-text-effect"),
    activate: () => document.documentElement.classList.add("lowercase-text-effect")
}