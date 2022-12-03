import { credential } from 'firebase-admin';
import {
  getApp as getFirebaseApp,
  initializeApp,
  ServiceAccount,
} from 'firebase-admin/app';
import { getAuth as getFirebaseAuth } from 'firebase-admin/auth';

export const getApp = async () => {
  try {
    return getFirebaseApp();
  } catch {
    const serviceAccount = {
      type: process.env.TYPE,
      project_id: process.env.PROJECT_ID,
      private_key_id: process.env.PRIVATE_KEY_ID,
      private_key: process.env.PRIVATE_KEY,
      client_email: process.env.CLIENT_EMAIL,
      client_id: process.env.CLIENT_ID,
      auth_uri: process.env.AUTH_URI,
      token_uri: process.env.TOKEN_URI,
      auth_provider_x509_cert_url: process.env.AUTH_PROVIDER_X509_CERT_URL,
      client_x509_cert_url: process.env.CLIENT_X509_CERT_URL,
    } as ServiceAccount;

    if (
      process.env.NODE_ENV !== 'production' &&
      process.env.NEXT_PUBLIC_EMULATOR
    ) {
      process.env.FIREBASE_AUTH_EMULATOR_HOST = 'localhost:9099';
      process.env.FIREBASE_FIRESTORE_EMULATOR_HOST = 'localhost:8080';
      process.env.FIREBASE_STORAGE_EMULATOR_HOST = 'localhost:9199';
    }

    return initializeApp({ credential: credential.cert(serviceAccount) });
  }
};

export const getAuth = async () => {
  const app = await getApp();

  return getFirebaseAuth(app);
};
