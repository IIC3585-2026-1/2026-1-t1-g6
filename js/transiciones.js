document.addEventListener('DOMContentLoaded', () => {
  const durationInput = document.querySelector('#duration');
  const outputField = document.querySelector('[data-output="duration"]');
  const lanes = [...document.querySelectorAll('.lane')];
  const runners = [...document.querySelectorAll('.runner')];
  const launchButton = document.querySelector('#launch-race');
  const resetButton = document.querySelector('#reset-race');
  let raceTimeouts = [];

  function clearRaceTimeouts() {
    raceTimeouts.forEach(timeoutId => clearTimeout(timeoutId));
    raceTimeouts = [];
  }

  function paintDuration() {
    if (!durationInput || !outputField) {
      return;
    }

    const duration = Number(durationInput.value);
    outputField.textContent = `${duration}s`;

    runners.forEach(runner => {
      runner.style.transitionDuration = `${duration}s`;
    });
  }

  function launchRace() {
    if (!durationInput) {
      return;
    }

    clearRaceTimeouts();

    lanes.forEach(lane => {
      lane.classList.remove('finished');
      lane.classList.remove('active');
      void lane.offsetWidth;
      lane.classList.add('active');

      const duration = Number(durationInput.value) * 1000;
      const timeoutId = window.setTimeout(() => {
        lane.classList.remove('active');
        lane.classList.add('finished');
      }, duration);

      raceTimeouts.push(timeoutId);
    });
  }

  function resetRace() {
    clearRaceTimeouts();

    lanes.forEach(lane => {
      lane.classList.remove('active');
      lane.classList.remove('finished');
    });
  }

  durationInput?.addEventListener('input', paintDuration);
  launchButton?.addEventListener('click', launchRace);
  resetButton?.addEventListener('click', resetRace);

  paintDuration();
});
