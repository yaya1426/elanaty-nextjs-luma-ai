import { Listing } from "@/types/listing";
import { Card, CardHeader, CardTitle } from "../ui/card";

type ListingCardProps = {
  listing: Listing;
};

export default function ListingCard({ listing }: ListingCardProps) {
  return (
    <Card>
      <CardHeader>
        <CardTitle>{listing.title}</CardTitle>
      </CardHeader>
    </Card>
  );
}
