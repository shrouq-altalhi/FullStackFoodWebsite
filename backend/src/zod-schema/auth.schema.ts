import { z } from "zod";

export const chefRegisterSchema = z.object({
  body: z.object({
    username: z
      .string({
        required_error: "Username is required!",
        invalid_type_error: "Username most be a string",
      })
      .min(3, "Username most be more than 3 char")
      .max(20, "Username most be less than 20 char"),
    email: z
      .string({
        required_error: "Email is required!",
        invalid_type_error: "Email most be a string",
      })
      .email(),
    password: z
      .string({
        required_error: "Password is required!",
        invalid_type_error: "Password most be a string",
      })
      .min(3, "password most be more than 3 char")
      .max(20, "password most be less than 20 char"),
    projectName: z
      .string({
        required_error: "Project Name is required!",
        invalid_type_error: "Project Name most be a string",
      })
      .min(3, "Project Name most be more than 3 char")
      .max(30, "Project Name most be less than 30 char"),
    city: z.enum(["Riyadh", "Dammam", "Jeddah"]),
  }),
});

export const foodyRegisterSchema = z.object({
  body: z.object({
    username: z
      .string({
        required_error: "Username is required!",
        invalid_type_error: "Username most be a string",
      })
      .min(3, "Username most be more than 3 char")
      .max(20, "Username most be less than 20 char"),
    email: z
      .string({
        required_error: "Email is required!",
        invalid_type_error: "Email most be a string",
      })
      .email("Please enter a valid email"),
    city: z.enum(["Riyadh", "Jeddah", "Dammam"]),
    password: z
      .string({
        required_error: "Password is required!",
        invalid_type_error: "Password most be a string",
      })
      .min(3, "password most be more than 3 char")
      .max(20, "password most be less than 20 char"),
  }),
});

export const loginSchema = z.object({
  body: z.object({
    username: z.string({
      required_error: "Username is required!",
      invalid_type_error: "Username most be a string",
    }),
    password: z.string({
      required_error: "Password is required!",
      invalid_type_error: "Password most be a string",
    }),
  }),
});
