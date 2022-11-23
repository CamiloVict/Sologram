import styled, { css } from "styled-components";

export const ContainerThumbnail = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-around;

`

export const Title = styled.div`
  font-size: 6px;
  color: black;
`;

export const Thumbnails = styled.img<{ filter: string }>`
  width: 80px;
  height: 80px;
  min-width: 80px;
  margin-right: 8px;
  object-fit: cover;
  aspect-ratio: 1/1;
    ${(props) =>
      props.filter &&
      css`
        {
          filter: ${props.filter};
        }
      `};
`;
