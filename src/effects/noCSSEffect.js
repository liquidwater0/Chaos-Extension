export default {
    name: "No CSS",
    storageKey: "noCSSEffect",
    
    revert: () => {
        const styleSheets = [...document.styleSheets];
        styleSheets.forEach(styleSheet => styleSheet.disabled = false);
    },

    activate: () => {
        const styleSheets = [...document.styleSheets];
        styleSheets.forEach(styleSheet => styleSheet.disabled = true);
    }
}