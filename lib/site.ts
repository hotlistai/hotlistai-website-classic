export const SITE_URL = (
  process.env.NEXT_PUBLIC_SITE_URL ||
  process.env.SITE_URL ||
  "https://hotlistai.com"
).replace(/\/$/, "")

export function getSiteUrl() {
  return SITE_URL
}