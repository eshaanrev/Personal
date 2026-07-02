# Personal Site — Eshaan Revankar

A static, multi-page personal portfolio site. No build step — plain HTML, a single runtime script, and media assets.

## Structure

```
index.html                # site root — copy of the home page (served at "/")
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

Serve the folder with any static server, e.g.:

```bash
python3 -m http.server 8000
# then open http://localhost:8000
```

## Deploy

Hosted on Vercel and connected to this GitHub repo — pushing to the default
branch triggers an automatic production deploy. No build command or output
directory is needed (it ships as-is).
