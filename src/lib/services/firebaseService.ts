import { collection, addDoc, Firestore } from "firebase/firestore";
import { doc, getDoc } from "firebase/firestore";
import { db } from "../../../firebase";
import type { DatabaseService } from "./types";

export class FirebaseDb implements DatabaseService {
  constructor(private db: Firestore) {
    this.db = db;
  }

  async addUser<T>(username: string, password: string) {
    try {
      const res = await addDoc(collection(this.db, "users"), {
        username,
        password,
      });

      console.log("User has been added!");
      return res as T;
    } catch (error) {
      console.error("Error:", error);
      return { status: "error", error } as T;
    }
  }

  getUserById = async (id: string) => {
    try {
      const docRef = doc(this.db, "users", id);
      const docSnap = await getDoc(docRef);

      if (docSnap.exists()) {
        return {
          id: docSnap.id,
          ...docSnap.data(),
        };
      } else {
        console.log("Document is not found");
        return null;
      }
    } catch (error) {
      console.error("Ошибка:", error);
    }
  };
}

export const firebaseService = new FirebaseDb(db);
