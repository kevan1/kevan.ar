# WARP.md

This file provides guidance to WARP (warp.dev) when working with code in this repository.

Repository purpose: Kevan’s developer portfolio built with Next.js (App Router), TypeScript, Tailwind + shadcn/ui, MDX blog, and an AI-powered chatbot backed by LangChain, OpenAI, Astra DB (vector store), and Upstash Redis (cache).

Commands
- Install dependencies
  - pnpm install
- Development server
  - pnpm dev
- Build (note: runs embeddings generation first via the build script)
  - pnpm build
    - package.json build runs: npm run gen && next build
    - You can also run embeddings separately: pnpm gen
- Start (production)
  - pnpm start
- Lint
  - pnpm lint
- Format (Prettier)
  - pnpm format
- Tests
  - No test runner is configured in this repo at present.

Environment and prerequisites
- Node.js LTS and PNPM are expected (README aligns with PNPM).
- Required environment variables (see .env.example). Typical keys:
  - OPENAI_API_KEY
  - ASTRA_DB_API_ENDPOINT
  - ASTRA_DB_APPLICATION_TOKEN
  - ASTRA_DB_COLLECTION (defaults to "embeddings" in .env.example)
  - UPSTASH_REDIS_REST_URL
  - UPSTASH_REDIS_REST_TOKEN
  - Optional: RESEND_API_KEY (email)
- The embeddings generator loads env from .env.local (scripts/generate.ts: dotenv.config({ path: ".env.local" })). For local dev, ensure .env.local has the same keys.

Important operational notes
- Embeddings generation clears existing data:
  - Scripts at scripts/generate.ts delete all documents from the AstraDB collection and flush the Upstash Redis database before re-populating.
  - Run pnpm gen with care in shared/staging/prod environments.
- Vector DB hard requirements (src/lib/vectordb.ts):
  - Throws if ASTRA_DB_API_ENDPOINT, ASTRA_DB_APPLICATION_TOKEN, or ASTRA_DB_COLLECTION are missing.
  - Uses OpenAI text-embedding-3-small (dimension 1536, cosine).
- Chat models (src/app/api/chat/route.ts):
  - Primary: o4-mini-2025-04-16 (streaming enabled)
  - Rephrasing: gpt-3.5-turbo-0125
  - Requires OPENAI_API_KEY and working Upstash Redis cache.

High-level architecture
- Next.js App Router
  - Pages under src/app with conventional routing (e.g., src/app/page.tsx, src/app/blog/[slug]/page.tsx, src/app/contact/page.tsx).
  - API route: src/app/api/chat/route.ts provides the AI chat endpoint.
  - Global layout and NotFound in src/app/layout.tsx and src/app/not-found.tsx.
- UI layer
  - Tailwind CSS with shadcn/ui primitives (tailwind.config.ts extends theme, animations; components in src/components and src/components/ui/*).
  - Theming via next-themes; darkMode configured in tailwind.config.ts.
- Content system (blog)
  - MDX posts stored in /content (e.g., content/my-portfolio-is-live.mdx).
  - Post utilities in src/lib/posts.ts: getPostBySlug, getPosts, getPostMetaData using gray-matter for frontmatter.
- Structured data
  - JSON data for portfolio sections in src/data (career.json, education.json, projects.json, socials.json).
- AI chat pipeline (RAG)
  - Vector store: Astra DB via @langchain/community/vectorstores/astradb configured in src/lib/vectordb.ts.
  - Cache: Upstash Redis used via UpstashRedisCache; also flushed during embedding generation.
  - Request flow (src/app/api/chat/route.ts):
    1) Accepts messages array; streams responses via LangChainStream.
    2) History-aware query rephrasing with a secondary model to produce a retrieval query (createHistoryAwareRetriever).
    3) Retrieval from Astra DB vector store using the retriever.
    4) "Stuff" documents into a final prompt (createStuffDocumentsChain) with a system prompt tailored to the portfolio.
    5) Streams the ChatOpenAI response back to the client.
- Embeddings generation (scripts/generate.ts)
  - Sources:
    - Routes: Loads src/app, keeps only page.tsx files; strips imports and className props; splits HTML content into chunks.
    - Data: Loads JSON from src/data; splits as JavaScript.
    - Blog: Loads content/*.mdx; uses only frontmatter section; splits as Markdown.
  - Process:
    - Clears Astra collection and Upstash DB.
    - Adds split documents to the Astra vector store.
  - Run with: pnpm gen (or as part of pnpm build).

Development tips specific to this repo
- When adding new pages (page.tsx), data JSON, or MDX posts, re-run pnpm gen to keep the vector index in sync with site content before relying on the chatbot for those changes.
- If you adjust embedding or model parameters, update both scripts/generate.ts and src/lib/vectordb.ts or the chat route as appropriate, and regenerate embeddings.
- The build script currently shells out to npm for the gen step ("npm run gen"). Ensure npm is available, or run pnpm gen manually prior to pnpm build if needed.

Key files to know
- src/app/api/chat/route.ts — AI chat streaming and retrieval chain orchestration.
- scripts/generate.ts — End-to-end embeddings ingestion and indexing.
- src/lib/vectordb.ts — Astra DB vector store and collection accessors.
- src/lib/posts.ts — MDX blog content helpers.
- tailwind.config.ts — Tailwind theme, dark mode, and plugin config.
- README.md — Setup requirements, tech stack overview, and project structure.

