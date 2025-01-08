import { css } from '@emotion/css';

export const blockingSpinnerContainer = css`
  text-align: center;
`;

export const blockingSpinnerOverlay = css`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 99999;
`;

export const blockingSpinner = css`
  width: 50px;
  height: 50px;
`;
