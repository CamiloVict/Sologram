import styled, { css } from "styled-components";

export const ContainerPage = styled.div`
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100vw;
  padding-top: 5px;
  overflow: hidden;
  @media (max-width: 500px) {
    justify-content: flex-start;
    flex-direction: column;
  }
`;

export const ContainerForm = styled.div<{ width?: string; height?: string; }>`
  height: max-content;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;

  ${(props) =>
    props &&
    css`
       {
        width: ${props.width};
        height: ${props.height};
      }
    `}
  @media (max-width: 500px) {
  }
`;

export const Label = styled.label`
  font-size: 12px;
  text-align: center;
  width: 40%;

  @media (max-width: 500px) {
    width: 90%;
  }
`;

export const Input = styled.input<{ width?: string; margin?: string; type?: string }>`
  color: #333;
  font-size: 1.2rem;
  border-radius: 0.2rem;
  border: 1px solid #f1ece1;
  display: block;
  transition: all 0.3s;
  font-size: 18px;
  width: 40%;
  padding: 0 5px;
  ${(props) =>
    props &&
    css`
       {
        type: ${props.type}
        margin-bottom: ${props.margin};
        width: ${props.width};
      }
    `}
  @media (max-width: 500px) {
    width: 90%;
  }
`;

export const Button = styled.button<{width?:string}>`
  border-radius: 5px;
  cursor: pointer;
  margin: 5px 0;
  background-color: #191919;
  color: #f1ece1;
  padding: 8px;
  width: 40%;
  ${(props) =>
    props &&
    css`
       {
        width: ${props.width};
      }
    `}
  @media (max-width: 500px) {
    width: 90%;
  }
`;

export const Division = styled.button`
  @media (max-width: 500px) {
    height: max-content;
    width: 100vw;
  }
  width: 50%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  align-items: center;
`;
