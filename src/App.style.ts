import styled from "styled-components";

export const AppContainer = styled.div`
    height: 100vh;
    display: flex;
    justify-content: center;
    align-items: center;
`;

export const Calculator = styled.div`
    background-color: #fbfafa;
    width: 30%;
    margin: auto;
    padding: 25px;
    border-radius:5px;
`;

export const ButtonContainer = styled.div`
    display: grid;
    grid-template-columns: repeat(3,1fr);
    gap: 10px;
    width: 80%;
    margin: auto;
`;


