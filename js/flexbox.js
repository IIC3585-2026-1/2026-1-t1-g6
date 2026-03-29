document.addEventListener('DOMContentLoaded', () => {
  const flexZone = document.getElementById('flex-zone');
  const selectDir = document.getElementById('flex-dir');
  const selectJc = document.getElementById('flex-jc');
  const selectAi = document.getElementById('flex-ai');

  if (flexZone && selectDir && selectJc && selectAi) {
    function updateFlexbox() {
      flexZone.style.setProperty('--current-direction', selectDir.value);
      flexZone.style.setProperty('--current-justify', selectJc.value);
      flexZone.style.setProperty('--current-align', selectAi.value);
    }

    selectDir.addEventListener('change', updateFlexbox);
    selectJc.addEventListener('change', updateFlexbox);
    selectAi.addEventListener('change', updateFlexbox);
  }
});