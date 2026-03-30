document.addEventListener("DOMContentLoaded", () => {
  const containers = document.querySelectorAll(".resizable-container");

  if (containers.length > 0) {
    const ro = new ResizeObserver((entries) => {
      for (let entry of entries) {
        const badge = entry.target.querySelector(".query-badge");
        const width = Math.round(entry.contentRect.width);
        const height = Math.round(entry.contentRect.height);

        if (badge) {
          badge.innerText = `Ancho ${width}px | Alto ${height}px`;

          badge.style.backgroundColor = width >= 450 ? "#e8ff47" : "#333";
          badge.style.color = width >= 450 ? "#000" : "#fff";
        }
      }
    });

    containers.forEach((container) => ro.observe(container));
  }
});
