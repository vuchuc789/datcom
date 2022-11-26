'use client';

import { useCallback, useState } from 'react';

export const useLoading = (initialState = false) => {
  const [count, setCount] = useState(initialState ? 1 : 0);

  const setLoading = useCallback((isLoading: boolean) => {
    setCount((count) =>
      isLoading ? count + 1 : count > 0 ? count - 1 : count
    );
  }, []);

  return [count > 0, setLoading] as const;
};
