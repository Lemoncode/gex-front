import { css } from '@emotion/css';

export const toolbar = css`
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-content: center;
  align-items: center;
  padding: 0 48px 0 12px;
`;

export const appBarContainer = css`
  z-index: 2;
`;

export const leftGroup = css`
  flex-grow: 1;
  display: flex;
  justify-content: start;
  align-content: center;
  align-items: center;
  gap: 30px;
`;
