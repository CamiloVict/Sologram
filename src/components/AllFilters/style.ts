import styled from "styled-components";


export const Filters = styled.section`
  height: 90px;
  margin: 5px 0;
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  overflow-x: scroll;
  overflow-y: hidden;
  &::-webkit-slider-thumb {
     -webkit-appearance: none;
  }
`;