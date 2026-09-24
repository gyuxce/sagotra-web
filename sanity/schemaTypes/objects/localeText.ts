import { defineField, defineType } from "sanity";

export const localeText = defineType({
  name: "localeText",
  title: "Localized paragraph",
  type: "object",
  fields: [
    defineField({ name: "id", title: "Indonesian", type: "text", rows: 4, validation: (rule) => rule.required() }),
    defineField({ name: "en", title: "English", type: "text", rows: 4, validation: (rule) => rule.required() }),
  ],
});
