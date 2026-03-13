# Florist Website

A static one-page florist website built with React, TypeScript, and Vite. Styled with Tailwind CSS v4.

## Stack

- React 19 + TypeScript
- Vite 8
- Tailwind CSS v4 (via PostCSS)
- lucide-react

## Getting Started

```bash
cp .env.example .env   # fill in your business details
npm install
npm run dev
```

## Configuration

All business-specific content (name, address, phone, email, etc.) lives in `.env`. See `.env.example` for all available variables. The values are injected at build time — no sensitive data is committed to the repo.

## Scripts

| Command | Description |
|---|---|
| `npm run dev` | Start dev server |
| `npm run build` | Production build |
| `npm run preview` | Preview production build |
