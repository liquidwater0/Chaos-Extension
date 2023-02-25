export default {
    name: "Get Alert",
    storageKey: "getAlertEffect",
    
    revert: () => {},
    activate: () => setTimeout(() => alert("Alert!"), 250)
}