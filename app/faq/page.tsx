import { SiteHeader } from "@/components/site-header"
import { SiteFooter } from "@/components/site-footer"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "FAQ | Hotlist AI",
  description:
    "Frequently asked questions about Hotlist AI — who we are, what we build, production agent systems, The Lab products, Hotlist Funnels, and how to work with us.",
  keywords: [
    "Hotlist AI FAQ",
    "AI product lab",
    "production agent systems",
    "digital counterparts",
    "Hotlist Funnels",
    "Estate Mogul",
    "LyftEmail",
    "AI automation services",
    "custom AI systems",
  ],
  openGraph: {
    title: "Frequently Asked Questions | Hotlist AI",
    description:
      "Who Hotlist AI is, what we build, the services we provide, and how to get started with The Lab and production systems.",
    type: "website",
  },
  alternates: {
    canonical: "/faq",
  },
}

const faqs = [
  {
    category: "About Hotlist AI",
    questions: [
      {
        question: "What is Hotlist AI?",
        answer:
          "Hotlist AI is an AI product lab and venture studio. We build production agent systems, digital counterparts, client portals, and operator-grade infrastructure — tested in The Lab, shipped when they earn it. We are not a generic AI consultancy. We build, deploy, and operate real systems.",
      },
      {
        question: "Who founded Hotlist AI?",
        answer:
          "Hotlist AI was founded by Johnny Apple, a production AI systems builder and operator based in Frisco, Texas. Johnny brings Inc. 5000 operator experience (#212 ranked company) to how we design, ship, and run AI systems. For founder-led custom builds and fractional work, visit johnny-apple.com.",
      },
      {
        question: "What does Hotlist AI actually do?",
        answer:
          "We do three things: (1) build and maintain AI products in The Lab — like Estate Mogul, LyftEmail, and PRIME; (2) ship production proof systems — agent loops, client portals, verification pipelines, and VPS-backed runtimes; (3) deliver services for operators who need funnels, automation, integrations, or custom AI infrastructure. See our Work and Capabilities pages for specifics.",
      },
      {
        question: "How is Hotlist AI different from other AI companies?",
        answer:
          "Most AI companies sell demos, dashboards, or advice. We ship systems that survive operators — with guardrails, eval gates, honest connector boundaries, and infrastructure you can actually run. Every product goes through pressure testing in The Lab before it graduates. Proof over positioning.",
      },
      {
        question: "Who do you work with?",
        answer:
          "Founders, operators, real estate professionals, agencies, and businesses that need production AI — not another chatbot. Our clients and product users value clarity, speed, and systems that work under real constraints. If you need a polished demo for a pitch deck, we are probably not the right fit.",
      },
      {
        question: "Where is Hotlist AI based?",
        answer:
          "We are based in Frisco, Texas (North Dallas). We build for operators nationwide and deploy on owned VPS infrastructure as well as client environments.",
      },
    ],
  },
  {
    category: "What We Build",
    questions: [
      {
        question: "What is a digital counterpart?",
        answer:
          "A digital counterpart is an AI agent that owns a job — not just answers prompts. It understands context, makes decisions within defined boundaries, and handles workflows with guardrails. More like a specialized teammate than a chatbot. Estate Mogul is our flagship example: a real estate ops boardroom with multiple specialized agents.",
      },
      {
        question: "What kinds of production systems do you ship?",
        answer:
          "Agent orchestration loops (Telegram, workspace tools, LLM routing), self-hosted client portals with CRM sync, queue-based lead verification pipelines, Dockerized AI runtimes (LiteLLM, n8n, Postgres, Redis), multi-agent review layers, and full-stack Next.js apps with admin tooling. Every case study on our Work page shipped under real operational constraints.",
      },
      {
        question: "What is The Lab?",
        answer:
          "The Lab is where Hotlist AI products are born, tested, and refined. Experiments graduate into active deployments when they prove value. Current Lab products include Estate Mogul (active), LyftEmail (active), and PRIME (beta), with more in development. Explore The Lab to see the full product line.",
      },
      {
        question: "What is The Foundry?",
        answer:
          "The Foundry is our developer infrastructure layer — REST APIs, SDKs, webhooks, and self-hosted deployment options for Digital Counterparts. API access is coming soon. Contact us to request early access.",
      },
      {
        question: "Do you only build your own products?",
        answer:
          "No. We also build custom production systems for operators and partners — client portals, agent workflows, verification pipelines, and VPS infrastructure. Custom work is scoped, bounded, and designed to ship in weeks — not quarters. Reach out via our contact form to discuss fit.",
      },
    ],
  },
  {
    category: "Services We Provide",
    questions: [
      {
        question: "What services does Hotlist AI offer?",
        answer:
          "We provide: Lab product access and beta enrollment; Hotlist Funnels (high-velocity conversion systems with lead intelligence); production agent system design and deployment; client portal and admin app development; lead verification and enrichment pipelines; AI infrastructure setup (VPS, Docker, model routing, workflow automation); CRM and workspace integrations (Zapier, HubSpot, Google Workspace, and more); and partnership engagements for operators who need ongoing systems work.",
      },
      {
        question: "What is Hotlist Funnels?",
        answer:
          "Hotlist Funnels are mobile-first conversion systems built for speed and ROI. We design landing pages, apply behavioral psychology, integrate lead intelligence, and connect qualified leads to your CRM or pipeline. Built on Next.js for sub-second load times. Ideal for real estate, solar, legal, fitness, contractors, and other high-intent verticals.",
      },
      {
        question: "Can you build custom agent systems for my business?",
        answer:
          "Yes — when the scope is production-ready, not experimental. We build bounded agent lanes: intake routing, tool integrations, preview-confirm guardrails, eval gates, and VPS deployment. Typical pilots ship in 1–2 weeks. Contact us with your workflow and constraints, or visit johnny-apple.com for founder-led build engagements.",
      },
      {
        question: "Do you build client portals and internal apps?",
        answer:
          "Yes. We deliver token-based onboarding portals, multi-step questionnaires with autosave, admin APIs, branded email flows, CRM sync (Zapier and direct integrations), and self-hosted deployment on Linux VPS with nginx and systemd. Knox Client Portal is a live example on our Work page.",
      },
      {
        question: "Do you offer lead verification and enrichment?",
        answer:
          "Yes. HotlistVerify is our self-hosted lead verification pipeline — queue-based processing, third-party enrichment, operator dashboards, and Dockerized deployment. We can deploy similar systems for operators who need list validation at scale without manual spreadsheet work.",
      },
      {
        question: "Can you set up AI infrastructure on a VPS?",
        answer:
          "Yes. We compose production stacks: Docker Compose profiles, LiteLLM for model routing, n8n for workflow scaffolding, Postgres and Redis persistence, validation runbooks, and rollback-friendly deploy habits. Systems ship with disabled-by-default workflows and explicit activation gates — not reckless auto-run.",
      },
      {
        question: "What integrations do you support?",
        answer:
          "Google Workspace (Gmail, Sheets, Drive), Telegram, Zapier, HubSpot, Salesforce, Pipedrive, Follow Up Boss, kvCORE, Resend, Redis/BullMQ job queues, MCP tool connectors, and custom API edges. We design isolated token stores and least-privilege scopes per connector.",
      },
      {
        question: "Do you offer ongoing operations and hardening?",
        answer:
          "Yes, for systems we build or inherit. That includes health endpoints, backup cron, log scans, regression tests before deploy, and honest documentation of what the system can and cannot do. We do not hand off fragile demos and disappear.",
      },
    ],
  },
  {
    category: "The Lab Products",
    questions: [
      {
        question: "What is Estate Mogul?",
        answer:
          "Estate Mogul is a digital boardroom for real estate operators. Six specialized agents manage assets, contracts, tenant relations, property analysis, and strategic decisions. The production OS layer adds Telegram intake, workspace actions, preview-confirm guardrails, and VPS deployment — not just chatbot replies.",
      },
      {
        question: "How does LyftEmail work?",
        answer:
          "LyftEmail is communication intelligence built for speed. It reads, categorizes, prioritizes, and drafts responses across your inbox. The system learns your tone and context to handle email like you would — faster. Inbox zero is the default, not the goal.",
      },
      {
        question: "What is PRIME?",
        answer:
          "PRIME is the OS for your LLM. It transforms vague ideas into precision-built prompts — structuring intent, optimizing queries, and delivering strong first-pass outputs instead of twenty minutes of prompt fighting.",
      },
      {
        question: "Which products are available now?",
        answer:
          "Estate Mogul and LyftEmail are in active deployment. PRIME is in beta. Additional products — Hotlist Video, Hotlist Voice, TalentVibing, HelloFinn, and Hotlist Pediatrics — are in development. Request access or join waitlists through our contact form.",
      },
      {
        question: "How do I get access to a Lab product?",
        answer:
          "Submit a request through our contact form. Active deployment products are available on approval. Beta products require a short fit review. Coming-soon products have waitlists for early access.",
      },
    ],
  },
  {
    category: "How We Work",
    questions: [
      {
        question: "What is your build philosophy?",
        answer:
          "Clarity over complexity. Speed over sprawl. The counterpart model — active agents, not passive tools. We only ship what makes things clearer. Every system gets pressure testing, refinement, and real-world validation before it earns production status.",
      },
      {
        question: "How do you handle AI guardrails?",
        answer:
          "Guardrails are not optional. We use preview-confirm flows before irreversible actions (email send, sheet mutation), connector honesty when scopes or tokens are missing, least-privilege tool boundaries, eval and smoke gates before deploy, and explicit human handoff points where automation should stop.",
      },
      {
        question: "How long does a typical engagement take?",
        answer:
          "Lab product onboarding: days to weeks depending on product and fit review. Hotlist Funnels: typically 14–21 days from discovery to launch. Custom agent pilots: 1–2 weeks for a bounded lane with guardrails. Larger portal or infrastructure projects: scoped per engagement after a build review.",
      },
      {
        question: "What does your process look like for custom work?",
        answer:
          "Discovery call to map the workflow and failure modes. Scoped pilot with one bounded agent lane or integration. Deploy with eval gates and documentation. Operate and harden based on real operator feedback. We tell you honestly what is worth automating and what is not.",
      },
      {
        question: "What industries do you serve?",
        answer:
          "Real estate, solar, legal, restaurants and hospitality, contractors and home improvement, recruiting, nonprofits, fitness, and general B2B operators. If your vertical is not listed, reach out — we regularly build for new industries when the workflow is concrete enough to ship.",
      },
    ],
  },
  {
    category: "Pricing & Access",
    questions: [
      {
        question: "How much do Hotlist Funnels cost?",
        answer:
          "Custom funnel systems typically start at $2,500 setup plus ongoing management fees. Pricing depends on industry, ad spend, creative scope, and CRM complexity. Multi-location and enterprise engagements start around $5,000/month. Contact us for a scoped quote.",
      },
      {
        question: "How much does custom AI systems work cost?",
        answer:
          "Scoped by engagement. A bounded agent pilot is priced for 1–2 week delivery with guardrails and deploy. Larger portal or infrastructure builds are quoted after discovery. We do not sell open-ended retainers without a clear ship target.",
      },
      {
        question: "Do you offer free trials?",
        answer:
          "Select Lab products offer limited trial periods on approval. Funnel and custom system engagements typically start with a discovery call and scoped proposal — not a generic free tier.",
      },
      {
        question: "Can I cancel anytime?",
        answer:
          "Yes. Subscriptions and managed services require 30 days notice for cancellation. No long-term lock-in contracts.",
      },
    ],
  },
  {
    category: "Technical & Security",
    questions: [
      {
        question: "What AI models and stack do you use?",
        answer:
          "We are model-agnostic: OpenAI, Anthropic, self-hosted models via LiteLLM, and task-specific routing by complexity and cost. Stack includes Next.js, TypeScript, Python, Docker, Redis, Postgres, Telegram, Google Workspace APIs, n8n, Zapier, and Linux VPS with systemd and nginx.",
      },
      {
        question: "Is my data secure?",
        answer:
          "We follow strong security practices: encryption in transit, isolated secrets outside app trees, token-scoped access, server-side validation, backup cron before schema changes, and least-privilege connector scopes. Your data is not used to train third-party models without explicit consent.",
      },
      {
        question: "Do you offer API access?",
        answer:
          "API access is in development through The Foundry. Enterprise and qualifying partners can request early access. Contact us for documentation timelines and partnership discussion.",
      },
      {
        question: "Can I self-host or white-label?",
        answer:
          "Self-hosted deployment is a core capability — we run production systems on owned VPS infrastructure today. White-label and dedicated infrastructure options are available for qualifying enterprise partners. Reach out to discuss.",
      },
    ],
  },
]

