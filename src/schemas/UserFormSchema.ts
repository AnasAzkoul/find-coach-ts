import { UserDataTypesSchema } from "@/types";
import * as z from "zod";

export const UserFormSchema = UserDataTypesSchema.extend({
  confirmPassword: z.string(),
}).refine((data) => data.password === data.confirmPassword, {
  message: "passwords do not match",
  path: ["confirmPassword"],
});

export type UserFormSchemaTypes = z.infer<typeof UserFormSchema>;
