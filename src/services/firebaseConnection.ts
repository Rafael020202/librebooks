import firebase from 'firebase/app';
import 'firebase/firestore';

const firebaseConfig = {
  apiKey: "AIzaSyCj7exuWtEFo_LNv3Np6bNPL5YDGKk2knE",
  authDomain: "librebooks-app.firebaseapp.com",
  projectId: "librebooks-app",
  storageBucket: "librebooks-app.appspot.com",
  messagingSenderId: "719484955879",
  appId: "1:719484955879:web:72e0dbd06679945cddc642",
  measurementId: "G-5559YGR1M3"
};

if(!firebase.apps.length){
  firebase.initializeApp(firebaseConfig);
}

export default firebase;