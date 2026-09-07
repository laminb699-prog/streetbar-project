// Automatically picks up every image file placed in src/assets/menu/items/.
// To add or replace a photo for a specific product, just save a photo with
// the exact filename shown in PHOTOS.md into that folder — no code changes
// needed. If no matching file exists yet, the category's shared photo is
// used instead as a fallback.

const itemPhotoModules = import.meta.glob(
  "../assets/menu/items/*.{jpg,jpeg,png,webp,JPG,JPEG,PNG,WEBP}",
  { eager: true, import: "default" }
) as Record<string, string>;

const byFilename = new Map<string, string>();
for (const path in itemPhotoModules) {
  const filename = path.split("/").pop() ?? "";
  byFilename.set(filename.toLowerCase(), itemPhotoModules[path]);
}

export function resolveItemImage(filename: string, fallback: string): string {
  return byFilename.get(filename.toLowerCase()) ?? fallback;
}
