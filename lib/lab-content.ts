export const companyFounder = {
  name: "Johnny Apple",
  title: "Founder",
  url: "https://johnny-apple.com",
}

export const proofStats = [
  { value: "80+", label: "Production deployments" },
  { value: "25K+", label: "Lines in live AI runtime" },
  { value: "#212", label: "Inc. 5000 operator background" },
  { value: "6 yrs", label: "Building journey systems" },
]

export type CaseStudy = {
  slug: string
  name: string
  status: string
  headline: string
  summary: string
  problem: string
  approach: string
  shipped: string[]
  guardrails: string[]
  stack: string[]
  featured?: boolean
}

export const caseStudies: CaseStudy[] = [
  {
    slug: "estate-mogul-os",
    name: "Estate Mogul OS",
    status: "Live private beta",
    headline: "Telegram ops agent with workspace actions, not chatbot replies.",
    summary:
      "A production assistant loop for operators: Telegram intake, intent routing, LLM reasoning, Google Workspace tools, preview-confirm before outbound actions, and VPS deployment with regression gates.",
    problem:
      "Operators needed an assistant that could read deal flow, draft email copy, and route workspace tasks — without blind automation or unsafe connector claims.",
    approach:
      "Built a layered runtime: deterministic routing and guardrails first, Hermes brain for open-ended reasoning, separate OAuth stores per connector, and human confirmation before Gmail send or sheet mutation.",
    shipped: [
      "Telegram polling worker with attachment and caption handling",
      "Google Workspace CLI with scoped OAuth and token isolation",
      "Preview-confirm queues for sheet updates and Gmail send",
      "Connector honesty lane when scopes or tokens are missing",
      "systemd service on Linux VPS with validate/smoke test gates",
    ],
    guardrails: [
      "Least-privilege tool boundaries (LLM06-style agency limits)",
      "Explicit confirmation before irreversible actions",
      "Sanitized brain output and safe denial wording",
      "Service-user isolation for secrets and runtime state",
    ],
    stack: ["Python", "Telegram", "Hermes", "Google Workspace", "Gmail", "Sheets", "systemd", "Linux VPS", "pytest"],
    featured: true,
  },
  {
    slug: "knox-client-portal",
    name: "Knox Client Portal",
    status: "Live client app",
    headline: "Self-hosted client portal with autosave, admin APIs, and CRM sync.",
    summary:
      "Token-based onboarding portal for a luxury real-estate client program — questionnaire flows, branded email briefs, Zapier sync, and migration from managed DB to self-hosted SQLite on VPS.",
    problem:
      "A live client portal needed reliability, ownership of data, and operational control without depending on a paused managed database host.",
    approach:
      "Rebuilt the persistence layer on SQLite, added health checks and backup cron, deployed behind nginx with systemd, and kept Zapier as the integration edge.",
    shipped: [
      "Autosaving multi-step questionnaire with submit flow",
      "Admin APIs and client record management",
      "Zapier sync cron and branded Resend email briefs",
      "nginx + systemd production deploy on VPS",
      "Runtime health endpoint and verification scripts",
    ],
    guardrails: [
      "Token-scoped client access",
      "Server-side validation on all questionnaire writes",
      "Root-only secrets outside the app tree",
      "Backup cron before schema changes",
    ],
    stack: ["Next.js", "TypeScript", "SQLite", "Zapier", "Resend", "nginx", "systemd"],
    featured: true,
  },
  {
    slug: "hotlistverify",
    name: "HotlistVerify",
    status: "Self-hosted",
    headline: "Queue-based lead verification with enrichment and operator visibility.",
    summary:
      "Backend pipeline for validating and enriching lead records — Redis-backed jobs, third-party enrichment, proxy-aware processing, and dashboard visibility for operators.",
    problem:
      "Lead lists needed verification and enrichment at scale without manual spreadsheet work or opaque batch failures.",
    approach:
      "Designed a queue-first architecture with BullMQ, isolated integration adapters, and observable job states for debugging and recovery.",
    shipped: [
      "Job queue with Redis and worker processes",
      "Email validation and enrichment integrations",
      "Operator dashboard for pipeline visibility",
      "Dockerized deployment path",
    ],
    guardrails: [
      "Rate limits and retry boundaries on external APIs",
      "Job failure surfaces with actionable states",
      "Secrets kept out of client bundles",
    ],
    stack: ["Next.js API", "BullMQ", "Redis", "Docker", "Apify", "Apollo"],
    featured: true,
  },
  {
    slug: "ai-model-runtime",
    name: "AI Model Runtime",
    status: "Private infrastructure",
    headline: "Dockerized model routing, workflow automation, and eval gates.",
    summary:
      "Self-hosted stack for routing LLM traffic, running workflow automation, and holding production data locally — LiteLLM, n8n, Postgres, Redis, and validation runbooks.",
    problem:
      "Needed a controllable AI runtime on owned infrastructure instead of scattering prompts across ad hoc SaaS tools.",
    approach:
      "Composed core data services, LiteLLM for model routing, n8n for workflow scaffolding, and shell-based validation gates before any workflow activation.",
    shipped: [
      "Docker Compose core + workflow profiles",
      "LiteLLM bridge with local-only bindings",
      "n8n workflow imports with disabled-by-default posture",
      "Postgres/Redis persistence and runbooks",
    ],
    guardrails: [
      "Localhost-only admin surfaces",
      "No credentials embedded in workflow exports",
      "Validation scripts before service restarts",
      "Explicit disabled-workflow default",
    ],
    stack: ["Docker Compose", "LiteLLM", "n8n", "Postgres", "Redis", "nginx", "bash gates"],
  },
  {
    slug: "boardroom-os",
    name: "Boardroom OS",
    status: "GPT beta + runtime",
    headline: "Multi-agent review layer before code ships.",
    summary:
      "Structured agent roles for product, architecture, UX, operations, and launch-risk review — used to pressure-test plans before implementation.",
    problem:
      "Solo builders need a disciplined review loop, not another generic chat thread, before committing to architecture and scope.",
    approach:
      "Defined specialized reviewer agents with explicit outputs: risks, build plan, implementation prompts, and human-reviewed execution checkpoints.",
    shipped: [
      "GPT Store beta for public demonstration",
      "Telegram/runtime integration for private workflows",
      "Role-specific review prompts and outputs",
    ],
    guardrails: [
      "Human-reviewed execution after agent proposals",
      "Scope boundaries per reviewer role",
      "No auto-deploy from review output",
    ],
    stack: ["Multi-agent orchestration", "GPT Store", "Telegram", "prompt architecture"],
  },
]

