export default {
    name: "Disable Scrolling",
    storageKey: "disableScrollingEffect",
    
    revert: () => document.documentElement.classList.remove("disable-scrolling-effect"),
    activate: () =>  document.documentElement.classList.add("disable-scrolling-effect")
}