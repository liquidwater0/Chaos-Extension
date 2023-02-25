export default {
    name: "Unselect All Text",
    storageKey: "unselectAllTextEffect",
    
    revert: () => {},
    activate: () => document.getSelection().selectAllChildren(document.head)
}