import { z } from "zod";

// export const TagSchema = z.object({
//   id: z.string().uuid(),
//   title: z.string(),
// });

export const TagSchema = z.string().toLowerCase().trim()

export const UserDataTypesSchema = z.object({
  firstName: z.string().min(4),
  lastName: z.string().min(4),
  email: z.string().email(),
  password: z
    .string()
    .min(8, "password must be at least 8 characters long"),
  tags: z.array(TagSchema),
  // rate: z.string().transform((value: string): number => {
  //   const transformValue = parseFloat(value);

  //   if (isNaN(transformValue))
  //     throw new Error("This is not a valid number");

  //   return transformValue;
  // }),
  userType: z.union([z.literal("student"), z.literal("coach")]),
});

export type Tag = z.infer<typeof TagSchema>;

export type UserDataTypes = z.infer<typeof UserDataTypesSchema>;
