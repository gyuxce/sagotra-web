import { defineField, defineType } from "sanity";

export const partner = defineType({
  name: "partner",
  title: "Partner",
  type: "document",
  fields: [
    defineField({ name: "name", title: "Name", type: "string", validation: (rule) => rule.required() }),
    defineField({ name: "role", title: "Role", type: "localeString" }),
    defineField({
      name: "permissionGranted",
      title: "Permission granted to display publicly",
      description: "Only enable once written permission for name, logo, and description is confirmed (PRD section 9 / 14).",
      type: "boolean",
      initialValue: false,
    }),
    defineField({ name: "logo", title: "Logo", type: "image" }),
    defineField({ name: "contact", title: "Contact", type: "string" }),
    defineField({ name: "internalNotes", title: "Internal notes", type: "text", rows: 3 }),
  ],
  preview: {
    select: { title: "name", subtitle: "role.en" },
  },
});
