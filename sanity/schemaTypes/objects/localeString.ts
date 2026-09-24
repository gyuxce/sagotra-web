import { defineField, defineType } from "sanity";

export const localeString = defineType({
  name: "localeString",
  title: "Localized text",
  type: "object",
  fields: [
    defineField({ name: "id", title: "Indonesian", type: "string", validation: (rule) => rule.required() }),
    defineField({ name: "en", title: "English", type: "string", validation: (rule) => rule.required() }),
  ],
});
