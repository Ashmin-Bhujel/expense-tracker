# Expense Tracker

Full stack expense tracker application.

This is a monorepo setup for the application using [`pnpm workspace`](https://pnpm.io/workspaces) and [`turborepo`](https://turborepo.dev).

## Project Structure

### Apps

- [`apps/api`](./apps/api/README.md) - Backend built using TypeScript, Node.js, Express, MongoDB
- [`apps/web`](./apps/web/README.md) - Frontend built using TypeScript, Vite, React.js, TanStack Router

### Packages

- `packages/typescript-config` - Shareable TypeScript configurations
- `packages/eslint-config` - Shareable ESLint configurations
- `packages/zod` - Shareable Zod schemas and types
