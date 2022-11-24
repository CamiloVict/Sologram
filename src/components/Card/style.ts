import styled, { css } from "styled-components";
import { fadeIn } from "../../styles/animations";

export const Article = styled.article`
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  margin-bottom: 15px;
`;
export const ImgWrapper = styled.div`
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  overflow: hidden;
  position: relative;
  width: 100%;
  margin: 0;
  height: 340px;
  object-fit: contain;
  background-color: black;
`;

export const Image = styled.img<{ filter: string }>`
  ${fadeIn() as any}
  /* aspect-ratio: 1/1; */
  /* box-shadow: 0 10px 14px rgba(0, 0, 0, 0.2); */
  height: 100%;
  position: absolute;
  top: 0;
  /* width: 100%; */

  ${(props) =>
    props.filter &&
    css`
       {
        filter: ${props.filter};
      }
    `}
`;

export const ArticleInfo = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  height: 35px;
  padding-left: 3px;
  padding-bottom: 3px;
`;

export const ImageInfo = styled.h3<{ size: string; color: string }>`
  height: fit-content;
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
