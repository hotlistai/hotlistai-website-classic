"use client"
import { SiteHeader } from "@/components/site-header"
import { SiteFooter } from "@/components/site-footer"
import { ArrowRight, Building, Mail, Zap } from "lucide-react"
import Link from "next/link"
import { useScrollAnimations } from "@/lib/scroll-animations"

const featuredProducts = [
  {
    icon: Building,
    status: "Active",
    statusClass: "text-green-600 border-green-600/30 bg-green-500/10",
    title: "Estate Mogul",
    description:
      "Multi-agent real estate ops system — deal flow, workspace tools, and specialized agents working as one boardroom.",
    href: "/lab#estate-mogul",
    delay: "",
  },
  {
    icon: Mail,
    status: "In Development",
    statusClass: "text-amber-700 border-amber-600/30 bg-amber-500/10",
    title: "LyftEmail",
    description:
      "Communication intelligence for operators who need fast triage, drafting, and follow-through — not another inbox tab.",
    href: "/lab#lyftemail",
    delay: "delay-100",
  },
  {
    icon: Zap,
    status: "Beta",
    statusClass: "text-muted-foreground border-border/50",
    title: "PRIME",
    description:
      "Prompt and workflow refinement layer for teams shipping agentic systems that need repeatable quality.",
    href: "/lab#prime",
    delay: "delay-200",
  },
]

