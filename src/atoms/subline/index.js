import styled, {css} from 'styled-components';

const Subline = styled.h2`
    font-weight: 600;
    color: #586F72;
    margin-left: 40px;
    font-size: 2.5em;
    text-align: left;
    @media (max-width: 768px) {
    text-align: center;
    margin: 0;
  }

  ${props =>
    props.formLabel &&
    css`
        font-size: 3vmin;
        text-align: center;
    `};
`;

export default Subline;
