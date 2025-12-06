import { collection, addDoc } from "firebase/firestore";
import { doc, getDoc } from "firebase/firestore";
import { db } from "../../../firebase";

export class FirebaseDb {
    constructor(db) {
        this.db = db
    }

    async addUser(username, password) {
        try {
            const res = await addDoc(collection(this.db, "users"), {
                username,
                password
            });

            console.log("User has been added!");
            return res
        } catch (error) {
            console.error("Error:", error);
        }
    }

    getUserById = async (id) => {
        try {
            const docRef = doc(this.db, "users", id);
            const docSnap = await getDoc(docRef);

            if (docSnap.exists()) {
                return {
                    id: docSnap.id,
                    ...docSnap.data()
                };
            } else {
                console.log("Document is not found");
                return null;
            }
        } catch (error) {
            console.error("Ошибка:", error);
        }
    }
}

export const firebaseService = new FirebaseDb(db);