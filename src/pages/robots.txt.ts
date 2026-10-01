import type { APIRoute } from 'astro';

// Search/answer bots and training bots are listed separately on purpose:
// each vendor treats them as independent switches (see docs/AISO-REPORT.md).
export const GET: APIRoute = ({ site }) =>
  new Response(
    `# Search & AI answer engines: allowed, we want to be found and cited
User-agent: Googlebot
User-agent: Bingbot
User-agent: OAI-SearchBot
User-agent: ChatGPT-User
User-agent: PerplexityBot
User-agent: Perplexity-User
User-agent: Claude-SearchBot
User-agent: Claude-User
Allow: /

# Model training: allowed by choice, a small travel brand benefits from being in model knowledge
User-agent: GPTBot
User-agent: ClaudeBot
User-agent: Google-Extended
User-agent: CCBot
Allow: /

User-agent: *
Allow: /

Sitemap: ${new URL('sitemap-index.xml', site)}
`,
    { headers: { 'Content-Type': 'text/plain; charset=utf-8' } },
  );
