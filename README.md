# Luke Carter — Unreal & Gameplay Systems Portfolio

A minimalist, high-performance portfolio built with Next.js and Tailwind CSS, featuring embedded gameplay video showcases, technical case studies, and GitHub Pages deployment.

## Features

- **Selected Work**:
  - **Sovereign** — Offline LLM Unreal Engine 5 editor plugin with embedded gameplay demo video and full architectural breakdown (LyraStarterGame asset testing, static memory audits, hard reference visualizer, and Blueprint Insight runtime telemetry).
  - **Shogi — Multiplayer Capstone** — Networked client/server desktop game in Java with SQL lobby management.
- **Experience & Education**:
  - Unreal Engine Developer at Akiyam Solutions
  - Game Design at Sports Media Inc.
  - B.S. in Computer Science at University of Central Arkansas (May 2026)
- **Functional Contact Section**:
  - Powered by FormSubmit AJAX delivery to forward all messages directly to your inbox without requiring a server backend.
  - Direct email mailto link fallback.
- **GitHub Pages CI/CD**:
  - Automated deployment via `.github/workflows/deploy.yml` upon pushing to `main`.
  - Automatic base path detection for user sites (`<username>.github.io`) and project repositories.

## Quick Start (Local Development)

```bash
npm run dev
```

Visit [http://localhost:3000](http://localhost:3000).

## Deploying to GitHub Pages

1. Create a repository on GitHub (e.g., `Dev-Velith.github.io` for a root URL or `portfolio`).
2. Add your remote and push:

```bash
git remote add origin https://github.com/Dev-Velith/<repo-name>.git
git push -u origin main
```

3. In your GitHub repository settings:
   - Go to **Settings** → **Pages**
   - Under **Build and deployment** → **Source**, select **GitHub Actions**
4. The workflow in `.github/workflows/deploy.yml` will automatically build and publish your site!
