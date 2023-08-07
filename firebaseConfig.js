// Import the functions you need from the SDKs you need
import {initializeApp} from 'react-native-firebase/app';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: 'AIzaSyBnbFgAniDtGZKTNYobsukSOpXt3NlfUoQ',
  authDomain: 'reactnativemessaging-9a42e.firebaseapp.com',
  projectId: 'reactnativemessaging-9a42e',
  storageBucket: 'reactnativemessaging-9a42e.appspot.com',
  messagingSenderId: '829638037721',
  appId: '1:829638037721:web:b151e933cc373cf16feec8',
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default app;
