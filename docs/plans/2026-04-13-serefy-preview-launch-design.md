# Serefy Preview Launch Design

## Goal

Turn the existing Serefy brochure site into a live Naya-powered preview deployment with real lead capture, a guided enquiry flow, localized media assets, route-aware SEO, and a portal-backed project setup on `serefy-innovations.preview.nayagrowth.com`.

## Constraints

- Preserve the current brochure structure and route model instead of rebuilding the site from scratch.
- Reuse the proven Naya landing deployment pattern from Aakar/Omkar.
- Use real SERE contact details from the existing business records instead of placeholder brochure data.
- Ship a preview-host deployment because no custom domain currently points to the VPS.

## UX Direction

- Keep the current premium agri-tech tone, but replace placeholder/remote assets with local optimized media.
- Add a guided lead wizard for faster conversion without removing the existing brochure routes.
- Add the reusable enquiry form on the home page and make the contact page use the same live form.
- Clean up dead CTA states so every major action routes to the wizard, enquiry form, contact flow, or WhatsApp.

## Runtime Direction

- Post all enquiries to Naya through `/api/lead`.
- Configure the site to identify itself as `serefy-innovations.preview.nayagrowth.com`.
- Ship static files behind nginx with `/api/` proxied to `naya-api`, matching existing landing deployments.
- Add SEO/share assets and metadata so the preview is still presentation-ready.

## Deployment Direction

- Deploy from the repo itself, not under `NayaGrowth`.
- Use a dedicated preview container and preview host:
  - app directory: `~/apps/serefy-innovations-preview`
  - container: `serefy-innovations-preview`
  - host: `serefy-innovations.preview.nayagrowth.com`
- Bootstrap the Naya portal project with `growthnaya@gmail.com` and `sweetygaikwad62@gmail.com` as owners.
