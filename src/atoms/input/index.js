import styled from 'styled-components';

const Input = styled.input`
    width: 40%;
    height: 25px;
    min-width: 200px;
    margin: 10px auto;
    border: 1px solid #000;
    border-radius: 2px;
    padding-left: 10px;
    :focus {
        background-color: rgba(0, 0, 0, 0.5);
        color: #fff;
        font-weight: bolder;
    }
`

export default Input