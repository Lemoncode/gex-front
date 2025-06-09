import { css } from '@emotion/css';

export const form = css`
  width: 100%;
  .MuiOutlinedInput-root {
    padding: 0;
  }
`;

export const headerFormGrid = css`
  @media (min-width: 768px) {
    display: grid;
    grid-template-columns: repeat(2, 1fr) 1rem 1fr;
    place-items: center;
    gap: 16px;
  }
`;

export const footerFormGrid = css`
  @media (min-width: 768px) {
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    place-items: center;
    gap: 16px;
    & > div:last-child {
      grid-column: 1 / 3;
    }
  }
`;

export const selectForm = css`
  width: 10rem;
  margin: 0;
`;

export const row = css`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 16px;
  margin-bottom: 16px;

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
  }
`;

export const fullRow = css`
  grid-column: 1 / -1;
`;

export const halfLeft = css`
  grid-column: 1 / 3;
`;

export const halfRight = css`
  grid-column: 3 / -1;

  @media (max-width: 768px) {
    grid-column: 1 / 3;
  }
`;
