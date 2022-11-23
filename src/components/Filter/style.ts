import styled, { css } from "styled-components";

export const Title = styled.div`
  width: 60px;
  height: 60px;
  min-width: 60px;
  margin-right: 8px;
  display: block;
  font-size: 12px;
`;

export const Thumbnails = styled.img<{ filter: string }>`
  width: 70px;
  height: 70px;
  min-width: 70px;
  margin-right: 8px;
  aspect-ratio: 1/1;
    ${(props) =>
      props.filter &&
      css`
        {
          filter: ${props.filter};
        }
      `};
`;
