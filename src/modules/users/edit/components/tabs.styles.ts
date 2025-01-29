import { css } from '@emotion/css';
import { Theme } from '@mui/material';

export const tabsComponent = css`
  display: 'flex';
  flexdirection: 'column';
  alignitems: 'center';
  width: 100%;
`;

export const tabsContainer = css`
  border-bottom: 1;
  border-color: 'divider';
`;

export const tabPanel = (theme: Theme) => css`
  padding-block: ${theme.spacing(2)};
`;
