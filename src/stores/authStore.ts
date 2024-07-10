import { defineStore } from "pinia";
import { ref } from "vue";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  type UserCredential,
  type User,
} from "firebase/auth";

import Cookies from "js-cookie";

import { auth } from "@/firebase/auth.ts";

import {
  type NewUserFormSchemaTypes,
  type NewUserDataTypes,
  type AuthenticatedUser,
} from "@/types";

import { addNewUserToDB, getUserWithAuthID } from "@/firebase";

export const useAuthStore = defineStore("auth", () => {
  const user = ref<NewUserDataTypes | null>(null);

  async function createUser(data: NewUserFormSchemaTypes) {
    const { email, password } = data;

    try {
      const { user: authenticatedUser } =
        await createUserWithEmailAndPassword(auth, email, password);

      const userToken = await authenticatedUser.getIdToken();

      if (user === null) {
        throw new Error("There was problem authenticating you....");
      }

      Cookies.set("user-log-in", userToken);

      const userData: NewUserDataTypes = {
        authId: authenticatedUser.uid,
        firstName: data.firstName,
        lastName: data.lastName,
        email: data.email,
        tags: data.tags,
        userType: data.userType,
        emailVerified: authenticatedUser.emailVerified,
        photoURL: authenticatedUser.photoURL,
        displayName: authenticatedUser.displayName,
      };

      await addNewUserToDB(userData);

      const userFromDB = await getUserWithAuthID(authenticatedUser.uid);

      user.value = userFromDB as NewUserDataTypes;

      console.log(user.value);
    } catch (error) {
      error instanceof Error && console.log(error.message);
    }
  }

  // async function signIn()

  return {
    createUser,
  };
});
