import { css } from '@emotion/css';
import { Theme } from '@mui/material';

export const section = () => css`
  width: 100%;
`;

export const stack = (theme: Theme) => css`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: ${theme.spacing(3)};
  width: 100%;
  margin-top: ${theme.spacing(2)};

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
  }
`;

export const stackItem = (theme: Theme) => css`
  display: flex;
  flex-direction: column;
  gap: ${theme.spacing(2)};
`;

export const stackItemRow = (theme: Theme) => css`
  display: flex;
  flex-direction: row;
  with: 100%;
  gap: ${theme.spacing(2)};
`;

export const inputField = () => css`
  flex: 1;
  min-width: 0;
`;
