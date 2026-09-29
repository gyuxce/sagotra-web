import { createClient } from "@sanity/client";
import { createReadStream } from "node:fs";

const projectId = process.env.NEXT_PUBLIC_SANITY_PROJECT_ID;
const dataset = process.env.NEXT_PUBLIC_SANITY_DATASET;
const apiVersion = process.env.NEXT_PUBLIC_SANITY_API_VERSION ?? "2024-01-01";
const token = process.env.SANITY_API_WRITE_TOKEN;

if (!projectId || !dataset || !token) {
  throw new Error("Missing Sanity env vars (project id, dataset, or write token).");
}

const client = createClient({ projectId, dataset, apiVersion, token, useCdn: false });

const [, , experienceSlug, filePath, altText] = process.argv;

if (!experienceSlug || !filePath) {
  throw new Error("Usage: node --env-file=.env.local scripts/upload-experience-photo.mts <experienceSlug> <filePath> [altText]");
}

async function main() {
  const experience = await client.fetch<{ _id: string } | null>(
    '*[_type == "experience" && slug.current == $slug][0]{_id}',
    { slug: experienceSlug },
  );

  if (!experience) {
    throw new Error(`No experience found with slug "${experienceSlug}"`);
  }

  const asset = await client.assets.upload("image", createReadStream(filePath), {
    filename: filePath.split("/").pop(),
  });

  const imageBlock = {
    _type: "image",
    _key: asset._id.replace("image-", "").slice(0, 12),
    asset: { _type: "reference", _ref: asset._id },
    alt: altText
      ? { id: altText, en: altText }
      : undefined,
  };

  await client
    .patch(experience._id)
    .setIfMissing({ images: [] })
    .append("images", [imageBlock])
    .commit();

  console.log(`Uploaded and attached to experience "${experienceSlug}" (${experience._id})`);
}

main().catch((err) => {
  console.error(err);
  process.exit(1);
});
