"use client"

import { Calendar } from "lucide-react"
import { useEffect } from "react"

const CAL_NAMESPACE = "build-session"
const DEFAULT_CAL_LINK = "hotlistai/build-session"
const CAL_LINK = process.env.NEXT_PUBLIC_CAL_COM_BUILD_LINK || DEFAULT_CAL_LINK
const CAL_CONFIG = '{"layout":"month_view","useSlotsViewOnSmallScreen":"true"}'

interface CalBookingButtonProps {
  variant?: "primary" | "secondary" | "inline"
  size?: "sm" | "md" | "lg"
  className?: string
  children?: React.ReactNode
}

export function CalBookingButton({
  variant = "primary",
  size = "md",
  className = "",
  children,
}: CalBookingButtonProps) {
  useEffect(() => {
    if (typeof window === "undefined") {
      return
    }

    const win = window as Window & {
      Cal?: (...args: unknown[]) => void
    }

    if (!win.Cal) {
      ;((C: Window & { Cal?: (...args: unknown[]) => void }, A: string, L: string) => {
        const p = (a: { q: unknown[] }, ar: unknown) => {
          a.q.push(ar)
        }
        const d = document
        C.Cal =
          C.Cal ||
          function (...args: unknown[]) {
            const cal = C.Cal as { loaded?: boolean; ns: Record<string, unknown>; q: unknown[] }
            const ar = args
            if (!cal.loaded) {
              cal.ns = {}
              cal.q = cal.q || []
              const script = d.createElement("script")
              script.src = A
              d.head.appendChild(script)
              cal.loaded = true
            }
            if (ar[0] === L) {
              const api = (...innerArgs: unknown[]) => {
                p(api as unknown as { q: unknown[] }, innerArgs)
              }
              const namespace = ar[1]
              ;(api as { q: unknown[] }).q = []
              if (typeof namespace === "string") {
                cal.ns[namespace] = cal.ns[namespace] || api
                p(cal.ns[namespace] as { q: unknown[] }, ar)
                p(cal, ["initNamespace", namespace])
              } else {
                p(cal, ar)
              }
              return
            }
            p(cal, ar)
          }
      })(win, "https://app.cal.com/embed/embed.js", "init")
    }

    win.Cal?.("init", CAL_NAMESPACE, { origin: "https://app.cal.com" })
    const calGlobal = win as Window & { Cal?: { config?: { forwardQueryParams?: boolean }; ns?: Record<string, (cmd: string, opts: object) => void> } }
    if (calGlobal.Cal) {
      calGlobal.Cal.config = calGlobal.Cal.config || {}
      calGlobal.Cal.config.forwardQueryParams = true
      calGlobal.Cal.ns?.[CAL_NAMESPACE]?.("ui", {
        hideEventTypeDetails: false,
        layout: "month_view",
      })
    }
  }, [])

  const baseStyles =
    "inline-flex items-center justify-center gap-2 rounded-full font-medium transition-all hover:scale-105 active:scale-95"

  const variantStyles = {
    primary: "bg-foreground text-background hover:bg-foreground/90",
    secondary: "border border-border/50 hover:border-foreground/40 bg-background",
    inline: "underline hover:no-underline",
  }

  const sizeStyles = {
    sm: "px-4 py-2 text-sm",
    md: "px-8 py-4 text-base",
    lg: "px-10 py-5 text-lg",
  }

  const styles =
    variant === "inline"
      ? `${variantStyles[variant]} ${className}`
      : `${baseStyles} ${variantStyles[variant]} ${sizeStyles[size]} ${className}`

  return (
    <button
      type="button"
      data-cal-link={CAL_LINK}
      data-cal-namespace={CAL_NAMESPACE}
      data-cal-config={CAL_CONFIG}
      className={styles}
    >
      {children || (
        <>
          <Calendar className="w-4 h-4" />
          Book a build session
        </>
      )}
    </button>
  )
}