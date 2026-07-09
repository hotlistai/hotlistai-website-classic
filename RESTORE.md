# hotlistai.com — Classic Restore

Restored from `v0-hotlistai-website-build` commit `947a593` (2026-02-07).

## What this version is

- **Positioning:** AI product lab — agentic systems and digital counterparts (2026 refresh)
- **Hero CTAs:** Explore The Lab, Who we are
- **Bridge:** Banner + two-door section pointing services to `hotlistengine.com`
- **Products:** Estate Mogul (Active), LyftEmail (In Development), PRIME (Beta)
- **Nav:** Ethos, Products, Company, Blog, Services → hotlistengine.com
- **Domain:** `hotlistai.com` (lab) separate from `hotlistengine.com` (concierge)

## What changed after this commit (not included here)

| Date | Change |
|------|--------|
| 2026-04-13 | Digital Workforce Infrastructure repositioning, Deployments nav |
| 2026-07-03 | Follow-up leak repositioning for real estate teams |
| 2026-07-08 | Agent Tech Concierge rebrand → moved to `hotlistengine.com` |

## Vercel setup

1. Create a **new** Vercel project from this repo
2. Add domains: `hotlistai.com`, `www.hotlistai.com`
3. Set `hotlistai.com` as Production (or www → apex per preference)
4. **Remove** `hotlistai.com` from the `hotlistengine.com` Vercel project
5. Copy env vars from the main project if needed (Resend, Zapier, HubSpot, Cal.com, etc.)

## Source lineage

```
947a593 ← this restore (Feb 7, 2026) — AI venture studio / The Lab era
9438ea1 ← Digital Workforce Infrastructure (Apr 13, 2026)
0580e44 ← Agent Tech Concierge (Jul 8, 2026) → hotlistengine.com
```