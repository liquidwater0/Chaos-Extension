export default {
    name: "Big Text",
    storageKey: "bigTextEffect",

    revert: () => document.documentElement.classList.remove("big-text-effect"),
    activate: () => document.documentElement.classList.add("big-text-effect")
}