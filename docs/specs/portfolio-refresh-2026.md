# Portfolio Refresh 2026

Status: implemented
Date: 2026-06-01
Owner: Kevin Anrique

## Problem

The portfolio content is more than a year out of date. The current project list
mixes recent hackathon work with old portfolio entries, private repository links,
and at least one incorrect project link. The homepage copy, career data, resume,
README, and chatbot context also need a content pass so the public profile matches
Kevin's current work.

## Positioning

Default positioning for this refresh:

> Founder & CTO of Cachin, a LATAM-first payments app that helps people fund
> globally and pay locally through supported QR rails.

Secondary positioning:

> DevOps and product engineer building crypto payment rails, AI agents, and
> privacy-focused applications.

This keeps the existing DevOps identity, but makes the real current center of
gravity clear: Cachin is the main project. Public GitHub projects are supporting
signals, not the portfolio headline.

## Sources Checked

- GitHub profile: https://github.com/kevan1
- Public and private repo API snapshot for `kevan1`, checked on 2026-06-01
- Public Cachin landing page: https://cachin.app
- Local Cachin workspace at `/Users/kevan/Development/cachin-latest`
- Local CachinPOS workspace at `/Users/kevan/Development/CachinPOS`
- Current portfolio data in `src/data/projects.json`
- Current career, education, socials, homepage, README, and project card files

## Project Ranking Criteria

Projects are ranked by:

1. Strategic relevance to the current public narrative, with Cachin first.
2. Proof of impact: award, working demo, real workflow, or strong technical depth.
3. Freshness: active 2025-2026 work ranks above older school or template projects.
4. Link quality: public repo, working demo, useful README, and accurate metadata.

## Recommended Project Order

### Featured

1. **Cachin**

   - Why: main current project and strongest portfolio anchor. It shows product
     thinking, mobile engineering, crypto payment rails, backend/API work,
     provider integrations, compliance awareness, support flows, and brand/landing
     execution.
   - Public framing: LATAM-first payments app for travelers, foreigners, digital
     nomads, crypto-paid freelancers, and merchants. Users fund globally, scan
     supported local QRs, review FX/fees, and pay like locals.
   - Current status: private beta, Argentina MVP, broader LATAM roadmap.
   - Source handling: keep source private. Present as a case study with public
     landing, screenshots, architecture notes, and sanitized proof.
   - Links:
     - https://cachin.app
   - Internal repos/workspaces:
     - `kevan1/cachin-latest` private
     - `kevan1/cachin_app` private
     - `kevan1/cachin_avalanche` private
     - `kevan1/CachinPOS` private

2. **CachinPOS**

   - Why: strongest supporting proof for the merchant side of Cachin. It shows
     a POS flow that generates Solana Pay / USDC QR codes for the main Cachin app
     to scan and pay.
   - Current action: include as a sub-card inside the Cachin case study or as a
     separate related project below Cachin.
   - Source handling: private repo, public screenshots/video only if sanitized.

3. **Yara Meta WhatsApp Agent**

   - Why: best current 2026 AI/backend signal outside Cachin. It combines WhatsApp
     Cloud API, Gemini, PostgreSQL, Drizzle, queues, tests, and event recommendations.
   - Current action: add as a strong secondary project after Cachin.
   - Link: https://github.com/kevan1/yara-bot

4. **MaskBid**

   - Why: strongest proof of impact because it won the Transparency category at
     the 2024 NMKR Berlin Hackathon.
   - Current action: keep near the top, but replace the private
     `SRTK-Hackathon` source link with the public `maskbid` repo and live demo.
   - Links:
     - https://github.com/kevan1/maskbid
     - https://private-tender.vercel.app

5. **Midnight KYC / Blockenfy**

   - Why: strong privacy and Web3 signal. It demonstrates KYC attestations,
     zero-knowledge proofs, Midnight Network, smart contracts, and wallet flows.
   - Current action: consolidate the current Blockenfy card around the most
     complete/current repo, then mention the hackathon context in the copy.
   - Links:
     - https://github.com/kevan1/kyc_midnight
     - https://github.com/kevan1/kyc-midnight-hackathon

6. **Kiwipay / Monad Payment Prototype**

   - Why: recent private payment app adjacent to Cachin, but it should not compete
     with the Cachin narrative unless it has a distinct story.
   - Current action: keep private and either omit or mention as experimentation
     around passkey auth, QR payments, USDC settlement, and cashback on Monad.
   - Source handling: private repo, no public source link.

7. **Mimic Hackathon Automation**

   - Why: relevant DeFi automation project with clear architecture and risk
     management notes.
   - Current action: add as a secondary featured project only if the copy clearly
     states this is a demo/prototype, not a production trading bot.
   - Link: https://github.com/kevan1/mimic-hackathon

