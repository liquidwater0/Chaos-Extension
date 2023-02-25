export default {
    name: "Comic Sans",
    storageKey: "comicSansEffect",
    
    revert: () => document.documentElement.classList.remove("comic-sans-effect"),
    activate: () => document.documentElement.classList.add("comic-sans-effect")
}