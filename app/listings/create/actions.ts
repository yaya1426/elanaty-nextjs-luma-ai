"use server";

import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";
import { connectToDatabase } from "@/lib/mongodb";
import Listing from "@/models/listing.model";
import { saveListingImage } from "@/lib/image";

export async function createListing(formData: FormData) {
  const title = String(formData.get("title") || "");
  const price = Number(formData.get("price") || 0);
  const category = String(formData.get("category") || "");
  const location = String(formData.get("location") || "");
  const description = String(formData.get("description") || "");

  const image = formData.get("image");
  const imageData =
    image instanceof File ? await saveListingImage(image) : null;

  if (!imageData) {
    throw new Error("Failed to save image");
  }

  const { originalImageUrl, originalImageBase64, originalImageMediaType } = imageData;

  if (!title || !price || !category || !location || !description) {
    throw new Error("Missing required listing fields");
  }

  await connectToDatabase();

  const listing = await Listing.create({
    title,
    price,
    category,
    location,
    description,
    originalImageUrl,
    originalImageBase64,
    originalImageMediaType,
    enhancedImageUrls: [],
    selectedImageUrl: "",
    status: "active",
  });

  revalidatePath("/listings");

  redirect(`/listings/${listing._id.toString()}`);
}
