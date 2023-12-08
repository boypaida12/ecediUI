// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {
  GoogleAuthProvider,
  getAuth,
  onAuthStateChanged,
  signInWithPopup,
  signOut,
} from "firebase/auth";
import { doc, getDoc, getFirestore, setDoc } from "firebase/firestore";
import { useEffect, useState } from "react";
import axios from 'axios';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: import.meta.env.VITE_APP_API_KEY,
  authDomain:import.meta.env.VITE_APP_API_KEY_AUTH_DOMAIN,
  projectId: import.meta.env.VITE_APP_API_KEY_PROJECT_ID,
  storageBucket: import.meta.env.VITE_APP_API_KEY_STORAGE_BUCKET,
  messagingSenderId: import.meta.env.VITE_APP_API_KEY_MESSAGING_SENDER_ID,
  appId: import.meta.env.VITE_APP_API_KEY_APP_ID,
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);
export const db = getFirestore(app);

const googleProvider = new GoogleAuthProvider();

export const signUpWithGoogle = async (value) => {
  try {
    console.log("value... ", value)

    const result = await signInWithPopup(auth, googleProvider);
    const user = result.user;

    // Create a new user document in Firestore if the user doesn't exist
    const userRef = doc(db, "users", user.uid);
    const docSnap = await getDoc(userRef);
    if (!docSnap.exists()) {
      await setDoc(userRef, {
        email: user.email,
        displayName: user.displayName,
        photoURL: user.photoURL,
        phoneNumber: user.phoneNumber,
        userID: user.uid,
        // user id
      });
    }

    // create user endpoint
    postDataToBackend(
      value,
      user.email,
      user.displayName,
      user.uid
    )

    return user;
  } catch (error) {
    console.error(error);
    return null;
  }
};

const postDataToBackend = async (farmerString, email, displayName, uuid) => {
  const apiUrl = 'https://ecedilink.onrender.com/user';

  const data = {
    farmer: farmerString,
    generalInfo: {
      email: email,
      name: displayName,
      phone: '1234567890',
      uuid: uuid,
      countrycode: 'US',
      latitude: 6.700071,
      longitude: -1.630783,
      usertype: farmerString,
      walletId: 'kjdsbsfkjfkj',
      creditScore: 0,
      landSize: 150,
      kycLevel: 'MEDIUM',
    },
    debts: [
      { amount: 5000, bank: 'Bank A' },
      { amount: 3000, bank: 'Bank B' },
    ],
    incomes: [],
  };

  try {
    const response = await fetch(apiUrl, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(data),
    });

    if (response.ok) {
      const responseData = await response.json();
      console.log('Response from server:', responseData.generalInfo);
      createWallet(
        responseData.generalInfo.uuid,
      )
    } else {
      console.error('Error:', response.statusText);
    }
  } catch (error) {
    console.error('Error:', error.message);
  }
};

const createWallet = async (uuid) => {
  const apiUrl = 'https://ecedilink.onrender.com/escrow/v1/create-wallet';

  const data = {
    userId: uuid,
    tokenId: '0.0.3945755',
    kycLevel: 'UNVERIFIED',
    countryCode: 'GH',
    institutionName: 'CreditLink, Inc.',
  };

  try {
    const response = await fetch(apiUrl, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(data),
    });

    if (response.ok) {
      const responseData = await response.json();
      console.log('createWallet:', responseData.id);
    } else {
      console.error('Error:', response.statusText);
    }
  } catch (error) {
    console.error('Error:', error.message);
  }
};

async function updateWallet(userId, walletId) {
  const endpoint = 'https://ecedilink.onrender.com/user/657127c988a6bb65775dcb45/update-wallet';

  try {
    const response = await axios.post(endpoint, {
      walletId: walletId,
    });

    if (response.status === 200) {
      console.log('Wallet updated successfully');
      console.log('Response:', response.data);
      return response.data; // You can return the response data if needed
    } else {
      console.error('Failed to update wallet');
      console.error('Response:', response.data); // Log the error response
      return null;
    }
  } catch (error) {
    console.error('Error updating wallet:', error.message);
    return null;
  }
}

export const signInWithGoogle = async () => {
  try {
    const result = await signInWithPopup(auth, googleProvider);
    const user = result.user;
    return user;
  } catch (error) {
    console.error(error);
    return null;
  }
};

export const logout = () => {
    return signOut(auth);
  };

//  custom hook to get current User
export const useAuth = () => {
  const [currentUser, setCurrentUser] = useState(false);
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) =>
      setCurrentUser(user)
    );
    return unsubscribe;
  }, []);

  return currentUser;
};
