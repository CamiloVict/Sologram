import styled, { css } from "styled-components";
import { fadeIn } from "../../styles/animations";

export const Article = styled.article`
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  /* background-color: black; */
  border-radius: 10px;
`;
export const ImgWrapper = styled.div`
  border-radius: 10px;
  display: flex;
  align-items: center;
  justify-content: center;
  overflow: hidden;
  position: relative;
  width: 100%;
  margin: 0;
  height: 250px;
`;

export const Image = styled.img<{ filter: string }>`
  ${fadeIn() as any}
  aspect-ratio: 1/1;
  box-shadow: 0 10px 14px rgba(0, 0, 0, 0.2);
  height: 100%;
  object-fit: cover;
  position: absolute;
  top: 0;
  width: 100%;
  object-fit: cover;

  ${(props) =>
    props.filter &&
    css`
       {
        filter: ${props.filter};
      }
    `}
`;

export const ArticleInfo = styled.div`
  height: 35px; ;
`;

export const ImageInfo = styled.h3<{ size: string }>`
  height: fit-content;
  ${(props) =>
    props.size &&
    css`
       {
        font-size: ${props.size};
      }
    `}
`;
