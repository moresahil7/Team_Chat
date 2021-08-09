import React from 'react';
// import { Counter } from './features/counter/Counter';
import './App.css';
import Header from './components/Header';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  useParams
} from "react-router-dom";
const App = () => {
  return (
    <div className="app">
      
      <Router>
      <>
       

      
        <Switch>
          <Route path="/">
          <Header/>
          </Route>
        </Switch>
      </>
    </Router>
    </div>
  );
}

export default App;
