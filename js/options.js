const manifest = chrome.runtime.getManifest();
const version = document.getElementById("optionsVersion");
const saveButton = document.getElementById("saveButton");
const html = document.documentElement;

version.textContent = `Chaos Extension v${manifest.version}`;

document.addEventListener("DOMContentLoaded", get);
saveButton.addEventListener("click", save);

const themeSwitch = document.getElementById("themeSwitch");

themeSwitch.addEventListener("input", () => {
    chrome.storage.sync.set({"themeSwitchChecked": themeSwitch.checked});

    themeSwitch.checked ? darkMode() : lightMode();
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

selectAllEffectsButton.addEventListener("click", () => {
    effectsCheckState = !effectsCheckState;
    effectsCheckboxes.forEach(checkbox => checkbox.checked = effectsCheckState);
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
const randomSelectionColorEffectCheckbox = document.getElementById("randomSelectionColorEffectCheckbox");
const terminalEffectCheckbox = document.getElementById("terminalEffectCheckbox");
const hideImagesEffectCheckbox = document.getElementById("hideImagesEffectCheckbox");
const blurryVisionEffectCheckbox = document.getElementById("blurryVisionEffectCheckbox");
const y1950sEffectCheckbox = document.getElementById("y1950sEffectCheckbox");
const hideScrollbarsEffectCheckbox = document.getElementById("hideScrollbarsEffectCheckbox");
const selectAllTextEffectCheckbox = document.getElementById("selectAllTextEffectCheckbox");
const hideTextSelectionEffectCheckbox = document.getElementById("hideTextSelectionEffectCheckbox");
const noCSSEffectCheckbox = document.getElementById("noCSSEffectCheckbox");
const randomTextColorEffectCheckbox = document.getElementById("randomTextColorEffectCheckbox");
const hideCursorEffectCheckbox = document.getElementById("hideCursorEffectCheckbox");
const doubleSizeEffectCheckbox = document.getElementById("doubleSizeEffectCheckbox");
const unselectAllTextEffectCheckbox = document.getElementById("unselectAllTextEffectCheckbox");
const muteEverythingEffectCheckbox = document.getElementById("muteEverythingEffectCheckbox");
const unmuteEverythingEffectCheckbox = document.getElementById("unmuteEverythingEffectCheckbox");
const playEverythingEffectCheckbox = document.getElementById("playEverythingEffectCheckbox");
const pauseEverythingEffectCheckbox = document.getElementById("pauseEverythingEffectCheckbox");
const invertedColorsEffectCheckbox = document.getElementById("invertedColorsEffectCheckbox");
const invertedPageEffectCheckbox = document.getElementById("invertedPageEffectCheckbox");
const sidewaysPageEffectCheckbox = document.getElementById("sidewaysPageEffectCheckbox");
const midasTouchEffectCheckbox = document.getElementById("midasTouchEffectCheckbox");
const blackoutEffectCheckbox = document.getElementById("blackoutEffectCheckbox");
const emptyValuesEffectCheckbox = document.getElementById("emptyValuesEffectCheckbox");
const scrollToTopEffectCheckbox = document.getElementById("scrollToTopEffectCheckbox");
const disableTextSelectionEffectCheckbox = document.getElementById("disableTextSelectionEffectCheckbox");
const doublePlaybackSpeedEffectCheckbox = document.getElementById("doublePlaybackSpeedEffectCheckbox");
const halfPlaybackSpeedEffectCheckbox = document.getElementById("halfPlaybackSpeedEffectCheckbox");
const spinningPageEffectCheckbox = document.getElementById("spinningPageEffectCheckbox");
const rollEffectCheckbox = document.getElementById("rollEffectCheckbox");

function save() {
    chrome.storage.sync.set({
        "nothingEffectChecked": nothingEffectCheckbox.checked, "rainbowTextEffectChecked": rainbowTextEffectCheckbox.checked, "flipPageEffectChecked": flipPageEffectCheckbox.checked,
        "disableMouseInputEffectChecked": disableMouseInputEffectCheckbox.checked, "disableScrollingEffectChecked": disableScrollingEffectCheckbox.checked, 
        "newEffectTimer": newEffectTimerTextField.value.split(" ")[0], "reloadPageEffectChecked": reloadPageEffectCheckbox.checked, "getAlertEffectChecked": getAlertEffectCheckbox.checked,
        "scrollToElementEffectChecked": scrollToElementEffectCheckbox.checked, "invisibleTextChecked": invisibleTextCheckbox.checked, "halfSizeEffectChecked": halfSizeEffectCheckbox.checked,
        "randomSelectionColorEffectChecked": randomSelectionColorEffectCheckbox.checked, "terminalEffectChecked": terminalEffectCheckbox.checked, "hideImagesEffectChecked": hideImagesEffectCheckbox.checked,
        "blurryVisionEffectChecked": blurryVisionEffectCheckbox.checked, "y1950sEffectChecked": y1950sEffectCheckbox.checked, "hideScrollbarsEffectChecked": hideScrollbarsEffectCheckbox.checked,
        "selectAllTextEffectChecked": selectAllTextEffectCheckbox.checked, "hideTextSelectionEffectChecked": hideTextSelectionEffectCheckbox.checked, "noCSSEffectChecked": noCSSEffectCheckbox.checked,
        "randomTextColorEffectChecked": randomTextColorEffectCheckbox.checked, "hideCursorEffectChecked": hideCursorEffectCheckbox.checked, "doubleSizeEffectChecked": doubleSizeEffectCheckbox.checked,
        "unselectAllTextEffectChecked": unselectAllTextEffectCheckbox.checked, "muteEverythingEffectChecked": muteEverythingEffectCheckbox.checked, "unmuteEverythingEffectChecked": unmuteEverythingEffectCheckbox.checked,
        "playEverythingEffectChecked": playEverythingEffectCheckbox.checked, "pauseEverythingEffectChecked": pauseEverythingEffectCheckbox.checked, "invertedColorsEffectChecked": invertedColorsEffectCheckbox.checked,
        "invertedPageEffectChecked": invertedPageEffectCheckbox.checked, "sidewaysPageEffectChecked": sidewaysPageEffectCheckbox.checked, "midasTouchEffectChecked": midasTouchEffectCheckbox.checked,
        "blackoutEffectChecked": blackoutEffectCheckbox.checked, "emptyValuesEffectChecked": emptyValuesEffectCheckbox.checked, "scrollToTopEffectChecked": scrollToTopEffectCheckbox.checked,
        "disableTextSelectionEffectChecked": disableTextSelectionEffectCheckbox.checked, "doublePlaybackSpeedEffectChecked": doublePlaybackSpeedEffectCheckbox.checked,
        "halfPlaybackSpeedEffectChecked": halfPlaybackSpeedEffectCheckbox.checked, "spinningPageEffectChecked": spinningPageEffectCheckbox.checked, "rollEffectChecked": rollEffectCheckbox.checked
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
                newEffectTimerTextField.value = items.newEffectTimer == 1 ? `${items.newEffectTimer} second` : `${items.newEffectTimer} seconds`;
            }
        });
    });
}

function get() {
    chrome.storage.sync.get({
        currentTheme: "dark", themeSwitchChecked: true, nothingEffectChecked: true, rainbowTextEffectChecked: true, flipPageEffectChecked: true, disableMouseInputEffectChecked: true,
        disableScrollingEffectChecked: true, newEffectTimer: 10, reloadPageEffectChecked: true, getAlertEffectChecked: true, scrollToElementEffectChecked: true, invisibleTextChecked: true,
        halfSizeEffectChecked: true, randomSelectionColorEffectChecked: true, terminalEffectChecked: true, hideImagesEffectChecked: true, blurryVisionEffectChecked: true, y1950sEffectChecked: true,
        hideScrollbarsEffectChecked: true, selectAllTextEffectChecked: true, hideTextSelectionEffectChecked: true, noCSSEffectChecked: true, randomTextColorEffectChecked: true,
        hideCursorEffectChecked: true, doubleSizeEffectChecked: true, unselectAllTextEffectChecked: true, muteEverythingEffectChecked: true, unmuteEverythingEffectChecked: true,
        playEverythingEffectChecked: true, pauseEverythingEffectChecked: true, invertedColorsEffectChecked: true, invertedPageEffectChecked: true, sidewaysPageEffectChecked: true,
        midasTouchEffectChecked: true, blackoutEffectChecked: true, emptyValuesEffectChecked: true, scrollToTopEffectChecked: true, disableTextSelectionEffectChecked: true,
        doublePlaybackSpeedEffectChecked: true, halfPlaybackSpeedEffectChecked: true, spinningPageEffectChecked: true, rollEffectChecked: true
    }, items => {
        html.setAttribute("data-theme", items.currentTheme);
        themeSwitch.checked = items.themeSwitchChecked;
        nothingEffectCheckbox.checked = items.nothingEffectChecked;
        rainbowTextEffectCheckbox.checked = items.rainbowTextEffectChecked;
        flipPageEffectCheckbox.checked = items.flipPageEffectChecked;
        disableMouseInputEffectCheckbox.checked = items.disableMouseInputEffectChecked;
        disableScrollingEffectCheckbox.checked = items.disableScrollingEffectChecked;
        newEffectTimerTextField.value = items.newEffectTimer == 1 ? `${items.newEffectTimer} second` : `${items.newEffectTimer} seconds`;
        reloadPageEffectCheckbox.checked = items.reloadPageEffectChecked;
        getAlertEffectCheckbox.checked = items.getAlertEffectChecked;
        scrollToElementEffectCheckbox.checked = items.scrollToElementEffectChecked;
        invisibleTextCheckbox.checked = items.invisibleTextChecked;
        halfSizeEffectCheckbox.checked = items.halfSizeEffectChecked;
        randomSelectionColorEffectCheckbox.checked = items.randomSelectionColorEffectChecked;
        terminalEffectCheckbox.checked = items.terminalEffectChecked;
        hideImagesEffectCheckbox.checked = items.hideImagesEffectChecked;
        blurryVisionEffectCheckbox.checked = items.blurryVisionEffectChecked;
        y1950sEffectCheckbox.checked = items.y1950sEffectChecked;
        hideScrollbarsEffectCheckbox.checked = items.hideScrollbarsEffectChecked;
        selectAllTextEffectCheckbox.checked = items.selectAllTextEffectChecked;
        hideTextSelectionEffectCheckbox.checked = items.hideTextSelectionEffectChecked;
        noCSSEffectCheckbox.checked = items.noCSSEffectChecked;
        randomTextColorEffectCheckbox.checked = items.randomTextColorEffectChecked;
        hideCursorEffectCheckbox.checked = items.hideCursorEffectChecked;
        doubleSizeEffectCheckbox.checked = items.doubleSizeEffectChecked;
        unselectAllTextEffectCheckbox.checked = items.unselectAllTextEffectChecked;
        muteEverythingEffectCheckbox.checked = items.muteEverythingEffectChecked;
        unmuteEverythingEffectCheckbox.checked = items.unmuteEverythingEffectChecked;
        playEverythingEffectCheckbox.checked = items.playEverythingEffectChecked;
        pauseEverythingEffectCheckbox.checked = items.pauseEverythingEffectChecked;
        invertedColorsEffectCheckbox.checked = items.invertedColorsEffectChecked;
        invertedPageEffectCheckbox.checked = items.invertedPageEffectChecked;
        sidewaysPageEffectCheckbox.checked = items.sidewaysPageEffectChecked;
        midasTouchEffectCheckbox.checked = items.midasTouchEffectChecked;
        blackoutEffectCheckbox.checked = items.blackoutEffectChecked;
        emptyValuesEffectCheckbox.checked = items.emptyValuesEffectChecked;
        scrollToTopEffectCheckbox.checked = items.scrollToTopEffectChecked;
        disableTextSelectionEffectCheckbox.checked = items.disableTextSelectionEffectChecked;
        doublePlaybackSpeedEffectCheckbox.checked = items.doublePlaybackSpeedEffectChecked;
        halfPlaybackSpeedEffectCheckbox.checked = items.halfPlaybackSpeedEffectChecked;
        spinningPageEffectCheckbox.checked = items.spinningPageEffectChecked;
        rollEffectCheckbox.checked = items.rollEffectChecked;
    });
}
