import { fakeListings } from "@/data/fakeListings";
import ListingCard from "@/components/listings/ListingCard";

export default function ListingPage() {
  return (
    <div className="flex flex-1 flex-col bg-zinc-50">
      <section className="mx-auto w-full max-w-6xl px-6 py-10">
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-zinc-950">تصفح الإعلانات</h1>
          <p className="mt-2 text-zinc-600">
            هذه بيانات تجريبية الآن. سنربطها بقاعدة البيانات لاحقاً.
          </p>
        </div>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {fakeListings.map((listing) => (
            <ListingCard key={listing.id} listing={listing} />
          ))}
        </div>
      </section>
    </div>
  );
}
