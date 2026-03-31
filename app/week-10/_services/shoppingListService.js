import { db } from "../../utils/firebase";
import { collection, getDocs, addDoc, query } from "firebase/firestore";
 
export async function getItems(userId) {
    try {
        const itemsCollection = collection(db, "users", userId, "items");
        const querySnapshot = await getDocs(itemsCollection);
        const items = querySnapshot.docs.map((doc) => ({
            id: doc.id,
            ...doc.data(),
        }));
        return items;
    } catch (err) {
        console.error("Item not found");
        throw err;
    }
}

export async function addItem(userId, item) {
    try {
        const itemsCollection = collection(db, "users", userId, "items");
        const docRef = await addDoc(itemsCollection, item);
        return docRef.id;
    } catch (err) {
        console.error("Fail to add new item");
        throw err;
    }
}