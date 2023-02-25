export default {
    name: "Select All Text",
    storageKey: "selectAllTextEffect",
    
    revert: () => {},
    activate: () => document.getSelection().selectAllChildren(document.body)
}