import { defineField, defineType } from "sanity";

export const destination = defineType({
  name: "destination",
  title: "Destination",
  type: "document",
  fields: [
    defineField({ name: "name", title: "Name", type: "localeString" }),
    defineField({
      name: "slug",
      title: "Slug",
      type: "slug",
      options: { source: "name.en" },
      validation: (rule) => rule.required(),
    }),
    defineField({ name: "overview", title: "Overview", type: "localeText" }),
    defineField({ name: "culturalContext", title: "Cultural context", type: "localeText" }),
    defineField({ name: "mapEmbedUrl", title: "Map embed URL", type: "url" }),
    defineField({ name: "practicalNotes", title: "Practical notes", type: "localeText" }),
    defineField({
      name: "zones",
      title: "Kampung zones",
      description: "The destination's numbered tourism zones (e.g. from a kampung wisata map), each with its own highlights.",
      type: "array",
      of: [
        {
          type: "object",
          name: "zone",
          fields: [
            defineField({ name: "order", title: "Zone number", type: "number", validation: (rule) => rule.required() }),
            defineField({ name: "name", title: "Zone name", type: "localeString" }),
            defineField({ name: "highlights", title: "Highlights", type: "array", of: [{ type: "localeString" }] }),
          ],
          preview: {
            select: { order: "order", title: "name.en" },
            prepare: ({ order, title }) => ({ title: `${order}. ${title}` }),
          },
        },
      ],
    }),
    defineField({
      name: "heroImage",
      title: "Hero image",
      type: "image",
      options: { hotspot: true },
      fields: [{ name: "alt", title: "Alt text", type: "localeString" }],
    }),
    defineField({
      name: "images",
      title: "Gallery images",
      type: "array",
      of: [
        {
          type: "image",
          options: { hotspot: true },
          fields: [{ name: "alt", title: "Alt text", type: "localeString" }],
        },
      ],
    }),
  ],
  preview: {
    select: { title: "name.en", media: "heroImage" },
  },
});
