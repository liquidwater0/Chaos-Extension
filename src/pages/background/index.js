import { initialTimerSeconds, initialTimerOptions } from "../../initialOptions";
import "../../effects/index";
import { effects } from "../../initEffect";

const initialEffectOptions = effects.map(({ label, storageKey, enabled }) => {
	return { label, storageKey, enabled };
});

function saveStorage() {
	chrome.storage.sync.set({
		effects: effects,
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