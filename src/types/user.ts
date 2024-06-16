import { z } from "zod";

export const TagSchema = z.object({
  id: z.string().uuid(),
  title: z.string(),
});

export const UserDataTypesSchema = z.object({
  firstName: z.string().min(4),
  lastName: z.string().min(4),
  email: z.string().email(),
  password: z
    .string()
    .min(8, "password must be at least 8 characters long"),
  tags: z.array(TagSchema),
  rate: z.number(),
  userType: z.enum(["student", "coach"]),
});

export type Tag = z.infer<typeof TagSchema>;

export type UserDataTypes = z.infer<typeof UserDataTypesSchema>;
