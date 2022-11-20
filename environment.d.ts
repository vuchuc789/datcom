declare namespace NodeJS {
  interface ProcessEnv {
    readonly NODE_ENV: 'development' | 'production' | 'test';
    readonly NEXT_PUBLIC_API_KEY?: string;
    readonly NEXT_PUBLIC_AUTH_DOMAIN?: string;
    readonly NEXT_PUBLIC_PROJECT_ID?: string;
    readonly NEXT_PUBLIC_STORAGE_BUCKET?: string;
    readonly NEXT_PUBLIC_MESSAGING_SENDER_ID?: string;
    readonly NEXT_PUBLIC_APP_ID?: string;
    readonly NEXT_PUBLIC_MEASUREMENT_ID?: string;

    readonly NEXT_PUBLIC_USE_FIREBASE_EMULATORS?: boolean;
  }
}
