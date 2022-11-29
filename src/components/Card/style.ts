import styled, { css } from "styled-components";
import { fadeInKeyFrames } from "../../styles/animations";

export const Article = styled.article`
  min-height: 340px;
  @media (max-width: 500px) {
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    margin-bottom: 15px;
  }
`;

export const ImgWrapper = styled.div`
  animation: ${fadeInKeyFrames} 0.8s ease;
  width: 340px;
  height: 340px;
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  overflow: hidden;
  position: relative;
  background-color: black;
  aspect-ratio: 1/1;
  @media (max-width: 500px) {
    width: 100vw;
    margin: 0;
    height: 340px;
  }
`;

export const Image = styled.img<{ filter: string }>`
  height: 100%;
  width: 100%;
  aspect-ratio: 1/1;
  object-fit: contain;
  ${(props) =>
    props.filter &&
    css`
       {
        filter: ${props.filter};
      }
    `}
`;

export const ArticleInfo = styled.div`
  @media (max-width: 500px) {
    display: flex;
    flex-direction: column;
    justify-content: flex-end;
    height: 35px;
    padding-left: 3px;
    padding-bottom: 3px;
  }
`;

export const ImageInfo = styled.h3<{ size: string; color: string }>`
  width: 150px;
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis !important;
  @media (max-width: 500px) {
    height: fit-content;
  }
  ${(props) =>
    props.size &&
    css`
       {
        color: ${props.color};
        font-size: ${props.size};
      }
    `}
`;

export const HeartWrapped = styled.div`
  position: absolute;
  right: 5px;
  bottom: 2px;
  z-index: 1;
`;
