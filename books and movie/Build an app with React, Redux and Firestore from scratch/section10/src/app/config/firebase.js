import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/database";
import "firebase/auth";
import "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyA-3fBfUCJq0jiPhhXIgnPjuWc8NIx-4lM",
  authDomain: "revents-course-31863.firebaseapp.com",
  databaseURL: "https://revents-course-31863.firebaseio.com",
  projectId: "revents-course-31863",
  storageBucket: "revents-course-31863.appspot.com",
  messagingSenderId: "436704824948",
  appId: "1:436704824948:web:6e59037a569f66fdaccb21",
};

firebase.initializeApp(firebaseConfig);
firebase.firestore();

export default firebase;
