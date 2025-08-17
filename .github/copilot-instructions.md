# Copilot Instructions for ecommeceproj

## Project Overview
- This is a Next.js e-commerce project using the `/app` directory structure, bootstrapped with `create-next-app`.
- The main UI and logic are in `src/app/` (routing, pages, context, reducers) and `src/component/` (reusable UI components).
- State management for the cart is handled via React context in `src/app/context/cart.jsx` and reducer logic in `src/app/reducer/CardReducer.jsx`.
- Product and feature data is served via API routes in `src/app/api/products/route.ts` and static data in `public/data.json`.

## Key Patterns & Conventions
- **Routing:** Uses Next.js App Router (`/app`) with file-based routing. Pages are in `src/app/[route]/page.tsx`.
- **Components:** Shared UI components are in `src/component/`. Example: `Navbar.tsx` uses context and shows cart count.
- **State:** Cart state is global via context (`useCart`). Update cart logic in `CardReducer.jsx`.
- **Styling:** Uses Tailwind CSS utility classes in JSX. Global styles in `src/app/globals.css`.
- **Icons:** Uses `react-icons` for UI icons (see imports in components like `Navbar.tsx`).
- **Data:** Product data is loaded from `public/data.json` or via API route.
- **TypeScript:** Most files use TypeScript (`.tsx`), but some context/reducer files are in JS (`.jsx`).

## Developer Workflows
- **Start Dev Server:** `npm run dev` (see README)
- **Edit UI:** Change files in `src/app/` or `src/component/` and the app will auto-reload.
- **Add a Page:** Create a new folder in `src/app/[route]/page.tsx`.
- **Add a Component:** Place new components in `src/component/` and import as needed.
- **Cart Logic:** Update `CardReducer.jsx` for cart actions; use `useCart()` in components.

## Integration Points
- **API:** Custom API routes in `src/app/api/products/route.ts`.
- **Static Assets:** Images and data in `public/`.
- **External:** Uses `react-icons`, `next/font`, and Tailwind CSS.

## Examples
- To show cart count: `const { items } = useCart();` then render `items.length`.
- To add a nav link: Add to `navlink` array in `Navbar.tsx`.
- To fetch products: Use `/api/products` or import from `public/data.json`.

## Special Notes
- Some files are `.jsx` for legacy reasons; prefer `.tsx` for new code.
- No custom test setup found; add tests as needed.
- For deployment, see Vercel instructions in README.
