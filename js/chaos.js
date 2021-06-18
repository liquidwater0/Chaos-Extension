document.body.insertAdjacentHTML("afterbegin", `
  <div data-extension="chaosExtension">
    <div id="effectTimer">
      <div id="timerBarContainer">
        <span id="timeRemaining"></span>
        <span id="timerBar"></span>
      </div>
    </div>

    <div id="effectContainer">
      <div id="effectName"></div>
    </div>
  </div>
`);

let timer;

chrome.storage.sync.get({ newEffectTimer: 10 }, function(items) {
  timer = items.newEffectTimer;
  let timerSeconds = timer;

  const timeRemaining = document.querySelector("[data-extension='chaosExtension'] #timeRemaining");
  timeRemaining.textContent = timerSeconds;

  let timerPause = false;

  document.addEventListener("keydown", function(event) {
    if (event.shiftKey && event.keyCode == 80) { //Shift + P (80)
      timerPause = !timerPause;
    }
  });

  setInterval(updateTimerBar, 1000);

  function updateTimerBar() {
    const timerBar = document.querySelector("[data-extension='chaosExtension'] #timerBar");
    const timerBarWidth = Number(window.getComputedStyle(timerBar, null).getPropertyValue("width").replace("px", ""));

    if (!timerPause) {
      timerBar.style.width = `${timerBarWidth - (timerBarWidth / 100 * (100 / timerSeconds--))}px`;
      timeRemaining.textContent = timerSeconds;
    }

    if (timerSeconds < 0) {
      timerBar.style.width = "100%";
      timerSeconds = timer;
      timeRemaining.textContent = timer;
      newEffect();
    }
  }

  function newEffect() {
    const enabledEffects = effects.filter(function(effect) { return effect.enabled == true });
    const randomEffect = enabledEffects[Math.floor(Math.random() * enabledEffects.length)];

    const effectContainer = document.querySelector("[data-extension='chaosExtension'] #effectContainer");
    const effectName = document.querySelector("[data-extension='chaosExtension'] #effectName");
    
    enabledEffects.forEach(function(enabledEffect) { enabledEffect.setDefaultValues() });

    if (randomEffect) {
      effectContainer.style.display = "block";

      effectName.textContent = randomEffect.name;
      randomEffect.effectCode();
    }
  }
});