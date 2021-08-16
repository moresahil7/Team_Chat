import React from "react";
// import { Counter } from './features/counter/Counter';
import "./App.css";
import styled from "styled-components";
import Header from "./components/Header";
import SideBar from "./components/SideBar";
import Chat from "./components/Chat";
import { useAuthState } from "react-firebase-hooks/auth";

import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  useParams,
} from "react-router-dom";

import { auth } from "./firebase";
import Login from "./components/Login";
import Spinner from "react-spinkit";

const App = () => {
  const [user, loading] = useAuthState(auth);
  if(loading){
    return(
      <AppLoading>
        <ApploadingContent>
          <img src="https://lh3.googleusercontent.com/proxy/gNs6g5TDTZe4NVbWzCjn4haAODPCRVDheOxknfrVYPyhqr3TINMvMyOclN4MPPdvDQzH2r9fkAuoXZ6FAt6Lv1su1LdGRkPfcz-otVs0HL7gwcafKlKMDj8AgxDNc-TlXbuMoF06rXtDoudWquryqQOdKRbnETIaZg" 
          alt="" />
          <Spinner name="ball-spin-fade-loader" 
          color="purple" fadeIn="none"
          />
          




        </ApploadingContent>
      </AppLoading>
    )
  }
  return (
    <div className="app">
      <Router>
        { !user ?(
          <Login/>
        ):(

       
        <>
          <Header />
          <AppBody>
            <SideBar/>
            <Switch>
              <Route path="/" exact>
                <Chat/>
              </Route>
            </Switch>
          </AppBody>
        </>
        )};
      </Router>
    </div>
  );
};

export default App;


const AppBody = styled.div`
  display: flex;
  height: 100vh;
`;

const ApploadingContent = styled.div`
display: flex;
  
  text-align:center;
  padding-bottom: 150px;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  >img{
    height: 250px;
    padding: 20px;
    margin-bottom: 30px;
  }
`;

const AppLoading = styled.div`
  display: grid;
  place-items: center;
  height: 100vh;
  width: 100%;
`;