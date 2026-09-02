# QA Playground

A small static site for practicing browser automation (Selenium, Playwright, Cypress) or manual exploratory testing. No backend, no build step — just HTML, CSS, and vanilla JS.

## Pages

- `index.html` — forms, checkboxes/radios, native alerts, a modal, a sortable table, drag-and-drop, a tooltip, intentionally broken elements, and an iframe.
- `login.html` — a self-contained login flow. Valid login: `tester` / `pass123`.
- `dynamic.html` — delayed content, a countdown-enabled button, dynamically added list items, and a value that's random on every load.

Every interactive element has a stable `id` and/or `data-testid` attribute to select against.

## Run locally

No build step needed. Either open `index.html` directly in a browser, or serve it:

```bash
python3 -m http.server 8000
# then visit http://localhost:8000
```

## Deploy

This repo is set up to be served as-is by GitHub Pages — see the main chat for step-by-step setup instructions.
