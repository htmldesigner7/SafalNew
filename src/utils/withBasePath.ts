/** Encode each path segment so `&`, spaces, etc. work in CSS url() and browser requests. */
function encodePathSegments(path: string): string {
  return path
    .split("/")
    .map((segment, index) => (index === 0 ? segment : encodeURIComponent(segment)))
    .join("/");
}

export function withBasePath(path: string): string {
  if (path.startsWith("http://") || path.startsWith("https://")) return path;

  const prefix = (process.env.NEXT_PUBLIC_BASE_PATH || "").replace(/\/$/, "");
  const normalized = path.startsWith("/") ? path : `/${path}`;

  let result: string;
  if (!prefix || normalized === prefix || normalized.startsWith(`${prefix}/`)) {
    result = normalized;
  } else {
    result = `${prefix}${normalized}`;
  }

  return encodePathSegments(result.replace(/\/{2,}/g, "/"));
}
