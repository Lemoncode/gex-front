import { css } from '@emotion/css';
import { theme } from '#core/theme';

export const root = css`
  display: flex;
  flex-direction: column;
  gap: 30px;
  align-items: center;
`;

export const link = css`
  color: ${theme.palette.common.black};
  text-decoration: none;
  cursor: pointer;
`;

export const buttonContainer = css`
  position: absolute;
  bottom: ${theme.spacing(2)};
  right: ${theme.spacing(2)};
  display: flex;
  justify-content: flex-end;
  gap: ${theme.spacing(4)};
`;

export const volverButton = css`
  border-radius: ${theme.shape.borderRadius}px;
`;
