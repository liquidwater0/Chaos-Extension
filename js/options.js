const manifest = chrome.runtime.getManifest();
const version = document.getElementById("optionsVersion");
const saveButton = document.getElementById("saveButton");
const html = document.querySelector("html");

version.textContent = `Chaos Extension v${manifest.version}`;

document.addEventListener("DOMContentLoaded", get);
saveButton.addEventListener("click", save);

const themeSwitch = document.getElementById("themeSwitch");

themeSwitch.addEventListener("input", function() {
    chrome.storage.sync.set({"themeSwitchChecked": themeSwitch.checked});

    if (themeSwitch.checked == true) {
        darkMode();
    } else {
        lightMode();
    }
});

function lightMode() {
    html.setAttribute("data-theme", "light");
    saveTheme();
}

function darkMode() {
    html.setAttribute("data-theme", "dark");
    saveTheme();
}

function saveTheme() {
    chrome.storage.sync.set({"currentTheme": html.getAttribute("data-theme")});
}

const selectAllEffectsButton = document.getElementById("selectAllEffectsButton");
const effectsCheckboxes = document.querySelectorAll("#effectsCheckboxes input[type='checkbox']");

let effectsCheckState;

selectAllEffectsButton.addEventListener("click", function() {
    effectsCheckState = !effectsCheckState;

    effectsCheckboxes.forEach(function(checkbox) {
        checkbox.checked = effectsCheckState;
    });
});

const nothingEffectCheckbox = document.getElementById("nothingEffectCheckbox")
const rainbowTextEffectCheckbox = document.getElementById("rainbowTextEffectCheckbox");
const flipPageEffectCheckbox = document.getElementById("flipPageEffectCheckbox");
const disableMouseInputEffectCheckbox = document.getElementById("disableMouseInputEffectCheckbox");
const disableScrollingEffectCheckbox = document.getElementById("disableScrollingEffectCheckbox");
const newEffectTimerTextField = document.getElementById("newEffectTimerTextField");
const reloadPageEffectCheckbox = document.getElementById("reloadPageEffectCheckbox");
const getAlertEffectCheckbox = document.getElementById("getAlertEffectCheckbox");
const scrollToElementEffectCheckbox = document.getElementById("scrollToElementEffectCheckbox");
const invisibleTextCheckbox = document.getElementById("invisibleTextCheckbox");
const halfSizeEffectCheckbox = document.getElementById("halfSizeEffectCheckbox");
const randomTextSelectEffectCheckbox = document.getElementById("randomTextSelectEffectCheckbox");
const terminalEffectCheckbox = document.getElementById("terminalEffectCheckbox");
const removeImagesEffectCheckbox = document.getElementById("removeImagesEffectCheckbox");
const blurryVisionEffectCheckbox = document.getElementById("blurryVisionEffectCheckbox");
const y1950sEffectCheckbox = document.getElementById("y1950sEffectCheckbox");
const hideScrollbarsEffectCheckbox = document.getElementById("hideScrollbarsEffectCheckbox");

function save() {
    chrome.storage.sync.set({
        "nothingEffectChecked": nothingEffectCheckbox.checked, "rainbowTextEffectChecked": rainbowTextEffectCheckbox.checked, "flipPageEffectChecked": flipPageEffectCheckbox.checked,
        "disableMouseInputEffectChecked": disableMouseInputEffectCheckbox.checked, "disableScrollingEffectChecked": disableScrollingEffectCheckbox.checked, 
        "newEffectTimer": newEffectTimerTextField.value.split(" ")[0], "reloadPageEffectChecked": reloadPageEffectCheckbox.checked, "getAlertEffectChecked": getAlertEffectCheckbox.checked,
        "scrollToElementEffectChecked": scrollToElementEffectCheckbox.checked, "invisibleTextChecked": invisibleTextCheckbox.checked, "halfSizeEffectChecked": halfSizeEffectCheckbox.checked,
        "randomTextSelectEffectChecked": randomTextSelectEffectCheckbox.checked, "terminalEffectChecked": terminalEffectCheckbox.checked, "removeImagesEffectChecked": removeImagesEffectCheckbox.checked,
        "blurryVisionEffectChecked": blurryVisionEffectCheckbox.checked, "y1950sEffectChecked": y1950sEffectCheckbox.checked, "hideScrollbarsEffectChecked": hideScrollbarsEffectCheckbox.checked
    }, function() {
        saveButton.textContent = "Saved!";
        setTimeout(function() { saveButton.textContent = "Save" }, 3000);

        chrome.storage.sync.get({ newEffectTimer: 10 }, function(items) {
            if (items.newEffectTimer == "") {
                newEffectTimerTextField.value = 10;
                save();
            } else if (items.newEffectTimer < 1) {
                newEffectTimerTextField.value = 1;
                save();
            } else {
                newEffectTimerTextField.value = (items.newEffectTimer == 1) ? `${items.newEffectTimer} second` : `${items.newEffectTimer} seconds`;
            }
        });
    });
}

function get() {
    chrome.storage.sync.get({
        currentTheme: "dark", themeSwitchChecked: true, nothingEffectChecked: true, rainbowTextEffectChecked: true, flipPageEffectChecked: true, disableMouseInputEffectChecked: true,
        disableScrollingEffectChecked: true, newEffectTimer: 10, reloadPageEffectChecked: true, getAlertEffectChecked: true, scrollToElementEffectChecked: true, invisibleTextChecked: true,
        halfSizeEffectChecked: true, randomTextSelectEffectChecked: true, terminalEffectChecked: true, removeImagesEffectChecked: true, blurryVisionEffectChecked: true, y1950sEffectChecked: true,
        hideScrollbarsEffectChecked: true
    }, function(items) {
        html.setAttribute("data-theme", items.currentTheme);
        themeSwitch.checked = items.themeSwitchChecked;
        nothingEffectCheckbox.checked = items.nothingEffectChecked;
        rainbowTextEffectCheckbox.checked = items.rainbowTextEffectChecked;
        flipPageEffectCheckbox.checked = items.flipPageEffectChecked;
        disableMouseInputEffectCheckbox.checked = items.disableMouseInputEffectChecked;
        disableScrollingEffectCheckbox.checked = items.disableScrollingEffectChecked;
        newEffectTimerTextField.value = (items.newEffectTimer == 1) ? `${items.newEffectTimer} second` : `${items.newEffectTimer} seconds`;
        reloadPageEffectCheckbox.checked = items.reloadPageEffectChecked;
        getAlertEffectCheckbox.checked = items.getAlertEffectChecked;
        scrollToElementEffectCheckbox.checked = items.scrollToElementEffectChecked;
        invisibleTextCheckbox.checked = items.invisibleTextChecked;
        halfSizeEffectCheckbox.checked = items.halfSizeEffectChecked;
        randomTextSelectEffectCheckbox.checked = items.randomTextSelectEffectChecked;
        terminalEffectCheckbox.checked = items.terminalEffectChecked;
        removeImagesEffectCheckbox.checked = items.removeImagesEffectChecked;
        blurryVisionEffectCheckbox.checked = items.blurryVisionEffectChecked;
        y1950sEffectCheckbox.checked = items.y1950sEffectChecked;
        hideScrollbarsEffectCheckbox.checked = items.hideScrollbarsEffectChecked;
    });
}
