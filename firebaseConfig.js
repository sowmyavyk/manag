import firebase from '@react-native-firebase/app';
import auth from '@react-native-firebase/auth';

const firebaseConfig = {
  apiKey: "AIzaSyD2WTOOuKFNosA_twKUqJJgjeEpo9UwLaE",
  authDomain: "phoneauth-378c2.firebaseapp.com",
  projectId: "phoneauth-378c2",
  storageBucket: "phoneauth-378c2.appspot.com",
  messagingSenderId: "744552772429",
  appId: "1:744552772429:web:83806fce91b25bcb787d04",
  measurementId: "G-VF0C42220G"
};

// Initialize Firebase
if (!firebase.apps.length) {
  firebase.initializeApp(firebaseConfig);
  console.log('Firebase initialized successfully!');
} else {
  console.log('Firebase already initialized.');
}

export { firebase, auth };