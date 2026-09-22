# Personal Site — Eshaan Revankar

A static, multi-page personal portfolio site. No build step — plain HTML, a single runtime script, and media assets.

[View the live site](https://eshaanrev.vercel.app)

## Structure

The public site uses plain, semantic HTML pages with shared `site.css` and
`site.js` assets. Clean URLs expose `/about`, `/education`, `/experience`,
`/projects`, `/awards`, and `/contact`. The older `.dc.html` exports remain only
as redirected legacy files.

## Develop locally

Validate the pages and serve the folder with any static server:

```bash
npm run check
python3 -m http.server 8000
# then open http://localhost:8000
```

## Deploy

Hosted on Vercel and connected to this GitHub repo — pushing to the default
branch triggers an automatic production deploy. No build command or output
directory is needed (it ships as-is).
