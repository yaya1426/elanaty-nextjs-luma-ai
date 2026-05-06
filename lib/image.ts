import { mkdir, writeFile } from "fs/promises";
import path from "path";

const mediaTypeExtensions: Record<string, string> = {
  "image/jpeg": "jpg",
  "image/png": "png",
  "image/webp": "webp",
};

export async function saveListingImage(file: File): Promise<{
  originalImageUrl: string;
  originalImageBase64: string;
  originalImageMediaType: string;
} | null> {
  if (!file || file.size === 0) {
    return null;
  }

  if (!mediaTypeExtensions[file.type]) {
    throw new Error("Unsupported image type");
  }

  const bytes = await file.arrayBuffer();
  const buffer = Buffer.from(bytes);

  const uploadDir = path.join(process.cwd(), "public", "uploads");
  await mkdir(uploadDir, { recursive: true });

  const fileName = `${crypto.randomUUID()}.${mediaTypeExtensions[file.type]}`;
  const filePath = path.join(uploadDir, fileName);

  await writeFile(filePath, buffer);

  return {
    originalImageUrl: `/uploads/${fileName}`,
    originalImageBase64: buffer.toString("base64"),
    originalImageMediaType: file.type,
  };
}
