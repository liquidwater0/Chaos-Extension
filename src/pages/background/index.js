import { initialTimerSeconds, initialEffectOptions, initialTimerOptions } from "../../initialOptions";

function saveStorage() {
	chrome.storage.sync.set({
		checkedStates: initialEffectOptions,
		timer: initialTimerSeconds,
		timerOptions: initialTimerOptions
	});
}

chrome.runtime.onInstalled.addListener(details => {
    if (details.reason !== "install") return;

	saveStorage();

    if (chrome.runtime.openOptionsPage) {
		chrome.runtime.openOptionsPage();
	} else {
		window.open(chrome.runtime.getURL("options.html"));
	}
});