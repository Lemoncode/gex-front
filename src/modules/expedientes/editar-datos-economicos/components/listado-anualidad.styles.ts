import { Theme } from '@mui/material';
import { css } from '@emotion/css';

export const tableHeader = (theme: Theme) => css`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: ${theme.spacing(2)};

  @media (max-width: 768px) {
    flex-direction: column;
  }
`;

export const newButton = (theme: Theme) => css`
  display: flex;
  gap: ${theme.spacing(1)};
`;

export const ListItemContainer = (theme: Theme) => css`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding-bottom: ${theme.spacing(1)};
  padding-top: ${theme.spacing(1)};
  border-bottom: 1px solid #ddd;
`;

export const TableBody = css`
  padding-bottom: 8px;
  border-bottom: 1px solid #ddd;
`;
