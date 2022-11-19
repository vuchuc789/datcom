'use client';
import { css, Global } from '@emotion/react';
import emotionReset from 'emotion-reset';

export const GlobalStyles = () => {
  return (
    <Global
      styles={css`
        ${emotionReset}
      `}
    />
  );
};
