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
      height: 300px;
      padding: 10px;
    `};
`;

export default Card;