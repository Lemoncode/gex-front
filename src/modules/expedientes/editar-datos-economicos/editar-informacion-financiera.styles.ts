import { Theme } from '@mui/material';
import { css } from '@emotion/css';

export const root = (theme: Theme) => css`
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: ${theme.spacing(4)};
`;

export const form = (theme: Theme) => css`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: ${theme.spacing(4)};
  @media (max-width: 768px) {
    grid-template-columns: 1fr;
  }
`;

export const buttonContainer = (theme: Theme) => css`
  grid-column: 1 / 3;
  display: flex;
  justify-content: flex-end;
  gap: ${theme.spacing(4)};

  @media (max-width: 768px) {
    grid-column: 1 / 2;
    place-self: center;
  }
`;
