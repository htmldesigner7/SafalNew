export function withBasePath(path: string): string {
  if (path.startsWith("http://") || path.startsWith("https://")) return path;

  const prefix = (process.env.NEXT_PUBLIC_BASE_PATH || "").replace(/\/$/, "");
  const normalized = path.startsWith("/") ? path : `/${path}`;

  if (!prefix || normalized === prefix || normalized.startsWith(`${prefix}/`)) {
    return normalized.replace(/\/{2,}/g, "/");
  }

  return `${prefix}${normalized}`.replace(/\/{2,}/g, "/");
}