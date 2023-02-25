export default {
    name: "Upside Down",
    storageKey: "upsideDownEffect",

    revert: () => document.documentElement.classList.remove("upside-down-effect"),
    activate: () => document.documentElement.classList.add("upside-down-effect")
}