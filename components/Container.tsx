'use client';

import styled from '@emotion/styled';
import { Box } from '@mui/material';

const StyledBox = styled(Box)`
  display: flex;
  flex-direction: column;
  height: 100vh;
`;

export const Container: React.FC<React.PropsWithChildren> = ({ children }) => {
  return <StyledBox>{children}</StyledBox>;
};
