import firebase from 'firebase';

//config firebase
const firebaseConfig = {
    apiKey: "AIzaSyAL1tZkL8sxl5Lad9828wILFb2UktPEgRo",
    authDomain: "facebook-clone-bfca4.firebaseapp.com",
    databaseURL: "https://facebook-clone-bfca4.firebaseio.com",
    projectId: "facebook-clone-bfca4",
    storageBucket: "facebook-clone-bfca4.appspot.com",
    messagingSenderId: "465901283035",
    appId: "1:465901283035:web:1f894e51d0a83a1bb60efe",
    measurementId: "G-1LL3BDJLDB"
  };

//initialize firebase app
const firebaseApp = firebase.initializeApp(firebaseConfig);
//access to databse
const db = firebaseApp.firestore();
//auth
const auth = firebase.auth();
//provider
const provider = new firebase.auth.GoogleAuthProvider();

export {auth, provider};
export default db;
