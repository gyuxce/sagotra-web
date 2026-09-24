import { defineField, defineType } from "sanity";

export const inquiry = defineType({
  name: "inquiry",
  title: "Inquiry",
  type: "document",
  fields: [
    defineField({ name: "name", title: "Name", type: "string" }),
    defineField({ name: "email", title: "Email", type: "string" }),
    defineField({ name: "phone", title: "WhatsApp / phone", type: "string" }),
    defineField({
      name: "experience",
      title: "Experience of interest",
      type: "reference",
      to: [{ type: "experience" }],
    }),
    defineField({ name: "preferredDate", title: "Preferred date", type: "date" }),
    defineField({ name: "groupSize", title: "Group size", type: "number" }),
    defineField({ name: "language", title: "Preferred language", type: "string" }),
    defineField({ name: "interests", title: "Other interests", type: "text", rows: 2 }),
    defineField({ name: "message", title: "Message", type: "text", rows: 4 }),
    defineField({ name: "consentGiven", title: "Consent given", type: "boolean" }),
    defineField({ name: "source", title: "Source page", type: "string" }),
    defineField({
      name: "status",
      title: "Status",
      type: "string",
      options: {
        list: [
          { title: "New", value: "new" },
          { title: "In progress", value: "in-progress" },
          { title: "Responded", value: "responded" },
          { title: "Closed", value: "closed" },
        ],
      },
      initialValue: "new",
    }),
    defineField({ name: "submittedAt", title: "Submitted at", type: "datetime" }),
  ],
  preview: {
    select: { title: "name", subtitle: "status" },
  },
});
