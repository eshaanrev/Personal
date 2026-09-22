# Personal Site — Eshaan Revankar

A static, multi-page personal portfolio site. No build step — plain HTML, a single runtime script, and media assets.

[View the live site](https://eshaanrev.vercel.app)

## Structure

```
  index.html                # site root
Eshaan Revankar.dc.html   # home page (nav links point here)
About.dc.html             # About page
Experience.dc.html        # Experience page
Projects.dc.html          # Projects page
Awards.dc.html            # Awards page
Contact.dc.html           # Contact page
support.js                # runtime that powers the <x-dc> component framework
uploads/                  # media assets (video, images, resume PDF)
vercel.json               # static hosting config (clean URLs + long-lived asset caching)
```

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
