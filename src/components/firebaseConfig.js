import firebase from 'firebase/app';
import 'firebase/firestore';

var firebaseConfig = {
  apiKey: "AIzaSyBikKlMz1SNEf-IHZP3scAcUQZ8YDAy6k8",
  authDomain: "tora-ramen.firebaseapp.com",
  projectId: "tora-ramen",
  storageBucket: "tora-ramen.appspot.com",
  messagingSenderId: "23898969888",
  appId: "1:23898969888:web:c82869570bb8a3f7316945"
  };

  const app = firebase.initializeApp(firebaseConfig);
  const stores = app.firestore();

  export default stores
