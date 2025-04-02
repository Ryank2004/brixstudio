import Lenis from 'lenis'

// Initialize lenis smooth scrolling
const lenis = new Lenis({
    duration: 1.2,
    easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t * 1.5)), // https://www.desmos.com/calculator/brs54l4xou
    direction: 'vertical', // vertical, horizontal
    gestureDirection: 'vertical', // vertical, horizontal, both
    smooth: true,
    mouseMultiplier: 1,
    smoothTouch: true,
    touchMultiplier: 2,
    infinite: false,
})

// Integrate with GSAP
// In your smooth-scroll.js
function raf(time) {
    lenis.raf(time)
    // Don't call requestAnimationFrame here
}

// Better approach
gsap.ticker.add((time) => {
    lenis.raf(time * 1000)
})

// Only use ScrollTrigger update when needed
lenis.on('scroll', () => {
    ScrollTrigger.update()
})

requestAnimationFrame(raf) // Call it once to start

// Make lenis globally accessible
window.lenis = lenis

export default lenis