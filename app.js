document.addEventListener('DOMContentLoaded', () => {
  const buttons = document.querySelectorAll('.control-btn');
  const modules = document.querySelectorAll('.module');

  buttons.forEach(button => {
    button.addEventListener('click', () => {
      const targetId = button.getAttribute('data-target');
      if (!targetId) return; 

      modules.forEach(mod => {
        mod.classList.remove('active');
        mod.classList.add('hidden');
      });

      const targetModule = document.getElementById(targetId);
      if (targetModule) {
        targetModule.classList.remove('hidden');
        targetModule.classList.add('active');
      }
    });
  });
});
