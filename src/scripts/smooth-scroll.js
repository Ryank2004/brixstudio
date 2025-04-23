import Lenis from 'lenis'

// Detect if we're on mobile
const isMobile = window.innerWidth < 768;

// Initialize lenis smooth scrolling with mobile optimizations
const lenis = new Lenis({
  duration: isMobile ? 0.8 : 1.2,
  easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t * 1.5)), // Keep your original easing
  direction: 'vertical',
  gestureDirection: 'vertical',
  smooth: true,
  mouseMultiplier: 1,
  smoothTouch: isMobile ? false : true, // Disable on mobile only
  touchMultiplier: isMobile ? 1.5 : 2,
  infinite: false,
})

// Voeg een event listener toe om de scrollsnelheid aan te passen in specifieke secties
document.addEventListener('DOMContentLoaded', () => {
  const cardsSection = document.querySelector('.cards-wrapper');
  
  // Als we in de scrolltrigger-sectie zijn, pas dan de scrollsnelheid aan
  lenis.on('scroll', ({ scroll, limit, velocity, direction, progress }) => {
    // Check of we in het cards-gebied scrollen
    const cardsSectionRect = cardsSection.getBoundingClientRect();
    
    if (cardsSectionRect.top < window.innerHeight && cardsSectionRect.bottom > 0) {
      // In de cards sectie, pas de snelheid aan
      lenis.options.multiplier = 0.5; // Vertraag de scrollsnelheid
    } else {
      // Buiten de cards sectie, gebruik normale snelheid
      lenis.options.multiplier = 1.0;
    }
  });
});

// Integrate with GSAP - Keep your original structure since it's working
function raf(time) {
  lenis.raf(time)
  requestAnimationFrame(raf)
}

requestAnimationFrame(raf)

// Optional: Connect lenis to GSAP ScrollTrigger
if (typeof ScrollTrigger !== 'undefined') {
  lenis.on('scroll', ScrollTrigger.update)
  
  // Keep your original ticker integration
  gsap.ticker.add((time) => {
    lenis.raf(time * 1000)
  })
}

// iOS-specific adjustments only
if (/iPhone|iPad|iPod|iOS/i.test(navigator.userAgent)) {
  lenis.options.smoothTouch = false;
}

// Make lenis globally accessible
window.lenis = lenis

export default lenis