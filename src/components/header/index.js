import React from 'react';
import styled from 'styled-components';

import Logo from '../../atoms/logo';

const StyledHeader = styled.header`
    color: #282c34;
    padding: 1vmin 2vmin;
    min-height: 15vh;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
    font-size: calc(10px + 2vmin);
`;

const StyledLink = styled.h2`
    font-size: 5vmin;
    cursor: pointer;
`;

const Header = ({onChangeRoute, route}) => {
    const link = route.replace(/_/g, ' ');
    const logoProps = { onChangeRoute };
    
    return (
        <StyledHeader className="app-header">
            <Logo {...logoProps}/>
            <StyledLink onClick={() => onChangeRoute(route)}>{link}</StyledLink>
        </StyledHeader>
    );
}

export default Header;