'use client';

import { onAuthStateChanged, User, Auth, Unsubscribe } from 'firebase/auth';
import { createContext, useContext, useEffect, useState } from 'react';
import { useFirebase } from '../hooks/useFirebase';

export type AuthState = {
  signInWithGooglePopup: () => Promise<void>;
  user: User | null | undefined;
  signOut: () => Promise<void>;
};

const AuthContext = createContext<AuthState | null>(null);

type AuthProviderProps = React.PropsWithChildren;

export const AuthProvider: React.FC<AuthProviderProps> = ({ children }) => {
  const [auth, setAuth] = useState<Auth | undefined>();
  const [user, setUser] = useState<User | null | undefined>();

  const { getAuth, signInWithGooglePopup, signOut } = useFirebase();

  useEffect(() => {
    const asyncEffect = async () => {
      const auth = await getAuth();

      setAuth(auth);
    };

    asyncEffect();
  }, [getAuth]);

  useEffect(() => {
    let unsubscribe: Unsubscribe | undefined;

    if (auth) {
      unsubscribe = onAuthStateChanged(auth, setUser);
    }

    return () => {
      unsubscribe?.();
    };
  }, [auth]);

  return (
    <AuthContext.Provider value={{ signInWithGooglePopup, user, signOut }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => {
  const ctx = useContext(AuthContext);

  if (!ctx) {
    throw new Error('useAuth must be used inside AuthProvider');
  }

  return ctx;
};
