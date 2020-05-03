import styled, { css } from 'styled-components';

const Button = styled.button`
    width: 20%;
    min-width: 150px;
    height: 35px;
    margin: 25px auto;
    background-color: rgba(0, 0, 0, 0.1);
    border: 2px solid #000;
    border-radius: 4px;
    font-weight: 900;
    font-size: 1.2em;
    cursor: pointer;
    :hover {
        background-color: rgba(0, 0, 0, 0.5);
        color: #fff;
    }

    ${props =>
    props.vote &&
    css`
        width: 10%;
        min-width: 150px;
    `};
`;

export default Button;