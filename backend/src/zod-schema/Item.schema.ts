import { z } from "zod";

export const addNewItem = z.object({
  body: z.object({
    title: z
      .string({
        required_error: "Title is required !",
        invalid_type_error: "Title must be a string",
      })
      .min(3, "Title must be more than 6 char"),

    description: z
      .string({
        required_error: "description is required !",
        invalid_type_error: "description must be a string",
      })
      .min(10, "description must be more than 10 char"),
    price: z.string({
      required_error: "price is required !",
      invalid_type_error: "price must be a String",
    }),

    productType: z.enum(
      ["MainDishe", "Entrees", "Traditional", "Dessert", "Healthy", "Drink"],
      {
        required_error: "product type is required !",
        invalid_type_error: "product type must be a string",
      }
    ),
    image: z.string().nullish(),
    city: z.enum(["Riyadh", "Jeddah", "Dammam"], {
      required_error: "City is required !",
      invalid_type_error:
        "City must be a one of this city Riyadh, Jeddah, Dammam",
    }),
  }),
});

export const UpdatePostItem = z.object({
  body: z.object({
    title: z
      .string({
        required_error: "Title is required !",
        invalid_type_error: "Title must be a string",
      })
      .min(3, "Title must be more than 6 char"),

    description: z
      .string({
        required_error: "description is required !",
        invalid_type_error: "description must be a string",
      })
      .min(10, "description must be more than 10 char"),
    price: z.string({
      required_error: "price is required !",
      invalid_type_error: "price must be a string",
    }),

    productType: z.enum([
      "MainDishe",
      "Entrees",
      "Traditional",
      "Dessert",
      "Healthy",
      "Drink",
    ]),
    image: z.string().nullish(),
    city: z.enum(["Riyadh", "Jeddah", "Dammam"], {
      required_error: "City is required !",
      invalid_type_error:
        "City must be a one of this city Riyadh, Jeddah, Dammam",
    }),
  }),

  params: z.object({
    itemid: z.string({
      required_error: "id is required !",
      invalid_type_error: "id must be a string",
    }),
  }),
});

export const DeleteItem = z.object({
  params: z.object({
    itemid: z.string({
      required_error: "id is required !",
      invalid_type_error: "id must be a string",
    }),
  }),
});

export type UpdatePostItemType = z.infer<typeof UpdatePostItem>["params"];

export type DeleteItemType = z.infer<typeof DeleteItem>["params"];
