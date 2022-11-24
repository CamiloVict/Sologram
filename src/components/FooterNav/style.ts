import styled, { css } from "styled-components";
import { Link as LinkRouter } from "react-router-dom";

export const Header = styled.header`
  border-top: 1px solid #f1ece1;
  height: 45px;
  width: 100%;
  padding: 5px;
  display: flex;
  align-items: center;
  align-items: center;
  background: #fcfcfc;
  bottom: 0;
  justify-content: space-around;
  left: 0;
  margin: 0 auto;
  position: fixed;
  right: 0;
  width: 100%;
  z-index: 1000;
`;

export const Link = styled(LinkRouter)<{
  size?: string;
  color: string;
  border: string;
}>`
  ${(props) =>
    props.border &&
    css`
       {
        border-bottom: 1px solid ${props.border};
      }
    `}
`;
