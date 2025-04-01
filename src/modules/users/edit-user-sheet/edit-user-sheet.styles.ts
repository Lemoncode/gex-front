import { css } from '@emotion/css';
import { theme } from '#core/theme';

export const root = css`
  display: flex;
  flex-direction: column;
  gap: ${theme.spacing(4)};
`;

export const form = css`
  display: flex;
  flex-direction: column;
  gap: ${theme.spacing(4)};
`;

export const sectionContainer = css`
  border: 1px solid ${theme.palette.grey[300]};
  border-radius: 4px;
  padding: ${theme.spacing(3)};
  display: flex;
  flex-direction: column;
`;

export const row = css`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: ${theme.spacing(2)};

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
  }
`;

export const apellidos = css`
  grid-column: 2 / 4;

  @media (max-width: 768px) {
    grid-column: 1 / 2;
  }
`;

export const checkboxContainer = css`
  display: flex;
  gap: ${theme.spacing(2)};

  @media (max-width: 768px) {
    flex-direction: column;
  }
`;

export const buttonContainer = css`
  display: flex;
  justify-content: flex-end;
  gap: 16px;
`;
