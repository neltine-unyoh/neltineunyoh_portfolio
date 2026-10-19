# Neltine Unyoh — Portfolio

Personal portfolio built with React, React Router and plain CSS (no UI libraries).

## Run it

```bash
npm install
npm run dev
```

Then open the local address Vite prints (usually http://localhost:5173).

## Edit the content

Almost every word on the site lives in **`src/data/site.js`**.

- Text marked `DRAFT` was written from the CV. Replace it with your real stories.
- `linkedin`: paste your LinkedIn URL and the link appears in the footer and contact page.
- `photo`: put your photo in `public/images/` (e.g. `neltine.jpg`) and set
  `` photo: `${base}images/neltine.jpg` ``.
- Product screenshots: add an `image` field to any product
  (e.g. `` image: `${base}images/kora.png` ``) and it replaces the illustration.
- Your CV is served from `public/resume.pdf`. Replace that file to update it.

## Project structure

```
src/
  components/   Navbar, Footer, Layout, ProductVisual, ProductRow, CodeCard, Portrait, Icons
  pages/        Home, About, Work, CaseStudy, HowIThink, Teardown, Resume, Contact, NotFound
  data/site.js  all the content
  styles/       variables.css (colours, fonts, sizes), global.css, detail.css
```

Routes: `/`, `/about`, `/work`, `/work/kora`, `/work/quizgenie`, `/work/agrilock`,
`/how-i-think`, `/how-i-think/whatsapp`, `/how-i-think/mtn-momo`, `/resume`, `/contact`.

## Deploy

**Vercel** or **Netlify** (free): import the GitHub repo, keep the defaults
(build command `npm run build`, output folder `dist`). `vercel.json` and
`public/_redirects` are already set up so links like `/work/kora` work when refreshed.

`npm run build:preview` makes a version with `#/` links that works on any static host.

## Tool logos (About page)

Save each tool's official logo in `public/logos/` with these exact file names
(`.svg` or `.png`) and it appears next to the tool's name automatically:

jira, figma, notion, mixpanel, metabase, google-sheets, excel, sql, github,
javascript, typescript, react, nodejs, supabase

## Link preview image

`public/og-image.png` is the image people see when you share your link on LinkedIn or WhatsApp.
After deploying, edit the `og:image` and `twitter:image` lines in `index.html` to use your full
address (for example `https://neltine.vercel.app/og-image.png`). Most apps need the full address.
