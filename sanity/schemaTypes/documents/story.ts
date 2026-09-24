import { defineField, defineType } from "sanity";

export const story = defineType({
  name: "story",
  title: "Story",
  type: "document",
  fields: [
    defineField({ name: "title", title: "Title", type: "localeString" }),
    defineField({
      name: "slug",
      title: "Slug",
      type: "slug",
      options: { source: "title.en" },
      validation: (rule) => rule.required(),
    }),
    defineField({ name: "excerpt", title: "Excerpt", type: "localeText" }),
    defineField({
      name: "body",
      title: "Body paragraphs",
      type: "array",
      of: [{ type: "localeText" }],
    }),
    defineField({
      name: "topic",
      title: "Topic",
      type: "string",
      options: {
        list: [
          { title: "Living culture", value: "living-culture" },
          { title: "People behind the experience", value: "people" },
          { title: "Culinary traditions", value: "culinary" },
          { title: "Heritage spaces", value: "heritage-spaces" },
          { title: "Responsible visiting", value: "responsible-visiting" },
        ],
      },
    }),
    defineField({
      name: "destination",
      title: "Destination",
      type: "reference",
      to: [{ type: "destination" }],
    }),
    defineField({ name: "author", title: "Author or source", type: "string" }),
    defineField({ name: "publishDate", title: "Publish date", type: "date" }),
    defineField({
      name: "heroImage",
      title: "Hero image",
      type: "image",
      options: { hotspot: true },
      fields: [{ name: "alt", title: "Alt text", type: "localeString" }],
    }),
    defineField({
      name: "relatedExperiences",
      title: "Related experiences",
      type: "array",
      of: [{ type: "reference", to: [{ type: "experience" }] }],
    }),
    defineField({ name: "seoTitle", title: "SEO title", type: "string" }),
    defineField({ name: "seoDescription", title: "SEO description", type: "text", rows: 3 }),
  ],
  preview: {
    select: { title: "title.en", subtitle: "topic", media: "heroImage" },
  },
});
