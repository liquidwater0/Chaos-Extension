document.documentElement.setAttribute("data-extension", "chaosExtension");

document.body.insertAdjacentHTML("beforebegin", `
  <div data-extension="chaosExtension">
    <div id="effectTimer">
      <div class="blur-background" id="timerBarContainer">
        <span id="timeRemaining"></span>
        <span id="timerBar"></span>
      </div>
    </div>

    <div class="blur-background" id="effectContainer">
      <div id="effectName"></div>
    </div>
  </div>
`);

let timerPaused = false;
let timeRemaining;

document.addEventListener("keydown", event => {
  if (event.shiftKey && event.key.toLowerCase() === "p") timerPaused = !timerPaused;
});

chrome.storage.sync.get({ newEffectTimer: 10 }, items => {
  const timerBar = document.querySelector("[data-extension='chaosExtension'] #timerBar");
  const timeRemainingElement = document.querySelector("[data-extension='chaosExtension'] #timeRemaining");

  resetTimer();
  setInterval(updateTimer, 1000);

  function resetTimer() {
    timeRemaining = items.newEffectTimer;
    timerBar.style.width = "100%";
    timeRemainingElement.textContent = timeRemaining;
  }

  function updateTimer() {
    if (timerPaused) return;

    const timerBarWidth = Number(window.getComputedStyle(timerBar, null).getPropertyValue("width").replace("px", ""));

    timerBar.style.width = `${parseInt(timerBarWidth - (timerBarWidth / 100 * (100 / timeRemaining--)))}px`;
    timeRemainingElement.textContent = timeRemaining;

    if (timeRemaining < 0) {
      resetTimer();
      newEffect();
    }
  }

  function newEffect() {
    const enabledEffects = effects.filter(effect => effect.enabled);
    const randomEffect = enabledEffects[Math.floor(Math.random() * enabledEffects.length)];

    const effectContainer = document.querySelector("[data-extension='chaosExtension'] #effectContainer");
    const effectName = document.querySelector("[data-extension='chaosExtension'] #effectName");
    
    enabledEffects.forEach(enabledEffect => enabledEffect.revertEffect());

    if (randomEffect) {
      effectContainer.style.display = "block";
      effectName.textContent = randomEffect.name;
      randomEffect.activateEffect();
    }
  }
});
