export default {
    name: "Sideways Page",
    storageKey: "sidewaysPageEffect",

    revert: () => document.documentElement.classList.remove("sideways-page-effect"),
    activate: () => document.documentElement.classList.add("sideways-page-effect")
}