export type Capability = {
  title: string
  description: string
  proof: string
}

export const capabilities: Capability[] = [
  {
    title: "Agent orchestration",
    description: "Supervisor patterns, tool-calling loops, failure recovery, and knowing when a pipeline beats an agent.",
    proof: "Estate Mogul OS routing lanes before LLM fallback",
  },
  {
    title: "MCP & tool integration",
    description: "Connectors for workspace, CRM, email, and webhooks with isolated token stores and explicit scopes.",
    proof: "Google Workspace OAuth separated from core runtime secrets",
  },
  {
    title: "Eval & verification",
    description: "Regression tests, smoke gates, and structured checks before production deploy — not vibe-based QA.",
    proof: "validate_build.sh + pytest suites on Travis runtime",
  },
  {
    title: "Guardrails & agency limits",
    description: "Preview-confirm flows, connector honesty, least-privilege tools, and kill-safe outbound actions.",
    proof: "Gmail send and sheet mutation require explicit confirmation",
  },
  {
    title: "Production observability",
    description: "Health endpoints, log scans, runtime verifiers, and operator-visible job states.",
    proof: "Knox /api/health and HotlistVerify queue visibility",
  },
  {
    title: "Cost-aware model routing",
    description: "Route by task complexity, cache where it matters, and design loops with inference economics in mind.",
    proof: "LiteLLM routing layer on self-hosted VPS stack",
  },
  {
    title: "Full-stack product delivery",
    description: "Next.js apps, APIs, auth flows, admin tools, email, and deployment — end to end.",
    proof: "Knox Client Portal and multiple live client domains",
  },
  {
    title: "VPS & Docker operations",
    description: "systemd, nginx, backups, compose profiles, and rollback-friendly deploy habits on Linux.",
    proof: "Production services on owned VPS infrastructure",
  },
  {
    title: "Workflow automation",
    description: "n8n scaffolds, Zapier edges, cron sync, and staged activation instead of reckless auto-run.",
    proof: "Disabled-by-default n8n imports with validation runbooks",
  },
  {
    title: "Human handoff design",
    description: "Automation for busy work, explicit moments where a person must step in.",
    proof: "Preview-confirm queues and connector honesty messaging",
  },
]