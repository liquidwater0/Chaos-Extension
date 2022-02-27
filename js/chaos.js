document.body.insertAdjacentHTML("beforebegin", `
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

document.documentElement.setAttribute("data-extension", "chaosExtension");

let timerPaused = false;
let timer;
let timerSeconds;

chrome.storage.sync.get({ newEffectTimer: 10 }, items => {
  timer = items.newEffectTimer;
  timerSeconds = timer;

  const timeRemaining = document.querySelector("[data-extension='chaosExtension'] #timeRemaining");
  timeRemaining.textContent = timerSeconds;

  document.addEventListener("keydown", event => {
    if (event.shiftKey && event.key.toLowerCase() === "p") timerPaused = !timerPaused;
  });

  setInterval(updateTimerBar, 1000);

  function updateTimerBar() {
    if (timerPaused) return;

    const timerBar = document.querySelector("[data-extension='chaosExtension'] #timerBar");
    const timerBarWidth = Number(window.getComputedStyle(timerBar, null).getPropertyValue("width").replace("px", ""));

    timerBar.style.width = `${parseInt(timerBarWidth - (timerBarWidth / 100 * (100 / timerSeconds--)))}px`;
    timeRemaining.textContent = timerSeconds;

    if (timerSeconds < 0) {
      timerBar.style.width = "100%";
      timerSeconds = timer;
      timeRemaining.textContent = timer;
      newEffect();
    }
  }

  function newEffect() {
    const enabledEffects = effects.filter(effect => effect.enabled == true);
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
