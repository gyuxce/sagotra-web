import "server-only";
import { createClient } from "next-sanity";
import { apiVersion, dataset, projectId } from "./env";

const token = process.env.SANITY_API_WRITE_TOKEN;

export const isWriteConfigured = Boolean(projectId && token);

// Falls back to a placeholder ID when unconfigured so the client can be
// constructed without throwing. It is never called in that case — see
// isWriteConfigured checks at each call site.
export const writeClient = createClient({
  projectId: isWriteConfigured ? projectId : "placeholder",
  dataset,
  apiVersion,
  useCdn: false,
  token,
});
