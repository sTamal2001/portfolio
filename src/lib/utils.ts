/** Join class names, skipping falsy values. */
export function cn(...classes: Array<string | false | null | undefined>): string {
  return classes.filter(Boolean).join(" ");
}

/**
 * Placeholders for missing config values are only shown while developing,
 * so a production build never displays unfinished content.
 */
export const showPlaceholders = process.env.NODE_ENV !== "production";

export function isExternal(href: string): boolean {
  return /^https?:\/\//.test(href);
}
