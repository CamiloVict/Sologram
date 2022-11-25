import styled, { css } from "styled-components";

export const ContainerList = styled.section`
    display: grid;
    grid-template-columns: repeat(4 , 1fr);
    gap: 10px;
    width: 100vw;
    padding: 70px 5px;
  @media (max-width: 500px) {
    display: flex;
    flex-direction: column;
    margin: 0;
    padding: 0;
  }
`;
