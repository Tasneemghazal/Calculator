import styled from "styled-components";
import { theme } from "../../styles/theme";

export const EquButton = styled.button`
    grid-column: span 3;
    background-color: ${theme.color.lime_green};
    border: none;
    border-radius: 5px;
    padding:10px;
    color: ${theme.color.white};
    cursor: pointer;
`;