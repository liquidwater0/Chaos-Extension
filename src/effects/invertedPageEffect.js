export default {
    name: "Inverted Page",
    storageKey: "invertedPageEffect",

    revert: () => document.documentElement.classList.remove("inverted-page-effect"),
    activate: () => document.documentElement.classList.add("inverted-page-effect")
}