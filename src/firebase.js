// For Firebase JS SDK v7.20.0 and later, measurementId is optional
import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
const firebaseConfig = {
    apiKey: "AIzaSyA0tuvD0e-OAPcuiF_IHTGtkwD-shrglkQ",
    authDomain: "auth-redux-82b90.firebaseapp.com",
    projectId: "auth-redux-82b90",
    storageBucket: "auth-redux-82b90.appspot.com",
    messagingSenderId: "177864875632",
    appId: "1:177864875632:web:35d479fb1973d727351eb5",
    measurementId: "G-7G5N64JKPW"
  };

  const firebaseApp = firebase.initializeApp(firebaseConfig); 
  const auth = firebase.auth();
  const provider = new firebase.auth.GoogleAuthProvider();

  export {auth,provider} ;