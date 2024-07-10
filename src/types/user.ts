import { z } from "zod";
import { NewUserFormSchema, TagSchema } from "@/schemas";

export type Tag = z.infer<typeof TagSchema>;

// used for realtime data validation for user registration form;
export type NewUserFormSchemaTypes = z.infer<typeof NewUserFormSchema>;

// used for initially submitting data from the from to authenticate user and generate data necessary to record user in db;
const NewUserDatabaseRecord = NewUserFormSchema.extend({
  authId: z.string(),
  emailVerified: z.boolean(),
  photoURL: z.union([z.string().url(), z.null()]),
  displayName: z.union([z.string(), z.null()]),
});

type NewUserDatabaseRecordTypes = z.infer<typeof NewUserDatabaseRecord>;

// used to submit data to create a user in the db after authenticating;
export type NewUserDataTypes = Omit<
  NewUserDatabaseRecordTypes,
  "password" | "confirmPassword"
>;

// used to fetch user data after authenticating
export type AuthenticatedUser = Omit<
  NewUserDatabaseRecordTypes,
  "password" | "confirmPassword"
>;
