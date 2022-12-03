'use client';

import styled from '@emotion/styled';
import { Container, Typography } from '@mui/material';
import useSWR from 'swr';
import { useAuth } from '../contexts/AuthContext';
import { UserGetResponse } from '../types/userApi';

const StyledContainer = styled(Container)`
  flex-grow: 1;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`;

export const MainPage = () => {
  const { user } = useAuth();

  const { data } = useSWR<UserGetResponse>(
    () => user?.uid,
    async () => {
      const idToken = await user?.getIdToken();

      const request = new Request('/api/user');
      const headers = new Headers();
      headers.append('Authorization', `Bearer ${idToken}`);

      const res = await fetch(request, { headers });

      const data = await res.json();

      return data;
    },
    {
      revalidateIfStale: false,
      revalidateOnFocus: false,
      revalidateOnReconnect: false,
    }
  );

  return (
    <StyledContainer fixed>
      {!!data?.data?.name && (
        <Typography component="h1" variant="h4">
          {`Xin chào, ${data.data.name}`}
        </Typography>
      )}
      {!!data?.data?.uid && (
        <Typography
          component="h2"
          variant="subtitle2"
          sx={{ fontStyle: 'italic' }}
        >
          {`UID của bạn là: ${data.data.uid}`}
        </Typography>
      )}
    </StyledContainer>
  );
};
