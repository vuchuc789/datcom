'use client';

import {
  FirebaseApp,
  FirebaseOptions,
  getApp as getFirebaseApp,
  initializeApp,
} from 'firebase/app';
import {
  connectAuthEmulator,
  getAuth as getFirebaseAuth,
  GoogleAuthProvider,
  signInWithPopup,
  signOut as firebaseSignOut,
} from 'firebase/auth';
import { useCallback } from 'react';

const firebaseConfig: FirebaseOptions = {
  apiKey: process.env.NEXT_PUBLIC_API_KEY,
  authDomain: process.env.NEXT_PUBLIC_AUTH_DOMAIN,
  projectId: process.env.NEXT_PUBLIC_PROJECT_ID,
  storageBucket: process.env.NEXT_PUBLIC_STORAGE_BUCKET,
  messagingSenderId: process.env.NEXT_PUBLIC_MESSAGING_SENDER_ID,
  appId: process.env.NEXT_PUBLIC_APP_ID,
  measurementId: process.env.NEXT_PUBLIC_MEASUREMENT_ID,
} as const;

export const useFirebase = () => {
  const getApp = useCallback(async () => {
    let app: FirebaseApp;

    try {
      app = getFirebaseApp();
    } catch {
      app = initializeApp(firebaseConfig);

      if (
        process.env.NODE_ENV !== 'production' &&
        process.env.NEXT_PUBLIC_EMULATOR
      ) {
        const auth = getFirebaseAuth(app);

        connectAuthEmulator(auth, 'http://localhost:9099');
      }
    }

    return app;
  }, []);

  const getAuth = useCallback(async () => {
    const app = await getApp();
    const auth = getFirebaseAuth(app);

    return auth;
  }, [getApp]);

  const signInWithGooglePopup = useCallback(async () => {
    const auth = await getAuth();
    const provider = new GoogleAuthProvider();

    await signInWithPopup(auth, provider);
  }, [getAuth]);

  const signOut = useCallback(async () => {
    const auth = await getAuth();

    await firebaseSignOut(auth);
  }, [getAuth]);

  return { getAuth, signInWithGooglePopup, signOut };
};
