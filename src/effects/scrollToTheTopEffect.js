export default {
    name: "Scroll To The Top",
    storageKey: "scrollToTheTopEffect",
    
    revert: () => {},
    activate: () => window.scrollTo(window.scrollX, 0)
}