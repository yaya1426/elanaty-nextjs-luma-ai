import { Listing } from "@/types/listing";
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "../ui/card";
import Image from "next/image";
import { Badge } from "../ui/badge";
import { Button } from "../ui/button";
import Link from "next/link";

type ListingCardProps = {
  listing: Listing;
};

export default function ListingCard({ listing }: ListingCardProps) {
  return (
    <Card className="overflow-hidden pt-0">
      <div className="relative aspect-[4/3] bg-zinc-100">
        <Image
          src={listing.imageUrl}
          alt={listing.title}
          fill
          className="object-cover"
          sizes="(max-width: 768px) 100vw, 33vw"
        />
      </div>

      <CardHeader>
        <div className="mb-2 flex flex-wrap gap-2">
          <Badge>{listing.category}</Badge>
          <Badge variant="outline">{listing.location}</Badge>
        </div>

        <CardTitle className="line-clamp-1 text-base">
          {listing.title}
        </CardTitle>

        <p className="text-md font-bold text-zinc-950">
          {listing.price.toLocaleString("ar-EG")} جنيه مصري
        </p>
      </CardHeader>

      <CardContent>
        <p className="line-clamp-2 text-sm leading-6 text-zinc-600">
          {listing.description}
        </p>
      </CardContent>


      <CardFooter>
        <Button asChild className="w-full">
          <Link href={`/listings/${listing._id}`}>عرض التفاصيل</Link>
        </Button>
      </CardFooter>
    </Card>
  );
}
