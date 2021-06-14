import React from 'react';
import './App.css';
import Home from "./components/home"
import Login from "./components/login"
import Registration from "./components/registration"
import {
    BrowserRouter as Router,
    Switch,
    Route,
  } from "react-router-dom";
// import postForm from './components/postForm';




function App() {
    
    return(
        <Router>
            <Switch>
                <Route exact path="/">
                    <Login/>
                </Route>
                <Route path="/signup">
                    <Registration />
                </Route>
                <Route path="/home">
                    <Home/>
                </Route>
            </Switch>
        </Router>
        
    );

    // return (
    //     <div style={{height:"100vh"}} className="p-4 d-flex flex-column flex-md-row w-100 justify-content-around align-items-center">
    //         <Posts />
    //         <PostForm />
    //     </div>
    // );
}

export default App;
