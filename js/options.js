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

    chrome.storage.sync.get({themeSwitchChecked: true}, function(items) {
        if (items.themeSwitchChecked == true) {
            darkMode();
        } else {
            lightMode();
        }
    });
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
const disableEverythingEffectCheckbox = document.getElementById("disableEverythingEffectCheckbox");
const removeScrollbarsEffectCheckbox = document.getElementById("removeScrollbarsEffectCheckbox");
const newEffectTimerTextField = document.getElementById("newEffectTimerTextField");
const reloadPageEffectCheckbox = document.getElementById("reloadPageEffectCheckbox");
const getAlertEffectCheckbox = document.getElementById("getAlertEffectCheckbox");
const scrollToElementEffectCheckbox = document.getElementById("scrollToElementEffectCheckbox");
const invisibleTextCheckbox = document.getElementById("invisibleTextCheckbox");

function save() {
    chrome.storage.sync.set({
        "nothingEffectChecked": nothingEffectCheckbox.checked, "rainbowTextEffectChecked": rainbowTextEffectCheckbox.checked, "flipPageEffectChecked": flipPageEffectCheckbox.checked,
        "disableEverythingEffectChecked": disableEverythingEffectCheckbox.checked, "removeScrollbarsEffectChecked": removeScrollbarsEffectCheckbox.checked, 
        "newEffectTimer": newEffectTimerTextField.value.split(" ")[0], "reloadPageEffectChecked": reloadPageEffectCheckbox.checked, "getAlertEffectChecked": getAlertEffectCheckbox.checked,
        "scrollToElementEffectChecked": scrollToElementEffectCheckbox.checked, "invisibleTextChecked": invisibleTextCheckbox.checked
    }, function() {
        saveButton.textContent = "Saved!";
        setTimeout(function() { saveButton.textContent = "Save" }, 3000);

        chrome.storage.sync.get({ newEffectTimer: 10 }, function(items) {
            if (items.newEffectTimer == "") {
                newEffectTimerTextField.value = 10;
                save();
            } else {
                newEffectTimerTextField.value = (items.newEffectTimer == 1) ? `${items.newEffectTimer} second` : `${items.newEffectTimer} seconds`;
            }
        });
    });
}

function get() {
    chrome.storage.sync.get({
        currentTheme: "dark", themeSwitchChecked: true, nothingEffectChecked: true, rainbowTextEffectChecked: true, flipPageEffectChecked: true, disableEverythingEffectChecked: true,
        removeScrollbarsEffectChecked: true, newEffectTimer: 10, reloadPageEffectChecked: true, getAlertEffectChecked: true, scrollToElementEffectChecked: true, invisibleTextChecked: true
    }, function(items) {
        html.setAttribute("data-theme", items.currentTheme);
        themeSwitch.checked = items.themeSwitchChecked;
        nothingEffectCheckbox.checked = items.nothingEffectChecked;
        rainbowTextEffectCheckbox.checked = items.rainbowTextEffectChecked;
        flipPageEffectCheckbox.checked = items.flipPageEffectChecked;
        disableEverythingEffectCheckbox.checked = items.disableEverythingEffectChecked;
        removeScrollbarsEffectCheckbox.checked = items.removeScrollbarsEffectChecked;
        newEffectTimerTextField.value = (items.newEffectTimer == 1) ? `${items.newEffectTimer} second` : `${items.newEffectTimer} seconds`;
        reloadPageEffectCheckbox.checked = items.reloadPageEffectChecked;
        getAlertEffectCheckbox.checked = items.getAlertEffectChecked;
        scrollToElementEffectCheckbox.checked = items.scrollToElementEffectChecked;
        invisibleTextCheckbox.checked = items.invisibleTextChecked;
    });
}
