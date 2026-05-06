# Elanaty AI Tutorial Progress

This file tracks what has been built so far and what we plan to build next.
The goal is to keep the tutorial progressive and avoid jumping too early into
MongoDB, Clerk, Luma, image uploads, payments, or complex business logic.

## Current Status

We are currently in the setup and early UI stage.

Completed:

- Next.js App Router project created.
- TypeScript enabled.
- Tailwind CSS enabled.
- shadcn/ui initialized.
- `Button` component added from shadcn/ui.
- Git repository initialized.
- `.env*` files are ignored.
- First commit already exists.
- Initial route placeholders created:
  - `/listing`
  - `/listing/create`
  - `/listing/[id]`
  - `/dashboard`
  - `/dashboard/offers`

Not built yet:

- Marketplace homepage.
- Navbar.
- Fake listings data.
- Listing cards.
- Real listing details UI.
- Real create listing form UI.
- Real dashboard UI.
- MongoDB.
- Clerk authentication.
- Image upload.
- Luma API integration.
- Offers flow.

## Route-First Direction

Before building deeper features, we will create the app route structure with
simple placeholder pages. This helps the viewer understand the shape of the app
before we connect real data or third-party services.

The route structure should be:

```txt
app/
  page.tsx
  listing/
    page.tsx
    create/
      page.tsx
    [id]/
      page.tsx
  dashboard/
    page.tsx
    offers/
      page.tsx
```

## Route Naming Note

The current implementation uses singular `listing`:

- `/listing`
- `/listing/create`
- `/listing/[id]`

For a marketplace, plural route names are also common:

- `/listings`
- `/listings/create`
- `/listings/[id]`

Before building the navbar and listing cards, choose one route style and use it
everywhere. The recommended tutorial-friendly option is plural `listings`
because the page represents a collection of marketplace listings. If we keep
the current singular route, all future links and snippets should use
`/listing/...`.

## Route Purpose

`/`

- Public homepage.
- Introduces Elanaty AI.
- Shows latest fake listings.

`/listing`

- Public listings browse page.
- Can start as a simple page using fake listings.
- Search and filters can wait until later.

`/listing/[id]`

- Public listing details page.
- Shows one listing from fake data.
- Includes seller placeholder and make offer placeholder.

`/listing/create`

- Create listing form UI.
- Starts as UI only.
- Does not save to database yet.
- Image upload is only a placeholder at first.

`/dashboard`

- Seller dashboard placeholder.
- Will later show listings owned by the logged-in seller.
- Should not require Clerk until the auth milestone.

`/dashboard/offers`

- Seller offers placeholder page.
- Will later show offers received on the seller's listings.
- Should not save anything until the offers milestone.

Note: buyers will still make offers from the public listing details page. The
dashboard offers page is for sellers to review incoming offers later.

## Tutorial Rule

Build pages in this order:

1. Clean starter homepage and metadata.
2. Add route placeholders.
3. Add shared app shell, starting with the navbar.
4. Add fake listing type and data.
5. Add shadcn-based listing cards.
6. Update homepage and listings page to show fake listings.
7. Build listing details page with fake data.
8. Build create listing form UI.
9. Stop before MongoDB.

## Current Next Step

Decide whether the public listing routes should stay singular (`/listing`) or
be renamed to plural (`/listings`). After that, clean the starter homepage and
metadata, then add the navbar and fake listing data.

Small technical note: in this Next.js version, dynamic route `params` are typed
as a `Promise`, so the listing details placeholder should eventually use:

```ts
params: Promise<{ id: string }>
```

instead of:

```ts
params: { id: string }
```

Do not add:

- MongoDB or Mongoose.
- Clerk.
- Luma.
- Upload providers.
- Offer models.
- Payment or subscription logic.
