import { ArrowUpRight } from "lucide-react"
import { HOTLIST_ENGINE_URL } from "@/lib/site-links"

export function EngineBanner() {
  return (
    <div className="border-b border-border/20 bg-muted/40">
      <div className="max-w-7xl mx-auto px-6 lg:px-8 py-2 flex flex-col sm:flex-row items-center justify-center gap-1 sm:gap-2 text-center text-xs sm:text-sm text-muted-foreground">
        <span>Real estate team with active leads?</span>
        <a
          href={HOTLIST_ENGINE_URL}
          className="inline-flex items-center gap-1 font-medium text-foreground hover:opacity-80 transition-opacity"
        >
          Agent Tech Concierge at hotlistengine.com
          <ArrowUpRight className="h-3.5 w-3.5" aria-hidden="true" />
        </a>
      </div>
    </div>
  )
}