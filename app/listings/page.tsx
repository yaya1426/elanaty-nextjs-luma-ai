import { fakeListings } from "@/data/fakeListings";
import ListingCard from "@/components/listings/ListingCard";

export default function ListingPage() {
  return (
    <div className="mx-auto flex w-full max-w-6xl flex-col gap-4 px-6 py-8">
      {fakeListings.map((listing) => (
        <ListingCard key={listing.id} listing={listing} />
      ))}
    </div>
  );
}