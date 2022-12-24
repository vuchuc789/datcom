import { credential } from 'firebase-admin';
import {
  getApp as getFirebaseApp,
  initializeApp,
  ServiceAccount,
} from 'firebase-admin/app';
import { getAuth as getFirebaseAuth } from 'firebase-admin/auth';
import { getFirestore } from 'firebase-admin/firestore';

export const getApp = async () => {
  try {
    return getFirebaseApp();
  } catch {
    const serviceAccount: ServiceAccount = JSON.parse(
      process.env.FIREBASE_SERVICE_ACCOUNT || '{}'
    );

    if (
      process.env.NODE_ENV !== 'production' &&
      process.env.NEXT_PUBLIC_EMULATOR
    ) {
      process.env.FIREBASE_AUTH_EMULATOR_HOST = 'localhost:9099';
      process.env.FIRESTORE_EMULATOR_HOST = 'localhost:8080';
      process.env.FIREBASE_STORAGE_EMULATOR_HOST = 'localhost:9199';
    }

    return initializeApp({ credential: credential.cert(serviceAccount) });
  }
};

export const getAuth = async () => {
  const app = await getApp();

  return getFirebaseAuth(app);
};

export const getDb = async () => {
  const app = await getApp();

  return getFirestore(app);
};
