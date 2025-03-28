import { theme } from './../../../core/theme/theme';
import { css } from '@emotion/css';
import { Theme } from '@mui/material';

export const root = (theme: Theme) => css`
  display: flex;
  flex-direction: column;
`;

export const form = () => css`
  display: flex;
  flex-direction: column;
  gap: 20px;
`;

export const formHeader = (theme: Theme) => css`
  display: flex;
  gap: ${theme.spacing(4)};
`;

export const formAddFile = () => css`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 10px;
  padding: 30px;
`;

export const formAddFileTitle = () => css`
  color: black;
`;
export const formAddFileTypes = () => css`
  color: gray;
`;

export const formAddFileTitleStart = () => css`
  color: ${theme.palette.primary.main};
  text-decoration: underline;
`;

export const filesBox = () => css`
  margin-top: 30px;
  display: flex;
  flex-direction: column;
  gap: 30px;
`;

export const buttonsGroup = () => css`
  display: flex;
  justify-content: flex-end;
  gap: 10px;
  margin-top: 30px;
`;

export const titleBox = () => css`
  display: flex;
  justify-content: space-between;
`;
