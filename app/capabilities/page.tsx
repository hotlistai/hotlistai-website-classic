import type { Metadata } from "next"
import Link from "next/link"
import { ArrowRight } from "lucide-react"
import { SiteFooter } from "@/components/site-footer"
import { SiteHeader } from "@/components/site-header"
import { capabilities } from "@/lib/lab-content"

export const metadata: Metadata = {
  title: "Capabilities",
  description:
    "Hotlist AI production skills — agent orchestration, guardrails, evals, MCP integrations, VPS operations, and full-stack delivery.",
  alternates: { canonical: "/capabilities" },
}

export default function CapabilitiesPage() {
  return (
    <div className="min-h-screen flex flex-col bg-background text-foreground">
      <SiteHeader />

      <main className="flex-1 pt-14">
        <section className="py-20 md:py-28 px-4 md:px-6 border-b border-border/40">
          <div className="max-w-4xl mx-auto">
            <p className="text-xs font-mono text-muted-foreground tracking-wider uppercase mb-5">What we build</p>
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-serif tracking-tight leading-[1.05] mb-6">
              Production AI capabilities, not demo theater.
            </h1>
            <p className="text-lg md:text-xl text-muted-foreground leading-relaxed max-w-2xl">
              Orchestration, evals, guardrails, cost awareness, and systems that survive operators — backed by shipped
              work in The Lab.
            </p>
          </div>
        </section>

        <section className="py-16 md:py-24 px-4 md:px-6">
          <div className="max-w-5xl mx-auto grid md:grid-cols-2 gap-6">
            {capabilities.map((cap) => (
              <div
                key={cap.title}
                className="rounded-2xl border border-border/40 bg-card p-8 hover:border-foreground/20 transition-colors"
              >
                <h2 className="font-serif text-2xl mb-3">{cap.title}</h2>
                <p className="text-muted-foreground leading-relaxed mb-6">{cap.description}</p>
                <p className="text-xs font-mono uppercase tracking-wider text-muted-foreground">
                  Proof: <span className="text-foreground normal-case tracking-normal font-sans text-sm">{cap.proof}</span>
                </p>
              </div>
            ))}
          </div>
        </section>

        <section className="py-20 px-4 md:px-6 border-t border-border/40 bg-muted/10">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="font-serif text-3xl md:text-4xl mb-4">See it in shipped work</h2>
            <p className="text-muted-foreground mb-8">Every capability maps to a case study with real constraints.</p>
            <div className="flex flex-col sm:flex-row gap-3 justify-center">
              <Link
                href="/work"
                className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-full bg-foreground text-background text-sm font-medium hover:opacity-90 transition-opacity"
              >
                View case studies <ArrowRight className="h-4 w-4" />
              </Link>
              <Link
                href="/lab"
                className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-full border border-border/50 text-sm font-medium hover:border-foreground/40 transition-colors"
              >
                Explore The Lab
              </Link>
            </div>
          </div>
        </section>
      </main>

      <SiteFooter />
    </div>
  )
}