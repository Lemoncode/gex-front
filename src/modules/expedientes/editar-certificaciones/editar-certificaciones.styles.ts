import { css } from '@emotion/css';
import { Theme } from '@mui/material';

export const root = css`
  display: flex;
  flex-direction: column;
  gap: 30px;
  align-items: center;
`;

export const header = (theme: Theme) => css`
  display: flex;
  justify-content: space-between;
  width: 100%;
  padding: 0 ${theme.spacing(2)};
`;

export const newCertificacionButton = () => css`
  display: 'flex';
  align-items: 'center';
  justify-content: 'space-between';
  gap: '1rem';
`;

export const link = (theme: Theme) => css`
  color: ${theme.palette.common.black};
  text-decoration: none;
  cursor: pointer;
`;

export const buttonContainer = (theme: Theme) => css`
  position: absolute;
  bottom: ${theme.spacing(2)};
  right: ${theme.spacing(2)};
  display: flex;
  justify-content: flex-end;
  gap: ${theme.spacing(4)};
`;

export const volverButton = (theme: Theme) => css`
  border-radius: ${theme.shape.borderRadius}px;
`;
