import * as z from "zod";

export const TagSchema = z.string().toLowerCase().trim();

export const NewUserFormSchema = z.object({
  firstName: z
    .string()
    .toLowerCase()
    .trim()
    .min(4, "First name should be at least 4 characters"),
  lastName: z
    .string()
    .toLowerCase()
    .trim()
    .min(4, "Last name should be at least 4 characters"),
  email: z.string().email(),
  password: z
    .string()
    .trim()
    .min(8, "password must be at least 8 characters long"),
  confirmPassword: z.string().trim(),
  tags: z.array(TagSchema),
  // rate: z.string().transform((value: string): number => {
  //   const transformValue = parseFloat(value);

  //   if (isNaN(transformValue))
  //     throw new Error("This is not a valid number");

  //   return transformValue;
  // }),
  userType: z.union([z.literal("student"), z.literal("coach")]),
});
