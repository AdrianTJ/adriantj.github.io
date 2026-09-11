(() => {
  const periods = [
    { name: "night", start: 0 },
    { name: "dawn", start: 5 },
    { name: "morning", start: 8 },
    { name: "midday", start: 11 },
    { name: "afternoon", start: 15 },
    { name: "sunset", start: 18 },
    { name: "night", start: 21 },
  ];
  const preview = new URLSearchParams(window.location.search).get("sky");
  const currentPeriod = () => {
    if (periods.some((period) => period.name === preview)) return preview;
    const hour = new Date().getHours();
    return periods.filter((period) => hour >= period.start).at(-1).name;
  };
  document.documentElement.dataset.sky = currentPeriod();

  document.addEventListener("DOMContentLoaded", () => {
    const backdrop = document.querySelector(".sky-backdrop");
    if (!backdrop) return;
    const layers = backdrop.querySelectorAll(".sky-layer");
    let shown;
    let active = 0;
    let pending;

    const updateSky = () => {
      const period = currentPeriod();
      if (period === shown || period === pending) return;
      pending = period;
      const photo = new Image();
      const url = `${backdrop.dataset.skyBase}${period}.webp`;
      photo.onload = () => {
        if (period !== currentPeriod()) {
          pending = undefined;
          return;
        }
        const next = 1 - active;
        layers[next].style.backgroundImage = `url("${url}")`;
        layers[next].classList.add("is-active");
        layers[active].classList.remove("is-active");
        active = next;
        shown = period;
        pending = undefined;
        document.documentElement.dataset.sky = period;
      };
      photo.onerror = () => {
        pending = undefined;
      };
      photo.src = url;
    };
    updateSky();
    window.setInterval(updateSky, 60_000);
    document.addEventListener("visibilitychange", () => {
      if (!document.hidden) updateSky();
    });

    const name = document.querySelector(".typed-name");
    const reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)");
    if (!name || reducedMotion.matches) return;
    const text = name.textContent.trim().replace(/\s+/g, " ");
    let index = 0;
    name.style.minWidth = `${text.length + 1}ch`;
    name.style.display = "inline-block";
    name.textContent = "";
    name.classList.add("is-typing");
    const type = () => {
      index = reducedMotion.matches ? text.length : index + 1;
      name.textContent = text.slice(0, index);
      if (index < text.length) window.setTimeout(type, 95);
      else name.classList.remove("is-typing");
    };
    window.setTimeout(type, 200);
  });
})();
