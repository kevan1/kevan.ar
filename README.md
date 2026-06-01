# Kevin Anrique Portfolio

Personal portfolio for Kevin Anrique, Founder & CTO of Cachin, building crypto
payment rails, AI agents, and privacy-focused apps.

The site highlights current work first, especially Cachin, while keeping older
projects, writing, contact paths, and an AI chatbot available from a small,
fast Next.js interface.

![Portfolio preview](/public/kevan-ar.png)

## Features

- Project showcase ordered by current importance
- Cachin-first public positioning and private-project case studies
- AI chatbot trained on portfolio pages, data files, and post metadata
- MDX blog
- Contact form and calendar embed
- Dark/light theme support
- Vercel Analytics and Speed Insights

## Stack

- Next.js App Router
- TypeScript
- Tailwind CSS
- Radix UI primitives
- LangChain and OpenAI for chatbot/retrieval
- Astra DB vector storage
- Upstash Redis cache
- Resend contact email
- Vercel deployment

## Development

Install dependencies:

```bash
pnpm install
```

Create local environment variables:

```bash
cp .env.example .env.local
```

Required values for the full chatbot/contact flow:

```env
OPENAI_API_KEY=
UPSTASH_REDIS_REST_URL=
UPSTASH_REDIS_REST_TOKEN=
ASTRA_DB_API_ENDPOINT=
ASTRA_DB_APPLICATION_TOKEN=
ASTRA_DB_COLLECTION=
RESEND_API_KEY=
```

Run locally:

```bash
pnpm run dev
```

Generate chatbot embeddings:

```bash
pnpm run gen
```

Build:

```bash
pnpm run build
```

## Content

- Project data: `src/data/projects.json`
- Career data: `src/data/career.json`
- Education data: `src/data/education.json`
- Social links: `src/data/socials.json`
- Blog posts: `content/*.mdx`
- Portfolio refresh spec: `docs/specs/portfolio-refresh-2026.md`

Private repos should be presented as sanitized case studies. Do not add private
source links unless the repo is intentionally made public.

## Contact

- Portfolio: https://kevan.ar
- Email: hey@kevan.ar
- GitHub: https://github.com/kevan1
- LinkedIn: https://linkedin.com/in/kevinanrique
