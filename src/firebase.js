import firebase from "firebase";

const firebaseApp = firebase.initializeApp({
  apiKey: "AIzaSyCyEy5tlZV-R5q60WQajup5mj4skvlDxsU",
  authDomain: "todo-app-cp-5b2db.firebaseapp.com",
  projectId: "todo-app-cp-5b2db",
  storageBucket: "todo-app-cp-5b2db.appspot.com",
  messagingSenderId: "9710323218",
  appId: "1:9710323218:web:ca31e77b69ad8a98e2facb",
  measurementId: "G-C616JYZ5XM",
});

const db = firebaseApp.firestore();

export default db;
