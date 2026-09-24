import { createClient } from "next-sanity";
import { apiVersion, dataset, isSanityConfigured, projectId } from "./env";

// Falls back to a placeholder ID when unconfigured so the client can be
// constructed without throwing. It is never queried in that case — see
// isSanityConfigured checks in src/lib/content/index.ts.
export const client = createClient({
  projectId: isSanityConfigured ? projectId : "placeholder",
  dataset,
  apiVersion,
  useCdn: true,
});
