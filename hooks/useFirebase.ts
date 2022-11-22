'use client';

import type { FirebaseApp, FirebaseOptions } from 'firebase/app';

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
  const getApp = async () => {
    const { getApp, initializeApp } = await import('firebase/app');

    let app: FirebaseApp;

    try {
      app = getApp();
    } catch {
      app = initializeApp(firebaseConfig);

      if (
        process.env.NODE_ENV !== 'production' &&
        process.env.NEXT_PUBLIC_EMULATOR
      ) {
        const { getAuth, connectAuthEmulator } = await import('firebase/auth');

        const auth = getAuth(app);

        connectAuthEmulator(auth, 'http://localhost:9099');
      }
    }

    return app;
  };

  const getAuth = async () => {
    const { getAuth } = await import('firebase/auth');

    const app = await getApp();
    const auth = getAuth(app);

    return auth;
  };

  const signInWithGooglePopup = async () => {
    const { GoogleAuthProvider, signInWithPopup } = await import(
      'firebase/auth'
    );

    const auth = await getAuth();
    const provider = new GoogleAuthProvider();

    // TODO: update user info to context, remove return <20-11-22, Vuchuc> //
    return await signInWithPopup(auth, provider);
  };

  return { signInWithGooglePopup };
};
