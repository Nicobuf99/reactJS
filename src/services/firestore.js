import { initializeApp } from "firebase/app";
import {
  getFirestore,
  collection,
  getDocs,
  doc,
  getDoc,
  query,
  where,
  addDoc,
  orderBy,
} from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyAQ6FZlwLQnnLk9SMKB-13z9vsMJNhruj8",
  authDomain: "react-bufczyk.firebaseapp.com",
  projectId: "react-bufczyk",
  storageBucket: "react-bufczyk.appspot.com",
  messagingSenderId: "347260483643",
  appId: "1:347260483643:web:84d78922eb5ec1dd64841e",
  measurementId: "G-QC95EH9QFD",
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export async function getItems() {
  const productsRef = collection(db, "products");
  const q = query(productsRef, orderBy("index"));
  const productsSnap = await getDocs(q);
  const documents = productsSnap.docs;
  const docsData = documents.map((doc) => {
    return { id: doc.id, ...doc.data() };
  });
  return docsData;
}

export async function getSingleItem(idURL) {
  const docRef = doc(db, "products", idURL);
  const docSnap = await getDoc(docRef);
  return { id: docSnap.id, ...docSnap.data() };
}

export async function getItemsByCategory(categoryURL) {
  const productsRef = collection(db, "products");
  const q = query(productsRef, where("category", "==", categoryURL));
  const productsSnap = await getDocs(q);
  const documents = productsSnap.docs;
  const docsData = documents.map((doc) => {
    return { id: doc.id, ...doc.data() };
  });
  return docsData;
}

export async function createOrder(order) {
  const collectionOrdersRef = collection(db, "orders");
  const response = await addDoc(collectionOrdersRef, order);
  return response.id;
}

/*export async function exportData(){
    const collectionRef = collection(db, "products")
    for(let item of productsDatabase) {
        item.index = item.id;
        delete item.id;
        const response = await addDoc(collectionRef, item)
        console.log(response.id)
    }
}
*/
