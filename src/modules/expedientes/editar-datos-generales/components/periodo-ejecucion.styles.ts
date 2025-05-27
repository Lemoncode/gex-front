import { css } from '@emotion/css';
import { Theme } from '@mui/material';

export const periodSection = () => css`
  width: 100%;
`;

export const periodContainer = (theme: Theme) => css`
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-template-rows: 1fr;
  gap: ${theme.spacing(1)};

  @media (max-width: 768px) {
    display: grid;
    grid-template-columns: 1fr;
    grid-template-rows: 1fr 1fr;
    gap: ${theme.spacing(1)};
  }
`;

export const periodSelector = (theme: Theme) => css`
  gap: ${theme.spacing(1)};
  padding: ${theme.spacing(1)} 0;
  display: flex;

  & > div > div > div:nth-child(2) {
    width: auto;
  }

  & > div > div > div {
    width: 100%;
  }

  &:nth-child(1) {
    grid-area: 1 / 1 / 2 / 2;
  }
  &:nth-child(2) {
    grid-area: 1 / 2 / 2 / 3;
  }

  @media (max-width: 768px) {
    &:nth-child(1) {
      grid-area: 1 / 1 / 2 / 2;
    }
    &:nth-child(2) {
      grid-area: 2 / 1 / 3 / 2;
    }
  }
`;

export const timeSelector = css`
  flex: 1;
`;

export const divider = () => css`
  display: flex;
  align-items: center;
  justify-content: center;
  flex: 0;

  @media (max-width: 768px) {
    display: none;
  }
`;
