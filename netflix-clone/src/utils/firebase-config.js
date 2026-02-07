import { initializeApp } from "firebase/app";
import { getAuth} from "firebase/auth";
const firebaseConfig = {
  apiKey: "AIzaSyAUCn4h4PRjW-BlY7jJ56GRv_gNseYJK4s",
  authDomain: "react-netflix-clone-e7231.firebaseapp.com",
  projectId: "react-netflix-clone-e7231",
  storageBucket: "react-netflix-clone-e7231.firebasestorage.app",
  messagingSenderId: "141428168725",
  appId: "1:141428168725:web:dd10a989f27f327ad7161c",
  measurementId: "G-Y4PJTG8E9V"
};

const app = initializeApp(firebaseConfig);
//const analytics = getAnalytics(app);

export const firebaseAuth =getAuth(app);