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


document.addEventListener('mousemove', (event) => {
  const eye = document.querySelector('.eye');
  const pupil = document.querySelector('.pupil');
  const eyeRect = eye.getBoundingClientRect();
  const eyeCenterX = eyeRect.left + eyeRect.width / 2;
  const eyeCenterY = eyeRect.top + eyeRect.height / 2;
  const mouseX = event.clientX;
  const mouseY = event.clientY;
  const angleRad = Math.atan2(mouseY - eyeCenterY, mouseX - eyeCenterX);
  const moveDistance = 25; 
  const pupilX = Math.cos(angleRad) * moveDistance;
  const pupilY = Math.sin(angleRad) * moveDistance;
  pupil.style.transform = `translate(-50%, -50%) translate(${pupilX}px, ${pupilY}px)`;
});
