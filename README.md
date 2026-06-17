# Coolstuff — E-commerce Portfolio Project

A frontend e-commerce app built to demonstrate a modern React stack. Originally scaffolded with Create React App; fully migrated and modernised as a learning project.

## Tech Stack

| Tool | Why |
|------|-----|
| **Vite** | Replaces CRA — significantly faster dev server and build times |
| **React 18** | `createRoot` API, concurrent rendering |
| **TypeScript** | Type safety across components, context, and data models |
| **React Router v6** | `Routes`/`element` API replacing v5 `Switch`/`component` |
| **Tailwind CSS v4** | Utility-first styling, no custom CSS needed |
| **shadcn/ui** | Accessible, composable components (Carousel, Button) |

## Features

- Product grid with responsive layout (1 → 2 → 3 columns)
- Product detail page with variant and quantity selection
- Shopping cart with add, remove, and quantity support
- Cart count badge in the nav
- Cart persists across page refreshes via `localStorage`
- Checkout confirmation flow

## Running Locally

```bash
npm install
npm run dev
```

App runs at `http://localhost:5173`

## Project Structure

```
src/
  components/
    carousel/     # Hero carousel (shadcn/embla)
    grid/         # Product listing grid
    items/        # Product detail page
    cart/         # Cart page
    nav/          # Navigation with cart badge
    footer/       # Footer
  context/
    ItemContext   # Provides product list to the app
    CartContext   # Cart state + localStorage sync
  data/
    mockData.ts   # Static product data with TypeScript types
```

## What Was Migrated

This started as a 2021 CRA project using React 17, Bootstrap, SCSS modules, and Firebase. The migration involved:

- CRA → Vite (faster builds, native ESM, no ejecting)
- React 17 → 18 (`ReactDOM.render` → `createRoot`)
- React Router v5 → v6
- Bootstrap + react-bootstrap → Tailwind CSS + shadcn/ui
- SCSS modules → Tailwind utility classes
- Firebase Firestore → static mock data
- JavaScript → TypeScript throughout
