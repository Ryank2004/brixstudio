// Wacht tot het document volledig is geladen
document.addEventListener("DOMContentLoaded", function() {
  // Check of dit een touch device is
  const isTouchDevice = window.matchMedia("(hover: none)").matches;
  if (isTouchDevice) return;

  const cursor = document.querySelector('.cursor');
  
  if (!cursor) {
    console.error("Cursor element niet gevonden");
    return;
  }
  
  // Variabelen voor vloeiende beweging
  let cursorX = 0;
  let cursorY = 0;
  let targetX = 0;
  let targetY = 0;
  
  // Volg muisbewegingen
  document.addEventListener('mousemove', function(e) {
    targetX = e.clientX;
    targetY = e.clientY;
  });
  
  // Animatiefunctie met vertraging en bounce
  function animateCursor() {
    // Vertraging factor (lagere waarde = meer vertraging)
    const ease = 0.07;
    
    // Bereken afstand tussen huidige positie en doelpositie
    const distX = targetX - cursorX;
    const distY = targetY - cursorY;
    
    // Voeg een klein bounce-effect toe door de beweging licht te overdrijven
    cursorX += distX * ease;
    cursorY += distY * ease;
    
    // Update de cursorpositie
    cursor.style.transform = `translate(calc(${cursorX}px - 50%), calc(${cursorY}px - 50%))`;
    
    // Blijf animeren
    requestAnimationFrame(animateCursor);
  }
  
  // Start de animatie
  animateCursor();
  
  // Activeer de cursor na een korte vertraging
  setTimeout(() => {
    cursor.classList.add('active');
  }, 500);
});