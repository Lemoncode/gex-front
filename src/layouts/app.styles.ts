import { css } from '@emotion/css';
import { Theme } from '@mui/material';

export const appContainer = css`
  max-width: 100dvw;
  height: 100dvh;
  display: flex;
  flex-direction: column;
  align-items: start;
`;

export const main = css`
  display: flex;
  width: 100%;
  height: calc(100dvh - 64px);
  position: relative;
`;

export const sceneContent = (theme: Theme) => css`
  display: flex;
  justify-content: start;
  flex-wrap: wrap;
  overflow: auto;
  flex-grow: 1;
  padding: 5dvh ${theme.spacing(9)};
  height: 100%;
  width: 100%;
  overflow: auto;
  margin-left: 0;
  @media screen and (max-width: ${theme.breakpoints.values.lg}px) {
    margin-left: ${theme.spacing(9)}; //Equals the width of <Drawer/> minified version;
  }
`;
