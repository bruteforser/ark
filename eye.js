const handler = e => {
  console.log(e.type, e.target);
};

document.addEventListener("click", handler, true);
document.addEventListener("keydown", handler, true);
document.addEventListener("input", handler, true);
document.addEventListener("change", handler, true);
document.addEventListener("submit", handler, true);
document.addEventListener("focus", handler, true);
document.addEventListener("blur", handler, true);
document.addEventListener("pointerdown", handler, true);
document.addEventListener("pointerup", handler, true);
