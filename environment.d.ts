declare namespace NodeJS {
  interface ProcessEnv {
    // firebase config on clients
    readonly NEXT_PUBLIC_FIREBASE_CONFIG?: string;

    // firebase emulator
    readonly NEXT_PUBLIC_EMULATOR?: boolean;

    // firebase admin credentials
    readonly FIREBASE_SERVICE_ACCOUNT?: string;

    // firebase admin emulators
    FIREBASE_AUTH_EMULATOR_HOST?: string;
    FIREBASE_FIRESTORE_EMULATOR_HOST?: string;
    FIREBASE_STORAGE_EMULATOR_HOST?: string;
  }
}