export default function Home() {
  useScrollAnimations()

  return (
    <div className="min-h-screen flex flex-col bg-background text-foreground selection:bg-foreground selection:text-background overflow-x-hidden">
      <SiteHeader />

      <main className="flex-1">
        <article>
          <section
            className="relative min-h-[90vh] flex items-center justify-center px-4 md:px-6"
            aria-labelledby="hero-heading"
          >
            <div className="absolute inset-0 overflow-hidden pointer-events-none">
              <div className="absolute top-1/4 left-1/4 w-[500px] h-[500px] rounded-full bg-muted/30 blur-[100px] animate-blob-pulse" />
              <div className="absolute bottom-1/4 right-1/4 w-[400px] h-[400px] rounded-full bg-muted/20 blur-[80px] animate-blob-pulse delay-200" />
            </div>

            <div className="relative z-10 max-w-5xl mx-auto text-center space-y-8">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-border/50 bg-card mb-6 animate-fade-in">
                <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
                <span className="text-xs font-medium text-muted-foreground uppercase tracking-wide">
                  AI Lab · Building in public
                </span>
              </div>

              <h1
                id="hero-heading"
                className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-serif tracking-tight leading-[0.9] text-balance animate-fade-in-up delay-100"
              >
                Agentic systems <br />
                <span className="text-muted-foreground">for real work.</span>
              </h1>

              <p className="text-xl md:text-2xl text-muted-foreground max-w-3xl mx-auto leading-relaxed animate-fade-in-up delay-200">
                Hotlist AI is a product lab for digital counterparts — autonomous agents that own workflows, not
                chatbots that wait for prompts. We build, test, and ship what we use.
              </p>

              <div className="flex flex-col sm:flex-row gap-4 justify-center pt-4 animate-fade-in-up delay-300">
                <Link
                  href="/lab"
                  className="group inline-flex items-center justify-center gap-2 bg-foreground text-background px-8 py-4 rounded-full text-lg font-medium transition-all hover:scale-105 active:scale-95"
                >
                  Explore The Lab
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </Link>
                <Link
                  href="/company"
                  className="group inline-flex items-center justify-center gap-2 border border-border/50 px-8 py-4 rounded-full text-lg font-medium transition-all hover:border-foreground/40 hover:scale-105 active:scale-95"
                >
                  Who we are
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </Link>
              </div>
            </div>
          </section>

          <section className="py-24 border-t border-border/40 bg-muted/20" aria-labelledby="products-heading">
            <div className="max-w-7xl mx-auto px-4 md:px-6">
              <header className="text-center mb-12 scroll-animate">
                <h2 id="products-heading" className="font-serif text-4xl md:text-5xl mb-4">
                  What we are shipping
                </h2>
                <p className="text-muted-foreground max-w-2xl mx-auto text-lg">
                  Live systems and active experiments from The Lab — status updated honestly.
                </p>
              </header>

              <div className="grid md:grid-cols-3 gap-8 mb-12">
                {featuredProducts.map((product) => (
                  <div
                    key={product.title}
                    className={`group p-8 bg-card border border-border/50 rounded-lg hover:border-foreground/20 hover:scale-[1.02] transition-all scroll-animate ${product.delay}`}
                  >
                    <div className="w-12 h-12 bg-muted/50 border border-border/50 flex items-center justify-center rounded-lg mb-6 group-hover:bg-muted transition-colors">
                      <product.icon className="w-6 h-6 text-foreground" strokeWidth={1.5} />
                    </div>
                    <div className="mb-4">
                      <span
                        className={`text-[10px] uppercase tracking-wider font-semibold border px-2 py-1 rounded-sm ${product.statusClass}`}
                      >
                        {product.status}
                      </span>
                    </div>
                    <h3 className="font-serif text-2xl mb-3">{product.title}</h3>
                    <p className="text-muted-foreground leading-relaxed mb-6">{product.description}</p>
                    <Link
                      href={product.href}
                      className="inline-flex items-center gap-2 text-sm font-medium group-hover:gap-3 transition-all"
                    >
                      Learn more <ArrowRight className="w-4 h-4" />
                    </Link>
                  </div>
                ))}
              </div>

              <div className="text-center scroll-animate">
                <Link
                  href="/lab"
                  className="inline-flex items-center gap-2 text-sm font-medium border-b border-border/50 hover:border-foreground transition-colors"
                >
                  View all products in The Lab <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
            </div>
          </section>

          <section
            className="py-20 md:py-32 px-4 md:px-6 border-t border-border/40"
            aria-labelledby="philosophy-heading"
          >
            <div className="max-w-6xl mx-auto">
              <header className="text-center mb-16 scroll-animate">
                <h2 id="philosophy-heading" className="text-3xl md:text-4xl font-serif tracking-tight mb-4">
                  How we think about agents
                </h2>
                <p className="text-muted-foreground max-w-xl mx-auto leading-relaxed">
                  The market calls them agents. We still call the best ones counterparts — because they own outcomes.
                </p>
              </header>

              <div className="grid md:grid-cols-3 gap-8">
                {[
                  {
                    title: "Jobs, not prompts",
                    description: "A counterpart owns a lane of work. An agent that only answers when asked is still a tool.",
                  },
                  {
                    title: "Ship what we use",
                    description: "Every release goes through real operators, real friction, and real revision.",
                  },
                  {
                    title: "Clarity over complexity",
                    description: "If the system needs a manual, we have not finished building it.",
                  },
                ].map((item, index) => (
                  <div
                    key={item.title}
                    className={`scroll-animate delay-${(index + 1) * 100} group p-6 md:p-8 rounded-xl bg-muted/30 border border-border/30 hover:border-border/60 hover:bg-muted/50 transition-all duration-300`}
                  >
                    <h3 className="text-xl font-semibold mb-3 group-hover:text-foreground transition-colors">
                      {item.title}
                    </h3>
                    <p className="text-muted-foreground leading-relaxed">{item.description}</p>
                  </div>
                ))}
              </div>
            </div>
          </section>

          <section className="py-20 md:py-32 px-4 md:px-6 border-t border-border/40" aria-labelledby="cta-heading">
            <div className="max-w-3xl mx-auto text-center scroll-animate">
              <h2 id="cta-heading" className="text-3xl md:text-4xl font-serif tracking-tight mb-6">
                Building something with us?
              </h2>
              <p className="text-muted-foreground text-lg mb-8 max-w-xl mx-auto">
                Partners, founders, and builders — reach out if you want to collaborate on agentic systems or explore
                what is coming out of The Lab.
              </p>
              <div className="flex flex-col sm:flex-row gap-3 justify-center">
                <Link
                  href="/contact"
                  className="px-10 py-4 text-base font-medium rounded-full bg-foreground text-background hover:bg-foreground/90 transition-all inline-flex items-center justify-center gap-2 group hover:scale-105 active:scale-95"
                >
                  Talk to the Lab
                  <ArrowRight className="h-4 w-4" />
                </Link>
                <Link
                  href="/ethos"
                  className="px-10 py-4 text-base font-medium rounded-full border border-border/50 hover:border-foreground/40 transition-all inline-flex items-center justify-center gap-2"
                >
                  Read our ethos
                </Link>
              </div>
            </div>
          </section>
        </article>
      </main>

      <SiteFooter />
    </div>
  )
}