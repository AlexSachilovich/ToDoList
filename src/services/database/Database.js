import { initializeApp } from "firebase/app";

export class Database {
  constructor() {
    const firebaseConfig = {
      apiKey: "",
      authDomain: "todolist-home-69986.firebaseapp.com",
      projectId: "todolist-home-69986",
      storageBucket: "todolist-home-69986.appspot.com",
      messagingSenderId: "67330895630",
      appId: "1:67330895630:web:3ce0215939ce722cefb15f",
      measurementId: "G-VS15KKH4YN",
    };

    const app = initializeApp(firebaseConfig);
  }
}
