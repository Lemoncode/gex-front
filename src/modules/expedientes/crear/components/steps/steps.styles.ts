import { css } from '@emotion/css';

export const form = css`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 0;
`;

export const fields = css`
  display: flex;
  justify-content: center;
  flex-direction: row;
  flex-grow: 1;
  gap: 16px;
  margin: 0;
`;

export const rowHeader = css`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 56px;
  background-color: #9c27b04d;

  & > th {
    font-weight: 600;
  }
`;
export const rowsBody = css`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 56px;
`;

export const rowFooter = css`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 123px;
  grid-column-gap: 16px;
  padding: 16px;
  padding-top: 0;
  align-items: center;
  align-content: center;
`;

export const button = css`
  background-color: #9c27b0;

  &:hover {
    background-color: rgb(122, 23, 140);
  }
`;
