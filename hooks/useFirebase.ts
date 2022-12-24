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

const firebaseConfig: FirebaseOptions = JSON.parse(
  process.env.NEXT_PUBLIC_FIREBASE_CONFIG || ''
);

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
