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
      [
        "Main_dishes",
        "Entrees",
        "Traditional",
        "Dessert",
        "Dreinks",
        "Healthy",
      ],

      {
        required_error: "type is required !",
        invalid_type_error: "type must be a string",
      }
    ),
    image: z.string().nullish(),
  }),
});

export const UpdatePostItem = z.object({
  body: z.object({
    title: z
      .string({
        required_error: "Title is required !",
        invalid_type_error: "Title must be a string",
      })
      .min(6, "Title must be more than 6 char"),

    description: z
      .string({
        required_error: "description is required !",
        invalid_type_error: "description must be a string",
      })
      .min(10, "description must be more than 10 char"),
    price: z.number({
      required_error: "price is required !",
      invalid_type_error: "price must be a Number",
    }),

    type: z.enum([
      "Main_dishes",
      "Entrees",
      "Traditional",
      "Dessert",
      "Dreinks",
      "Healthy",
    ]),
    image: z.string().nullish(),
  }),

  params: z.object({
    itemid: z.string({
      required_error: "id is required !",
      invalid_type_error: "id must be a string",
    }),
  }),
});

export const DelettItem = z.object({
  params: z.object({
    itemid: z.string({
      required_error: "id is required !",
      invalid_type_error: "id must be a string",
    }),
  }),
});

export type UpdatePostItemType = z.infer<typeof UpdatePostItem>["params"];

export type DelettItemType = z.infer<typeof DelettItem>["params"];
