"use server";

import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";
import { connectToDatabase } from "@/lib/mongodb";
import Listing from "@/models/listing.model";

import { mkdir, writeFile } from "fs/promises";
import path from "path";

export async function createListing(formData: FormData) {
  const title = String(formData.get("title") || "");
  const price = Number(formData.get("price") || 0);
  const category = String(formData.get("category") || "");
  const location = String(formData.get("location") || "");
  const description = String(formData.get("description") || "");

  const image = formData.get("image");
  const originalImageUrl =
    image instanceof File ? await saveUploadedImage(image) : "";

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
    enhancedImageUrls: [],
    selectedImageUrl: "",
    status: "active",
  });

  revalidatePath("/listings");

  redirect(`/listings/${listing._id.toString()}`);
}

async function saveUploadedImage(file: File) {
  if (!file || file.size === 0) {
    return "";
  }
  const bytes = await file.arrayBuffer();
  const buffer = Buffer.from(bytes);
  const uploadDir = path.join(process.cwd(), "public", "uploads");
  await mkdir(uploadDir, { recursive: true });

  const fileExtension = file.name.split(".").pop() || "jpg";
  const fileName = `${crypto.randomUUID()}.${fileExtension}`;
  const filePath = path.join(uploadDir, fileName);

  await writeFile(filePath, buffer);
  return `/uploads/${fileName}`;
}
