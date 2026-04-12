# Serefy Preview Launch Implementation Plan

> **For Claude:** REQUIRED SUB-SKILL: Use superpowers:executing-plans to implement this plan task-by-task.

**Goal:** Launch Serefy on a Naya preview domain with real lead capture, SEO/share assets, preview deployment, and portal project setup.

**Architecture:** Preserve the current brochure routes, add shared Naya landing primitives (wizard, inquiry form, SEO controller, site config), then deploy the site as a static nginx container that proxies `/api/` to `naya-api`. After the site is live, bootstrap the corresponding portal project and verify live lead capture end to end.

**Tech Stack:** Vite, React, TypeScript, Tailwind, motion, nginx, Docker Compose, Traefik, GitHub Actions, Naya API lead pipeline.

---

### Task 1: Finish the application integration

**Files:**
- Create: `src/components/LeadWizardProvider.tsx`
- Modify: `src/App.tsx`
- Modify: `src/components/Layout.tsx`
- Modify: `src/components/ShareSiteButton.tsx`
- Modify: `src/pages/Home.tsx`
- Modify: `src/pages/Technology.tsx`
- Modify: `src/pages/Metrics.tsx`
- Modify: `src/pages/Library.tsx`
- Modify: `src/pages/Contact.tsx`

### Task 2: Add SEO/share/public assets

**Files:**
- Modify: `index.html`
- Create: `public/favicon.svg`
- Create: `public/site.webmanifest`
- Create: `public/robots.txt`
- Create: `public/sitemap.xml`
- Create: `public/llms.txt`
- Create: `public/media/og-cover.jpg`

### Task 3: Add deploy/runtime scaffold

**Files:**
- Create: `Dockerfile`
- Create: `docker-compose.prod.yml`
- Create: `nginx.conf`
- Create: `.github/workflows/pr-validate.yml`
- Create: `.github/workflows/deploy-production.yml`
- Create: `scripts/verify-public-assets.mjs`
- Modify: `.env.example`
- Modify: `README.md`

### Task 4: Validate locally

**Commands:**
- `npm install`
- `npm test`
- `npm run lint`
- `npm run build`
- `npm run verify:assets`

### Task 5: Ship and verify

**Commands:**
- create feature branch, commit, push
- open PR, watch checks, merge to `production`
- watch deploy workflow
- verify preview host and VPS container
- bootstrap portal project and owners
- submit a real live lead and confirm it appears in the portal
