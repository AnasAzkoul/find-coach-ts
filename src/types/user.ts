import { z } from "zod";
import { NewUserFormSchema, TagSchema } from "@/schemas";

export type Tag = z.infer<typeof TagSchema>;

export type NewUserFormSchemaTypes = z.infer<typeof NewUserFormSchema>;

const NewUserDatabaseRecord = NewUserFormSchema.extend({
  id: z.string(),
})

type NewUserDatabaseRecordTypes = z.infer<typeof NewUserDatabaseRecord>;

export type NewUserDataTypes = Omit<
  NewUserDatabaseRecordTypes,
  "password" | "confirmPassword"
>;
