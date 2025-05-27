import { css } from '@emotion/css';
import { Theme } from '@mui/material';

export const periodSection = () => css`
  width: 100%;
`;

export const periodContainer = (theme: Theme) => css`
  display: flex;
  align-items: flex-start;
  align-self: stretch;
  gap: ${theme.spacing(2)};
  width: 100%;
  margin-top: ${theme.spacing(2)};
  justify-content: space-between;

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
  }
`;

export const periodSelector = (theme: Theme) => css`
  display: flex;
  flex-direction: column;
  gap: ${theme.spacing(1)};
`;

export const divider = () => css`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 40px;
`;

export const selectorNumber = () => css`
  text-align: start;
  width: 50%;
  border: none;
`;
