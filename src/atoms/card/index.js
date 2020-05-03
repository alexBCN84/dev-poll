import styled, { css } from 'styled-components';

const Card = styled.article`
    background-color: rgb(255,248,220, 0.5);
    width: 100%;
    box-shadow: 0 6px 20px 0 rgba(0, 0, 0, 0.19);
    border-radius: 5px;
    display: flex;
    flex-direction: column;
    justify-content: center;

    ${props =>
    props.questionOverview &&
    css`
        height: 370px;
        transition: background-color 0.1s, color 0.1s;
        :hover {
            background-color: rgba(0, 0, 0, 0.5);
            color: #ffffff;
        } 
    `};

    ${props =>
    (props.detailsCard || props.formCard) &&
    css`
        width: 95%;
        margin: 30px auto;
        padding-top: 30px;
    `};
`;

export default Card;