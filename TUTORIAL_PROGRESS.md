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
  - `/listings`
  - `/listings/create`
  - `/listings/[id]`
  - `/dashboard`
  - `/dashboard/offers`
- Homepage hero added in Arabic.
- Rubik font configured with `next/font/google`.
- Global font tokens updated to use Rubik.
- Root layout updated for Arabic RTL with `lang="ar"` and `dir="rtl"`.
- Shared navbar added at `components/navbar/TopBar.tsx`.
- Navbar rendered from `app/layout.tsx`.
- Fake listing type added at `types/listing.ts`.
- Fake Arabic listing data added at `data/fakeListings.ts`.
- shadcn `Card`, `Badge`, and `Input` components added.
- Reusable listing card added at `components/listings/ListingCard.tsx`.
- `/listings` page updated to show fake listings in a responsive grid.
- Unsplash image host configured in `next.config.ts`.
- Homepage latest listings section intentionally skipped for simplicity.
- Listing details page built at `/listings/[id]` using fake data.
- Listing details page uses `notFound()` when the fake listing does not exist.
- Seller and make-offer areas added as placeholders only.

Not built yet:

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

## Language Direction

The app UI should be Arabic-first and RTL.

Use Arabic for:

- Page titles.
- Navbar labels.
- Buttons.
- Form labels.
- Empty states.
- Error and loading messages.
- Dashboard text.

Keep code identifiers in English:

- File and folder names.
- Component names.
- Variable names.
- Type names.
- Model fields later.
- API route names later.

Use plural English route names for public listing pages:

- `/listings`
- `/listings/create`
- `/listings/[id]`

## Route Purpose

`/`

- Public homepage.
- Introduces Elanaty AI.
- Keeps the landing page simple with hero text and CTA buttons only.

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
3. Configure Arabic-first UI direction and Rubik font.
4. Add shared app shell, starting with the navbar.
5. Add fake listing type and data.
6. Add shadcn-based listing cards.
7. Update `/listings` page to show fake listings.
8. Build listing details page with fake data.
9. Build create listing form UI.
10. Stop before MongoDB.

## Current Next Step

Build the create listing form UI at `/listings/create`.

This should be a visual form only. It should not save to a database yet.

Keep this simple:

- No database yet.
- No auth yet.
- No real image upload yet.
- The image upload field is only a placeholder.
- On submit, it can do nothing for now or show a simple temporary message later.

Suggested fields:

- Title.
- Price.
- Category.
- Location.
- Description.
- Product image placeholder.

After the create listing form UI works, stop before MongoDB.

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
