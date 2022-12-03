declare namespace NodeJS {
  interface ProcessEnv {
    // firebase config on clients
    readonly NEXT_PUBLIC_API_KEY?: string;
    readonly NEXT_PUBLIC_AUTH_DOMAIN?: string;
    readonly NEXT_PUBLIC_PROJECT_ID?: string;
    readonly NEXT_PUBLIC_STORAGE_BUCKET?: string;
    readonly NEXT_PUBLIC_MESSAGING_SENDER_ID?: string;
    readonly NEXT_PUBLIC_APP_ID?: string;
    readonly NEXT_PUBLIC_MEASUREMENT_ID?: string;

    // firebase emulator
    readonly NEXT_PUBLIC_EMULATOR?: boolean;

    // firebase admin credentials
    readonly TYPE?: string;
    readonly PROJECT_ID?: string;
    readonly PRIVATE_KEY_ID?: string;
    readonly PRIVATE_KEY?: string;
    readonly CLIENT_EMAIL?: string;
    readonly CLIENT_ID?: string;
    readonly AUTH_URI?: string;
    readonly TOKEN_URI?: string;
    readonly AUTH_PROVIDER_X509_CERT_URL?: string;
    readonly CLIENT_X509_CERT_URL?: string;

    // firebase admin emulators
    FIREBASE_AUTH_EMULATOR_HOST?: string;
    FIREBASE_FIRESTORE_EMULATOR_HOST?: string;
    FIREBASE_STORAGE_EMULATOR_HOST?: string;
  }
}
