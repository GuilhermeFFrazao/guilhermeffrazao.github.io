import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

// All motion is gated on prefers-reduced-motion: no-preference. Users who
// prefer reduced motion get the fully static page — nothing is ever hidden
// before JS runs, so the site also works with JS disabled.
const mm = gsap.matchMedia();

mm.add('(prefers-reduced-motion: no-preference)', () => {
  // --- Hero entrance -------------------------------------------------
  const heroTl = gsap.timeline({ defaults: { ease: 'power3.out' } });

  heroTl
    .from('[data-hero="line"] .line-inner', {
      yPercent: 110,
      duration: 1,
      stagger: 0.12,
      delay: 0.15,
    })
    .from(
      '[data-hero="badge"]',
      { y: -14, autoAlpha: 0, duration: 0.6 },
      '-=0.55',
    )
    .from(
      '[data-hero="fade"]',
      { y: 24, autoAlpha: 0, duration: 0.7, stagger: 0.1 },
      '-=0.35',
    );

  // --- Scroll reveals -------------------------------------------------
  document.querySelectorAll<HTMLElement>('[data-reveal]').forEach((el) => {
    gsap.from(el, {
      y: 36,
      autoAlpha: 0,
      duration: 0.8,
      ease: 'power3.out',
      scrollTrigger: {
        trigger: el,
        start: 'top 86%',
        once: true,
      },
    });
  });
});

// --- Cursor-aware glow on cards (fine pointers only) -------------------
if (window.matchMedia('(pointer: fine)').matches) {
  document.querySelectorAll<HTMLElement>('.glow-card').forEach((card) => {
    card.addEventListener('pointermove', (e) => {
      const rect = card.getBoundingClientRect();
      card.style.setProperty('--mx', `${e.clientX - rect.left}px`);
      card.style.setProperty('--my', `${e.clientY - rect.top}px`);
    });
  });
}
