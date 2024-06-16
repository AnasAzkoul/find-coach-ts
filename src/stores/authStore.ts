import { defineStore } from "pinia";
import { ref } from "vue";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword, 
  type UserCredential,
  type User,
} from "firebase/auth";
import { auth } from "@/firebase/auth.ts";
import { UserDataTypes } from "@/types";

export const useAuthStore = defineStore("auth", () => {
  const user = ref<User | null>(auth.currentUser);

  async function createUser(data: UserDataTypes) {
    const { email, password } = data;

    try {
      const newUser = await createUserWithEmailAndPassword(
        auth,
        email,
        password,
      );

      user.value = newUser.user;

      console.log(newUser);
    } catch (error) {
      error instanceof Error && console.log(error.message);
    }
  }

  // async function signIn()

  return {
    createUser,
  };
});
