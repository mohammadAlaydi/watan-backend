# Watan Backend

NestJS API for the Watan professional network.

## Tech Stack

- **Runtime**: Node.js 20+
- **Framework**: NestJS 11
- **Database**: PostgreSQL + Prisma 7
- **Auth**: Clerk
- **Docs**: Swagger / OpenAPI (dev only)

## Quick Start

```bash
# 1. Install dependencies
npm install

# 2. Copy environment file
cp .env.example .env
# → Fill in your real values

# 3. Generate Prisma client
npx prisma generate

# 4. Run migrations
npx prisma migrate dev

# 5. Start dev server
npm run dev
```

## Scripts

| Command | Description |
|---|---|
| `npm run start:dev` | Dev server with hot reload |
| `npm run build` | Production build |
| `npm run start:prod` | Start production server |
| `npm run lint` | Lint with ESLint |
| `npm run format` | Format with Prettier |
| `npm run test` | Unit tests |
| `npm run test:e2e` | E2E tests |

## API Docs

Swagger UI is available at `/api/docs` in development. Disabled in production.

## Health Check

`GET /api/health` — returns `{ status, timestamp, uptime }`.

## Docker

```bash
docker build -t watan-backend .
docker run -p 3001:3001 --env-file .env watan-backend
```

## Environment Variables

See [`.env.example`](.env.example) for all required variables.
