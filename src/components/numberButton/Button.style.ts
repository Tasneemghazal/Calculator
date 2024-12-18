import styled from "styled-components";
import { theme } from "../../styles/theme";

export const NumberButton = styled.button`
  color: ${theme.color.white};
  font-weight: bold;
  padding: 10px;
  border: none;
  border-radius: 5px;
  margin: 10px;
  cursor: pointer;

  &.num{
    background-color: ${theme.color.light_orchid};
    &:hover{
      background-color: ${theme.color.dark_orchid};
    }
  }

  &.equal{
    grid-column: span 3;
    background-color: aqua;
    background-color: ${theme.color.lime_green};
    &:hover{
      background-color: ${theme.color.dark_lime_green};
    }
  }

  &.operator{
    background-color: ${theme.color.light_spring_green};
    &:hover{
      background-color: ${theme.color.dark_light_spring_green};
    }
  }
`;
