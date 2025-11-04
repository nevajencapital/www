# Nevajen Capital — Static Site

## Preview locally
1. From the project root run `python -m http.server 8000`.
2. Visit `http://localhost:8000/` in a browser to explore the site exactly as it will appear once published.
3. Stop the server with `Ctrl+C` when you are finished previewing.

## See the updated files
- All shared styling now lives in [`css/main.css`](css/main.css). Each HTML page references it with `<link rel="stylesheet" href="css/main.css">` at the top of the document.
- Page-specific tweaks (like hero copy or content blocks) stay inside the individual HTML files. Open any page (e.g., [`index.html`](index.html)) to review the structure alongside the new `<body>` class that scopes page-level overrides.
- To inspect the exact code changes compared to the previous commit, run `git log --stat` or `git diff HEAD^ HEAD` after pulling this branch.

## Download the updated files
You have two easy options for grabbing the current state of the project:

1. **Using Git (recommended if the repo is already connected):**
   - Clone the repo the first time with `git clone https://github.com/<username>/<repo>.git`.
   - Pull in these edits later with `git pull origin work` (replace `work` with your branch name if different).
   - Git automatically downloads only the changes since your last pull, so you always stay in sync.
2. **Downloading a ZIP from GitHub:**
   - Visit the repository page in your browser.
   - Click **Code → Download ZIP**, then unzip the archive locally to replace the old files.

## Deploy to GitHub Pages
1. Create a GitHub repository if you do not already have one.
2. Point this project at the repo: `git remote add origin https://github.com/<username>/<repo>.git` (replace with your repo URL).
3. Publish the current branch: `git push -u origin work` (or `main` if you rename the branch).
4. In Settings → Pages, ensure the site is served from the **root** of the default branch.
5. Visit `https://<username>.github.io/<repo>/` (or `https://<username>.github.io/` for a user/organization site).

## Files
- `index.html`, `services.html`, `faq.html`, `about.html`, `contact.html`
- `img/favicon.ico`, `img/favicon-32.png`, `img/og-image.png`
- `robots.txt`, `sitemap.xml`, `404.html`
- `css/main.css`
- `README.md`
