import { groq } from "next-sanity";

const experienceProjection = groq`{
  "slug": slug.current,
  category,
  "destinationSlug": destination->slug.current,
  audiences,
  durationHours,
  languages,
  title,
  summary,
  story,
  highlights,
  "practicalDetails": {
    "meetingPoint": meetingPoint,
    "minimumGroup": minimumGroup,
    "accessibility": accessibility,
    "whatToBring": whatToBring
  },
  includes,
  excludes,
  responsibleVisitNotes,
  "images": coalesce(images[]{..., "alt": coalesce(alt, ^.title)}, []),
  "relatedExperienceSlugs": coalesce(relatedExperiences[]->slug.current, []),
  "relatedStorySlugs": coalesce(relatedStories[]->slug.current, []),
  priceUnit,
  inquiryStatus
}`;

const destinationProjection = groq`{
  "slug": slug.current,
  name,
  overview,
  culturalContext,
  mapEmbedUrl,
  practicalNotes,
  "zones": coalesce(zones[] | order(order asc), []),
  "heroImage": select(defined(heroImage) => heroImage{..., "alt": coalesce(alt, ^.name)}, {"alt": name})
}`;

const storyProjection = groq`{
  "slug": slug.current,
  title,
  excerpt,
  body,
  topic,
  "destinationSlug": destination->slug.current,
  publishDate,
  "heroImage": select(defined(heroImage) => heroImage{..., "alt": coalesce(alt, ^.title)}, {"alt": title}),
  "relatedExperienceSlugs": coalesce(relatedExperiences[]->slug.current, [])
}`;

export const experiencesQuery = groq`*[_type == "experience"] ${experienceProjection}`;
export const experienceBySlugQuery = groq`*[_type == "experience" && slug.current == $slug][0] ${experienceProjection}`;
export const experiencesBySlugsQuery = groq`*[_type == "experience" && slug.current in $slugs] ${experienceProjection}`;
export const experiencesByDestinationQuery = groq`*[_type == "experience" && destination->slug.current == $slug] ${experienceProjection}`;

export const destinationsQuery = groq`*[_type == "destination"] ${destinationProjection}`;
export const destinationBySlugQuery = groq`*[_type == "destination" && slug.current == $slug][0] ${destinationProjection}`;

export const storiesQuery = groq`*[_type == "story"] | order(publishDate desc) ${storyProjection}`;
export const storyBySlugQuery = groq`*[_type == "story" && slug.current == $slug][0] ${storyProjection}`;
export const storiesByDestinationQuery = groq`*[_type == "story" && destination->slug.current == $slug] ${storyProjection}`;

export const faqsQuery = groq`*[_type == "faq"] | order(displayOrder asc) {
  question,
  answer,
  category
}`;

export const partnersQuery = groq`*[_type == "partner" && permissionGranted == true] {
  name,
  role,
  permissionGranted
}`;
