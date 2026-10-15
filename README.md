# Maryam Attaria Portfolio

React 18 + Vite + Tailwind CSS 3 + GSAP (ScrollTrigger).

## Run
```bash
npm install
npm run dev        # http://localhost:5173
npm run build      # production build in /dist
```

## Customise
- Name, email, links, projects, skills, timeline: `src/data/data.js`
- Profile photo: put `profile.jpg` in `/public` and swap the SVG in `src/sections/About.jsx`
- CV: put `cv.pdf` in `/public`
- Contact form: copy `.env.example` to `.env` and add your EmailJS IDs
- Colors: CSS variables at the top of `src/index.css`
- All GSAP animations: `src/hooks/useAnimations.js`

## Deploy
Push to GitHub, import the repo on Vercel or Netlify (build: `npm run build`, output: `dist`).
