import { css } from '@emotion/css';
import { Theme } from '@mui/material';

export const root = (theme: Theme) => css`
  width: 100%;
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
  justify-content: center;
  min-height: 200px;
  gap: 16px;
`;

export const passwordFieldContainer = css`
  display: flex;
  justify-content: center;
  gap: 16px;

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
  }
`;

export const buttonContainer = css`
  display: flex;
  justify-content: center;
  gap: 16px;
`;

export const icon = css`
  justify-self: flex-start;

  @media (max-width: 768px) {
    justify-self: center;
  }
`;
