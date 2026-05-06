import { notFound } from "next/navigation";
import Image from "next/image";
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import Listing from "@/models/listing.model";
import { connectToDatabase } from "@/lib/mongodb";
import { enhanceListingImage } from "./actions";
import EnhanceImageButton from "@/components/listings/EnhanceImageButton";

type ListingDetailsPageProps = {
  params: Promise<{
    id: string;
  }>;
};

export default async function ListingDetailsPage({
  params,
}: ListingDetailsPageProps) {
  const { id } = await params;

  await connectToDatabase();
  const listing = await Listing.findById(id).lean();
  listing.imageUrl = listing.selectedImageUrl || listing.originalImageUrl || "";

  if (!listing) {
    notFound();
  }

  return (
    <div className="flex flex-1 flex-col bg-zinc-50">
      <section className="mx-auto grid w-full max-w-6xl gap-8 px-6 py-10 lg:grid-cols-[1.4fr_1fr]">
        <div className="relative aspect-[4/3] overflow-hidden rounded-3xl border bg-white">
          <Image
            src={listing.imageUrl}
            alt={listing.title}
            fill
            className="object-cover"
            sizes="(max-width: 1024px) 100vw, 60vw"
            priority
          />
        </div>

        <div className="space-y-6">
          <Card>
            <CardHeader>
              <div className="mb-3 flex flex-wrap gap-2">
                <Badge>{listing.category}</Badge>
                <Badge variant="outline">{listing.location}</Badge>
              </div>
              <CardTitle className="text-3xl">{listing.title}</CardTitle>
              <p className="text-3xl font-bold text-zinc-950">
                {listing.price.toLocaleString("ar-EG")} جنيه مصري
              </p>
            </CardHeader>

            <CardContent className="space-y-6">
              <div>
                <h2 className="mb-2 font-semibold">الوصف</h2>
                <p className="text-sm leading-7 text-zinc-600">
                  {listing.description}
                </p>
              </div>
              <div className="rounded-2xl border bg-zinc-50 p-4">
                <p className="text-sm font-medium">البائع</p>
                <p className="mt-1 text-sm text-zinc-600">
                  بيانات البائع ستظهر هنا بعد إضافة تسجيل الدخول.
                </p>
              </div>
              <div className="rounded-2xl border bg-zinc-50 p-4">
                <div>
                  <p className="text-sm font-medium">
                    تحسين الصورة بالذكاء الاصطناعي
                  </p>
                  <p className="mt-1 text-sm text-zinc-600">
                    اضغط على الزر لتحويل صورة المنتج إلى صورة احترافية باستخدام
                    Luma AI.
                  </p>
                </div>
                <EnhanceImageButton
                  listingId={id}
                  enhanceAction={enhanceListingImage}
                />
              </div>
              <Button className="w-full" size="lg">
                قدّم عرض
              </Button>
              <Button asChild variant="outline" className="w-full">
                <Link href="/listings">الرجوع للإعلانات</Link>
              </Button>
            </CardContent>
          </Card>
        </div>
      </section>
    </div>
  );
}
