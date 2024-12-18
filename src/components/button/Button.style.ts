import styled from "styled-components";
import { theme } from "../../styles/theme";

export const NumberButton = styled.button`
  background-color: ${theme.color.light_orchid};
  color: #fff;
  font-weight: bold;
  padding: 10px;
  border: none;
  border-radius: 5px;
  margin: 10px;
  cursor: pointer;

  &.equal{
    grid-column: span 3;
    background-color: aqua;
    background-color: ${theme.color.lime_green};
  }

  &.operator{
    background-color: ${theme.color.light_spring_green};
  }
`;
