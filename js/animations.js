document.addEventListener("DOMContentLoaded", () => {
  const target = document.getElementById("anim-target");
  const buttons = document.querySelectorAll(".anim-btn");
  const stopBtn = document.getElementById("stop-anim");

  buttons.forEach((btn) => {
    btn.addEventListener("click", () => {
      target.className = "nucleus";

      void target.offsetWidth;

      const animName = btn.getAttribute("data-anim");
      target.classList.add(`anim-${animName}`);
    });
  });

  stopBtn.addEventListener("click", () => {
    target.className = "nucleus";
  });
});
