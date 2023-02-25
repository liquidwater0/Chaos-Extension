export default {
    name: "Design Mode",
    storageKey: "designModeEffect",
    
    revert: () => document.designMode = "off",
    activate: () => document.designMode = "on"
}