import firebase from 'firebase';

const firebaseConfig = {
  apiKey: "AIzaSyCcAC8wn-YdIyVWP_v7FYLLLQ6pcVI9zMs",
  authDomain: "whatsapp-clone-react-30c61.firebaseapp.com",
  projectId: "whatsapp-clone-react-30c61",
  storageBucket: "whatsapp-clone-react-30c61.appspot.com",
  messagingSenderId: "949306881497",
  appId: "1:949306881497:web:a09d6fa90326499e2f55c8",
  measurementId: "G-QZWWMFNDY7"
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();

export { auth, provider };
export default db;
