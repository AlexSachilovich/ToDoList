import { initializeApp } from "firebase/app";
import {
  getFireStore,
  collection,
  addDoc,
  getDocs,
  doc,
  updateDoc,
  deleteDoc,
} from "firebase/firestore";
import { API_KEY } from "../../constants/envValues";

export class Database {
  constructor() {
    const firebaseConfig = {
      apiKey: API_KEY,
      authDomain: "todolist-home-69986.firebaseapp.com",
      projectId: "todolist-home-69986",
      storageBucket: "todolist-home-69986.appspot.com",
      messagingSenderId: "67330895630",
      appId: "1:67330895630:web:3ce0215939ce722cefb15f",
      measurementId: "G-VS15KKH4YN",
    };

    const app = initializeApp(firebaseConfig);
    this._database = getFireStore(app);
  }

  create(collectionKey, body) {
    const collectionRef = collection(this._database, collectionKey);
    return addDoc(collectionRef, body);
  }
  read(collectionKey) {
    const collectionRef = collection(this._database, collectionKey);
    return getDocs(collectionRef).then((documents) => {
      return documents.docs.map((doc) => ({ ...doc.data(), id: doc.id }));
    });
  }
  update(collectionKey, id, body) {
    const document = doc(this._database, collectionKey, id);
    return updateDoc(document, body);
  }
  delete() {
    const document = doc(this._database, collectionKey, id);
    return deleteDoc(document);
  }

  static getInstance() {
    if (!Database.instance) {
      Database.instance = new Database();
    }
    return Database.instance;
  }
}
