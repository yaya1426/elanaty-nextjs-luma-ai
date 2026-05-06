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

Not built yet:

- Marketplace homepage.
- Navbar.
- Fake listings data.
- Listing cards.
- Listing details page.
- Create listing page.
- Dashboard pages.
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
  listings/
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

## Route Purpose

`/`

- Public homepage.
- Introduces Elanaty AI.
- Shows latest fake listings.

`/listings`

- Public listings browse page.
- Can start as a simple page using fake listings.
- Search and filters can wait until later.

`/listings/[id]`

- Public listing details page.
- Shows one listing from fake data.
- Includes seller placeholder and make offer placeholder.

`/listings/create`

- Create listing form UI.
- Starts as UI only.
- Does not save to database yet.
- Image upload is only a placeholder at first.

`/dashboard`

- Seller dashboard placeholder.
- Will later show listings owned by the logged-in seller.
- Should not require Clerk until the auth milestone.

`/offers`

- Offers placeholder page.
- Will later show offers received or submitted.
- Should not save anything until the offers milestone.

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

Create the route placeholders and update the homepage so the app has a clear
navigation structure while still using simple static UI.

Do not add:

- MongoDB or Mongoose.
- Clerk.
- Luma.
- Upload providers.
- Offer models.
- Payment or subscription logic.
