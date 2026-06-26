# Personal Site — Eshaan Revankar

A static personal portfolio site. No build step — plain HTML, a single runtime script, and media assets.

## Structure

```
index.html     # the page (markup + inline styles + reveal/video logic)
support.js     # runtime that powers the <x-dc> component framework
uploads/       # media assets (project video + image)
vercel.json    # static hosting config (clean URLs + long-lived asset caching)
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
