import { createImageUrlBuilder } from "@sanity/image-url";
import type { MediaImage } from "@/lib/content/types";
import { dataset, projectId } from "./env";

const builder = createImageUrlBuilder({ projectId, dataset });

export function urlForImage(source: MediaImage) {
  return builder.image(source);
}
