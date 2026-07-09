import type { Metadata } from "next"
import Link from "next/link"
import { ArrowRight, CheckCircle2, Shield } from "lucide-react"
import { SiteFooter } from "@/components/site-footer"
import { SiteHeader } from "@/components/site-header"
import { caseStudies } from "@/lib/lab-content"

export const metadata: Metadata = {
  title: "Work",
  description:
    "Production AI systems from Hotlist AI — Estate Mogul OS, Knox Client Portal, HotlistVerify, and self-hosted agent infrastructure.",
  alternates: { canonical: "/work" },
}

export default function WorkPage() {
  return (
    <div className="min-h-screen flex flex-col bg-background text-foreground">
      <SiteHeader />

      <main className="flex-1 pt-14">
        <section className="py-20 md:py-28 px-4 md:px-6 border-b border-border/40">
          <div className="max-w-4xl mx-auto">
            <p className="text-xs font-mono text-muted-foreground tracking-wider uppercase mb-5">Production proof</p>
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-serif tracking-tight leading-[1.05] mb-6">
              Systems that shipped under real constraints.
            </h1>
            <p className="text-lg md:text-xl text-muted-foreground leading-relaxed max-w-2xl">
              Not concept decks. Agent loops, client portals, verification pipelines, and VPS infrastructure — with
              guardrails, tests, and honest boundaries.
            </p>
          </div>
        </section>

        <section className="py-16 md:py-24 px-4 md:px-6">
          <div className="max-w-4xl mx-auto space-y-20">
            {caseStudies.map((study) => (
              <article
                key={study.slug}
                id={study.slug}
                className="scroll-mt-24 border-b border-border/30 pb-20 last:border-b-0 last:pb-0"
              >
                <div className="flex flex-wrap items-center gap-3 mb-4">
                  <span className="text-[10px] uppercase tracking-wider font-semibold text-green-700 border border-green-600/30 px-2 py-1 rounded-sm bg-green-500/10">
                    {study.status}
                  </span>
                </div>
                <h2 className="font-serif text-3xl md:text-4xl tracking-tight mb-3">{study.name}</h2>
                <p className="text-xl text-muted-foreground mb-8">{study.headline}</p>
                <p className="text-muted-foreground leading-relaxed mb-10">{study.summary}</p>

                <div className="grid md:grid-cols-2 gap-8 mb-10">
                  <div>
                    <h3 className="text-sm font-semibold uppercase tracking-wider mb-3">Problem</h3>
                    <p className="text-muted-foreground leading-relaxed">{study.problem}</p>
                  </div>
                  <div>
                    <h3 className="text-sm font-semibold uppercase tracking-wider mb-3">Approach</h3>
                    <p className="text-muted-foreground leading-relaxed">{study.approach}</p>
                  </div>
                </div>

                <div className="grid md:grid-cols-2 gap-8 mb-8">
                  <div>
                    <h3 className="inline-flex items-center gap-2 text-sm font-semibold uppercase tracking-wider mb-4">
                      <CheckCircle2 className="h-4 w-4" />
                      What shipped
                    </h3>
                    <ul className="space-y-2">
                      {study.shipped.map((item) => (
                        <li key={item} className="text-sm text-muted-foreground leading-relaxed pl-4 border-l border-border/50">
                          {item}
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div>
                    <h3 className="inline-flex items-center gap-2 text-sm font-semibold uppercase tracking-wider mb-4">
                      <Shield className="h-4 w-4" />
                      Guardrails
                    </h3>
                    <ul className="space-y-2">
                      {study.guardrails.map((item) => (
                        <li key={item} className="text-sm text-muted-foreground leading-relaxed pl-4 border-l border-border/50">
                          {item}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                <p className="text-xs font-mono uppercase tracking-wider text-muted-foreground">
                  {study.stack.join(" · ")}
                </p>
              </article>
            ))}
          </div>
        </section>

        <section className="py-20 px-4 md:px-6 border-t border-border/40 bg-muted/10">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="font-serif text-3xl md:text-4xl mb-4">Interested in a similar system?</h2>
            <p className="text-muted-foreground mb-8">
              Reach out about partnerships, or visit johnny-apple.com for custom builds and fractional work.
            </p>
            <div className="flex flex-col sm:flex-row gap-3 justify-center">
              <Link
                href="/contact"
                className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-full bg-foreground text-background text-sm font-medium hover:opacity-90 transition-opacity"
              >
                Contact Hotlist AI <ArrowRight className="h-4 w-4" />
              </Link>
              <a
                href="https://johnny-apple.com"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-full border border-border/50 text-sm font-medium hover:border-foreground/40 transition-colors"
              >
                Work with Johnny Apple <ArrowRight className="h-4 w-4" />
              </a>
            </div>
          </div>
        </section>
      </main>

      <SiteFooter />
    </div>
  )
}