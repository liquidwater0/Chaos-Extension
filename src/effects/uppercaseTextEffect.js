export default {
    name: "Uppercase Text",
    storageKey: "uppercaseTextEffect",

    revert: () => document.documentElement.classList.remove("uppercase-text-effect"),
    activate: () => document.documentElement.classList.add("uppercase-text-effect")
}