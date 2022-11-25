import styled, { css } from "styled-components";

export const Container = styled.section`
    overflow-x: hidden;

  @media (max-width: 500px) { 
    overflow-y: scroll;
    padding-top: 50px;
    display: flex;
    flex-direction: column;
    justify-content: space-evenly;
    padding-bottom: 50px;
  }
`;
