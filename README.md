# Novino | نووینو

## Novino web app and backend

The standalone Novino web app and PostgreSQL backend live in `backend/`.
GitHub Actions runs both test suites and packages the VPS files from successful
builds on `main`. The VPS package contains the backend, its web app, and the npm
manifests.

[راهنمای اجرای نووینو](backend/README-fa.md) · [نقشهٔ دیپلوی و سکرت‌ها](backend/deploy/MAP-fa.md)

## Original local prototype

A local web prototype built from the recovered public myAnbari web frontend. It stores workspace data in the browser and uses a local API adapter. Production login, payments, external integrations, and cloud services require a separate backend.

The recovered frontend and assets retain their original provenance. This repository does not grant a license to redistribute or rebrand those materials.

## Run locally

Use Node.js 22 or later and Python 3. Run `npm start` from the project root, then open [localhost:5173](http://localhost:5173/). On Windows, `start-local-web.cmd` performs the same build and start steps.

`npm test` runs the local workflow tests after `npm run build`. `npm run verify` checks the built bundles against the recovered frontend.

[راهنمای فارسی](LOCAL-WEB-fa.md)
