import { initEffects } from "./effects";

chrome.runtime.onInstalled.addListener(onInstall);

function onInstall(details: chrome.runtime.InstalledDetails) {
    if (details.reason === chrome.runtime.OnInstalledReason.INSTALL) {
        chrome.runtime.openOptionsPage();
    }

    if (
        details.reason === chrome.runtime.OnInstalledReason.INSTALL ||
        details.reason === chrome.runtime.OnInstalledReason.UPDATE
    ) {
        initEffects();
    }
}