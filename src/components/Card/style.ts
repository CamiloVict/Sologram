import styled, { css } from "styled-components";
import { fadeIn } from "../../styles/animations";

export const Article = styled.article`
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  background-color: transparent;
  min-height: 300px;
  border-radius: 10px;
  margin-top: 8px;
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
  height: 350px;
`;

export const Image = styled.img`
  ${fadeIn() as any}
  aspect-ratio: 1/1;
  box-shadow: 0 10px 14px rgba(0, 0, 0, 0.2);
  height: 100%;
  object-fit: cover;
  position: absolute;
  top: 0;
  width: 100%;
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
