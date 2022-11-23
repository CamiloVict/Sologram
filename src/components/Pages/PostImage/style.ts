import styled from "styled-components";

export const ContainerForm = styled.div`
  height: max-content;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
`;

export const Label = styled.label`
  font-size: 12px;
`;

export const Input = styled.input`
  color: #333;
  font-size: 1.2rem;
  border-radius: 0.2rem;
  border: 1px solid #f1ece1;
  width: 100%;
  display: block;
  transition: all 0.3s;
  font-size: 18px;
`;

export const Button = styled.button`
  border-radius: 5px;
  cursor: pointer;
  padding: 8px;
  margin: 5px 0;
  width: 100%;
  background-color: #191919;
  color: #f1ece1;
`;
