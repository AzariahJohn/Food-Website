import { array } from "prop-types";

export default {
  name: 'resturant',
  title: 'Resturant',
  type: 'document',
  fields: [
    {
      name: "name",
      type: "string",
      title: "Resturant Name",
      validation: (Rule) => Rule.required(),
    },
    {
      name: "short_description",
      type: "string",
      title: "Short Description",
      validation: (Rule) => Rule.max(200)
    },
    {
      name: "image",
      type: "image",
      title: "Image of the Resturant"
    },
    {
      name: "lat",
      type: "number",
      title: "Latitude of the resturant"
    },
    {
      name: "address",
      type: "string",
      title: "Resturant Address",
      validation: (Rule) => Rule.required(),
    },
    {
      name: "rating",
      type: "number",
      validation: (Rule) => 
        Rule.required()
          .min(1)
          .max(5)
          .error("Please enter a value between 1 to 5"),
    },
    {
      name: "type",
      title: "Category",
      validation: (Rule) => Rule.required(),
      type: "reference",
      to: [{ type: "category" }]
    },
    {
      name: "dishes",
      type: "array",
      title: "Dishes",
      of: [{ type: "reference", to: [{ type: "dish" }] }]
    }
  ]
}
