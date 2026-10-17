# Tamal Sen — Portfolio

Personal portfolio for **Tamal Sen**, Software Developer. Live at [tamalslab.in](https://tamalslab.in) once deployed.

Built with Next.js (App Router), React, TypeScript (strict), and Tailwind CSS. Every page is statically generated, there's no backend, and the only client-side JavaScript is the header (scroll state and mobile drawer), the theme toggle, and the copy-email button.

---

## Contents

- [Project structure](#project-structure)
- [Editing content](#editing-content)
- [Prerequisites](#prerequisites)
- [Installation and local development](#installation-and-local-development)
- [Production build](#production-build)
- [Environment variables](#environment-variables)
- [GitHub workflow](#github-workflow)
- [Deploy to Vercel (recommended first)](#deploy-to-vercel-recommended-first)
- [Deploy to your own Linux server (PM2 + Nginx)](#deploy-to-your-own-linux-server-pm2--nginx)

---

## Project structure

```
src/
├── config/site.ts           ← ALL content: name, links, skills, projects, experience, education
├── app/
│   ├── layout.tsx           fonts, metadata, theme bootstrap script
│   ├── page.tsx             assembles the sections + JSON-LD structured data
│   ├── globals.css          design tokens (light/dark), Tailwind setup
│   ├── opengraph-image.tsx  social sharing card (generated at build time)
│   ├── twitter-image.tsx    same card for X/Twitter
│   ├── icon.svg             favicon
│   ├── apple-icon.tsx       iOS home-screen icon
│   ├── sitemap.ts           /sitemap.xml
│   ├── robots.ts            /robots.txt
│   └── not-found.tsx        404 page
├── components/
│   ├── header.tsx           sticky header + slide-in mobile drawer (client component)
│   ├── theme-toggle.tsx     light/dark toggle (client component)
│   ├── copy-button.tsx      copy-email button (client component)
│   ├── footer.tsx
│   ├── sections/            hero, about, skills, projects, experience, education, workflow, contact
│   ├── previews/            CSS illustrations used as project previews (cms, lease, api, dashboard)
│   └── ui/                  small shared primitives (Section, Badge, ButtonLink, …)
└── lib/
    ├── resume.ts            shows the resume button only if the PDF exists
    └── utils.ts
public/
└── resume/                  Tamal_Sen_Resume.pdf goes here
deploy/
└── nginx-tamalslab.in.conf  example Nginx config
ecosystem.config.cjs         PM2 process definition
```

## Editing content

All text, links and data live in **`src/config/site.ts`**. Components only read from it, so you never need to edit them to change content.

1. **Links.** Email, GitHub, LinkedIn, the Employee API repository and the Ledgerly demo are configured. Anything still `null` (marked `TODO`) is optional.
   - Values left as `null` are **not rendered in production**, so there are no dead buttons.
   - In `npm run dev` they appear as small dashed orange placeholder chips, so you can see what's missing.
2. **Resume.** Copy your PDF to `public/resume/Tamal_Sen_Resume.pdf` (exact name). The "Download Resume" buttons (hero, header, mobile drawer, contact) appear automatically on the next build. On Windows, from the project folder:
   ```powershell
   New-Item -ItemType Directory -Force public\resume
   Copy-Item "<path-to-your>\Tamal_Sen_Resume.pdf" public\resume\Tamal_Sen_Resume.pdf
   ```
   Commit the PDF so Vercel and the server receive it; the deployed site only serves files that are in the repository.
3. **Projects.** Each entry in `projects` has a `category` (`"professional"` or `"personal"`), the bullet list shown on the card (`highlights`), and the blocks in the expandable case-study panel (`notes`). Professional entries use `privateNote` instead of links.
4. **Accuracy.** Lines marked `VERIFY` (job title, dates, some skills, AuditFlow contributions) are worth a final check. Keep only what your work actually supports.
5. **Screenshots (optional).** To replace a CSS illustration with a real screenshot of your own app, put the image in `public/projects/` and add a `screenshot` entry to that project:
   ```ts
   screenshot: { src: "/projects/ledgerly.png", alt: "Ledgerly dashboard showing…", width: 1600, height: 1000 },
   ```

Search for `TODO` and `VERIFY` to find everything that needs attention:

```bash
grep -n "TODO\|VERIFY" src/config/site.ts
```

## Prerequisites

- **Node.js 18.18 or newer.** Node 22 LTS is recommended (see `.nvmrc`).
- npm (bundled with Node)
- Git

> Next.js is pinned to 15.5 and Tailwind CSS to 4.1 because they're the newest versions that still run on Node 18. After you move to Node 20+ everywhere, you can upgrade to Next.js 16 and Tailwind CSS 4.2+.

## Installation and local development

```bash
npm install
npm run dev
```

Open http://localhost:3000. Edits to `src/config/site.ts` hot-reload.

Other scripts:

| Command             | What it does                                   |
| ------------------- | ---------------------------------------------- |
| `npm run lint`      | ESLint (Next.js core-web-vitals + TypeScript)  |
| `npm run typecheck` | TypeScript in strict mode, no output           |
| `npm run build`     | Production build (also lints and type-checks)  |
| `npm run start`     | Serve the production build on 127.0.0.1:3000   |

## Production build

```bash
npm run build
npm run start      # http://127.0.0.1:3000
```

All routes are prerendered as static content at build time. That includes the resume check, the social image, the sitemap and robots.txt. **Rebuild after changing content or adding the resume PDF.**

## Environment variables

None are required. Copy `.env.example` to `.env.local` only if you need to override something.

| Variable               | Default                | Purpose                                                             |
| ---------------------- | ---------------------- | ------------------------------------------------------------------- |
| `NEXT_PUBLIC_SITE_URL` | `https://tamalslab.in` | Canonical URL used in metadata, Open Graph tags, sitemap and robots |

There are no secrets in this project. Never commit `.env*.local` files (they're already in `.gitignore`).

## GitHub workflow

First push:

```bash
git init
git add .
git commit -m "Initial portfolio"
git branch -M main
git remote add origin https://github.com/sTamal2001/portfolio.git
git push -u origin main
```

Day to day:

1. Edit `src/config/site.ts` (or components).
2. Run `npm run lint && npm run build` locally.
3. Commit and push to `main`.

`.github/workflows/ci.yml` runs lint, type-check, and build on every push to `main` and on every pull request, so a broken change shows up before it's deployed. If you deploy with Vercel, every push to `main` also triggers a production deployment automatically.

## Deploy to Vercel (recommended first)

1. Push the repository to GitHub (see above).
2. Go to [vercel.com/new](https://vercel.com/new), import the repository, and accept the detected **Next.js** defaults. No build settings or environment variables are needed.
3. After the first deployment, open **Project → Settings → Domains** and add `tamalslab.in` (and optionally `www.tamalslab.in`).
4. Vercel shows the DNS records to create at your domain registrar. Typically that's an `A` record for the apex domain and a `CNAME` for `www`; use the exact values Vercel displays. HTTPS certificates are issued automatically once DNS resolves.

> If `api.tamalslab.in` points to your Google Cloud VM, keep that DNS record as it is. Only the apex/`www` records move to Vercel.

## Deploy to your own Linux server (PM2 + Nginx)

These steps assume Ubuntu/Debian on your Google Cloud VM, which **already runs a Node.js API on port 5000**. Nothing below stops, changes, or reuses that API's process or port. The portfolio runs as a separate PM2 process named `portfolio` on `127.0.0.1:3000`.

Nothing here has been applied to the server. Treat it as a checklist to run yourself.

### 1. Check what's already there

```bash
node -v                 # needs 18.18+; 20 or 22 recommended
pm2 ls                  # note the existing API process; leave it alone
sudo ss -ltnp | grep -E ':3000|:5000'   # 3000 must be free
ls /etc/nginx/sites-enabled/            # see existing Nginx configs
```

### 2. Get the code and build

```bash
cd ~
git clone https://github.com/sTamal2001/portfolio.git
cd portfolio
npm ci
npm run build
```

Copy your resume PDF to `public/resume/` before building if it isn't committed.

### 3. Start with PM2

```bash
pm2 start ecosystem.config.cjs     # starts "portfolio" on 127.0.0.1:3000
pm2 save                           # remember it across reboots
pm2 startup                        # only if PM2 isn't already set up to start on boot
curl -I http://127.0.0.1:3000      # should return 200
```

Binding to `127.0.0.1` means port 3000 is never reachable from the internet, only through Nginx. Don't open ports 3000 or 5000 in the Google Cloud firewall; only 80 and 443 need to be open.

### 4. Configure Nginx

An example config is in [`deploy/nginx-tamalslab.in.conf`](deploy/nginx-tamalslab.in.conf). It routes:

- `tamalslab.in`, `www.tamalslab.in` → `http://127.0.0.1:3000` (portfolio)
- `api.tamalslab.in` → `http://127.0.0.1:5000` (existing API)

If you already have an Nginx config for the API, **keep it** and delete the `api.tamalslab.in` block from the example. Two blocks with the same `server_name` conflict.

```bash
sudo cp deploy/nginx-tamalslab.in.conf /etc/nginx/sites-available/tamalslab.in
sudo ln -s /etc/nginx/sites-available/tamalslab.in /etc/nginx/sites-enabled/
sudo nginx -t                      # always test before reloading
sudo systemctl reload nginx
```

### 5. DNS

At your domain registrar, create `A` records pointing to the VM's **external** IP:

| Name  | Type | Value          |
| ----- | ---- | -------------- |
| `@`   | A    | `<VM external IP>` |
| `www` | A    | `<VM external IP>` |
| `api` | A    | `<VM external IP>` |

Make sure the VM uses a **static** external IP (VPC network → IP addresses), or it may change on restart. Wait for DNS to propagate (`dig +short tamalslab.in`).

### 6. HTTPS with Let's Encrypt

Run this only after DNS resolves to the server:

```bash
sudo apt install certbot python3-certbot-nginx
sudo certbot --nginx -d tamalslab.in -d www.tamalslab.in -d api.tamalslab.in
sudo certbot renew --dry-run       # confirm auto-renewal works
```

Certbot edits the Nginx config to add HTTPS and HTTP→HTTPS redirects.

### 7. Updating the site later

```bash
cd ~/portfolio
git pull
npm ci
npm run build
pm2 reload portfolio
```

Only the `portfolio` process is reloaded; the API keeps running.
