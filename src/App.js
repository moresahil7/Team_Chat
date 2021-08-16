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


const App = () => {
  const [user, loading] = useAuthState(auth);
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
