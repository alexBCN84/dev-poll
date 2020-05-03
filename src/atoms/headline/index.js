import styled from 'styled-components';

const Headline = styled.h1`
    font-weight: 900;
    margin-left: 40px;
    font-size: 3.5em;
    text-align: left;
    @media (max-width: 768px) {
    text-align: center;
    margin: 0;
  }
`;

export default Headline;
