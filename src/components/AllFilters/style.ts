import styled from "styled-components";

export const Filters = styled.section`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-evenly;
  align-items: center;
  overflow-y: hidden;
  overflow-x: scroll;
  height: 350px;
  width: 450px;
  padding: 0 15px;

  @media (max-width: 500px) {
    flex-wrap: nowrap;
    overflow-x: scroll;
    justify-content: flex-start;
    height: 90px;
    margin: 5px 0;
    &::-webkit-slider-thumb {
      -webkit-appearance: none;
    }
    width: 100vw;
  }
`;