export default function FAQPage() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.flatMap((category) =>
      category.questions.map((faq) => ({
        "@type": "Question",
        name: faq.question,
        acceptedAnswer: {
          "@type": "Answer",
          text: faq.answer,
        },
      })),
    ),
  }

  return (
    <div className="min-h-screen flex flex-col bg-background text-foreground">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />

      <SiteHeader />

      <main className="flex-1 pt-14">
        <article>
          <section className="py-20 md:py-24 px-4 md:px-6 border-b border-border/40">
            <div className="max-w-4xl mx-auto text-center">
              <p className="text-xs font-mono text-muted-foreground tracking-wider uppercase mb-5">FAQ</p>
              <h1 className="font-serif text-4xl md:text-5xl lg:text-6xl mb-6 tracking-tight">
                Who we are. What we build. How we work.
              </h1>
              <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed">
                Answers about Hotlist AI, our production systems, The Lab products, services, and how to get started.
              </p>
            </div>
          </section>

          {faqs.map((category, categoryIndex) => (
            <section
              key={category.category}
              className="py-16 md:py-20 px-4 md:px-6 border-b border-border/40"
              aria-labelledby={`category-${categoryIndex}`}
            >
              <div className="max-w-4xl mx-auto">
                <h2 id={`category-${categoryIndex}`} className="font-serif text-3xl md:text-4xl mb-12">
                  {category.category}
                </h2>

                <div className="space-y-8">
                  {category.questions.map((faq, faqIndex) => (
                    <div
                      key={faqIndex}
                      className="pb-8 border-b border-border/30 last:border-0 last:pb-0"
                      itemScope
                      itemProp="mainEntity"
                      itemType="https://schema.org/Question"
                    >
                      <h3 className="text-xl md:text-2xl font-semibold mb-4" itemProp="name">
                        {faq.question}
                      </h3>
                      <div itemScope itemProp="acceptedAnswer" itemType="https://schema.org/Answer">
                        <p className="text-muted-foreground leading-relaxed text-lg" itemProp="text">
                          {faq.answer}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </section>
          ))}

          <section className="py-20 md:py-24 px-4 md:px-6">
            <div className="max-w-3xl mx-auto text-center">
              <h2 className="font-serif text-3xl md:text-4xl mb-6">Still have questions?</h2>
              <p className="text-muted-foreground text-lg mb-8">
                Reach out about Lab access, funnels, partnerships, or custom production systems. We respond within 24
                hours.
              </p>
              <a
                href="/contact"
                className="inline-flex items-center gap-2 px-8 py-4 bg-foreground text-background rounded-full font-medium hover:scale-105 transition-transform active:scale-95"
              >
                Contact Us
              </a>
            </div>
          </section>
        </article>
      </main>

      <SiteFooter />
    </div>
  )
}