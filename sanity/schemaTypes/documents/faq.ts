import { defineField, defineType } from "sanity";

export const faq = defineType({
  name: "faq",
  title: "FAQ",
  type: "document",
  fields: [
    defineField({ name: "question", title: "Question", type: "localeString" }),
    defineField({ name: "answer", title: "Answer", type: "localeText" }),
    defineField({
      name: "category",
      title: "Category",
      type: "string",
      options: {
        list: [
          { title: "Booking", value: "booking" },
          { title: "Group", value: "group" },
          { title: "Practical", value: "practical" },
          { title: "Responsible visit", value: "responsible-visit" },
        ],
      },
    }),
    defineField({ name: "displayOrder", title: "Display order", type: "number" }),
  ],
  orderings: [
    { title: "Display order", name: "displayOrderAsc", by: [{ field: "displayOrder", direction: "asc" }] },
  ],
  preview: {
    select: { title: "question.en", subtitle: "category" },
  },
});
