'use client';

import styled from '@emotion/styled';
import { Button } from '@mui/material';
import { useFirebase } from '../hooks/useFirebase';

const Container = styled.div`
  display: flex;
  height: 100vh;
  justify-content: center;
  align-items: center;
  background-color: ${({ theme }) => theme.palette.secondary.main};
`;

const RootPage: React.FC = () => {
  const { signInWithGooglePopup } = useFirebase();
  return (
    <Container>
      <Button
        variant="contained"
        onClick={async () => {
          try {
            // eslint-disable-next-line no-console
            console.log(await signInWithGooglePopup());
          } catch (e) {
            // eslint-disable-next-line no-console
            console.error(e);
          }
        }}
      >
        Đăng nhập
      </Button>
    </Container>
  );
};

export default RootPage;
