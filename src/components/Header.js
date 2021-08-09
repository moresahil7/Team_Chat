import React from 'react';
import styled from 'styled-components';
import { Avatar } from '@material-ui/core';


const Header = () => {
    return (
        <HeaderContainer>
            Header
            {/*Header Left */}
            <HeaderLeft>

            </HeaderLeft>
            {/*Header Search */}
            {/*Header Right */}
        </HeaderContainer>
    )
}


export default Header

const HeaderContainer = styled.div`
    color : red;
`;


const HeaderLeft = styled.div`

`;

const HeaderAvatar = styled(Avatar)``;