import React from "react";
import styled from "styled-components";
import { Avatar } from "@material-ui/core";
import { AccessTime, HelpOutline } from "@material-ui/icons";
import { Search } from "@material-ui/icons";
import { useAuthState } from "react-firebase-hooks/auth";
import { auth } from "../firebase";

const Header = () => {
  const[user] = useAuthState(auth)

console.log('user is', user);


  return (
    <HeaderContainer>
      {/*Header Left */}
      <HeaderLeft>
        <HeaderAvatar 
        onClick={() => auth.signOut()} 
        alt={user?.displayName}
        src={user?.photoURL}
        />
        <AccessTime />
      </HeaderLeft>
      {/*Header Search */}

      <HeaderSearch>
        <Search />
        <input placeholder="Team Chat" />
      </HeaderSearch>
      {/*Header Right */}
      <HeaderRight>
        <HelpOutline />
      </HeaderRight>
    </HeaderContainer>
  );
};

export default Header;

const HeaderContainer = styled.div`
  display: flex;
  position: fixed;
  width: 100%;
  align-items: center;
  justify-content: space-between;
  padding: 10px 0;
  background-color: var(--chat-color);
  color: white;
`;

const HeaderLeft = styled.div`
  flex: 0.3;
  display: flex;
  align-items: center;

  > .MuiSvgIcon-root {
    margin-left: auto;
    margin-right: 30px;
  }
`;
const HeaderRight = styled.div`
  flex: 0.3;
  display: flex;
  align-items: center;
  margin-left: 10vh;

  > .MuiSvgIcon-root {
    margin-left: auto;
    margin-right: 20px;
  }
`;

const HeaderAvatar = styled(Avatar)`
  cursor: pointer;
  margin-left: 5px;

  :hover {
    opacity: 0.8;
  }
`;

const HeaderSearch = styled.div`
  flex: 0.4;
  opacity: 1;
  border-radius: 5px;
  background-color: #421f44;
  text-align: center;
  display: flex;
  padding: 0 50px;
  color: gray;
  border: 1px gray solid;

  > input {
    background-color: transparent;
    border: none;
    text-align: center;
    min-width: 30vw;
    outline: 0;
    color: white;
  }
`;
