'use client';

import styled from '@emotion/styled';
import { Container, Typography } from '@mui/material';
import { useEffect } from 'react';
import useSWR from 'swr';
import { useAuth } from '../contexts/AuthContext';
import { useUtils } from '../contexts/UtilsContext';
import { ApiResponse, method } from '../types/api';
import { User } from '../types/user';

const StyledContainer = styled(Container)`
  flex-grow: 1;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`;

export const MainPage = () => {
  const { user } = useAuth();
  const { showAlert } = useUtils();

  const { data, error } = useSWR<User, Error>(
    () => user?.uid,
    async () => {
      const idToken = await user?.getIdToken();

      const request = new Request('/api/user', { method: method.POST });
      const headers = new Headers();
      headers.append('Authorization', `Bearer ${idToken}`);

      const res = await fetch(request, { headers });

      const parsedRes: ApiResponse<User> = await res.json();

      const data = parsedRes.data;

      if (!res.ok) {
        throw new Error(parsedRes.message || 'Đã có lỗi xảy ra !!');
      }

      if (!data) {
        throw new Error('Đã có lỗi xảy ra !!');
      }

      return data;
    },
    {
      revalidateIfStale: false,
      revalidateOnFocus: false,
      revalidateOnReconnect: false,
      shouldRetryOnError: false,
    }
  );

  useEffect(() => {
    if (error) {
      showAlert(error.message);
    }
  }, [error, showAlert]);

  return (
    <StyledContainer fixed>
      {!!data?.user?.name && (
        <Typography component="h1" variant="h4">
          {`Xin chào, ${data.user.name}`}
        </Typography>
      )}
      {!!data?.user?.uid && (
        <Typography
          component="h2"
          variant="subtitle2"
          sx={{ fontStyle: 'italic' }}
        >
          {`UID của bạn là: ${data.user.uid}`}
        </Typography>
      )}
    </StyledContainer>
  );
};
