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

Not built yet:

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

Needs quick cleanup:

- Ensure the root `<html>` tag uses `lang="ar"` and `dir="rtl"`.
- Keep all public route links using plural `/listings`.

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
7. Update homepage and listings page to show fake listings.
8. Build listing details page with fake data.
9. Build create listing form UI.
10. Stop before MongoDB.

## Current Next Step

Do a quick layout cleanup, then add the shared navbar.

Before the navbar, verify the root layout has:

```tsx
<html lang="ar" dir="rtl">
```

Then create `components/navbar.tsx` with Arabic labels and add it to
`app/layout.tsx` above `{children}`.

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
