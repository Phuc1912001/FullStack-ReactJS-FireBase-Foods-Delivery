import {getApp,getApps,initializeApp} from 'firebase/app'
import {getFirestore} from 'firebase/firestore'
import {getStorage} from 'firebase/storage'

const firebaseConfig = {
  apiKey: "AIzaSyC32l8SZ4B2GVtXnoevoydD1xO6xsLq9Us",
  authDomain: "restaurantapp-d93c9.firebaseapp.com",
  databaseURL: "https://restaurantapp-d93c9-default-rtdb.firebaseio.com",
  projectId: "restaurantapp-d93c9",
  storageBucket: "restaurantapp-d93c9.appspot.com",
  messagingSenderId: "467179090991",
  appId: "1:467179090991:web:1d2db5211f4ad195c082da",
};


const app = getApps.length > 0 ? getApp() : initializeApp(firebaseConfig)


const firestore = getFirestore(app)
const storage = getStorage(app) 

export {app,firestore,storage};