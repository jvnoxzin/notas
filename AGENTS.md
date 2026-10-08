# Base44 Setup Notes

## Project
Static HTML/CSS/JS site (Portuguese student grade calculator) located in `AULA3_21.08/`.
No build step, no backend, no dependencies, no external credentials.

## Running
`docker compose -f docker-compose.base44.yml up -d` serves the static files via nginx on port 3000.
The source directory is bind-mounted read-only, so edits to HTML/CSS/JS appear immediately on browser refresh (no rebuild needed).

## Verification
- `curl http://localhost:3000/` returns the `index.html` content.
- The form calculates a student's average from three activity grades and shows the result via `alert()`.
