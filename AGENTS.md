<!-- BEGIN:nextjs-agent-rules -->
# This is NOT the Next.js you know

This version has breaking changes — APIs, conventions, and file structure may all differ from your training data. Read the relevant guide in `node_modules/next/dist/docs/` before writing any code. Heed deprecation notices.
<!-- END:nextjs-agent-rules -->

# Style Guidelines
- **No Local Paragraph Styles**: Do NOT add local CSS module classes (like `.paragraph`) to `<p>` tags. Paragraph styles are defined globally and should inherit automatically. Use global classes only if necessary.
