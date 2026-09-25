import { createClient } from "next-sanity";
import { destinations, experiences, stories, faqs, partners } from "../src/lib/content/mock-data.ts";

const projectId = process.env.NEXT_PUBLIC_SANITY_PROJECT_ID;
const dataset = process.env.NEXT_PUBLIC_SANITY_DATASET;
const apiVersion = process.env.NEXT_PUBLIC_SANITY_API_VERSION;
const token = process.env.SANITY_API_WRITE_TOKEN;

if (!projectId || !dataset || !token) {
  throw new Error("Missing Sanity env vars. Run with `node --env-file=.env.local scripts/migrate-to-sanity.mts`.");
}

const client = createClient({ projectId, dataset, apiVersion, token, useCdn: false });

const destinationId = (slug: string) => `destination-${slug}`;
const experienceId = (slug: string) => `experience-${slug}`;
const storyId = (slug: string) => `story-${slug}`;

/**
 * Uses createIfNotExists + patch (merge), not createOrReplace, so that
 * images/heroImage uploaded by editors in Studio are never wiped out by a
 * re-run of this script. Only the text/reference fields owned by mock-data.ts
 * are touched.
 */

async function run() {
  const tx = client.transaction();

  for (const destination of destinations) {
    const id = destinationId(destination.slug);
    tx.createIfNotExists({ _id: id, _type: "destination" });
    tx.patch(id, {
      set: {
        name: destination.name,
        slug: { _type: "slug", current: destination.slug },
        overview: destination.overview,
        culturalContext: destination.culturalContext,
        practicalNotes: destination.practicalNotes,
        zones: destination.zones.map((zone) => ({
          _type: "zone",
          _key: `zone-${zone.order}`,
          order: zone.order,
          name: zone.name,
          highlights: zone.highlights,
        })),
      },
    });
  }

  for (const experience of experiences) {
    const id = experienceId(experience.slug);
    tx.createIfNotExists({ _id: id, _type: "experience" });
    tx.patch(id, {
      set: {
        title: experience.title,
        slug: { _type: "slug", current: experience.slug },
        category: experience.category,
        destination: { _type: "reference", _ref: destinationId(experience.destinationSlug) },
        audiences: experience.audiences,
        durationHours: experience.durationHours,
        languages: experience.languages,
        summary: experience.summary,
        story: experience.story,
        highlights: experience.highlights,
        meetingPoint: experience.practicalDetails.meetingPoint,
        minimumGroup: experience.practicalDetails.minimumGroup,
        accessibility: experience.practicalDetails.accessibility,
        whatToBring: experience.practicalDetails.whatToBring,
        includes: experience.includes,
        excludes: experience.excludes,
        responsibleVisitNotes: experience.responsibleVisitNotes,
        relatedExperiences: experience.relatedExperienceSlugs.map((slug) => ({
          _type: "reference",
          _ref: experienceId(slug),
          _key: slug,
        })),
        relatedStories: experience.relatedStorySlugs.map((slug) => ({
          _type: "reference",
          _ref: storyId(slug),
          _key: slug,
        })),
        priceUnit: experience.priceUnit,
        inquiryStatus: experience.inquiryStatus,
      },
    });
  }

  for (const story of stories) {
    const id = storyId(story.slug);
    tx.createIfNotExists({ _id: id, _type: "story" });
    tx.patch(id, {
      set: {
        title: story.title,
        slug: { _type: "slug", current: story.slug },
        excerpt: story.excerpt,
        body: story.body,
        topic: story.topic,
        destination: { _type: "reference", _ref: destinationId(story.destinationSlug) },
        publishDate: story.publishDate,
        relatedExperiences: story.relatedExperienceSlugs.map((slug) => ({
          _type: "reference",
          _ref: experienceId(slug),
          _key: slug,
        })),
      },
    });
  }

  faqs.forEach((faq, index) => {
    tx.createOrReplace({
      _id: `faq-${index}`,
      _type: "faq",
      question: faq.question,
      answer: faq.answer,
      category: faq.category,
      displayOrder: index,
    });
  });

  partners.forEach((partner, index) => {
    const id = `partner-${index}`;
    tx.createIfNotExists({ _id: id, _type: "partner" });
    tx.patch(id, {
      set: {
        name: partner.name,
        role: partner.role,
        permissionGranted: partner.permissionGranted,
      },
    });
  });

  const result = await tx.commit();
  console.log(`Migrated ${result.results.length} document operations to dataset "${dataset}".`);
}

run().catch((error) => {
  console.error("Migration failed:", error.message);
  process.exit(1);
});
