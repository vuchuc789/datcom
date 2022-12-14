'use client';

import {
  Alert,
  AlertColor,
  Backdrop,
  CircularProgress,
  Grow,
  GrowProps,
  Slide,
  SlideProps,
  Snackbar,
} from '@mui/material';
import { createContext, useCallback, useContext, useState } from 'react';
import { useLoading } from '../hooks/useLoading';

export type UtilsState = {
  setLoading: (isLoading: boolean) => void;
  showAlert: (message: string, type?: AlertColor) => void;
};

const UtilsContext = createContext<UtilsState | null>(null);

type UtilsProviderProps = React.PropsWithChildren;

export const UtilsProvider: React.FC<UtilsProviderProps> = ({ children }) => {
  const [alert, setAlert] = useState<{
    message: string;
    type: AlertColor;
    isOpened: boolean;
  }>({
    isOpened: false,
    message: '',
    type: 'error',
  });

  const [isLoading, setLoading] = useLoading();

  const showAlert = useCallback(
    (message: string, type: AlertColor = 'error') => {
      setAlert((prev) =>
        !prev.isOpened ? { isOpened: true, message, type } : prev
      );
    },
    []
  );

  const close = useCallback(() => {
    setAlert(({ message, type }) => ({ isOpened: false, message, type }));
  }, []);

  return (
    <UtilsContext.Provider value={{ setLoading, showAlert }}>
      {children}
      <Backdrop open={isLoading}>
        <CircularProgress color="inherit" />
      </Backdrop>
      <Snackbar
        open={!!alert.isOpened}
        onClose={close}
        autoHideDuration={3000}
        anchorOrigin={{ horizontal: 'center', vertical: 'bottom' }}
        TransitionComponent={Slide}
      >
        <Alert onClose={close} severity={alert.type} variant="filled">
          {alert.message}
        </Alert>
      </Snackbar>
    </UtilsContext.Provider>
  );
};

export const useUtils = () => {
  const ctx = useContext(UtilsContext);

  if (!ctx) {
    throw new Error('useUtils must be used inside UtilsProvider');
  }

  return ctx;
};
