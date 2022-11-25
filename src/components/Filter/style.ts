import styled, { css } from "styled-components";

export const ContainerThumbnail = styled.div`
  @media (max-width: 500px) {
    display: flex;
    flex-direction: column;
    justify-content: space-around;
  }
`;

export const Title = styled.div`
  color: black;
  font-size: 14px;
  @media (max-width: 500px) {
    font-size: 6px;
  }
`;

export const Thumbnails = styled.img<{ filter: string }>`
  width: 100px;
  height: 100px;
  min-width: 100px;
  object-fit: cover;
  aspect-ratio: 1/1;
  @media (max-width: 500px) {
    width: 80px;
    height: 80px;
    min-width: 80px;
    margin-right: 8px;
  }
  ${(props) =>
    props.filter &&
    css`
       {
        filter: ${props.filter};
      }
    `};
`;
