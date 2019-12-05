import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const config = {
  apiKey: "AIzaSyDlc2NQbz80xo1IXjL5zu0eVcE_mRpCVcM",
  authDomain: "ecommerce-914fa.firebaseapp.com",
  databaseURL: "https://ecommerce-914fa.firebaseio.com",
  projectId: "ecommerce-914fa",
  storageBucket: "ecommerce-914fa.appspot.com",
  messagingSenderId: "189149528647",
  appId: "1:189149528647:web:b6382c4938bf9887082762"
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account' });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
