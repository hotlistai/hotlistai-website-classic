"use client"

import Image from "next/image"
import Link from "next/link"
import { ArrowRight, CheckCircle2 } from "lucide-react"
import { CalBookingButton } from "@/components/cal-booking-button"
import { SiteFooter } from "@/components/site-footer"
import { SiteHeader } from "@/components/site-header"
import {
  capabilities,
  caseStudies,
  engagementSteps,
  founder,
  proofStats,
} from "@/lib/hire-content"
import { useScrollAnimations } from "@/lib/scroll-animations"

const featuredWork = caseStudies.filter((study) => study.featured)

export default function Home() {
  useScrollAnimations()

  return (
    <div className="min-h-screen flex flex-col bg-background text-foreground selection:bg-foreground selection:text-background overflow-x-hidden">
      <SiteHeader />

      <main className="flex-1">
        <section className="relative pt-14 border-b border-border/40" aria-labelledby="hero-heading">
          <div className="max-w-6xl mx-auto px-4 md:px-6 py-16 md:py-24 grid lg:grid-cols-[1.1fr_0.9fr] gap-12 items-center">
            <div className="space-y-8">
              <p className="text-xs font-mono text-muted-foreground tracking-wider uppercase">
                {founder.location} · {founder.title}
              </p>
              <div className="space-y-4">
                <h1 id="hero-heading" className="text-5xl sm:text-6xl md:text-7xl font-serif tracking-tight leading-[0.95]">
                  {founder.name}
                </h1>
                <p className="text-2xl md:text-3xl text-muted-foreground font-serif leading-tight">{founder.tagline}</p>
              </div>
              <p className="text-lg text-muted-foreground leading-relaxed max-w-xl">{founder.bio}</p>
              <div className="flex flex-col sm:flex-row gap-3">
                <CalBookingButton size="lg">Book a build session</CalBookingButton>
                <Link
                  href="/work"
                  className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-full border border-border/50 text-base font-medium hover:border-foreground/40 transition-colors"
                >
                  See production work <ArrowRight className="h-4 w-4" />
                </Link>
              </div>
              <p className="text-sm text-muted-foreground">
                Hotlist AI is my lab. The hire is the builder — agent systems, portals, and infrastructure shipped to
                production.
              </p>
            </div>

            <div className="relative mx-auto w-full max-w-md lg:max-w-none">
              <div className="rounded-2xl border border-border/40 overflow-hidden bg-muted/20">
                <div className="relative aspect-[4/5]">
                  <Image
                    src="/johnny-apple-headshot.png"
                    alt={`${founder.name} — ${founder.title}`}
                    fill
                    sizes="(min-width: 1024px) 420px, 360px"
                    className="object-cover object-top"
                    priority
                  />
                </div>
                <div className="border-t border-border/40 px-6 py-4 flex items-center justify-between gap-4 bg-background">
                  <div>
                    <p className="font-medium">{founder.name}</p>
                    <p className="text-sm text-muted-foreground">Founder, Hotlist AI</p>
                  </div>
                  <p className="text-xs font-mono uppercase tracking-wider text-muted-foreground">Builder · Operator</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="py-12 border-b border-border/40 bg-muted/10" aria-label="Proof metrics">
          <div className="max-w-6xl mx-auto px-4 md:px-6 grid grid-cols-2 md:grid-cols-4 gap-4">
            {proofStats.map((stat, index) => (
              <div
                key={stat.label}
                className={`rounded-xl border border-border/40 bg-background p-5 scroll-animate delay-${index * 100}`}
              >
                <p className="font-serif text-3xl md:text-4xl mb-2">{stat.value}</p>
                <p className="text-xs uppercase tracking-wider text-muted-foreground leading-snug">{stat.label}</p>
              </div>
            ))}
          </div>
        </section>

        <section className="py-20 md:py-28 px-4 md:px-6 border-b border-border/40" aria-labelledby="work-heading">
          <div className="max-w-6xl mx-auto">
            <header className="max-w-3xl mb-12 scroll-animate">
              <p className="text-xs font-mono text-muted-foreground tracking-wider uppercase mb-4">Selected work</p>
              <h2 id="work-heading" className="text-4xl md:text-5xl font-serif tracking-tight mb-4">
                Production systems, not pitch decks.
              </h2>
              <p className="text-lg text-muted-foreground">
                A sample of agent loops, client apps, and infrastructure I have shipped and operated.
              </p>
            </header>

            <div className="grid md:grid-cols-3 gap-6 mb-10">
              {featuredWork.map((study, index) => (
                <Link
                  key={study.slug}
                  href={`/work#${study.slug}`}
                  className={`group rounded-2xl border border-border/40 bg-card p-8 hover:border-foreground/20 transition-all scroll-animate delay-${index * 100}`}
                >
                  <span className="text-[10px] uppercase tracking-wider font-semibold text-green-700 border border-green-600/30 px-2 py-1 rounded-sm bg-green-500/10">
                    {study.status}
                  </span>
                  <h3 className="font-serif text-2xl mt-5 mb-3 group-hover:text-foreground transition-colors">{study.name}</h3>
                  <p className="text-muted-foreground leading-relaxed mb-6">{study.headline}</p>
                  <span className="inline-flex items-center gap-2 text-sm font-medium">
                    Read case study <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
                  </span>
                </Link>
              ))}
            </div>

            <Link
              href="/work"
              className="inline-flex items-center gap-2 text-sm font-medium border-b border-border/50 hover:border-foreground transition-colors"
            >
              View all case studies <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </section>

        <section className="py-20 md:py-28 px-4 md:px-6 border-b border-border/40 bg-muted/10" aria-labelledby="capabilities-heading">
          <div className="max-w-6xl mx-auto">
            <header className="max-w-3xl mb-12 scroll-animate">
              <p className="text-xs font-mono text-muted-foreground tracking-wider uppercase mb-4">Capabilities</p>
              <h2 id="capabilities-heading" className="text-4xl md:text-5xl font-serif tracking-tight mb-4">
                Skills the market is actually hiring for.
              </h2>
              <p className="text-lg text-muted-foreground">
                Orchestration, evals, guardrails, integrations, and operations — with proof tied to shipped work.
              </p>
            </header>

            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 mb-10">
              {capabilities.slice(0, 6).map((cap, index) => (
                <div
                  key={cap.title}
                  className={`rounded-xl border border-border/40 bg-background p-6 scroll-animate delay-${index * 100}`}
                >
                  <h3 className="font-semibold mb-2">{cap.title}</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">{cap.description}</p>
                </div>
              ))}
            </div>

            <Link
              href="/capabilities"
              className="inline-flex items-center gap-2 text-sm font-medium border-b border-border/50 hover:border-foreground transition-colors"
            >
              View full capabilities <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </section>

        <section className="py-20 md:py-28 px-4 md:px-6 border-b border-border/40" aria-labelledby="process-heading">
          <div className="max-w-6xl mx-auto">
            <header className="max-w-3xl mb-12 scroll-animate">
              <p className="text-xs font-mono text-muted-foreground tracking-wider uppercase mb-4">How we work together</p>
              <h2 id="process-heading" className="text-4xl md:text-5xl font-serif tracking-tight">
                Start small. Ship something real.
              </h2>
            </header>
            <div className="grid md:grid-cols-3 gap-6">
              {engagementSteps.map((step, index) => (
                <div
                  key={step.step}
                  className={`rounded-2xl border border-border/40 p-8 scroll-animate delay-${index * 100}`}
                >
                  <p className="text-xs font-mono text-muted-foreground mb-4">{step.step}</p>
                  <h3 className="font-serif text-2xl mb-3">{step.title}</h3>
                  <p className="text-muted-foreground leading-relaxed">{step.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="py-20 md:py-28 px-4 md:px-6 border-b border-border/40 bg-muted/20" aria-labelledby="lab-heading">
          <div className="max-w-4xl mx-auto text-center scroll-animate">
            <p className="text-xs font-mono text-muted-foreground tracking-wider uppercase mb-4">The Lab</p>
            <h2 id="lab-heading" className="text-3xl md:text-4xl font-serif tracking-tight mb-4">
              Experiments that graduate into products.
            </h2>
            <p className="text-muted-foreground text-lg mb-8 max-w-2xl mx-auto">
              Estate Mogul, LyftEmail, PRIME, and the rest of the Hotlist AI product line live here — tested in the lab,
              shipped when they earn it.
            </p>
            <Link
              href="/lab"
              className="inline-flex items-center gap-2 px-8 py-4 rounded-full border border-border/50 font-medium hover:border-foreground/40 transition-colors"
            >
              Explore The Lab <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </section>

        <section className="py-20 md:py-28 px-4 md:px-6" aria-labelledby="cta-heading">
          <div className="max-w-3xl mx-auto text-center scroll-animate">
            <h2 id="cta-heading" className="text-3xl md:text-4xl font-serif tracking-tight mb-6">
              Building an agent system that has to survive operators?
            </h2>
            <p className="text-muted-foreground text-lg mb-8">
              Book a 30-minute build review. I will tell you honestly what is worth automating, what needs guardrails, and
              what a 1–2 week pilot could look like.
            </p>
            <div className="flex flex-col sm:flex-row gap-3 justify-center mb-8">
              <CalBookingButton size="lg">Book a build session</CalBookingButton>
              <a
                href={`mailto:${founder.links.email}`}
                className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-full border border-border/50 text-sm font-medium hover:border-foreground/40 transition-colors"
              >
                Email {founder.links.email}
              </a>
            </div>
            <div className="flex flex-wrap justify-center gap-x-6 gap-y-2 text-sm text-muted-foreground">
              <span className="inline-flex items-center gap-2">
                <CheckCircle2 className="h-4 w-4" />
                Private demos available
              </span>
              <span className="inline-flex items-center gap-2">
                <CheckCircle2 className="h-4 w-4" />
                Architecture walkthroughs
              </span>
              <span className="inline-flex items-center gap-2">
                <CheckCircle2 className="h-4 w-4" />
                Fractional build + deploy
              </span>
            </div>
          </div>
        </section>
      </main>

      <SiteFooter />
    </div>
  )
}