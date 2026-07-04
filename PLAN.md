# Guilherme Frazão — Personal Website Plan

## Context

Guilherme is an MSc Computer Science student at NOVA School of Science and Technology (finishing Sept 2026, semester abroad at TU Dresden) with three internships (Intapp, Unipartner, Vodafone) and a thesis in progress: **a RAG application that leverages LLMs to interact with and transform multi-modal data**. He wants a premium, modern, dark-cinematic personal website on GitHub Pages that goes beyond an online résumé — it should tell his story, showcase what he builds, demonstrate technical competence, and be easy to extend as his career evolves. Audience: recruiters, hiring managers, researchers/professors, engineers, founders.

## Decisions locked (agreed with Guilherme)

| Decision | Choice |
|---|---|
| Positioning | Software engineer passionate about building solutions and mastering AI |
| Stack | **Astro** (static, Markdown content collections, GitHub Pages friendly) |
| Visual direction | **Dark & cinematic** — near-black, one electric accent, premium motion |
| Structure | One scrolling homepage + detail pages for project case studies |
| Flagship project | The RAG/LLM thesis (featured as current research + case study) |
| GitHub | github.com/GuilhermeFFrazao10 — linked; repos need cleanup (separate task) |
| Contact email | guilhermeffrazao10@gmail.com |
| Photo | Yes (about section); **Blog: not at launch**, but architecture must support adding it later |

## Brand & design system

- **Canvas:** near-black (`#0A0A0F`-ish) with subtle radial gradient glows and optional fine grain texture. Elevated surfaces slightly lighter (`#131318`).
- **Accent:** one electric color (electric blue→violet gradient range, exact hue tuned during build) used sparingly: links, highlights, glows, CTA.
- **Typography:** self-hosted. Display font with personality (Space Grotesk or Clash Display) for the huge hero/name/headings; Inter (or Satoshi) for body. Big type scale — hero name near-viewport-width, generous whitespace.
- **Motion principles:** motion signals quality, never blocks reading.
  - Hero entrance: staggered text reveal (clip-path/translate) on load.
  - Scroll-triggered section reveals (fade + rise, once).
  - Project cards: hover lift + glow + image parallax.
  - Micro-interactions: magnetic/underline-draw links, cursor-aware glow on cards.
  - Subtle animated gradient in hero background.
  - **`prefers-reduced-motion` fully respected** — all motion degrades to instant/opacity-only.
  - Library: **GSAP + ScrollTrigger** (free tier) for scroll work; CSS transitions for micro-interactions. No smooth-scroll hijacking (Lenis optional, off by default).

## Site architecture

### Homepage (single scroll)
1. **Nav** — fixed, blur backdrop, logo monogram "GF", links: Work · About · Experience · Contact, + CV download button.
2. **Hero** — huge name, positioning line ("Software engineer building AI-powered solutions"), one-sentence subline (MSc @ NOVA, currently researching RAG systems), availability badge, CTAs (View work / Get in touch), scroll cue.
3. **Selected Work** — flagship card: RAG thesis (large, with visual), + 1–2 secondary project cards. Each links to a case-study page.
4. **About** — photo + narrative story (Abrantes → NOVA → Dresden → building with AI; leadership and volunteering experience woven in as character, not a list). "What I care about" beliefs strip.
5. **Experience & Education** — vertical timeline: Intapp '25, Unipartner '24, Vodafone '23, interleaved with MSc/TU Dresden/BSc. Each entry: role, 1–2 line impact summary, tech tags.
6. **Skills** — grouped clusters (AI/ML & LLMs · Languages: Java, Python, JS/TS, SQL · Cloud & Practices: Azure, Git, agile & DevOps methodologies), rendered as tasteful tag grid — **no skill bars**.
7. **Contact** — big "Let's connect" CTA, mailto guilhermeffrazao10@gmail.com, LinkedIn, GitHub.
8. **Footer** — minimal; built-with note, last-updated.

### Detail pages
- `/work/[slug]` — case-study template (problem → approach → architecture → tech → results → learnings). First instance: the RAG thesis. Driven by an Astro **content collection** (`src/content/work/*.md`), so adding projects = adding a Markdown file.
- Future-proofing: `writing` content collection schema defined but empty; nav slot reserved. `/uses`, `/now` possible later with same layout primitives.
- 404 page (on-brand).

## Technical implementation

1. **Scaffold:** `npm create astro@latest` (minimal template, TypeScript strict) in this repo. Astro config with `site` + correct `base`.
2. **Structure:** `src/layouts/Base.astro` (fonts, meta, OG tags, theme), `src/components/` (Nav, Hero, ProjectCard, Timeline, SkillGroup, ContactCTA, Footer), `src/content/work/` collection with zod schema (title, summary, tags, date, featured, cover).
3. **Styling:** vanilla CSS with design tokens as custom properties (or Tailwind v4 — decide at scaffold time; tokens-first either way).
4. **Animations:** GSAP via npm, initialized in a client-side script per section; `matchMedia` for reduced-motion.
5. **SEO/meta:** per-page titles/descriptions, Open Graph image (designed card), sitemap (`@astrojs/sitemap`), favicon set, JSON-LD Person schema.
6. **Deployment:** GitHub Actions with official `withastro/action` → GitHub Pages.
   - **Agreed: rename the repo.** GitHub username confirmed as **GuilhermeFFrazao**, so the repo must be renamed to exactly **`guilhermeffrazao.github.io`** for the site to live at the root URL. Rename keeps history and redirects the old URL.
7. **CV:** place `CV_GuilhermeFrazao.pdf` in `public/` for the download button.

## Content Guilherme still needs to provide (asked during build, section by section)

- RAG thesis details: problem statement, data modalities handled, architecture, models/stack used, current results, supervisor/lab (case-study source material).
- 1–2 secondary projects (university or personal) worth a card.
- Photo for the About section — available in the `photos` folder (pick + optimize during build).
- About-section raw material: short answers on interests, what he cares about, career direction.
- Confirmation of hero tagline wording and accent color from 2–3 presented options.

## Build phases

1. **Foundation** — scaffold Astro, tokens, fonts, Base layout, deploy pipeline live from day one (empty shell on Pages).
2. **Homepage core** — Nav, Hero, About, Experience, Skills, Contact, Footer with real content (content Q&A with Guilherme per section).
3. **Work showcase** — content collection, project cards, RAG case-study page.
4. **Motion & polish** — GSAP reveals, hovers, hero animation, OG image, 404, reduced-motion audit.
5. **Launch QA** — see verification.

## Verification

- `npm run dev` visual check at each phase; `npm run build && npm run preview` before deploy.
- Lighthouse: Performance ≥ 95, Accessibility ≥ 95, SEO ≥ 95 on built output.
- Responsive check: 360px, 768px, 1440px, ultrawide.
- Reduced-motion check via DevTools emulation.
- Keyboard-only navigation pass.
- Live URL check after GitHub Actions deploy (fonts, CV download, OG preview via social card checker).
