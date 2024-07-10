import { app } from "@/firebase/config";
import {
  getFirestore,
  collection,
  addDoc,
  DocumentReference,
  DocumentData,
  query,
  getDocs,
  where,
} from "firebase/firestore";
import { NewUserDataTypes } from "@/types";
import { auth } from "./auth";

export const db = getFirestore(app);

export async function addNewUserToDB(
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

export async function getUserWithAuthID(
  authId: string,
): Promise<NewUserDataTypes | undefined> {
  let authenticatedUser: NewUserDataTypes | null = null;

  try {
    const userCollectionReference = collection(db, "users");
    const userQuery = query(
      userCollectionReference,
      where("authId", "==", authId),
    );

    const docSnap = await getDocs(userQuery);

    docSnap.forEach((doc) => {
      if (doc.data().authId === authId) {
        authenticatedUser = doc.data() as NewUserDataTypes;
      }
    });

    return authenticatedUser as unknown as NewUserDataTypes;
  } catch (error) {
    error instanceof Error && console.log(error);
  }
}
