"use server";

import { revalidatePath } from "next/cache";
import { connectToDatabase } from "@/lib/mongodb";
import Listing from "@/models/listing.model";
import { buildMarketplaceImagePrompt } from "@/lib/luma-prompts";
import { generateImageEdit } from "@/lib/luma-client";

export async function enhanceListingImage(listingId: string) {
  await connectToDatabase();

  const listing = await Listing.findById(listingId);

  if (!listing) {
    throw new Error("Listing not found");
  }

  if (!listing.originalImageBase64 || !listing.originalImageMediaType) {
    throw new Error("Listing does not have an uploaded image");
  }

  const prompt = buildMarketplaceImagePrompt({
    title: listing.title,
    category: listing.category,
  });

  const generatedImageUrls = await generateImageEdit({
    prompt,
    source: {
      data: listing.originalImageBase64,
      media_type: listing.originalImageMediaType,
    },
  });

  listing.enhancedImageUrls = generatedImageUrls;
  listing.selectedImageUrl = generatedImageUrls[0] || listing.originalImageUrl;

  await listing.save();

  revalidatePath(`/listings/${listingId}`);
  revalidatePath("/listings");
}