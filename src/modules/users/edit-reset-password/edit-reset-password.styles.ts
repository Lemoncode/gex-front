import { css } from '@emotion/css';
import { theme } from '#core/theme';

export const root = css`
  width: 100%;
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
  justify-content: center;
  align-items: center;
  min-height: 200px;
  gap: 16px;
`;

export const formContainer = css`
  display: flex;
  justify-content: center;
  flex-direction: column;
  gap: 16px;
`;

export const passwordFieldContainer = css`
  display: flex;
  justify-content: center;
  gap: 16px;
  width: 400px;

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
