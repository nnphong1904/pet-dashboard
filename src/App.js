import React from 'react';
import Dashboard from './components/Dashboard/Dashboard.jsx'
import Login from './components/Login/Login.jsx';
import { Provider } from 'react-redux'
import {createStore} from 'redux'
import {
   BrowserRouter as Router,
   Switch,
   Route
 } from "react-router-dom";
import reducers from './components/Redux/reducer'
const App = ()=>{
   
  return (
    <Provider store={createStore(reducers)}>
      <Router>
         <Switch>
          <Route path="/login" exact>
            <Login /> 
          </Route>
          <Route path="/" exact>
            <Dashboard/>
          </Route>   
        </Switch>
      </Router>
    </Provider>
  );
}

export default App;