8. **kevan.ar**

   - Why: the portfolio itself is a useful product case study: Next.js, chatbot,
     embeddings, contact form, analytics, and Vercel deployment.
   - Current action: include lower in the project list or as a short "This site"
     case study, not as one of the first two homepage cards.
   - Links:
     - https://github.com/kevan1/kevan.ar
     - https://kevan.ar

9. **Buena Hackathon**
   - Why: recent public project with live deployment, but currently has almost no
     README detail.
   - Current action: include after a short README/copy polish or keep as secondary.
   - Links:
     - https://github.com/kevan1/buena_hackathon
     - https://buena-hackathon.vercel.app

### Secondary Or Archive

- **Turnkey Auth Proxy**: useful infra utility, but better as a supporting project
  unless paired with the React Native wallet work.
- **Cachin private variants**: do not list every private repo separately. Roll
  them into the Cachin case study unless there is a distinct public outcome.
- **Secreto.fun**: public demo, but likely smaller scope. Keep below stronger
  projects unless there is a good story behind it.
- **Rapid Ride Fight** and **Glowing Under**: keep as historical education/game
  work, not primary current work.
- **NFTVue**: remove or demote unless its source repo and live app are verified.
- **Portfolio 2023**: remove from the main project list.
- Forks, templates, and course repos: do not feature unless the card explains
  Kevin's original contribution.

## Content Updates

- Rewrite the hero summary to remove stale wording and make the current focus
  obvious.
- Replace year-only age calculation with either exact birthdate logic or no age.
- Fix public GitHub bio typo: "learing" should be "learning".
- Resolve location mismatch: portfolio says Argentina while GitHub says Berlin.
- Update `career.json`: normalize "DevOps", fix "Treenie" to "Trainee", and
  confirm the current freelance period is still accurate.
- Update `projects.json`: reorder, remove stale cards, fix incorrect/private links,
  and add missing 2025-2026 projects.
- Add a case-study-friendly schema field if needed, so projects can show "Private
  repo" / "Case study" without pretending there is a public source link.
- Update `README.md`: replace placeholder clone URL, fix the contact typo
  `htttps`, and align the project description with the current portfolio.
- Update chatbot source context after content changes and regenerate embeddings.
- Check `public/resume.pdf` for freshness and replace it if it no longer matches
  the portfolio positioning.

## Acceptance Criteria

- Homepage featured projects show Cachin first.
- `/projects` lists current projects in the agreed importance order.
- No project card links to a private repo unless explicitly presented as a private
  case study with a public demo or sanitized public landing.
- No project card points to the wrong repository.
- Hero copy reflects current positioning and does not rely on a stale age value.
- Career and education copy is typo-clean and consistent in English.
- README and metadata match the updated public positioning.
- Chatbot context is regenerated after content updates.
- Build, lint, and responsive visual checks pass.

## Implementation Plan

1. Confirm Cachin public-safe claims, screenshots, and private/client constraints.
2. Update project data in `src/data/projects.json`. Done.
3. Update homepage copy in `src/app/page.tsx` around Cachin and LATAM payments.
   Done.
4. Update career, education, socials, README, and metadata copy. Mostly done:
   career, README, metadata, contact email, privacy copy, and chatbot prompt were
   updated.
5. Replace or verify `public/resume.pdf`. Not done in this pass.
6. Regenerate chatbot data with `pnpm run gen`. This is intentionally separate
   from `pnpm run build` because Vercel production builds should not depend on
   connecting to Astra DB.
7. Run verification:
   - `pnpm install` if dependencies are missing
   - `pnpm run lint`
   - `pnpm run build`
   - local responsive smoke test at 375 px, 768 px, and 1280 px

## Verification Notes

- `pnpm install --frozen-lockfile`: passed.
- `pnpm exec prettier --write ...`: passed for touched source/docs files.
- `pnpm run lint`: passed with no warnings.
- `pnpm run build`: passed after separating embedding generation from the
  production build.
- Local server smoke at `http://127.0.0.1:3000`: `/`, `/projects`, `/contact`,
  and new Cachin image assets returned 200.
- In-app browser visual verification was attempted, but the configured browser
  backend was unavailable in this session.
- `pnpm audit --audit-level high`: failed on pre-existing dependency advisories,
  including Next.js and transitive LangChain dependencies. Treat dependency
  remediation as a separate upgrade task.

## Open Questions

- Should Cachin be shown as the hero project on the homepage, not only as the
  first project card?
- Which Cachin claims are safe to publish today: private beta, Argentina MVP,
  supported local QR flows, Solana/USDC rails, Sumsub, Crisp, POS, card roadmap?
- Which screenshots/videos can be public?
- What is the current preferred location/availability wording: Berlin, Argentina,
  remote, relocation, or something else?
- Is the current resume PDF accurate enough to keep?
- Do you want the site voice to stay casual, or move toward a sharper professional
  tone?
