export default {
    name: "Spinning Page",
    storageKey: "spinningPageEffect",
    
    revert: () => document.documentElement.classList.remove("spinning-page-effect"),
    activate: () => document.documentElement.classList.add("spinning-page-effect")
}