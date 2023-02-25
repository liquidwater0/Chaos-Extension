export default {
    name: "Small Text",
    storageKey: "smallTextEffect",

    revert: () => document.documentElement.classList.remove("small-text-effect"),
    activate: () => document.documentElement.classList.add("small-text-effect")
}