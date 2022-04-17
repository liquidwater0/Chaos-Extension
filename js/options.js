const html = document.documentElement;
const manifest = chrome.runtime.getManifest();
const version = document.getElementById("optionsVersion");
const saveButton = document.getElementById("saveButton");

version.textContent = `Chaos Extension v${manifest.version}`;

document.addEventListener("DOMContentLoaded", get);
saveButton.addEventListener("click", save);

const themeChangerButton = document.getElementById("themeChanger");
const themeChangerIcon = document.querySelector("#themeChanger i.material-icons");

themeChangerButton.addEventListener("click", changeTheme);

let isDarkTheme;

function updateTheme() {
    chrome.storage.sync.get({
        currentTheme: "dark"
    }, items => {
        isDarkTheme = (items.currentTheme === "dark") ? true : false;
        themeChangerIcon.textContent = (items.currentTheme === "dark") ? "brightness_7" : "brightness_4";
        html.setAttribute("data-theme", items.currentTheme);
    });
}

function changeTheme() {
    isDarkTheme = !isDarkTheme;
    chrome.storage.sync.set({ "currentTheme": isDarkTheme ? "dark" : "light" });
    updateTheme();
}

const newEffectTimerTextField = document.getElementById("newEffectTimerTextField");
const selectAllEffectsButton = document.getElementById("selectAllEffectsButton");
const effectsCheckboxes = document.querySelectorAll("#effectsCheckboxes input[data-checkbox]");

let effectsCheckState;

selectAllEffectsButton.addEventListener("click", () => {
    effectsCheckState = !effectsCheckState;
    effectsCheckboxes.forEach(checkbox => checkbox.checked = effectsCheckState);
});


function save() {
    const checkStates = new Map([]);

    effectsCheckboxes.forEach(checkbox => {
        checkStates.set(checkbox.getAttribute("data-checkbox"), checkbox.checked);
    });

    chrome.storage.sync.set({
        "newEffectTimer": newEffectTimerTextField.value.split(" ")[0], "checkStates": Object.fromEntries(checkStates)
    }, () => {
        saveButton.textContent = "Saved!";
        setTimeout(() => { saveButton.textContent = "Save" }, 3000);

        chrome.storage.sync.get({ newEffectTimer: 10 }, items => {
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
        currentTheme: "dark", newEffectTimer: 10, checkStates: {}
    }, items => {
        updateTheme();
        newEffectTimerTextField.value = (items.newEffectTimer == 1) ? `${items.newEffectTimer} second` : `${items.newEffectTimer} seconds`;

        const checkStatesMap = new Map(Object.entries(items.checkStates));

        effectsCheckboxes.forEach(checkbox => {    
            if (!checkStatesMap.has(checkbox.getAttribute("data-checkbox"))) {
                checkbox.checked = true;
            } else {
                checkbox.checked = checkStatesMap.get(checkbox.getAttribute("data-checkbox"));
            }
        });
    });
}
