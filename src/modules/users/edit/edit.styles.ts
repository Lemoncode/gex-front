import { css } from '@emotion/css';
import { Theme } from '@mui/material';

export const root = (theme: Theme) => css`
  width: 100%;
  max-width: 1208px;
  display: flex;
  flex-direction: column;
  gap: ${theme.spacing(4)};
`;

export const form = (theme: Theme) => css`
  display: flex;
  flex-direction: column;
  gap: ${theme.spacing(4)};
`;

export const sectionContainer = (theme: Theme) => css`
  border: 1px solid ${theme.palette.grey[300]};
  border-radius: 4px;
  padding: ${theme.spacing(3)};
  display: flex;
  flex-direction: column;
  gap: ${theme.spacing(3)};
`;

export const row = (theme: Theme) => css`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: ${theme.spacing(2)};
  align-items: center;

  @media (max-width: 768px) {
    grid-template-columns: repeat(2, 1fr);
  }
`;

export const apellidos = css`
  grid-column: 2 / 4;
`;

export const checkboxContainer = (theme: Theme) => css`
  display: flex;
  gap: ${theme.spacing(2)};
`;

export const buttonContainer = css`
  display: flex;
  justify-content: flex-end;
  gap: 16px;
`;
