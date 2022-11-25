import styled, { css } from "styled-components";
import { fadeIn } from "../../styles/animations";

export const Article = styled.article`
  @media (max-width: 500px) {
    ${fadeIn() as any}
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    margin-bottom: 15px;
  }
`;

export const ImgWrapper = styled.div`
  
  width: 340px;
  height: 340px;
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  overflow: hidden;
  position: relative;
  background-color: black;

  @media (max-width: 500px) {
    width: 100vw;
    margin: 0;
    height: 340px;
    object-fit: contain;
  }
`;

export const Image = styled.img<{ filter: string }>`
  /* @media (max-width: 500px) { */
  height: 100%;
  position: absolute;
  top: 0;
  /* } */
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
