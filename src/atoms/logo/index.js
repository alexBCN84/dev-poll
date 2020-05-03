import React from 'react';
import styled from 'styled-components';

import logo from '../../assets/logo.svg';
import { QUESTIONS } from '../../utils/constants';

const StyledLogo = styled.img`
    height: 100%;
    pointer-events: none;
`;

const StyledTitle = styled.h1`
    font-size: 4vmin;
    font-weight: 900;
    color: #E7F0EF;
    letter-spacing: 0.1vmin;
    font-family: Arial, Helvetica, sans-serif;
    height: 100%;
    display: inline-block;
    margin-left: 20px;
    vertical-align: middle;
`;

const StyledLogoWrapper = styled.div`
    height: 10vmin; 
    display: flex;
    cursor: pointer;

`;

const Logo = ({onChangeRoute}) => (
    <StyledLogoWrapper onClick={() => onChangeRoute(QUESTIONS)}>
        <StyledLogo src={logo} className="app-logo" alt="logo" />
        <StyledTitle>{'DEV POLL'}</StyledTitle>
    </StyledLogoWrapper>
);

export default Logo;