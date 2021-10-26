import firebase from "firebase";
import "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyAUzGiSSroIk6fn414XNZ7c2SMYifIqqC0",
  authDomain: "facebook-shakthi.firebaseapp.com",
  projectId: "facebook-shakthi",
  storageBucket: "facebook-shakthi.appspot.com",
  messagingSenderId: "414771886323",
  appId: "1:414771886323:web:9fadf3bfaaa07d2f8d5f86"
};

const app = !firebase.apps.length ? firebase.initializeApp(firebaseConfig) : firebase.app();

const db = app.firestore();
const storage = firebase.storage();

export { db, storage };