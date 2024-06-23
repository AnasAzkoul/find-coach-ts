import { app } from "@/firebase/config";
import {
  getFirestore,
  collection,
  addDoc,
  DocumentReference,
  DocumentData,
} from "firebase/firestore";
import { NewUserDataTypes } from "@/types";

export const db = getFirestore(app);

export async function addNewUser(
  newUser: NewUserDataTypes,
): Promise<DocumentReference<DocumentData, DocumentData> | undefined> {
  try {
    const docRef = await addDoc(collection(db, "users"), newUser);

    console.log("data has been written on the database", docRef);

    return docRef;
  } catch (error) {
    if (error instanceof Error) {
      console.log(error.message);
    }
  }
}
