# Luke J. — Game Engine & Gameplay Systems Portfolio

A dynamic full-stack portfolio built for the admissions advisory meeting with **Jeremy, Director of Programming at the Florida Interactive Entertainment Academy (FIEA)** and former Technical Director at Electronic Arts (25+ years industry experience).

## Overview

This portfolio is structured specifically to address the calibration between **low-level C++ engine internals** and **player-facing gameplay feel / designer tooling**, exploring the three core admissions questions:

1. **Programming Track & Gameplay Focus**: Player-facing systems (combat, movement feel) vs engine internals (Vulkan, memory layout, compute shaders).
2. **CS Undergrads in Technical Design**: Balancing a traditional Computer Science foundation with technical design and designer workflow tooling.
3. **Post-Grad Placement**: Industry perceptions (EA, Epic, Respawn) of dual-discipline graduates applying to Gameplay Engineering vs Technical/Systems Design roles.

## Dynamic (Non-Static) Capabilities

- **Live Dynamic Contact & Feedback API**: `/api/contact` route with validation, in-memory & local JSON logging, and receipt tracking.
- **Interactive Game-Feel Sandbox**: Real-time browser canvas simulation allowing hot-tuning of coyote time, sub-frame input buffer windows, jump apex gravity multipliers, and frame-accurate hitstop impact freezes.
- **Dual-Track Comparator**: Side-by-side architectural analysis contrasting hardware optimization against player responsiveness.
- **Deep-Dive Technical Modals**: Inspect source code excerpts (C++20, GLSL Compute, State Machines), problem/solution breakdowns, and telemetry benchmarks.

## Tech Stack

- **Framework**: Next.js 14 (App Router)
- **Styling**: Tailwind CSS with custom AAA studio dark palette
- **Icons**: Lucide React
- **Runtime**: Node.js v24

## Running Locally

```bash
# Start local development server with hot-reloading
npm run dev

# Or build and launch production server
npm run build
npm start
```
The site runs at `http://localhost:3000`.
