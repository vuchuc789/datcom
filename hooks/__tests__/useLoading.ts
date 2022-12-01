import { renderHook, act } from '@testing-library/react';
import { useLoading } from '../useLoading';

describe('useLoading', () => {
  test('initialize correctly', () => {
    const {
      result: {
        current: [isLoading],
      },
    } = renderHook(() => useLoading());

    expect(isLoading).toBeFalsy();
  });

  test('initialize correctly when initial state is true', () => {
    const {
      result: {
        current: [isLoading],
      },
    } = renderHook(() => useLoading(true));

    expect(isLoading).toBeTruthy();
  });

  test('can set state correctly', () => {
    const { result } = renderHook(() => useLoading());

    let [isLoading, setLoading] = result.current;

    act(() => {
      setLoading(true);
      setLoading(true);
    });

    [isLoading, setLoading] = result.current;

    expect(isLoading).toBeTruthy();

    act(() => {
      setLoading(false);
    });

    [isLoading, setLoading] = result.current;

    expect(isLoading).toBeTruthy();

    act(() => {
      setLoading(false);
    });

    [isLoading, setLoading] = result.current;

    expect(isLoading).toBeFalsy();

    act(() => {
      setLoading(false);
      setLoading(true);
    });

    [isLoading, setLoading] = result.current;

    expect(isLoading).toBeTruthy();
  });
});

export {};
