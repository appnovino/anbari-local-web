# Anbari Local Web

A local web prototype built from the recovered public myAnbari web frontend. It stores workspace data in the browser and uses a local API adapter. Production login, payments, external integrations, and cloud services require a separate backend.

The recovered frontend and assets retain their original provenance. This repository does not grant a license to redistribute or rebrand those materials.

## Run locally

Use Node.js 22 or later and Python 3. Run `npm start` from the project root, then open [localhost:5173](http://localhost:5173/). On Windows, `start-local-web.cmd` performs the same build and start steps.

`npm test` runs the local workflow tests after `npm run build`. `npm run verify` checks the built bundles against the recovered frontend.

[راهنمای فارسی](LOCAL-WEB-fa.md)
