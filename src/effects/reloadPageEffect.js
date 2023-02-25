export default {
    name: "Reload Page",
    storageKey: "reloadPageEffect",
    
    revert: () => {},
    activate: () => setTimeout(() => window.location.reload(), 250)
}