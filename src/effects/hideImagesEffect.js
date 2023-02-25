export default {
    name: "Hide Images",
    storageKey: "hideImagesEffect",
    
    revert: () => document.documentElement.classList.remove("hide-images-effect"),
    activate: () => document.documentElement.classList.add("hide-images-effect")
}