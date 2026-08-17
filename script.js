const slides = [...document.querySelectorAll(".slide")];
const currentEl = document.getElementById("current");
const prevBtn = document.getElementById("prev");
const nextBtn = document.getElementById("next");
const dots = document.getElementById("dots");

let index = 0;

slides.forEach((_, i) => {
  const dot = document.createElement("button");
  dot.type = "button";
  dot.setAttribute("aria-label", `Слайд ${i + 1}`);
  dot.addEventListener("click", () => show(i));
  dots.append(dot);
});

function show(nextIndex) {
  index = Math.max(0, Math.min(slides.length - 1, nextIndex));
  slides.forEach((slide, i) => {
    const active = i === index;
    slide.classList.toggle("is-active", active);
    slide.hidden = !active;
  });
  [...dots.children].forEach((dot, i) => {
    dot.classList.toggle("is-active", i === index);
  });
  currentEl.textContent = String(index + 1);
  prevBtn.disabled = index === 0;
  nextBtn.disabled = index === slides.length - 1;
}

prevBtn.addEventListener("click", () => show(index - 1));
nextBtn.addEventListener("click", () => show(index + 1));

document.addEventListener("keydown", (event) => {
  if (event.key === "ArrowRight" || event.key === "PageDown" || event.key === " ") {
    event.preventDefault();
    show(index + 1);
  }
  if (event.key === "ArrowLeft" || event.key === "PageUp") {
    event.preventDefault();
    show(index - 1);
  }
  if (event.key === "Home") show(0);
  if (event.key === "End") show(slides.length - 1);
});

let touchX = null;
document.addEventListener("touchstart", (event) => {
  touchX = event.changedTouches[0].screenX;
});
document.addEventListener("touchend", (event) => {
  if (touchX === null) return;
  const dx = event.changedTouches[0].screenX - touchX;
  if (Math.abs(dx) > 40) show(index + (dx < 0 ? 1 : -1));
  touchX = null;
});

show(0);
